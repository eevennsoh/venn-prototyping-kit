# Objective

Develop a set of reusable, highly customizable components in a Next.js App Router project (with TypeScript), making it ideal for workflows using v0 and Cursor. Use the latest **Shadcn** component framework and style exclusively with the latest **Tailwind CSS**, theming the entire system to visually align with the **Atlassian Design System (ADS)** using Atlassian design tokens as the single source of truth. For animation, employ the **Motion** animation library as needed.

_Frameworks: Next.js (TypeScript), React, Tailwind CSS, shadcn/ui, and Motion for animation_

---

## Execution Guidelines

- Apply this setup **only** at project inception.
- Do not offer alternatives or check for other frameworks or design systems.
- Apply all steps unconditionally—do not reference or attempt integration with existing code, frameworks, or design systems.
- Do not attempt refactoring or retrofitting into existing files; once setup is complete, stop processing.

---

## Roles

- **Planner**: Conducts initial setup and planning.
- **Prototyper**: Executes tasks according to the plan.

## Planner Duties (Initial Run)

Begin with a concise checklist (3-7 bullets) of what you will do; keep items conceptual, not implementation-level.

### Plan Preparation

1. Analyze the attached image or Figma design.
   - Match visual details with design tokens in `app/tokens.css`.
   - Refer to `app/globals.css` for applying correct Tailwind classes.
   - Identify which Shadcn components, Tailwind utilities, tokens, and supported Motion animations are needed.
   - Ensure Shadcn components are properly themed to ADS.
   - Use `app/knowledge/tokens-mapping.md` for Tailwind utility guidance as needed.
2. Draft `plan.md` following this structure:
   - **Background & Motivation**
   - **Components**
   - **Design Tokens**
   - **Task Breakdown** (tasks with statuses as described below)
3. Present the plan for user confirmation; only switch to Prototyper after explicit user approval.

#### Task Status

- [] To Do
- 🔄 In Progress
- ✅ Done
- ❌ Failed

---

## Prototyper Duties (Subsequent Runs)

1. Mark the current task as **"In Progress" (🔄)** before starting.
2. Execute tasks in `plan.md` **exactly as described**, tackling one task at a time. After each tool call or code edit, validate result in 1-2 lines and proceed or self-correct if validation fails. After completing a task, update its status and inform the user.
3. Follow all Task Rules strictly.
4. Incrementally enhance code—never rewrite from scratch or break established design patterns.
5. If a task is unambiguous, proceed to the next task automatically; if not, clearly document uncertainties and request clarification before proceeding.
6. Mark tasks as **"Done" (✅)** or **"Failed" (❌)** upon completion, providing:
   - Progress summary
   - Challenges encountered/solutions
   - Any deviations or improvements
   - Fallback solutions for any manual interventions by the user.
7. Upon completing all tasks, stop.

---

## Task Rules - Layout Management

All pages must follow a strict layout structure where the **main header spans full width** and the **page content and sidebar are docked underneath and fills the remaining height**. This ensures alignment with Atlassian application conventions.

### Layout Overview

```
┌───────────────────────────────────────────────┐
│ Navigation                                    │
├───────────────────────────────────────────────┤
│ ┌──────────────┐ ┌──────────────────────────┐ │
│ │ AppSidebar   │ │ Page Content             │ │
│ └──────────────┘ └──────────────────────────┘ │
└───────────────────────────────────────────────┘
```

The sidebar is an optional piece, so if the users suggests removing the sidebar or it's not included as part of their prompt then it is not mandatory to add it in. In that case, the page would look more like this:

```
┌───────────────────────────────────────────────┐
│ Navigation                                    │
├───────────────────────────────────────────────┤
│ ┌───────────────────────────────────────────┐ │
│ │ Page Content                              │ │
│ └───────────────────────────────────────────┘ │
└───────────────────────────────────────────────┘
```

