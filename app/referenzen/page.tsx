import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Referenzen – LEOGA | Unsere Projekte",
    description: "Ausgewählte Referenzprojekte von LEOGA: Windkraft, Wasserkraftwerk und Batteriespeicher – verlässlich umgesetzt in Partnerschaft mit Eigentümern.",
};

const referenzen = [
    {
        title: "Windkraft Reichholz",
        type: "Windkraft",
        description: "Windkraftprojekt in enger Zusammenarbeit mit der Gemeinde und lokalen Flächeneigentümern. Standortprüfung, Genehmigung und Bau aus einer Hand – mit persönlicher Begleitung über den gesamten Prozess.",
        image: "/ref_windkraft_reichholz.jpg",
        alt: "Drohnenbild Windpark Reichholz",
    },
    {
        title: "Amper-Kraftwerk",
        type: "Wasserkraft",
        description: "Wasserkraftprojekt an der Amper in enger Abstimmung mit Behörden und Anliegern. Saubere, kontinuierliche Stromerzeugung aus Wasserkraft – zuverlässig, emissionsfrei und regional verankert.",
        image: "/ref_amperkraftwerk.jpg",
        alt: "Amper-Kraftwerk Wasserkraftanlage",
    },
    {
        title: "Gewerbeimmobilien-Projekt",
        type: "Batteriespeicher",
        description: "Batteriespeicherprojekt auf Gewerbefläche in Nähe eines Umspannwerks. Kurze Wege, minimaler Flächenbedarf und ein Beitrag zur regionalen Netzstabilität.",
        image: "/ref_gewerbeimmobilien.jpg",
        alt: "Batteriespeicher Gewerbeimmobilien",
    },
];

export default function ReferenzenPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Referenzen"
                subtitle="Ausgewählte Projekte, die für unsere Arbeitsweise stehen: gründlich, fair und langfristig."
            />

            {/* Referenzen */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="space-y-12">
                        {referenzen.map((ref, i) => (
                            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-cream rounded-2xl overflow-hidden">
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src={ref.image}
                                        alt={ref.alt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-8">
                                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                                        {ref.type}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-earth mb-3">{ref.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{ref.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Ihr Projekt könnte das nächste sein</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Sprechen Sie mit uns über die Möglichkeiten für Ihre Fläche.
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
