// ─────────────────────────────────────────────────────────────
// Charlie Fisher Lessons — service catalog
// Edit prices, copy, or Cal.com links here; the UI updates itself.
// ─────────────────────────────────────────────────────────────

export const services = [
  {
    id: 'piano',
    name: 'Piano',
    price: '$50',
    duration: '45 min',
    unit: 'private lesson',
    booking: 'cal', // Cal.com embed placeholder
    calLink: 'charlie-fisher/piano', // TODO: replace with real Cal.com event link
    blurb:
      'From first notes to flowing melodies. Gentle, patient guidance at the keys — theory woven in naturally, never forced.',
    gradient: 'from-gold-light via-clay-light to-clay',
    geometry: 'seed',
  },
  {
    id: 'guitar',
    name: 'Guitar',
    price: '$50',
    duration: '45 min',
    unit: 'private lesson',
    booking: 'cal',
    calLink: 'charlie-fisher/guitar', // TODO: replace with real Cal.com event link
    blurb:
      'Acoustic or electric, chords or fingerstyle. Learn the songs you love while building real technique from day one.',
    gradient: 'from-clay-light via-clay to-clay-deep',
    geometry: 'triad',
  },
  {
    id: 'drums',
    name: 'Drums',
    price: '$50',
    duration: '45 min',
    unit: 'private lesson',
    booking: 'cal',
    calLink: 'charlie-fisher/drums', // TODO: replace with real Cal.com event link
    blurb:
      'Find your pulse. Groove, coordination, and confidence behind the kit — rhythm is the heartbeat of everything.',
    gradient: 'from-seaglass-light via-seaglass to-seaglass-deep',
    geometry: 'wave',
  },
  {
    id: 'singing-playing',
    name: 'Singing While Playing',
    specialty: true,
    price: '$50',
    duration: '45 min',
    unit: 'private lesson',
    booking: 'cal',
    calLink: 'charlie-fisher/singing-while-playing', // TODO: replace with real Cal.com event link
    blurb:
      "Charlie's specialty. The beautiful, tricky art of holding a melody with your voice while your hands keep the rhythm — unlocked step by step.",
    gradient: 'from-gold-light via-gold to-clay',
    geometry: 'flower',
  },
  {
    id: 'kids-shared',
    name: 'Kids Shared Sessions',
    price: '$25',
    duration: 'per child',
    unit: 'small groups · max 5',
    booking: 'cal',
    calLink: 'charlie-fisher/kids-shared-session', // TODO: replace with real Cal.com event link
    blurb:
      'Affordable, social, and joyful. Little ones explore music together in small groups — confidence grows fastest with friends.',
    gradient: 'from-seaglass-light via-gold-light to-clay-light',
    geometry: 'circles',
  },
  {
    id: 'home-visits',
    name: 'Custom Home Visits',
    premium: true,
    price: '$85',
    duration: '60–75 min',
    unit: 'request-based',
    booking: 'form', // uses the home-visit request form, not Cal.com
    blurb:
      'The full experience, brought to your living room. Tailored to your space, your instrument, and your goals — by request.',
    gradient: 'from-clay via-clay-deep to-ink',
    geometry: 'metatron',
  },
  {
    id: 'sound-support',
    name: 'Sound Support',
    price: 'Quote',
    duration: 'on request',
    unit: 'healing & technical',
    booking: 'form',
    blurb:
      'Healing frequencies, sound baths, and sound technician work for gatherings and events. Reach out and tell us your vision.',
    gradient: 'from-seaglass via-seaglass-deep to-ink',
    geometry: 'ripple',
  },
]

export const locations = [
  {
    name: 'South St. Pete',
    day: null, // TODO: set lesson day once confirmed, e.g. 'Tuesdays'
    note: 'Lesson day announced soon',
  },
  {
    name: 'South Tampa',
    day: null, // TODO: set lesson day once confirmed
    note: 'Lesson day announced soon',
  },
  {
    name: 'Gulfport',
    day: null, // TODO: set lesson day once confirmed
    note: 'Lesson day announced soon',
  },
]

export const faqs = [
  {
    q: 'How do I get started?',
    a: "Pick a service above and tap 'Book' — you'll choose a time that works for you. Not sure which lesson fits? Send a note through the contact form and Charlie will point you in the right direction. Your first lesson is all about meeting you where you are.",
  },
  {
    q: 'What ages do you teach?',
    a: 'Everyone from age 5 to adults — truly all ages. Kids thrive in the shared sessions, teens and adults usually prefer private lessons, and plenty of grown-ups are picking up an instrument for the very first time. It is never too late to start.',
  },
  {
    q: "Do I need my own instrument to begin?",
    a: "Not at first. For early lessons, instruments are available to learn on, and Charlie will happily advise you on what to buy (and what not to buy) when you're ready. For home visits, having your own instrument is ideal — the intake form asks about it.",
  },
  {
    q: 'What exactly is a home visit?',
    a: "A premium 60–75 minute lesson at your place, shaped entirely around you: your instrument, your room, your goals. You fill out a short request form (age, instrument, skill level, goals, equipment, area, preferred days), and Charlie designs the session before ever ringing your doorbell.",
  },
  {
    q: 'How do kids group sessions work?',
    a: "Small shared sessions — never more than 5 children — at $25 per child. Kids sing, clap, play, and learn the building blocks of music together. It's social, affordable, and a beautiful first step into a lifelong relationship with music.",
  },
]
