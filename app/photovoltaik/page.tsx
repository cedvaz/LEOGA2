"use client";

import { SubpageHero } from "@/components/layout/SubpageHero";
import {
  CheckCircle2,
  Zap,
  ShieldCheck,
  Sun,
  Leaf,
  BarChart3,
  Microscope,
  ImageIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Simple Placeholder for Images as requested
const ImagePlaceholder = ({ text }: { text: string }) => (
  <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-gray-400 p-8 text-center border-2 border-dashed border-gray-200 rounded-3xl group-hover:bg-gray-200 transition-colors">
    <ImageIcon size={48} className="mb-4 opacity-20" />
    <p className="font-medium text-sm">{text}</p>
    <p className="text-xs mt-2 opacity-50">Hier Bild hochladen</p>
  </div>
);

export default function PhotovoltaikPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SubpageHero
        title="Photovoltaik"
        subtitle="Sonnige Aussichten für Ihre Flächen. Wir vereinen maximale Erträge mit ökologischem Mehrwert."
        imageSrc="/service_solar.png"
      />

      {/* Mission: Ecology & Economy */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Unsere Mission</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
            Symbiose aus Ökonomie und Ökologie
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Ein Solarpark von LEOGA ist mehr als eine technische Anlage. Es ist ein lebendiges Ökosystem, das sauberen Strom produziert und gleichzeitig dem Boden eine dringend benötigte Ruhepause von intensiver Landwirtschaft gönnt. Wir verwandeln ertragsschwache Ackerflächen in blühende Biodiversitäts-Oasen.
          </p>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>
      </section>

      {/* Deep Content: Biodiversity & Soil */}
      <section className="py-24 bg-gray-50 overflow-hidden border-y border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group">
              <ImagePlaceholder text="Bild: Biodiversität & Natur im Solarpark" />
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-8 text-gray-900">Bodenruhe & Artenvielfalt</h3>

              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-gray-100">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">Mineralische Erholung</h4>
                    <p className="text-gray-600">Durch den Verzicht auf Pestizide und intensive Düngung kann sich der Boden über Jahrzehnte regenerieren. Dies fördert den Humusaufbau und die CO2-Speicherung im Erdreich.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-gray-100">
                    <Leaf size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">Biodiversitäts-Check</h4>
                    <p className="text-gray-600">Wir integrieren Blühstreifen, Insektenhotels und Durchlässe für Kleintiere. Unsere Parks sind geschützte Lebensräume für bedrohte Arten.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0 text-primary border border-gray-100">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-xl">Agri-PV Potential</h4>
                    <p className="text-gray-600">Auf Wunsch prüfen wir Konzepte für die gleichzeitige Nutzung der Fläche für Photovoltaik und Landwirtschaft (z.B. Schafbeweidung oder Sonderkulturen).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Excellence */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Höchste Standards für maximale Erträge</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Wir setzen nur auf modernste Komponenten marktführender Hersteller für langjährigen, störungsfreien Betrieb.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="group p-8 rounded-3xl bg-gray-50 transition-colors hover:bg-primary/5">
              <Sun className="text-primary mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Bifaziale Hochleistungs-Module</h4>
              <p className="text-gray-600 text-sm">Nutzung von direkter Sonnenstrahlung und Reflexionen von der Rückseite für ca. 10-15% Mehrertrag.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-gray-50 transition-colors hover:bg-primary/5">
              <Zap className="text-primary mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Intelligente Wechselrichter</h4>
              <p className="text-gray-600 text-sm">Optimierte Energieumwandlung und Echtzeit-Monitoring auf Modulebene zur Fehlerprävention.</p>
            </div>
            <div className="group p-8 rounded-3xl bg-gray-50 transition-colors hover:bg-primary/5">
              <ShieldCheck className="text-primary mb-6" size={40} />
              <h4 className="text-xl font-bold mb-4">Full-Service Betrieb</h4>
              <p className="text-gray-600 text-sm">Eigene Service-Teams kümmern sich um Wartung, Reinigung und Grünpflege über die gesamte Laufzeit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Fact Box */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-primary font-bold uppercase tracking-wider mb-4 text-sm px-3 py-1 bg-white inline-block rounded-full">Finanzielles Fundament</h3>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Sichere Rendite über Generationen</h2>
              <p className="text-xl text-white/80 mb-10">
                Eine Partnerschaft mit LEOGA ist eine Investition in die Zukunft Ihrer Familie. Wir garantieren finanzielle Sicherheit durch inflationsgeschützte Verträge.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Pachtsätze deutlich über marktüblichem Agrar-Niveau",
                  "Vertragslaufzeiten von 30 Jahren und mehr",
                  "Inflationsschutz durch Indexierung der Pacht",
                  "Full-Service: Keine Eigeninvestitionskosten",
                  "Bankbürgschaft für Rückbaukosten hinterlegt"
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
              <h4 className="text-2xl font-bold mb-8 text-center">Der Weg zum Solarpark</h4>
              <div className="space-y-8">
                {[
                  { t: "Flächen-Check", d: "Digitaler Check von Netzanschluss & Eignung" },
                  { t: "Vertrag", d: "Sicherung der Fläche mit fairen Konditionen" },
                  { t: "Bebauungsplan", d: "Wir steuern das gesamte Genehmigungsverfahren" },
                  { t: "Bau & Netz", d: "Zügige Umsetzung durch regionale Fachpartner" },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white font-bold flex items-center justify-center shrink-0 shadow-lg">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{step.t}</p>
                      <p className="text-sm text-white/60">{step.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/kontakt">
                <Button size="lg" className="w-full mt-12 bg-white text-primary hover:bg-gray-100 font-bold h-14 rounded-2xl">
                  Jetzt Potenzial prüfen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Sie haben eine Fläche?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Kontaktieren Sie uns für eine unverbindliche Ersteinschätzung. Wir prüfen Ihre Fläche diskret und professionell.
          </p>
          <Link href="/kontakt">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-12 h-14 rounded-full shadow-xl text-lg">
              Expertengespräch vereinbaren
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
