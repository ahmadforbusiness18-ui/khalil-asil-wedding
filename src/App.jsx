import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import Nav from './components/Nav'
import Opening from './components/Opening'
import Details from './components/Details'
import Gallery from './components/Gallery'
import RSVP from './components/RSVP'
import MusicToggle from './components/MusicToggle'

import { wedding, guests } from './data/wedding'

export default function App() {
  const [opened, setOpened] = useState(false)

  const guestSlug = window.location.pathname
    .match(/^\/invite\/([^/]+)/i)?.[1]
    ?.toLowerCase()

  const guestName = useMemo(
    () => guests[guestSlug]?.name || '',
    [guestSlug]
  )

  return (
    <main>
      <AnimatePresence>
        {!opened && (
          <motion.div
            key="cover"
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-[60]"
          >
            <Opening
              onOpen={() => {
                setOpened(true)

                setTimeout(() => {
                  document
                    .getElementById('details')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }, 350)
              }}
              guestName={guestName}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {opened && (
        <>
          <Nav />

          <Details />

          <Gallery />

          <RSVP guestName={guestName} />

          <footer className="bg-[#17120f] py-14 text-center">
            <p className="font-script text-5xl text-[#ead8aa]">
              {wedding.couple.groom} &amp; {wedding.couple.bride}
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[.3em] text-white/30">
              {wedding.dateLabel} · {wedding.city}
            </p>
          </footer>

          <MusicToggle />
        </>
      )}
    </main>
  )
}