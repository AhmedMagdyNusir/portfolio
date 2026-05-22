import "./globals.css";
import type { Metadata } from "next";
import * as Sentry from "@sentry/nextjs";
import { Inter } from "next/font/google";
import { author } from "@/lib/constants";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export function generateMetadata(): Metadata {
  return {
    title: author.name,
    description: author.bio,
    other: { ...Sentry.getTraceData() },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-950 text-gray-50 ${inter.className}`}>{children}</body>
    </html>
  );
}
