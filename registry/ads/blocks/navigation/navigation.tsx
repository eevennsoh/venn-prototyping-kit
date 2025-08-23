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

type NavigationProps = {
  className?: string;
};

export function Navigation({ className }: NavigationProps) {
  return (
    <header className={cn("sticky top-0 z-40 w-full border-b bg-white backdrop-blur", "border-slate-200 dark:border-slate-800 dark:bg-slate-900", className)}>
      <div className="flex h-12 items-center justify-between px-3 py-2">
        {/* Left side - Navigation */}
        <div className="flex min-w-[300px] items-center gap-1">
          {/* Sidebar toggle button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <SidebarCollapseIcon label="Toggle sidebar" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle sidebar</TooltipContent>
          </Tooltip>

          {/* App switcher */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <AppSwitcherIcon label="Switch apps" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Switch apps</TooltipContent>
          </Tooltip>

          {/* App logo with padding */}
          <div className="flex items-center pl-1">
            <Link href="/" className="flex items-center gap-1.5 rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Home">
              <Studio showText={false} />
              <span className="font-653 dark:text-dark-slate-800 text-slate-900">Studio</span>
            </Link>
          </div>
        </div>

        {/* Middle - Search + Create */}
        <div className="flex min-w-0 flex-1 justify-center px-2">
          <div className="flex w-full max-w-[560px] items-center gap-2">
            <form className="relative min-w-0 flex-1" role="search" onSubmit={(e) => e.preventDefault()}>
              <span className="pointer-events-none absolute inset-y-0 left-2.5 flex items-center">
                <SearchIcon label="Search" appearance="subtlest" />
              </span>
              <Input aria-label="Search" placeholder="Search" className="h-8 pr-3 pl-8" />
            </form>
            <Button appearance="primary">
              <AddIcon appearance="inverse" label="Create" />
              Create
            </Button>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex min-w-[300px] items-center justify-end gap-1">
          {/* Ask Rovo AI button */}
          <Button appearance="default" className="border-slate-200 dark:border-slate-700">
            <RovoChatIcon label="Ask Rovo AI" />
            Ask Rovo AI
          </Button>

          {/* Notifications */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <NotificationIcon label="Notifications" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>

          {/* Help */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <QuestionCircleIcon label="Help" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Help</TooltipContent>
          </Tooltip>

          {/* Settings */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon">
                <SettingsIcon label="Settings" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Settings</TooltipContent>
          </Tooltip>

          {/* Profile avatar */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button appearance="subtle" spacing="icon" className="rounded-full">
                <div className="h-6 w-6 rounded-full bg-slate-300 bg-[url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face')] bg-cover bg-center dark:bg-slate-600" />
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
