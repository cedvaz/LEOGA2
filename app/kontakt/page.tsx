import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function KontaktPage() {
    return (
        <div className="flex flex-col min-h-screen pt-24">
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                            {/* Contact Info */}
                            <div>
                                <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Kontakt</h2>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    Lassen Sie uns gemeinsam <br />
                                    <span className="text-primary">Werte schaffen.</span>
                                </h1>
                                <p className="text-lg text-gray-600 mb-12">
                                    Haben Sie Fragen zur Flächenpacht oder eines unserer Projekte? Wir sind für Sie da – persönlich, kompetent und unverbindlich.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Anschrift</h3>
                                            <p className="text-gray-600">LEOGA GmbH<br />Musterstraße 1<br />12345 Musterstadt</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Telefon</h3>
                                            <p className="text-gray-600">+49 123 456 7890</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-primary flex-shrink-0">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">E-Mail</h3>
                                            <p className="text-gray-600">info@leoga.de</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Vorname</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Erika" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-gray-700">Nachname</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Musterfrau" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">E-Mail Adresse</label>
                                        <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="email@beispiel.de" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Thema</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white">
                                            <option>Photovoltaik-Pacht</option>
                                            <option>Windkraft-Pacht</option>
                                            <option>Batteriespeicher</option>
                                            <option>Allgemeine Anfrage</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-700">Ihre Nachricht</label>
                                        <textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all min-h-[150px]" placeholder="Wie können wir Ihnen helfen?"></textarea>
                                    </div>
                                    <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg shadow-xl shadow-primary/20">
                                        Nachricht senden <Send className="ml-2 h-4 w-4" />
                                    </Button>
                                    <p className="text-xs text-gray-400 text-center">
                                        Durch Absenden des Formulars akzeptieren Sie unsere Datenschutzerklärung.
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
