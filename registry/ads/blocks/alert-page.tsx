"use client";

import { Alert, AlertTitle, AlertDescription } from "@/registry/ads/ui/alert";

function AlertShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Variants */}
      <div className="space-y-4">
        <h6>Variants</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>This is a default alert message.</AlertDescription>
            </Alert>
            <span className="font-body-small text-text-subtlest">default</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Alert variant="destructive">
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>Something went wrong. Please try again.</AlertDescription>
            </Alert>
            <span className="font-body-small text-text-subtlest">destructive</span>
          </div>
        </div>
      </div>

      {/* With/Without Icon */}
      <div className="space-y-4">
        <h6>With/Without Icon</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Alert>
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>This alert has no icon.</AlertDescription>
            </Alert>
            <span className="font-body-small text-text-subtlest">without icon</span>
          </div>
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Alert>
              <span className="text-blue-500">ℹ</span>
              <AlertTitle>Info</AlertTitle>
              <AlertDescription>This alert has an icon.</AlertDescription>
            </Alert>
            <span className="font-body-small text-text-subtlest">with icon</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AlertPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <AlertShowcase />
    </div>
  );
}
