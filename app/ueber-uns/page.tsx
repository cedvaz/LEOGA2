import type { Metadata } from "next";
import { Shield, Scale, Leaf, ArrowRight, Code, Zap, BarChart3, MapPin, Clock, Euro } from "lucide-react";
import { ObfuscatedEmail } from "@/components/ui/obfuscated-email";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Über uns",
    description: "LEOGA ist ein Familienunternehmen aus Kempten im Allgäu. Seit Generationen regional verwurzelt – wir entwickeln Windkraft-, Photovoltaik- und Wasserkraftprojekte fair, stabil und nachhaltig.",
};

const values = [
    { icon: Shield, title: "Fair", text: "Transparente Konditionen, ehrliche Beratung. Was wir zusagen, halten wir." },
    { icon: Scale, title: "Stabil", text: "Ein Familienunternehmen, das langfristig denkt und handelt – über Generationen." },
    { icon: Leaf, title: "Nachhaltig", text: "Erneuerbare Energie mit Rücksicht auf Natur, Region und Mensch." },
];

const referenzen = [
    {
        title: "Windkraft Reichholz",
        type: "Windenergie",
        description: "Windenergieanlagen im laufenden Betrieb. Von der Planung bis zur Umsetzung – alles aus einer Hand.",
        image: "/pictures/Windkraft_Rechholz_Single.webp",
        alt: "Windenergieanlage Reichholz",
        objectPosition: "center top",
    },
    {
        title: "Amper Kraftwerke Olching",
        type: "Wasserkraft",
        description: "Seit vielen Jahrzehnten zuverlässig im Betrieb.",
        image: "/pictures/Alex_Referenzen_Amper.webp",
        alt: "Amperkraftwerk",
    },
    {
        title: "Liegenschaft Zeppelinstraße Kempten",
        type: "Immobilie",
        description: "Gewerbefläche in regionaler Lage. Durchdacht geplant, fair umgesetzt.",
        image: "/pictures/Alex_Referenz_Gewerbe.webp",
        alt: "Gewerbeimmobilie",
    },
];

