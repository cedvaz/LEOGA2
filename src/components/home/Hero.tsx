"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Text Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Nachhaltige Energie für eine{" "}
                            <span className="text-primary">grünere Welt</span>
                        </h1>
                        <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                            Ihr Partner für Solarparks, Windkraftanlagen und Batteriespeicher. Wir entwickeln erneuerbare Energieprojekte im Einklang mit Mensch und Natur.
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mb-10">
                            <Link
                                href="/kontakt"
                                className="inline-flex items-center justify-center bg-primary text-white font-medium px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
                            >
                                Jetzt Fläche anbieten
                            </Link>
                            <button className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors group">
                                <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                    <Play size={16} className="text-primary ml-0.5" />
                                </span>
                                Unser Projekt entdecken
                            </button>
                        </div>

                        {/* Avatar group + stats */}
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <div className="w-9 h-9 rounded-full bg-primary/20 border-2 border-white" />
                                <div className="w-9 h-9 rounded-full bg-secondary/30 border-2 border-white" />
                                <div className="w-9 h-9 rounded-full bg-primary/30 border-2 border-white" />
                            </div>
                            <div className="flex items-center gap-1">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500 ml-1">Vertrauen von 200+ Partnern</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Image Collage */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                                    <Image
                                        src="/hero.png"
                                        alt="Windkraftanlage"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                                    <Image
                                        src="/service_wind.png"
                                        alt="Windpark"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                                    <Image
                                        src="/service_solar.png"
                                        alt="Solarpark"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating stat card */}
                        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <ArrowRight size={18} className="text-primary" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-gray-900">Unser neuestes Projekt</p>
                                <p className="text-xs text-gray-500">Windpark Nordsee - 120MW</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
