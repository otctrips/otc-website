import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const pathname = request.nextUrl.pathname;

  const isProposalSubdomain =
    hostname === "proposal.otctrips.com" || hostname.startsWith("proposal.");

  if (
    isProposalSubdomain &&
    pathname !== "/" &&
    !pathname.startsWith("/proposals/") &&
    !pathname.startsWith("/api")
  ) {
    // Rewrite /{slug} → /proposals/{slug} and mark this as a proposal subdomain
    // request via a custom header so the layout can suppress the site chrome.
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-proposal-subdomain", "1");

    return NextResponse.rewrite(new URL(`/proposals${pathname}`, request.url), {
      request: { headers: requestHeaders },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico).*)"],
};
