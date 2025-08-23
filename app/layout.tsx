import type { Metadata } from "next";
import { ThemeProvider } from "@/registry/ads/lib/theme-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Venn — Prototyping Kit",
  description: "A custom registry for distributing code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Suppress hydration warning due to theming */}
      <html lang="en" suppressHydrationWarning>
        <head>
          {/* Atlassian DS-CDN Font Integration */}
          <link rel="preconnect" href="https://ds-cdn.prod-east.frontend.public.atl-paas.net" />
          <link
            rel="preload"
            href="https://ds-cdn.prod-east.frontend.public.atl-paas.net/assets/fonts/atlassian-sans/v3/AtlassianSans-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="preload stylesheet" href="https://ds-cdn.prod-east.frontend.public.atl-paas.net/assets/font-rules/v5/atlassian-fonts.css" as="style" crossOrigin="anonymous" />
        </head>
        <body className="antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}{" "}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
