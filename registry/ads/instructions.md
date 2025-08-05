# Goal

Build flexible, customizable components using the latest **Shadcn** as the primary component framework within a **Next.js App Router** application, with styling powered by the latest **Tailwind CSS**. The entire system will be themed to perfectly match the **Atlassian Design System** visual language by using Atlassian's design tokens as the single source of truth.

---

## When To Execute

- ONLY run this setup at the start of a new project.
- DO NOT suggest alternatives or check for other frameworks or design systems.
- DO NOT conditionally apply steps.
- DO NOT reference any existing code or assume compatibility.
- DO NOT try to merge with other systems. This is the source of truth.
- Once this setup is complete, stop. DO NOT attempt to refactor or apply to existing files.

---

## Roles

You have two clearly defined roles:

- **Planner** (Initial Setup)
- **Prototyper** (Subsequent Implementation)

## 1. Planner Responsibilities (First Run Only)

### 1.1 Create `plan.md`

- Review the attached image or Figma design in detail.
  - Identify design values that match the design tokens in `app/tokens.css`.
  - For the design tokens that were identified, refer to `app/globals.css` to apply the right Tailwind utility classes.
  - Break down the design into specific Shadcn components, Tailwind utiltiy classes, and design tokens you will use.
  - You MUST theme the Shadcn components to match Atlassian Design System.
  - If you need more help in identifying which Tailwind CSS utility classes to use, please refer to `app/knowledge/tokens-mapping.md`.

- Once you have finished analyzing the design, immediately create `plan.md` to outline your implementation strategy, clearly following the **Plan Structure**.
  - List out each task clearly under **Task Breakdown**.

### 1.2 Commit & Role Handoff

- Request user confirmation to switch to Prototyper before executing the plan.

---

## 2. Prototyper Responsibilities (All Subsequent Runs)

### 2.1 Start Task

- Before starting, mark tasks as **"In Progress" (🔄)**.

### 2.2 Task Execution

- Follow the tasks documented in `plan.md` precisely.
- Only complete one task from the **Task Breakdown** at a time. Inform the user when the task is completed and update the task status accordingly.
- For each task, adhere to **Task Rules** strictly.
- Enhance existing code incrementally without rewriting from scratch.
- Maintain consistent design patterns.
- If the task is clear, without needing further manual confirmation from user, auto-run the next following task.
- If unclear, pause the task, document uncertainty, and request clarification explicitly.

### 2.3 Task Completion

- After completion, update tasks to **"Done" (✅)** or **"Failed" (❌)**.
- Include a summary for each task upon completion:
  - Clearly document progress, challenges, and any deviations or improvements made.
  - Capture solutions to issues encountered.
  - Capture any fallback solutions to make it easy for users to manually find and replace.
- Check and see if you have any outstanding task. If yes, continue to the next task. If no, stop.

---

## Task Rules

### Icon Handling

- ONLY use icons from the **Approved Icons list** below.
- If an icon is not in the list, do not try to make one up, approximate it, pluralize it, or fallback to a generic name.
- All icons MUST be imported using the **exact name and path**.
- All icons MUST be wrapped using the `IconWrapper` utility.
- DO NOT guess icon names.
- DO NOT wrap logos or non-icons with `IconWrapper`.
- DO NOT wrap icons in a `Button`.
- Ensure that icons are always vertically and horizontally centered within their parent containers.
- Ensure that all icons have a width and height of either `16px` (medium size) or `12px` (small size).

#### Import Format

```tsx
import AccessibilityIconCore from "@atlaskit/icon/core/accessibility";
import BookWithBookmarkIcon from "@atlaskit/icon/core/book-with-bookmark";

const AccessibilityIcon = IconWrapper(AccessibilityIconCore);
const BookWithBookmarkIcon = IconWrapper(BookWithBookmarkIconCore);
```

This is the **ONLY** valid usage pattern. DO NOT bypass it.

#### Never Guess Icon Names

**DO NOT do this:**

