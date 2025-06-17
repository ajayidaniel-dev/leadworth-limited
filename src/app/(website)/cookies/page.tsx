"use client";
import React from "react";
import Link from "next/link";

export default function CookiePolicyPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40 z-0" />
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-16 text-center flex flex-col items-center justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm mb-4 ">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-xl">
            Cookie Policy
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow">
            We use cookies to make your experience better. Here&apos;s how and
            why.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#130F45] mb-6">
            Cookie Policy
          </h2>
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                1. What Are Cookies?
              </h3>
              <p>
                Cookies are small text files stored on your device to help
                websites remember you and your preferences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                2. How We Use Cookies
              </h3>
              <p>
                We use cookies to personalize your experience, analyze site
                traffic, and improve our services. Some cookies are essential
                for site functionality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                3. Managing Cookies
              </h3>
              <p>
                You can manage or disable cookies in your browser settings.
                Please note that disabling cookies may affect your experience on
                our site.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                4. Contact Us
              </h3>
              <p>
                If you have questions about our cookie policy, please{" "}
                <Link
                  href="/contact"
                  className="text-[#F45625] underline hover:text-[#130F45]"
                >
                  contact us
                </Link>
                . We&apos;re here to help!
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <span className="inline-block px-6 py-2 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm animate-bounce">
              Enjoy a sweet experience at Leadworth 🍪
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
