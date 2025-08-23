// Use inside registry.json files to define the layout of the page
import type { Metadata } from "next";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-elevation-surface flex min-h-screen items-center justify-center antialiased">{children}</body>
    </html>
  );
}
