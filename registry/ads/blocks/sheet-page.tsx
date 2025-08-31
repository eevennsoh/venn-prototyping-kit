"use client";

import { Button } from "@/registry/ads/ui/button";
import { Input } from "@/registry/ads/ui/input";
import { Label } from "@/registry/ads/ui/label";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/registry/ads/ui/sheet";

function SheetShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Sheet */}
      <div className="space-y-4">
        <h6>Basic (Right)</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button appearance="default">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" value="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" value="@peduarte" className="col-span-3" />
                </div>
              </div>
              <SheetFooter>
                <Button appearance="primary">Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Left Side */}
      <div className="space-y-4">
        <h6>Left Side</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button appearance="default">Open Left</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Navigate through the application.</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="space-y-2">
                  <Button appearance="subtle" className="w-full justify-start">
                    Dashboard
                  </Button>
                  <Button appearance="subtle" className="w-full justify-start">
                    Projects
                  </Button>
                  <Button appearance="subtle" className="w-full justify-start">
                    Team
                  </Button>
                  <Button appearance="subtle" className="w-full justify-start">
                    Settings
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Top */}
      <div className="space-y-4">
        <h6>Top</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button appearance="default">Open Top</Button>
            </SheetTrigger>
            <SheetContent side="top">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>Your recent notifications.</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="space-y-3">
                  <div className="border-border rounded border p-3">
                    <p className="font-medium">New message</p>
                    <p className="font-body-small text-text-subtlest">You have a new message from John Doe.</p>
                  </div>
                  <div className="border-border rounded border p-3">
                    <p className="font-medium">Task completed</p>
                    <p className="font-body-small text-text-subtlest">Your task "Review design" has been completed.</p>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Bottom */}
      <div className="space-y-4">
        <h6>Bottom</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button appearance="default">Open Bottom</Button>
            </SheetTrigger>
            <SheetContent side="bottom">
              <SheetHeader>
                <SheetTitle>Quick Actions</SheetTitle>
                <SheetDescription>Perform quick actions from here.</SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <Button appearance="subtle" className="h-16 flex-col">
                    <span>Create</span>
                    <span className="font-body-small text-text-subtlest">Project</span>
                  </Button>
                  <Button appearance="subtle" className="h-16 flex-col">
                    <span>Import</span>
                    <span className="font-body-small text-text-subtlest">Data</span>
                  </Button>
                  <Button appearance="subtle" className="h-16 flex-col">
                    <span>Export</span>
                    <span className="font-body-small text-text-subtlest">Report</span>
                  </Button>
                  <Button appearance="subtle" className="h-16 flex-col">
                    <span>Share</span>
                    <span className="font-body-small text-text-subtlest">Link</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Form Sheet */}
      <div className="space-y-4">
        <h6>Form Example</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button appearance="primary">Add Item</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add new item</SheetTitle>
                <SheetDescription>Fill out the form below to add a new item to your collection.</SheetDescription>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="item-name">Name</Label>
                  <Input id="item-name" placeholder="Item name" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="item-description">Description</Label>
                  <Input id="item-description" placeholder="Item description" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="item-category">Category</Label>
                  <Input id="item-category" placeholder="Item category" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="item-price">Price</Label>
                  <Input id="item-price" placeholder="0.00" type="number" />
                </div>
              </div>
              <SheetFooter>
                <Button appearance="subtle">Cancel</Button>
                <Button appearance="primary">Add Item</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}

export default function SheetPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <SheetShowcase />
    </div>
  );
}
