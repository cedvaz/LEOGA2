import Link from "next/link";
import { ArrowRight, Shield, Scale, Leaf } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Fair",
        description: "Ehrliche Konditionen, transparente Verträge. Was wir zusagen, halten wir."
    },
    {
        icon: Scale,
        title: "Stabil",
        description: "Ein Familienunternehmen, das langfristig denkt. Verlässliche Partnerschaften über Jahrzehnte."
    },
    {
        icon: Leaf,
        title: "Nachhaltig",
        description: "Erneuerbare Energie mit Rücksicht auf Natur und Region. Heute und für die nächste Generation."
    },
];

export function Benefits() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center mb-14">
                    <div className="section-label mx-auto mb-5 w-fit">
                        <span>Unsere Werte</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-5 leading-tight">
                        Fair. Stabil. <span className="text-primary">Nachhaltig.</span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Drei Werte, an denen wir uns messen lassen – in jedem Gespräch, in jedem Vertrag, über die gesamte Laufzeit.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                        Mehr über uns
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
