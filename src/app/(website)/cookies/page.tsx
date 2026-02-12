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
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-xl">
            Cookies Policy
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow">
            How we use cookies to improve your experience and protect your data.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 animate-fade-in">
          <div className="space-y-10 text-gray-700">
            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                Purpose and usage
              </h2>
              <p>
                Leadworth Consulting uses secure Cookies to ensure data
                security. We utilize &quot;cookies&quot; and similar tracking
                technologies to enhance your digital experience and understand
                user behavior. These small text files are stored on your browser
                and allow us to analyze website traffic, identify popular site
                features, and optimize our service delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                Data privacy in tracking
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Non-Identifiable Data:</strong> We do not collect
                  personally identifiable information (PII) through cookies
                  unless you explicitly provide it via our web forms.
                </li>
                <li>
                  <strong>Third-Party Analytics:</strong> We utilize Google
                  Analytics to monitor website performance. This service may use
                  cookies to track your interactions. For more details on how
                  Google manages this data, please refer to the{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#F45625] underline hover:text-[#130F45]"
                  >
                    Google Analytics Privacy Policy
                  </a>
                  .
                </li>
                <li>
                  <strong>Data Integrity:</strong> We maintain a strict policy
                  against the sale of any personal information collected via our
                  website to third parties.
                </li>
              </ul>
            </div>

            <p className="pt-4">
              For our approach to data retention, see our{" "}
              <Link
                href="/retention"
                className="text-[#F45625] underline hover:text-[#130F45]"
              >
                Data Retention Policy
              </Link>
              . For full details on how we handle your data, see our{" "}
              <Link
                href="/privacy"
                className="text-[#F45625] underline hover:text-[#130F45]"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
