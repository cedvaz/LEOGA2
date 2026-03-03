"use client";

import { SubpageHero } from "@/components/layout/SubpageHero";
import {
    CheckCircle2,
    Wind,
    Map,
    ShieldCheck,
    Zap,
    Globe,
    Users,
    ArrowRight,
    TrendingUp,
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

export default function WindkraftPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Windkraft"
                subtitle="Die Kraft des Windes effizient nutzen. Wir schaffen Mehrwert für Sie und Ihre Region."
                imageSrc="/wind_hero.png"
            />

            {/* Mission: Efficiency & Local Value */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Effizienz an Land</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                        Der stärkste Motor der Energiewende
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        Windkraftanlagen sind die effizienteste Form der erneuerbaren Stromerzeugung an Land. Keine andere Technologie liefert auf so kleiner Grundfläche so viel sauberen Strom. LEOGA entwickelt Windkraft-Projekte, die technologische Höchstleistung mit maximaler Rücksicht auf Mensch und Natur verbinden.
                    </p>
                    <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
                </div>
            </section>

            {/* Deep Content: Artenschutz & Umwelt */}
            <section className="py-24 bg-gray-900 text-white overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-secondary font-bold uppercase tracking-wider mb-4 text-sm">Verantwortung</h3>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">Im Einklang mit der Natur</h2>

                            <div className="space-y-8">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                        <Globe className="text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-xl">Artenschutz-Konzepte</h4>
                                        <p className="text-white/60">Modernste Detektionssysteme (z.B. kamerabasierte Abschaltsysteme) schützen Vögel und Fledermäuse während der Flugzeiten. Wir setzen auf Vermeidungsmaßnahmen statt bloßer Kompensation.</p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 border border-white/10">
                                        <ShieldCheck className="text-secondary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-2 text-xl">Rückbaubürgschaft</h4>
                                        <p className="text-white/60">Für jede Anlage hinterlegen wir bereits vor Baubeginn bankübliche Sicherheiten für den vollständigen Rückbau inklusive Fundamente. Die Fläche kehrt nach der Laufzeit in den Ursprungzustand zurück.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5 group">
                            <ImagePlaceholder text="Bild: Modernes Windrad in der Natur" />
                            <div className="absolute inset-x-8 bottom-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                                <p className="font-bold text-xl mb-1 text-secondary">Nachhaltigkeit garantiert</p>
                                <p className="text-sm text-white/80">Vollständige Kreislaufwirtschaft beim Rückbau der Rotorblätter.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Detail: Modern Turbines */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Anlagentechnik der nächsten Generation</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Mehr Ertrag, weniger Belastung. Wir nutzen die technologische Evolution für leisere und effizientere Windparks.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 transition-colors shadow-sm">
                            <Wind className="text-primary mb-6" size={40} />
                            <h4 className="text-xl font-bold mb-4">Schwachwind-Optimierung</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">Größere Rotordurchmesser ermöglichen rentable Erträge auch an Standorten mit mäßigen Windgeschwindigkeiten.</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 transition-colors shadow-sm">
                            <Zap className="text-primary mb-6" size={40} />
                            <h4 className="text-xl font-bold mb-4">Intelligente Steuerung</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">Schattenwurf-Abschaltung und schallreduzierter Betrieb in der Nacht sorgen für maximale Akzeptanz in der Nachbarschaft.</p>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-3xl hover:border-primary/20 transition-colors shadow-sm">
                            <TrendingUp className="text-primary mb-6" size={40} />
                            <h4 className="text-xl font-bold mb-4">Maximale Verfügbarkeit</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">Prädiktive Wartung durch KI-basierte Sensorik (Predictive Maintenance) minimiert Stillstandzeiten.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership: Value for Communities */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold mb-8 text-gray-900">Gemeinsam profitieren</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4 items-start">
                                        <Users className="text-primary mt-1" size={24} />
                                        <div>
                                            <p className="font-bold">Bürgerbeteiligung</p>
                                            <p className="text-sm text-gray-500">Wir bieten Anwohnern direkte Beteiligungsmodelle oder vergünstigte Stromtarife an.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <TrendingUp className="text-primary mt-1" size={24} />
                                        <div>
                                            <p className="font-bold">Kommunale Steuern</p>
                                            <p className="text-sm text-gray-500">90% der Gewerbesteuer verbleiben direkt in der Standortgemeinde.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <Map className="text-primary mt-1" size={24} />
                                        <div>
                                            <p className="font-bold">Akzeptanzabgabe</p>
                                            <p className="text-sm text-gray-500">Direkte finanzielle Förderung der Kommunen nach § 6 EEG (0,2 Cent pro kWh).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">Partnerschaft auf Augenhöhe</h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Ein Windpark ist ein Langzeitprojekt über 25 bis 30 Jahre. Wir sehen uns nicht nur als Projektentwickler, sondern als Partner der Region. Das bedeutet Transparenz von Tag eins.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {[
                                    "Faire Pachtverträge mit Indexierung",
                                    "Keine Beeinträchtigung der Landwirtschaft um den Mast",
                                    "Lokale Wertschöpfung durch regionale Partner",
                                    "Vertrauensvolle Zusammenarbeit mit Kommunen"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <CheckCircle2 size={20} className="text-secondary" />
                                        <span className="text-lg font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Haben Sie einen geeigneten Wind-Standort?</h2>
                    <p className="text-xl text-white/80 mb-12">
                        Wir prüfen kostenfrei und diskret die Potenziale Ihrer Fläche hinsichtlich Abstandsflächen, Netzanschluss und Ertragsprognose.
                    </p>
                    <Link href="/kontakt">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-12 h-14 rounded-full font-bold shadow-2xl group text-lg">
                            Fläche jetzt prüfen lassen
                            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
