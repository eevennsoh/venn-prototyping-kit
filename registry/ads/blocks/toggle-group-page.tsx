"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/ads/ui/toggle-group";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import TextBoldIconCore from "@atlaskit/icon/core/text-bold";
import TextItalicIconCore from "@atlaskit/icon/core/text-italic";
import TextUnderlineIconCore from "@atlaskit/icon/core/text-underline";
import AlignTextLeftIconCore from "@atlaskit/icon/core/align-text-left";
import AlignTextCenterIconCore from "@atlaskit/icon/core/align-text-center";
import AlignTextRightIconCore from "@atlaskit/icon/core/align-text-right";

const TextBoldIcon = IconWrapper(TextBoldIconCore);
const TextItalicIcon = IconWrapper(TextItalicIconCore);
const TextUnderlineIcon = IconWrapper(TextUnderlineIconCore);
const AlignTextLeftIcon = IconWrapper(AlignTextLeftIconCore);
const AlignTextCenterIcon = IconWrapper(AlignTextCenterIconCore);
const AlignTextRightIcon = IconWrapper(AlignTextRightIconCore);

function ToggleGroupShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Single Selection */}
      <div className="space-y-4">
        <h6>Single Selection</h6>
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignTextLeftIcon size="small" label="Align left" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignTextCenterIcon size="small" label="Align center" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignTextRightIcon size="small" label="Align right" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Multiple Selection */}
      <div className="space-y-4">
        <h6>Multiple Selection</h6>
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Bold">
              <TextBoldIcon size="small" label="Bold" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Italic">
              <TextItalicIcon size="small" label="Italic" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Underline">
              <TextUnderlineIcon size="small" label="Underline" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Text Labels */}
      <div className="space-y-4">
        <h6>Text Labels</h6>
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup type="single" defaultValue="medium">
            <ToggleGroupItem value="small">Small</ToggleGroupItem>
            <ToggleGroupItem value="medium">Medium</ToggleGroupItem>
            <ToggleGroupItem value="large">Large</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Different Sizes */}
      <div className="space-y-4">
        <h6>Different Sizes</h6>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-body-small text-text-subtlest w-16">Small:</span>
            <ToggleGroup type="single" size="sm">
              <ToggleGroupItem value="a">A</ToggleGroupItem>
              <ToggleGroupItem value="b">B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-body-small text-text-subtlest w-16">Default:</span>
            <ToggleGroup type="single">
              <ToggleGroupItem value="a">A</ToggleGroupItem>
              <ToggleGroupItem value="b">B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-body-small text-text-subtlest w-16">Large:</span>
            <ToggleGroup type="single" size="lg">
              <ToggleGroupItem value="a">A</ToggleGroupItem>
              <ToggleGroupItem value="b">B</ToggleGroupItem>
              <ToggleGroupItem value="c">C</ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>

      {/* Disabled */}
      <div className="space-y-4">
        <h6>Disabled</h6>
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup type="single" disabled>
            <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
            <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
            <ToggleGroupItem value="option3">Option 3</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* View Modes */}
      <div className="space-y-4">
        <h6>View Modes</h6>
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup type="single" defaultValue="list">
            <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
            <ToggleGroupItem value="list">List</ToggleGroupItem>
            <ToggleGroupItem value="card">Card</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      {/* Filter Example */}
      <div className="space-y-4">
        <h6>Filter Categories</h6>
        <div className="flex flex-wrap items-center gap-4">
          <ToggleGroup type="multiple" defaultValue={["design", "development"]}>
            <ToggleGroupItem value="design">Design</ToggleGroupItem>
            <ToggleGroupItem value="development">Development</ToggleGroupItem>
            <ToggleGroupItem value="marketing">Marketing</ToggleGroupItem>
            <ToggleGroupItem value="sales">Sales</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </div>
  );
}

export default function ToggleGroupPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <ToggleGroupShowcase />
    </div>
  );
}
