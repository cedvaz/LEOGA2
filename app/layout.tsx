import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "LEOGA - Verwurzelt in der Region, gewachsen mit der Natur",
  description: "Erneuerbare Energie im Einklang mit Mensch und Natur. LEOGA ist Ihr Partner für Windkraft, Photovoltaik und Batteriespeicher seit über 60 Jahren.",
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
