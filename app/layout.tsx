import type { Metadata } from "next";
import { ThemeProvider } from "@/registry/ads/lib/theme-provider";

import "./tokens.css";
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
      <html lang="en" suppressHydrationWarning>
        <body className="bg-slate-0 font-sans antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}{" "}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
