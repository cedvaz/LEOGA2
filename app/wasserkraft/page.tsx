import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Wasserkraft – LEOGA | Hydroenergie aus der Region",
    description: "LEOGA entwickelt Wasserkraftprojekte mit regionalem Bezug und langfristiger Partnerschaft. Verwurzelt im Allgäu seit 1966.",
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
                                Wasserkraft mit <span className="text-primary">Geschichte</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Die Familie Gabler ist seit Generationen mit dem Allgäu und seinen natürlichen Ressourcen verbunden. 1966 gründete Leonhard Gabler das Kies- und Betonwerk Hirschdorf in Kempten – ein Betrieb, der bis heute Teil der regionalen Bauwirtschaft ist.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Diese Verwurzelung in der Region und der respektvolle Umgang mit natürlichen Ressourcen prägen auch die Arbeit von LEOGA. Wasserkraft ist für uns eine natürliche Erweiterung dieses Denkens.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/pictures/kempten-wasserkraftwerk.jpg"
                                alt="Wasserkraftwerk im Allgäu"
                                fill
                                className="object-cover brightness-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Familienerbe */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 leading-tight">
                                Seit 1966 in der Region
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Leonhard Gabler gründete 1966 in Kempten-Hirschdorf ein Kies- und Transportbetonwerk, das sich zur festen Größe der regionalen Bauwirtschaft entwickelte. Das Betonwerk befindet sich bis heute in Kempten-Hirschdorf; das Kieswerk wurde 1992 nach Wolfertschwenden-Darast verlegt, wo die natürlichen Kiesvorkommen liegen.
                            </p>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Jahrzehnte des Umgangs mit natürlichen Rohstoffen und die enge Verbindung zur Region haben geprägt, wie die Familie Gabler wirtschaftet: verlässlich, langfristig und mit Respekt vor dem, was die Natur gibt.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                LEOGA führt dieses Erbe weiter – mit dem Blick auf erneuerbare Energien und einem klaren Bekenntnis zur Region.
                            </p>
                            <a
                                href="https://kiesdorf-hirschdorf.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-primary hover:text-moss transition-colors group"
                            >
                                Kies- und Betonwerk Hirschdorf
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                        <div className="bg-white rounded-2xl p-8 border border-sand">
                            <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-4">Chronik</p>
                            <div className="space-y-6">
                                {[
                                    { year: "1966", text: "Leonhard Gabler gründet das Kies- und Betonwerk Hirschdorf in Kempten." },
                                    { year: "1992", text: "Das Kieswerk wird nach Wolfertschwenden-Darast verlegt, näher an den natürlichen Vorkommen." },
                                    { year: "Heute", text: "LEOGA entwickelt als nächste Generation Projekte für erneuerbare Energien in der Region." },
                                ].map((item) => (
                                    <div key={item.year} className="flex gap-4">
                                        <div className="w-14 shrink-0">
                                            <span className="text-sm font-bold text-primary">{item.year}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                                    </div>
                                ))}
                            </div>
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
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Haben Sie ein Gewässer auf Ihrer Fläche?</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Wir prüfen die Möglichkeiten kostenfrei und unverbindlich.
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
