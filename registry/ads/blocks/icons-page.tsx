"use client";

import { IconWrapper } from "@/registry/ads/lib/icon-wrapper";

import AddIconCore from "@atlaskit/icon/core/add";
import AppSwitcherIconCore from "@atlaskit/icon/core/app-switcher";
import SearchIconCore from "@atlaskit/icon/core/search";
import NotificationIconCore from "@atlaskit/icon/core/notification";
import QuestionCircleIconCore from "@atlaskit/icon/core/question-circle";
import SettingsIconCore from "@atlaskit/icon/core/settings";

const AddIcon = IconWrapper(AddIconCore);
const AppSwitcherIcon = IconWrapper(AppSwitcherIconCore);
const SearchIcon = IconWrapper(SearchIconCore);
const NotificationIcon = IconWrapper(NotificationIconCore);
const QuestionCircleIcon = IconWrapper(QuestionCircleIconCore);
const SettingsIcon = IconWrapper(SettingsIconCore);

function IconsShowcase() {
  return (
    <div className="flex h-full flex-col gap-6 p-4">
      {/* Appearance */}
      <div className="space-y-4">
        <h3 className="font-semibold">Appearance</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon appearance="default" label="Add" />
            <span className="text-muted-foreground text-xs">default</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon appearance="subtle" label="Add" />
            <span className="text-muted-foreground text-xs">subtle</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <AddIcon appearance="subtlest" label="Add" />
            <span className="text-muted-foreground text-xs">subtlest</span>
          </div>
          <div className="bg-dark-slate-100 flex flex-col items-start gap-1 rounded-sm p-2">
            <AddIcon appearance="inverse" label="Add" />
            <span className="text-muted-foreground text-text-inverse text-xs">inverse</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h3 className="font-semibold">Sizes</h3>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <SearchIcon size="medium" label="Search" />
            <span className="text-muted-foreground text-xs">medium (16px)</span>
          </div>
          <div className="flex flex-col items-start gap-1 rounded-sm border p-2">
            <SearchIcon size="small" label="Search" />
            <span className="text-muted-foreground text-xs">small (12px)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function IconsPage() {
  return (
    <div className="flex h-full items-start justify-start">
      <IconsShowcase />
    </div>
  );
}
