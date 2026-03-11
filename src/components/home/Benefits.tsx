import Link from "next/link";
import { ArrowRight, Anchor, Shield, Handshake, Heart } from "lucide-react";

const values = [
    {
        icon: Anchor,
        title: "Verwurzelt",
        description: "Als Familienunternehmen kennen wir die Region und die Menschen. Wir sind Teil der Gemeinschaft."
    },
    {
        icon: Shield,
        title: "Verlässlich",
        description: "Stabile Partnerschaften über Jahrzehnte. Wir stehen zu unseren Zusagen – heute und in 25 Jahren."
    },
    {
        icon: Handshake,
        title: "Partnerschaftlich",
        description: "Auf Augenhöhe und transparent. Wir arbeiten mit Ihnen zusammen, nicht an Ihnen vorbei."
    },
    {
        icon: Heart,
        title: "Fair",
        description: "Ehrliche Konditionen ohne Kleingedrucktes. Was wir versprechen, halten wir."
    },
];

export function Benefits() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <div className="section-label mx-auto mb-5 w-fit">
                        <span>Warum LEOGA</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-5 leading-tight">
                        Langfristige Partnerschaft <span className="text-primary">über Generationen</span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Wir verstehen uns nicht als kurzfristige Projektentwickler. Wenn wir einen Vertrag unterschreiben, ist das der Beginn einer Partnerschaft über Jahrzehnte – generationenübergreifend und verlässlich.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, i) => (
                        <div key={i} className="bg-cream rounded-2xl p-7 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-warm flex items-center justify-center mb-5">
                                <value.icon size={22} className="text-primary" />
                            </div>
                            <h3 className="font-semibold text-earth mb-2 text-lg">{value.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/ueber-uns"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-moss transition-colors group"
                    >
                        Mehr über uns erfahren
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
