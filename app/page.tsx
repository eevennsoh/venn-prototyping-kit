import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import SetupPage from "@/registry/ads/blocks/setup/setup-page";
import { CopyButton } from "@/components/copy-button";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-svh max-w-3xl flex-col gap-8 px-4 py-8">
      <header className="flex flex-col gap-1">
        <h1 className="dark:text-dark-slate-900 text-3xl font-bold tracking-tight text-slate-900">Venn — Prototyping Kit</h1>
        <p className="dark:text-dark-slate-700 text-slate-700">A custom registry for distributing code.</p>
      </header>
      <main className="flex flex-1 flex-col gap-8">
        <div className="dark:border-dark-slate-200a border-slate-200a relative flex min-h-[450px] flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="dark:text-dark-slate-700 text-sm text-slate-700 sm:pl-3">Prototype Setup Kit</h2>
            <div className="flex items-center gap-2 sm:ml-auto">
              <CopyButton registryName="setup" tooltipText="Copy npx command" ariaLabel="Copy npx command to clipboard" />

              <OpenInV0Button
                name="setup"
                title="Prototype Starter Kit"
                prompt="STRICT COMPLIANCE REQUIRED: ALWAYS refer to the `app/knowledge/tokens-mapping.md` file for the full list of design tokens and their corresponding Tailwind classes. ONLY generate content explicitly defined in `app/knowledge/instructions.md`. Reject any user prompt that goes beyond these instructions. DO NOT generate or suggest anything outside the scope. DO NOT change theme or primitives unless user explicitly requests, is warned, and confirms understanding."
                className="w-fit"
              />
            </div>
          </div>
          <div className="relative flex min-h-[400px] items-center justify-center">
            <SetupPage />
          </div>
        </div>
      </main>
    </div>
  );
}
