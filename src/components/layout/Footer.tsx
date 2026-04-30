import Link from "next/link";
import { TreePine } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-earth text-cream py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white">
                                <TreePine size={18} />
                            </div>
                            <span className="text-xl font-bold tracking-tight font-serif">LEOGA</span>
                        </Link>
                        <p className="text-sm text-cream/60 leading-relaxed max-w-xs">
                            Energie aus Überzeugung, Partnerschaft aus Tradition. Verwurzelt, verlässlich, fair.
                        </p>
                    </div>

                    {/* Leistungen */}
                    <div>
                        <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Leistungen</h3>
                        <ul className="space-y-2.5 text-sm text-cream/60">
                            <li><Link href="/windkraft" className="hover:text-cream transition-colors">Windkraft</Link></li>
                            <li><Link href="/photovoltaik" className="hover:text-cream transition-colors">Photovoltaik</Link></li>
                            <li><Link href="/batteriespeicher" className="hover:text-cream transition-colors">Batteriespeicher</Link></li>
                        </ul>
                    </div>

                    {/* Unternehmen */}
                    <div>
                        <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Unternehmen</h3>
                        <ul className="space-y-2.5 text-sm text-cream/60">
                            <li><Link href="/ueber-uns" className="hover:text-cream transition-colors">Über uns</Link></li>
                            <li><Link href="/referenzen" className="hover:text-cream transition-colors">Referenzen</Link></li>
                            <li><Link href="/kontakt" className="hover:text-cream transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Kontakt */}
                    <div>
                        <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Kontakt</h3>
                        <ul className="space-y-2.5 text-sm text-cream/60">
                            <li>info@leoga.de</li>
                            <li>Kempten, Bayern</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/40">
                    <p>&copy; {new Date().getFullYear()} LEOGA GmbH. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-6 mt-3 md:mt-0">
                        <Link href="/impressum" className="hover:text-cream/70 transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-cream/70 transition-colors">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
