"use client";

import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";

import AddIconCore from "@atlaskit/icon/core/add";

const AddIcon = IconWrapper(AddIconCore);

function IconsShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Appearance */}
      <div className="space-y-4">
        <h6>Appearance</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon appearance="default" label="Add" />
            <span className="font-body-small text-text-subtlest">default</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon appearance="subtle" label="Add" />
            <span className="font-body-small text-text-subtlest">subtle</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon appearance="subtlest" label="Add" />
            <span className="font-body-small text-text-subtlest">subtlest</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm bg-(--darkneutral100) p-2">
            <AddIcon appearance="inverse" label="Add" />
            <span className="font-body-small text-text-inverse">inverse</span>
          </div>
        </div>
      </div>

      {/* Size */}
      <div className="space-y-4">
        <h6>Size</h6>
        <div className="flex flex-wrap items-start gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon size="small" label="Search" />
            <span className="font-body-small text-text-subtlest">small (12px)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon size="medium" label="Search" />
            <span className="font-body-small text-text-subtlest">medium (16px)</span>
          </div>
        </div>
      </div>

      {/* Spacing */}
      <div className="space-y-4">
        <h6>Spacing</h6>
        <div className="flex flex-wrap items-start gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon size="small" label="Search" />
            <span className="font-body-small text-text-subtlest">default (12px)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon size="small" spacing="spacious" label="Search" />
            <span className="font-body-small text-text-subtlest">spacious (12px)</span>
          </div>
        </div>
        <div className="flex flex-wrap items-start gap-4">
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon size="medium" label="Search" />
            <span className="font-body-small text-text-subtlest">default (16px)</span>
          </div>
          <div className="border-border flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon size="medium" spacing="spacious" label="Search" />
            <span className="font-body-small text-text-subtlest">spacious (16px)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IconsPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <IconsShowcase />
    </div>
  );
}
