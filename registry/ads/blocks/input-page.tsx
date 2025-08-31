"use client";

import { Input } from "@/registry/ads/ui/input";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import SearchIconCore from "@atlaskit/icon/core/search";

const SearchIcon = IconWrapper(SearchIconCore);

function InputShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Appearance */}
      <div className="space-y-4">
        <h6>Appearance</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1">
            <Input appearance="standard" placeholder="Standard" />
          </div>
          <div className="flex-1">
            <Input appearance="subtle" placeholder="Subtle" />
          </div>
          <div className="flex-1">
            <Input appearance="none" placeholder="None" />
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="space-y-4">
        <h6>Size</h6>
        <div className="flex flex-wrap items-start gap-4">
          <div className="flex-1">
            <Input size="default" placeholder="Default" />
          </div>
          <div className="flex-1">
            <Input size="compact" placeholder="Compact" />
          </div>
        </div>
      </div>

      {/* With Icon */}
      <div className="space-y-4">
        <h6>With Icon</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1">
            <Input iconBefore={<SearchIcon label="Search" spacing="spacious" appearance="subtlest" />} placeholder="Icon before" />
          </div>
          <div className="flex-1">
            <Input iconAfter={<SearchIcon label="Search" spacing="spacious" appearance="subtlest" />} placeholder="Icon after" />
          </div>
        </div>
      </div>

      {/* State */}
      <div className="space-y-4">
        <h6>State</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1">
            <Input disabled placeholder="Disabled" />
          </div>
          <div className="flex-1">
            <Input className="border-border-focused inset-ring-border-focused inset-ring" placeholder="Focused" />
          </div>
          <div className="flex-1">
            <Input aria-invalid="true" defaultValue="Invalid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InputPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <InputShowcase />
    </div>
  );
}
