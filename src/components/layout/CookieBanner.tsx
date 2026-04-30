"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronUp } from "lucide-react";

type ConsentState = {
    necessary: true;
    statistics: boolean;
    marketing: boolean;
};

const STORAGE_KEY = "leoga_cookie_consent";

function getStoredConsent(): ConsentState | null {
    if (typeof window === "undefined") return null;
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : null;
    } catch {
        return null;
    }
}

function saveConsent(consent: ConsentState) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
}

export function CookieBanner() {
    const [visible, setVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [statistics, setStatistics] = useState(false);
    const [marketing, setMarketing] = useState(false);

    useEffect(() => {
        if (!getStoredConsent()) {
            setVisible(true);
        }
    }, []);

    if (!visible) return null;

    const acceptAll = () => {
        saveConsent({ necessary: true, statistics: true, marketing: true });
        setVisible(false);
    };

    const acceptNecessary = () => {
        saveConsent({ necessary: true, statistics: false, marketing: false });
        setVisible(false);
    };

    const saveSelection = () => {
        saveConsent({ necessary: true, statistics, marketing });
        setVisible(false);
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
            <div className="max-w-2xl mx-auto bg-earth text-cream rounded-2xl shadow-2xl overflow-hidden">
                <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <h2 className="font-serif font-bold text-lg leading-snug">
                            Wir verwenden Cookies
                        </h2>
                        <button
                            onClick={acceptNecessary}
                            className="text-cream/40 hover:text-cream transition-colors flex-shrink-0 mt-0.5"
                            aria-label="Schließen"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    <p className="text-sm text-cream/70 leading-relaxed mb-5">
                        Wir nutzen Cookies, um die Funktionalität unserer Website zu gewährleisten. Optionale Cookies setzen wir nur mit Ihrer Einwilligung ein. Sie können Ihre Auswahl jederzeit in unserer{" "}
                        <Link href="/datenschutz" className="underline hover:text-cream transition-colors">
                            Datenschutzerklärung
                        </Link>{" "}
                        widerrufen.
                    </p>

                    {/* Details */}
                    {showDetails && (
                        <div className="mb-5 space-y-3 border-t border-cream/10 pt-4">
                            {/* Notwendig */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-cream">Notwendig</p>
                                    <p className="text-xs text-cream/60 mt-0.5">
                                        Technisch erforderlich für den Betrieb der Website. Können nicht deaktiviert werden.
                                    </p>
                                </div>
                                <div className="flex-shrink-0 mt-0.5">
                                    <span className="text-xs bg-primary/30 text-cream px-2 py-1 rounded-full">Immer aktiv</span>
                                </div>
                            </div>

                            {/* Statistik */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-cream">Statistik</p>
                                    <p className="text-xs text-cream/60 mt-0.5">
                                        Helfen uns zu verstehen, wie Besucher mit der Website interagieren.
                                    </p>
                                </div>
                                <label className="relative flex-shrink-0 mt-0.5 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={statistics}
                                        onChange={(e) => setStatistics(e.target.checked)}
                                    />
                                    <div className={`w-10 h-5 rounded-full transition-colors ${statistics ? "bg-primary" : "bg-cream/20"}`}>
                                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${statistics ? "translate-x-5" : "translate-x-0.5"}`} />
                                    </div>
                                </label>
                            </div>

                            {/* Marketing */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-sm font-semibold text-cream">Marketing</p>
                                    <p className="text-xs text-cream/60 mt-0.5">
                                        Werden verwendet, um Besuchern relevante Werbung anzuzeigen.
                                    </p>
                                </div>
                                <label className="relative flex-shrink-0 mt-0.5 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only"
                                        checked={marketing}
                                        onChange={(e) => setMarketing(e.target.checked)}
                                    />
                                    <div className={`w-10 h-5 rounded-full transition-colors ${marketing ? "bg-primary" : "bg-cream/20"}`}>
                                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${marketing ? "translate-x-5" : "translate-x-0.5"}`} />
                                    </div>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2.5">
                        <button
                            onClick={acceptAll}
                            className="flex-1 bg-primary hover:bg-primary/90 text-white text-sm font-medium py-2.5 px-4 rounded-full transition-colors"
                        >
                            Alle akzeptieren
                        </button>
                        <button
                            onClick={acceptNecessary}
                            className="flex-1 bg-cream/10 hover:bg-cream/20 text-cream text-sm font-medium py-2.5 px-4 rounded-full transition-colors"
                        >
                            Nur notwendige
                        </button>
                        {showDetails ? (
                            <button
                                onClick={saveSelection}
                                className="flex-1 bg-cream/10 hover:bg-cream/20 text-cream text-sm font-medium py-2.5 px-4 rounded-full transition-colors"
                            >
                                Auswahl speichern
                            </button>
                        ) : (
                            <button
                                onClick={() => setShowDetails(true)}
                                className="flex-1 flex items-center justify-center gap-1.5 bg-cream/10 hover:bg-cream/20 text-cream text-sm font-medium py-2.5 px-4 rounded-full transition-colors"
                            >
                                Einstellungen
                                <ChevronDown size={14} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// Kleiner Button im Footer zum erneuten Öffnen
export function CookieSettingsLink() {
    const reset = () => {
        localStorage.removeItem(STORAGE_KEY);
        window.location.reload();
    };
    return (
        <button onClick={reset} className="hover:text-cream/70 transition-colors">
            Cookie-Einstellungen
        </button>
    );
}
