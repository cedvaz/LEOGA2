import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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

                    {/* Right - Hero image */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                            <Image
                                src="/pictures/Alex_Hero.png"
                                alt="LEOGA Team bei der Projektplanung vor Windkraftanlage"
                                fill
                                className="object-cover object-top brightness-105"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
