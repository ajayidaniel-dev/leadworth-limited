"use client";

import React from "react";
import { motion } from "framer-motion";

export type Step = {
  key: string;
  label: string;
};

export default function StepIndicator({
  steps,
  currentIndex,
}: {
  steps: Step[];
  currentIndex: number;
}) {
  const progress = ((currentIndex + 1) / steps.length) * 100;
  return (
    <div className="mb-4">
      <div className="hidden md:flex items-center gap-3 flex-wrap mb-3">
        {steps.map((step, idx) => {
          const active = idx === currentIndex;
          const completed = idx < currentIndex;
          return (
            <div key={step.key} className="flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full grid place-content-center text-xs font-semibold ${
                  active
                    ? "bg-[#F45625] text-white"
                    : completed
                      ? "bg-[#F45625]/10 text-[#F45625]"
                      : "bg-gray-100 text-gray-500"
                }`}
              >
                {idx + 1}
              </div>
              <div
                className={`text-sm ${
                  active ? "text-[#130F45] font-semibold" : "text-gray-500"
                }`}
              >
                {step.label}
              </div>
              {idx < steps.length - 1 && (
                <div className="w-8 h-[2px] bg-gray-200 mx-1" />
              )}
            </div>
          );
        })}
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
          className="h-full bg-gradient-to-r from-[#130F45] to-[#F45625]"
        />
      </div>
      <div className="mt-2 text-xs text-gray-500">
        Step {currentIndex + 1} of {steps.length}
      </div>
    </div>
  );
}
