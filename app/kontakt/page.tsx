import type { Metadata } from "next";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Kontakt – LEOGA | Sprechen Sie mit uns",
    description: "Kontaktieren Sie LEOGA für eine unverbindliche Beratung zu Windkraft, Photovoltaik oder Batteriespeicher auf Ihrer Fläche.",
};

export default function KontaktPage() {
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
                                            <p className="text-muted-foreground text-sm">LEOGA GmbH<br />Musterstraße 1<br />12345 Musterstadt</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-11 h-11 bg-cream rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                            <Phone size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-earth text-sm">Telefon</h3>
                                            <p className="text-muted-foreground text-sm">+49 123 456 7890</p>
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
                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-earth">Vorname</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="Erika" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-sm font-medium text-earth">Nachname</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="Musterfrau" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-earth">E-Mail Adresse</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm" placeholder="email@beispiel.de" />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-earth">Thema</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm">
                                            <option>Allgemeine Anfrage</option>
                                            <option>Windkraft</option>
                                            <option>Photovoltaik</option>
                                            <option>Batteriespeicher</option>
                                        </select>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-sm font-medium text-earth">Ihre Nachricht</label>
                                        <textarea className="w-full px-4 py-3 rounded-xl border border-sand bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[120px] text-sm" placeholder="Wie können wir Ihnen helfen?"></textarea>
                                    </div>
                                    <Button size="lg" className="w-full bg-primary hover:bg-moss text-white h-12 text-sm shadow-md rounded-full">
                                        Nachricht senden <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                    <p className="text-xs text-muted-foreground text-center">
                                        Mit dem Absenden akzeptieren Sie unsere <Link href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</Link>.
                                    </p>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
