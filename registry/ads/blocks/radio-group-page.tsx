"use client";

import { RadioGroup, RadioGroupItem } from "@/registry/ads/ui/radio-group";

function RadioGroupShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Vertical Layout */}
      <div className="space-y-4">
        <h6>Vertical Layout</h6>
        <RadioGroup defaultValue="option-1" className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <RadioGroupItem value="option-1" id="option-1" />
            <label htmlFor="option-1" className="font-body text-text cursor-pointer">
              Option 1
            </label>
          </div>
          <div className="flex items-center gap-1">
            <RadioGroupItem value="option-2" id="option-2" />
            <label htmlFor="option-2" className="font-body text-text cursor-pointer">
              Option 2
            </label>
          </div>
        </RadioGroup>
      </div>

      {/* Horizontal Layout */}
      <div className="space-y-4">
        <h6>Horizontal Layout</h6>
        <RadioGroup defaultValue="horizontal-1" className="flex flex-row gap-4">
          <div className="flex items-center gap-1">
            <RadioGroupItem value="horizontal-1" id="horizontal-1" />
            <label htmlFor="horizontal-1" className="font-body text-text cursor-pointer">
              Option 1
            </label>
          </div>
          <div className="flex items-center gap-1">
            <RadioGroupItem value="horizontal-2" id="horizontal-2" />
            <label htmlFor="horizontal-2" className="font-body text-text cursor-pointer">
              Option 2
            </label>
          </div>
        </RadioGroup>
      </div>

      {/* Disabled States */}
      <div className="space-y-4">
        <h6>Disabled States</h6>
        <RadioGroup defaultValue="disabled-checked" className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <RadioGroupItem value="disabled-checked" id="disabled-checked" disabled />
            <label htmlFor="disabled-checked" className="font-body text-text-disabled cursor-not-allowed">
              Disabled Checked
            </label>
          </div>
          <div className="flex items-center gap-1">
            <RadioGroupItem value="disabled-unchecked" id="disabled-unchecked" disabled />
            <label htmlFor="disabled-unchecked" className="font-body text-text-disabled cursor-not-allowed">
              Disabled Unchecked
            </label>
          </div>
        </RadioGroup>
      </div>

      {/* Invalid States */}
      <div className="space-y-4">
        <h6>Invalid States</h6>
        <RadioGroup defaultValue="invalid-checked" className="flex flex-col gap-1">
          <div className="flex items-center gap-1">
            <RadioGroupItem value="invalid-checked" id="invalid-checked" aria-invalid="true" />
            <label htmlFor="invalid-checked" className="font-body text-text cursor-pointer">
              Invalid Checked
            </label>
          </div>
          <div className="flex items-center gap-1">
            <RadioGroupItem value="invalid-unchecked" id="invalid-unchecked" aria-invalid="true" />
            <label htmlFor="invalid-unchecked" className="font-body text-text cursor-pointer">
              Invalid Unchecked
            </label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

export default function RadioGroupPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <RadioGroupShowcase />
    </div>
  );
}
