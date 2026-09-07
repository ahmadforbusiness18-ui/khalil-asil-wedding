import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Heart, Send, X } from 'lucide-react'
import { submitRSVP } from '../services/rsvp'

export default function RSVP({ guestName = '' }) {
  const [attendance, setAttendance] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({ 
  guest_name: guestName, 
  number_of_guests: '1', 
  message: '',
  favorite_song: '',
})

  const update = (key, value) =>
    setForm((current) => ({
      ...current,
      [key]: value,
    }))

  const submit = async (e) => {
    e.preventDefault()

    if (busy) return

    if (!form.guest_name.trim()) {
      setError('Please enter your name.')
      return
    }

    setError('')
    setBusy(true)

    try {
      await submitRSVP({
        ...form,
        attendance,
      })

      setSubmitted(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section
      id="rsvp"
      className="relative overflow-hidden bg-[#F5EBDD] py-24 text-[#3B2A1E] sm:py-32"
    >
      {/* Soft background */}
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#C89B4A]/10 blur-3xl" />

      <div className="section-shell relative">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Heart
            className="mx-auto text-[#C89B4A]"
            size={20}
          />

          <h2 className="mt-4 font-display text-5xl text-[#3B2A1E] sm:text-6xl">
            Will you join us?
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#6e5d4f]">
            Please let us know if you will be able to celebrate
            this special day with us.
          </p>
        </div>

        {/* Attendance buttons */}
        {!attendance && !submitted && (
          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">

            <button
              onClick={() => setAttendance('yes')}
              className="group flex items-center justify-between border border-[#C89B4A]/35 bg-white/40 p-5 text-left transition hover:bg-white/70"
            >
              <span>
                <span className="block text-[9px] uppercase tracking-[.25em] text-[#C89B4A]">
                  Attendance
                </span>

                <span className="font-display text-2xl text-[#3B2A1E]">
                  Yes, I’ll be there
                </span>
              </span>

              <Check className="text-[#C89B4A]" />
            </button>

            <button
              onClick={() => setAttendance('no')}
              className="group flex items-center justify-between border border-[#C89B4A]/20 p-5 text-left transition hover:bg-white/50"
            >
              <span>
                <span className="block text-[9px] uppercase tracking-[.25em] text-[#C89B4A]">
                  Attendance
                </span>

                <span className="font-display text-2xl text-[#3B2A1E]">
                  Sorry, I can’t attend
                </span>
              </span>

              <X className="text-[#C89B4A]" />
            </button>

          </div>
        )}

        {/* RSVP Form */}
        {attendance && !submitted && (
          <motion.form
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            onSubmit={submit}
            className="mx-auto mt-10 max-w-2xl border border-[#C89B4A]/20 bg-white/45 p-6 sm:p-9"
          >

            {/* Form Header */}
            <div className="mb-7 flex items-center justify-between">

              <div>
                <span className="text-[9px] uppercase tracking-[.25em] text-[#C89B4A]">
                  Your response
                </span>

                <h3 className="font-display text-3xl text-[#3B2A1E]">
                  {attendance === 'yes'
                    ? 'We’d love to have you'
                    : 'We’ll miss you'}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setAttendance(null)}
                className="text-[#6e5d4f]"
              >
                Change
              </button>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {/* Guest Name */}
              <label className="sm:col-span-2">

                <span className="mb-1 block text-[9px] uppercase tracking-[.2em] text-[#6e5d4f]">
                  Guest name *
                </span>

                <input
                  value={form.guest_name}
                  onChange={(e) =>
                    update('guest_name', e.target.value)
                  }
                  className="w-full border border-[#C89B4A]/20 bg-white/50 px-4 py-3 text-sm"
                  required
                />

              </label>
              {/* Favorite Song */}
<label className="sm:col-span-2">

  <span className="mb-1 block text-[9px] uppercase tracking-[.2em] text-[#6e5d4f]">
    Got a favorite song?
  </span>

  <p className="mb-2 text-xs text-[#6e5d4f]">
    Feel free to share it with us — totally optional.
  </p>

  <input
    type="text"
    value={form.favorite_song}
    onChange={(e) =>
      update('favorite_song', e.target.value)
    }
    placeholder="Song title — Artist"
    className="w-full border border-[#C89B4A]/20 bg-white/50 px-4 py-3 text-sm"
  />

</label>

              {/* Number of Guests */}
              {attendance === 'yes' && (
                <label className="sm:col-span-2">

                  <span className="mb-1 block text-[9px] uppercase tracking-[.2em] text-[#6e5d4f]">
                    Number of guests
                  </span>

                  <select
                    value={form.number_of_guests}
                    onChange={(e) =>
                      update(
                        'number_of_guests',
                        e.target.value
                      )
                    }
                    className="w-full border border-[#C89B4A]/20 bg-white/50 px-4 py-3 text-sm"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>

                </label>
              )}

              {/* Message */}
              <label className="sm:col-span-2">

                <span className="mb-1 block text-[9px] uppercase tracking-[.2em] text-[#6e5d4f]">
                  Message to the couple
                </span>

                <textarea
                  rows="4"
                  value={form.message}
                  onChange={(e) =>
                    update('message', e.target.value)
                  }
                  className="w-full resize-none border border-[#C89B4A]/20 bg-white/50 px-4 py-3 text-sm"
                />

              </label>

            </div>

            {/* Error */}
            {error && (
              <p className="mt-4 text-sm text-red-700">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              disabled={busy}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-[#2E2140] px-6 py-4 text-[10px] uppercase tracking-[.25em] text-[#F0E2C8] transition hover:bg-[#3b2a52] disabled:opacity-50"
            >
              {busy ? (
                'Sending…'
              ) : (
                <>
                  Send my response
                  <Send size={14} />
                </>
              )}
            </button>

          </motion.form>
        )}

        {/* Success */}
        {submitted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto mt-10 max-w-2xl border border-[#C89B4A]/20 bg-white/45 p-10 text-center"
          >

            <Heart
              className="mx-auto text-[#C89B4A]"
              size={24}
            />

            <h3 className="mt-4 font-display text-4xl text-[#3B2A1E]">
              {attendance === 'yes'
                ? 'Thank you for confirming.'
                : 'We’re sorry you won’t be able to join us.'}
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#6e5d4f]">
              {attendance === 'yes'
                ? "We can’t wait to celebrate with you!"
                : 'You’ll be missed, and thank you for letting us know.'}
            </p>

          </motion.div>
        )}

      </div>
    </section>
  )
}