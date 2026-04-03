"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

const FULLSCREEN_IFRAME_PATHS = ["/services/jobable"];

export default function WebsiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideChrome = FULLSCREEN_IFRAME_PATHS.includes(pathname ?? "");
  const childArray = React.Children.toArray(children);
  const [pageSlot, ...sanitySlot] = childArray;

  if (hideChrome) {
    return (
      <>
        <Navbar />
        {/* Same top offset as <main> on other routes so content clears the fixed navbar */}
        <div className="bg-white pt-16 lg:pt-20">
          {pageSlot}
          <Footer />
        </div>
        {sanitySlot}
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
}
