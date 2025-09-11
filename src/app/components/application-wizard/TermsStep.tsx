"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export type TermsStepProps = {
  agreedToTerms: boolean;
  onToggleAgree: (next: boolean) => void;
};

export default function TermsStep({
  agreedToTerms,
  onToggleAgree,
}: TermsStepProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canAcknowledge, setCanAcknowledge] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const check = () => {
      const threshold = 8; // px tolerance
      const atBottom =
        el.scrollTop + el.clientHeight >= el.scrollHeight - threshold;
      if (atBottom) setCanAcknowledge(true);
    };
    el.addEventListener("scroll", check as EventListener, { passive: true });
    // In case content fits without scroll
    check();
    return () => el.removeEventListener("scroll", check as EventListener);
  }, []);

  return (
    <motion.div
      key="terms"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-[#130F45]">Terms & Agreement</h3>
      <div
        ref={scrollRef}
        className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-h-64 overflow-auto text-sm text-gray-700 leading-relaxed"
      >
        <p className="mb-2">
          I understand that as part of Leadworth Consulting Limited recruitment
          process, the Company will collect, process, store and use my personal
          data (and other sensitive or confidential data) as identified herein
          to assess my qualification and suitability for the position for which
          I applied.
        </p>
        <p className="mb-2">
          I am also aware that my personal data and sensitive personal data will
          be collected through various means including but not limited to
          attending a consultation, interview or submitting my curriculum vitae
          (CV), taking part in any psychological, medical or diagnostic
          examination/assessment or through information from any medical
          institution which holds my records, results or enquiries obtained from
          former employers, work colleagues, educational institutions,
          professional associations or registration bodies.
        </p>
        <p className="mb-2">
          I am aware that the personal data required by Leadworth Consulting
          Limited for the purposes mentioned herein include: my name, gender,
          hometown, state of origin, nationality, date of birth, house address,
          skills and educational qualifications, convictions, next of kin and
          their contact details, disability information, medical report,
          diagnostic report, phone number, passport photograph, curriculum vitae
          and other related data.
        </p>
        <p className="mb-2">
          I am aware that Leadworth Consulting Limited may share or transfer my
          personal data, within or outside Nigeria, with its affiliates, agents,
          regulatory authorities or third-party service providers in furtherance
          of the recruitment process or in accordance with the provisions of
          applicable laws.
        </p>
        <p className="mb-2">
          In the event that my application is successful, my personal data and
          sensitive personal data which have been obtained for the purpose of my
          recruitment shall, together with any other additional information,
          form part of my employment record and such shall be retained in
          accordance with the Company’s Data Retention Policy.
        </p>
      </div>
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={agreedToTerms}
          onChange={(e) => onToggleAgree(e.target.checked)}
          disabled={!canAcknowledge && !agreedToTerms}
          className={`mt-1 ${!canAcknowledge && !agreedToTerms ? "opacity-50 cursor-not-allowed " : ""} text-[#F45625]`}
        />
        <span
          className={`text-sm ${!canAcknowledge && !agreedToTerms ? "opacity-50 cursor-not-allowed" : ""} text-gray-700`}
        >
          I acknowledge that I have read and understood the information above,
          and hereby give my consent for my data to be used in accordance with
          data privacy and applicable law.
        </span>
      </label>
      {/* {!canAcknowledge && !agreedToTerms && (
        <p className="text-xs text-gray-500">
          Scroll to the bottom to enable the checkbox.
        </p>
      )} */}
    </motion.div>
  );
}
