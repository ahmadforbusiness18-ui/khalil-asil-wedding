import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { GoldDust } from './Decor'

export default function Opening({ onOpen, guestName }) {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden noise flex items-end justify-center"
      id="home"
    >
      <img
        src="/khalil-asil-wedding/images/hero.jpg"
        alt="Khalil & Asil wedding invitation in Petra"
        className="absolute inset-0 h-full w-full object-cover object-center"
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#140e0b]/20 via-transparent to-[#140e0b]/70" />

      <GoldDust />

      {guestName && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-[#ead8aa]/25 bg-[#17120f]/35 px-5 py-2 font-display text-base text-[#f7e5b7] backdrop-blur-md sm:top-10 sm:text-lg"
        >
          Dear {guestName}
        </motion.p>
      )}

      <div className="relative z-10 flex w-full justify-center pb-16 sm:pb-14">
        <motion.button
          onClick={onOpen}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="shimmer rounded-full border border-[#ead8aa]/55 bg-[#17120f]/55 px-8 py-3.5 text-xs uppercase tracking-[.3em] text-[#f7e5b7] shadow-[0_10px_35px_rgba(0,0,0,.3)] backdrop-blur-md transition hover:bg-[#17120f]/70"
        >
          Open Invitation
        </motion.button>
      </div>

      <motion.a
        href="#details"
        className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 text-[#ead8aa]/80"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll to invitation"
      >
        <ChevronDown size={20} />
      </motion.a>
    </section>
  )
}