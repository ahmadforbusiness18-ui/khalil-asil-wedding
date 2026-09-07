import { useEffect, useState } from 'react'
import { wedding } from '../data/wedding'

function getTimeLeft() {
  const target = new Date(wedding.date).getTime()
  const now = Date.now()
  const diff = Math.max(0, target - now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Countdown() {
  const [time, setTime] = useState(getTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const items = [
    ['days', 'DAYS'],
    ['hours', 'HOURS'],
    ['minutes', 'MINUTES'],
    ['seconds', 'SECONDS'],
  ]

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 max-w-5xl mx-auto">
      {items.map(([key, label]) => (
        <div
          key={key}
          className="
            flex min-h-[150px] flex-col items-center justify-center
            border border-[#a27b3f]/30
            bg-[#f5efe5]/60
            px-5 py-7
            transition-all duration-500
            hover:-translate-y-1
            hover:border-[#8b6335]/50
            hover:bg-[#f5efe5]
          "
        >
          <div
            className="
              font-display
              text-5xl sm:text-6xl
              leading-none
              text-[#5a3e25]
            "
          >
            {String(time[key]).padStart(2, '0')}
          </div>

          <div
            className="
              mt-4
              text-[11px]
              font-medium
              uppercase
              tracking-[.35em]
              text-[#795735]
            "
          >
            {label}
          </div>
        </div>
      ))}
    </div>
  )
}