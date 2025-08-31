"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/registry/ads/ui/accordion";

function AccordionShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Single Selection */}
      <div className="space-y-4">
        <h6>Single Selection</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex w-full flex-col items-start gap-2 rounded-sm border p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>Yes. It comes with default styles that match the other components&apos; aesthetic.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>Yes! You can use the transition prop to configure the animation.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <span className="font-body-small text-text-subtlest">single item open at a time</span>
          </div>
        </div>
      </div>

      {/* Multiple Selection */}
      <div className="space-y-4">
        <h6>Multiple Selection</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex w-full flex-col items-start gap-2 rounded-sm border p-4">
            <Accordion type="multiple" className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger disabled>What are the advantages? (Disabled)</AccordionTrigger>
                <AccordionContent>You can open multiple items simultaneously and see all content at once.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize it?</AccordionTrigger>
                <AccordionContent>Absolutely! You can style it however you want with custom CSS classes.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it responsive?</AccordionTrigger>
                <AccordionContent>Yes, it works perfectly on all screen sizes and devices.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <span className="font-body-small text-text-subtlest">first item is disabled to show disabled state</span>
          </div>
        </div>
      </div>

      {/* With Default Open */}
      <div className="space-y-4">
        <h6>Default Open State</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex w-full flex-col items-start gap-2 rounded-sm border p-4">
            <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What&apos;s the default behavior?</AccordionTrigger>
                <AccordionContent>This item starts open by default using the defaultValue prop.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I change it?</AccordionTrigger>
                <AccordionContent>Yes, you can set any item to be open by default.</AccordionContent>
              </AccordionItem>
            </Accordion>
            <span className="font-body-small text-text-subtlest">first item open by default</span>
          </div>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h6>With Custom Content</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex w-full flex-col items-start gap-2 rounded-sm border p-4">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <span>📁</span>
                    <span>Project Files</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>Contains all project documentation and assets.</p>
                    <ul className="ml-4 list-inside list-disc space-y-1">
                      <li>Source code files</li>
                      <li>Design mockups</li>
                      <li>Documentation</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <span>👥</span>
                    <span>Team Members</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p>Current team composition and roles.</p>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="font-body-small">
                        <strong>John Doe</strong>
                        <br />
                        <span className="text-text-subtle">Lead Developer</span>
                      </div>
                      <div className="font-body-small">
                        <strong>Jane Smith</strong>
                        <br />
                        <span className="text-text-subtle">Designer</span>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <span className="font-body-small text-text-subtlest">custom content and icons</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AccordionPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <AccordionShowcase />
    </div>
  );
}
