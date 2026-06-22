"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({
  children,
  isProposalSubdomain = false,
}: {
  children: React.ReactNode;
  isProposalSubdomain?: boolean;
}) {
  const pathname = usePathname();
  const standalone = isProposalSubdomain || pathname.startsWith("/proposals");

  if (standalone) return <>{children}</>;

  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
