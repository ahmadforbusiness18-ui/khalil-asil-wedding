import { motion } from 'framer-motion'

export function Ornament({ className = '' }) {
  return <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true"><span className="h-px w-14 bg-gradient-to-r from-transparent to-[#c8a45b]/70"/><span className="text-[#ead8aa] text-xs">✦</span><span className="h-px w-14 bg-gradient-to-l from-transparent to-[#c8a45b]/70"/></div>
}

export function GoldDust() {
  const dots = Array.from({ length: 22 }, (_, i) => i)
  return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">{dots.map(i => <motion.span key={i} className="absolute h-1 w-1 rounded-full bg-[#ead8aa]" initial={{ opacity: 0, y: 40 }} animate={{ opacity: [0,.45,0], y: -120 }} transition={{ duration: 5 + (i%4), delay: i*.22, repeat: Infinity }} style={{ left: `${(i*37)%100}%`, top: `${55 + ((i*13)%40)}%` }} />)}</div>
}
