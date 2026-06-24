import type { Metadata } from "next";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";

export const metadata: Metadata = {
    title: "Datenschutzerklärung – LEOGA GmbH",
    description: "Datenschutzerklärung der LEOGA GmbH gemäß DSGVO.",
};

export default function DatenschutzPage() {
    return (
        <div className="flex flex-col min-h-screen pt-28">
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4">Datenschutzerklärung</h1>
                    <p className="text-muted-foreground mb-10">Stand: Juni 2026</p>

                    <div className="space-y-10 text-muted-foreground leading-relaxed">

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">1. Verantwortlicher</h2>
                            <p>
                                LEOGA GmbH<br />
                                Mozartstraße 2<br />
                                87435 Kempten (Allgäu)<br />
                                E-Mail: <ObfuscatedEmail className="text-primary hover:underline" />
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">2. Grundsätze der Datenverarbeitung</h2>
                            <p className="mb-3">
                                Wir nehmen den Schutz Ihrer personenbezogenen Daten ernst. Diese Datenschutzerklärung informiert Sie darüber, welche Daten wir erheben, wie wir sie verwenden und welche Rechte Sie haben.
                            </p>
                            <p>
                                Personenbezogene Daten werden von uns nur erhoben, wenn Sie uns diese aktiv mitteilen – etwa über unser Kontaktformular. Eine Weitergabe an Dritte erfolgt nicht, es sei denn, dies ist zur Vertragserfüllung erforderlich oder gesetzlich vorgeschrieben.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">3. Hosting</h2>
                            <p className="mb-3">
                                Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf unserer Website werden technische Verbindungsdaten (u. a. IP-Adresse, Browsertyp, Betriebssystem, Zugriffszeit, aufgerufene Seite) durch den Hosting-Anbieter automatisch in sogenannten Server-Logfiles erfasst.
                            </p>
                            <p className="mb-3">
                                Diese Daten sind nicht bestimmten Personen zuordenbar und werden nicht mit anderen Datenquellen zusammengeführt. Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).
                            </p>
                            <p className="mb-3">
                                <strong className="text-earth">Internationale Datenübermittlung:</strong> Vercel ist Teilnehmer des EU-U.S. Data Privacy Framework (DPF), das durch den Angemessenheitsbeschluss der Europäischen Kommission vom 10. Juli 2023 als datenschutzrechtlich angemessen anerkannt wurde (Art. 45 DSGVO). Zusätzlich setzt Vercel Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2 lit. c DSGVO ein. Weitere Informationen:{" "}
                                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                    vercel.com/legal/privacy-policy
                                </a>.
                            </p>
                            <p>
                                <strong className="text-earth">Schriftarten:</strong> Die auf dieser Website verwendeten Schriftarten werden lokal von unserem Server ausgeliefert. Es findet keine Verbindung zu externen Servern (z. B. Google) statt.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">4. Kontaktformular</h2>
                            <p className="mb-3">
                                Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mb-3 ml-2">
                                <li>Vorname und Nachname</li>
                                <li>E-Mail-Adresse</li>
                                <li>Thema der Anfrage</li>
                                <li>Inhalt Ihrer Nachricht</li>
                            </ul>
                            <p className="mb-3">
                                Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme mit Ihnen verwendet. Eine Weitergabe an Dritte findet nicht statt.
                            </p>
                            <p className="mb-3">
                                <strong className="text-earth">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
                            </p>
                            <p>
                                <strong className="text-earth">Speicherdauer:</strong> Ihre Daten werden nach abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">5. E-Mail-Versand</h2>
                            <p>
                                Nachrichten aus unserem Kontaktformular werden über den Mailserver unseres Hosting-Anbieters STRATO AG (Otto-Ostrowski-Straße 7, 10249 Berlin) versendet. Die in Abschnitt 4 genannten Daten werden dabei ausschließlich zur Zustellung der E-Mail verarbeitet und nicht an Dritte weitergegeben.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">6. Cookies</h2>
                            <p className="mb-3">
                                Unsere Website verwendet ausschließlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und dienen keinen Tracking- oder Werbezwecken.
                            </p>
                            <p>
                                Wir setzen keine Analyse-, Marketing- oder Drittanbieter-Cookies ein. Es findet kein Tracking Ihres Nutzungsverhaltens statt.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">7. Keine Analyse- oder Tracking-Dienste</h2>
                            <p>
                                Wir verwenden keine Analyse-, Tracking- oder Werbetools – insbesondere kein Google Analytics, Google Ads, Meta Pixel oder vergleichbare Dienste. Es werden keine Daten über Ihr Nutzungsverhalten erhoben, gespeichert oder an Dritte übermittelt.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">8. Keine Social-Media-Einbindung</h2>
                            <p>
                                Auf unserer Website sind keine Social-Media-Plugins oder -Schaltflächen (z. B. von Facebook, Instagram, LinkedIn, X/Twitter) eingebunden. Es findet keine Datenübertragung an Social-Media-Plattformen statt.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">9. Ihre Rechte als betroffene Person</h2>
                            <p className="mb-3">Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:</p>
                            <ul className="list-disc list-inside space-y-2 ml-2">
                                <li><strong className="text-earth">Auskunft</strong> (Art. 15 DSGVO): Sie können Auskunft über die von uns verarbeiteten Daten verlangen.</li>
                                <li><strong className="text-earth">Berichtigung</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                                <li><strong className="text-earth">Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
                                <li><strong className="text-earth">Einschränkung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung verlangen.</li>
                                <li><strong className="text-earth">Widerspruch</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten widersprechen, soweit diese auf berechtigtem Interesse beruht.</li>
                                <li><strong className="text-earth">Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können Ihre Daten in einem gängigen, maschinenlesbaren Format erhalten.</li>
                            </ul>
                            <p className="mt-4">
                                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                                <ObfuscatedEmail className="text-primary hover:underline" />
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
                            <p>
                                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren. Die zuständige Aufsichtsbehörde für Bayern ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-lg font-semibold text-earth mb-3">11. Aktualität dieser Datenschutzerklärung</h2>
                            <p>
                                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie stets den aktuellen rechtlichen Anforderungen entsprechend zu halten. Die jeweils aktuelle Version finden Sie auf dieser Seite.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
