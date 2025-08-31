"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "@/registry/ads/ui/dropdown-menu";
import { Button } from "@/registry/ads/ui/button";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import ShowMoreHorizontalIconCore from "@atlaskit/icon/core/show-more-horizontal";
import SettingsIconCore from "@atlaskit/icon/core/settings";
import PersonIconCore from "@atlaskit/icon/core/person";

const ShowMoreHorizontalIcon = IconWrapper(ShowMoreHorizontalIconCore);
const SettingsIcon = IconWrapper(SettingsIconCore);
const PersonIcon = IconWrapper(PersonIconCore);

function DropdownMenuShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Basic Dropdown */}
      <div className="space-y-4">
        <h6>Basic</h6>
        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button appearance="default">Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New Tab</DropdownMenuItem>
              <DropdownMenuItem>New Window</DropdownMenuItem>
              <DropdownMenuItem disabled>New Private Window</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Download</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* With Icons */}
      <div className="space-y-4">
        <h6>With Icons</h6>
        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button spacing="icon" appearance="subtle" aria-label="More options">
                <ShowMoreHorizontalIcon label="More options" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PersonIcon size="small" label="Profile" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon size="small" label="Settings" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* With Checkboxes */}
      <div className="space-y-4">
        <h6>With Checkboxes</h6>
        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button appearance="default">View Options</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>View</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Show Sidebar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Show Toolbar</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked>Show Status Bar</DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* With Radio Group */}
      <div className="space-y-4">
        <h6>With Radio Group</h6>
        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button appearance="default">Theme</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Appearance</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value="light">
                <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* With Submenu */}
      <div className="space-y-4">
        <h6>With Submenu</h6>
        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button appearance="default">File</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>New File</DropdownMenuItem>
              <DropdownMenuItem>New Folder</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Recent Files</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>document.pdf</DropdownMenuItem>
                  <DropdownMenuItem>image.png</DropdownMenuItem>
                  <DropdownMenuItem>data.csv</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Save</DropdownMenuItem>
              <DropdownMenuItem>Save As...</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Context Menu Style */}
      <div className="space-y-4">
        <h6>Actions Menu</h6>
        <div className="flex flex-wrap items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button appearance="primary">Actions</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuItem className="text-text-danger">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}

export default function DropdownMenuPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <DropdownMenuShowcase />
    </div>
  );
}
