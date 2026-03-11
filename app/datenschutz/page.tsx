import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung – LEOGA GmbH",
    description: "Datenschutzerklärung der LEOGA GmbH.",
};

export default function DatenschutzPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-10">Datenschutzerklärung</h1>

                    <div className="space-y-8 text-muted-foreground leading-relaxed">
                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">1. Verantwortlicher</h2>
                            <p>
                                LEOGA GmbH<br />
                                Musterstraße 1<br />
                                12345 Musterstadt<br />
                                E-Mail: info@leoga.de<br />
                                Telefon: +49 123 456 7890
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
                            <p>
                                Wir erheben personenbezogene Daten nur, wenn Sie uns diese im Rahmen einer Kontaktanfrage freiwillig mitteilen. Dazu gehören: Name, E-Mail-Adresse, Telefonnummer und der Inhalt Ihrer Nachricht.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">3. Zweck der Datenverarbeitung</h2>
                            <p>
                                Die von Ihnen übermittelten Daten verwenden wir ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme. Eine Weitergabe an Dritte erfolgt nicht.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">4. Rechtsgrundlage</h2>
                            <p>
                                Die Verarbeitung Ihrer Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">5. Speicherdauer</h2>
                            <p>
                                Ihre Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt und keine gesetzlichen Aufbewahrungspflichten bestehen.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">6. Ihre Rechte</h2>
                            <p>
                                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Darüber hinaus haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">7. Hosting</h2>
                            <p>
                                Diese Website wird bei Vercel Inc. gehostet. Beim Besuch der Website werden automatisch technische Daten (z. B. IP-Adresse, Browsertyp, Zugriffszeit) durch den Hosting-Anbieter erhoben. Weitere Informationen finden Sie in der Datenschutzerklärung von Vercel.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-2">8. Kontakt zum Datenschutz</h2>
                            <p>
                                Bei Fragen zum Datenschutz erreichen Sie uns unter: info@leoga.de
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
