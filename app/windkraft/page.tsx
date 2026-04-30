import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Windkraft – LEOGA | Windkraftprojekte in Partnerschaft",
    description: "LEOGA entwickelt Windkraftprojekte gemeinsam mit Flächeneigentümern. Verantwortungsvolle Planung, faire Konditionen und langfristige Begleitung.",
};


export default function WindkraftPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Windkraft"
                subtitle="Windenergie mit Weitblick. Wir planen Projekte, die zur Region passen – verantwortungsvoll und langfristig."
                imageSrc="/pictures/windkraft_hero.webp"
                imageAlt="Beratungsgespräch vor Windkraftanlage"
            />

            {/* Intro */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 leading-tight">
                                Windkraft, die zur <span className="text-primary">Region passt</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Windenergie ist ein wichtiger Baustein der Energiewende. Für uns ist sie mehr als Technik – sie ist eine Verantwortung gegenüber den Menschen und der Landschaft vor Ort.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Wir planen Windkraftprojekte mit Bedacht: Standortwahl, Artenschutz und die Einbindung der Gemeinde stehen von Anfang an im Mittelpunkt. Denn ein Windrad steht für Jahrzehnte – genau wie unsere Partnerschaft mit Ihnen.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/pictures/Windturbinen.png"
                                alt="Windkraftanlagen auf grünen Hügeln bei Sonnenuntergang"
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
                            { title: "Standortprüfung", text: "Kostenlose Prüfung Ihrer Fläche hinsichtlich Windpotenzial, Abstände und Netzanschluss." },
                            { title: "Genehmigungsverfahren", text: "Wir übernehmen alle behördlichen Schritte – von der Umweltverträglichkeit bis zur Baugenehmigung." },
                            { title: "Artenschutz", text: "Moderne Detektionssysteme und durchdachte Vermeidungsmaßnahmen für Vögel und Fledermäuse." },
                            { title: "Faire Pachtverträge", text: "Transparente Konditionen mit Indexierung. Keine versteckten Klauseln, keine bösen Überraschungen." },
                            { title: "Rückbaubürgschaft", text: "Bankübliche Sicherheiten für den vollständigen Rückbau – hinterlegt vor Baubeginn." },
                            { title: "Langfristige Betreuung", text: "Monitoring, Wartung und persönlicher Ansprechpartner über die gesamte Laufzeit." },
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
                        Partnerschaft auf Augenhöhe
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                        Deshalb sehen wir uns nicht nur als Projektierer, sondern als verlässlichen Partner der Region.
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Transparenz von Tag eins, faire Verträge und regionale Wertschöpfung – das ist unser Versprechen.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Haben Sie einen möglichen Standort?</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Wir prüfen Ihre Fläche kostenfrei und unverbindlich. Persönlich und diskret.
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
