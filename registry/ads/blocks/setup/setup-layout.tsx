// Use inside registry.json files to define the layout of the page
import type { Metadata } from "next";

import "./tokens.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="dark:bg-dark-slate-0 bg-slate-0 flex min-h-screen items-center justify-center font-sans antialiased">{children}</body>
    </html>
  );
}
