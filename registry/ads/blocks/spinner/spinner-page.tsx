"use client";

import { Spinner } from "@/registry/ads/blocks/spinner/spinner";
import { Button } from "@/registry/ads/ui/button";

function SpinnerShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Appearances */}
      <div className="space-y-4">
        <h6>Appearances</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Spinner size="medium" appearance="inherit" />
            <span className="font-body-small text-text-subtlest">inherit</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm bg-(--darkneutral100) p-2">
            <Spinner size="medium" appearance="invert" />
            <span className="font-body-small text-text-inverse">invert</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h6>Sizes</h6>
        <div className="flex flex-wrap items-start gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Spinner size="xsmall" />
            <span className="font-body-small text-text-subtlest">xsmall (12px)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Spinner size="small" />
            <span className="font-body-small text-text-subtlest">small (16px)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Spinner size="medium" />
            <span className="font-body-small text-text-subtlest">medium (24px)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Spinner size="large" />
            <span className="font-body-small text-text-subtlest">large (48px)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <Spinner size="xlarge" />
            <span className="font-body-small text-text-subtlest">xlarge (96px)</span>
          </div>
        </div>
      </div>

      {/* With/Without Text */}
      <div className="space-y-4">
        <h6>With/Without Text</h6>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <Button appearance="default">
              <Spinner size="small" />
              Please wait
            </Button>
            <span className="font-body-small text-text-subtlest">With text</span>
          </div>
          <div className="flex flex-col items-start gap-1">
            <Button appearance="default" spacing="icon">
              <Spinner size="small" />
            </Button>
            <span className="font-body-small text-text-subtlest">Without text</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpinnerPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <SpinnerShowcase />
    </div>
  );
}
