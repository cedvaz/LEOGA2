"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Welche Flächen eignen sich für eine Zusammenarbeit?",
        answer: "Grundsätzlich Flächen ab ca. 1 Hektar – Acker, Grünland oder Konversionsflächen. Wir prüfen Ihr Grundstück kostenlos und unverbindlich und besprechen gemeinsam die Möglichkeiten."
    },
    {
        question: "Was macht LEOGA anders als andere Projektierer?",
        answer: "Wir sind ein Familienunternehmen und denken in Generationen, nicht in Quartalszahlen. Bei uns haben Sie einen persönlichen Ansprechpartner, der Sie über die gesamte Laufzeit begleitet. Wir versprechen nur, was wir halten können."
    },
    {
        question: "Wie lange dauert es von der Anfrage bis zur Umsetzung?",
        answer: "Je nach Projekt und Genehmigungslage rechnen wir mit 12 bis 24 Monaten. Wir halten Sie in jedem Schritt auf dem Laufenden und arbeiten zügig, aber gründlich."
    },
    {
        question: "Entstehen mir als Eigentümer Kosten?",
        answer: "Nein. LEOGA übernimmt sämtliche Kosten für Planung, Genehmigung, Bau und Betrieb. Für Sie als Eigentümer entstehen keine Kosten – Sie erhalten Pachteinnahmen."
    },
    {
        question: "Wer kümmert sich um Wartung und Betrieb?",
        answer: "Wir übernehmen den kompletten Betrieb über die gesamte Laufzeit. Monitoring, Wartung und Instandhaltung gehören zu unserem Service. Sie haben keinen Aufwand."
    },
    {
        question: "Kann ich die Fläche nach Vertragsende wieder nutzen?",
        answer: "Ja. Wir hinterlegen Rückbaubürgschaften und stellen die Fläche nach Laufzeitende in den Ursprungszustand zurück. Das ist vertraglich gesichert."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                <div className="text-center mb-14">
                    <div className="section-label mx-auto mb-5 w-fit">
                        <HelpCircle size={14} />
                        <span>Häufige Fragen</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4">
                        Offene Antworten auf <span className="text-primary">Ihre Fragen</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Ehrlich und direkt – so arbeiten wir auch zusammen.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                openIndex === index
                                    ? "border-primary/20 bg-warm/50 shadow-sm"
                                    : "border-sand bg-cream hover:border-primary/15"
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
