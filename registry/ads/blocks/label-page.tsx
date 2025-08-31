"use client";

import { Label } from "@/registry/ads/ui/label";
import { Input } from "@/registry/ads/ui/input";
import { Checkbox } from "@/registry/ads/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/registry/ads/ui/radio-group";

function LabelShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Label */}
      <div className="space-y-4">
        <h6>Basic</h6>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
      </div>

      {/* Required Label */}
      <div className="space-y-4">
        <h6>Required</h6>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">
            Name <span className="text-text-danger">*</span>
          </Label>
          <Input id="name" placeholder="Enter your name" />
        </div>
      </div>

      {/* With Help Text */}
      <div className="space-y-4">
        <h6>With Help Text</h6>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input id="username" placeholder="Enter username" />
          <p className="font-body-small text-text-subtlest">This will be your public display name.</p>
        </div>
      </div>

      {/* With Checkbox */}
      <div className="space-y-4">
        <h6>With Checkbox</h6>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </div>

      {/* With Radio Group */}
      <div className="space-y-4">
        <h6>With Radio Group</h6>
        <div className="space-y-3">
          <Label>Notification preferences</Label>
          <RadioGroup defaultValue="email">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="email" id="email-option" />
              <Label htmlFor="email-option">Email</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sms" id="sms-option" />
              <Label htmlFor="sms-option">SMS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="push" id="push-option" />
              <Label htmlFor="push-option">Push notifications</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      {/* Disabled Label */}
      <div className="space-y-4">
        <h6>Disabled</h6>
        <div className="flex flex-col gap-2">
          <Label htmlFor="disabled-input" className="text-text-disabled">
            Disabled Field
          </Label>
          <Input id="disabled-input" placeholder="Disabled input" disabled />
        </div>
      </div>
    </div>
  );
}

export default function LabelPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <LabelShowcase />
    </div>
  );
}
