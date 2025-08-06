import type { Metadata } from "next";

import "./tokens.css";
import "./globals.css";
import { ThemeToggle } from "@/components/theme-toggle";

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
    <html lang="en">
      <body className="bg-slate-0 dark:bg-dark-slate-0 font-sans antialiased">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
