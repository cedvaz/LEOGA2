import Image from "next/image";
import { Settings } from "lucide-react";

const steps = [
    {
        step: "01",
        title: "Flächenbewertung",
        description: "Wir prüfen kostenlos und schnell, ob Ihr Grundstück für erneuerbare Energien geeignet ist."
    },
    {
        step: "02",
        title: "Individuelles Angebot",
        description: "Sie erhalten ein maßgeschneidertes Pachtangebot. Transparent und auf Augenhöhe."
    },
    {
        step: "03",
        title: "Bau & Installation",
        description: "Wir kümmern uns um Genehmigung und Bau. Sie lehnen sich zurück."
    },
    {
        step: "04",
        title: "Ertrag & Monitoring",
        description: "Laufende Überwachung und garantierte Pachteinnahmen über die gesamte Laufzeit."
    }
];

export function ProcessSteps() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left - Text */}
                    <div>
                        <div className="section-label mb-4">
                            <Settings size={14} />
                            <span>Prozess</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                            Ein einfacher, effizienter Prozess zum{" "}
                            <span className="text-primary">Umstieg auf saubere Energie</span>
                        </h2>
                        <p className="text-gray-500 mb-10">
                            Der Weg zur Verpachtung ist einfacher, als Sie denken.
                        </p>

                        <div className="space-y-6">
                            {steps.map((item) => (
                                <div key={item.step} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
                                        {item.step}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Image Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative rounded-2xl overflow-hidden aspect-square">
                            <Image
                                src="/service_wind.png"
                                alt="Windkraft"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Windkraft</p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden aspect-square">
                            <Image
                                src="/service_solar.png"
                                alt="Solarenergie"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Solarenergie</p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden aspect-square">
                            <Image
                                src="/service_battery.png"
                                alt="Installation"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Installation</p>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden aspect-square">
                            <Image
                                src="/hero.png"
                                alt="Monitoring"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            <p className="absolute bottom-3 left-3 text-white text-sm font-medium">Ertrag & Monitoring</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
