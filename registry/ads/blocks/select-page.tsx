"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/ads/ui/select";
import { Label } from "@/registry/ads/ui/label";

function SelectShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Select */}
      <div className="space-y-4">
        <h6>Basic</h6>
        <div className="w-48">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* With Label */}
      <div className="space-y-4">
        <h6>With Label</h6>
        <div className="w-48 space-y-2">
          <Label htmlFor="framework">Framework</Label>
          <Select>
            <SelectTrigger id="framework">
              <SelectValue placeholder="Select a framework" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next">Next.js</SelectItem>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="vue">Vue.js</SelectItem>
              <SelectItem value="nuxt">Nuxt.js</SelectItem>
              <SelectItem value="astro">Astro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* With Default Value */}
      <div className="space-y-4">
        <h6>With Default Value</h6>
        <div className="w-48 space-y-2">
          <Label htmlFor="theme">Theme</Label>
          <Select defaultValue="dark">
            <SelectTrigger id="theme">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Disabled */}
      <div className="space-y-4">
        <h6>Disabled</h6>
        <div className="w-48 space-y-2">
          <Label htmlFor="disabled-select" className="text-text-disabled">
            Disabled Select
          </Label>
          <Select disabled>
            <SelectTrigger id="disabled-select">
              <SelectValue placeholder="Can't select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="option1">Option 1</SelectItem>
              <SelectItem value="option2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grouped Options */}
      <div className="space-y-4">
        <h6>Grouped Options</h6>
        <div className="w-48 space-y-2">
          <Label htmlFor="grouped">Languages</Label>
          <Select>
            <SelectTrigger id="grouped">
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="java">Java</SelectItem>
              <SelectItem value="csharp">C#</SelectItem>
              <SelectItem value="go">Go</SelectItem>
              <SelectItem value="rust">Rust</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Small Size Example */}
      <div className="space-y-4">
        <h6>Different Sizes</h6>
        <div className="space-y-3">
          <div className="w-32">
            <Label htmlFor="small-select" className="font-body-small">
              Small
            </Label>
            <Select>
              <SelectTrigger id="small-select" className="h-8">
                <SelectValue placeholder="Small" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="xs">XS</SelectItem>
                <SelectItem value="sm">SM</SelectItem>
                <SelectItem value="md">MD</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-48">
            <Label htmlFor="regular-select">Regular</Label>
            <Select>
              <SelectTrigger id="regular-select">
                <SelectValue placeholder="Regular" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
                <SelectItem value="option3">Option 3</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SelectPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <SelectShowcase />
    </div>
  );
}
