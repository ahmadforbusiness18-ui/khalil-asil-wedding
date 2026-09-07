import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  ['details', 'Wedding'],
  ['story', 'Our Story'],
  ['gallery', 'Gallery'],
  ['rsvp', 'RSVP'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#C89B4A]/20 bg-[#2E2140]/95 backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="font-script text-3xl text-[#C89B4A] transition hover:opacity-80"
          >
            K &amp; A
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-[10px] uppercase tracking-[.25em] text-[#F0E2C8] transition hover:text-[#C89B4A]"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <button
            className="text-[#C89B4A] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed inset-x-0 top-16 z-30 border-b border-[#C89B4A]/20 bg-[#2E2140] px-7 py-7 backdrop-blur-2xl md:hidden"
          >
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-[#C89B4A]/15 py-4 font-display text-2xl text-[#F0E2C8] transition hover:text-[#C89B4A]"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}