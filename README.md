# Hotel Sai Rama - Next.js Website

A complete, modern, fully responsive, and SEO-optimized website for **Hotel Sai Rama**, Vijayawada. Built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Lucide React icons, and WhatsApp direct booking integration.

---

## 🏨 Hotel Details

- **Hotel Name:** Hotel Sai Rama
- **Location:** Beside Apsara Theatre, Governorpet, Vijayawada, Andhra Pradesh - 520002
- **GSTIN:** `37ADSF54110J1ZR`
- **Reference Page:** [Justdial Listing](https://www.justdial.com/Vijayawada/Hotel-Sai-Rama-Beside-Apsara-Theatre-Governerpet/0866PX866-X866-181108193906-H4L7_BZDET)

---

## 🎨 Brand Design & Palette

- **Primary Red:** `#C71920`
- **Dark Red:** `#991B1B`
- **White Background:** `#FFFFFF`
- **Light Tint Background:** `#FFF7F7`
- **Dark Text:** `#1F2937`
- **Muted Text:** `#6B7280`
- **Official Logo:** Red-and-White HS Emblem (`public/images/logo/hotel-sai-rama-logo.png`)

---

## 🚀 Key Features & Structure

1. **Pages & Routes:**
   - `Home` (`/`) - Hero banner with dark-red gradient overlay, quick booking enquiry widget, welcome section, featured rooms, why choose us grid, facilities preview, lightbox gallery preview, call-to-action banner.
   - `About Us` (`/about`) - Hotel story, Governorpet location details, mission & values (cleanliness, comfort, helpful service), visitor profiles.
   - `Rooms` (`/rooms`) - Editable room listings (Standard Room, Deluxe Room, Family Room) with capacities, bed types, confirmed facilities, rate notices, and instant WhatsApp booking.
   - `Room Details` (`/rooms/[slug]`) - Dynamic room gallery, description, facilities, booking widget, and similar rooms.
   - `Facilities` (`/facilities`) - Modern icon cards with clear code comments for owner verification, real in-house photographs (reception, corridor, TV area, entrance).
   - `Contact Us` (`/contact`) - Address card, click-to-call, WhatsApp buttons, responsive Google Maps embed, interactive booking & contact form with client-side validation.

2. **Global Components:**
   - `Header` - Sticky responsive header, red-and-white HS logo, red active navigation link, mobile menu drawer with keyboard accessibility and auto-close.
   - `Footer` - Dark red background (`#991B1B`), white text, full contact details, quick links, maps, privacy policy, dynamic copyright year.
   - `MobileActionBar` - Fixed bottom action bar on mobile screens (Call, WhatsApp, Book Now).
   - `FloatingActions` - Floating Call and WhatsApp buttons on desktop.
   - `GalleryLightbox` - Keyboard-accessible (Esc, Left/Right arrows) responsive image modal.

3. **WhatsApp Integration:**
   - No backend or database required. Form submissions format structured enquiry text and launch `wa.me` links directly.

4. **SEO & Structured Data:**
   - Page-specific titles and meta descriptions.
   - OpenGraph metadata and canonical URLs.
   - `Hotel` and `LocalBusiness` JSON-LD schema markup.
   - Dynamic `sitemap.xml` and `robots.txt` generators.

---

## 📁 Directory Structure

```text
hotel-sai-rama/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── facilities/page.tsx
│   ├── rooms/page.tsx
│   ├── rooms/[slug]/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── BookingForm.tsx
│   ├── Breadcrumbs.tsx
│   ├── FloatingActions.tsx
│   ├── Footer.tsx
│   ├── GalleryLightbox.tsx
│   ├── Header.tsx
│   ├── JsonLd.tsx
│   ├── Logo.tsx
│   ├── MobileActionBar.tsx
│   └── RoomCard.tsx
├── data/
│   ├── facilities.ts
│   ├── rooms.ts
│   └── siteConfig.ts
├── public/
│   ├── images/
│   │   ├── exterior/
│   │   ├── facilities/
│   │   ├── gallery/
│   │   ├── logo/
│   │   ├── reception/
│   │   └── rooms/
│   └── favicon.ico
├── utils/
│   └── whatsapp.ts
├── .env.example
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or 20.x or 22.x
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Verification & Production

```bash
npm run lint
npm run build
npm run start
```

---

## 📝 Updating Contact Information

All hotel details (Phone numbers, WhatsApp number, Email address, Address, Google Map Embed URL) are stored centrally in [`data/siteConfig.ts`](file:///c:/hotelwedsite/hotel-sai-rama/data/siteConfig.ts). Editing this single file updates contact information across the entire website.
