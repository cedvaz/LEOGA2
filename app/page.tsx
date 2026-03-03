import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { Services } from "@/components/home/Services";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { FAQ } from "@/components/home/FAQ";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Benefits />
      <Services />
      <ProcessSteps />
      <StoryTeaser />
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 md:px-6">
          <div className="relative bg-primary rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Versorgen Sie Ihre Welt mit sauberer Energie
                </h2>
                <p className="text-white/80 mb-8 max-w-lg">
                  Lassen Sie uns gemeinsam prüfen, wie Ihr Grundstück von erneuerbaren Energien profitieren kann. Unverbindlich und kostenlos.
                </p>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 bg-white text-primary font-medium px-6 py-3 rounded-full hover:bg-gray-100 transition-colors text-sm"
                >
                  Jetzt Kontakt aufnehmen
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] hidden lg:block">
                <Image
                  src="/service_solar.png"
                  alt="Solarpark"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
