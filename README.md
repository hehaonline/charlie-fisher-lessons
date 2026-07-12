# Charlie Fisher Lessons — v1

Single-page React + Tailwind site for Charlie Fisher, heart-centered music
teacher serving South St. Pete, South Tampa & Gulfport, FL.
Built with Vite. Deploy target: Vercel.

**Design language:** Gulf Coast summer — bone-white base, sand/clay/terracotta
earth tones, sea-glass accent, golden-hour warmth, sacred geometry line art.
Fraunces (display) + Karla (body).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Where things live

```
index.html                       fonts, meta, favicon
src/App.jsx                      page assembly + modal state
src/data/services.js             ★ all 7 services, prices, FAQ, locations — edit content here
src/components/
  Nav.jsx                        fixed header, mobile menu
  Hero.jsx                       headline + porch photo placeholder + CTAs
  TrustBadges.jsx                4 trust badges
  Services.jsx                   7-card services grid
  Kids.jsx                       "Harmony for Little Hearts"
  About.jsx                      "Community-Rooted Wisdom"
  Healing.jsx                    Healing Music Project teaser
  Stories.jsx                    student stories (honest empty state)
  FAQ.jsx                        5-question accordion
  Contact.jsx                    newsletter + locations + email
  Footer.jsx                     tagline, service area, email
  StickyBook.jsx                 mobile-only sticky "Book a Lesson" bar
  BookingModal.jsx               ★ Cal.com embed placeholder + service picker
  HomeVisitForm.jsx              ★ home-visit intake form (mailto, no backend)
  SacredGeometry.jsx             SVG geometry library (signature element)
  PhotoPlaceholder.jsx           warm gradient + geometry photo stand-ins
src/hooks/useReveal.js           scroll-reveal (respects reduced motion)
```

## TODO before launch (all marked with `TODO:` in code)

1. **Cal.com** — create event types, put links in `src/data/services.js`
   (`calLink`), then swap the placeholder in `BookingModal.jsx` for
   `@calcom/embed-react` (instructions are in that file's header comment).
2. **Email** — replace `hello@charliefisherlessons.com` in `Contact.jsx`,
   `Footer.jsx`, and `HomeVisitForm.jsx` with Charlie's real address.
3. **Lesson days** — set `day` for each location in `src/data/services.js`
   once Charlie confirms (e.g. `day: 'Tuesdays'`).
4. **Photos** — replace `<PhotoPlaceholder />` instances with real `<img>`
   tags when Charlie's photos arrive (drop files in `public/photos/`).
5. **Newsletter** — wire the form in `Contact.jsx` to a provider
   (Mailchimp / Buttondown / ConvertKit).
