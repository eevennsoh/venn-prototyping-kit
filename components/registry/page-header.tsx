import RelativeTimeBadge from "@/components/registry/relative-time-badge";
import ThemeToggleButton from "@/components/registry/theme-toggle-button";

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
};

const BUILD_TIMESTAMP = Date.now();

export default function PageHeader({ title = "Venn — Prototyping Kit", subtitle = "A custom registry for distributing code" }: PageHeaderProps) {
  return (
    <header className="bg-slate-0 sticky top-0 z-40 w-full border-b">
      <div className="flex items-start justify-between p-6">
        <div>
          <h1 className="text-text text-3xl font-bold tracking-tight">{title}</h1>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-700">
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
