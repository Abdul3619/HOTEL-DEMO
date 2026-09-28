# Azure Haven Hotel (template)

I built this luxury hotel website template (English / French) to pitch to hotel clients. It has room search, a concierge chat demo, a brand customizer ("Demo Tools") and an admin dashboard mockup.

This is a front-end demo: room availability is simulated, the chat replies are canned, the contact and newsletter forms don't send anything, and the admin dashboard shows sample data. Connecting a real booking engine, email service or database is a separate piece of work.

## Stack

React 19, Vite, Tailwind CSS 4, Motion. The page is prerendered at build time (`src/entry-server.tsx` + `scripts/prerender.mjs`), so `dist/index.html` contains the full page content; the browser then hydrates it.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
npm run lint     # type-check
```

## Deployment

Static site. Framework: Vite · Build command: `npm run build` · Output directory: `dist`. No environment variables are required.
