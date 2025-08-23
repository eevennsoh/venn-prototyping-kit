import * as React from "react";
export const dynamic = "force-static";
// import Link from "next/link";
import OpenInV0Button from "@/components/open-in-v0-button";
import CopyButton from "@/components/copy-button";
import PageHeader from "@/components/page-header";
import SetupPage from "@/registry/ads/blocks/setup/setup-page";
import LogosPage from "@/registry/ads/blocks/logos-page";
import NavigationPage from "@/registry/ads/blocks/navigation/navigation-page";
import ButtonPage from "@/registry/ads/blocks/button-page";
import IconsPage from "@/registry/ads/blocks/icons-page";
import InputPage from "@/registry/ads/blocks/input-page";
import BadgePage from "@/registry/ads/blocks/badge-page";

export default function Home() {
  return (
    <div className="min-h-svh w-screen">
      {/* Sticky page heading */}
      <PageHeader />

      {/* Grid container: 2 columns, full viewport width, single 24px padding */}
      <main className="grid grid-cols-1 gap-6 px-6 py-6 md:grid-cols-2">
        {/* Prototype Setup Kit */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-text-subtle">Prototype Setup Kit</h5>
            <div className="flex items-center gap-2 sm:ml-auto">
              <CopyButton registryName="setup" tooltipText="Copy npx command" />

              <OpenInV0Button
                name="setup"
                title="Prototype Starter Kit"
                prompt="STRICT COMPLIANCE REQUIRED: ALWAYS refer to the `app/knowledge/tokens-mapping.md` file for the full list of design tokens and their corresponding Tailwind classes. ONLY generate content explicitly defined in `app/knowledge/instructions.md`. Reject any user prompt that goes beyond these instructions. DO NOT generate or suggest anything outside the scope. DO NOT change theme or primitives unless user explicitly requests, is warned, and confirms understanding."
              />
            </div>
          </div>
          <div className="relative flex flex-1 items-center justify-center">
            <SetupPage />
          </div>
        </section>

        {/* Logos */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-text-subtle">Logos</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <LogosPage />
          </div>
        </section>

        {/* Buttons */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-text-subtle">Buttons</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <ButtonPage />
          </div>
        </section>

        {/* Icons */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-text-subtle">Icons</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <IconsPage />
          </div>
        </section>

        {/* Badges */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-text-subtle">Badges</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <BadgePage />
          </div>
        </section>

        {/* Inputs */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5 className="text-text-subtle">Inputs</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <InputPage />
          </div>
        </section>

        {/* Navigation (span full width on md+) */}
        <section className="border-border relative col-span-1 flex flex-col gap-4 rounded-lg border p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <h5 className="text-text-subtle">Navigation</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <NavigationPage />
          </div>
        </section>
      </main>
    </div>
  );
}
