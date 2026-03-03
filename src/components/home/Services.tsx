import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sun, Wind, Battery, Wrench, Zap } from "lucide-react";

const services = [
    {
        title: "Photovoltaik",
        description: "Effiziente Solarparks im Einklang mit der Natur.",
        icon: Sun,
        href: "/photovoltaik",
        image: "/service_solar.png",
        variant: "light" as const,
    },
    {
        title: "Windkraft",
        description: "Kraftvolle Energieerzeugung an optimalen Standorten.",
        icon: Wind,
        href: "/windkraft",
        image: "/service_wind.png",
        variant: "green" as const,
    },
    {
        title: "Batteriespeicher",
        description: "Die Zukunft der Netzstabilität und Grundlastfähigkeit.",
        icon: Battery,
        href: "/batteriespeicher",
        variant: "green" as const,
    },
    {
        title: "Beratung & Service",
        description: "Individuelle Beratung für Ihr Energieprojekt.",
        icon: Wrench,
        href: "/kontakt",
        variant: "light" as const,
    },
];

export function Services() {
    return (
        <section className="py-16 md:py-24 bg-muted">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
                    <div>
                        <div className="section-label mb-4">
                            <Zap size={14} />
                            <span>Leistungen</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Antrieb für die Zukunft mit<br />
                            nachhaltigen <span className="text-primary">Lösungen</span>
                        </h2>
                    </div>
                    <p className="text-gray-500 max-w-md mt-4 md:mt-0">
                        Wir bieten umfassende Lösungen für die Energiewende mit modernster Technologie und fairem Miteinander.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <Link
                            key={index}
                            href={service.href}
                            className={`group block rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:shadow-lg ${
                                service.variant === "green"
                                    ? "bg-primary text-white"
                                    : "bg-white text-gray-900 border border-gray-100"
                            }`}
                        >
                            {service.image && (
                                <div className="relative rounded-xl overflow-hidden aspect-[3/2] mb-4">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            )}
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${
                                service.variant === "green"
                                    ? "bg-white/20"
                                    : "bg-green-50"
                            }`}>
                                <service.icon size={20} className={
                                    service.variant === "green" ? "text-white" : "text-primary"
                                } />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className={`text-sm leading-relaxed ${
                                service.variant === "green" ? "text-white/80" : "text-gray-500"
                            }`}>
                                {service.description}
                            </p>
                            <div className={`mt-4 flex items-center text-sm font-medium ${
                                service.variant === "green" ? "text-white" : "text-primary"
                            }`}>
                                Mehr erfahren
                                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
