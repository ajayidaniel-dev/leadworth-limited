"use client";

import React from "react";
import { motion } from "framer-motion";
import { ApplicationData } from "./types";

export default function ReviewStep({ data }: { data: ApplicationData }) {
  return (
    <motion.div
      key="review"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-[#130F45]">
        Review your application
      </h3>
      <p className="text-sm text-gray-600">
        Please confirm the information below before submitting. You can go Back
        to edit any section.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-[#130F45] mb-2">Personal Info</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Name: {data.personalInfo.name || "—"}</li>
            <li>Street: {data.personalInfo.streetAddress || "—"}</li>
            <li>City: {data.personalInfo.city || "—"}</li>
            <li>State: {data.personalInfo.state || "—"}</li>
            <li>Home Phone: {data.personalInfo.homePhone || "—"}</li>
            <li>Mobile Phone: {data.personalInfo.mobilePhone || "—"}</li>
            <li>Email: {data.personalInfo.email || "—"}</li>
            <li>NIN: {data.personalInfo.nin || "—"}</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-[#130F45] mb-2">
            Employment Desired
          </h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>Position: {data.employmentDesired.position || "—"}</li>
            <li>
              Date Available: {data.employmentDesired.dateAvailable || "—"}
            </li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-[#130F45] mb-2">Education</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>HS - School: {data.education.highSchool.schoolName || "—"}</li>
            <li>HS - Course: {data.education.highSchool.course || "—"}</li>
            <li>HS - Years: {data.education.highSchool.years || "—"}</li>
            <li>HS - Degree: {data.education.highSchool.degree || "—"}</li>
            <li>Uni - School: {data.education.university.schoolName || "—"}</li>
            <li>Uni - Course: {data.education.university.course || "—"}</li>
            <li>Uni - Years: {data.education.university.years || "—"}</li>
            <li>Uni - Degree: {data.education.university.degree || "—"}</li>
            <li>Other: {data.education.extra || "—"}</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <h4 className="font-semibold text-[#130F45] mb-2">Languages</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>English: {data.languages.english || "—"}</li>
            <li>Hausa: {data.languages.hausa || "—"}</li>
            <li>Yoruba: {data.languages.yoruba || "—"}</li>
            <li>Igbo: {data.languages.igbo || "—"}</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 md:col-span-2">
          <h4 className="font-semibold text-[#130F45] mb-2">Attachments</h4>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>CV: {data.uploads.cvFile?.name || "—"}</li>
            <li>Cover Letter: {data.uploads.coverLetter ? "Provided" : "—"}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
