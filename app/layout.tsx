import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEOGA - Gemeinsam Erneuerbare Energien Ausbauen",
  description: "Fair. Stabil. Nachhaltig. LEOGA ist Ihr Partner für Windkraft, Photovoltaik und Batteriespeicher. Seit über 60 Jahren.",
};

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={cn(manrope.className, "antialiased min-h-screen bg-white text-gray-900 flex flex-col")}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


