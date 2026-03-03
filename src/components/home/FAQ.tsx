"use client";

import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
    {
        question: "Woher weiß ich, welche Energielösung für mein Grundstück geeignet ist?",
        answer: "Grundsätzlich eignen sich Flächen ab ca. 1 Hektar. Wir prüfen kostenlos Ihr Grundstück und empfehlen die optimale Lösung – ob Solar, Wind oder Speicher."
    },
    {
        question: "Welche Arten von erneuerbaren Energielösungen bietet LEOGA an?",
        answer: "Wir bieten Photovoltaik-Freiflächenanlagen, Windkraftprojekte und Batteriespeicherlösungen. Jedes Projekt wird individuell auf den Standort abgestimmt."
    },
    {
        question: "Wie lange dauert die Installation normalerweise?",
        answer: "Die Dauer hängt von der Projektgröße ab. Von der ersten Bewertung bis zur Inbetriebnahme rechnen wir typischerweise mit 12-24 Monaten für eine Freiflächenanlage."
    },
    {
        question: "Wird erneuerbare Energie meine Stromrechnung wirklich senken?",
        answer: "Als Verpächter erhalten Sie stabile Pachteinnahmen über 20+ Jahre, die deutlich über landwirtschaftlichen Pachtpreisen liegen. Sie tragen kein unternehmerisches Risiko."
    },
    {
        question: "Bieten Sie laufende Wartung und Überwachung an?",
        answer: "Ja. Wir übernehmen den kompletten Betrieb und die Wartung über die gesamte Laufzeit. Monitoring und Instandhaltung sind in unserem Service enthalten."
    },
    {
        question: "Wie viel kostet das gesamte System?",
        answer: "Für Sie als Landeigentümer entstehen keine Kosten. LEOGA übernimmt alle Investitionen für Planung, Genehmigung, Bau und Betrieb."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <div className="section-label mx-auto mb-4 w-fit">
                        <HelpCircle size={14} />
                        <span>FAQ</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Antworten auf häufige{" "}
                        <span className="text-primary">Fragen</span>
                    </h2>
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Dienstleistungen.
                    </p>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-xl border transition-all duration-200 ${
                                openIndex === index
                                    ? "border-primary/20 bg-primary/5"
                                    : "border-gray-100 bg-white hover:border-gray-200"
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <span className="text-sm font-medium text-gray-900 pr-4">{faq.question}</span>
                                <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                                    openIndex === index
                                        ? "bg-primary text-white"
                                        : "bg-gray-100 text-gray-500"
                                }`}>
                                    {openIndex === index ? (
                                        <Minus size={14} />
                                    ) : (
                                        <Plus size={14} />
                                    )}
                                </div>
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
