import PipelineForm from "@/components/PipelineForm";

export default function Home() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim() ?? "";
  const configured = formId.length > 0;

  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col px-4 py-12 font-sans">
      <header className="mb-8">
        <p className="mb-2 inline-block rounded-full border border-amber-500/50 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">
          Pipeline test page
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          GitHub → Vercel → Form → Email
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Teaching / demo page only. Proves the Formspree delivery path — not a
          marketing site.
        </p>
      </header>

      <section className="flex-1">
        {!configured ? (
          <div
            className="rounded-lg border border-amber-500/50 bg-amber-500/10 p-6 text-amber-900 dark:text-amber-100"
            role="alert"
          >
            <p className="font-semibold">Needs configuration</p>
            <p className="mt-2 text-sm opacity-90">
              Set{" "}
              <code className="rounded bg-black/10 px-1.5 py-0.5 font-mono text-xs dark:bg-white/10">
                NEXT_PUBLIC_FORMSPREE_FORM_ID
              </code>{" "}
              in Vercel (or a local <code className="font-mono text-xs">.env.local</code>
              ). Create a Formspree form that delivers to{" "}
              <strong>giomagracia@gmail.com</strong>, then paste the form ID.
            </p>
            <p className="mt-3 text-sm opacity-90">
              See <code className="font-mono text-xs">.env.example</code> and
              the README for setup steps.
            </p>
          </div>
        ) : (
          <PipelineForm formId={formId} />
        )}
      </section>

      <footer className="mt-12 border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        Aether Automations — form pipeline test (demo)
      </footer>
    </main>
  );
}
