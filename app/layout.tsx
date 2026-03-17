import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LandIQ — Land Deal Intelligence for Investors",
  description:
    "The first deal intelligence platform built exclusively for vacant land investors, infill lot buyers, and builder lot sourcers. Analyze comps, calculate offers, and price land with precision.",
  keywords:
    "land investing, vacant land comps, land offer calculator, infill lot analyzer, builder lot pricing, land deal intelligence",
  openGraph: {
    title: "LandIQ — Land Deal Intelligence for Investors",
    description:
      "Stop guessing what to offer for land. LandIQ delivers comp analysis, acreage band pricing, and builder lot intelligence — built for serious land investors.",
    type: "website",
    siteName: "LandIQ",
  },
  twitter: {
    card: "summary_large_image",
    title: "LandIQ — Land Deal Intelligence for Investors",
    description:
      "The first deal intelligence platform built exclusively for vacant land investors.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
