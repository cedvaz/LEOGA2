import Link from "next/link";
import { Leaf } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                                <Leaf size={18} />
                            </div>
                            <span className="text-lg font-bold tracking-tight text-gray-900">LEOGA</span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Fair. Stabil. Nachhaltig. Gemeinsam für eine grünere Zukunft.
                        </p>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Leistungen</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/photovoltaik" className="hover:text-primary transition-colors">Photovoltaik</Link></li>
                            <li><Link href="/windkraft" className="hover:text-primary transition-colors">Windkraft</Link></li>
                            <li><Link href="/batteriespeicher" className="hover:text-primary transition-colors">Batteriespeicher</Link></li>
                            <li><Link href="/kontakt" className="hover:text-primary transition-colors">Beratung</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Ressourcen</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="/presse" className="hover:text-primary transition-colors">Presse</Link></li>
                            <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Unternehmen</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><Link href="/ueber-uns" className="hover:text-primary transition-colors">Über uns</Link></li>
                            <li><Link href="/karriere" className="hover:text-primary transition-colors">Karriere</Link></li>
                            <li><Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Follow Us */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-3">Folgen Sie uns</h3>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><span className="hover:text-primary transition-colors cursor-pointer">LinkedIn</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Instagram</span></li>
                            <li><span className="hover:text-primary transition-colors cursor-pointer">Facebook</span></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>&copy; {new Date().getFullYear()} LEOGA GmbH. Alle Rechte vorbehalten.</p>
                    <div className="flex gap-6 mt-3 md:mt-0">
                        <Link href="/impressum" className="hover:text-gray-600 transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-gray-600 transition-colors">Datenschutz</Link>
                        <Link href="/agb" className="hover:text-gray-600 transition-colors">AGB</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
