import { Users, FileText, Hammer, Handshake } from "lucide-react";

const steps = [
    {
        icon: Users,
        step: "01",
        title: "Kennenlernen",
        description: "Wir besuchen Sie vor Ort, lernen Ihre Fläche kennen und hören zu, was Ihnen wichtig ist."
    },
    {
        icon: FileText,
        step: "02",
        title: "Gemeinsame Planung",
        description: "Wir entwickeln ein Konzept, das zu Ihrem Land und Ihren Vorstellungen passt – transparent und fair."
    },
    {
        icon: Hammer,
        step: "03",
        title: "Umsetzung",
        description: "Genehmigungen, Bau und Netzanschluss – wir kümmern uns um alle Schritte und halten Sie informiert."
    },
    {
        icon: Handshake,
        step: "04",
        title: "Langfristige Partnerschaft",
        description: "Ihre Fläche erzeugt saubere Energie. Sie erhalten verlässliche Erträge – wir bleiben Ihr Ansprechpartner."
    }
];

export function ProcessSteps() {
    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-14 max-w-2xl mx-auto">
                    <div className="section-label mx-auto mb-5 w-fit">
                        <span>Ihr Weg mit uns</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4 leading-tight">
                        Vom ersten Gespräch zur <span className="text-primary">Partnerschaft</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Schritt für Schritt, persönlich begleitet.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <div key={item.step} className="relative group">
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px border-t-2 border-dashed border-sand" />
                            )}

                            <div className="text-center">
                                <div className="relative inline-flex mb-6">
                                    <div className="w-20 h-20 bg-cream rounded-2xl flex items-center justify-center group-hover:bg-warm transition-colors duration-300">
                                        <item.icon size={28} className="text-primary" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-accent text-white text-xs font-bold rounded-full flex items-center justify-center">
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
