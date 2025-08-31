"use client";

import { Button } from "@/registry/ads/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/registry/ads/ui/tooltip";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import SettingsIconCore from "@atlaskit/icon/core/settings";
import InfoIconCore from "@atlaskit/icon/core/information";

const SettingsIcon = IconWrapper(SettingsIconCore);
const InfoIcon = IconWrapper(InfoIconCore);

function TooltipShowcase() {
  return (
    <TooltipProvider>
      <div className="flex h-full w-full flex-col gap-6">
        {/* Basic Tooltip */}
        <div className="space-y-4">
          <h6>Basic</h6>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button appearance="default">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Icon with Tooltip */}
        <div className="space-y-4">
          <h6>Icon with Tooltip</h6>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button spacing="icon" appearance="subtle" aria-label="Settings">
                  <SettingsIcon label="Settings" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open settings</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button spacing="icon" appearance="subtle" aria-label="Information">
                  <InfoIcon label="Information" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More information</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Different Positions */}
        <div className="space-y-4">
          <h6>Different Positions</h6>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button appearance="default">Top (default)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tooltip on top</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button appearance="default">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Tooltip on bottom</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button appearance="default">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Tooltip on left</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button appearance="default">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Tooltip on right</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Rich Content */}
        <div className="space-y-4">
          <h6>Rich Content</h6>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button appearance="primary">Rich tooltip</Button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <div className="space-y-2">
                  <p className="font-medium">Rich Tooltip</p>
                  <p className="font-body-small">This tooltip contains multiple lines of text and can include rich formatting.</p>
                </div>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Disabled Element */}
        <div className="space-y-4">
          <h6>Disabled Element</h6>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="inline-block">
                  <Button appearance="default" disabled>
                    Disabled button
                  </Button>
                </span>
              </TooltipTrigger>
              <TooltipContent>
                <p>This button is disabled</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        {/* Custom Delay */}
        <div className="space-y-4">
          <h6>Custom Delay</h6>
          <div className="flex flex-wrap items-center gap-4">
            <Tooltip delayDuration={100}>
              <TooltipTrigger asChild>
                <Button appearance="default">Fast (100ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Fast tooltip</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip delayDuration={1000}>
              <TooltipTrigger asChild>
                <Button appearance="default">Slow (1000ms)</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Slow tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}

export default function TooltipPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <TooltipShowcase />
    </div>
  );
}
