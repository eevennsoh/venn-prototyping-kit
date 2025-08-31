"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/registry/ads/ui/tabs";

function TabsShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Tabs */}
      <div className="space-y-4">
        <h6>Basic Tabs</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p>This is the content for Tab 1.</p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p>This is the content for Tab 2.</p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p>This is the content for Tab 3.</p>
              </TabsContent>
            </Tabs>
            <span className="font-body-small text-text-subtlest">basic tabs</span>
          </div>
        </div>
      </div>

      {/* Vertical Tabs */}
      <div className="space-y-4">
        <h6>Vertical Tabs</h6>
        <div className="flex flex-wrap items-center gap-4">
          <div className="border-border flex flex-col items-start gap-2 rounded-sm border p-4">
            <Tabs defaultValue="vertical1" orientation="vertical" className="w-full">
              <TabsList className="h-auto flex-col">
                <TabsTrigger value="vertical1">Settings</TabsTrigger>
                <TabsTrigger value="vertical2">Profile</TabsTrigger>
                <TabsTrigger value="vertical3">Billing</TabsTrigger>
              </TabsList>
              <div className="ml-4">
                <TabsContent value="vertical1" className="mt-0">
                  <p>Settings content goes here.</p>
                </TabsContent>
                <TabsContent value="vertical2" className="mt-0">
                  <p>Profile content goes here.</p>
                </TabsContent>
                <TabsContent value="vertical3" className="mt-0">
                  <p>Billing content goes here.</p>
                </TabsContent>
              </div>
            </Tabs>
            <span className="font-body-small text-text-subtlest">vertical layout</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TabsPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <TabsShowcase />
    </div>
  );
}
