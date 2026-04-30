import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    // Allow the coming-soon page and static assets through
    const { pathname } = request.nextUrl;
    if (
        pathname === "/demnachst" ||
        pathname.startsWith("/_next") ||
        pathname.startsWith("/api") ||
        pathname.includes(".")
    ) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/demnachst", request.url));
}

export const config = {
    matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.svg).*)"],
};
