import type { Metadata } from "next";
import { Montserrat, DM_Sans, Dancing_Script } from "next/font/google";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://otctrips.com"),
  title: {
    default:
      "OTC Trips | Your Chapter's Trip. Built From Scratch. Handled Start to Finish.",
    template: "%s | OTC Trips",
  },
  description:
    "Fully custom group travel for fraternities, sororities, and college organizations. Flights included through our major carrier partnerships, one coordinator start to finish, no packages.",
  openGraph: {
    siteName: "OTC Trips",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "OTC Trips premium group travel",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${dmSans.variable} ${dancingScript.variable}`}
      >
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
