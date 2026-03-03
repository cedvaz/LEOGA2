import { Building2, Leaf } from "lucide-react";

export function Partners() {
    return (
        <section className="py-16 bg-primary text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h3 className="text-lg font-medium text-white/80 mb-10 uppercase tracking-widest">
                    Gemeinsam Stark mit unseren Partnern
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder Logos - Using Icons for now to represent partner types */}
                    <div className="flex items-center gap-3 pixel-antialiased">
                        <Building2 size={32} />
                        <span className="text-xl font-bold">Stadtwerke Süd</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Leaf size={32} />
                        <span className="text-xl font-bold">GreenTech Solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Building2 size={32} />
                        <span className="text-xl font-bold">Regional Bank</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Leaf size={32} />
                        <span className="text-xl font-bold">Solar Systems AG</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
