import type { Metadata } from "next";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export const metadata: Metadata = {
    title: "Impressum – LEOGA GmbH",
    description: "Impressum der LEOGA GmbH gemäß § 5 TMG.",
};

export default function ImpressumPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-10">Impressum</h1>

                    <div className="space-y-10 text-muted-foreground leading-relaxed">

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Angaben gemäß § 5 TMG</h2>
                            <p>
                                LEOGA GmbH<br />
                                Mozartstraße 2<br />
                                87435 Kempten (Allgäu)<br />
                                Deutschland
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Vertreten durch</h2>
                            <p>Geschäftsführer: Alexander Gabler</p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Kontakt</h2>
                            <p>E-Mail: <ObfuscatedEmail className="text-primary hover:underline" /></p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Handelsregister</h2>
                            <p>
                                Registergericht: Amtsgericht Kempten (Allgäu)<br />
                                Registernummer: HRB 14908
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Umsatzsteuer-Identifikationsnummer</h2>
                            <p>
                                Steuernummer: 127/131/30093
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                            <p>
                                Alexander Gabler<br />
                                Mozartstraße 2<br />
                                87435 Kempten (Allgäu)
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Haftung für Inhalte</h2>
                            <p className="mb-3">
                                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>
                            <p>
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Haftung für Links</h2>
                            <p>
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Urheberrecht</h2>
                            <p>
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Online-Streitbeilegung</h2>
                            <p>
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                                <a
                                    href="https://ec.europa.eu/consumers/odr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:underline"
                                >
                                    https://ec.europa.eu/consumers/odr
                                </a>
                                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">Verbraucherstreitbeilegung</h2>
                            <p>
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
