"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/registry/ads/ui/badge";

type RelativeTimeBadgeProps = {
  date: string | number | Date;
  prefix?: string;
  className?: string;
};

function formatRelativeCompact(from: Date, to: Date): string {
  const diffSec = Math.round((from.getTime() - to.getTime()) / 1000);
  const future = diffSec > 0;
  const abs = Math.abs(diffSec);

  if (abs <= 5) return "just now";
  if (abs < 60) return future ? `in ${abs}s` : `${abs}s`;

  const mins = Math.round(abs / 60);
  if (mins < 60) return future ? `in ${mins}m` : `${mins}m`;

  const hours = Math.round(mins / 60);
  if (hours < 24) return future ? `in ${hours}h` : `${hours}h`;

  const days = Math.round(hours / 24);
  if (days < 30) return future ? `in ${days}d` : `${days}d`;

  const months = Math.round(days / 30);
  if (months < 24) return future ? `in ${months}mo` : `${months}mo`;

  const years = Math.round(months / 12);
  return future ? `in ${years}y` : `${years}y`;
}

export default function RelativeTimeBadge({ date, prefix = "Last updated: ", className }: RelativeTimeBadgeProps) {
  // Avoid hydration mismatch by rendering placeholder on server and computing on client after mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const buildDate = useMemo(() => new Date(date), [date]);
  // Use a fixed locale and timezone so SSR and client generate the same string
  const absoluteTitle = useMemo(() => new Intl.DateTimeFormat("en-US", { dateStyle: "medium", timeStyle: "short", timeZone: "UTC" }).format(buildDate), [buildDate]);
  const relative = useMemo(() => (mounted ? formatRelativeCompact(buildDate, new Date()) : "—"), [buildDate, mounted]);

  return (
    <Badge data-slot="relative-time-badge" className={className}>
      <time dateTime={buildDate.toISOString()} title={absoluteTitle}>
        {prefix}
        {relative}
      </time>
    </Badge>
  );
}