export default function UeberUnsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-cream overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-5 leading-tight">
                            Über uns
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Energie aus Überzeugung, Partnerschaft aus Tradition.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] max-w-4xl mx-auto">
                        <Image
                            src="/pictures/Alex_ueberuns.png"
                            alt="LEOGA Geschäftsführer im Gespräch vor Windkraftanlage"
                            fill
                            className="object-cover object-top brightness-105"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Geschichte */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-8 leading-tight">
                                Ein Familienunternehmen mit <span className="text-primary">Wurzeln</span>
                            </h2>
                            <div className="space-y-5 text-muted-foreground leading-relaxed">
                                <p>
                                    Nach dem Zweiten Weltkrieg begann Leonhard Gabler hinter dem elterlichen Hof mit dem Sandabbau – der Grundstein für das, was die Familie Gabler über Generationen aufgebaut hat. Daraus entstanden Kies-, Deponie- und Betonbetriebe, die bis heute in der Familie betrieben werden, unter anderem im Darast.
                                </p>
                                <p>
                                    Unternehmerisch getrieben und fasziniert von der Energiegewinnung aus Wasserkraft, begann Leonhard Gabler bereits in den 1970er-Jahren mit dem Ankauf, der Sanierung und dem Betrieb von Wasserkraftwerken im süddeutschen Raum. Viele dieser Anlagen werden bis heute betrieben – ein stilles Zeugnis für seine Weitsicht.
                                </p>
                                <p>
                                    Neben dem Betrieb von Windkraftanlagen und Liegenschaften stehen heute in der Projektentwicklung Windenergie, Photovoltaik und Großbatteriespeicher im süddeutschen Raum im Fokus. Was Leonhard Gabler begann, führt die nächste Generation mit demselben Anspruch weiter: verlässlich, regional, langfristig.
                                </p>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden max-w-sm mx-auto lg:mx-0 lg:ml-auto">
                            <img
                                src="/pictures/gabler_sen.webp"
                                alt="Leonhard Gabler, Gründer"
                                width={800}
                                height={1132}
                                style={{ width: "100%", height: "auto" }}
                                className="object-cover object-top rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Werte */}
            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-4">
                            Fair. Stabil. Nachhaltig.
                        </h2>
                        <p className="text-muted-foreground text-lg">Die drei Werte, an denen wir uns messen lassen.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {values.map((value, i) => (
                            <div key={i} className="bg-white rounded-2xl p-7">
                                <div className="w-12 h-12 rounded-xl bg-warm flex items-center justify-center mb-5">
                                    <value.icon size={22} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-earth mb-2 text-lg">{value.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{value.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Referenzen */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-4">
                            Ausgewählte <span className="text-primary">Referenzen</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">Projekte, die für unsere Arbeitsweise stehen: gründlich, fair und langfristig.</p>
                    </div>
                    <div className="space-y-10">
                        {referenzen.map((ref, i) => (
                            <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-cream rounded-2xl overflow-hidden">
                                <div className="relative aspect-[16/10]">
                                    <Image
                                        src={ref.image}
                                        alt={ref.alt}
                                        fill
                                        className="object-cover"
                                        style={ref.objectPosition ? { objectPosition: ref.objectPosition } : undefined}
                                    />
                                </div>
                                <div className="p-8">
                                    <span className="inline-block text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
                                        {ref.type}
                                    </span>
                                    <h3 className="text-xl font-serif font-bold text-earth mb-3">{ref.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">{ref.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Karriere */}
            <section id="karriere" className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth mb-4">
                            Werde Teil von <span className="text-primary">LEOGA</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">Wir suchen Werkstudent:innen, die mit uns die Energiewende gestalten.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                        {[
                            {
                                icon: Code,
                                title: "Werkstudent:in Informatik",
                                tasks: "Daten strukturieren & auswerten, interne Prozesse digitalisieren, eigene Tools entwickeln.",
                                profile: "Informatik, Wirtschaftsinformatik o. ä.",
                                pdf: "/pictures/Werkstudent_Informatik.pdf",
                            },
                            {
                                icon: Zap,
                                title: "Werkstudent:in Elektrotechnik",
                                tasks: "Anlagen elektrotechnisch auslegen, Netzanschlusskonzepte erstellen, technische Planung.",
                                profile: "Elektrotechnik, Energietechnik o. ä.",
                                pdf: "/pictures/Werkstudent_Elektrotechnik.pdf",
                            },
                            {
                                icon: BarChart3,
                                title: "Werkstudent:in BWL",
                                tasks: "Projekte analysieren & mitsteuern, Reporting, Budget und Schriftverkehr.",
                                profile: "BWL, Wirtschaftsingenieurwesen o. ä.",
                                pdf: "/pictures/Werkstudent_BWL.pdf",
                            },
                        ].map((job, i) => (
                            <a key={i} href={job.pdf} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-7 flex flex-col hover:shadow-lg transition-shadow group cursor-pointer">
                                <div className="w-12 h-12 rounded-xl bg-warm flex items-center justify-center mb-5">
                                    <job.icon size={22} className="text-primary" />
                                </div>
                                <h3 className="font-semibold text-earth mb-3 text-lg group-hover:text-primary transition-colors">{job.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{job.tasks}</p>
                                <p className="text-xs text-primary font-medium mt-auto">{job.profile}</p>
                                <span className="inline-flex items-center gap-1 text-xs text-primary font-medium mt-4 group-hover:gap-2 transition-all">
                                    Mehr erfahren <ArrowRight size={14} />
                                </span>
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
                        <span className="flex items-center gap-1.5"><Clock size={16} className="text-primary" /> 10–20 h / Woche</span>
                        <span className="flex items-center gap-1.5"><Euro size={16} className="text-primary" /> 16 € / Std.</span>
                        <span className="flex items-center gap-1.5"><MapPin size={16} className="text-primary" /> Kempten (Allgäu)</span>
                    </div>
                    <div className="text-center">
                        <Link
                            href="/kontakt"
                            className="inline-flex items-center gap-2 bg-primary text-white font-medium px-8 py-3.5 rounded-full hover:bg-moss transition-all shadow-lg"
                        >
                            Jetzt bewerben
                            <ArrowRight size={16} />
                        </Link>
                        <p className="text-xs text-muted-foreground mt-4">Kurze Mail an <ObfuscatedEmail className="text-primary hover:underline" /> oder über unser Kontaktformular.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-primary">
                <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
                    <h2 className="text-3xl font-serif font-bold text-white mb-6">Lernen Sie uns kennen</h2>
                    <p className="text-white/80 mb-8 text-lg">
                        Wir freuen uns auf ein persönliches Gespräch.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 bg-white text-primary font-medium px-8 py-3.5 rounded-full hover:bg-cream transition-all shadow-lg"
                    >
                        Kontakt aufnehmen
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
