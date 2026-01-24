import { useState } from 'react'
import { submitNewClientRequest } from '../services/api'
import './NewClient.css'

function NewClient() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    concerns: '',
    previousTherapy: '',
    howDidYouHear: '',
    additionalInfo: ''
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
    
    if (!formData.concerns.trim()) {
      newErrors.concerns = 'Please describe your primary concerns'
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
      const response = await submitNewClientRequest(formData)
      
      setSubmitStatus({
        type: 'success',
        message: 'Your request has been submitted successfully! We will review your information and contact you within 24-48 hours to discuss next steps.'
      })
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        age: '',
        concerns: '',
        previousTherapy: '',
        howDidYouHear: '',
        additionalInfo: ''
      })
      
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'There was an error submitting your request. Please try again or call us directly at (555) 123-4567.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="new-client">
      <div className="container">
        <div className="page-header">
          <h1>New Client Request</h1>
          <p>
            Thank you for considering therapy with Aligned Heart.
            Please complete this form to help us understand your needs better.
          </p>
        </div>

        <div className="new-client-content">
          <div className="client-info">
            <div className="info-card">
              <h3>Getting Started</h3>
              <p>
                This form helps us understand your background and therapeutic needs.
                All information is confidential and will only be used to provide you
                with the best possible care.
              </p>
            </div>
            
            <div className="info-card">
              <h3>What Happens Next?</h3>
              <ol>
                <li>We'll review your information within 24-48 hours</li>
                <li>We'll contact you to discuss your needs</li>
                <li>If we're a good fit, we'll schedule your first session</li>
                <li>If not, we'll help you find the right therapist</li>
              </ol>
            </div>

          </div>

          <div className="client-form-container">
            <form onSubmit={handleSubmit} className="client-form">
              {submitStatus && (
                <div className={`form-message ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <h3 className="form-section-title">Personal Information</h3>

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

              <div className="form-group">
                <label htmlFor="age" className="form-label">
                  Age (Optional)
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="form-input"
                  min="18"
                  max="120"
                  disabled={isSubmitting}
                />
              </div>

              <h3 className="form-section-title">Therapeutic Information</h3>

              <div className="form-group">
                <label htmlFor="concerns" className="form-label">
                  Primary Concerns *
                </label>
                <textarea
                  id="concerns"
                  name="concerns"
                  value={formData.concerns}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="What brings you to therapy? What would you like to work on?"
                  disabled={isSubmitting}
                />
                {errors.concerns && (
                  <span className="form-error">{errors.concerns}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="previousTherapy" className="form-label">
                  Previous Therapy Experience
                </label>
                <select
                  id="previousTherapy"
                  name="previousTherapy"
                  value={formData.previousTherapy}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="">Select an option</option>
                  <option value="none">No previous therapy</option>
                  <option value="past">Past therapy (not currently in therapy)</option>
                  <option value="current">Currently in therapy</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="howDidYouHear" className="form-label">
                  How did you hear about us? (Optional)
                </label>
                <select
                  id="howDidYouHear"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  className="form-select"
                  disabled={isSubmitting}
                >
                  <option value="">Select an option</option>
                  <option value="search">Internet Search</option>
                  <option value="referral">Referral from friend/family</option>
                  <option value="doctor">Doctor/Healthcare Provider</option>
                  <option value="insurance">Insurance Directory</option>
                  <option value="social">Social Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo" className="form-label">
                  Additional Information (Optional)
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Anything else you'd like us to know?"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-disclaimer">
                <p>
                  <strong>Note:</strong> This form is not for emergencies. If you are 
                  experiencing a mental health crisis, please call 988 (Suicide & Crisis Lifeline) 
                  or go to your nearest emergency room.
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit New Client Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewClient

