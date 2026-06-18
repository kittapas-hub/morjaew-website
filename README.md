# หมอแจว — Morjaew Website

Landing page for **หมอแจว (พ่อปู่โหรา ญาณหยั่งรู้)** — ที่ปรึกษาจังหวะชีวิตและธุรกิจ
ด้วยศาสตร์จีน โหงวเฮ้ง และญาณหยั่งรู้.

Phase 1 goal: build trust with cold traffic, then send them to LINE OA `@mohjaew`
to book a private phone consultation (เริ่มต้น 999 บาท).

## Stack

Vite + React + TypeScript, plain CSS. No UI framework, no router (two routes are
handled by a pathname switch in `src/App.tsx`).

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

Other scripts:

```bash
npm run build      # typecheck (tsc -b) + production build → dist/
npm run preview    # serve the production build
npm run typecheck  # types only
npm run lint       # eslint
```

## Configuration

All brand + LINE values live in **`src/config/site.ts`** — the single source of
truth. Every CTA renders through `src/components/LineButton.tsx`, so the LINE URL
is never hardcoded across components.

Override per-environment with a `.env` file (see `.env.example`):

```
VITE_LINE_OA_ID=@mohjaew
VITE_LINE_URL=https://line.me/R/ti/p/@mohjaew
```

## Structure

```
src/
  config/site.ts        brand, LINE OA id/url, price, disclaimer
  components/            Header, Hero, QuickMenu, About, Pillars, Pricing,
                         Process, TrustPrivacy, Testimonials, Faq, FinalCta,
                         Footer, StickyCta, LineButton
  pages/
    Home.tsx            the landing page (sections composed in order)
    Booking.tsx         /booking + /line-booking placeholder for Phase 2 LIFF
  App.tsx               pathname → page
  index.css             global styles (ivory/navy/gold/green theme)
docs/
  research/             market-research PDF (strategic source of truth)
  reference/            old v3 HTML (content reference only)
  mockups/              light/ivory visual direction
```

## Phase 2 — LINE LIFF booking (not built yet)

The `/booking` route is a placeholder that currently just links to LINE. When
booking moves in-app, wire it up in `src/pages/Booking.tsx` (see the comment
block there): install `@line/liff`, add `VITE_LIFF_ID`, `liff.init()` on mount,
render the form, and submit to the booking backend. No backend or LINE SDK is
installed in Phase 1.

> Static hosting note: `/booking` relies on SPA fallback. On a static host, add a
> rewrite of all paths to `index.html` (e.g. Netlify `_redirects`, Vercel rewrites).

## Copy & compliance

Use safe language (แนวทาง / มุมมอง / ชี้จังหวะ / ประกอบการตัดสินใจ). Avoid
guarantees (แม่น 100% / รวยแน่นอน / รับประกันผลลัพธ์). The required disclaimer
lives in `src/config/site.ts` and renders in the footer.
