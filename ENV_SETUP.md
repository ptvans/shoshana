# Environment Variables Setup

## Creating Your .env File

Since `.env` files are gitignored (for security), you need to create one manually.

### Steps:

1. **Create a new file called `.env` in the project root** (`/Users/lappy/Sites/therapist/.env`)

2. **Copy this content into the file:**

```
# GoHighLevel API Configuration
# Get your API key from: https://app.gohighlevel.com/settings/api-keys
VITE_GHL_API_KEY=

# Your GoHighLevel Location ID
# Find this in your GoHighLevel account settings
VITE_GHL_LOCATION_ID=

# Note: The site will work in demo mode without these credentials
# To enable full GoHighLevel integration, add your credentials above
```

3. **Leave the values empty for demo mode** OR **add your actual credentials** if you have a GoHighLevel account

### Demo Mode (Recommended for Testing)

If you leave the `.env` file with empty values (or don't create it at all), the website will run in **demo mode**:

- All forms work normally
- Success messages appear after submission
- No actual API calls are made to GoHighLevel
- Perfect for development and testing
- Console will show "Running in demo mode" messages

### Production Mode (With GoHighLevel)

If you add real API credentials:

1. **Get your GoHighLevel API Key:**
   - Log in to https://app.gohighlevel.com
   - Go to Settings → API Keys
   - Create a new API key or copy an existing one
   
2. **Find your Location ID:**
   - In GoHighLevel Settings
   - Look for "Location ID" in your account details

3. **Add to .env file:**
```
VITE_GHL_API_KEY=your_actual_api_key_here
VITE_GHL_LOCATION_ID=your_actual_location_id_here
```

4. **Restart the dev server** after adding credentials

### Testing

**To verify your setup:**

1. Start the dev server: `npm run dev`
2. Open browser console (F12 or Cmd+Option+I)
3. Submit a form
4. Look for console messages:
   - "Running in demo mode" = Demo mode active
   - "Appointment created" = API integration working

### Security Notes

⚠️ **NEVER commit your .env file to git**
- The `.gitignore` file already excludes `.env`
- Keep your API keys secret
- Don't share them in screenshots or code
- Use environment variables in production deployments

### Troubleshooting

**Q: I added my API keys but it's still in demo mode**
- Make sure you saved the `.env` file
- Restart the dev server (`npm run dev`)
- Check that there are no typos in the variable names

**Q: I'm getting API errors**
- Verify your API key is correct
- Check that your GoHighLevel account is active
- Ensure the Location ID matches your account
- The site will fall back to demo mode if API fails

**Q: Where should I put the .env file?**
- In the root directory: `/Users/lappy/Sites/therapist/.env`
- Same level as `package.json` and `vite.config.js`

---

Need help? Check the main README.md for more information!

