# Product Requirements Document: Aligned Heart Therapist Website

## Project Overview

A modern React web application for "Aligned Heart," a private therapy practice run by Terra Crowl, LCSW (Licensed Clinical Social Worker). The site showcases therapeutic services, allows new clients to submit intake requests, and integrates with the GoHighLevel CRM platform.

**Live URL:** www.youralignedheart.com

---

## Technologies

| Category | Technology |
|----------|------------|
| Frontend Framework | React 18.2.0 with React Router DOM 6.20.1 |
| Build Tool | Vite 5.0.8 |
| API Communication | Axios 1.6.2 |
| Styling | CSS3 with CSS variables |
| Fonts | Inter (sans-serif) & Cormorant Garamond (serif) |
| Deployment | GitHub Pages with GitHub Actions CI/CD |
| CRM Integration | GoHighLevel REST API |

---

## Project Structure

```
therapist/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header.jsx        # Navigation with hamburger menu
│   │   ├── Footer.jsx        # Footer with contact info
│   │   └── InstagramIcon.jsx # Social media icon
│   │
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── About.jsx         # Therapist background
│   │   ├── Services.jsx      # English services & rates
│   │   ├── Servicios.jsx     # Spanish services & rates
│   │   └── NewClient.jsx     # Client intake form
│   │
│   ├── services/
│   │   └── api.js            # GoHighLevel API integration
│   │
│   ├── App.jsx               # Main app with routing
│   └── main.jsx              # React entry point
│
├── public/
│   └── CNAME                 # Custom domain config
│
├── .github/workflows/
│   └── deploy.yml            # GitHub Actions deployment
│
└── vite.config.js            # Vite configuration
```

---

## Current Features

### 1. Home Page (`/`)
- Hero section with therapist portrait
- Practice name and tagline
- Specialties sections for individuals and couples
- Call-to-action buttons

### 2. About Page (`/about`)
- Therapist background and experience (8+ years)
- Therapeutic modalities: Motivational Interviewing, ACT, MBCT
- "Who I Work With" section

### 3. Services Pages
- **English** (`/services`): Rates ($150 individual/$300 couples), insurance, sliding scale
- **Spanish** (`/servicios`): Full Spanish translation

### 4. New Client Intake Form (`/new-client`)
- Comprehensive contact form with validation
- Fields: personal info, therapeutic history, source tracking
- Emergency crisis disclaimer with 988 lifeline
- GoHighLevel CRM integration (demo mode available)

### 5. Navigation
- Fixed header with responsive design
- Mobile hamburger menu with animations
- Links: Private Therapy, Services, Español, Contact, Instagram

---

## Design System

### Color Palette
- Primary: `#6B9080` (Sage Green)
- Secondary: `#A4C3B2` (Light Sage)
- Accent: `#CCE3DE` (Very Light Sage)
- Text Primary: `#2C3E50` (Dark Blue-Gray)
- Text Secondary: `#6B7C85` (Medium Gray)
- Background: `#FAFCFB` (Off-white)

### Typography
- Headings: Cormorant Garamond (serif)
- Body: Inter (sans-serif)

---

## GoHighLevel Integration

**Environment Variables Required:**
- `VITE_GHL_API_KEY` - API authentication
- `VITE_GHL_LOCATION_ID` - Location identifier

**Demo Mode:** Site functions without API credentials for testing.

---

## Deployment

- **Platform:** GitHub Pages
- **Trigger:** Push to main branch
- **Domain:** www.youralignedheart.com

**NPM Scripts:**
```bash
npm run dev      # Start dev server (port 3000)
npm run build    # Production build
npm run preview  # Preview production build
```

---

## Conversion Rate Benchmarks & Best Practices

### Key Metrics
| Performance Level | Conversion Rate |
|-------------------|-----------------|
| Top-performing therapy websites | 15-25% |
| Average healthcare | 9-10% |
| Most therapy practice websites | 2-3% |

### Essential Elements of High-Converting Therapist Websites

#### 1. Clear, Client-Focused Value Proposition
- Focus on addressing client pain points and barriers, not credentials
- Use empathetic, no-pressure language like "Explore whether therapy is right for you" rather than sales language
- Trust words ("proven," "recommended") increase conversion rates
- Fear words ("harmful," "illness") correlate with lower conversion rates

#### 2. Strategic Call-to-Action Placement
- Landing pages perform best with 1-3 strategically placed CTAs
- Multiple contact methods easily visible on every page (phone, email, contact form)
- Simplified booking process with minimal form fields

#### 3. Trust-Building Elements
- Client testimonials and success stories positioned strategically
- FAQ sections addressing common concerns and barriers
- Therapist introduction videos helping clients assess fit
- Clear explanation of what happens next after contact

#### 4. Progressive Engagement Options
- Educational resources demonstrating expertise
- Self-assessment tools
- Virtual office tours
- Email newsletter signup for those not ready to commit

#### 5. Scarcity Without Desperation
- Language like "Currently accepting a limited number of Saturday appointments" rather than appearing desperate for clients
- Shows availability while implying demand

#### 6. Mobile-First, User-Friendly Design
- Fast loading speed (slow sites kill conversions)
- Easy navigation with essential info readily accessible
- Readable text and images (poor contrast is a common mistake)
- Clear contact information on every page

---

## Future Considerations

- [ ] Add blog/articles section
- [ ] Calendar integration for booking
- [ ] Testimonials page
- [ ] Resource library for clients
- [ ] Multi-language expansion
