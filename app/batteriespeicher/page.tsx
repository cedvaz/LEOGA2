"use client";

import { SubpageHero } from "@/components/layout/SubpageHero";
import {
    Zap,
    ShieldCheck,
    Cpu,
    TrendingUp,
    CloudLightning,
    Container,
    ArrowRight,
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

export default function BatteriespeicherPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Batteriespeicher"
                subtitle="Das fehlende Puzzleteil der Energiewende. Wir ermöglichen Stabilität und maximale Erträge."
                imageSrc="/service_battery.png"
            />

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Die Rolle der Speicher</span>
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                            Das fehlende Puzzleteil in der Energiewende
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8" />
                    </div>

                    <div className="prose prose-lg mx-auto text-gray-600 leading-relaxed">
                        <p className="mb-6">
                            Die Energiewende steht vor einer gewaltigen Herausforderung: Wind und Sonne liefern Strom oft dann, wenn wir ihn am wenigsten brauchen – und fehlen dann, wenn die Last im Netz am höchsten ist. Hier kommen Großbatteriespeicher (BESS) ins Spiel.
                        </p>
                        <p>
                            Batteriespeichersysteme speichern vor allem Wind- und Solarstrom, der zum Zeitpunkt der Erzeugung nicht direkt ins Netz eingespeist werden kann. Der gespeicherte Strom wird zeitversetzt wieder abgegeben – meist in den Abendstunden, wenn der Verbrauch privater Haushalte und der Industrie besonders hoch ist.
                        </p>
                    </div>
                </div>
            </section>

            {/* How it Works / Grid Stability */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Stabilität fürs Netz & Wirtschaftlichkeit</h3>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Batteriespeicher machen das deutsche Stromnetz flexibler. Sie balancieren Angebot und Nachfrage in Millisekunden aus. Das reduziert den Bedarf an teuren fossilen Kraftwerken und ermöglicht eine unabhängige Energieversorgung.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <TrendingUp className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Peak Shaving</h4>
                                        <p className="text-sm text-gray-500">Kappung von Lastspitzen zur Entlastung regionaler Netzknoten und zur Vermeidung von Netzausbaukosten.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                        <CloudLightning className="text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Regelleistung</h4>
                                        <p className="text-sm text-gray-500">Erbringung wertvoller Netzdienstleistungen zur Frequenzhaltung – bezahlt durch die Übertragungsnetzbetreiber.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm group">
                            <ImagePlaceholder text="Bild: Großbatteriespeicher Anlage (BESS)" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical Detail Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Aufbau eines Batterieparks</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Technisch komplexe Systeme, sicher und effizient integriert.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Container,
                                title: "20ft Schiffscontainer",
                                text: "Die Batteriemodule sind sicher in 20-Fuß-Racks untergebracht (ca. 4-6 MWh pro Einheit)."
                            },
                            {
                                icon: Cpu,
                                title: "Steuerungssysteme",
                                text: "Smart-Grid-Software steuert Ladung und Entladung bedarfsgerecht in Echtzeit."
                            },
                            {
                                icon: Zap,
                                title: "Bidirektional",
                                text: "Bidirektionale Stromrichter ermöglichen den Energiefluss in beide Richtungen (DC/AC)."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Brandschutz",
                                text: "Integrierte Lösch- und Kühlsysteme garantieren höchste Sicherheitsstandards."
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary/5 text-primary rounded-full flex items-center justify-center mb-6">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="font-bold text-gray-900 mb-3">{item.title}</h4>
                                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fact Box / Calculation Example */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 italic opacity-20 hidden lg:block">The Power of Storage</h2>
                            <div className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-[2.5rem] border border-white/20">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">Energie für ganze Gemeinden</h3>
                                <p className="text-white/80 mb-8 leading-relaxed">
                                    Schon kleine Flächen erzielen enorme Wirkung. Ein typischer Speicher mit 100 MW Leistung und 200 MWh Kapazität kann rechnerisch:
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div className="border-l-2 border-secondary pl-6">
                                        <span className="text-4xl font-bold block mb-1">175.000</span>
                                        <span className="text-white/60 text-sm uppercase tracking-wider">3-Personen-Haushalte</span>
                                    </div>
                                    <div className="border-l-2 border-secondary pl-6">
                                        <span className="text-4xl font-bold block mb-1">2 Std.</span>
                                        <span className="text-white/60 text-sm uppercase tracking-wider">Volllast-Versorgung</span>
                                    </div>
                                </div>

                                <p className="mt-10 text-xs text-white/40 italic">
                                    *Basierend auf einem durchschnittlichen Jahresverbrauch von 5.000 kWh pro Haushalt.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold italic">Flächen-Profil</h3>
                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    <p className="text-lg">Bedarf ab ca. <span className="text-secondary font-bold">0,5 - 1 Hektar</span></p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    <p className="text-lg">Nähe zu <span className="text-secondary font-bold">Umspannwerken</span> oder starken Leitungen</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-secondary" />
                                    <p className="text-lg"><span className="text-secondary font-bold">Maximale Pacht</span> bei minimaler Flächenversiegelung</p>
                                </div>
                            </div>

                            <div className="pt-8">
                                <Link href="/kontakt">
                                    <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold px-10 rounded-full h-14 group text-lg">
                                        Fläche prüfen lassen
                                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
