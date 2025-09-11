"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApplicationData } from "./types";

export default function PersonalInfoStep({
  data,
  onChange,
}: {
  data: ApplicationData["personalInfo"];
  onChange: (partial: Partial<ApplicationData["personalInfo"]>) => void;
}) {
  return (
    <motion.div
      key="personal"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-[#130F45] mb-4">
        PERSONAL INFORMATION
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name (Last, First, MI)
          </label>
          <input
            value={data.name}
            onChange={(e) => onChange({ name: e.target.value })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Street Address
          </label>
          <input
            value={data.streetAddress}
            onChange={(e) => onChange({ streetAddress: e.target.value })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            City
          </label>
          <input
            value={data.city}
            onChange={(e) => onChange({ city: e.target.value })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            State
          </label>
          <input
            value={data.state}
            onChange={(e) => onChange({ state: e.target.value })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Home Phone Number
          </label>
          <input
            value={data.homePhone}
            onChange={(e) => onChange({ homePhone: e.target.value })}
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Mobile Phone Number
          </label>
          <input
            value={data.mobilePhone}
            onChange={(e) => onChange({ mobilePhone: e.target.value })}
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            E-Mail Address
          </label>
          <input
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            NIN (National Identification Number)
          </label>
          <input
            value={data.nin}
            onChange={(e) => onChange({ nin: e.target.value })}
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
          />
        </div>
      </div>
    </motion.div>
  );
}
