"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
            {/* Organic background shapes */}
            <div className="absolute top-20 -right-32 w-96 h-96 bg-sage/10 blob-shape" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-warm/60 blob-shape-2" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    {/* Left - Text */}
                    <div>
                        <div className="section-label mb-6">
                            <Sprout size={14} />
                            <span>Im Einklang mit der Natur</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-serif font-bold text-earth leading-[1.15] mb-6">
                            Erneuerbare Energie,
                            <br />
                            <span className="text-primary">verwurzelt</span> in der Region
                        </h1>

                        <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
                            Seit über 60 Jahren verbinden wir Landwirtschaft und Energie. Gemeinsam mit Ihnen schaffen wir nachhaltige Projekte, die Mensch und Natur vereinen.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-12">
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center gap-2 bg-primary text-white font-medium px-7 py-3.5 rounded-full hover:bg-moss transition-all text-sm shadow-md hover:shadow-lg"
                            >
                                Fläche anbieten
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                href="/ueber-uns"
                                className="inline-flex items-center gap-2 text-sm font-medium text-earth border-2 border-warm px-7 py-3.5 rounded-full hover:border-secondary hover:text-secondary transition-all"
                            >
                                Unsere Geschichte
                            </Link>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex items-center gap-6 pt-4 border-t border-warm">
                            <div>
                                <p className="text-2xl font-bold font-serif text-primary">60+</p>
                                <p className="text-xs text-muted-foreground">Jahre Erfahrung</p>
                            </div>
                            <div className="w-px h-10 bg-warm" />
                            <div>
                                <p className="text-2xl font-bold font-serif text-primary">200+</p>
                                <p className="text-xs text-muted-foreground">Zufriedene Partner</p>
                            </div>
                            <div className="w-px h-10 bg-warm" />
                            <div>
                                <p className="text-2xl font-bold font-serif text-primary">50MW</p>
                                <p className="text-xs text-muted-foreground">Installierte Leistung</p>
                            </div>
                        </div>
                    </div>

                    {/* Right - Organic image layout */}
                    <div className="relative">
                        {/* Main large image */}
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-2xl">
                            <Image
                                src="/hero.png"
                                alt="Energieprojekt in der Natur"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                        </div>

                        {/* Small overlapping image */}
                        <div className="absolute -bottom-8 -left-8 w-40 h-40 md:w-52 md:h-52 rounded-[1.5rem] overflow-hidden shadow-xl border-4 border-cream">
                            <Image
                                src="/service_solar.png"
                                alt="Solaranlage"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating organic badge */}
                        <div className="absolute top-6 -left-4 bg-cream/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-lg">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                    <Sprout size={20} className="text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-earth">100% Erneuerbar</p>
                                    <p className="text-xs text-muted-foreground">Aus der Region</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
