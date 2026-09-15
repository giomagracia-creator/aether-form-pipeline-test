# Aether Form Pipeline Test

Minimal Next.js (App Router) + TypeScript + Tailwind site that **only** proves:

**GitHub → Vercel → Form (Formspree) → Email**

Teaching / pipeline demo — not a marketing site.

## What it does

- Single page labeled as a pipeline test
- Contact form: name, email, message
- Submits to Formspree using `NEXT_PUBLIC_FORMSPREE_FORM_ID`
- Success and error UI states
- If the env var is missing, shows a clear “needs configuration” message

## Setup

### 1. Formspree

1. Create a form at [formspree.io](https://formspree.io)
2. Configure delivery to **giomagracia@gmail.com**
3. Copy the form ID from the endpoint (`https://formspree.io/f/XXXXXX` → `XXXXXX`)

### 2. Environment

Copy the example env file and set the form ID:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_FORMSPREE_FORM_ID=your_formspree_form_id
```

On Vercel: Project → Settings → Environment Variables → add the same key for Production (and Preview if desired). Redeploy after changing it.

### 3. Local run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build check

```bash
npm run build
```

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Formspree (client-side POST)

## Footer

Aether Automations — form pipeline test (demo)
