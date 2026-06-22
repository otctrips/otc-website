import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// All static route prefixes that exist on the main site
const MAIN_SITE_PREFIXES = [
  "/what-we-do",
  "/destinations",
  "/our-trips",
  "/get-a-quote",
  "/about",
  "/faqs",
  "/pricing",
  "/referral",
  "/travel-tips",
  "/privacy",
  "/thank-you",
  "/proposals",
  "/api",
];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  const isProposalSubdomain =
    hostname === "proposal.otctrips.com" || hostname.startsWith("proposal.");

  // On non-proposal domains, block /{slug} so the (proposal) route group
  // is not accessible from the main site
  if (!isProposalSubdomain && pathname !== "/") {
    const isMainSitePath = MAIN_SITE_PREFIXES.some(
      (p) => pathname === p || pathname.startsWith(p + "/")
    );
    if (!isMainSitePath) {
      return new NextResponse(null, { status: 404 });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
