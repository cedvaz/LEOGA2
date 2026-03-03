import Image from "next/image";

interface SubpageHeroProps {
    title: string;
    subtitle?: string;
    imageSrc: string;
}

export function SubpageHero({ title, subtitle, imageSrc }: SubpageHeroProps) {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            <div className="container relative z-10 px-4 text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
