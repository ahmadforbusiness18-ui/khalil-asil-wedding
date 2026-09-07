import emailjs from '@emailjs/browser'

const KEY = 'khalil-asil-rsvps'

export async function submitRSVP(payload) {
  const record = {
    ...payload,
    submitted_at: new Date().toISOString(),
  }

  // Save RSVP locally
  const current = JSON.parse(
    localStorage.getItem(KEY) || '[]'
  )

  localStorage.setItem(
    KEY,
    JSON.stringify([...current, record])
  )

  // Send RSVP by email
  await emailjs.send(
    'service_8k5urzh',
    'template_xq6uc2w',
    {
      guest_name: payload.guest_name,
      attendance: payload.attendance,
      number_of_guests: payload.number_of_guests,
      favorite_song: payload.favorite_song || '—',
      message: payload.message || '—',
    },
    {
      publicKey: 'hqWHHPMY-6J-6BtdL',
    }
  )

  return {
    ok: true,
    record,
  }
}