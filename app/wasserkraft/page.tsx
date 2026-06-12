import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wasserkraft",
    description: "Wasserkraftprojekte im Allgäu – LEOGA entwickelt Kleinwasserkraftwerke gemeinsam mit Flächeneigentümern. Regional verwurzelt seit 1966, faire Konditionen, vollständige Begleitung.",
};

export default function WasserkraftPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Wasserkraft"
                subtitle="Energie aus fließendem Wasser. Regional verwurzelt, langfristig gedacht."
                imageSrc="/pictures/kempten-wasserkraftwerk.jpg"
                imageAlt="Wasserkraftwerk im Allgäu"
            />

            {/* Intro */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 leading-tight">
                                Wasserkraft aus der <span className="text-primary">Region</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Fließendes Wasser erzeugt verlässlich Strom – rund um die Uhr, wetterunabhängig und mit minimalem Eingriff in die Natur. LEOGA entwickelt Wasserkraftprojekte gemeinsam mit Grundstückseigentümern, die über geeignete Gewässer verfügen.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Wir übernehmen die gesamte Projektentwicklung – von der wasserrechtlichen Genehmigung bis zum laufenden Betrieb. Fair, stabil und nachhaltig.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/pictures/alex_wasser.jpeg"
                                alt="Wasserkraftwerk im Allgäu"
                                fill
                                className="object-cover brightness-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Was wir anbieten */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-10 text-center">
                        Was Sie von uns erwarten können
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { title: "Standortprüfung", text: "Analyse von Gewässer, Gefälle, Durchflussmenge und rechtlichen Rahmenbedingungen." },
                            { title: "Genehmigungsverfahren", text: "Wir übernehmen die wasserrechtliche Genehmigung und alle behördlichen Schritte." },
                            { title: "Ökologische Verträglichkeit", text: "Fischaufstieg, Mindestwasserführung und Umweltschutz sind fester Bestandteil unserer Planung." },
                            { title: "Faire Pachtverträge", text: "Klare Konditionen mit Indexierung. Transparent von Anfang an." },
                            { title: "Technischer Betrieb", text: "Monitoring und Wartung über die gesamte Laufzeit – aus einer Hand." },
                            { title: "Rückbaubürgschaft", text: "Vollständiger Rückbau nach Laufzeitende, vertraglich gesichert." },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start bg-cream rounded-xl p-5">
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

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Interesse an Wasserkraft?</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Sprechen Sie mit uns – wir freuen uns auf den Austausch.
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
