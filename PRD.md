# Product Requirements Document: Shoshana Polansky, LMFT — Therapy Website

## Project Overview

A modern React SPA for Shoshana Polansky, Licensed Marriage and Family Therapist. The site showcases her therapy and coaching services, drives consultation bookings via GoHighLevel/GReminders, and is optimized for ADA/WCAG accessibility and Answer Engine Optimization (AEO).

**Practice:** Shoshana Polansky, LMFT
**Specialties:** Trauma therapy (EMDR), couples therapy, relationship coaching
**Locations:** In-person in California & Florida | Online nationwide | Coaching worldwide
**Phone:** 858-863-7270
**Scheduling:** https://app.greminders.com/c/shoshanapolansky

**Interim URL:** https://ptvans.github.io/shoshana/
**Final domain (pending DNS):** https://www.shoshanapolansky.com/
**Blog (planned):** https://blog.shoshanapolansky.com/

---

## Technologies

| Category | Technology |
|----------|------------|
| Frontend Framework | React 18.2.0 with React Router DOM 6.20.1 |
| Build Tool | Vite 5.0.8 |
| API Communication | Axios 1.6.2 |
| Styling | CSS3 with CSS custom properties |
| Fonts | Nunito Sans (body) & Cormorant Garamond (headings) |
| Deployment | GitHub Pages with GitHub Actions CI/CD |
| Scheduling / CRM | GoHighLevel / GReminders |

---

## Project Structure

```
shoshana/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Fixed nav with mobile hamburger menu
│   │   ├── Header.css
│   │   ├── Footer.jsx          # Contact info, phone, schedule CTA
│   │   ├── Footer.css
│   │   ├── LogoBanner.jsx      # Logo strip below header
│   │   ├── LogoBanner.css
│   │   ├── ScrollToTop.jsx     # Resets scroll on route change
│   │   ├── ContactForm.jsx     # (legacy — replaced by embedded GHL form)
│   │   └── InstagramIcon.jsx   # SVG icon component
│   │
│   ├── pages/
│   │   ├── Home.jsx            # Hero, services overview, testimonials, CTA
│   │   ├── About.jsx           # Bio, who I work with, EMDR, CTA
│   │   ├── Services.jsx        # Therapy services, EMDR, process, rates
│   │   ├── Coaching.jsx        # Coaching offering, how it works, CTA
│   │   └── NewClient.jsx       # Contact page with booking CTA & crisis info
│   │
│   ├── services/
│   │   └── api.js              # GoHighLevel API integration (demo mode available)
│   │
│   ├── photos/                 # Therapist photos, office, logo
│   ├── images/                 # Logo variants
│   ├── App.jsx                 # Router + layout shell + skip link
│   ├── App.css                 # App layout + skip-to-content styles
│   ├── index.css               # Global design system (variables, typography)
│   └── main.jsx                # React entry point
│
├── public/
│   ├── CNAME                   # www.shoshanapolansky.com (pending DNS)
│   ├── robots.txt              # Allows all crawlers incl. AI bots (AEO)
│   ├── sitemap.xml             # All 5 pages
│   ├── llms.txt                # AI-readable site summary (AEO)
│   └── 404.html                # SPA routing redirect for GitHub Pages
│
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions: push to main → deploy
│
├── index.html                  # Entry HTML: SEO meta, OG, JSON-LD schema
└── vite.config.js              # base: '/shoshana/' (interim GitHub Pages path)
```

---

## Pages & Features

### 1. Home (`/`)
- Hero: therapist portrait, headline, "Schedule a Consultation" CTA
- Intro: empathetic hook — "You are not alone"
- Services overview: Individual Therapy, Couples Therapy, Coaching (numbered cards)
- Testimonials: 3 anonymized client quotes
- About teaser: office photo + short bio + link to About page
- Availability grid: In-Person (CA & FL) | Online Therapy | Coaching

### 2. About (`/about`)
- Therapist bio and philosophy
- "Who I Work With": The Caretaker, Couples Ready for Change, Trauma Survivors
- EMDR explainer section (conditions helped, how it differs from talk therapy)
- CTA: free consultation

