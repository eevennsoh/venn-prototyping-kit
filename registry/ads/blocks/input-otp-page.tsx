"use client";

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/registry/ads/ui/input-otp";
import { Label } from "@/registry/ads/ui/label";

function InputOTPShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic OTP */}
      <div className="space-y-4">
        <h6>Basic (6 digits)</h6>
        <div className="space-y-2">
          <Label htmlFor="otp-basic">Enter verification code</Label>
          <InputOTP maxLength={6} id="otp-basic">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="font-body-small text-text-subtlest">Please enter the 6-digit verification code sent to your phone.</p>
        </div>
      </div>

      {/* With Separator */}
      <div className="space-y-4">
        <h6>With Separator</h6>
        <div className="space-y-2">
          <Label htmlFor="otp-separator">Two-factor authentication</Label>
          <InputOTP maxLength={6} id="otp-separator">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="font-body-small text-text-subtlest">Enter the 6-digit code from your authenticator app.</p>
        </div>
      </div>

      {/* 4 Digit PIN */}
      <div className="space-y-4">
        <h6>4-Digit PIN</h6>
        <div className="space-y-2">
          <Label htmlFor="otp-pin">Enter PIN</Label>
          <InputOTP maxLength={4} id="otp-pin">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <p className="font-body-small text-text-subtlest">Enter your 4-digit PIN to continue.</p>
        </div>
      </div>

      {/* Complex Format */}
      <div className="space-y-4">
        <h6>Complex Format (8 digits)</h6>
        <div className="space-y-2">
          <Label htmlFor="otp-complex">Account verification</Label>
          <InputOTP maxLength={8} id="otp-complex">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={6} />
              <InputOTPSlot index={7} />
            </InputOTPGroup>
          </InputOTP>
          <p className="font-body-small text-text-subtlest">Enter the 8-digit verification code in the format XX-XX-XX-XX.</p>
        </div>
      </div>

      {/* Single Digit Groups */}
      <div className="space-y-4">
        <h6>Individual Digits</h6>
        <div className="space-y-2">
          <Label htmlFor="otp-individual">Backup code</Label>
          <InputOTP maxLength={5} id="otp-individual">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
            </InputOTPGroup>
          </InputOTP>
          <p className="font-body-small text-text-subtlest">Enter the 5-digit backup code with spaces between each digit.</p>
        </div>
      </div>

      {/* Disabled State */}
      <div className="space-y-4">
        <h6>Disabled</h6>
        <div className="space-y-2">
          <Label htmlFor="otp-disabled" className="text-text-disabled">
            Verification code (disabled)
          </Label>
          <InputOTP maxLength={6} disabled id="otp-disabled">
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="font-body-small text-text-disabled">Code input is currently disabled.</p>
        </div>
      </div>
    </div>
  );
}

export default function InputOTPPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <InputOTPShowcase />
    </div>
  );
}
