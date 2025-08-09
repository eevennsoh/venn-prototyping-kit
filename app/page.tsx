import * as React from "react";
// import Link from "next/link";
import OpenInV0Button from "@/components/registry/open-in-v0-button";
import CopyButton from "@/components/registry/copy-button";
import ThemeToggleButton from "@/components/registry/theme-toggle-button";
import SetupPage from "@/registry/ads/blocks/setup/setup-page";
import LogosPage from "@/registry/ads/blocks/logos-page";
import NavigationPage from "@/registry/ads/blocks/navigation-page";

export default function Home() {
  return (
    <div className="min-h-svh w-screen">
      {/* Grid container: 2 columns, full viewport width, single 24px padding */}
      <main className="grid grid-cols-1 gap-6 px-6 py-6 md:grid-cols-2">
        {/* Page heading (full width) */}
        <div className="col-span-1 flex items-start justify-between md:col-span-2">
          <div>
            <h1 className="dark:text-dark-slate-900 text-3xl font-bold tracking-tight text-slate-900">Venn — Prototyping Kit</h1>
            <p className="dark:text-dark-slate-700 text-slate-700">A custom registry for distributing code.</p>
          </div>
          <ThemeToggleButton />
        </div>

        {/* Prototype Setup Kit */}
        <section className="dark:border-dark-slate-200a border-slate-200a relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="dark:text-dark-slate-700 text-sm text-slate-700">Prototype Setup Kit</h2>
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
          <div className="relative flex flex-1 items-center justify-center">
            <SetupPage />
          </div>
        </section>

        {/* Logos */}
        <section className="dark:border-dark-slate-200a border-slate-200a relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h2 className="dark:text-dark-slate-700 text-sm text-slate-700">Logos</h2>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <LogosPage />
          </div>
        </section>

        {/* Navigation (span full width on md+) */}
        <section className="dark:border-dark-slate-200a border-slate-200a relative col-span-1 flex flex-col gap-4 rounded-lg border p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="dark:text-dark-slate-700 text-sm text-slate-700">Navigation</h2>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <NavigationPage />
          </div>
        </section>
      </main>
    </div>
  );
}
