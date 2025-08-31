"use client";

import * as React from "react";
import { Button } from "@/registry/ads/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/registry/ads/ui/dialog";
import { Input } from "@/registry/ads/ui/input";
import { Label } from "@/registry/ads/ui/label";

function DialogShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Dialog */}
      <div className="space-y-4">
        <h6>Basic</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button appearance="primary">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Share link</DialogTitle>
                <DialogDescription>Anyone who has this link will be able to view this.</DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="link" className="sr-only">
                    Link
                  </Label>
                  <Input id="link" defaultValue="https://ui.shadcn.com/docs/installation" readOnly />
                </div>
              </div>
              <DialogFooter className="sm:justify-start">
                <Button appearance="subtle">Cancel</Button>
                <Button appearance="primary">Copy link</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Form Dialog */}
      <div className="space-y-4">
        <h6>Form</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button appearance="default">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">
                    Username
                  </Label>
                  <Input id="username" defaultValue="@peduarte" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button appearance="primary">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <div className="space-y-4">
        <h6>Confirmation</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button appearance="danger">Delete Item</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Are you absolutely sure?</DialogTitle>
                <DialogDescription>This action cannot be undone. This will permanently delete the item and remove the data from our servers.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button appearance="subtle">Cancel</Button>
                <Button appearance="danger">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default function DialogPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <DialogShowcase />
    </div>
  );
}
