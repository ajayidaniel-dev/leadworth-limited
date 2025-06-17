import "@/app/globals.css";
import type { Metadata } from "next";
import Footer from "@/app/components/Footer";

import Script from "next/script";

import { VisualEditing } from "next-sanity";
import { SanityLive } from "@/app/lib/sanity.live";
import { draftMode } from "next/headers";
import Navbar from "../components/Navbar";

// Optimize font loading

export const metadata: Metadata = {
  title: "Leadworth Consulting Limited ",
  description:
    "Leadworth Consulting Limited is a leading provider of HR solutions, including recruitment, HR consulting, training, background checks, outsourcing, and employee relations services.",
};

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Load non-critical scripts with defer */}
      <Script
        src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js"
        strategy="lazyOnload"
      />

      <div className=" scroll-smooth transition-all duration-1000 mx-auto">
        <Navbar />

        {/* <Banner /> */}
        <main className="pt-16 lg:pt-20">
          {children}
          <SanityLive />
          {(await draftMode()).isEnabled && <VisualEditing />}
        </main>

        <Footer />
        {/* <!-- Google tag (gtag.js) --> */}
      </div>
    </>
  );
}
