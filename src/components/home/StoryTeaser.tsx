import { Quote } from "lucide-react";

export function StoryTeaser() {
    return (
        <section className="py-20 md:py-32 bg-muted relative overflow-hidden">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-sage/10 blob-shape" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-warm/40 blob-shape-2" />

            <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                <div className="bg-earth rounded-[2rem] p-8 md:p-14 text-cream text-center relative overflow-hidden">
                    {/* Decorative leaf pattern overlay */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5">
                        <div className="absolute top-4 left-8 w-32 h-32 bg-white blob-shape" />
                        <div className="absolute bottom-4 right-8 w-24 h-24 bg-white blob-shape-2" />
                    </div>

                    <div className="relative z-10">
                        <Quote size={40} className="mx-auto mb-8 text-accent/60" />

                        <blockquote className="text-lg md:text-xl font-serif leading-relaxed mb-10 max-w-2xl mx-auto italic">
                            &ldquo;Die Zusammenarbeit mit LEOGA fühlt sich an wie eine Partnerschaft unter Nachbarn. Gründliche Standortbewertung, reibungsloser Bau und seit der Installation merke ich auf meinem Konto, dass sich die Entscheidung gelohnt hat. Ehrlich, fair und menschlich.&rdquo;
                        </blockquote>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center text-xl font-serif font-bold">
                                H
                            </div>
                            <div className="text-left">
                                <p className="font-semibold">Dr. Heinrich Seidel</p>
                                <p className="text-sm text-cream/60">Landwirt, Niedersachsen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
