import { Checkbox } from "@/registry/ads/ui/checkbox";

function CheckboxShowcase() {
  return (
    <div className="flex h-full w-full flex-col gap-6">
      {/* Checked Appearance */}
      <div className="space-y-4">
        <h6>Appearance — Checked</h6>
        <div className="flex flex-wrap items-center gap-4">
          {/* Basic State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="checked" id="checked-basic" checked />
            <label htmlFor="checked-basic" className="font-body text-text cursor-pointer">
              Basic
            </label>
          </div>

          {/* Disabled State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="checked" disabled id="checked-disabled" checked />
            <label htmlFor="checked-disabled" className="font-body text-text-disabled cursor-not-allowed">
              Disabled
            </label>
          </div>

          {/* Focus State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="checked" id="checked-focus" className="outline-border-focused outline-2 outline-offset-2" checked />
            <label htmlFor="checked-focus" className="font-body text-text cursor-pointer">
              Focus
            </label>
          </div>

          {/* Invalid State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="checked" aria-invalid="true" id="checked-invalid" checked />
            <label htmlFor="checked-invalid" className="font-body text-text cursor-pointer">
              Invalid
            </label>
          </div>
        </div>
      </div>

      {/* Unchecked Appearance */}
      <div className="space-y-4">
        <h6>Appearance — Unchecked</h6>
        <div className="flex flex-wrap items-center gap-4">
          {/* Basic State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="unchecked" id="unchecked-basic" />
            <label htmlFor="unchecked-basic" className="font-body text-text cursor-pointer">
              Basic
            </label>
          </div>

          {/* Disabled State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="unchecked" disabled id="unchecked-disabled" />
            <label htmlFor="unchecked-disabled" className="font-body text-text-disabled cursor-not-allowed">
              Disabled
            </label>
          </div>

          {/* Focus State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="unchecked" id="unchecked-focus" className="outline-border-focused outline-2 outline-offset-2" />
            <label htmlFor="unchecked-focus" className="font-body text-text cursor-pointer">
              Focus
            </label>
          </div>

          {/* Invalid State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="unchecked" aria-invalid="true" id="unchecked-invalid" />
            <label htmlFor="unchecked-invalid" className="font-body text-text cursor-pointer">
              Invalid
            </label>
          </div>
        </div>
      </div>

      {/* Indeterminate Appearance */}
      <div className="space-y-4">
        <h6>Appearance — Indeterminate</h6>
        <div className="flex flex-wrap items-center gap-4">
          {/* Basic State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="indeterminate" id="indeterminate-basic" checked />
            <label htmlFor="indeterminate-basic" className="font-body text-text cursor-pointer">
              Basic
            </label>
          </div>

          {/* Disabled State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="indeterminate" disabled id="indeterminate-disabled" checked />
            <label htmlFor="indeterminate-disabled" className="font-body text-text-disabled cursor-not-allowed">
              Disabled
            </label>
          </div>

          {/* Focus State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="indeterminate" id="indeterminate-focus" className="outline-border-focused outline-2 outline-offset-2" checked />
            <label htmlFor="indeterminate-focus" className="font-body text-text cursor-pointer">
              Focus
            </label>
          </div>

          {/* Invalid State */}
          <div className="flex items-center gap-1">
            <Checkbox appearance="indeterminate" aria-invalid="true" id="indeterminate-invalid" checked />
            <label htmlFor="indeterminate-invalid" className="font-body text-text cursor-pointer">
              Invalid
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CheckboxPage() {
  return (
    <div className="flex h-full w-full items-start justify-start">
      <CheckboxShowcase />
    </div>
  );
}
