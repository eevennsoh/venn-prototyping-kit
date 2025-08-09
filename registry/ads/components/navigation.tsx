"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

// UI Components
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

// Icons
import MenuIcon from "@atlaskit/icon/core/menu";
import AppSwitcherIcon from "@atlaskit/icon/core/app-switcher";
import AddIcon from "@atlaskit/icon/core/add";
import RovoChatIcon from "@atlaskit/icon/core/rovo-chat";
import NotificationIcon from "@atlaskit/icon/core/notification";
import QuestionCircleIcon from "@atlaskit/icon/core/question-circle";

import { cn } from "@/lib/utils";
import { LogoWrapper } from "@/registry/ads/lib/logo-wrapper";

// Create Studio logo component (glyph-only vs full wordmark) using our wrapper
const Studio = dynamic(() => import("@atlaskit/logo").then((m) => LogoWrapper(m.StudioIcon, m.StudioLogo)), { ssr: false });

type NavigationProps = {
  className?: string;
};

export function Navigation({ className }: NavigationProps) {
  return (
    <header className={cn("sticky top-0 z-40 w-full border-b bg-white backdrop-blur", "border-slate-200 dark:border-slate-800 dark:bg-slate-900", className)}>
      <div className="flex h-14 items-center justify-between px-3 py-2">
        {/* Left side - Navigation */}
        <div className="flex min-w-[300px] items-center gap-1">
          {/* Sidebar toggle button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MenuIcon label="" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Toggle sidebar</TooltipContent>
          </Tooltip>

          {/* App switcher */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <AppSwitcherIcon label="" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Switch apps</TooltipContent>
          </Tooltip>

          {/* App logo with padding */}
          <div className="flex items-center pl-1">
            <Link href="/" className="flex items-center gap-1.5 rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Home">
              <Studio size="small" showText />
            </Link>
          </div>
        </div>

        {/* Middle - Empty space for centering */}
        <div className="flex-1" />

        {/* Right side - Actions */}
        <div className="flex min-w-[300px] items-center justify-end gap-1">
          {/* Create button */}
          <Button className="bg-blue-600 text-white hover:bg-blue-700">
            <AddIcon label="" />
            Create
          </Button>

          {/* Ask Rovo AI button */}
          <Button variant="outline" className="border-slate-200 dark:border-slate-700">
            <RovoChatIcon label="" />
            Ask Rovo AI
          </Button>

          {/* Notifications */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <NotificationIcon label="" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Notifications</TooltipContent>
          </Tooltip>

          {/* Help */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <QuestionCircleIcon label="" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Help</TooltipContent>
          </Tooltip>

          {/* Profile avatar */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
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
