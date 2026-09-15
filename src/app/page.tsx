import PipelineForm from "@/components/PipelineForm";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-lg flex-col px-4 py-12 font-sans">
      <header className="mb-8">
        <p className="mb-2 inline-block rounded-full border border-amber-500/50 bg-amber-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800 dark:text-amber-200">
          demo — not wired
        </p>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Form pipeline test (UI-only)
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Teaching / demo page. The form looks complete but does{" "}
          <strong>not</strong> call Formspree, Resend, or any email API. Real
          email wiring comes later.
        </p>
      </header>

      <section className="flex-1">
        <PipelineForm />
      </section>

      <footer className="mt-12 border-t border-zinc-200 pt-4 text-center text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-500">
        Aether Automations — form pipeline test (demo — not wired)
      </footer>
    </main>
  );
}
