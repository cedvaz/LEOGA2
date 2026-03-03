import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Shield, Handshake, Leaf } from "lucide-react";

const values = [
    {
        icon: Heart,
        title: "Verwurzelt",
        description: "Als Familienunternehmen verstehen wir die Bedürfnisse der Region."
    },
    {
        icon: Shield,
        title: "Verlässlich",
        description: "Stabile Pachtverträge und transparente Konditionen seit 60+ Jahren."
    },
    {
        icon: Handshake,
        title: "Partnerschaftlich",
        description: "Auf Augenhöhe - wir begleiten Sie durch den gesamten Prozess."
    },
];

export function Benefits() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            {/* Subtle organic bg shape */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-warm/40 blob-shape-2 -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left - Image stack */}
                    <div className="relative">
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
                            <Image
                                src="/story_meeting.png"
                                alt="LEOGA Team im Gespräch"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Organic accent shape behind */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full bg-sage/15 rounded-[2rem] -z-10" />
                    </div>

                    {/* Right - Text + Values */}
                    <div>
                        <div className="section-label mb-6">
                            <Leaf size={14} />
                            <span>Wer wir sind</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-6 leading-tight">
                            Energie aus Überzeugung,
                            <br />
                            <span className="text-primary">Partnerschaft</span> aus Tradition
                        </h2>

                        <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
                            LEOGA verbindet Generationen von Erfahrung mit der Kraft erneuerbarer Energien. Wir glauben, dass die Energiewende nur gemeinsam gelingt - mit Respekt vor der Natur und den Menschen, die auf dem Land leben.
                        </p>

                        <div className="space-y-5 mb-10">
                            {values.map((value, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-11 h-11 rounded-xl bg-warm flex items-center justify-center flex-shrink-0">
                                        <value.icon size={20} className="text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-earth mb-0.5">{value.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="/ueber-uns"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-moss transition-colors group"
                        >
                            Unsere ganze Geschichte
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
