import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ConsultationTeaser() {
    return (
        <section className="py-20 md:py-28 bg-cream">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Bild */}
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                        <Image
                            src="/pictures/Gabler_Kontakt.png"
                            alt="LEOGA Beratungsgespräch – persönlich und auf Augenhöhe"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Text */}
                    <div>
                        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                            Persönliche Beratung
                        </p>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-6 leading-tight">
                            Kein Callcenter.<br />
                            Kein Standardformular.
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Bei uns sprechen Sie direkt mit den Menschen, die Ihr Projekt auch wirklich umsetzen. Wir nehmen uns Zeit, hören zu und erklären ehrlich, was möglich ist – und was nicht.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            So entsteht Vertrauen. Nicht durch große Worte, sondern durch echte Gespräche.
                        </p>
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-3.5 rounded-full hover:bg-moss transition-all text-sm shadow-md"
                        >
                            Gespräch anfragen
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
