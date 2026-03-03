"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { Menu, X, Leaf } from "lucide-react";
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white",
                scrolled ? "shadow-sm" : ""
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                        <Leaf size={18} />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-gray-900">
                        LEOGA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium"
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="/kontakt"
                        className="inline-flex items-center justify-center bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
                    >
                        Kontakt
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-md text-gray-800"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg p-4 md:hidden flex flex-col gap-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-gray-700 py-2 border-b border-gray-50 last:border-0"
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Link
                        href="/kontakt"
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center justify-center bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors mt-2"
                    >
                        Kontakt
                    </Link>
                </div>
            )}
        </header>
    );
}
