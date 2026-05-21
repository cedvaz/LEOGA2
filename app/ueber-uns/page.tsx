import type { Metadata } from "next";
import { Shield, Scale, Leaf, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Über uns – LEOGA | Fair. Stabil. Nachhaltig.",
    description: "LEOGA ist ein Familienunternehmen für erneuerbare Energien aus dem Allgäu. Verwurzelt in der Region, langfristig in der Partnerschaft.",
};

const values = [
    { icon: Shield, title: "Fair", text: "Transparente Konditionen, ehrliche Beratung. Was wir zusagen, halten wir." },
    { icon: Scale, title: "Stabil", text: "Ein Familienunternehmen, das langfristig denkt und handelt – über Generationen." },
    { icon: Leaf, title: "Nachhaltig", text: "Erneuerbare Energie mit Rücksicht auf Natur, Region und Mensch." },
];

export default function UeberUnsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-cream overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-5 leading-tight">
                            Über uns
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Energie aus Überzeugung, Partnerschaft aus Tradition.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/7] max-w-4xl mx-auto">
                        <Image
                            src="/pictures/Alex_ueberuns.png"
                            alt="LEOGA Geschäftsführer im Gespräch vor Windkraftanlage"
                            fill
                            className="object-cover object-top brightness-105"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Geschichte */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="max-w-3xl mx-auto">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 leading-tight">
                                Ein Familienunternehmen mit <span className="text-primary">Wurzeln</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    Die Geschichte von LEOGA beginnt 1966: Leonhard Gabler gründete in Kempten-Hirschdorf das Kies- und Transport-Betonwerk Hirschdorf – ein Betrieb, der sich zu einem festen Bestandteil der regionalen Bauwirtschaft entwickelte.
                                </p>
                                <p>
                                    Das Betonwerk steht bis heute in Kempten-Hirschdorf. Das Kieswerk wurde 1992 nach Wolfertschwenden-Darast verlegt, wo die natürlichen Kiesvorkommen liegen.
                                </p>
                                <p>
                                    Jahrzehnte des verantwortungsvollen Umgangs mit natürlichen Ressourcen und die enge Verbindung zur Region prägen, wie die Familie Gabler wirtschaftet. LEOGA führt dieses Erbe weiter – mit dem Fokus auf erneuerbare Energien.
                                </p>
                            </div>
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

                    </div>
                </div>
            </section>

            {/* Werte */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-4">
                            Fair. Stabil. Nachhaltig.
                        </h2>
                        <p className="text-muted-foreground text-lg">Die drei Werte, an denen wir uns messen lassen.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {values.map((value, i) => (
                            <div key={i} className="bg-white rounded-2xl p-7">
                                <div className="w-12 h-12 rounded-xl bg-warm flex items-center justify-center mb-5">
                                    <value.icon size={22} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-earth mb-2 text-lg">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Lernen Sie uns kennen</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Wir freuen uns auf ein persönliches Gespräch.
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
