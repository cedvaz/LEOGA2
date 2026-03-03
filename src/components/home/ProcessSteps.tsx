import { MapPin, FileText, Hammer, BarChart3, TreePine } from "lucide-react";

const steps = [
    {
        icon: MapPin,
        step: "01",
        title: "Standort erkunden",
        description: "Wir besuchen Ihr Grundstück persönlich und prüfen kostenlos die Eignung für erneuerbare Energien."
    },
    {
        icon: FileText,
        step: "02",
        title: "Angebot & Vertrag",
        description: "Sie erhalten ein faires, transparentes Pachtangebot - maßgeschneidert auf Ihre Fläche und Ihre Wünsche."
    },
    {
        icon: Hammer,
        step: "03",
        title: "Planung & Bau",
        description: "Wir übernehmen alle Genehmigungen und den gesamten Bau. Sie werden in jedem Schritt informiert."
    },
    {
        icon: BarChart3,
        step: "04",
        title: "Ernte & Ertrag",
        description: "Ihre Fläche produziert saubere Energie. Sie erhalten stabile Pachteinnahmen über die gesamte Laufzeit."
    }
];

export function ProcessSteps() {
    return (
        <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm/30 blob-shape -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <div className="section-label mx-auto mb-5 w-fit">
                        <TreePine size={14} />
                        <span>Ihr Weg</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4 leading-tight">
                        Von der Fläche zur <span className="text-primary">Energieernte</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        In vier einfachen Schritten wird Ihr Grundstück zum Kraftwerk der Zukunft.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <div key={item.step} className="relative group">
                            {/* Connection line */}
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-warm" />
                            )}

                            <div className="text-center">
                                <div className="relative inline-flex mb-6">
                                    <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-warm transition-colors duration-300">
                                        <item.icon size={28} className="text-primary" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-earth text-xs font-bold rounded-full flex items-center justify-center">
                                        {item.step}
                                    </span>
                                </div>
                                <h3 className="text-lg font-serif font-bold text-earth mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
