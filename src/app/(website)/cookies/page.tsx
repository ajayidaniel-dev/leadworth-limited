"use client";

import React, { useEffect } from "react";

export default function CookiesRedirectPage() {
  useEffect(() => {
    window.location.href = "/retention";
  }, []);

  return (
    <div className="min-h-[40vh] flex items-center justify-center bg-[#F8F9FB]">
      <p className="text-gray-600">Redirecting to Data Retention Policy...</p>
    </div>
  );
}
