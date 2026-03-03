import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sun, Wind, Battery, Compass } from "lucide-react";

const services = [
    {
        title: "Photovoltaik",
        description: "Sonnenenergie ernten auf Ihrem Land. Wir planen und betreiben effiziente Solarparks, die sich harmonisch in die Landschaft einfügen.",
        icon: Sun,
        href: "/photovoltaik",
        image: "/service_solar.png",
    },
    {
        title: "Windkraft",
        description: "Die Kraft des Windes nutzen. Durchdachte Standortplanung für maximalen Ertrag bei minimalem Eingriff in die Natur.",
        icon: Wind,
        href: "/windkraft",
        image: "/service_wind.png",
    },
    {
        title: "Batteriespeicher",
        description: "Energie speichern, wenn sie gebraucht wird. Moderne Speicherlösungen für eine zuverlässige Stromversorgung rund um die Uhr.",
        icon: Battery,
        href: "/batteriespeicher",
        image: "/service_battery.png",
    },
];

export function Services() {
    return (
        <section className="py-20 md:py-32 bg-muted relative overflow-hidden">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-sage/10 blob-shape -z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="section-label mx-auto mb-5 w-fit">
                        <Compass size={14} />
                        <span>Unsere Leistungen</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4 leading-tight">
                        Drei Wege zu <span className="text-primary">sauberer Energie</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Jedes Grundstück ist einzigartig. Deshalb bieten wir verschiedene Lösungen, die perfekt auf Ihren Standort abgestimmt sind.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className="group block bg-cream rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-earth/30 to-transparent" />
                                <div className="absolute top-4 left-4 w-11 h-11 bg-cream/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                                    <service.icon size={22} className="text-primary" />
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-earth mb-2">{service.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {service.description}
                                </p>
                                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-moss transition-colors">
                                    Mehr erfahren
                                    <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