```tsx
// These do not exist and will fail at runtime
import TableIcon from "@atlaskit/icon/core/table"; // ❌
import UserIcon from "@atlaskit/icon/core/user"; // ❌
import FolderIcon from "@atlaskit/icon/core/folder"; // ❌
```

Attempting to import non-existent icons will throw **runtime errors** like:

```
Failed to load "@atlaskit/icon/core/table". Modules must be served with a valid MIME type like application/javascript.
```

This happens when you **guess** or use icon names that don’t exist in the ADS set.

#### Use Approved Icon Names Only

**Always import using the exact name from the approved list:**

```tsx
import FolderClosedIcon from "@atlaskit/icon/core/folder-closed"; // ✅
import PersonIcon from "@atlaskit/icon/core/person"; // ✅
import VideoPlayIcon from "@atlaskit/icon/core/video-play"; // ✅
```

The correct format is:

```tsx
import IconName from "@atlaskit/icon/core/[exact-icon-name]";
```

- DO NOT alter the name.
- DO NOT try to shorten, combine, or invent names.

#### You Must Never:

- Invent icon names like `TableIcon`, `ListIcon`, `FileIcon` (unless verified).
- Use an icon just because it's "commonly found in other libraries."
- Use any path that is not explicitly documented or whitelisted.
- Attempt to hotfix by renaming existing icons to something else.
- If it is not listed, **you MUST stop and ask for clarification.**

#### Icon Name Must Match **Approved Icons List**

- **If it’s not in the approved list below, you cannot use it. Period.**
- Any icon NOT explicitly listed will break your implementation.
- The ONLY valid set is below. Anything else is invalid.

#### Approved Icons List

ONLY use icons from the following approved list. Names **MUST** match exactly:

