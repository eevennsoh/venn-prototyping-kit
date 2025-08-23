"use client";

import { Input } from "@/registry/ads/ui/input";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import SearchIconCore from "@atlaskit/icon/core/search";

const SearchIcon = IconWrapper(SearchIconCore);

function InputShowcase() {
  return (
    <div className="flex h-full flex-col gap-6">
      {/* Basics */}
      <div className="space-y-4">
        <h3 className="font-semibold">Basics</h3>
        <div className="flex flex-col gap-3">
          <Input placeholder="Placeholder" aria-label="Basic input" />
          <Input defaultValue="Value" aria-label="With value" />
        </div>
      </div>

      {/* With icon */}
      <div className="space-y-4">
        <h3 className="font-semibold">With Icon</h3>
        <div className="flex flex-col gap-3">
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
              <SearchIcon label="Search" appearance="subtlest" />
            </span>
            <Input className="pl-8" placeholder="Search" aria-label="Search" />
          </div>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="font-semibold">States</h3>
        <div className="flex flex-col gap-3">
          <Input disabled placeholder="Disabled" aria-label="Disabled input" />
          <Input aria-invalid defaultValue="Invalid" aria-label="Invalid input" />
        </div>
      </div>
    </div>
  );
}

export default function InputPage() {
  return (
    <div className="flex h-full items-start justify-start">
      <InputShowcase />
    </div>
  );
}
