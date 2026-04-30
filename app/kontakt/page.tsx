"use client";

import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function KontaktPage() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [datenschutz, setDatenschutz] = useState(false);
    const [formData, setFormData] = useState({
        vorname: "",
        nachname: "",
        email: "",
        thema: "Allgemeine Anfrage",
        nachricht: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!datenschutz) return;
        setFormState("loading");
        try {
            const res = await fetch("/api/kontakt", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error();
            setFormState("success");
        } catch {
            setFormState("error");
        }
    };

    return (
        <div className="flex flex-col min-h-screen pt-24">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                            {/* Contact Info */}
                            <div>
                                <h1 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-6 leading-tight">
                                    Lassen Sie uns <span className="text-primary">ins Gespräch</span> kommen
                                </h1>
                                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                                    Ob Frage zur Flächenpacht, zu einem konkreten Projekt oder einfach ein erstes Kennenlernen – wir sind für Sie da. Persönlich, unverbindlich und ehrlich.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-earth text-sm">Anschrift</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Alexander Gabler<br />
                                                Mozartstraße 2<br />
                                                87435 Kempten
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                            <Mail size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-earth text-sm">E-Mail</h3>
                                            <p className="text-muted-foreground text-sm">info@leoga.de</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-cream p-8 md:p-10 rounded-2xl">
                                {formState === "success" ? (
                                    <div className="flex flex-col items-center justify-center h-full text-center py-8 gap-4">
                                        <CheckCircle size={48} className="text-primary" />
                                        <h3 className="text-xl font-bold text-earth">Nachricht gesendet!</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Vielen Dank für Ihre Anfrage. Wir melden uns so schnell wie möglich bei Ihnen.
                                        </p>
                                    </div>
                                ) : (
                                    <form className="space-y-5" onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-earth">Vorname</label>
                                                <input
                                                    type="text"
                                                    name="vorname"
                                                    required
                                                    value={formData.vorname}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                    placeholder="Erika"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-sm font-medium text-earth">Nachname</label>
                                                <input
                                                    type="text"
                                                    name="nachname"
                                                    required
                                                    value={formData.nachname}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                    placeholder="Musterfrau"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-earth">E-Mail Adresse</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                                placeholder="email@beispiel.de"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-earth">Thema</label>
                                            <select
                                                name="thema"
                                                value={formData.thema}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                                            >
                                                <option>Allgemeine Anfrage</option>
                                                <option>Windkraft</option>
                                                <option>Photovoltaik</option>
                                                <option>Batteriespeicher</option>
                                            </select>
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-earth">Ihre Nachricht</label>
                                            <textarea
                                                name="nachricht"
                                                required
                                                value={formData.nachricht}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[120px] text-sm"
                                                placeholder="Wie können wir Ihnen helfen?"
                                            />
                                        </div>

                                        {/* DSGVO Pflicht-Checkbox */}
                                        <div className="flex items-start gap-3">
                                            <input
                                                type="checkbox"
                                                id="datenschutz"
                                                checked={datenschutz}
                                                onChange={(e) => setDatenschutz(e.target.checked)}
                                                required
                                                className="mt-0.5 w-4 h-4 rounded border-sand accent-primary flex-shrink-0 cursor-pointer"
                                            />
                                            <label htmlFor="datenschutz" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                                                Ich habe die{" "}
                                                <Link href="/datenschutz" className="underline hover:text-primary">
                                                    Datenschutzerklärung
                                                </Link>{" "}
                                                gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. *
                                            </label>
                                        </div>

                                        {formState === "error" && (
                                            <div className="flex items-center gap-2 text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-xs">
                                                <AlertCircle size={14} className="flex-shrink-0" />
                                                Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
                                            </div>
                                        )}

                                        <Button
                                            size="lg"
                                            type="submit"
                                            disabled={!datenschutz || formState === "loading"}
                                            className="w-full bg-primary hover:bg-moss text-white h-12 text-sm shadow-md rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {formState === "loading"
                                                ? "Wird gesendet…"
                                                : <><span>Nachricht senden</span><Send className="ml-2 h-4 w-4" /></>
                                            }
                                        </Button>
                                    </form>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
