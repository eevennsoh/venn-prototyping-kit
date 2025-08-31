"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction } from "@/registry/ads/ui/card";
import { Button } from "@/registry/ads/ui/button";

function CardShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Card */}
      <div className="space-y-4">
        <h6>Basic Card</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card description goes here.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This is the main content of the card.</p>
              </CardContent>
              <CardFooter>
                <Button appearance="primary">Action</Button>
              </CardFooter>
            </Card>
            <span className="font-body-small text-text-subtlest">basic card</span>
          </div>
        </div>
      </div>

      {/* Card with Action */}
      <div className="space-y-4">
        <h6>Card with Action</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
                <CardDescription>Manage your project settings here.</CardDescription>
                <CardAction>
                  <Button appearance="subtle" spacing="icon">
                    ⚙️
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Configure various project options and preferences.</p>
              </CardContent>
            </Card>
            <span className="font-body-small text-text-subtlest">with action button</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CardPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <CardShowcase />
    </div>
  );
}
