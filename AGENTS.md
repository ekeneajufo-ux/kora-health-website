# Kora Health Website — Agent Handoff / Update Guide

This is the marketing/investor site for **Kora Health Africa Ltd** — a clinical-intelligence
platform for African healthcare (clinics, health systems, governments/NGOs, population health).

## Stack & where things live
- **Framework:** Next.js 14 (App Router) + TypeScript + Tailwind CSS, exported as a **static site**.
- **Repo:** `/Users/ekene/kora-health-website` · GitHub `ekeneajufo-ux/kora-health-website` · branch `main`.
- **Hosting:** Cloudflare (Worker + static assets). Live domain: **korahealthafrica.com**.
- **Almost the entire homepage is one file:** `app/page.tsx` (a `'use client'` component — hero,
  "Who We Serve" tabs, capabilities, "See It In Practice" carousel, how-it-works, EMR section,
  investors, About, FAQ, and the "Request a Demo" contact form).
- `app/layout.tsx` — `<head>` metadata, SEO keywords, OpenGraph, JSON-LD. `siteUrl = https://korahealthafrica.com`.
- Legal pages: `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/security/page.tsx`,
  all wrapping `app/components/LegalShell.tsx`. Entity name is **Kora Health Africa Ltd**.
- `app/sitemap.ts` — update this if you add/remove a page or a homepage anchor.
- Config: `next.config.mjs` (`output: 'export'`, `images.unoptimized`, `trailingSlash: true`);
  `wrangler.jsonc` (Worker name `korahealthafrica`, serves `./out`, entry `worker/index.js`).
- `worker/index.js` — serves the static export AND handles `POST /api/contact` (the demo form),
  emailing via Resend to `info@korahealthafrica.com` + `ekene.ajufo@gmail.com`.

## Brand (use these exact values)
- Navy `#0A1A2F` · Ink `#0F172A` · Teal `#2DD4BF` (hover `#1BBFA8`) · Amber `#EAB308` · Cream `#FAF5EB`.
- Fonts: **Libre Baskerville** via the `display-serif` class (serif accents); **DM Sans** is the
  default body/heading sans. Section headings use sans (`text-4xl md:text-5xl font-bold`), NOT serif —
  keep new sections consistent with that.
- Content width: wrap section content in `max-w-7xl mx-auto` (or `max-w-3xl` for narrow text like FAQ/form).
- **No false advertising:** the product is pre-launch. Use capability language ("built to integrate",
  "designed to connect"), never "X EMRs already integrated" or hard metrics presented as fact.

## How to make and ship a change
Run everything from the repo root. `cd` does not persist between shell calls, so prefix each command:

1. **Edit** the relevant file (usually `app/page.tsx`).
2. **Build & verify it compiles / statically exports:**
   ```
   cd /Users/ekene/kora-health-website && npm run build
   ```
   A clean build prints `○ (Static) prerendered as static content` and writes `/out`.
   If the build fails, fix it before shipping — a broken build must not be pushed.
3. **Commit & push to `main`:**
   ```
   cd /Users/ekene/kora-health-website && git add -A && git commit -m "…" && git push
   ```
4. **Deploy to Cloudflare.** Depending on how the project is wired:
   - If Cloudflare's **Git integration** is connected, the push in step 3 triggers an
     automatic rebuild + deploy — just wait for it.
   - Otherwise deploy manually from the repo (needs Cloudflare auth):
     ```
     cd /Users/ekene/kora-health-website && npm run build && npx wrangler deploy
     ```
   When unsure, ask the user which one is set up rather than guessing.
5. Tell the user to hard-refresh (Cmd+Shift+R) once the deploy finishes.

## Guardrails
- Match the existing code style, spacing scale, and brand colors above — don't introduce new fonts,
  a component library, or a CSS framework.
- Keep everything static-export-safe: no server components that need a runtime, no `next/image`
  optimizer, no API routes in `app/` (form handling lives in `worker/index.js`, not Next.js).
- If you add a page or homepage anchor, also add it to `app/sitemap.ts`.
- Legal pages: entity is "Kora Health Africa Ltd"; registered address, country of incorporation,
  and governing law are intentionally left blank — do not invent them.
- Commit only intended changes; run `git status` first so you don't sweep in unrelated edits.

## ⚠️ Known uncommitted work (as of this handoff)
`app/page.tsx` has an **uncommitted** new section — "Built for African Infrastructure Reality"
(connectivity / power / satellite / government-partnership cards, id `#infrastructure`). It exists
only in the local working copy. Decide with the user whether to keep, edit, or discard it
(`git checkout -- app/page.tsx`) before starting new work, so it isn't lost or shipped by accident.

## Pending setup (not code — needs the user in dashboards)
- **Demo form email** only sends once `RESEND_API_KEY` is added as a secret to the Cloudflare
  Worker and the sending domain is verified in Resend. Until then the form returns a 503
  "email service is not configured yet" message — that is expected, not a bug.
- www → root 301 redirect is configured in the Cloudflare dashboard, not in this repo.
