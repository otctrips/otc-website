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

  console.log("standalone:", standalone, "pathname:", pathname);
  if (standalone) return <>{children}</>;

  return (
    <>
      <div className="relative z-[60]">
        
      </div>
      <Header />
      <main className="min-h-screen pt-[40px]">{children}</main>
      <Footer />
    </>
  );
}
