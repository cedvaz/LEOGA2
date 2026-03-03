import { Quote } from "lucide-react";

export function StoryTeaser() {
    return (
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="bg-primary rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                    {/* Decorative quote marks */}
                    <Quote size={48} className="mx-auto mb-6 text-white/30" />

                    <blockquote className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
                        Unser Team führt gründliche Standortbewertungen durch und empfiehlt die perfekten Energielösungen. Der Installationsprozess war reibungslos, schnell und die Kommunikation klar. Seit der Installation ist mein Stromverbrauch deutlich gesunken – eine nachhaltige Investition in die Zukunft.
                    </blockquote>

                    <div className="flex items-center justify-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/20" />
                        <div className="text-left">
                            <p className="font-semibold text-sm">Dr. Heinrich S.</p>
                            <p className="text-xs text-white/70">Landwirt, Niedersachsen</p>
                        </div>
                    </div>

                    {/* Star rating */}
                    <div className="flex justify-center gap-1 mt-4">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
