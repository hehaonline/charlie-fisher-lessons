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
