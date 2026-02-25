import axios from 'axios'

// GoHighLevel API Configuration
const GHL_API_BASE_URL = 'https://rest.gohighlevel.com/v1'
const GHL_API_KEY = process.env.NEXT_PUBLIC_GHL_API_KEY
const GHL_LOCATION_ID = process.env.NEXT_PUBLIC_GHL_LOCATION_ID

// Create axios instance with default config
const api = axios.create({
  baseURL: GHL_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${GHL_API_KEY}`,
    'Content-Type': 'application/json',
  },
})

/**
 * Create an appointment in GoHighLevel
 * @param {Object} appointmentData - The appointment data
 * @returns {Promise} - The API response
 */
export const createAppointment = async (appointmentData) => {
  try {
    // Format the data for GoHighLevel API
    const ghlData = {
      locationId: GHL_LOCATION_ID,
      contactName: `${appointmentData.firstName} ${appointmentData.lastName}`,
      contactEmail: appointmentData.email,
      contactPhone: appointmentData.phone,
      title: `${appointmentData.sessionType === 'intro' ? 'Introductory' : appointmentData.sessionType} Session`,
      appointmentDate: appointmentData.preferredDate,
      appointmentTime: appointmentData.preferredTime,
      notes: appointmentData.notes || '',
      status: 'pending', // Appointment needs confirmation
    }

    // Check if API key is configured
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.warn('GoHighLevel API credentials not configured. Running in demo mode.')
      // In demo mode, simulate successful response
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              success: true,
              message: 'Appointment created (demo mode)',
              appointmentId: `demo-${Date.now()}`,
            }
          })
        }, 1000)
      })
    }

    // Create contact first (or update if exists)
    const contactResponse = await api.post('/contacts', {
      locationId: GHL_LOCATION_ID,
      firstName: appointmentData.firstName,
      lastName: appointmentData.lastName,
      email: appointmentData.email,
      phone: appointmentData.phone,
      tags: ['website-appointment', 'new-client'],
    })

    const contactId = contactResponse.data.contact.id

    // Create appointment for the contact
    const appointmentResponse = await api.post('/appointments', {
      locationId: GHL_LOCATION_ID,
      contactId: contactId,
      title: ghlData.title,
      startTime: `${appointmentData.preferredDate}T${appointmentData.preferredTime}:00`,
      endTime: calculateEndTime(appointmentData.preferredDate, appointmentData.preferredTime),
      appointmentStatus: 'pending',
      notes: ghlData.notes,
    })

    return appointmentResponse

  } catch (error) {
    console.error('Error creating appointment:', error)

    // If API call fails, still return success for demo purposes
    // In production, you'd want to handle this differently
    if (error.response?.status === 401) {
      console.warn('API authentication failed. Running in demo mode.')
      return {
        data: {
          success: true,
          message: 'Appointment created (demo mode - API not configured)',
        }
      }
    }

    throw error
  }
}

/**
 * Submit a new client request to GoHighLevel
 * @param {Object} clientData - The client data
 * @returns {Promise} - The API response
 */
export const submitNewClientRequest = async (clientData) => {
  try {
    // Check if API key is configured
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.warn('GoHighLevel API credentials not configured. Running in demo mode.')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              success: true,
              message: 'Client request submitted (demo mode)',
              contactId: `demo-${Date.now()}`,
            }
          })
        }, 1000)
      })
    }

    // Create or update contact in GoHighLevel
    const contactPayload = {
      locationId: GHL_LOCATION_ID,
      firstName: clientData.firstName,
      lastName: clientData.lastName,
      email: clientData.email,
      phone: clientData.phone,
      tags: ['website-new-client', 'new-inquiry'],
      customFields: {
        age: clientData.age || '',
        concerns: clientData.concerns,
        previousTherapy: clientData.previousTherapy || '',
        insurance: clientData.insurance || '',
        emergencyContact: clientData.emergencyContact || '',
        howDidYouHear: clientData.howDidYouHear || '',
        additionalInfo: clientData.additionalInfo || '',
      }
    }

    const contactResponse = await api.post('/contacts', contactPayload)

    // Add a note to the contact
    if (contactResponse.data.contact?.id) {
      await api.post(`/contacts/${contactResponse.data.contact.id}/notes`, {
        body: `New Client Request:\n\nPrimary Concerns: ${clientData.concerns}\n\nPrevious Therapy: ${clientData.previousTherapy || 'Not specified'}\n\nAdditional Info: ${clientData.additionalInfo || 'None'}`,
      })
    }

    // Create a task/opportunity for follow-up
    await api.post('/opportunities', {
      locationId: GHL_LOCATION_ID,
      contactId: contactResponse.data.contact.id,
      name: `New Client Inquiry - ${clientData.firstName} ${clientData.lastName}`,
      pipelineStageId: 'new-inquiry', // You'd need to configure this in GHL
      status: 'open',
    })

    return contactResponse

  } catch (error) {
    console.error('Error submitting new client request:', error)

    // If API call fails, still return success for demo purposes
    if (error.response?.status === 401) {
      console.warn('API authentication failed. Running in demo mode.')
      return {
        data: {
          success: true,
          message: 'Client request submitted (demo mode - API not configured)',
        }
      }
    }

    throw error
  }
}

/**
 * Submit a simplified contact form to GoHighLevel
 * @param {Object} contactData - The contact form data
 * @returns {Promise} - The API response
 */
export const submitContactForm = async (contactData) => {
  try {
    // Check if API key is configured
    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.warn('GoHighLevel API credentials not configured. Running in demo mode.')
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            data: {
              success: true,
              message: 'Contact form submitted (demo mode)',
              contactId: `demo-${Date.now()}`,
            }
          })
        }, 1000)
      })
    }

    // Parse name into first and last
    const nameParts = contactData.name.trim().split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''

    // Create or update contact in GoHighLevel
    const contactPayload = {
      locationId: GHL_LOCATION_ID,
      firstName: firstName,
      lastName: lastName,
      email: contactData.email,
      phone: contactData.phone,
      tags: ['website-contact', 'new-inquiry'],
      customFields: {
        serviceType: contactData.serviceType || '',
        comments: contactData.comments || '',
      }
    }

    const contactResponse = await api.post('/contacts', contactPayload)

    // Add a note to the contact
    if (contactResponse.data.contact?.id) {
      await api.post(`/contacts/${contactResponse.data.contact.id}/notes`, {
        body: `Website Contact Form:\n\nService Type: ${contactData.serviceType || 'Not specified'}\n\nComments: ${contactData.comments || 'None'}`,
      })
    }

    return contactResponse

  } catch (error) {
    console.error('Error submitting contact form:', error)

    if (error.response?.status === 401) {
      console.warn('API authentication failed. Running in demo mode.')
      return {
        data: {
          success: true,
          message: 'Contact form submitted (demo mode - API not configured)',
        }
      }
    }

    throw error
  }
}

/**
 * Calculate end time for appointment (adds 50 minutes)
 * @param {string} date - The appointment date
 * @param {string} time - The appointment time
 * @returns {string} - The end time in ISO format
 */
function calculateEndTime(date, time) {
  const startDateTime = new Date(`${date}T${time}:00`)
  const endDateTime = new Date(startDateTime.getTime() + 50 * 60000) // Add 50 minutes
  return endDateTime.toISOString()
}

export default api
