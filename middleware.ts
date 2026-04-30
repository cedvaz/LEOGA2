import { NextRequest, NextResponse } from "next/server";

const BYPASS_SECRET = "leoga2025";
const BYPASS_COOKIE = "leoga_preview";

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Always allow: coming-soon page itself, static assets, API routes
  if (
    pathname.startsWith("/coming-soon") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icon") ||
    pathname.startsWith("/pictures") ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  // If preview param is present → set cookie and redirect to clean URL
  if (searchParams.get("preview") === BYPASS_SECRET) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("preview");
    const response = NextResponse.redirect(url);
    response.cookies.set(BYPASS_COOKIE, "true", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
    });
    return response;
  }

  // If bypass cookie is set → allow through
  if (request.cookies.get(BYPASS_COOKIE)?.value === "true") {
    return NextResponse.next();
  }

  // Everyone else → coming-soon
  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
