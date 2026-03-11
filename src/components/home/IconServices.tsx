"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

function WindIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="38" y1="30" x2="34" y2="74" />
            <line x1="42" y1="30" x2="46" y2="74" />
            <line x1="30" y1="74" x2="50" y2="74" />
            <line x1="36" y1="45" x2="44" y2="45" />
            <line x1="35" y1="58" x2="45" y2="58" />
            <circle cx="40" cy="28" r="3" />
            <path d="M40 25 C38 18 36 10 40 6 C44 10 42 18 40 25" />
            <path d="M42 30 C48 34 55 38 56 34 C52 32 46 30 42 30" />
            <path d="M38 30 C32 34 25 38 24 34 C28 32 34 30 38 30" />
        </svg>
    );
}

function SolarIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <line x1="40" y1="62" x2="40" y2="72" />
            <line x1="30" y1="72" x2="50" y2="72" />
            <rect x="16" y="28" width="48" height="32" rx="2" transform="rotate(-8 40 44)" />
            <line x1="32" y1="22" x2="28" y2="58" />
            <line x1="48" y1="20" x2="44" y2="56" />
            <line x1="17" y1="38" x2="63" y2="33" />
            <line x1="15" y1="50" x2="61" y2="45" />
            <circle cx="62" cy="14" r="5" />
            <line x1="62" y1="4" x2="62" y2="7" />
            <line x1="72" y1="14" x2="69" y2="14" />
            <line x1="52" y1="14" x2="55" y2="14" />
            <line x1="69" y1="7" x2="67" y2="9" />
            <line x1="55" y1="7" x2="57" y2="9" />
            <line x1="69" y1="21" x2="67" y2="19" />
            <line x1="55" y1="21" x2="57" y2="19" />
        </svg>
    );
}

function BatteryIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="20" y="16" width="40" height="54" rx="3" />
            <rect x="30" y="10" width="20" height="6" rx="2" />
            <rect x="26" y="54" width="28" height="6" rx="1" />
            <rect x="26" y="44" width="28" height="6" rx="1" />
            <rect x="26" y="34" width="28" height="6" rx="1" />
            <path d="M38 22 L35 30 L41 30 L38 38" />
        </svg>
    );
}

const services = [
    {
        Icon: WindIcon,
        title: "Windkraft",
        description: "Windkraftprojekte, die zur Region passen. Durchdacht geplant, verantwortungsvoll umgesetzt.",
        href: "/windkraft",
    },
    {
        Icon: SolarIcon,
        title: "Photovoltaik",
        description: "Solaranlagen auf Freiflächen, die Ertrag und Naturschutz verbinden.",
        href: "/photovoltaik",
    },
    {
        Icon: BatteryIcon,
        title: "Batteriespeicher",
        description: "Energiespeicher für eine zuverlässige Versorgung und stabile Erträge.",
        href: "/batteriespeicher",
    },
];

export function IconServices() {
    return (
        <section className="py-20 md:py-28 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-14 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4 leading-tight">
                        Unsere <span className="text-primary">Leistungen</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Drei Schwerpunkte, ein Versprechen: verlässliche Energie und faire Partnerschaften.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="icon-card group block text-center"
                        >
                            <div className="text-earth/80 group-hover:text-primary transition-colors duration-500 mb-4 flex justify-center">
                                <service.Icon />
                            </div>

                            <div className="accent-line bg-accent rounded-full mb-4 mx-auto" />

                            <h3 className="text-xl font-serif font-bold text-earth mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {service.description}
                            </p>

                            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:text-primary transition-colors">
                                <span className="read-more-arrow w-7 h-7 bg-accent/80 rounded-md flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                                    <ChevronRight size={14} />
                                </span>
                                Mehr erfahren
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