- The **Navigation** must always be full width (`100vw`) and pinned to the top with no spacing above (`top: 0`).
- The **AppSidebar** must be rendered directly beneath the header and to the left of the main content. It should stretch to fill the rest of the height of the page
- The **content region** must begin _only_ after the AppSidebar and must stretch to fill remaining horizontal space. It should stretch to fill the rest of the height of the page
- **No other layout wrappers** (e.g., `section`, `container`, `div`) are allowed above or between the Navigation and AppSidebar.

---

## Task Rules - Logo Management

- Use only logos from the `@atlaskit/logo` package. Never improvise names.
- Always wrap product logos with `LogoWrapper` from `components/logo-wrapper.tsx`. Do not wrap logos with `IconWrapper`.
- Define wrapper components in `components/logos.tsx` as named exports using the pattern `Product = LogoWrapper(ProductIcon, ProductLogo)` (pass the glyph-only Icon component first, then the full Logo with wordmark). Aliasing imports is recommended to avoid naming collisions.
- Supported props on generated logo components:
  - `size`: `"xxsmall" | "xsmall" | "small" | "medium" | "large" | "xlarge"` (defaults to `"medium"`).
  - `showText?`: boolean; default `true`. When `true`, renders the Atlaskit Logo (icon + wordmark). When `false`, renders the Atlaskit Icon (glyph only).
  - All other props pass through to the underlying Atlaskit components.
- Alignment and spacing are handled internally; do not add external margins for baseline alignment.
- Do NOT implement custom text rendering or sizing. When `showText` is `true`, the wordmark comes from the Atlaskit Logo SVG and scales with the `size` prop. No `text` or `textSize` props are supported.
- Provide examples that demonstrate all sizes and toggling `showText` on/off.

Approved Logos List

```
AtlasIcon, AtlasLogo,
AtlassianMarketplaceIcon, AtlassianMarketplaceLogo,
AtlassianAccessIcon, AtlassianAccessLogo,
JiraWorkManagementIcon, JiraWorkManagementLogo,
AtlassianIcon, AtlassianLogo,
JiraSoftwareIcon, JiraSoftwareLogo,
AdminIcon, AdminLogo,
AnalyticsIcon, AnalyticsLogo,
AssetsIcon, AssetsLogo,
ChatIcon, ChatLogo,
CustomerServiceManagementIcon, CustomerServiceManagementLogo,
GoalsIcon, GoalsLogo,
HomeIcon, HomeLogo,
HubIcon, HubLogo,
ProjectsIcon, ProjectsLogo,
SearchIcon, SearchLogo,
StudioIcon, StudioLogo,
TalentIcon, TalentLogo,
TeamsIcon, TeamsLogo,
BambooIcon, BambooLogo,
BitbucketIcon, BitbucketLogo,
BitbucketDataCenterIcon, BitbucketDataCenterLogo,
ConfluenceIcon, ConfluenceLogo,
ConfluenceDataCenterIcon, ConfluenceDataCenterLogo,
CrowdIcon, CrowdLogo,
JiraIcon, JiraLogo,
JiraAlignIcon, JiraAlignLogo,
JiraProductDiscoveryIcon, JiraProductDiscoveryLogo,
JiraServiceManagementIcon, JiraServiceManagementLogo,
JiraDataCenterIcon, JiraDataCenterLogo,
JiraServiceManagementDataCenterIcon, JiraServiceManagementDataCenterLogo,
CompassIcon, CompassLogo,
LoomIcon, LoomLogo,
LoomAttributionIcon, LoomAttributionLogo,
LoomBlurpleIcon, LoomBlurpleLogo,
OpsgenieIcon, OpsgenieLogo,
StatuspageIcon, StatuspageLogo,
TrelloIcon, TrelloLogo,
RovoIcon, RovoLogo,
GuardIcon, GuardLogo,
FocusIcon, FocusLogo
```

If a needed logo is not in this list, check the ADS examples page (`https://atlassian.design/components/logo/examples`) and the installed package version. If still missing, stop and request confirmation before adding any custom asset.

