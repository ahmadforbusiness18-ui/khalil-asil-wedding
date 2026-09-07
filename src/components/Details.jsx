import { motion } from 'framer-motion'
import {
  CalendarDays,
  MapPin,
  Navigation,
  Heart,
  Sparkles,
} from 'lucide-react'

import { Ornament } from './Decor'
import { wedding } from '../data/wedding'
import Countdown from './Countdown'

function EventCard({ event }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9 }}
      className="relative mx-auto mt-16 max-w-4xl overflow-hidden border border-[#C89B4A]/30 bg-[#F0E2C8]/40 p-8 shadow-[0_25px_80px_rgba(59,42,30,.10)] backdrop-blur-sm sm:p-12"
    >
      {/* Decorative corners */}
      <span className="absolute left-0 top-0 h-12 w-12 border-l border-t border-[#C89B4A]/60" />
      <span className="absolute right-0 top-0 h-12 w-12 border-r border-t border-[#C89B4A]/60" />
      <span className="absolute bottom-0 left-0 h-12 w-12 border-b border-l border-[#C89B4A]/60" />
      <span className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-[#C89B4A]/60" />

      <div className="text-center">

        {/* Heart */}
        <div className="mb-5 flex justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C89B4A]/50">
            <Heart
              size={18}
              strokeWidth={1.3}
              className="text-[#C89B4A]"
            />
          </div>
        </div>

        {/* Event title */}
<        p className="font-display text-2xl uppercase tracking-[.35em] text-[#C89B4A] sm:text-3xl md:text-4xl">
        {event.title}
        </p>
        <div className="mx-auto mt-6 max-w-xl">
          <Ornament />
        </div>
      </div>

      <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#C89B4A]/40 to-transparent" />

      <div className="grid gap-8 sm:grid-cols-2">

        {/* Date */}
        <div className="text-center sm:text-left">
          <div className="mb-3 flex items-center justify-center gap-3 sm:justify-start">

            <CalendarDays
              size={18}
              strokeWidth={1.3}
              className="text-[#C89B4A]"
            />

            <span className="text-[10px] uppercase tracking-[.3em] text-[#3B2A1E]/70">
              Date
            </span>
          </div>

          <p className="font-display text-2xl text-[#3B2A1E]">
            {wedding.dateLabel}
          </p>

          <p className="mt-1 text-sm text-[#3B2A1E]/65">
            {wedding.weekday}
          </p>
        </div>

        {/* Location */}
        <div className="text-center sm:text-right">
          <div className="mb-3 flex items-center justify-center gap-3 sm:justify-end">

            <span className="text-[10px] uppercase tracking-[.3em] text-[#3B2A1E]/70">
              Location
            </span>

            <MapPin
              size={18}
              strokeWidth={1.3}
              className="text-[#C89B4A]"
            />
          </div>

          <p className="font-display text-2xl text-[#3B2A1E]">
            {event.address}
          </p>

          <p className="mt-1 text-sm text-[#3B2A1E]/65">
            Amman, Jordan
          </p>
        </div>
      </div>

      <p className="mt-7 text-center font-display text-lg italic text-[#3B2A1E]/70">
        Details of the venue and time to follow soon
      </p>

    </motion.article>
  )
}

export default function Details() {
  return (
    <section
      id="details"
      className="relative overflow-hidden bg-[#F5EBDD] py-24 text-[#3B2A1E] sm:py-32"
    >

      {/* Luxury background */}
      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#F0E2C8]/60 blur-3xl" />

        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-[#C89B4A]/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#C89B4A]/10 blur-3xl" />

      </div>

      <div className="relative z-10 section-shell">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >

          <div className="mb-7 flex justify-center">
            <Sparkles
              size={19}
              strokeWidth={1}
              className="text-[#C89B4A]"
            />
          </div>

          <p className="text-[11px] uppercase tracking-[.5em] text-[#3B2A1E]/70">
            Save the Date
          </p>

          <h1 className="mt-5 font-display text-6xl font-light tracking-wide text-[#C89B4A] sm:text-8xl">
            Khalil <span className="text-[#C89B4A]">&</span> Asil
          </h1>

          <p className="mt-5 text-[11px] uppercase tracking-[.45em] text-[#C89B4A]">
            We're getting married
          </p>

          <div className="mx-auto mt-8 max-w-xs">
            <Ornament />
          </div>

          <p className="mx-auto mt-8 max-w-2xl font-display text-xl leading-8 text-[#3B2A1E] sm:text-2xl">
            Join us in Amman for an evening of love, laughter,
            and beautiful memories as we celebrate the beginning
            of our forever.
          </p>

        </motion.div>

        {/* Date */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-12 text-center"
        >

          <p className="font-display text-2xl tracking-wide text-[#3B2A1E]">
            18 December 2026
          </p>

          <p className="mt-2 text-[10px] uppercase tracking-[.4em] text-[#C89B4A]">
            Amman · Jordan
          </p>

        </motion.div>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-16"
        >

          <p className="mb-7 text-center text-[10px] uppercase tracking-[.45em] text-[#3B2A1E]/70">
            Counting Down To Forever
          </p>

          <Countdown />

        </motion.div>

        {/* Event */}
        <EventCard event={wedding.ceremony} />

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-20 text-center"
        >

          <div className="mx-auto mb-6 h-px w-20 bg-[#C89B4A]/50" />

          <p className="font-display text-3xl italic text-[#3B2A1E] sm:text-4xl">
            Two hearts, one beautiful beginning.
          </p>

          <p className="mt-4 text-[9px] uppercase tracking-[.45em] text-[#C89B4A]">
            Khalil & Asil
          </p>

        </motion.div>

      </div>
    </section>
  )
}