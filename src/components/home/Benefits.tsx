import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf } from "lucide-react";

export function Benefits() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Text Content */}
                    <div>
                        <div className="section-label mb-6">
                            <Leaf size={14} />
                            <span>Über uns</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Unser Ziel ist es, Gemeinden und Unternehmen mit sauberer,{" "}
                            <span className="text-primary">zuverlässiger</span> und{" "}
                            <span className="text-primary">bezahlbarer</span> Energie zu versorgen.
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            LEOGA ist ein Familienunternehmen mit über 60 Jahren Erfahrung. Wir verstehen die Bedürfnisse von Landeigentümern und Kommunen, weil wir selbst aus der Region kommen. Fairness, Stabilität und Nachhaltigkeit sind unsere Grundwerte.
                        </p>
                        <Link
                            href="/ueber-uns"
                            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                        >
                            Mehr erfahren
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {/* Right - Image with overlay stats */}
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                            <Image
                                src="/story_meeting.png"
                                alt="LEOGA Team im Gespräch"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Floating stats */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg">
                            <p className="text-3xl font-bold text-primary">60+</p>
                            <p className="text-sm text-gray-500">Jahre Erfahrung</p>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-primary text-white rounded-xl p-4 shadow-lg">
                            <p className="text-2xl font-bold">200+</p>
                            <p className="text-xs text-white/80">Partner</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
