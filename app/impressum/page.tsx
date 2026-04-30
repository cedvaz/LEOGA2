import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum – LEOGA GmbH",
    description: "Impressum der LEOGA GmbH.",
};

export default function ImpressumPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-10">Impressum</h1>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">Angaben gemäß § 5 TMG</h2>
                            <p>
                                LEOGA GmbH<br />
                                Mozartstraße 2<br />
                                87435 Kempten
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">Vertreten durch</h2>
                            <p>Geschäftsführer: Alexander Gabler</p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">Kontakt</h2>
                            <p>
                                E-Mail: info@leoga.de
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">Registereintrag</h2>
                            <p>
                                Eintragung im Handelsregister<br />
                                Registergericht: Amtsgericht Kempten (Allgäu)<br />
                                Registernummer: HRB 14908
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">Steuernummer</h2>
                            <p>
                                Steuernummer: 127/131/30093
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">Haftungsausschluss</h2>
                            <p>
                                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
