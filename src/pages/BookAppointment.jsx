import { useState } from 'react'
import { createAppointment } from '../services/api'
import './BookAppointment.css'

function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    sessionType: 'intro',
    notes: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    
    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Preferred date is required'
    }
    
    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Preferred time is required'
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const response = await createAppointment(formData)
      
      setSubmitStatus({
        type: 'success',
        message: 'Appointment request submitted successfully! We will contact you shortly to confirm your appointment.'
      })
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        sessionType: 'intro',
        notes: ''
      })
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again or call us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="book-appointment">
      <div className="container">
        <div className="page-header">
          <h1>Book an Appointment</h1>
          <p>Schedule your introductory session to get started on your wellness journey.</p>
        </div>

        <div className="appointment-content">
          <div className="appointment-info">
            <div className="info-card">
              <h3>What to Expect</h3>
              <ul>
                <li>
                  <strong>Introductory Session (50 minutes):</strong> We'll discuss your
                  concerns, goals, and determine if we're a good fit.
                </li>
                <li>
                  <strong>Confidential:</strong> Everything discussed in therapy is
                  confidential and protected by law.
                </li>
                <li>
                  <strong>No Pressure:</strong> This is your time to explore therapy
                  without any obligation to continue.
                </li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>Session Options</h3>
              <ul>
                <li><strong>In-Person:</strong> Visit our comfortable office space</li>
                <li><strong>Telehealth:</strong> Connect from the comfort of your home</li>
              </ul>
            </div>
          </div>

          <div className="appointment-form-container">
            <form onSubmit={handleSubmit} className="appointment-form">
              {submitStatus && (
                <div className={`form-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="form-input"
                    disabled={isSubmitting}
                  />
                  {errors.firstName && (
                    <span className="form-error">{errors.firstName}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="form-input"
                    disabled={isSubmitting}
                  />
                  {errors.lastName && (
                    <span className="form-error">{errors.lastName}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="(555) 123-4567"
                    disabled={isSubmitting}
                  />
                  {errors.phone && (
                    <span className="form-error">{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="preferredDate" className="form-label">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="form-input"
                    min={new Date().toISOString().split('T')[0]}
                    disabled={isSubmitting}
                  />
                  {errors.preferredDate && (
                    <span className="form-error">{errors.preferredDate}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="preferredTime" className="form-label">
                    Preferred Time *
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    className="form-select"
                    disabled={isSubmitting}
                  >
                    <option value="">Select a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                  {errors.preferredTime && (
                    <span className="form-error">{errors.preferredTime}</span>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="sessionType" className="form-label">
                  Session Type *
                </label>
                <select
                  id="sessionType"
                  name="sessionType"
                  value={formData.sessionType}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="intro">Introductory Session</option>
                  <option value="in-person">In-Person Session</option>
                  <option value="telehealth">Telehealth Session</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="notes" className="form-label">
                  Additional Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Any specific concerns or questions you'd like to discuss?"
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Appointment'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookAppointment

