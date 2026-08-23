import { Inter, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";
import React from "react";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

/**
 * The design leans on font-mono for nearly all secondary text, which was
 * previously falling back to whatever monospace the OS happened to have.
 * Loading one makes that texture the same everywhere.
 */
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
