"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApplicationData } from "./types";

const langs = [
  { key: "english", label: "ENGLISH" },
  { key: "hausa", label: "HAUSA" },
  { key: "yoruba", label: "YORUBA" },
  { key: "igbo", label: "IGBO" },
] as const;

const levels = ["fluent", "excellent", "good", "fair"] as const;

export default function LanguagesStep({
  data,
  onChange,
}: {
  data: ApplicationData["languages"];
  onChange: (partial: Partial<ApplicationData["languages"]>) => void;
}) {
  return (
    <motion.div
      key="languages"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-xl p-6"
    >
      <h3 className="text-xl font-bold text-[#130F45] mb-4">LANGUAGES</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2 px-4 font-medium text-gray-700">
                Language
              </th>
              {levels.map((lvl) => (
                <th
                  key={lvl}
                  className="text-center py-2 px-4 font-medium text-gray-700"
                >
                  {lvl[0].toUpperCase() + lvl.slice(1)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {langs.map((lang, r) => (
              <tr
                key={lang.key}
                className={
                  r < langs.length - 1 ? "border-b border-gray-200" : ""
                }
              >
                <td className="py-3 px-4 font-medium text-[#130F45]">
                  {lang.label}
                </td>
                {levels.map((lvl) => (
                  <td key={lvl} className="py-3 px-4 text-center">
                    <input
                      type="radio"
                      name={lang.key}
                      checked={data[lang.key] === lvl}
                      onChange={() =>
                        onChange({ [lang.key]: lvl } as Partial<
                          ApplicationData["languages"]
                        >)
                      }
                      className="text-[#F45625]"
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
