"use client";

import { Button } from "@/registry/ads/ui/button";
import { Input } from "@/registry/ads/ui/input";
import { Textarea } from "@/registry/ads/ui/textarea";
import { Checkbox } from "@/registry/ads/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/registry/ads/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/ads/ui/select";
import { Switch } from "@/registry/ads/ui/switch";
import { Label } from "@/registry/ads/ui/label";

function FormShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Form Example */}
      <div className="space-y-4">
        <h6>User Profile Form</h6>
        <div className="max-w-md">
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" />
              <p className="font-body-small text-text-subtlest">This is your public display name.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
              <p className="font-body-small text-text-subtlest">We'll use this for account notifications.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" placeholder="Tell us about yourself" className="resize-none" />
              <p className="font-body-small text-text-subtlest">Brief description for your profile. Maximum 500 characters.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select>
                <SelectTrigger id="language">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                </SelectContent>
              </Select>
              <p className="font-body-small text-text-subtlest">Choose your preferred language for the interface.</p>
            </div>

            <div className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Email notifications</Label>
                <p className="font-body-small text-text-subtlest">Receive emails about account activity.</p>
              </div>
              <Switch />
            </div>

            <div className="flex flex-row items-start space-y-0 space-x-3">
              <Checkbox id="marketing" />
              <div className="space-y-1 leading-none">
                <Label htmlFor="marketing">Marketing emails</Label>
                <p className="font-body-small text-text-subtlest">Receive emails about new products and features.</p>
              </div>
            </div>

            <Button type="submit" appearance="primary">
              Update profile
            </Button>
          </form>
        </div>
      </div>

      {/* Simple Contact Form */}
      <div className="space-y-4">
        <h6>Contact Form</h6>
        <div className="max-w-md">
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contact-name">Name</Label>
              <Input id="contact-name" placeholder="Your name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email">Email</Label>
              <Input id="contact-email" type="email" placeholder="your@email.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-subject">Subject</Label>
              <Input id="contact-subject" placeholder="What's this about?" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" placeholder="Your message..." rows={4} />
            </div>

            <Button appearance="primary" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Preferences Form */}
      <div className="space-y-4">
        <h6>Preferences</h6>
        <div className="max-w-md">
          <form className="space-y-6">
            <div className="space-y-3">
              <Label>Theme</Label>
              <RadioGroup defaultValue="system">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="light" />
                  <Label htmlFor="light">Light</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="dark" />
                  <Label htmlFor="dark">Dark</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="system" />
                  <Label htmlFor="system">System</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label>Notifications</Label>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="email-notif" />
                  <Label htmlFor="email-notif">Email notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="push-notif" />
                  <Label htmlFor="push-notif">Push notifications</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="sms-notif" />
                  <Label htmlFor="sms-notif">SMS notifications</Label>
                </div>
              </div>
            </div>

            <Button appearance="primary">Save Preferences</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function FormPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <FormShowcase />
    </div>
  );
}
