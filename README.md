# Khalil & Asil — Luxury Wedding Invitation

A cinematic React + Vite + Tailwind CSS + Framer Motion wedding invitation.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL (normally `http://localhost:5173`).

## Personalization

Edit `src/data/wedding.js` to change:
- Couple names
- Wedding date/time/day
- Venue and address
- Story timeline
- Gallery images
- Guest slugs

### Personalized invitations

Examples:
- `/invite/ahmad`
- `/invite/family`

Add guests inside `src/data/wedding.js` under `guests`.

## Photos

Replace files in `public/images/` while keeping the same filenames, or update the paths in `wedding.gallery`.

## Music

Replace `public/music/wedding-placeholder.wav` with your own audio and update `src/components/MusicToggle.jsx` if the filename changes. Music is intentionally opt-in and does not autoplay.

## RSVP / Database

The current RSVP service saves submissions to browser `localStorage` so the UI works immediately. The integration point is `src/services/rsvp.js`.

For Supabase/Firebase, replace `submitRSVP()` with your API/database call. The payload already follows:

```text
guest_name
attendance
number_of_guests
meal_preference
dietary_restrictions
message
submitted_at
```

For production, validate again on the server and add rate limiting / spam protection.

## Deploy

### Vercel
1. Push the folder to GitHub.
2. Import the repository into Vercel.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Deploy.

### Netlify
1. Push to GitHub.
2. New site from Git.
3. Build command: `npm run build`.
4. Publish directory: `dist`.

Because personalized links use Vite's client-side routing fallback, configure the host to serve `index.html` for unknown routes if your host does not already do so.