Valid example:

```tsx
import { ConfluenceIcon, ConfluenceLogo } from "@atlaskit/logo";
import { LogoWrapper } from "@/components/logo-wrapper";

export const Confluence = LogoWrapper(ConfluenceIcon, ConfluenceLogo);

// usage
<Confluence size="medium" /> // icon + wordmark
<Confluence size="large" showText={false} /> // glyph only
```

Invalid examples:

- Importing from a non-`@atlaskit/logo` source
- Wrapping a logo with `IconWrapper`
- Passing custom text, a `textSize` prop, or hardcoding font sizes

---

## Task Rules — Icon Management

- Use only icons from the **Approved Icons List** (see below), matching exact names and import paths.
- Never guess, approximate, pluralize, or substitute icon names.
- Import icons via the approved format and always wrap them with `IconWrapper`.
- Logos and non-icon assets must **never** be wrapped with `IconWrapper`.
- Do not embed icons inside a `Button`. Ensure icons are vertically and horizontally centered inside their containers.
- Icons must have a width and height of either `16px` (medium) or `12px` (small).

**Valid import example:**

```tsx
import AccessibilityIconCore from "@atlaskit/icon/core/accessibility";
const AccessibilityIcon = IconWrapper(AccessibilityIconCore);
```

**Invalid import example:** (Do not use or improvise names)

```tsx
import TableIcon from "@atlaskit/icon/core/table"; // ❌ Error
```

- Runtime errors will result from using unapproved icon names; always stick to the Approved Icons List below.
- If an icon isn't listed, **stop and prompt for clarification** before proceeding.

---

### Approved Icons List

Only the explicitly listed icon names below are permitted. All names must match exactly:

