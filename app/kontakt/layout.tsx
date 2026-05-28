import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt",
    description: "Kontakt zu LEOGA – Flächenprüfung, Beratung oder Anfrage. Wir melden uns persönlich. Kempten im Allgäu.",
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