### 3. Therapy / Services (`/services`)
- Individual Therapy and Couples Therapy (2-column grid)
- EMDR specialty highlight
- 3-step intake process (Free Consultation → First Session → Begin Journey)
- Policies: Rates ($200/50 min), payment methods, insurance (out-of-network + superbills), cancellation

### 4. Coaching (`/coaching`)
- Coaching vs. therapy distinction
- Areas of focus: Relationship Skills, Personal Growth, Life Transitions
- 3-step coaching process
- Worldwide availability via video

### 5. Contact / New Client (`/new-client`)
- Booking card (external GReminders link)
- Contact info (phone)
- 3-step onboarding process
- Crisis resources: 988 Lifeline, emergency room redirect

### 6. Navigation
- Desktop: fixed top bar with Home, About, Therapy, Coaching, Contact CTA
- Mobile: hamburger menu with slide-in overlay
- Logo banner below header (links to home)

---

## Focus Areas & Content Modules

These focus areas define the five populations Shoshana serves and their therapeutic needs. They will be used to create reusable content modules that appear across multiple pages (Individual Therapy, Couples Therapy, and related landing pages) to optimize for SEO.

### Individual Therapy

#### 1. Trauma
**Approach:** EMDR, therapy for PTSD, rapid therapy

#### 2. Dating Issues
**Approach:** Direct and blunt therapy, can't get over my ex, domestic violence, abusive relationship, narcissistic abuse

#### 3. High Achiever with Trauma History
**Approach:** Therapy for smart people, therapy for successful people, therapy for sexual abuse, parental abuse, children of immature parents

#### 4. OCD
**Approach:** Inference-Based Cognitive Behavioral Therapy (I-CBT), exposure therapy, therapy for rumination and intrusive thoughts

### Couples Therapy

#### 5. Relationship Counseling
**Approach:** EFT (Emotionally Focused Therapy), Gottman therapy

---

## Design System

### Color Palette
| Variable | Value | Use |
|----------|-------|-----|
| `--primary-color` | `#B8977E` | Buttons, links, accents (terracotta) |
| `--primary-dark` | `#9A7B62` | Button hover, focus outlines |
| `--secondary-color` | `#D4C4B5` | Light tan accents |
| `--accent-color` | `#E8DFD6` | Very light beige |
| `--text-primary` | `#3D3D3D` | Body text |
| `--text-secondary` | `#595959` | Secondary text (WCAG AA compliant) |
| `--background` | `#F7F3EF` | Warm cream page background |
| `--background-alt` | `#F0EAE3` | Alternate section background |
| `--header-bg` | `#C9AE97` | Header and logo banner |

### Typography
- **Headings:** Cormorant Garamond (serif) — elegant, calming
- **Body:** Nunito Sans (sans-serif) — readable, approachable

### Breakpoints
- Mobile: < 768px (general)
- Nav collapse: < 968px (hamburger menu)

---

## Accessibility (WCAG 2.1 AA)

### Completed Fixes

| # | Issue | WCAG | Fix |
|---|-------|------|-----|
| 1 | No skip-to-content link | 2.4.1 (A) | Added `.skip-link` in App.jsx, styled in App.css |
| 2 | `outline: none` on button killed focus | 2.4.7 (AA) | Removed; added `*:focus-visible` rule |
| 3 | `--text-secondary` ~4.2:1 contrast | 1.4.3 (AA) | Darkened `#6B6B6B` → `#595959` |
| 4 | `a:hover` insufficient contrast | 1.4.3 (AA) | Changed to `#6B4F3A` |
| 5 | Home page `<h1>` already correct | 1.3.1 (A) | Verified — hero uses `<h1>` |
| 6 | Portrait alt text | 1.1.1 (A) | Hero: descriptive alt; decorative: `alt=""` |

