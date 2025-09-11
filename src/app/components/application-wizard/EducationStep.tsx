"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApplicationData } from "./types";

export default function EducationStep({
  data,
  onChange,
}: {
  data: ApplicationData["education"];
  onChange: (partial: Partial<ApplicationData["education"]>) => void;
}) {
  const updateNested = (
    section: "highSchool" | "university",
    patch: Partial<ApplicationData["education"]["highSchool"]>
  ) => {
    onChange({
      [section]: { ...data[section], ...patch },
    } as Partial<ApplicationData["education"]>);
  };

  return (
    <motion.div
      key="education"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-xl p-6 space-y-6"
    >
      <h3 className="text-xl font-bold text-[#130F45]">EDUCATION</h3>

      <div>
        <h4 className="font-semibold text-[#130F45] mb-3">High School</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name of School
            </label>
            <input
              value={data.highSchool.schoolName}
              onChange={(e) =>
                updateNested("highSchool", { schoolName: e.target.value })
              }
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course of Study
            </label>
            <input
              value={data.highSchool.course}
              onChange={(e) =>
                updateNested("highSchool", { course: e.target.value })
              }
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Years of Study
            </label>
            <input
              value={data.highSchool.years}
              onChange={(e) =>
                updateNested("highSchool", { years: e.target.value })
              }
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Degree/Diploma
            </label>
            <input
              value={data.highSchool.degree}
              onChange={(e) =>
                updateNested("highSchool", { degree: e.target.value })
              }
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-[#130F45] mb-3">University</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name of School
            </label>
            <input
              value={data.university.schoolName}
              onChange={(e) =>
                updateNested("university", { schoolName: e.target.value })
              }
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Course of Study
            </label>
            <input
              value={data.university.course}
              onChange={(e) =>
                updateNested("university", { course: e.target.value })
              }
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Years of Study
            </label>
            <input
              value={data.university.years}
              onChange={(e) =>
                updateNested("university", { years: e.target.value })
              }
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Degree/Diploma
            </label>
            <input
              value={data.university.degree}
              onChange={(e) =>
                updateNested("university", { degree: e.target.value })
              }
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          List any seminars, classes or other education not listed above which
          may help qualify you for this position?
        </label>
        <textarea
          value={data.extra}
          onChange={(e) => onChange({ extra: e.target.value })}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
        />
      </div>
    </motion.div>
  );
}
