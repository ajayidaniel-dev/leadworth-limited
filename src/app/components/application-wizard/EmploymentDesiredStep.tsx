"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApplicationData } from "./types";

export default function EmploymentDesiredStep({
  data,
  onChange,
}: {
  data: ApplicationData["employmentDesired"];
  onChange: (partial: Partial<ApplicationData["employmentDesired"]>) => void;
}) {
  return (
    <motion.div
      key="desired"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-[#130F45] mb-4">
        EMPLOYMENT DESIRED
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Position Applied For
          </label>
          <input
            value={data.position}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date Available For Work
          </label>
          <input
            value={data.dateAvailable}
            onChange={(e) => onChange({ dateAvailable: e.target.value })}
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
