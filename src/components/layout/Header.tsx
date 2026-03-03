"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Menu, X, TreePine } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", href: "/" },
        { label: "Photovoltaik", href: "/photovoltaik" },
        { label: "Windkraft", href: "/windkraft" },
        { label: "Batteriespeicher", href: "/batteriespeicher" },
        { label: "Über uns", href: "/ueber-uns" },
    ];

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                scrolled
                    ? "bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(45,80,22,0.08)]"
                    : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-18">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-105">
                        <TreePine size={18} />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-earth font-serif">
                        LEOGA
                    </span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            href={item.href}
                            className="text-sm text-earth/70 hover:text-primary transition-colors font-medium"
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center bg-primary text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-moss transition-colors shadow-sm"
                    >
                        Kontakt aufnehmen
                    </Link>
                </div>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-full text-earth hover:bg-warm transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-cream border-t border-warm shadow-lg p-5 md:hidden flex flex-col gap-3">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-earth/80 py-2.5 border-b border-warm/50 last:border-0 hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/kontakt"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center justify-center bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-moss transition-colors mt-2"
                    >
                        Kontakt aufnehmen
                    </Link>
                </div>
            )}
        </header>
    );
}
