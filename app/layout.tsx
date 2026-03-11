import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "LEOGA – Energie aus Überzeugung, Partnerschaft aus Tradition",
  description: "LEOGA entwickelt Windkraft-, Photovoltaik- und Batteriespeicherprojekte. Langfristige Partnerschaften mit Eigentümern – verwurzelt, verlässlich, fair.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
      </body>
    </html>
  );
}
