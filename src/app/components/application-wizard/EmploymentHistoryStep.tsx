"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApplicationData } from "./types";

export default function EmploymentHistoryStep({
  data,
  onChange,
}: {
  data: ApplicationData["employmentHistory"];
  onChange: (partial: Partial<ApplicationData["employmentHistory"]>) => void;
}) {
  const updateEntry = (
    idx: number,
    patch: Partial<ApplicationData["employmentHistory"]["entries"][number]>
  ) => {
    const next = data.entries.map((e, i) =>
      i === idx ? { ...e, ...patch } : e
    ) as typeof data.entries;
    onChange({ entries: next });
  };

  return (
    <motion.div
      key="history"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-xl p-6 space-y-6"
    >
      <h3 className="text-xl font-bold text-[#130F45]">EMPLOYMENT HISTORY</h3>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-gray-700">
          May we contact your current employer?
        </span>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={data.contactCurrent === "yes"}
              onChange={() => onChange({ contactCurrent: "yes" })}
              className="text-[#F45625]"
            />
            <span className="text-sm">YES</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              checked={data.contactCurrent === "no"}
              onChange={() => onChange({ contactCurrent: "no" })}
              className="text-[#F45625]"
            />
            <span className="text-sm">NO</span>
          </label>
        </div>
      </div>

      {data.entries.map((entry, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-lg p-4 space-y-4"
        >
          <div className="flex items-center gap-4">
            <h4 className="font-semibold text-[#130F45]">{idx + 1}.</h4>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={entry.current === "yes"}
                  onChange={() => updateEntry(idx, { current: "yes" })}
                  className="text-[#F45625]"
                />
                <span className="text-sm">Current</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={entry.current === "no"}
                  onChange={() => updateEntry(idx, { current: "no" })}
                  className="text-[#F45625]"
                />
                <span className="text-sm">No</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Employer
              </label>
              <input
                value={entry.employer}
                onChange={(e) => updateEntry(idx, { employer: e.target.value })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Position(s)
              </label>
              <input
                value={entry.positions}
                onChange={(e) =>
                  updateEntry(idx, { positions: e.target.value })
                }
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Start Date
              </label>
              <input
                value={entry.startDate}
                onChange={(e) =>
                  updateEntry(idx, { startDate: e.target.value })
                }
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                End Date
              </label>
              <input
                value={entry.endDate}
                onChange={(e) => updateEntry(idx, { endDate: e.target.value })}
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Starting Salary
              </label>
              <input
                value={entry.startingSalary}
                onChange={(e) =>
                  updateEntry(idx, { startingSalary: e.target.value })
                }
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ending Salary
              </label>
              <input
                value={entry.endingSalary}
                onChange={(e) =>
                  updateEntry(idx, { endingSalary: e.target.value })
                }
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                value={entry.address}
                onChange={(e) => updateEntry(idx, { address: e.target.value })}
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City, State
              </label>
              <input
                value={entry.cityState}
                onChange={(e) =>
                  updateEntry(idx, { cityState: e.target.value })
                }
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                value={entry.phone}
                onChange={(e) => updateEntry(idx, { phone: e.target.value })}
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                E-Mail Address of Supervisor
              </label>
              <input
                value={entry.supervisorEmail}
                onChange={(e) =>
                  updateEntry(idx, { supervisorEmail: e.target.value })
                }
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Essential Job Functions of Final Position
              </label>
              <textarea
                value={entry.essentialFunctions}
                onChange={(e) =>
                  updateEntry(idx, { essentialFunctions: e.target.value })
                }
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Reason(s) for Leaving?
              </label>
              <textarea
                value={entry.reasonForLeaving}
                onChange={(e) =>
                  updateEntry(idx, { reasonForLeaving: e.target.value })
                }
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
              />
            </div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
