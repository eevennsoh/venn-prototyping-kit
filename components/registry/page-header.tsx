import RelativeTimeBadge from "@/components/registry/relative-time-badge";
import ThemeToggleButton from "@/components/registry/theme-toggle-button";

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
};

const BUILD_TIMESTAMP = Date.now();

export default function PageHeader({ title = "Venn — Prototyping Kit", subtitle = "A custom registry for distributing code" }: PageHeaderProps) {
  return (
    <header className="bg-elevation-surface border-border sticky top-0 z-40 w-full border-b">
      <div className="flex items-start justify-between p-6">
        <div>
          <h1>{title}</h1>
          <div className="font-body text-text-subtle mt-1 flex items-center gap-2">
            <span>{subtitle}</span>
            <span aria-hidden>·</span>
            <RelativeTimeBadge date={BUILD_TIMESTAMP} />
          </div>
        </div>
        <ThemeToggleButton />
      </div>
    </header>
  );
}
