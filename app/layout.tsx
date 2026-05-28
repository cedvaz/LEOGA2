import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: {
    default: "LEOGA – Erneuerbare Energien im Allgäu",
    template: "%s – LEOGA",
  },
  description: "LEOGA entwickelt Windkraft-, Photovoltaik-, Batteriespeicher- und Wasserkraftprojekte im Allgäu. Faire Pachtverträge und persönliche Beratung für Flächeneigentümer.",
  metadataBase: new URL("https://leoga.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://leoga.de",
    siteName: "LEOGA",
  },
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={cn(dmSans.variable, playfair.variable, "antialiased min-h-screen bg-background text-foreground flex flex-col font-sans")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
