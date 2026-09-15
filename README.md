# Aether Form Pipeline Test

Minimal Next.js (App Router) + TypeScript + Tailwind site for teaching the
deploy path. The contact form is **demo-only** (UI mock).

**GitHub → Vercel → Form UI** (email wiring later)

## What it does

- Single page labeled **demo — not wired**
- Contact form: name, email, message
- Client-only fake success on submit — **no** Formspree / Resend / email API
- No `NEXT_PUBLIC_FORMSPREE_FORM_ID` required

## Setup

### Local run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build check

```bash
npm run build
```

### Environment

No secrets required for the demo form. `.env.example` documents that email is
not live. When you wire real delivery later, use **Formspree** or **Resend**
and add env vars then (never commit real secrets). For a real message now:
**mailto:giomagracia@gmail.com**.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Demo form UI only (no email backend yet)

## Footer

Aether Automations — form pipeline test (demo — not wired)
