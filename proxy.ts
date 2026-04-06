import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const token = request.cookies.get("accessToken")?.value;
  const pathname = request.nextUrl.pathname;

  const isAuthPage = pathname.startsWith("/auth");

  const isProtectedRoute =
    pathname.startsWith("/fluvial/dashboard") ||
    pathname.startsWith("/fluvial/tramites/permiso-operacion") ||
    pathname.startsWith("/fluvial/tramites/renovacion");
  // Redirigir raíz
  if (pathname === "/") {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  //Bloquear rutas protegidas sin token
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
  //Evitar entrar a /auth si ya hay sesión
  if (token && isAuthPage) {
    return NextResponse.redirect(
      new URL("/fluvial/dashboard", request.url)
    );
  }

  return NextResponse.next();
}