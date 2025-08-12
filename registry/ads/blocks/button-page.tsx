"use client";

import { Button } from "@/components/ui/button";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";

import AddIconCore from "@atlaskit/icon/core/add";
import SettingsIconCore from "@atlaskit/icon/core/settings";

const AddIcon = IconWrapper(AddIconCore);
const SettingsIcon = IconWrapper(SettingsIconCore);

function ButtonShowcase() {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      {/* Variants */}
      <div className="space-y-4">
        <h3 className="font-semibold">Variants</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button appearance="default">Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="subtle">Subtle</Button>
          <Button appearance="warning">Warning</Button>
          <Button appearance="danger">Danger</Button>
          <Button appearance="link">Link</Button>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button spacing="default">Default</Button>
          <Button spacing="icon" aria-label="Settings">
            <SettingsIcon label="Settings" />
          </Button>
          <Button spacing="compact">Compact</Button>
          <Button spacing="iconSm" aria-label="Settings">
            <SettingsIcon size="small" label="Settings" />
          </Button>
        </div>
      </div>

      {/* With icons */}
      <div className="space-y-4">
        <h3 className="font-semibold">With Icons</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button>
            <AddIcon label="Add" />
            Create
          </Button>
          <Button appearance="default">
            Icon after
            <SettingsIcon label="Settings" />
          </Button>
          <Button appearance="default">
            <SettingsIcon label="Settings" />
            Icon before
          </Button>
        </div>
      </div>

      {/* States */}
      <div className="space-y-4">
        <h3 className="font-semibold">States</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button disabled>Disabled</Button>
          <Button appearance="default" aria-invalid>
            Invalid
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ButtonPage() {
  return (
    <div className="flex h-full items-start justify-start">
      <ButtonShowcase />
    </div>
  );
}
