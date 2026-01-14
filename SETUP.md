# Quick Setup Guide

## Initial Setup (First Time Only)

### 1. Install Dependencies

```bash
cd /Users/lappy/Sites/therapist
npm install
```

This will install:
- React 18.2.0
- React Router DOM 6.20.1
- Axios 1.6.2
- Vite 5.0.8
- And all necessary dev dependencies

### 2. Configure GoHighLevel (Optional)

If you want to enable GoHighLevel CRM integration:

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your credentials:
   ```
   VITE_GHL_API_KEY=your_actual_api_key
   VITE_GHL_LOCATION_ID=your_actual_location_id
   ```

**OR** run in demo mode without API credentials (recommended for testing).

### 3. Start Development Server

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

## Quick Navigation

Once the site is running:

- **Home Page:** http://localhost:3000/
- **Book Appointment:** http://localhost:3000/book-appointment
- **New Client Request:** http://localhost:3000/new-client

## Testing the Site

### Without GoHighLevel API (Demo Mode)
1. Fill out any form
2. Submit it
3. You'll see a success message
4. Check browser console for "demo mode" messages

### With GoHighLevel API
1. Configure `.env` with real credentials
2. Submit a form
3. Check your GoHighLevel account for new contacts/appointments

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install a new package
npm install package-name
```

## Customization Quick Links

### Change Colors
Edit: `src/index.css` (look for `:root` section)

### Change Practice Name
Edit: 
- `src/components/Header.jsx`
- `src/components/Footer.jsx`
- `index.html` (page title)

### Change Content
Edit:
- Home page: `src/pages/Home.jsx`
- Forms: `src/pages/BookAppointment.jsx` and `src/pages/NewClient.jsx`

## Troubleshooting

### Port 3000 already in use?
Change the port in `vite.config.js`:
```js
server: {
  port: 3001, // or any other port
}
```

### Module not found errors?
```bash
rm -rf node_modules
npm install
```

### API not working?
- Check console for error messages
- Verify API credentials in `.env`
- The site works fine without API (demo mode)

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Test the site
4. Customize content and branding
5. Add your GoHighLevel credentials (optional)
6. Deploy to production

Enjoy your new therapist practice website! 🌿

