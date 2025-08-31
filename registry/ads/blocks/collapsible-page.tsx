"use client";

import * as React from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/registry/ads/ui/collapsible";
import { Button } from "@/registry/ads/ui/button";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import ChevronDownIconCore from "@atlaskit/icon/core/chevron-down";

const ChevronDownIcon = IconWrapper(ChevronDownIconCore);

function CollapsibleShowcase() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(true);

  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Collapsible */}
      <div className="space-y-4">
        <h6>Basic</h6>
        <div className="w-80 space-y-2">
          <Collapsible open={isOpen} onOpenChange={setIsOpen}>
            <CollapsibleTrigger asChild>
              <Button appearance="subtle" className="w-full justify-between">
                <span>Can I use this in my project?</span>
                <ChevronDownIcon size="small" label="Toggle" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-border mt-2 rounded-md border p-4">
              <p className="font-body-small text-text">Yes. Free to use for personal and commercial projects. No attribution required.</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Default Open */}
      <div className="space-y-4">
        <h6>Default Open</h6>
        <div className="w-80 space-y-2">
          <Collapsible open={isOpen2} onOpenChange={setIsOpen2}>
            <CollapsibleTrigger asChild>
              <Button appearance="subtle" className="w-full justify-between">
                <span>Is it accessible?</span>
                <ChevronDownIcon size="small" label="Toggle" className={`transition-transform ${isOpen2 ? "rotate-180" : ""}`} />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="border-border mt-2 rounded-md border p-4">
              <p className="font-body-small text-text">Yes. It adheres to the WAI-ARIA design pattern with proper keyboard navigation and screen reader support.</p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Multiple Items */}
      <div className="space-y-4">
        <h6>FAQ Example</h6>
        <div className="w-80 space-y-2">
          {[
            {
              question: "What is this component?",
              answer: "A collapsible component built with Radix UI primitives.",
            },
            {
              question: "How do I install it?",
              answer: "Copy and paste the component source code into your project.",
            },
            {
              question: "Can I customize it?",
              answer: "Yes, you can customize the styles using CSS or utility classes.",
            },
          ].map((item, index) => (
            <Collapsible key={index}>
              <CollapsibleTrigger asChild>
                <Button appearance="subtle" className="w-full justify-between">
                  <span>{item.question}</span>
                  <ChevronDownIcon size="small" label="Toggle" />
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="border-border mt-2 rounded-md border p-4">
                <p className="font-body-small text-text">{item.answer}</p>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CollapsiblePage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <CollapsibleShowcase />
    </div>
  );
}
