import { useState } from 'react'
import { Nav } from './components/Nav.jsx'
import { Hero } from './components/Hero.jsx'
import { TrustBadges } from './components/TrustBadges.jsx'
import { Services } from './components/Services.jsx'
import { Kids } from './components/Kids.jsx'
import { About } from './components/About.jsx'
import { Healing } from './components/Healing.jsx'
import { Stories } from './components/Stories.jsx'
import { FAQ } from './components/FAQ.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { StickyBook } from './components/StickyBook.jsx'
import { BookingModal } from './components/BookingModal.jsx'
import { HomeVisitForm } from './components/HomeVisitForm.jsx'
import { services } from './data/services.js'

export default function App() {
  // booking: null = closed, 'picker' = open with service list, or a service object
  const [booking, setBooking] = useState(null)
  const [homeVisit, setHomeVisit] = useState(null) // null or intent label

  const openBooking = (service = null) => setBooking(service || 'picker')
  const openKidsBooking = () => setBooking(services.find((s) => s.id === 'kids-shared'))
  const openHomeVisit = (intent = 'Home Visit') => setHomeVisit(intent)

  return (
    <>
      <Nav onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <TrustBadges />
        <Services onBook={openBooking} onHomeVisit={openHomeVisit} />
        <Kids onBook={openKidsBooking} />
        <About />
        <Healing />
        <Stories onBook={openBooking} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyBook onBook={openBooking} />

      {booking && (
        <BookingModal
          service={booking === 'picker' ? null : booking}
          onSelectService={(s) => setBooking(s || 'picker')}
          onClose={() => setBooking(null)}
        />
      )}
      {homeVisit && (
        <HomeVisitForm intent={homeVisit} onClose={() => setHomeVisit(null)} />
      )}
    </>
  )
}
