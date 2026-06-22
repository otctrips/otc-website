import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  const isProposalSubdomain =
    hostname === "proposal.otctrips.com" || hostname.startsWith("proposal.");

  // On the proposal subdomain, rewrite /{slug} → /proposals/{slug} internally.
  // This lets the existing /proposals/[slug] page handle the request, which
  // already suppresses the site header/footer via SiteChrome.
  if (
    isProposalSubdomain &&
    pathname !== "/" &&
    !pathname.startsWith("/proposals/") &&
    !pathname.startsWith("/api")
  ) {
    return NextResponse.rewrite(new URL(`/proposals${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
