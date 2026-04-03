import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const sessionToken =
    req.cookies.get("authjs.session-token") ??
    req.cookies.get("__Secure-authjs.session-token");

  const isLoggedIn = !!sessionToken;
  const isAuthRoute = req.nextUrl.pathname.startsWith("/api/auth");
  const isPublicRoute = req.nextUrl.pathname === "/";

  if (isAuthRoute) return NextResponse.next();

  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
