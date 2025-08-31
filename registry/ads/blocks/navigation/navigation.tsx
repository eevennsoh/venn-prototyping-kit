"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// UI Components
import { Button } from "@/registry/ads/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/registry/ads/ui/tooltip";
import { Input } from "@/registry/ads/ui/input";

// Icons
import SidebarCollapseIconCore from "@atlaskit/icon/core/sidebar-collapse";
import AppSwitcherIconCore from "@atlaskit/icon/core/app-switcher";
import AddIconCore from "@atlaskit/icon/core/add";
import RovoChatIconCore from "@atlaskit/icon/core/rovo-chat";
import NotificationIconCore from "@atlaskit/icon/core/notification";
import QuestionCircleIconCore from "@atlaskit/icon/core/question-circle";
import SearchIconCore from "@atlaskit/icon/core/search";
import SettingsIconCore from "@atlaskit/icon/core/settings";

import { cn } from "@/lib/utils";
import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";
import { LogoWrapper } from "@/registry/ads/lib/logo-wrapper";

// Wrap icons with IconWrapper
const SidebarCollapseIcon = IconWrapper(SidebarCollapseIconCore);
const AppSwitcherIcon = IconWrapper(AppSwitcherIconCore);
const AddIcon = IconWrapper(AddIconCore);
const RovoChatIcon = IconWrapper(RovoChatIconCore);
const NotificationIcon = IconWrapper(NotificationIconCore);
const QuestionCircleIcon = IconWrapper(QuestionCircleIconCore);
const SearchIcon = IconWrapper(SearchIconCore);
const SettingsIcon = IconWrapper(SettingsIconCore);

// Create Studio logo component (glyph-only vs full wordmark) using our wrapper
const Studio = dynamic(() => import("@atlaskit/logo").then((m) => LogoWrapper(m.StudioIcon, m.StudioLogo)), { ssr: false });

function Navigation({ className }: { className?: string }) {
  return (
    <header className={cn("z-navigation bg-elevation-surface border-border sticky top-0 w-full border-b backdrop-blur", className)}>
      <div className="flex h-12 items-center justify-between px-3 py-2">
        {/* Left Section - Navigation Controls */}
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <SidebarCollapseIcon label="Toggle sidebar" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle sidebar</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <AppSwitcherIcon label="Switch apps" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Switch apps</TooltipContent>
          </Tooltip>

          <div className="flex items-center pl-1">
            <Link href="/" className="hover:bg-background-neutral-subtle-hovered flex items-center gap-1.5 rounded-lg p-1 no-underline" aria-label="Home">
              <Studio size="small" showText={false} />
              <span className="font-body text-text font-bold">Studio</span>
            </Link>
          </div>
        </div>

        {/* Center Section - Search & Create */}
        <div className="flex flex-1 justify-center px-2">
          <div className="flex w-full max-w-[800px] items-center gap-2">
            <Input iconBefore={<SearchIcon label="Search" spacing="spacious" appearance="subtlest" />} aria-label="Search" placeholder="Search" size={"compact"} />
            <Button appearance="primary">
              <AddIcon appearance="inverse" label="Create" />
              Create
            </Button>
          </div>
        </div>

        {/* Right Section - User Actions */}
        <div className="flex items-center justify-end gap-1">
          <Button appearance="default" className="border-border">
            <RovoChatIcon label="Ask Rovo AI" />
            Ask Rovo
          </Button>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <NotificationIcon label="Notifications" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <QuestionCircleIcon label="Help" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Help</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <SettingsIcon label="Settings" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon" className="rounded-full">
                <div className="bg-background-neutral-subtle h-6 w-6 rounded-full bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face')] bg-cover bg-center" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Profile</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
