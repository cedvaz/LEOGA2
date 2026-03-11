import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Photovoltaik – LEOGA | Solarparks auf Freiflächen",
    description: "LEOGA entwickelt Photovoltaik-Freiflächenanlagen gemeinsam mit Flächeneigentümern. Faire Pacht, langfristige Partnerschaft und ökologischer Mehrwert.",
};


export default function PhotovoltaikPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Photovoltaik"
                subtitle="Solarparks, die Ertrag und Naturschutz verbinden. Für Sie und für die Region."
                imagePlaceholder="Solarpark-Panorama / Drohnenbild"
            />

            {/* Intro */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 leading-tight">
                                Sonnenergie <span className="text-primary">mit Verantwortung</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Ein Solarpark von LEOGA ist mehr als eine technische Anlage. Wir verbinden Stromerzeugung mit Bodenruhe und Artenvielfalt. Ihre Fläche produziert saubere Energie und erholt sich gleichzeitig von intensiver Nutzung.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Ob Ackerfläche, Grünland oder Konversionsfläche – wir prüfen gemeinsam, welches Konzept am besten zu Ihrem Standort passt. Ehrlich beraten, fair umgesetzt.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/pictures/Solarpark.png"
                                alt="Solarpark mit Schafen auf grüner Weide"
                                fill
                                className="object-cover brightness-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Was wir bieten */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-10 text-center">
                        Was Sie von uns erwarten können
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Standort-Check", text: "Kostenlose Prüfung Ihrer Fläche: Ausrichtung, Netzanschluss und Eignung für Photovoltaik." },
                            { title: "Biodiversitätskonzept", text: "Blühstreifen, Insektenhotels und Durchlässe für Kleintiere – Ihr Solarpark als Lebensraum." },
                            { title: "Moderne Technik", text: "Hochleistungsmodule für maximalen Ertrag bei minimalem Flächenverbrauch." },
                            { title: "Faire Pachtverträge", text: "Langfristige Verträge mit Indexierung. Transparent, verlässlich und ohne versteckte Klauseln." },
                            { title: "Agri-PV möglich", text: "Auf Wunsch prüfen wir die gleichzeitige Nutzung für Photovoltaik und Landwirtschaft." },
                            { title: "Kompletter Service", text: "Von der Planung über den Bau bis zum laufenden Betrieb – alles aus einer Hand." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start bg-white rounded-xl p-5">
                                <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-earth mb-1">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnerschaft */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6">
                        Ihre Fläche in guten Händen
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Wir wissen, dass Ihre Fläche mehr ist als ein Grundstück. Deshalb behandeln wir sie mit Respekt – und geben sie nach Laufzeitende im Ursprungszustand zurück. Das sichern wir vertraglich mit Rückbaubürgschaften.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Energie aus Überzeugung, Partnerschaft aus Tradition.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Haben Sie eine geeignete Fläche?</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Wir prüfen Ihr Grundstück kostenfrei und unverbindlich.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 bg-white text-primary font-medium px-8 py-3.5 rounded-full hover:bg-cream transition-all shadow-lg"
                    >
                        Kontakt aufnehmen
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
