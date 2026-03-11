import { Quote } from "lucide-react";

export function StoryTeaser() {
    return (
        <section className="py-20 md:py-28 bg-muted">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="bg-earth rounded-2xl p-8 md:p-14 text-cream text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <Quote size={36} className="mx-auto mb-8 text-accent/60" />

                        <blockquote className="text-lg md:text-xl font-serif leading-relaxed mb-10 max-w-2xl mx-auto italic">
                            &ldquo;Was uns an LEOGA überzeugt hat, war die Ehrlichkeit. Keine großen Versprechen, sondern ein klarer Plan und ein Handschlag, auf den man sich verlassen kann. Die Zusammenarbeit fühlt sich an wie eine Partnerschaft unter Nachbarn.&rdquo;
                        </blockquote>

                        <div className="flex items-center justify-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/30 flex items-center justify-center text-xl font-serif font-bold">
                                K
                            </div>
                            <div className="text-left">
                                <p className="font-semibold">Familie Krüger</p>
                                <p className="text-sm text-cream/60">Flächeneigentümer, Niedersachsen</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
