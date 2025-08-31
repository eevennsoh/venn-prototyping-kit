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
import CalendarPage from "@/registry/ads/blocks/calendar-page";
import CheckboxPage from "@/registry/ads/blocks/checkbox-page";
import RadioGroupPage from "@/registry/ads/blocks/radio-group-page";
import SliderPage from "@/registry/ads/blocks/slider-page";
import SpinnerPage from "@/registry/ads/blocks/spinner/spinner-page";
import AlertPage from "@/registry/ads/blocks/alert-page";
import AvatarPage from "@/registry/ads/blocks/avatar-page";
import CardPage from "@/registry/ads/blocks/card-page";
import ProgressPage from "@/registry/ads/blocks/progress-page";
import SkeletonPage from "@/registry/ads/blocks/skeleton-page";
import SwitchPage from "@/registry/ads/blocks/switch-page";
import TabsPage from "@/registry/ads/blocks/tabs-page";
import TextareaPage from "@/registry/ads/blocks/textarea-page";
import SeparatorPage from "@/registry/ads/blocks/separator-page";
import TablePage from "@/registry/ads/blocks/table-page";
import TogglePage from "@/registry/ads/blocks/toggle-page";
import AccordionPage from "@/registry/ads/blocks/accordion-page";
import AspectRatioPage from "@/registry/ads/blocks/aspect-ratio-page";
import BreadcrumbPage from "@/registry/ads/blocks/breadcrumb-page";
import CollapsiblePage from "@/registry/ads/blocks/collapsible-page";
import DialogPage from "@/registry/ads/blocks/dialog-page";
import DropdownMenuPage from "@/registry/ads/blocks/dropdown-menu-page";
import FormPage from "@/registry/ads/blocks/form-page";
import InputOTPPage from "@/registry/ads/blocks/input-otp-page";
import LabelPage from "@/registry/ads/blocks/label-page";
import PaginationPage from "@/registry/ads/blocks/pagination-page";
import PopoverPage from "@/registry/ads/blocks/popover-page";
import ScrollAreaPage from "@/registry/ads/blocks/scroll-area-page";
import SelectPage from "@/registry/ads/blocks/select-page";
import SheetPage from "@/registry/ads/blocks/sheet-page";
import ToggleGroupPage from "@/registry/ads/blocks/toggle-group-page";
import TooltipPage from "@/registry/ads/blocks/tooltip-page";

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
            <h5>Prototype Setup Kit</h5>
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
            <h5>Logo</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <LogosPage />
          </div>
        </section>

        {/* Buttons */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Button</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <ButtonPage />
          </div>
        </section>

        {/* Icons */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Icon</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <IconsPage />
          </div>
        </section>

        {/* Badges */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Badge</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <BadgePage />
          </div>
        </section>

        {/* Calendar */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Calendar</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <CalendarPage />
          </div>
        </section>

        {/* Inputs */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Input</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <InputPage />
          </div>
        </section>

        {/* Checkboxes */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Checkbox</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <CheckboxPage />
          </div>
        </section>

        {/* Radio Groups */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Radio Group</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <RadioGroupPage />
          </div>
        </section>

        {/* Sliders */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Slider</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <SliderPage />
          </div>
        </section>

        {/* Spinner */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Spinner</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <SpinnerPage />
          </div>
        </section>

        {/* Alert */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Alert</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <AlertPage />
          </div>
        </section>

        {/* Avatar */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Avatar</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <AvatarPage />
          </div>
        </section>

        {/* Card */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Card</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <CardPage />
          </div>
        </section>

        {/* Progress */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Progress</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <ProgressPage />
          </div>
        </section>

        {/* Skeleton */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Skeleton</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <SkeletonPage />
          </div>
        </section>

        {/* Switch */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Switch</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <SwitchPage />
          </div>
        </section>

        {/* Tabs */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Tabs</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <TabsPage />
          </div>
        </section>

        {/* Textarea */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Textarea</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <TextareaPage />
          </div>
        </section>

        {/* Separator */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Separator</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <SeparatorPage />
          </div>
        </section>

        {/* Table */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Table</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <TablePage />
          </div>
        </section>

        {/* Toggle */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Toggle</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <TogglePage />
          </div>
        </section>

        {/* Accordion */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Accordion</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <AccordionPage />
          </div>
        </section>

        {/* Aspect Ratio */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Aspect Ratio</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <AspectRatioPage />
          </div>
        </section>

        {/* Breadcrumb */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Breadcrumb</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <BreadcrumbPage />
          </div>
        </section>

        {/* Collapsible */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Collapsible</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <CollapsiblePage />
          </div>
        </section>

        {/* Dialog */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Dialog</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <DialogPage />
          </div>
        </section>

        {/* Dropdown Menu */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Dropdown Menu</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <DropdownMenuPage />
          </div>
        </section>

        {/* Input OTP */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Input OTP</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <InputOTPPage />
          </div>
        </section>

        {/* Label */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Label</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <LabelPage />
          </div>
        </section>

        {/* Pagination */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Pagination</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <PaginationPage />
          </div>
        </section>

        {/* Popover */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Popover</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <PopoverPage />
          </div>
        </section>

        {/* Scroll Area */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Scroll Area</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <ScrollAreaPage />
          </div>
        </section>

        {/* Select */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Select</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <SelectPage />
          </div>
        </section>

        {/* Sheet */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Sheet</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <SheetPage />
          </div>
        </section>

        {/* Toggle Group */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Toggle Group</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <ToggleGroupPage />
          </div>
        </section>

        {/* Tooltip */}
        <section className="border-border relative flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <h5>Tooltip</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <TooltipPage />
          </div>
        </section>

        {/* Form (span full width on md+) */}
        <section className="border-border relative col-span-1 flex flex-col gap-4 rounded-lg border p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <h5>Form</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <FormPage />
          </div>
        </section>

        {/* Navigation (span full width on md+) */}
        <section className="border-border relative col-span-1 flex flex-col gap-4 rounded-lg border p-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <h5>Navigation</h5>
          </div>
          <div className="relative flex flex-1 items-start justify-start">
            <NavigationPage />
          </div>
        </section>
      </main>
    </div>
  );
}
