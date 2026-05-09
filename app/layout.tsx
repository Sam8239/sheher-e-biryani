import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/constants/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} | Authentic Dum Biryani — Order on Zomato`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "biryani",
    "dum biryani",
    "Hyderabadi biryani",
    "biryani delivery Noida",
    "best biryani Noida",
    "Sheher-e-Biryani",
    "chicken biryani",
    "mutton biryani",
    "biryani near me",
    "order biryani online",
    "authentic biryani",
    "dum pukht",
    "Mughlai food",
    "kebabs Noida",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Authentic Dum Biryani`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} - Authentic Dum Biryani`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Authentic Dum Biryani`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },

  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,

  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: SITE_NAME,
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  category: "food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${playfair.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
