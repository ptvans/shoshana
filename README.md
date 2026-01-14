# Therapist Practice Website

A modern, beautiful React website for a private practice therapist with appointment scheduling and new client intake functionality. Features integration with GoHighLevel CRM for automated workflow management.

## Features

- 🏠 **Professional Home Page** - Welcoming interface showcasing services and specializations
- 📅 **Appointment Scheduling** - Easy-to-use form for booking introductory sessions
- 📝 **New Client Intake** - Comprehensive intake form for new client requests
- 🔗 **GoHighLevel Integration** - Automatic contact creation and appointment scheduling in CRM
- 📱 **Responsive Design** - Works beautifully on desktop, tablet, and mobile devices
- 🎨 **Modern UI/UX** - Clean, calming design with smooth interactions

## Tech Stack

- **React 18** - Modern React with hooks
- **React Router** - Client-side routing
- **Vite** - Fast build tool and dev server
- **Axios** - HTTP client for API requests
- **GoHighLevel API** - CRM integration

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- GoHighLevel account (optional for demo mode)

### Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Configure GoHighLevel API (Optional):**

Create a `.env` file in the root directory:

```bash
# Copy the example file
cp .env.example .env
```

Then edit `.env` and add your GoHighLevel credentials:

```
VITE_GHL_API_KEY=your_api_key_here
VITE_GHL_LOCATION_ID=your_location_id_here
```

**Note:** The website will work in demo mode without API credentials. Forms will simulate successful submissions without actually creating records in GoHighLevel.

3. **Start the development server:**

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The build files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## GoHighLevel Integration

### Setting Up GoHighLevel API

1. **Get Your API Key:**
   - Log in to your GoHighLevel account
   - Go to Settings → API Keys
   - Create a new API key or use an existing one

2. **Find Your Location ID:**
   - In GoHighLevel, go to Settings
   - Your Location ID is displayed in the account settings

3. **Configure Environment Variables:**
   - Add your API key and Location ID to the `.env` file
   - Restart the development server

### What Gets Synced to GoHighLevel

**Appointment Bookings:**
- Creates or updates contact in GoHighLevel
- Creates appointment in calendar
- Adds tags: `website-appointment`, `new-client`
- Status set to "pending" for manual confirmation

**New Client Requests:**
- Creates or updates contact with detailed information
- Adds tags: `website-new-client`, `new-inquiry`
- Creates note with client concerns and history
- Creates opportunity/task for follow-up

## Project Structure

```
therapist/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── *.css
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── BookAppointment.jsx
│   │   ├── NewClient.jsx
│   │   └── *.css
│   ├── services/       # API services
│   │   └── api.js
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global app styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
├── package.json        # Dependencies
└── README.md          # This file
```

## Customization

### Branding & Content

- **Practice Name:** Update in `src/components/Header.jsx` and `src/components/Footer.jsx`
- **Contact Information:** Update in `src/components/Footer.jsx`
- **Services & Specializations:** Update in `src/pages/Home.jsx`
- **Colors:** Modify CSS variables in `src/index.css` (`:root` section)

### Color Scheme

The default color scheme uses calming, nature-inspired colors:

```css
--primary-color: #6B9080;     /* Sage green */
--secondary-color: #A4C3B2;   /* Light sage */
--accent-color: #CCE3DE;      /* Very light sage */
--background: #F6FFF8;        /* Off-white with green tint */
```

To change colors, edit these variables in `src/index.css`.

## Demo Mode

When GoHighLevel API credentials are not configured, the site runs in **demo mode**:

- Forms work normally and show success messages
- No actual API calls are made to GoHighLevel
- Perfect for testing and development
- Console logs indicate demo mode is active

## Security Notes

- Never commit `.env` file to version control
- API keys are loaded via environment variables
- All form data is validated before submission
- HTTPS recommended for production deployment

## Deployment

This site can be deployed to any static hosting service:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**
- **DigitalOcean App Platform**

### Environment Variables for Deployment

Make sure to set these environment variables in your hosting platform:

- `VITE_GHL_API_KEY`
- `VITE_GHL_LOCATION_ID`

## Support

For questions about:
- **Website functionality:** Check the code comments or create an issue
- **GoHighLevel API:** Visit [GoHighLevel API Documentation](https://highlevel.stoplight.io/)
- **React/Vite:** See official documentation

## License

MIT License - See LICENSE file for details

## Contributing

This is a demo/prototype project. Feel free to fork and customize for your own use!

---

Built with ❤️ for mental health professionals
