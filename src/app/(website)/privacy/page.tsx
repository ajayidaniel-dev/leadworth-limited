"use client";
import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
            Your Privacy Matters
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow">
            We respect your privacy and are committed to protecting your
            personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-3xl mx-auto px-4 py-12 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#130F45] mb-6">
            Privacy Policy
          </h2>
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                1. What Data We Collect
              </h3>
              <p>
                We may collect information you provide directly (such as your
                name, email, and messages) and data from your use of our website
                (like cookies and analytics).
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                2. How We Use Your Data
              </h3>
              <p>
                We use your data to provide and improve our services, respond to
                your inquiries, and personalize your experience. We never sell
                your data to third parties.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                3. Your Rights
              </h3>
              <p>
                You have the right to access, update, or delete your personal
                information. Contact us anytime to exercise your rights or ask
                questions about your data.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                4. Cookies & Analytics
              </h3>
              <p>
                We use cookies to enhance your experience and analyze site
                traffic. You can manage your cookie preferences in your browser
                settings. See our{" "}
                <Link
                  href="/cookies"
                  className="text-[#F45625] underline hover:text-[#130F45]"
                >
                  Cookie Policy
                </Link>{" "}
                for more details.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#F45625] mb-2">
                5. Contact Us
              </h3>
              <p>
                If you have any questions about this policy or your data, please{" "}
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
              Thank you for trusting Leadworth!
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
