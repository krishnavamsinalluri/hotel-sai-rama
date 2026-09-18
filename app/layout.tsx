import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Hotel Sai Rama Vijayawada | Comfortable Rooms in Governorpet",
    template: "%s | Hotel Sai Rama Vijayawada",
  },
  description:
    "Stay at Hotel Sai Rama, conveniently located beside Apsara Theatre in Governorpet, Vijayawada. Explore our rooms, facilities, photographs and contact details.",
  keywords: [
    "Hotel Sai Rama",
    "Hotel Sai Rama Vijayawada",
    "Hotels in Governorpet Vijayawada",
    "Budget hotel near Apsara Theatre",
    "AC rooms Vijayawada",
    "Family hotel Vijayawada",
    "Hotels near Vijayawada Railway Station",
  ],
  authors: [{ name: "Hotel Sai Rama" }],
  creator: "Hotel Sai Rama",
  publisher: "Hotel Sai Rama",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    title: "Hotel Sai Rama Vijayawada | Comfortable Rooms in Governorpet",
    description:
      "Stay at Hotel Sai Rama, conveniently located beside Apsara Theatre in Governorpet, Vijayawada. Explore our rooms, facilities, photographs and contact details.",
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/exterior/hotel-sai-rama-building.webp",
        width: 1200,
        height: 630,
        alt: "Hotel Sai Rama Building exterior in Governorpet Vijayawada",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-white flex flex-col min-h-screen">
        <JsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingActions />
        <MobileActionBar />
      </body>
    </html>
  );
}
