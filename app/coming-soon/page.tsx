import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demnächst verfügbar – LEOGA",
    description: "Wir arbeiten an etwas Neuem. LEOGA – Windkraft und Photovoltaik in Partnerschaft.",
    robots: "noindex, nofollow",
};

export default function ComingSoonPage() {
    return (
        <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-4">
            <div className="text-center max-w-lg">
                {/* Logo */}
                <div className="mb-8 flex items-center justify-center gap-2">
                    <span className="text-2xl font-serif font-bold text-earth tracking-wide">LEOGA</span>
                </div>

                {/* Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-8 h-8 text-primary"
                        >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                            <path d="M12 6v6l4 2" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-serif font-bold text-earth mb-4 leading-tight">
                    Wir sind gleich für Sie da.
                </h1>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    Unsere neue Website ist in Kürze verfügbar.
                    Wir freuen uns darauf, Sie begrüßen zu dürfen.
                </p>

                <div className="inline-block border border-sand rounded-full px-6 py-2.5">
                    <p className="text-sm text-earth font-medium">
                        LEOGA – Windkraft & Photovoltaik in Partnerschaft
                    </p>
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                    Bei Fragen:{" "}
                    <a
                        href="mailto:info@leoga.de"
                        className="text-primary hover:underline"
                    >
                        info@leoga.de
                    </a>
                </p>
            </div>
        </div>
    );
}
