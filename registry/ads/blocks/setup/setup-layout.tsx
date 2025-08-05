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
      <body className="flex min-h-screen items-center justify-center bg-white font-sans antialiased dark:bg-black">{children}</body>
    </html>
  );
}
