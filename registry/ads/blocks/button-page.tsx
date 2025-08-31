"use client";

import { Button } from "@/registry/ads/ui/button";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";

import SettingsIconCore from "@atlaskit/icon/core/settings";

const SettingsIcon = IconWrapper(SettingsIconCore);

function ButtonShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Variants */}
      <div className="space-y-4">
        <h6>Appearance</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Button appearance="default">Default</Button>
          <Button appearance="primary">Primary</Button>
          <Button appearance="warning">Warning</Button>
          <Button appearance="danger">Danger</Button>
          <Button appearance="link">Link</Button>
          <Button appearance="subtle">Subtle</Button>
        </div>
      </div>

      {/* Size */}
      <div className="space-y-4">
        <h6>Size</h6>
        <div className="flex flex-wrap items-start gap-4">
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

      {/* With icon */}
      <div className="space-y-4">
        <h6>With Icon</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Button appearance="default">
            <SettingsIcon label="Settings" />
            Icon before
          </Button>
          <Button appearance="default">
            Icon after
            <SettingsIcon label="Settings" />
          </Button>
        </div>
      </div>

      {/* State */}
      <div className="space-y-4">
        <h6>State</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Button appearance="default" disabled>
            Default disabled
          </Button>
          <Button appearance="primary" disabled>
            Primary disabled
          </Button>
          <Button appearance="subtle" disabled>
            Subtle disabled
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="outline-border-focused outline-2 outline-offset-2">Focused</Button>
          <Button aria-pressed="true">Selected</Button>
        </div>
      </div>
    </div>
  );
}

export default function ButtonPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <ButtonShowcase />
    </div>
  );
}
