# GRACE Multidisciplinary Therapy Centre and Hearing Care

> **Better Communication • Brighter Future**  
> *Support • Develop • Empower*

A complete, production-quality, responsive full-stack website for **GRACE Multidisciplinary Therapy Centre and Hearing Care**, located at Sholinganallur, Chennai.

---

## 🏥 Client & Brand Information

- **Brand Name**: GRACE Multidisciplinary Therapy Centre and Hearing Care
- **Short Name**: GRACE Therapy Centre
- **Tagline**: *Better Communication • Brighter Future*
- **Core Pillars**: Support • Develop • Empower
- **Primary Phone**: `+91 8220007614` (Click-to-call, WhatsApp integrated)
- **Email**: `gracemultitherapycenter@gmail.com`
- **Address**: Door #174, Sai Garden, Villa A, Village High Road, Sholinganallur, Chennai, Tamil Nadu 600119
- **Reference Website**: [https://grace-hearing-care.surge.sh/](https://grace-hearing-care.surge.sh/)
- **Live Directions**: [Google Maps Link](https://www.google.com/maps/search/?api=1&query=Door+%23174%2C+Sai+Garden%2C+Villa+A%2C+Village+High+Road%2C+Sholinganallur%2C+Chennai%2C+Tamil+Nadu+600119)

---

## 🎨 Design System & Palette

- **Brand Primary Navy**: `#17385D`
- **Deep Navy / Contrast**: `#0E2947` / `#071524`
- **Elegance Gold Accent**: `#C49A50` / `#D3AC66`
- **Warm White / Ivory Background**: `#FCFAF6`
- **Soft Light Slate**: `#EDF2F7`
- **Body Text**: `#344054`
- **Typography**: Georgia / Cambria / Serif for refined headings; System Humanist Sans for readable clinical body text.
- **Accessibility**: High contrast ratios, WAI-ARIA form descriptions, keyboard-navigable accordions, and full `@media (prefers-reduced-motion: reduce)` support.

---

## 🧩 7 Specialized Services & Clinical Routes

1. **Speech Therapy** (`/services/speech-therapy`): Communication, receptive/expressive language, articulation, voice, and fluency.
2. **Occupational Therapy** (`/services/occupational-therapy`): Sensory integration, motor coordination, fine motor dexterity, and daily living skills.
3. **Behavioural Therapy** (`/services/behavioural-therapy`): Positive behaviour support, social thinking, emotional self-regulation, and FBA.
4. **Special Education** (`/services/special-education`): Individualised Education Plans (IEP), dyslexia remediation, multisensory phonics, and academic fluency.
5. **Physiotherapy** (`/services/physiotherapy`): Gross motor milestones, posture alignment, core muscle stability, balance, and gait training.
6. **Hearing Testing and Hearing Aids** (`/services/hearing-testing-and-hearing-aids`): Pure tone audiometry, tympanometry, digital hearing aid trials (BTE, RIC, CIC), and personalized fitting.
7. **Teletherapy** (`/teletherapy` or `/services/teletherapy`): Secure therapist-guided remote sessions, family home routines coaching, and pre-consultation suitability guidelines.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `v18+` or `v20+` (Tested on Node `v20.19.6`)
- npm `v10+`

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

Default variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_ocxdoA27YmSSvOdAtF0_4w_6-ZTBK_z
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_SECRET_KEY=grace_therapy_secret_staff_session_key_2026
ADMIN_DEFAULT_PASSWORD=GraceCare2026!
ADMIN_EMAIL=gracemultitherapycenter@gmail.com
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Production Build & Start
```bash
npm run build
npm start
```

---

## 🗄️ Database & Dual Persistence Architecture

The application is engineered with an adaptive persistence layer:
1. **Local Persistent Mode (Zero Setup Required)**:
   - Records are atomically stored in `data/appointments.json` and `data/inquiries.json`.
   - Data persists across server restarts and hot reloads.
2. **Supabase Cloud Mode**:
   - Provide your Supabase project URL in `NEXT_PUBLIC_SUPABASE_URL`.
   - Your publishable key `sb_publishable_ocxdoA27YmSSvOdAtF0_4w_6-ZTBK_z` is already configured in `.env.local`.
   - Run the provided `supabase/schema.sql` migration in your Supabase SQL Editor.
   - Row-Level Security (RLS) ensures public visitors can only insert requests without viewing others' submissions; only authenticated staff can read or update records.

---

## 🔐 Staff Administration Dashboard

- **URL**: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- **Default Staff Password**: `GraceCare2026!` *(Change via `ADMIN_DEFAULT_PASSWORD` in production)*
- **Features**:
  - Live KPI Counters (Total, Pending, Contacted, Confirmed, Completed, Cancelled).
  - Multi-criteria filtering by status, clinical discipline, and search query (name, phone, reference number).
  - Status lifecycle management modal (update status, assign clinician, add internal clinical notes).
  - Contact enquiry log.
  - CSV export for clinic reception and front-desk coordination.
  - Secure HttpOnly session cookie authentication with timing-safe HMAC tokens.

---

## 🧪 Testing

Run the automated end-to-end test suite:
```bash
node scratch/test-suite.mjs
```
The test suite verifies:
- 200 OK responses on all static & dynamic routes, XML sitemaps, and robots.txt.
- Form validation rejection on missing or malformed inputs.
- Real appointment submission and persistent request generation (`GRACE-2026-XXXX`).
- Contact form submission.
- Unauthenticated access blocks (401 Unauthorized) on admin API endpoints.
- Staff login authentication and HttpOnly cookie generation.
- Retrieval and status updating (Pending → Confirmed) with internal clinical notes.

---

## 📋 Client Handover Checklist

1. **Custom Domain & SSL**: Point DNS `A` records to Vercel/Netlify/server.
2. **Supabase Project**: Set `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in environment variables.
3. **Staff Password**: Update `ADMIN_DEFAULT_PASSWORD` in production `.env.local`.
4. **Verified Social Media**: Replace placeholder social links in `src/lib/constants.ts` once verified client accounts are provided.
5. **Interior Photography**: Place genuine clinic photos in `public/images/` to replace the marked facility placeholders in `/gallery`.
6. **Privacy Policy**: Have a certified healthcare attorney review the draft at `/privacy-policy`.
