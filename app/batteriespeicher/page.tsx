import type { Metadata } from "next";
import { SubpageHero } from "@/components/layout/SubpageHero";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Batteriespeicher – LEOGA | Energiespeicher für die Zukunft",
    description: "LEOGA entwickelt Batteriespeicherprojekte auf Ihren Flächen. Stabile Erträge, minimaler Flächenverbrauch und ein Beitrag zur Netzstabilität.",
};


export default function BatteriespeicherPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <SubpageHero
                title="Batteriespeicher"
                subtitle="Energiespeicher machen die Energiewende verlässlich. Wir entwickeln Speicherprojekte auf Ihren Flächen."
                imageSrc="/pictures/Batterie_Hero.png"
                imageAlt="Techniker mit Tablet vor Batteriespeicher-Container und Windkraftanlagen"
            />

            {/* Intro */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 leading-tight">
                                Speicher für eine <span className="text-primary">stabile Zukunft</span>
                            </h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Wind und Sonne liefern nicht immer dann Strom, wenn er gebraucht wird. Batteriespeicher schließen diese Lücke – sie speichern überschüssige Energie und geben sie ab, wenn die Nachfrage hoch ist.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Für Flächeneigentümer bieten Speicherprojekte attraktive Pachteinnahmen bei minimalem Flächenverbrauch. Schon kleine Grundstücke ab 0,5 Hektar können geeignet sein.
                            </p>
                        </div>
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="/pictures/outdoor_battery_storage.png"
                                alt="Batteriespeicher-Container auf grüner Wiese"
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
                            { title: "Standortprüfung", text: "Kostenlose Prüfung Ihrer Fläche hinsichtlich Netzanschluss und Eignung für Speicherprojekte." },
                            { title: "Minimaler Flächenbedarf", text: "Batteriespeicher benötigen wenig Platz – schon kleine Grundstücke können große Wirkung erzielen." },
                            { title: "Netzstabilität", text: "Speicher balancieren Angebot und Nachfrage aus und tragen zur Versorgungssicherheit bei." },
                            { title: "Stabile Erträge", text: "Langfristige Pachtverträge mit verlässlichen Einnahmen über die gesamte Laufzeit." },
                            { title: "Sicherheitsstandards", text: "Integrierte Brand- und Kühlsysteme nach höchsten Sicherheitsnormen." },
                            { title: "Komplette Betreuung", text: "Planung, Bau, Betrieb und Monitoring – wir kümmern uns um alles." },
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
                        Zukunftstechnologie, bodenständig umgesetzt
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Batteriespeicher sind technisch anspruchsvoll – aber die Zusammenarbeit mit uns ist es nicht. Wir erklären verständlich, planen vorausschauend und begleiten Sie persönlich. Das ist unser Anspruch.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Fläche für Batteriespeicher?</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Wir prüfen kostenfrei, ob Ihr Grundstück für ein Speicherprojekt geeignet ist.
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