```
AiAgent, AiChat, AiGenerativeTextSummary, AtlassianIntelligence, MagicWand, ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpLeft, ArrowUpRight, ChevronDoubleLeft, ChevronDoubleRight, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Audio, Camera, Image, ImageFullscreen, ImageInline, ImageScaled, Microphone, Video, VideoNext, VideoNextOverlay, VideoPause, VideoPauseOverlay, VideoPlay, VideoPlayOverlay, VideoPrevious, VideoPreviousOverlay, VideoSkipBackwardFifteen, VideoSkipBackwardTen, VideoSkipForwardFifteen, VideoSkipForwardTen, VideoStop, VideoStopOverlay, VolumeHigh, VolumeLow, VolumeMuted, AlignImageCenter, AlignImageLeft, AlignImageRight, AlignTextCenter, AlignTextLeft, AlignTextRight, TextBold, TextHeading, TextIndentLeft, TextIndentRight, TextItalic, TextShorten, TextSpellcheck, TextStrikethrough, TextStyle, TextUnderline, TextWrap, ContentWidthNarrow, ContentWidthWide, ContentWrapLeft, ContentWrapRight, Highlight, Markdown, QuotationMark, CheckboxChecked, CheckboxIndeterminate, CheckboxUnchecked, RadioChecked, RadioUnchecked, FieldAlert, FieldCheckboxGroup, FieldDropdown, FieldRadioGroup, Grid, LayoutOneColumn, LayoutThreeColumns, LayoutThreeColumnsSidebars, LayoutTwoColumns, LayoutTwoColumnsSidebarLeft, LayoutTwoColumnsSidebarRight, PanelLeft, PanelRight, SidebarCollapse, SidebarExpand, CollapseHorizontal, CollapseVertical, ExpandHorizontal, ExpandVertical, GrowDiagonal, GrowHorizontal, GrowVertical, ShrinkDiagonal, ShrinkHorizontal, ShrinkVertical, FullscreenEnter, FullscreenExit, Maximize, Minimize, Attachment, ArchiveBox, BookWithBookmark, Clipboard, Copy, File, Files, FolderClosed, FolderOpen, Library, Note, Page, Pages, ChatWidget, Comment, CommentAdd, Email, Feedback, Megaphone, Mention, Notification, NotificationMuted, Phone, Send, StatusDiscovery, StatusError, StatusInformation, StatusSuccess, StatusVerified, StatusWarning, PriorityBlocker, PriorityCritical, PriorityHigh, PriorityHighest, PriorityLow, PriorityLowest, PriorityMajor, PriorityMedium, PriorityMinor, PriorityTrivial, Flag, FlagFilled, Alert, Error, ExclamationSquare, Information, InformationCircle, QuestionCircle, Success, Warning, Add, Close, Cross, CrossCircle, Delete, Edit, EditBulk, CheckCircle, CheckMark, Redo, Refresh, Retry, Undo, Download, Upload, Search, Filter, SortAscending, SortDescending, Backlog, Board, Boards, Bug, ChildWorkItems, Commit, Component, Dashboard, Decision, Defect, Epic, Goal, Incident, MergeFailure, MergeSuccess, Objective, Problem, Project, ProjectStatus, PullRequest, Release, Roadmap, Sprint, Story, Subtasks, Task, TaskInProgress, TaskToDo, Tasks, Timeline, Transition, WorkItem, WorkItems, ChartBar, ChartMatrix, ChartPie, ChartTrend, DataFlow, DataNumber, DataString, Database, KeyResult, Scorecard, Spreadsheet, Person, PersonAdd, PersonAdded, PersonAvatar, PersonOffboard, PersonRemove, PersonWarning, PeopleGroup, Teams, Department, Api, Automation, Compass, Customize, Flask, Operations, Settings, Tools, PowerPlug, PresenterMode, Printer, Stopwatch, AngleBrackets, CurlyBrackets, Hashtag, Heart, Home, LockLocked, LockUnlocked, LogIn, LogOut, Pin, PinFilled, PlusSquare, Minus, MinusSquare, StarStarred, StarUnstarred, Shield, ShieldStrikethrough, ThumbsDown, ThumbsUp, App, AppSwitcher, AppSwitcherLegacy, Apps, Marketplace, Premium, Support, Calendar, CalendarPlus, Clock, Stopwatch, Globe, Location, VehicleCar, Accessibility, Assets, Basketball, Border, Branch, Briefcase, Capture, Card, Cash, Changes, CloudArrowUp, CreditCard, Devices, DeviceMobile, Discovery, DragHandleHorizontal, DragHandleVertical, Emoji, EmojiAdd, EmojiCasual, EmojiNeutral, EmojiRemove, Feed, FocusArea, Form, Glasses, Headphones, Inbox, Lightbulb, Link, LinkBroken, LinkExternal, ListBulleted, ListChecklist, ListNumbered, LobbyBell, Menu, Node, OfficeBuilding, OnCall, PaintBucket, PaintPalette, Pen, ProjectionScreen, Pulse, Scales, Screen, ScreenPlus, Shapes, Share, Shortcut, ShowMoreHorizontal, ShowMoreVertical, SmartLink, SmartLinkCard, SmartLinkEmbed, SmartLinkInline, SmartLinkList, Snippet, StrokeWeightExtraLarge, StrokeWeightLarge, StrokeWeightMedium, StrokeWeightSmall, TableCellClear, TableCellMerge, TableCellSplit, TableColumnAddLeft, TableColumnAddRight, TableColumnDelete, TableColumnMoveLeft, TableColumnMoveRight, TableColumnsDistribute, TableRowAddAbove, TableRowAddBelow, TableRowDelete, TableRowMoveDown, TableRowMoveUp, Tag, TakeoutFood, Target, Theme, Translate, Tree, Whiteboard, ZoomIn, ZoomOut
```

---

## `plan.md` Structure

- **Background & Motivation**
- **Components**
- **Design Tokens**
- **Task Breakdown**
  - 1. [Status] Task Name - Summary
  - 2. [Status] Task Name - Summary
  - ...

[Status Key]: [] To Do; 🔄 In Progress; ✅ Done; ❌ Failed