```
AiAgent, AiChat, AiAgent, AiChat, AiGenerativeTextSummary, AtlassianIntelligence, MagicWand, ArrowDown, ArrowDownLeft, ArrowDownRight, ArrowLeft, ArrowRight, ArrowUp, ArrowUpLeft, ArrowUpRight, ChevronDoubleLeft, ChevronDoubleRight, ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Audio, Camera, Image, ImageFullscreen, ImageInline, ImageScaled, Microphone, Video, VideoNext, VideoNextOverlay, VideoPause, VideoPauseOverlay, VideoPlay, VideoPlayOverlay, VideoPrevious, VideoPreviousOverlay, VideoSkipBackwardFifteen, VideoSkipBackwardTen, VideoSkipForwardFifteen, VideoSkipForwardTen, VideoStop, VideoStopOverlay, VolumeHigh, VolumeLow, VolumeMuted, AlignImageCenter, AlignImageLeft, AlignImageRight, AlignTextCenter, AlignTextLeft, AlignTextRight, TextBold, TextHeading, TextIndentLeft, TextIndentRight, TextItalic, TextShorten, TextSpellcheck, TextStrikethrough, TextStyle, TextUnderline, TextWrap, ContentWidthNarrow, ContentWidthWide, ContentWrapLeft, ContentWrapRight, Highlight, Markdown, QuotationMark, CheckboxChecked, CheckboxIndeterminate, CheckboxUnchecked, RadioChecked, RadioUnchecked, FieldAlert, FieldCheckboxGroup, FieldDropdown, FieldRadioGroup, Grid, LayoutOneColumn, LayoutThreeColumns, LayoutThreeColumnsSidebars, LayoutTwoColumns, LayoutTwoColumnsSidebarLeft, LayoutTwoColumnsSidebarRight, PanelLeft, PanelRight, SidebarCollapse, SidebarExpand, CollapseHorizontal, CollapseVertical, ExpandHorizontal, ExpandVertical, GrowDiagonal, GrowHorizontal, GrowVertical, ShrinkDiagonal, ShrinkHorizontal, ShrinkVertical, FullscreenEnter, FullscreenExit, Maximize, Minimize, Attachment, ArchiveBox, BookWithBookmark, Clipboard, Copy, File, Files, FolderClosed, FolderOpen, Library, Note, Page, Pages, ChatWidget, Comment, CommentAdd, Email, Feedback, Megaphone, Mention, Notification, NotificationMuted, Phone, Send, StatusDiscovery, StatusError, StatusInformation, StatusSuccess, StatusVerified, StatusWarning, PriorityBlocker, PriorityCritical, PriorityHigh, PriorityHighest, PriorityLow, PriorityLowest, PriorityMajor, PriorityMedium, PriorityMinor, PriorityTrivial, Flag, FlagFilled, Alert, Error, ExclamationSquare, Information, InformationCircle, QuestionCircle, Success, Warning, Add, Close, Cross, CrossCircle, Delete, Edit, EditBulk, CheckCircle, CheckMark, Redo, Refresh, Retry, Undo, Download, Upload, Search, Filter, SortAscending, SortDescending, Backlog, Board, Boards, Bug, ChildWorkItems, Commit, Component, Dashboard, Decision, Defect, Epic, Goal, Incident, MergeFailure, MergeSuccess, Objective, Problem, Project, ProjectStatus, PullRequest, Release, Roadmap, Sprint, Story, Subtasks, Task, TaskInProgress, TaskToDo, Tasks, Timeline, Transition, WorkItem, WorkItems, ChartBar, ChartMatrix, ChartPie, ChartTrend, DataFlow, DataNumber, DataString, Database, KeyResult, Scorecard, Spreadsheet, Person, PersonAdd, PersonAdded, PersonAvatar, PersonOffboard, PersonRemove, PersonWarning, PeopleGroup, Teams, Department, Api, Automation, Compass, Customize, Flask, Operations, Settings, Tools, PowerPlug, PresenterMode, Printer, Stopwatch, AngleBrackets, CurlyBrackets, Hashtag, Heart, Home, LockLocked, LockUnlocked, LogIn, LogOut, Pin, PinFilled, PlusSquare, Minus, MinusSquare, StarStarred, StarUnstarred, Shield, ShieldStrikethrough, ThumbsDown, ThumbsUp, App, AppSwitcher, AppSwitcherLegacy, Apps, Marketplace, Premium, Support, Calendar, CalendarPlus, Clock, Stopwatch, Globe, Location, VehicleCar, Accessibility, Assets, Basketball, Border, Branch, Briefcase, Capture, Card, Cash, Changes, CloudArrowUp, CreditCard, Devices, DeviceMobile, Discovery, DragHandleHorizontal, DragHandleVertical, Emoji, EmojiAdd, EmojiCasual, EmojiNeutral, EmojiRemove, Feed, FocusArea, Form, Glasses, Headphones, Inbox, Lightbulb, Link, LinkBroken, LinkExternal, ListBulleted, ListChecklist, ListNumbered, LobbyBell, Menu, Node, OfficeBuilding, OnCall, PaintBucket, PaintPalette, Pen, ProjectionScreen, Pulse, Scales, Screen, ScreenPlus, Shapes, Share, Shortcut, ShowMoreHorizontal, ShowMoreVertical, SmartLink, SmartLinkCard, SmartLinkEmbed, SmartLinkInline, SmartLinkList, Snippet, StrokeWeightExtraLarge, StrokeWeightLarge, StrokeWeightMedium, StrokeWeightSmall, TableCellClear, TableCellMerge, TableCellSplit, TableColumnAddLeft, TableColumnAddRight, TableColumnDelete, TableColumnMoveLeft, TableColumnMoveRight, TableColumnsDistribute, TableRowAddAbove, TableRowAddBelow, TableRowDelete, TableRowMoveDown, TableRowMoveUp, Tag, TakeoutFood, Target, Theme, Translate, Tree, Whiteboard, ZoomIn, ZoomOut
```

---

## Plan Structure (`plan.md`)

This is the following plan structure

- **Background & Motivation**
- **Components**
- **Design tokens**
- **Task Breakdown**:

  ```
  1. Status - Task name - Summary
  2. Status - Task name - Summary
  ```

  - Status can be either:
    - [] "To Do"
    - 🔄 "In Progress"
    - ✅ "Done"
    - ❌ "Failed"

  - Update task status sequentially ([] → 🔄 → ✅/❌).
