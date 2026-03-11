import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { IconServices } from "@/components/home/IconServices";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { FAQ } from "@/components/home/FAQ";
import { ConsultationTeaser } from "@/components/home/ConsultationTeaser";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Benefits />
      <IconServices />
      <ProcessSteps />
      <StoryTeaser />
      <FAQ />
      <ConsultationTeaser />

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
            Lassen Sie uns ins Gespräch kommen
          </h2>
          <p className="text-white/80 mb-10 text-lg leading-relaxed">
            Ob Fläche, Frage oder erste Idee – wir nehmen uns Zeit für Sie. Persönlich, unverbindlich und ehrlich.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 bg-white text-primary font-medium px-7 py-3.5 rounded-full hover:bg-cream transition-all text-sm shadow-lg"
            >
              Kontakt aufnehmen
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/referenzen"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/20 font-medium px-7 py-3.5 rounded-full hover:bg-white/20 transition-all text-sm"
            >
              Unsere Referenzen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
