import { ImageIcon } from "lucide-react";
import Image from "next/image";

interface SubpageHeroProps {
    title: string;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
    imagePlaceholder?: string;
}

export function SubpageHero({ title, subtitle, imageSrc, imageAlt, imagePlaceholder }: SubpageHeroProps) {
    return (
        <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-cream overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-5 leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            {subtitle}
                        </p>
                    )}
                </div>
                {imageSrc && (
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/7] max-w-4xl mx-auto">
                        <Image
                            src={imageSrc}
                            alt={imageAlt || title}
                            fill
                            className="object-cover object-center brightness-105"
                            priority
                        />
                    </div>
                )}
                {!imageSrc && imagePlaceholder && (
                    <div className="mt-0 rounded-2xl bg-warm border-2 border-dashed border-sand aspect-[16/7] max-w-4xl mx-auto flex flex-col items-center justify-center text-muted-foreground">
                        <ImageIcon size={40} className="mb-3 opacity-30" />
                        <p className="text-sm font-medium">{imagePlaceholder}</p>
                        <p className="text-xs mt-1 opacity-60">Platzhalter für Shooting-/Drohnenbild</p>
                    </div>
                )}
            </div>
        </section>
    );
}
