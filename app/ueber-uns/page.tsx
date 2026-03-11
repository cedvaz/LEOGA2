import type { Metadata } from "next";
import { Anchor, Shield, Handshake, Heart, Scale, TreePine, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Über uns – LEOGA | Verwurzelt, verlässlich, fair",
    description: "LEOGA ist ein Familienunternehmen für erneuerbare Energien. Unsere Werte: verwurzelt, verlässlich, partnerschaftlich, nachhaltig, fair, stabil.",
};

const values = [
    { icon: Anchor, title: "Verwurzelt", text: "Als Familienunternehmen kennen wir die Region und die Menschen. Wir sind Teil der Gemeinschaft, nicht nur Geschäftspartner." },
    { icon: Shield, title: "Verlässlich", text: "Wir stehen zu unseren Zusagen. Was wir versprechen, halten wir – über Jahrzehnte hinweg." },
    { icon: Handshake, title: "Partnerschaftlich", text: "Wir arbeiten auf Augenhöhe. Ihre Interessen sind auch unsere Interessen." },
    { icon: TreePine, title: "Nachhaltig", text: "Nachhaltigkeit ist für uns kein Schlagwort, sondern unser täglicher Antrieb." },
    { icon: Heart, title: "Fair", text: "Transparente Konditionen, ehrliche Beratung und keine versteckten Klauseln." },
    { icon: Scale, title: "Stabil", text: "Wir sind krisenfest. Ein Familienunternehmen, das langfristig denkt und handelt." },
];

export default function UeberUnsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero mit Bild */}
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
                            src="/pictures/Alex_überuns.png"
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
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 text-center leading-tight">
                        Ein Familienunternehmen mit <span className="text-primary">Wurzeln</span>
                    </h2>
                    <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                        <p>
                            LEOGA wurde mit dem Ziel gegründet, die Energiewende dort voranzutreiben, wo sie stattfindet: in der Region, auf dem Land, im Gespräch mit den Menschen.
                        </p>
                        <p>
                            Wir verstehen uns nicht als kurzfristige Projektentwickler. Wenn wir einen Pachtvertrag unterschreiben, dann ist das der Beginn einer Partnerschaft über Jahrzehnte – generationenübergreifend und verlässlich.
                        </p>
                        <p>
                            Unsere Geschichte ist geprägt von handwerklichem Können, unternehmerischem Mut und dem Respekt vor dem Land, auf dem wir arbeiten. Das treibt uns an – jeden Tag.
                        </p>
                    </div>
                </div>
            </section>

            {/* Werte */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-4">Unsere Werte</h2>
                        <p className="text-muted-foreground text-lg">Das Versprechen, an dem wir uns messen lassen.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                        Wir freuen uns auf ein persönliches Gespräch – unverbindlich und ehrlich.
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
