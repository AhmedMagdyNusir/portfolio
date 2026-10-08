import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { author, socialLinks } from "@/lib/constants";

// Inter is a variable font, so omitting `weight` loads a single file covering all weights
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(author.siteUrl),
  title: author.name,
  description: author.bio,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: author.name,
    title: `${author.name} | ${author.jobTitle}`,
    description: author.bio,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${author.name} | ${author.jobTitle}`,
    description: author.bio,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: author.name,
  jobTitle: author.jobTitle,
  description: author.bio,
  url: author.siteUrl,
  image: new URL(author.img, author.siteUrl).toString(),
  email: `mailto:${author.email}`,
  sameAs: socialLinks.map((social) => social.link),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`bg-gray-950 text-gray-50 ${inter.className}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
