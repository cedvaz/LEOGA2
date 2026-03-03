"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NavLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn(
                "text-[15px] font-medium transition-colors hover:text-primary",
                isActive ? "text-primary font-semibold" : "text-gray-600",
                className
            )}
        >
            {children}
        </Link>
    );
}