### Pending / Future
- [ ] Audit `--primary-color` (#B8977E) contrast as link text on cream background (~2.5:1 — fails AA). Consider a dedicated darker link color variable.
- [ ] Audit button text contrast: white on `#B8977E` ~2.7:1 — fails AA for small text. Consider darkening button background or using a contrast-safe alternative.
- [ ] Instagram icon links — verify `aria-label` present and SVG has `aria-hidden`
- [ ] Add `lang` attributes to any non-English content

---

## SEO & Answer Engine Optimization (AEO)

### Completed

| Asset | Details |
|-------|---------|
| `index.html` title | "Shoshana Polansky, LMFT \| Trauma Therapy & Couples Counseling \| CA & FL" |
| Meta description | 155-char focused description |
| Open Graph | og:type, og:url, og:title, og:description, og:site_name, og:locale |
| Twitter Card | summary_large_image card |
| Canonical URL | Set to interim GitHub Pages URL (update on domain switch) |
| JSON-LD schema | `MedicalBusiness`, `Person`, `WebSite` nodes with full service catalog |
| robots.txt | Allows all crawlers: GPTBot, ClaudeBot, PerplexityBot, anthropic-ai, etc. |
| sitemap.xml | All 5 pages with priorities |
| llms.txt | AI-readable practice summary, services, FAQ, policies |

### Pending
- [ ] Submit sitemap to Google Search Console once on custom domain
- [ ] Add page-level meta descriptions per route (requires React Helmet or similar)
- [ ] Add FAQ schema (JSON-LD `FAQPage`) to Services and About pages
- [ ] Add `og:image` once a professional headshot is designated as the share image
- [ ] Set up Google Business Profile linked to final domain

---

## Deployment

- **Platform:** GitHub Pages
- **Trigger:** Push to `main` branch → GitHub Actions builds and deploys
- **Interim URL:** https://ptvans.github.io/shoshana/
- **SPA routing:** 404.html redirect → index.html (rafgraph/spa-github-pages pattern)
- **Vite base:** `/shoshana/` — must match the GitHub Pages repo subdirectory

### Domain Migration Checklist (when DNS is ready)
- [ ] `vite.config.js`: `base: '/shoshana/'` → `base: '/'`
- [ ] `src/App.jsx`: Remove `basename="/shoshana"` from `<Router>`
- [ ] `index.html`: Update canonical + OG `og:url` to `https://www.shoshanapolansky.com/`
- [ ] `public/robots.txt`: Update Sitemap URL
- [ ] `public/sitemap.xml`: Update all `<loc>` entries
- [ ] `public/llms.txt`: Update website URL references
- [ ] CNAME already set to `www.shoshanapolansky.com` ✓
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile

**NPM Scripts:**
```bash
npm run dev      # Dev server on port 3000
npm run build    # Production build to dist/
npm run preview  # Preview production build
```

---

## Conversion Rate Optimization

### Benchmarks
| Performance Level | Conversion Rate |
|-------------------|-----------------|
| Top-performing therapy websites | 15–25% |
| Average healthcare | 9–10% |
| Most therapy practice websites | 2–3% |

### Key Principles Applied
- **Client-focused copy:** Pain points addressed directly ("You are not alone")
- **Strategic CTAs:** 1–2 per page, never aggressive
- **Trust elements:** Anonymized testimonials, EMDR credentials, clear process steps
- **Low-friction booking:** External GReminders link (no form to fill out first)
- **Mobile-first:** Responsive at all breakpoints, hamburger nav

---

## GoHighLevel / API Integration

`src/services/api.js` exports:
- `createAppointment()` — creates appointment in GHL
- `submitNewClientRequest()` — new client intake
- `submitContactForm()` — contact form submission

**Demo mode:** Site functions without API credentials (env vars not required for deploy).

**Env vars (if activating):**
```
VITE_GHL_API_KEY
VITE_GHL_LOCATION_ID
```

---

## Future Roadmap

- [ ] Blog at `blog.shoshanapolansky.com` (separate platform TBD)
- [ ] Page-level `<title>` and meta descriptions via React Helmet or Vite plugin
- [ ] FAQ schema (JSON-LD) on Services and About pages
- [ ] `og:image` social share image
- [ ] Google Business Profile
- [ ] Testimonials page or expanded testimonials section
- [ ] Resource library / psychoeducation articles
- [ ] Calendar embed (if GReminders supports it)
- [ ] Fix button and link text color contrast to fully pass WCAG AA
