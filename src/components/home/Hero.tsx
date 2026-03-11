import Link from "next/link";
import { ArrowRight, ImageIcon } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-cream">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Text */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-earth leading-[1.15] mb-6">
                            Energie aus Überzeugung,
                            <br />
                            <span className="text-primary">Partnerschaft</span> aus Tradition
                        </h1>

                        <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                            LEOGA entwickelt Windkraft-, Photovoltaik- und Speicherprojekte – gemeinsam mit Eigentümern, fair und langfristig. Wir stehen für Verlässlichkeit über Generationen.
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-3.5 rounded-full hover:bg-moss transition-all text-sm shadow-md hover:shadow-lg"
                            >
                                Kontakt aufnehmen
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/ueber-uns"
                                className="inline-flex items-center gap-2 text-sm font-medium text-earth border-2 border-sand px-7 py-3.5 rounded-full hover:border-primary hover:text-primary transition-all"
                            >
                                Über uns
                            </Link>
                        </div>
                    </div>

                    {/* Right - Team photo placeholder */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-warm border-2 border-dashed border-sand flex flex-col items-center justify-center text-muted-foreground">
                            <ImageIcon size={48} className="mb-4 opacity-30" />
                            <p className="font-medium text-sm">Teamfoto mit Windrädern</p>
                            <p className="text-xs mt-1 opacity-60">Platzhalter für Shooting-Bild</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
