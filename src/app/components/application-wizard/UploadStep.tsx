"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApplicationData } from "./types";

export default function UploadStep({
  data,
  onChange,
  onToast,
}: {
  data: ApplicationData["uploads"];
  onChange: (partial: Partial<ApplicationData["uploads"]>) => void;
  onToast?: (msg: string, type: "error" | "success") => void;
}) {
  return (
    <motion.div
      key="upload"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-50 rounded-xl p-6 space-y-4"
    >
      <h3 className="text-xl font-bold text-[#130F45]">CV/RESUME UPLOAD</h3>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Upload CV/Resume (PDF, DOC, DOCX) *
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-[#F45625] transition-colors">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="cv-upload-wizard"
                className="relative cursor-pointer bg-white rounded-md font-medium text-[#F45625] hover:text-[#e04a1f] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#F45625]"
              >
                <span>Upload a file</span>
                <input
                  id="cv-upload-wizard"
                  name="cv-upload-wizard"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="sr-only"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    if (file.size > 5 * 1024 * 1024) {
                      onToast?.("File size must be less than 5MB", "error");
                      e.currentTarget.value = "";
                      return;
                    }
                    onChange({ cvFile: file });
                  }}
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 5MB</p>
          </div>
        </div>
        <div className="mt-2 text-sm text-gray-900 font-medium">
          {data.cvFile ? data.cvFile.name : "No file selected"}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cover Letter (Optional)
        </label>
        <textarea
          value={data.coverLetter}
          onChange={(e) => onChange({ coverLetter: e.target.value })}
          rows={4}
          placeholder="Please provide a brief cover letter explaining why you are interested in this position and how your skills and experience make you a good fit..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2  focus:ring-[#F45625] focus:border-transparent"
        />
      </div>
    </motion.div>
  );
}
