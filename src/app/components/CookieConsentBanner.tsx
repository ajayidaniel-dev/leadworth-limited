"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookieConsent";

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === null) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, "rejected");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-[#130F45]/20 bg-[#130F45] text-white shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6">
        <h3 className="text-lg font-bold text-[#F45625]">Cookie Consent</h3>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm sm:text-base text-white/90">
            We use cookies to improve your experience and analyze site traffic.{" "}
            <Link
              href="/privacy#retention"
              className="text-[#F45625] underline hover:text-[#FFE5DC] font-medium"
            >
              Read more
            </Link>
          </p>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handleReject}
              className="px-4 py-2 rounded-lg border border-white/30 text-white hover:bg-white/10 transition-colors text-sm font-medium"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg bg-[#F45625] text-white hover:bg-[#e04a1f] transition-colors text-sm font-semibold"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
