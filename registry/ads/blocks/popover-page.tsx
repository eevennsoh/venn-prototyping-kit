"use client";

import { Button } from "@/registry/ads/ui/button";
import { Input } from "@/registry/ads/ui/input";
import { Label } from "@/registry/ads/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/ads/ui/popover";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import SettingsIconCore from "@atlaskit/icon/core/settings";

const SettingsIcon = IconWrapper(SettingsIconCore);

function PopoverShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Popover */}
      <div className="space-y-4">
        <h6>Basic</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button appearance="default">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Dimensions</h4>
                  <p className="font-body-small text-text-subtlest">Set the dimensions for the layer.</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* With Icon Trigger */}
      <div className="space-y-4">
        <h6>With Icon</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button spacing="icon" appearance="subtle" aria-label="Settings">
                <SettingsIcon label="Settings" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Settings</h4>
                  <p className="font-body-small text-text-subtlest">Manage your account settings and preferences.</p>
                </div>
                <div className="grid gap-2">
                  <Button appearance="subtle" className="w-full justify-start">
                    Profile
                  </Button>
                  <Button appearance="subtle" className="w-full justify-start">
                    Billing
                  </Button>
                  <Button appearance="subtle" className="w-full justify-start">
                    Team
                  </Button>
                  <Button appearance="subtle" className="w-full justify-start">
                    Subscription
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="space-y-4">
        <h6>Quick Actions</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button appearance="primary">Quick Actions</Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <div className="grid gap-2">
                <Button appearance="subtle" className="w-full justify-start">
                  Create new project
                </Button>
                <Button appearance="subtle" className="w-full justify-start">
                  Import project
                </Button>
                <Button appearance="subtle" className="w-full justify-start">
                  Join workspace
                </Button>
                <hr className="border-border my-1" />
                <Button appearance="subtle" className="w-full justify-start">
                  View all projects
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* Form Popover */}
      <div className="space-y-4">
        <h6>Form</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button appearance="default">Add Task</Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <h4 className="leading-none font-medium">Add Task</h4>
                  <p className="font-body-small text-text-subtlest">Create a new task for your project.</p>
                </div>
                <div className="grid gap-2">
                  <div className="grid gap-1">
                    <Label htmlFor="task-title">Title</Label>
                    <Input id="task-title" placeholder="Task title" />
                  </div>
                  <div className="grid gap-1">
                    <Label htmlFor="task-desc">Description</Label>
                    <Input id="task-desc" placeholder="Task description" />
                  </div>
                  <Button appearance="primary" className="mt-2">
                    Add Task
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}

export default function PopoverPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <PopoverShowcase />
    </div>
  );
}
