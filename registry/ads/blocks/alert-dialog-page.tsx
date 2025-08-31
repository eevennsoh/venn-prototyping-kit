"use client";

import { useState } from "react";
import { Button } from "@/registry/ads/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/ads/ui/alert-dialog";

function AlertDialogShowcase() {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Alert Dialog */}
      <div className="space-y-4">
        <h6>Basic Alert Dialog</h6>
        <div className="flex flex-wrap items-center gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button appearance="danger">Delete Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Delete</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Controlled Alert Dialog */}
      <div className="space-y-4">
        <h6>Controlled Alert Dialog</h6>
        <div className="flex flex-wrap items-center gap-4">
          <Button appearance="warning" onClick={() => setIsConfirmOpen(true)}>
            Confirm Action
          </Button>
          <AlertDialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                <AlertDialogDescription>Are you sure you want to proceed with this action? This will make permanent changes to your data.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Confirm</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Custom Actions */}
      <div className="space-y-4">
        <h6>Custom Actions</h6>
        <div className="flex flex-wrap items-center gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button appearance="primary">Save Changes</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Unsaved Changes</AlertDialogTitle>
                <AlertDialogDescription>You have unsaved changes. Would you like to save them before continuing?</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Discard</AlertDialogCancel>
                <AlertDialogAction>Save</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}

export default function AlertDialogPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <AlertDialogShowcase />
    </div>
  );
}
