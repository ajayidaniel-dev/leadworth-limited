"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  HiOutlineArrowLeft,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineBuildingOffice,
  HiOutlineUserGroup,
  HiOutlineEnvelope,
  HiOutlineCheckCircle,
  HiOutlineBriefcase,
  HiOutlineXMark,
} from "react-icons/hi2";
import Wizard from "../../../components/application-wizard/Wizard";
import type { ApplicationData } from "../../../components/application-wizard/types";

// Toast Component
const Toast = ({
  message,
  type,
  onClose,
}: {
  message: string;
  type: "error" | "success";
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      className={`fixed top-4 right-4 z-50 max-w-md p-4 rounded-lg shadow-lg border-l-4 ${
        type === "error"
          ? "bg-red-50 border-red-400 text-red-800"
          : "bg-green-50 border-green-400 text-green-800"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {type === "error" ? (
            <svg
              className="w-5 h-5 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium">{message}</p>
        </div>
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <HiOutlineXMark className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

// Sample job data - you can replace with real data or fetch from API
const jobs = [
  {
    id: 1,
    title: "Team Lead - Operations",
    company: "",
    location: "Nigeria",
    type: "Full-time",
    salary: "Competitive (based on experience)",
    experience: "10+ years",
    department: "Operations",
    postedDate: "2025-08-20",
    description:
      "We are seeking an experienced Operations Team Lead for our client, one of the major players in the Oil and Gas industry based in Port Harcourt. The right candidate must have at least ten years of experience in Automated and Robotic Tank Cleaning with proven experience in managing degassing, dislodging tanks. The candidate must have background in project management and work well in a team.",
    fullDescription: `As the Team Lead - Operations, you will be responsible for coordinating and executing operational projects across multiple client sites. You will ensure that projects are delivered on time, within scope, and to the highest safety and quality standards while complying with HSSE regulations.

Key Responsibilities:
• Project Planning and Budgeting: Review scopes, develop detailed project plans, allocate resources, and manage budgets effectively.
• Project Execution: Lead project execution on-site, coordinate teams, monitor performance, resolve technical challenges, and ensure timely delivery.
• HSSE Compliance: Enforce strict adherence to HSSE policies, conduct safety briefings, and promote a safety-first culture.
• Reporting & Documentation: Maintain accurate project records, prepare progress reports, and provide timely updates to management and clients.

What We're Looking For:
• Degree in Mechanical or Petro-chemical Engineering
• COREN certification required
• 10+ years of experience in tank cleaning operations, NDT inspection, or related field
• Strong technical knowledge of HAZOP, HAZID, and JHA
• NEBOSH or equivalent safety certification
• Strong leadership, communication, and problem-solving skills
• Proven ability to manage operations across multiple projects

What We Offer:
• Competitive compensation package
• Opportunity to work on high-impact operational projects
• Professional growth and development
• Collaborative and safety-focused work environment
• Exposure to diverse client sites and operations`,
    requirements: [
      "Degree in Mechanical or Petro-chemical Engineering",
      "COREN certification",
      "10+ years of experience in tank cleaning operations, NDT inspection, or related field",
      "Strong knowledge of engineering principles, HAZOP, HAZID, JHA",
      "NEBOSH or equivalent safety certification",
      "Strong technical documentation skills",
      "Excellent leadership and team management abilities",
      "Strong problem-solving and communication skills",
    ],
    responsibilities: [
      "Plan, lead, and execute operational projects across multiple client sites",
      "Develop project plans, budgets, and timelines",
      "Coordinate project teams and allocate resources effectively",
      "Monitor project performance, productivity, and quality standards",
      "Ensure projects are delivered on time, within scope and budget",
      "Enforce HSSE policies and conduct safety briefings",
      "Maintain accurate project documentation and progress reports",
      "Collaborate with clients and stakeholders to ensure smooth operations",
      "Oversee equipment mobilization, usage, and demobilization",
      "Provide weekly and monthly quality and milestone reports",
    ],
    benefits: [
      "Competitive compensation package",
      "Professional development opportunities",
      "Collaborative and supportive work environment",
      "Exposure to diverse operational projects and client sites",
      "Health and safety-focused culture",
      "Career growth and advancement potential",
    ],
  },
];

export default function JobDetailPage() {
  const params = useParams();
  const jobId = parseInt(params.id as string);
  // const [cvFile, setCvFile] = useState<File | null>(null);
  const [toast, setToast] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [showPolicyModal, setShowPolicyModal] = useState(true);
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  // const loader = isSubmitting ? (
  //   <svg
  //     className="inline mr-2 h-5 w-5 animate-spin text-white align-middle"
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //   >
  //     <circle
  //       className="opacity-25"
  //       cx="12"
  //       cy="12"
  //       r="10"
  //       stroke="currentColor"
  //       strokeWidth="4"
  //     ></circle>
  //     <path
  //       className="opacity-75"
  //       fill="currentColor"
  //       d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
  //     ></path>
  //   </svg>
  // ) : null;
  // const [cvFile, setCvFile] = useState<File | null>(null);

  const job = jobs.find((j) => j.id === jobId);

  // Helper: get a human-readable label for a field
  // const getFieldLabel = (element: Element): string => {
  //   // Associated label via for/id
  //   if (element instanceof HTMLElement && element.id) {
  //     const associated = document.querySelector(`label[for="${element.id}"]`);
  //     if (associated?.textContent) return associated.textContent.trim();
  //   }
  //   // Nearest label in same container
  //   const container = element.closest("div");
  //   const inlineLabel = container?.querySelector("label");
  //   if (inlineLabel?.textContent) return inlineLabel.textContent.trim();
  //   // Table row header (for language rows)
  //   const rowCell = element.closest("tr")?.querySelector("td:first-child");
  //   if (rowCell?.textContent) return rowCell.textContent.trim();
  //   // Section headings (fallback)
  //   const sectionHeading = element
  //     .closest(".bg-gray-50, .p-6")
  //     ?.querySelector("h3, h4");
  //   if (sectionHeading?.textContent) return sectionHeading.textContent.trim();
  //   // Name or placeholder as last resort
  //   if ((element as HTMLInputElement).name)
  //     return (element as HTMLInputElement).name;
  //   const placeholder = (element as HTMLInputElement | HTMLTextAreaElement)
  //     .placeholder;
  //   if (placeholder) return placeholder.trim();
  //   return "Field";
  // };

  // Helper: get the section title a field belongs to
  // const getFieldSection = (element: Element): string => {
  //   const section = element.closest(
  //     ".bg-gray-50.p-6, .bg-gray-50.rounded-xl.p-6, .p-6"
  //   );
  //   const heading = section?.querySelector("h3, h4");
  //   const text = heading?.textContent?.trim();
  //   return text && text.length > 0 ? text : "General";
  // };

  // Helper: Build a polished HTML email grouped by sections
  // const buildEmailHtml = (): string => {
  //   const formRoot = document.querySelector(
  //     "#application-form form"
  //   ) as HTMLFormElement | null;

  //   const title =
  //     `Employment Application - ${job?.title ?? ""} ${job?.company ? `- ${job?.company}` : ""}`.trim();

  //   if (!formRoot) {
  //     return `<div style=\"font-family: Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif; color:#130F45;\"><h2>${title}</h2><p>No form data found.</p></div>`;
  //   }

  //   type SectionData = { label: string; value: string }[];
  //   const sectionToRows = new Map<string, SectionData>();
  //   const processedRadioNames = new Set<string>();

  //   const addRow = (section: string, label: string, value: string) => {
  //     if (!value || !label) return;
  //     const rows = sectionToRows.get(section) ?? [];
  //     rows.push({ label, value });
  //     sectionToRows.set(section, rows);
  //   };

  //   const elements = Array.from(
  //     formRoot.querySelectorAll("input, textarea, select")
  //   ) as (HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement)[];

  //   for (const el of elements) {
  //     if (el instanceof HTMLInputElement && el.type === "file") continue;

  //     if (el instanceof HTMLInputElement && el.type === "radio") {
  //       if (!el.name || processedRadioNames.has(el.name)) continue;
  //       processedRadioNames.add(el.name);
  //       const checked = formRoot.querySelector(
  //         `input[type="radio"][name="${el.name}"]:checked`
  //       ) as HTMLInputElement | null;
  //       const value = checked?.value ?? "Not specified";
  //       let label = "";
  //       const rowCell = checked?.closest("tr")?.querySelector("td:first-child");
  //       if (rowCell?.textContent) {
  //         label = `${rowCell.textContent.trim()} (Proficiency)`;
  //       } else {
  //         label = getFieldLabel(el);
  //       }
  //       const section = getFieldSection(el);
  //       addRow(section, label, value);
  //       continue;
  //     }

  //     const label = getFieldLabel(el);
  //     const section = getFieldSection(el);
  //     let value = "";
  //     if (el instanceof HTMLInputElement) value = el.value ?? "";
  //     else if (el instanceof HTMLTextAreaElement) value = el.value ?? "";
  //     else if (el instanceof HTMLSelectElement) value = el.value ?? "";
  //     addRow(section, label, value);
  //   }

  //   const sectionHtml = Array.from(sectionToRows.entries())
  //     .map(([section, rows]) => {
  //       const rowsHtml = rows
  //         .filter((r) => r.value && r.value.trim().length > 0)
  //         .map(
  //           ({ label, value }) => `
  //             <tr>
  //               <td style=\"padding:10px 12px; border-bottom:1px solid #eef2f7; width:45%; color:#130F45; font-weight:600;\">${label}</td>
  //               <td style=\"padding:10px 12px; border-bottom:1px solid #eef2f7; color:#334155;\">${value.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
  //             </tr>`
  //         )
  //         .join("\n");
  //       if (!rowsHtml) return "";
  //       return `
  //         <h3 style=\"margin:24px 0 8px; color:#130F45; font-size:16px; letter-spacing:.3px;\">${section}</h3>
  //         <table role=\"presentation\" cellspacing=\"0\" cellpadding=\"0\" style=\"width:100%; border-collapse:collapse; background:#fff; border:1px solid #eef2f7; border-radius:10px; overflow:hidden;\">
  //           <tbody>
  //             ${rowsHtml}
  //           </tbody>
  //         </table>`;
  //     })
  //     .join("\n");

  //   const header = `
  //     <div style=\"background:linear-gradient(135deg, #130F45 0%, #F45625 100%); padding:20px 24px; border-radius:14px; color:#fff;\">
  //       <div style=\"font-size:14px; opacity:.9;\">Leadworth Consulting</div>
  //       <div style=\"font-size:20px; font-weight:700; margin-top:4px;\">${title}</div>
  //       <div style=\"font-size:12px; opacity:.9; margin-top:6px;\">Submitted on ${new Date().toLocaleString()}</div>
  //     </div>`;

  //   const footer = `
  //     <div style=\"margin-top:24px; font-size:12px; color:#64748b;\">
  //       This application was submitted through the Leadworth Consulting website.
  //     </div>`;

  //   const html = `
  //     <div style=\"font-family: Inter, -apple-system, Segoe UI, Roboto, Arial, sans-serif; background:#f8f9fb; padding:24px; color:#0f172a;\">
  //       <div style=\"max-width:760px; margin:0 auto;\">
  //         ${header}
  //         <div style=\"margin-top:16px;\">
  //           ${sectionHtml}
  //         </div>
  //         ${footer}
  //       </div>
  //     </div>`;

  //   return html;
  // };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  if (!job) {
    return (
      <div className="min-h-screen bg-[#F8F9FB] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#130F45] mb-4">
            Job Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The job you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/careers"
            className="px-6 py-3 bg-[#F45625] text-white rounded-lg font-semibold hover:bg-[#e04a1f] transition-colors duration-300"
          >
            Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    setIsWizardOpen(true);
  };
  // console.log(cvFile);

  return (
    <main className="bg-[#F8F9FB] min-h-screen">
      {/* Toast Notification */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      {/* Policy agreement modal */}
      {showPolicyModal && job && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="policy-modal-heading"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
            <h2
              id="policy-modal-heading"
              className="text-xl md:text-2xl font-bold text-[#130F45] mb-4"
            >
              Before you apply
            </h2>
            <p className="text-gray-700 mb-6">
              Please read our{" "}
              <Link
                href="/privacy"
                className="text-[#F45625] underline hover:text-[#130F45] font-medium"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy#retention"
                className="text-[#F45625] underline hover:text-[#130F45] font-medium"
              >
                Data Retention Policy
              </Link>{" "}
              before proceeding with your application.
            </p>
            <div className="flex items-start gap-3 mb-6">
              <input
                type="checkbox"
                id="policy-agreement"
                checked={agreedToPolicy}
                onChange={(e) => setAgreedToPolicy(e.target.checked)}
                className="mt-1 h-5 w-5 rounded border-gray-300 text-[#F45625] focus:ring-[#F45625]"
              />
              <label
                htmlFor="policy-agreement"
                className="text-gray-700 cursor-pointer select-none"
              >
                I have read and agree to the Privacy Policy and Data Retention
                Policy.
              </label>
            </div>
            <button
              type="button"
              onClick={() => setShowPolicyModal(false)}
              disabled={!agreedToPolicy}
              className={`w-full px-6 py-3 rounded-xl font-semibold transition-colors duration-300 ${
                agreedToPolicy
                  ? "bg-[#F45625] text-white hover:bg-[#e04a1f]"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
              }`}
            >
              Proceed
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between"
          >
            <Link
              href="/careers"
              className="flex items-center gap-2 text-[#F45625] hover:text-[#e04a1f] transition-colors"
            >
              <HiOutlineArrowLeft className="w-5 h-5" />
              Back to Careers
            </Link>
            <div className="text-sm text-gray-500">
              Posted {new Date(job.postedDate).toLocaleDateString()}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-8 mb-8"
        >
          {/* Job Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between mb-4">
              <div className="">
                <h1 className=" text-[18px] md:text-3xl  font-extrabold text-[#130F45] mb-2">
                  {job.title}
                </h1>
                <p className="text-xl text-[#F45625] font-semibold mb-4">
                  {job.company}
                </p>
              </div>
              <span className="px-2 py-1 md:px-4 md:py-2 bg-[#F45625]/10 text-[#F45625] rounded-full md:text-sm text-xs font-semibold">
                {job.type}
              </span>
            </div>

            {/* Job Meta */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <HiOutlineMapPin className="w-5 h-5" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <HiOutlineCurrencyDollar className="w-5 h-5" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <HiOutlineClock className="w-5 h-5" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <HiOutlineBuildingOffice className="w-5 h-5" />
                <span>{job.department}</span>
              </div>
            </div>

            {/* Apply Button */}
            <motion.button
              onClick={handleApply}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-8 py-4 bg-[#F45625] text-white rounded-xl font-semibold hover:bg-[#e04a1f] transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <HiOutlineEnvelope className="w-5 h-5" />
              Apply for this Position
            </motion.button>
          </div>

          {/* Job Description */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-[#130F45] mb-4">
              Job Description
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {job.fullDescription}
            </div>
          </div>
        </motion.div>
        <Wizard
          open={isWizardOpen}
          onClose={() => setIsWizardOpen(false)}
          jobTitle={job.title}
          company={job.company}
          onSubmitWithEmail={async (
            data: ApplicationData,
            emailHtml: string
          ) => {
            try {
              const formData = new FormData();
              formData.append("name", "Job Applicant");
              formData.append("mail", "leadworthconsultinglimited@gmail.com");
              formData.append(
                "subject",
                `Employment Application - ${job.title} - ${job.company}`
              );
              formData.append("html", emailHtml);
              if (data.uploads.cvFile) {
                formData.append(
                  "attachments",
                  data.uploads.cvFile,
                  data.uploads.cvFile.name
                );
              }

              const response = await fetch(
                "https://techxmail.onrender.com/sendmail",
                {
                  method: "POST",
                  body: formData,
                }
              );

              if (!response.ok) throw new Error("Failed to send application");

              setToast({
                message: `✅ Application submitted successfully! and details have been sent.`,
                type: "success",
              });

              setTimeout(() => window.location.reload(), 4000);
            } catch (err) {
              console.error("Error sending application:", err);
              setToast({
                message: "❌ Failed to submit application",
                type: "error",
              });
            }
          }}
        />

        {/* Requirements & Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6"
          >
            <h3 className="text-xl font-bold text-[#130F45] mb-4 flex items-center gap-2">
              <HiOutlineCheckCircle className="w-6 h-6 text-[#F45625]" />
              Requirements
            </h3>
            <ul className="space-y-3">
              {job.requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#F45625] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6"
          >
            <h3 className="text-xl font-bold text-[#130F45] mb-4 flex items-center gap-2">
              <HiOutlineBriefcase className="w-6 h-6 text-[#F45625]" />
              Key Responsibilities
            </h3>
            <ul className="space-y-3">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#F45625] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{resp}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6 mb-8"
        >
          <h3 className="text-xl font-bold text-[#130F45] mb-4 flex items-center gap-2">
            <HiOutlineUserGroup className="w-6 h-6 text-[#F45625]" />
            What We Offer
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {job.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#F45625] rounded-full" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CV Upload */}
        {/* <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-[#130F45] mb-4 flex items-center gap-2">
            <svg
              className="w-6 h-6 text-[#F45625]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            CV/RESUME UPLOAD
          </h3>

          <div className="space-y-4">
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
                      htmlFor="cv-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-[#F45625] hover:text-[#e04a1f] focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-[#F45625]"
                    >
                      <span>Upload a file</span>
                      <input
                        id="cv-upload"
                        name="cv-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            // ✅ Check file size (5MB = 5 * 1024 * 1024 bytes)
                            if (file.size > 5 * 1024 * 1024) {
                              setToast({
                                message: "File size must be less than 5MB",
                                type: "error",
                              });
                              e.target.value = ""; // clear the input
                              return;
                            }

                            // Update the display
                            const fileName =
                              document.getElementById("cv-file-name");
                            if (fileName) {
                              fileName.textContent = file.name;
                              fileName.className =
                                "text-sm text-gray-900 font-medium";
                            }

                            // Store file in state
                            setCvFile(file);
                          }
                        }}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PDF, DOC, DOCX up to 5MB
                  </p>
                </div>
              </div>
              <div id="cv-file-name" className="mt-2 text-sm text-gray-500">
                No file selected
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Letter (Optional)
              </label>
              <textarea
                name="coverLetter"
                rows={4}
                placeholder="Please provide a brief cover letter explaining why you are interested in this position and how your skills and experience make you a good fit..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2  focus:ring-[#F45625] focus:border-transparent"
              ></textarea>
            </div>
          </div>
        </div> */}

        {/* Submit Button */}
        {/* <div className="text-center pt-6">
          <motion.button
            type="button"
            onClick={async () => {
              // 1. Validate required fields (your existing validation logic)
              const requiredFields = [
                { selector: 'input[name="name"]', label: "Name" },
                {
                  selector: 'input[name="streetAddress"]',
                  label: "Street Address",
                },
                { selector: 'input[name="city"]', label: "City" },
                { selector: 'input[name="state"]', label: "State" },
                {
                  selector: 'input[name="homePhone"]',
                  label: "Home Phone Number",
                },
                {
                  selector: 'input[name="mobilePhone"]',
                  label: "Mobile Phone Number",
                },
                { selector: 'input[name="email"]', label: "Email Address" },
                { selector: 'input[name="nin"]', label: "NIN" },
                {
                  selector: 'input[name="dateAvailable"]',
                  label: "Date Available for Work",
                },
              ];

              const missingFields: string[] = [];

              requiredFields.forEach(({ selector, label }) => {
                const field = document.querySelector(
                  selector
                ) as HTMLInputElement;
                if (!field || !field.value.trim()) {
                  missingFields.push(label);
                  field?.classList.add("border-red-500", "ring-red-500");
                } else {
                  field?.classList.remove("border-red-500", "ring-red-500");
                }
              });

              if (!cvFile) {
                missingFields.push("CV/Resume");
                const uploadArea = document.querySelector(".border-dashed");
                uploadArea?.classList.add("border-red-500");
              }

              const languageSelected =
                document.querySelector('input[name="english"]:checked') ||
                document.querySelector('input[name="hausa"]:checked') ||
                document.querySelector('input[name="yoruba"]:checked') ||
                document.querySelector('input[name="igbo"]:checked');

              if (!languageSelected) missingFields.push("Language Proficiency");

              const contactSelected = document.querySelector(
                'input[name="contactCurrent"]:checked'
              );
              if (!contactSelected)
                missingFields.push("Contact Current Employer");

              if (missingFields.length > 0) {
                setToast({
                  message: `Please fill in the following required fields:\n\n${missingFields.join("\n")}`,
                  type: "error",
                });
                return;
              }

              // 2. Collect all form values (text + styled HTML)
              // const emailBody = buildEmailBody();
              const emailHtml = buildEmailHtml();

              // 3. Send to your backend mailer (multipart/form-data)
              setIsSubmitting(true);
              try {
                const formData = new FormData();
                formData.append("name", "Job Applicant");
                formData.append("mail", "leadworthconsultinglimited@gmail.com"); // 👈 replace with your real inbox
                formData.append(
                  "subject",
                  `Employment Application - ${job.title} - ${job.company}`
                );
                formData.append("html", emailHtml);
                if (cvFile) {
                  formData.append("attachments", cvFile, cvFile.name);
                }

                const response = await fetch(
                  "https://techxmail.onrender.com/sendmail",
                  {
                    method: "POST",
                    body: formData,
                  }
                );

                if (!response.ok) throw new Error("Failed to send application");

                setToast({
                  message: `✅ Application submitted successfully! and details have been sent.`,
                  type: "success",
                });

                setTimeout(() => window.location.reload(), 4000);
              } catch (err) {
                console.error("Error sending application:", err);
                setToast({
                  message: "❌ Failed to submit application",
                  type: "error",
                });
              } finally {
                setIsSubmitting(false);
              }
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-4 bg-[#F45625] text-white rounded-xl font-semibold shadow-lg hover:bg-[#e04a1f] transition-all duration-300 text-lg disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {loader}
            Submit Application
          </motion.button>
        </div> */}
      </section>
    </main>
  );
}
