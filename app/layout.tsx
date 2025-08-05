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
      <body className="bg-white font-sans antialiased dark:bg-black">
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
