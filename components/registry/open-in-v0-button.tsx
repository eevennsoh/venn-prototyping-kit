import { Button } from "@/components/ui/button";
import * as React from "react";

const V0_LOGO_SVG = (
  <svg viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current">
    <path
      d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
      fill="currentColor"
    />
    <path d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z" fill="currentColor" />
  </svg>
);

const buildV0Url = (url: string, title?: string, prompt?: string) => {
  const fullUrl = url.startsWith("http") ? url : `https://${url}`;
  const params = new URLSearchParams({ url: fullUrl });

  if (title) params.append("title", title);
  if (prompt) params.append("prompt", prompt);

  return `https://v0.dev/chat/api/open?${params}`;
};

interface OpenInV0ButtonProps extends React.ComponentProps<typeof Button> {
  name: string;
  title?: string;
  baseURL?: string;
  prompt?: string;
}

export default function OpenInV0Button({ name, title, baseURL = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.NEXT_LOCALHOST_URL || "", prompt, ...props }: OpenInV0ButtonProps) {
  const url = buildV0Url(`${baseURL}/r/${name}.json`, title, prompt);

  return (
    <Button appearance="primary" aria-label="Open in v0" asChild {...props}>
      <a href={url} target="_blank" rel="noreferrer">
        Open in {V0_LOGO_SVG}
      </a>
    </Button>
  );
}
