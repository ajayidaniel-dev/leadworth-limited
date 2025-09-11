"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import StepIndicator, { Step } from "./StepIndicator";
import TermsStep from "./TermsStep";
import PersonalInfoStep from "./PersonalInfoStep";
import EmploymentDesiredStep from "./EmploymentDesiredStep";
import EducationStep from "./EducationStep";
import EmploymentHistoryStep from "./EmploymentHistoryStep";
import LanguagesStep from "./LanguagesStep";
import UploadStep from "./UploadStep";
import ReviewStep from "./ReviewStep";
import { ApplicationData, createInitialApplicationData } from "./types";

export type WizardProps = {
  open: boolean;
  onClose: () => void;
  jobTitle: string;
  company?: string;
  onSubmitWithEmail: (
    data: ApplicationData,
    emailHtml: string
  ) => Promise<void>;
};

export default function Wizard({
  open,
  onClose,
  jobTitle,
  company,
  onSubmitWithEmail,
}: WizardProps) {
  const [data, setData] = useState<ApplicationData>(() =>
    createInitialApplicationData(jobTitle)
  );
  const [current, setCurrent] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const steps: Step[] = useMemo(
    () => [
      { key: "terms", label: "Terms" },
      { key: "personal", label: "Personal Info" },
      { key: "desired", label: "Employment Desired" },
      { key: "education", label: "Education" },
      { key: "history", label: "Employment History" },
      { key: "languages", label: "Languages" },
      { key: "upload", label: "Upload" },
      { key: "review", label: "Review & Submit" },
    ],
    []
  );

  const canGoNext = () => {
    if (steps[current].key === "terms") return data.agreedToTerms;
    return true;
  };

  const goNext = () => {
    if (!canGoNext()) return;
    setCurrent((c) => Math.min(c + 1, steps.length - 1));
  };
  const goBack = () => setCurrent((c) => Math.max(c - 1, 0));

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const html = buildHtmlFromState();
      await onSubmitWithEmail(data, html);
      onClose();
    } finally {
      setSubmitting(false);
    }
  };

  const escapeHtml = (v: string) =>
    v.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const buildHtmlFromState = () => {
    const title = `Employment Application - ${jobTitle}${company ? ` - ${company}` : ""}`;
    const sections: {
      heading: string;
      rows: { label: string; value: string }[];
    }[] = [
      {
        heading: "Personal Information",
        rows: [
          { label: "Name", value: data.personalInfo.name },
          { label: "Street Address", value: data.personalInfo.streetAddress },
          { label: "City", value: data.personalInfo.city },
          { label: "State", value: data.personalInfo.state },
          { label: "Home Phone Number", value: data.personalInfo.homePhone },
          {
            label: "Mobile Phone Number",
            value: data.personalInfo.mobilePhone,
          },
          { label: "E-Mail Address", value: data.personalInfo.email },
          { label: "NIN", value: data.personalInfo.nin },
        ],
      },
      {
        heading: "Employment Desired",
        rows: [
          {
            label: "Position Applied For",
            value: data.employmentDesired.position,
          },
          {
            label: "Date Available For Work",
            value: data.employmentDesired.dateAvailable,
          },
        ],
      },
      {
        heading: "Education - High School",
        rows: [
          {
            label: "Name of School",
            value: data.education.highSchool.schoolName,
          },
          { label: "Course of Study", value: data.education.highSchool.course },
          {
            label: "Total Years of Study",
            value: data.education.highSchool.years,
          },
          { label: "Degree/Diploma", value: data.education.highSchool.degree },
        ],
      },
      {
        heading: "Education - University",
        rows: [
          {
            label: "Name of School",
            value: data.education.university.schoolName,
          },
          { label: "Course of Study", value: data.education.university.course },
          {
            label: "Total Years of Study",
            value: data.education.university.years,
          },
          { label: "Degree/Diploma", value: data.education.university.degree },
          { label: "Other Education", value: data.education.extra },
        ],
      },
      {
        heading: "Employment History",
        rows: [
          {
            label: "May we contact your current employer?",
            value: data.employmentHistory.contactCurrent || "Not specified",
          },
          ...data.employmentHistory.entries.flatMap((e, index) => [
            { label: `Entry ${index + 1} - Current`, value: e.current },
            { label: `Entry ${index + 1} - Employer`, value: e.employer },
            {
              label: `Entry ${index + 1} - Job Position(s)`,
              value: e.positions,
            },
            { label: `Entry ${index + 1} - Start Date`, value: e.startDate },
            { label: `Entry ${index + 1} - End Date`, value: e.endDate },
            {
              label: `Entry ${index + 1} - Starting Salary`,
              value: e.startingSalary,
            },
            {
              label: `Entry ${index + 1} - Ending Salary`,
              value: e.endingSalary,
            },
            { label: `Entry ${index + 1} - Address`, value: e.address },
            { label: `Entry ${index + 1} - City, State`, value: e.cityState },
            { label: `Entry ${index + 1} - Phone Number`, value: e.phone },
            {
              label: `Entry ${index + 1} - Supervisor Email`,
              value: e.supervisorEmail,
            },
            {
              label: `Entry ${index + 1} - Essential Job Functions`,
              value: e.essentialFunctions,
            },
            {
              label: `Entry ${index + 1} - Reason(s) for Leaving`,
              value: e.reasonForLeaving,
            },
          ]),
        ],
      },
      {
        heading: "Languages",
        rows: [
          {
            label: "English (Proficiency)",
            value: data.languages.english || "",
          },
          { label: "Hausa (Proficiency)", value: data.languages.hausa || "" },
          { label: "Yoruba (Proficiency)", value: data.languages.yoruba || "" },
          { label: "Igbo (Proficiency)", value: data.languages.igbo || "" },
        ],
      },
      {
        heading: "Attachments",
        rows: [
          {
            label: "CV/Resume",
            value: data.uploads.cvFile?.name || "Not attached",
          },
          { label: "Cover Letter", value: data.uploads.coverLetter },
        ],
      },
    ];

    const sectionHtml = sections
      .map(({ heading, rows }) => {
        const rowsHtml = rows
          .filter((r) => r.value && r.value.trim().length > 0)
          .map(
            ({ label, value }) => `
              <tr>
                <td style=\"padding:10px 12px; border-bottom:1px solid #eef2f7; width:45%; color:#130F45; font-weight:600;\">${escapeHtml(
                  label
                )}</td>
                <td style=\"padding:10px 12px; border-bottom:1px solid #eef2f7; color:#334155;\">${escapeHtml(
                  value
                )}</td>
              </tr>`
          )
          .join("\n");
        if (!rowsHtml) return "";
        return `
          <h3 style=\"margin:24px 0 8px; color:#130F45; font-size:16px; letter-spacing:.3px;\">${escapeHtml(
            heading
          )}</h3>
          <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%; border-collapse:collapse; background:#fff; border:1px solid #eef2f7; border-radius:10px; overflow:hidden;\">
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>`;
      })
      .join("\n");

    const header = `
      <div style=\"background:linear-gradient(135deg, #130F45 0%, #F45625 100%); padding:20px 24px; border-radius:14px; color:#fff;\">
        <div style=\"font-size:14px; opacity:.9;\">Leadworth Consulting</div>
        <div style=\"font-size:20px; font-weight:700; margin-top:4px;\">${escapeHtml(
          title
        )}</div>
        <div style=\"font-size:12px; opacity:.9; margin-top:6px;\">Submitted on ${new Date().toLocaleString()}</div>
      </div>`;

    const footer = `
      <div style=\"margin-top:24px; font-size:12px; color:#64748b;\">
        This application was submitted through the Leadworth Consulting website.
      </div>`;

    const html = `
      <div style=\"font-family: Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#f8f9fb; padding:24px; color:#0f172a;\">
        <div style=\"max-width:760px; margin:0 auto;\">
          ${header}
          <div style=\"margin-top:16px;\">
            ${sectionHtml}
          </div>
          ${footer}
        </div>
      </div>`;
    return html;
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Apply • ${jobTitle}${company ? ` • ${company}` : ""}`}
    >
      <StepIndicator steps={steps} currentIndex={current} />

      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          {steps[current].key === "terms" && (
            <TermsStep
              key="s-terms"
              agreedToTerms={data.agreedToTerms}
              onToggleAgree={(v) =>
                setData((d) => ({ ...d, agreedToTerms: v }))
              }
            />
          )}
          {steps[current].key === "personal" && (
            <PersonalInfoStep
              key="s-personal"
              data={data.personalInfo}
              onChange={(patch) =>
                setData((d) => ({
                  ...d,
                  personalInfo: { ...d.personalInfo, ...patch },
                }))
              }
            />
          )}
          {steps[current].key === "desired" && (
            <EmploymentDesiredStep
              key="s-desired"
              data={data.employmentDesired}
              onChange={(patch) =>
                setData((d) => ({
                  ...d,
                  employmentDesired: { ...d.employmentDesired, ...patch },
                }))
              }
            />
          )}
          {steps[current].key === "education" && (
            <EducationStep
              key="s-education"
              data={data.education}
              onChange={(patch) =>
                setData((d) => ({
                  ...d,
                  education: { ...d.education, ...patch },
                }))
              }
            />
          )}
          {steps[current].key === "history" && (
            <EmploymentHistoryStep
              key="s-history"
              data={data.employmentHistory}
              onChange={(patch) =>
                setData((d) => ({
                  ...d,
                  employmentHistory: { ...d.employmentHistory, ...patch },
                }))
              }
            />
          )}
          {steps[current].key === "languages" && (
            <LanguagesStep
              key="s-languages"
              data={data.languages}
              onChange={(patch) =>
                setData((d) => ({
                  ...d,
                  languages: { ...d.languages, ...patch },
                }))
              }
            />
          )}
          {steps[current].key === "upload" && (
            <UploadStep
              key="s-upload"
              data={data.uploads}
              onChange={(patch) =>
                setData((d) => ({ ...d, uploads: { ...d.uploads, ...patch } }))
              }
            />
          )}
          {steps[current].key === "review" && (
            <ReviewStep key="s-review" data={data} />
          )}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          onClick={current === 0 ? onClose : goBack}
          className="px-4 py-2 rounded-lg border border-gray-300 text-[#130F45] hover:bg-gray-50"
        >
          {current === 0 ? "Close" : "Back"}
        </button>
        <div className="flex items-center gap-3">
          {current < steps.length - 1 && (
            <button
              onClick={goNext}
              disabled={!canGoNext()}
              className={`px-5 py-2 rounded-lg font-semibold text-white transition-colors ${
                canGoNext()
                  ? "bg-[#F45625] hover:bg-[#e04a1f]"
                  : "bg-[#F45625]/40 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          )}
          {current === steps.length - 1 && (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-5 py-2 rounded-lg font-semibold text-white bg-[#F45625] hover:bg-[#e04a1f]"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
