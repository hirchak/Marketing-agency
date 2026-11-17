# Faura Digital — Current Implementation State

This is the technical snapshot for the current repository. When shared with ChatGPT, it serves as Stage 4 context and is intended to stand alone; it describes inspected source code, not live deployment or provider state.

## 1. Current product

The repository contains a public, single-page marketing site for a digital-products, technology, AI and venture agency. The current project identity is Faura Digital, while the app, metadata and several public URLs still use SAV.AGENCY during the rebranding and reconstruction phase. The site presents service offers and work, then invites prospective clients to request a Fit Check.

## 2. Major capabilities

- The page assembles a hero, agency story, proof strip, four capability areas, working method, studio, case cards, pricing and lead form. Navigation and responsive menu behavior are implemented in the React app.
- Service offers and three case entries are authored in local TypeScript data. Pricing and case statuses are displayed content, not data supplied by a CMS or verified against live projects. Service areas are ordered Digital Products and AI, Websites, Marketing and Growth, Media and Content in the capabilities, pricing catalogue and footer, to match the digital-product positioning.
- The current rendered site is English-only: the i18n provider fixes the locale to English. Ukrainian and Czech strings remain in source data but are not selectable through the current UI.
- The Fit Check form posts to `/api/lead`. The Vercel-style function validates the email, trims and length-caps every field (keeps the Telegram message under its 4096-character limit), drops submissions that fill a hidden honeypot field, and sends the lead to configured Telegram chats. It has no lead database or other durable storage. The form keeps the visitor's answers on failure and shows a recovery message. The source path is implemented, but successful provider delivery depends on server environment configuration and has not been checked live.
- The page has a skip link, an SVG favicon, an Apple touch icon, a 1200×630 share image, `robots.txt` and `sitemap.xml` (all in `public/`).
- The footer offers only the Fit Check as a contact path. The former `info@sav.agency` and `t.me/andrisav` links were removed on 2026-11-17: `sav.agency` has no mail server and its DNS points to a domain marketplace, and `@andrisav` does not resolve to a Telegram profile. A verified public contact still needs to be supplied.
- The page includes GSAP motion and ambient visual effects, with reduced-motion handling in the main section animations.

## 3. Technical foundation

The frontend is a React 19 single-page app written in TypeScript and built with Vite 8. It uses CSS Modules plus global styles, GSAP with `@gsap/react`, and Google Fonts loaded from the HTML entry point. `api/lead.ts` is a Node-style Vercel function and calls the Telegram Bot API using server-side `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_IDS` variables. This site has no authentication, database, CMS, or payment integration.

## 4. Useful code map

- `src/App.tsx` — page assembly, section order and main scroll animations.
- `src/components/sections/` — capability, story, method, cases, studio, pricing and lead-form UI.
- `src/data/offers.ts` and `src/data/cases.ts` — static offer and portfolio content.
- `src/lib/i18n.tsx` and `src/data/translations.ts` — fixed English runtime and retained locale strings.
- `api/lead.ts` — form validation, field limits, honeypot and Telegram notification endpoint. The project `tsc` step covers only `src/`; check this file separately (it type-checks with `tsc --strict --module esnext --moduleResolution bundler`).
- `public/` — favicon, touch icon, share image, robots and sitemap. All absolute URLs use `https://sav-agency.vercel.app/`.
- `src/styles/globals.css` — colour tokens. `--text-muted` is `#8C8C96` (≥4.5:1 on the dark surfaces) and buttons with white labels use `--accent-fill` `#D63B00`; the brighter `--accent` `#FF4500` stays for marks and lines.
- `package.json` and `vite.config.ts` — existing `npm run dev`, `npm run build`, and `npm run preview` commands; Vite dev port is 3000.

## 5. Current limitations and decisions

- The Faura Digital repository identity has not yet been carried through the frontend: visible branding, page metadata and legacy URLs still say SAV.AGENCY. Preserve these technical/public identifiers during the rebrand unless a task explicitly authorizes the migration.
- Ukrainian and Czech localization data is present but runtime language selection is disabled by the current English-only implementation.
- Offers and portfolio entries are local static content; there is no CMS or application persistence. Lead intake relies on Telegram configuration and is not stored in this app.
- Provider environment, actual Vercel deployment, public-domain behavior and end-to-end lead delivery are unverified. Local source alone does not establish any of them.
- Hosting as observed on 2026-11-17: `https://sav-agency.vercel.app/` and `https://marketing-agency-dusky.vercel.app/` serve the same build as local commit `1d14bb5`. They are not served by the Vercel project `faura-digital` (`prj_3clk6CmgsKMG6AdaSVe1seRmCWN9`) in Andrij's team: that project has no environment variables, and its domain `marketing-agency-seven-theta.vercel.app` returns 404. The live site therefore runs from another Vercel account, most likely the repository owner's, where the Telegram variables could not be inspected.
- `package-lock.json` is git-ignored, so each deployment resolves dependency versions afresh.

## 6. Verification checkpoint

Reviewed 2026-09-24 at branch `main`, commit `1d14bb5` (`Make public site English only`), before this documentation update. The working tree already had an edited `README.md` and an untracked `AGENTS.md`; their Faura Digital introduction and project context were preserved and extended. This review inspected the page composition, locale provider and translation data, offers and cases, lead form and API handler, package/build configuration, current project instructions and README, relevant planning-document headings, and recent local history. No application build, test, browser session or deployment check was run for this documentation task. Individual styling details and live provider/deployment behavior were not reviewed. This checkpoint describes the implementation inspected at the stated commit; it does not imply verification of the later documentation changes containing this file.

### Partial update, 2026-11-17

Not a fresh full review. Full audit and refinement pass on branch `main` at commit `8e9097d`, working tree uncommitted at the time of writing. Inspected all components, styles, data, the lead function, build configuration and the live URLs. Verified: `npm run build` passes; `api/lead.ts` type-checks and its handler was exercised with mock requests (GET health, 405, missing/invalid/oversized email, honeypot, not configured, string body, HTML escaping, long input capped below 4096 characters, Telegram failure); the rendered page at 1440×900 and 390×844 has no console errors, failed requests or horizontal overflow; an automated scan found no text below WCAG AA contrast; keyboard skip link, mobile menu (open, Escape) and the form error path were checked in Chromium. Not verified: real Telegram delivery, the live deployment after these changes, Safari and Firefox. The public site still shows the previous build until these changes are committed and deployed.

