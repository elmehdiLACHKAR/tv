# tv

## Cursor Cloud specific instructions

### Repository layout (important)
- The `main` branch is currently a placeholder: it contains only this file and `README.md`. There is no application code on `main`.
- The actual product — a **Next.js 15 IPTV / streaming landing website** — lives on the `cursor/*` feature branches (e.g. `cursor/premium-iptv-landing-759c`). These are parallel implementations. Check out a feature branch to work on the app.
- Most feature branches keep the Next.js app at the repo root (`package.json`, `app/` or `src/`, `next.config.*`). One branch (`cursor/iptv-landing-website-b6bb`) nests the app under `iptv-app/` instead; `cd iptv-app` before running commands there.

### Stack
- Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 4, Framer Motion, Lucide icons. Package manager: **npm** (a `package-lock.json` is committed on the app branches). Node 22 / npm 10 are available on the VM.

### Standard commands (run from the branch/dir that holds `package.json`)
- Install: `npm install`
- Dev server: `npm run dev` (Next.js on `http://localhost:3000`)
- Lint: `npm run lint`
- Build: `npm run build`
- Prod start (after build): `npm run start`

### Notes / gotchas
- The dev server binds to port 3000. It is a static, front-end-only landing site — no database, backend service, or environment variables/secrets are required to run or test it.
- The update script (`npm install`) only installs dependencies when a root `package.json` exists, so it is a safe no-op on `main` and only does work on the app branches. If working on the `iptv-app/` nested branch, run `npm install` inside `iptv-app/` yourself.
