"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Welche Grundstücke eignen sich für erneuerbare Energieprojekte?",
        answer: "Grundsätzlich eignen sich Flächen ab ca. 1 Hektar. Ideal sind Ackerflächen, Grünland oder Konversionsflächen. Wir prüfen kostenlos Ihr Grundstück und empfehlen die optimale Lösung."
    },
    {
        question: "Was bietet LEOGA genau an?",
        answer: "Wir bieten Photovoltaik-Freiflächenanlagen, Windkraftprojekte und Batteriespeicherlösungen. Jedes Projekt wird individuell auf den Standort und die örtlichen Gegebenheiten abgestimmt."
    },
    {
        question: "Wie lange dauert es von der Anfrage bis zur Inbetriebnahme?",
        answer: "Von der ersten Bewertung bis zur Inbetriebnahme rechnen wir typischerweise mit 12-24 Monaten, abhängig von der Projektgröße und den Genehmigungsverfahren."
    },
    {
        question: "Welche Einnahmen kann ich als Verpächter erwarten?",
        answer: "Als Verpächter erhalten Sie stabile Pachteinnahmen über 20+ Jahre, die deutlich über den üblichen landwirtschaftlichen Pachtpreisen liegen. Sie tragen dabei kein unternehmerisches Risiko."
    },
    {
        question: "Wer kümmert sich um Wartung und Betrieb?",
        answer: "Wir übernehmen den kompletten Betrieb und die Wartung über die gesamte Laufzeit. Monitoring, Instandhaltung und Versicherung sind in unserem Service enthalten."
    },
    {
        question: "Entstehen mir als Landeigentümer Kosten?",
        answer: "Nein. LEOGA übernimmt alle Investitionen für Planung, Genehmigung, Bau und Betrieb. Für Sie als Landeigentümer entstehen keinerlei Kosten."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-14">
                    <div className="section-label mx-auto mb-5 w-fit">
                        <HelpCircle size={14} />
                        <span>Häufige Fragen</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4">
                        Wir beantworten Ihre <span className="text-primary">Fragen</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Offene und ehrliche Antworten - so wie wir auch zusammenarbeiten.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                openIndex === index
                                    ? "border-secondary/30 bg-warm/50 shadow-sm"
                                    : "border-warm bg-cream hover:border-secondary/20"
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                            >
                                <span className="text-sm md:text-base font-medium text-earth pr-4">{faq.question}</span>
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                    openIndex === index
                                        ? "bg-primary text-white rotate-180"
                                        : "bg-warm text-earth"
                                }`}>
                                    <ChevronDown size={16} />
                                </div>
                            </button>
                            <div className={`transition-all duration-300 ${
                                openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                            } overflow-hidden`}>
                                <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
