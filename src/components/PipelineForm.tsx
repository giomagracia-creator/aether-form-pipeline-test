"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success";

export default function PipelineForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    // Client-only demo: no email API. Brief delay so the UI feels real.
    await new Promise((r) => setTimeout(r, 400));
    event.currentTarget.reset();
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-amber-500/40 bg-amber-500/10 p-6 text-amber-900 dark:text-amber-100"
        role="status"
      >
        <p className="font-semibold">Demo success — not wired</p>
        <p className="mt-1 text-sm opacity-90">
          Nothing was emailed. This form is UI-only. Real delivery later via
          Resend or Formspree. For a real message, use{" "}
          <a
            href="mailto:giomagracia@gmail.com"
            className="underline underline-offset-2"
          >
            mailto:giomagracia@gmail.com
          </a>
          .
        </p>
        <button
          type="button"
          className="mt-4 text-sm underline underline-offset-2"
          onClick={() => setStatus("idle")}
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 outline-none ring-zinc-400 focus:ring-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
      >
        {status === "submitting" ? "Working…" : "Try demo submit"}
      </button>
    </form>
  );
}
