"use client";

import { Switch } from "@/registry/ads/ui/switch";

function SwitchShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic States */}
      <div className="space-y-4">
        <h6>Basic States</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="switch-off" />
            <label htmlFor="switch-off" className="font-body text-text cursor-pointer">
              Off
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="switch-on" defaultChecked />
            <label htmlFor="switch-on" className="font-body text-text cursor-pointer">
              On
            </label>
          </div>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h6>States</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch disabled id="switch-disabled-off" />
            <label htmlFor="switch-disabled-off" className="font-body text-text-disabled cursor-not-allowed">
              Disabled Off
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Switch disabled defaultChecked id="switch-disabled-on" />
            <label htmlFor="switch-disabled-on" className="font-body text-text-disabled cursor-not-allowed">
              Disabled On
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SwitchPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <SwitchShowcase />
    </div>
  );
}
