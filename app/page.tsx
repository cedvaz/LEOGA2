import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Services } from "@/components/home/Services";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FAQ } from "@/components/home/FAQ";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sprout } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Benefits />
      <Services />
      <ProcessSteps />
      <StoryTeaser />
      <FAQ />

      {/* CTA Section - Nature style */}
      <section className="py-20 md:py-32 bg-muted relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-sage/10 blob-shape" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="relative rounded-[2rem] overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/service_wind.png"
                alt="Windpark in der Natur"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-earth/90 via-earth/80 to-earth/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-10 md:p-16 lg:p-20 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sprout size={14} className="text-accent" />
                <span className="text-xs font-medium text-cream/80 uppercase tracking-wider">Jetzt starten</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-cream mb-6 leading-tight">
                Lassen Sie Ihr Land für die Zukunft arbeiten
              </h2>
              <p className="text-cream/70 mb-10 text-lg leading-relaxed max-w-lg">
                Gemeinsam prüfen wir, wie Ihr Grundstück von erneuerbaren Energien profitieren kann. Persönlich, unverbindlich und kostenlos.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-accent text-earth font-medium px-7 py-3.5 rounded-full hover:bg-accent/90 transition-all text-sm shadow-lg"
                >
                  Kostenlos beraten lassen
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/ueber-uns"
                  className="inline-flex items-center gap-2 bg-cream/10 backdrop-blur-sm text-cream border border-cream/20 font-medium px-7 py-3.5 rounded-full hover:bg-cream/20 transition-all text-sm"
                >
                  Mehr über uns
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
