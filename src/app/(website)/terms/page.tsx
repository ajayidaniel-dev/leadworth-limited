"use client";
import React from "react";
import Link from "next/link";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow">
            Please read these terms carefully before using our website or
            services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#130F45] mb-6">
            Terms of Service
          </h2>
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                1. Acceptance of Terms
              </h3>
              <p>
                By using our website, you agree to these terms. If you do not
                agree, please do not use our site.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                2. Use of Our Site
              </h3>
              <p>
                You may use our site for lawful purposes only. Do not misuse,
                hack, or attempt to disrupt our services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                3. User Responsibilities
              </h3>
              <p>
                You are responsible for the information you provide and your
                activity on our site. Please keep your account details secure.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                4. Limitations
              </h3>
              <p>
                We strive for accuracy, but we do not guarantee that all content
                is error-free. We are not liable for any damages resulting from
                your use of our site.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                5. Changes to Terms
              </h3>
              <p>
                We may update these terms from time to time. Continued use of
                our site means you accept any changes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                6. Contact Us
              </h3>
              <p>
                If you have any questions about these terms, please{" "}
                <Link
                  href="/contact"
                  className="text-[#F45625] underline hover:text-[#130F45]"
                >
                  contact us
                </Link>
                . We&apos;re happy to help!
              </p>
            </div>
          </div>
          <div className="mt-10 text-center">
            <span className="inline-block px-6 py-2 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm animate-bounce">
              Thanks for being part of the Leadworth community!
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
