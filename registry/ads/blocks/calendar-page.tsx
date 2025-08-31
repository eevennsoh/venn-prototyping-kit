"use client";

import * as React from "react";
import { type DateRange } from "react-day-picker";

import { Calendar } from "@/registry/ads/ui/calendar";

function CalendarShowcase() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: new Date(2025, 0, 27),
  });
  const [multipleDates, setMultipleDates] = React.useState<Date[]>([new Date(2025, 0, 12), new Date(2025, 0, 20)]);

  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Single Selection */}
      <div className="space-y-4">
        <h6>Single Selection</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border shadow-sm" />
            <span className="font-body-small text-text-subtlest">Single date selection with controlled state</span>
          </div>
        </div>
      </div>

      {/* Range Selection */}
      <div className="space-y-4">
        <h6>Range Selection</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Calendar mode="range" selected={dateRange} onSelect={setDateRange} numberOfMonths={2} className="rounded-md border shadow-sm" />
            <span className="font-body-small text-text-subtlest">Range selection with multiple months</span>
          </div>
        </div>
      </div>

      {/* Multiple Selection */}
      <div className="space-y-4">
        <h6>Multiple Selection</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Calendar mode="multiple" selected={multipleDates} onSelect={setMultipleDates} max={5} required className="rounded-md border shadow-sm" />
            <span className="font-body-small text-text-subtlest">Multiple date selection (max 5)</span>
          </div>
        </div>
      </div>

      {/* Calendar with Custom Button Appearance */}
      <div className="space-y-4">
        <h6>Custom Button Appearance</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Calendar mode="single" buttonAppearance="default" className="rounded-md border shadow-sm" />
            <span className="font-body-small text-text-subtlest">Default button appearance</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Calendar mode="single" buttonAppearance="primary" className="rounded-md border shadow-sm" />
            <span className="font-body-small text-text-subtlest">Primary button appearance</span>
          </div>
        </div>
      </div>

      {/* Disabled Calendar */}
      <div className="space-y-4">
        <h6>Disabled State</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Calendar mode="single" disabled className="rounded-md border shadow-sm" />
            <span className="font-body-small text-text-subtlest">Disabled calendar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CalendarPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <CalendarShowcase />
    </div>
  );
}
