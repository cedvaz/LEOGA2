"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

function SolarIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Panel base/stand */}
            <line x1="40" y1="62" x2="40" y2="72" />
            <line x1="30" y1="72" x2="50" y2="72" />
            {/* Panel frame - tilted */}
            <rect x="16" y="28" width="48" height="32" rx="2" transform="rotate(-8 40 44)" />
            {/* Panel grid lines */}
            <line x1="32" y1="22" x2="28" y2="58" />
            <line x1="48" y1="20" x2="44" y2="56" />
            <line x1="17" y1="38" x2="63" y2="33" />
            <line x1="15" y1="50" x2="61" y2="45" />
            {/* Sun rays */}
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

function WindIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Tower */}
            <line x1="38" y1="30" x2="34" y2="74" />
            <line x1="42" y1="30" x2="46" y2="74" />
            <line x1="30" y1="74" x2="50" y2="74" />
            {/* Cross braces */}
            <line x1="36" y1="45" x2="44" y2="45" />
            <line x1="35" y1="58" x2="45" y2="58" />
            {/* Hub */}
            <circle cx="40" cy="28" r="3" />
            {/* Blade 1 - up */}
            <path d="M40 25 C38 18 36 10 40 6 C44 10 42 18 40 25" />
            {/* Blade 2 - bottom right */}
            <path d="M42 30 C48 34 55 38 56 34 C52 32 46 30 42 30" />
            {/* Blade 3 - bottom left */}
            <path d="M38 30 C32 34 25 38 24 34 C28 32 34 30 38 30" />
        </svg>
    );
}

function BatteryIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Battery body */}
            <rect x="20" y="16" width="40" height="54" rx="3" />
            {/* Battery top */}
            <rect x="30" y="10" width="20" height="6" rx="2" />
            {/* Charge level bars */}
            <rect x="26" y="54" width="28" height="6" rx="1" />
            <rect x="26" y="44" width="28" height="6" rx="1" />
            <rect x="26" y="34" width="28" height="6" rx="1" />
            {/* Lightning bolt */}
            <path d="M38 22 L35 30 L41 30 L38 38" />
        </svg>
    );
}

function ConsultIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Clipboard body */}
            <rect x="18" y="16" width="44" height="54" rx="3" />
            {/* Clipboard clip */}
            <rect x="30" y="10" width="20" height="12" rx="2" />
            {/* Check lines */}
            <polyline points="28,34 32,38 38,30" />
            <line x1="42" y1="34" x2="56" y2="34" />
            <polyline points="28,46 32,50 38,42" />
            <line x1="42" y1="46" x2="56" y2="46" />
            <polyline points="28,58 32,62 38,54" />
            <line x1="42" y1="58" x2="56" y2="58" />
        </svg>
    );
}

function LandIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Map/land outline */}
            <rect x="12" y="14" width="56" height="52" rx="3" />
            {/* Fold lines */}
            <line x1="12" y1="30" x2="68" y2="30" />
            <line x1="12" y1="50" x2="68" y2="50" />
            {/* Location pin */}
            <circle cx="40" cy="38" r="4" />
            <path d="M40 42 L40 48" />
            <path d="M36 48 L44 48" />
            {/* Corner markers */}
            <line x1="22" y1="20" x2="28" y2="20" />
            <line x1="22" y1="20" x2="22" y2="26" />
            <line x1="58" y1="20" x2="52" y2="20" />
            <line x1="58" y1="20" x2="58" y2="26" />
            {/* Area lines */}
            <path d="M20 56 L30 52 L42 58 L56 54 L62 56" />
        </svg>
    );
}

function MonitorIcon() {
    return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            {/* Screen */}
            <rect x="12" y="12" width="56" height="42" rx="3" />
            {/* Screen stand */}
            <line x1="40" y1="54" x2="40" y2="64" />
            <line x1="28" y1="64" x2="52" y2="64" />
            {/* Graph line */}
            <polyline points="22,44 30,38 38,42 46,28 54,32 60,22" />
            {/* Data points */}
            <circle cx="30" cy="38" r="2" />
            <circle cx="38" cy="42" r="2" />
            <circle cx="46" cy="28" r="2" />
            <circle cx="54" cy="32" r="2" />
            {/* Arrow up indicator */}
            <line x1="60" y1="22" x2="60" y2="18" />
            <polyline points="57,20 60,16 63,20" />
        </svg>
    );
}

const services = [
    {
        Icon: SolarIcon,
        title: "Photovoltaik",
        description: "Wir entwickeln, bauen und betreiben Freiflächenanlagen auf Ihrem Land.",
        href: "/photovoltaik",
    },
    {
        Icon: WindIcon,
        title: "Windkraft",
        description: "Wir planen und realisieren Windkraftprojekte an optimalen Standorten.",
        href: "/windkraft",
    },
    {
        Icon: BatteryIcon,
        title: "Batteriespeicher",
        description: "Wir entwickeln Speicherprojekte für eine stabile Energieversorgung.",
        href: "/batteriespeicher",
    },
    {
        Icon: LandIcon,
        title: "Flächenbewertung",
        description: "Kostenlose Prüfung Ihres Grundstücks für erneuerbare Energien.",
        href: "/kontakt",
    },
    {
        Icon: ConsultIcon,
        title: "Beratung",
        description: "Individuelle Beratung und transparente Pachtverträge auf Augenhöhe.",
        href: "/kontakt",
    },
    {
        Icon: MonitorIcon,
        title: "Monitoring",
        description: "Laufende Überwachung und garantierte Erträge über die gesamte Laufzeit.",
        href: "/ueber-uns",
    },
];

export function IconServices() {
    return (
        <section className="py-20 md:py-32 bg-cream">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4 leading-tight">
                        Unsere <span className="text-primary">Leistungen</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Ganzheitliche Lösungen für Ihre Fläche – von der ersten Bewertung bis zum langfristigen Betrieb.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="icon-card group block"
                        >
                            {/* Icon */}
                            <div className="text-earth/80 group-hover:text-primary transition-colors duration-500 mb-4">
                                <service.Icon />
                            </div>

                            {/* Accent line */}
                            <div className="accent-line bg-accent rounded-full mb-4" />

                            {/* Title */}
                            <h3 className="text-xl font-serif font-bold text-earth mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                {service.description}
                            </p>

                            {/* Read more */}
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                                <span className="read-more-arrow w-7 h-7 bg-accent/80 rounded-md flex items-center justify-center text-white group-hover:bg-accent transition-colors">
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
