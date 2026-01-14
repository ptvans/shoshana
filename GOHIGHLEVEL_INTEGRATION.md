# GoHighLevel API Integration Guide

## Overview

This website integrates with GoHighLevel CRM to automatically:
- Create and update contacts
- Schedule appointments
- Add tags for lead tracking
- Create follow-up tasks and opportunities
- Store client intake information

## API Configuration

### Required Credentials

You need two pieces of information from your GoHighLevel account:

1. **API Key** - For authentication
2. **Location ID** - Your practice/business location identifier

### How to Get Your API Key

1. Log in to [GoHighLevel](https://app.gohighlevel.com)
2. Click on **Settings** (gear icon)
3. Navigate to **API Keys**
4. Click **Create API Key** or copy an existing one
5. Name it something like "Website Integration"
6. Copy the key (you won't be able to see it again!)

### How to Get Your Location ID

1. In GoHighLevel, go to **Settings**
2. Look for **Location ID** in your account information
3. It's usually a long alphanumeric string
4. Copy this value

### Adding Credentials to the Site

Create a `.env` file in the project root:

```bash
VITE_GHL_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
VITE_GHL_LOCATION_ID=xxxxxxxxxxxxxxxxxxx
```

**Important:** Restart the dev server after adding credentials!

## API Endpoints Used

### 1. Create/Update Contact

**Endpoint:** `POST /contacts`

**Used When:**
- Someone books an appointment
- Someone submits a new client request

**Data Sent:**
```json
{
  "locationId": "your-location-id",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "(555) 123-4567",
  "tags": ["website-appointment", "new-client"]
}
```

### 2. Create Appointment

**Endpoint:** `POST /appointments`

**Used When:**
- Someone books an appointment

**Data Sent:**
```json
{
  "locationId": "your-location-id",
  "contactId": "contact-id-from-step-1",
  "title": "Introductory Session",
  "startTime": "2026-01-15T14:00:00",
  "endTime": "2026-01-15T14:50:00",
  "appointmentStatus": "pending",
  "notes": "Client notes here"
}
```

### 3. Add Note to Contact

**Endpoint:** `POST /contacts/{contactId}/notes`

**Used When:**
- Someone submits a new client request

**Data Sent:**
```json
{
  "body": "New Client Request:\n\nPrimary Concerns: Anxiety and stress management\n\nPrevious Therapy: Past therapy (not currently in therapy)\n\nAdditional Info: Prefers morning appointments"
}
```

### 4. Create Opportunity

**Endpoint:** `POST /opportunities`

**Used When:**
- Someone submits a new client request

**Data Sent:**
```json
{
  "locationId": "your-location-id",
  "contactId": "contact-id",
  "name": "New Client Inquiry - John Doe",
  "pipelineStageId": "new-inquiry",
  "status": "open"
}
```

## Tag System

The integration automatically tags contacts for easy organization:

### Appointment Bookings
- `website-appointment` - Came through the appointment form
- `new-client` - First-time client

### New Client Requests
- `website-new-client` - Came through new client form
- `new-inquiry` - Needs follow-up

You can use these tags in GoHighLevel to:
- Create workflows/automations
- Filter and segment contacts
- Track lead sources
- Set up follow-up sequences

## Data Flow

### Appointment Booking Flow

```
1. User fills out appointment form
   ↓
2. Site validates form data
   ↓
3. API creates/updates contact in GHL
   ↓
4. API creates appointment for contact
   ↓
5. API adds tags to contact
   ↓
6. User sees success message
   ↓
7. You see new appointment in GHL calendar
```

### New Client Request Flow

```
1. User fills out new client form
   ↓
2. Site validates form data
   ↓
3. API creates/updates contact in GHL
   ↓
4. API adds note with client concerns
   ↓
5. API creates opportunity for follow-up
   ↓
6. API adds tags to contact
   ↓
7. User sees success message
   ↓
8. You see new contact/opportunity in GHL
```

## Demo Mode

**When API credentials are not configured**, the site runs in demo mode:

- Forms still work and validate
- Success messages still appear
- No actual API calls are made
- Console shows "Running in demo mode" messages
- Perfect for development and testing

**Demo mode activates when:**
- No `.env` file exists
- `VITE_GHL_API_KEY` is empty
- `VITE_GHL_LOCATION_ID` is empty
- API authentication fails

## Error Handling

The integration includes robust error handling:

### Authentication Errors (401)
- Falls back to demo mode
- Shows success message to user
- Logs warning to console

### Network Errors
- Shows error message to user
- Suggests calling directly
- Logs error details to console

### Validation Errors
- Client-side validation prevents most issues
- Server errors are caught and handled gracefully

## Testing the Integration

### Test in Demo Mode First

1. **Without credentials**, fill out forms
2. Check browser console for "demo mode" messages
3. Verify forms work and validate correctly

### Test with Real API

1. **Add credentials** to `.env`
2. **Restart dev server**
3. **Submit a test appointment:**
   - Use your own email/phone
   - Set date to tomorrow
   - Submit form
4. **Check GoHighLevel:**
   - Look for new contact
   - Check calendar for appointment
   - Verify tags are applied
5. **Submit a test new client request:**
   - Use different info
   - Submit form
6. **Check GoHighLevel:**
   - Look for new contact
   - Check for note with concerns
   - Verify opportunity was created

## Custom Fields

The new client form collects additional data stored in custom fields:

- `age` - Client age
- `concerns` - Primary therapeutic concerns
- `previousTherapy` - Past therapy experience
- `insurance` - Insurance provider
- `emergencyContact` - Emergency contact info
- `howDidYouHear` - Referral source
- `additionalInfo` - Any additional notes

**Note:** You may need to create these custom fields in GoHighLevel first, or the API will store them in the contact's general data.

## Security Considerations

### API Key Security
- ✅ Never commit `.env` to version control
- ✅ `.gitignore` already excludes `.env`
- ✅ API key only accessible server-side in production
- ⚠️ In development, keys are exposed in browser (use test account)

### Production Deployment
For production, consider:
1. **Backend proxy** - Hide API keys completely
2. **Environment variables** - Set on hosting platform
3. **Rate limiting** - Prevent abuse
4. **CAPTCHA** - Prevent spam submissions

### HTTPS Required
- GoHighLevel API requires HTTPS
- Vite dev server uses HTTP (okay for testing)
- Production deployment **must** use HTTPS

## Troubleshooting

### "API not configured" Message
- Check `.env` file exists in project root
- Verify variable names match exactly
- Restart dev server

### Authentication Failed
- Verify API key is correct and active
- Check GoHighLevel account is not suspended
- Try generating a new API key

### Contact Created but No Appointment
- Check Location ID is correct
- Verify date/time format
- Look in GoHighLevel's failed tasks

### Custom Fields Not Saving
- Create custom fields in GoHighLevel first
- Match field names exactly
- Check API documentation for field limits

## API Rate Limits

GoHighLevel has rate limits on API requests:
- Varies by plan tier
- Typically 100-1000 requests per minute
- Site makes 2-3 requests per form submission
- More than sufficient for typical website traffic

## Next Steps

1. ✅ Get API credentials from GoHighLevel
2. ✅ Add to `.env` file
3. ✅ Restart dev server
4. ✅ Test with real data
5. ✅ Verify data appears in GoHighLevel
6. ✅ Set up automations/workflows in GHL
7. ✅ Deploy to production

## Resources

- [GoHighLevel API Documentation](https://highlevel.stoplight.io/)
- [GoHighLevel Support](https://support.gohighlevel.com/)
- [API Status Page](https://status.gohighlevel.com/)

---

**Questions?** Check the main README.md or GoHighLevel's documentation.

