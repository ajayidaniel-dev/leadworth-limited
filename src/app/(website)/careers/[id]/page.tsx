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
    company: "Ardrend Limited",
    location: "Nigeria",
    type: "Full-time",
    salary: "Competitive (based on experience)",
    experience: "10+ years",
    department: "Operations",
    postedDate: "2025-08-20",
    description:
      "The Team Lead - Operations is responsible for planning, leading, and executing Ardrend’s operations across multiple client sites, ensuring projects are delivered on time, within budget, and to the highest safety and quality standards.",
    fullDescription: `As the Team Lead - Operations at Ardrend Limited, you will be responsible for coordinating and executing operational projects across multiple client sites. You will ensure that projects are delivered on time, within scope, and to the highest safety and quality standards while complying with HSSE regulations.

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
  const [toast, setToast] = useState<{
    message: string;
    type: "error" | "success";
  } | null>(null);

  const job = jobs.find((j) => j.id === jobId);

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
    const subject = `Application for ${job.title} - ${job.company}`;
    const body = `Dear Hiring Manager,

I am writing to express my interest in the ${job.title} position at ${job.company}.

Please find my CV attached to this email.

I look forward to discussing how my skills and experience align with your requirements.

Best regards,
[Your Name]`;

    window.location.href = `mailto:careers@leadworthconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#130F45] mb-2">
                  {job.title}
                </h1>
                <p className="text-xl text-[#F45625] font-semibold mb-4">
                  {job.company}
                </p>
              </div>
              <span className="px-4 py-2 bg-[#F45625]/10 text-[#F45625] rounded-full text-sm font-semibold">
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

        {/* Apply CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="bg-gradient-to-br from-[#130F45] to-[#F45625] rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Send your CV to careers@leadworthconsulting.com with the subject
            line &quot;Application for {job.title} - {job.company}&quot;
          </p>
          <motion.button
            onClick={handleApply}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-[#F45625] rounded-xl font-semibold shadow-lg hover:bg-[#FFE5DC] transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <HiOutlineEnvelope className="w-5 h-5" />
            Apply Now
          </motion.button>
        </motion.div> */}

        {/* Employment Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-8 mt-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#130F45] mb-2">
              Employment Application Form
            </h2>
            <p className="text-gray-600">
              Please fill out this form completely for the position of{" "}
              <strong className="text-[#F45625]">{job.title}</strong>
            </p>
          </div>

          <form className="space-y-8">
            {/* Personal Information */}
            <div className="bg-gray-50 rounded-xl p-6">
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
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                PERSONAL INFORMATION
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name (Last, First, MI)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Home Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    E-Mail Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    NIN (National Identification Number)
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Employment Desired */}
            <div className="bg-gray-50 rounded-xl p-6">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
                EMPLOYMENT DESIRED
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For
                  </label>
                  <input
                    type="text"
                    value={job.title}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Date Available For Work
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-50 rounded-xl p-6">
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
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
                EDUCATION
              </h3>

              <div className="space-y-6">
                {/* High School */}
                <div>
                  <h4 className="font-semibold text-[#130F45] mb-3">
                    High School
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name of School
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course of Study
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Years of Study
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Degree/Diploma
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                {/* University */}
                <div>
                  <h4 className="font-semibold text-[#130F45] mb-3">
                    University
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name of School
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Course of Study
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Years of Study
                      </label>
                      <input
                        type="number"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Degree/Diploma
                      </label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    List any seminars, classes or other education not listed
                    above which may help qualify you for this position?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Employment History */}
            <div className="bg-gray-50 rounded-xl p-6">
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
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                  />
                </svg>
                EMPLOYMENT HISTORY
              </h3>

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-4">
                  List below the most recent jobs you occupied; You must
                  complete this section even if attaching a resume.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">
                    May we contact your current employer?
                  </span>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="contactCurrent"
                        value="yes"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">YES</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="contactCurrent"
                        value="no"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">NO</span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Employment Entry 1 */}
              <div className="border border-gray-300 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <h4 className="font-semibold text-[#130F45]">1.</h4>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="current1"
                        value="yes"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">Current</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="current1"
                        value="no"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employer
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Position(s)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Starting Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ending Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City, State
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail Address of Supervisor
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Essential Job Functions of Final Position
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason(s) for Leaving?
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Employment Entry 2 */}
              <div className="border border-gray-300 rounded-lg p-4 mb-4">
                <div className="flex items-center gap-4 mb-4">
                  <h4 className="font-semibold text-[#130F45]">2.</h4>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="current2"
                        value="yes"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">Current</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="current2"
                        value="no"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employer
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Position(s)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Starting Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ending Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City, State
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail Address of Supervisor
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Essential Job Functions of Final Position
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason(s) for Leaving?
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Employment Entry 3 */}
              <div className="border border-gray-300 rounded-lg p-4">
                <div className="flex items-center gap-4 mb-4">
                  <h4 className="font-semibold text-[#130F45]">3.</h4>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="current3"
                        value="yes"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">Current</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="current3"
                        value="no"
                        className="text-[#F45625]"
                      />
                      <span className="text-sm">No</span>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Employer
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Position(s)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Starting Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ending Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City, State
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-Mail Address of Supervisor
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Essential Job Functions of Final Position
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Reason(s) for Leaving?
                    </label>
                    <textarea
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F45625] focus:border-transparent"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="bg-gray-50 rounded-xl p-6">
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
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  />
                </svg>
                LANGUAGES
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 px-4 font-medium text-gray-700">
                        Language
                      </th>
                      <th className="text-center py-2 px-4 font-medium text-gray-700">
                        Fluent
                      </th>
                      <th className="text-center py-2 px-4 font-medium text-gray-700">
                        Excellent
                      </th>
                      <th className="text-center py-2 px-4 font-medium text-gray-700">
                        Good
                      </th>
                      <th className="text-center py-2 px-4 font-medium text-gray-700">
                        Fair
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-[#130F45]">
                        ENGLISH
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="fluent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="excellent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="good"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="english"
                          value="fair"
                          className="text-[#F45625]"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-[#130F45]">
                        HAUSA
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="hausa"
                          value="fluent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="hausa"
                          value="excellent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="hausa"
                          value="good"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="hausa"
                          value="fair"
                          className="text-[#F45625]"
                        />
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium text-[#130F45]">
                        YORUBA
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="yoruba"
                          value="fluent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="yoruba"
                          value="excellent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="yoruba"
                          value="good"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="yoruba"
                          value="fair"
                          className="text-[#F45625]"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#130F45]">
                        IGBO
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="igbo"
                          value="fluent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="igbo"
                          value="excellent"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="igbo"
                          value="good"
                          className="text-[#F45625]"
                        />
                      </td>
                      <td className="py-3 px-4 text-center">
                        <input
                          type="radio"
                          name="igbo"
                          value="fair"
                          className="text-[#F45625]"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <motion.button
                type="button"
                onClick={() => {
                  // Validate required fields
                  const requiredFields = [
                    { selector: 'input[type="text"]', label: "Name" },
                    {
                      selector: 'input[type="text"]:nth-of-type(2)',
                      label: "Street Address",
                    },
                    {
                      selector: 'input[type="text"]:nth-of-type(3)',
                      label: "City",
                    },
                    {
                      selector: 'input[type="text"]:nth-of-type(4)',
                      label: "State",
                    },
                    {
                      selector: 'input[type="tel"]',
                      label: "Home Phone Number",
                    },
                    {
                      selector: 'input[type="tel"]:nth-of-type(2)',
                      label: "Mobile Phone Number",
                    },
                    { selector: 'input[type="email"]', label: "Email Address" },
                    {
                      selector: 'input[type="text"]:nth-of-type(7)',
                      label: "NIN",
                    },
                    {
                      selector: 'input[type="date"]',
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
                      // Add visual error indication
                      field?.classList.add("border-red-500", "ring-red-500");
                    } else {
                      // Remove error indication if field is filled
                      field?.classList.remove("border-red-500", "ring-red-500");
                    }
                  });

                  // Check if at least one language is selected
                  const languageSelected =
                    document.querySelector('input[name="english"]:checked') ||
                    document.querySelector('input[name="hausa"]:checked') ||
                    document.querySelector('input[name="yoruba"]:checked') ||
                    document.querySelector('input[name="igbo"]:checked');

                  if (!languageSelected) {
                    missingFields.push("Language Proficiency");
                  }

                  // Check if contact current employer is selected
                  const contactSelected = document.querySelector(
                    'input[name="contactCurrent"]:checked'
                  );
                  if (!contactSelected) {
                    missingFields.push("Contact Current Employer");
                  }

                  if (missingFields.length > 0) {
                    // Show error message
                    setToast({
                      message: `Please fill in the following required fields:\n\n${missingFields.join("\n")}\n\nPlease complete all required fields before submitting.`,
                      type: "error",
                    });
                    return;
                  }

                  // Collect form data
                  const formData = new FormData();

                  // Get all form inputs
                  const inputs = document.querySelectorAll(
                    "input, textarea, select"
                  );
                  inputs.forEach((input) => {
                    const element = input as
                      | HTMLInputElement
                      | HTMLTextAreaElement
                      | HTMLSelectElement;
                    if (element.name && element.value) {
                      formData.append(element.name, element.value);
                    }
                  });

                  // Create email body with form data
                  const emailBody = `
Employment Application for ${job.title} - ${job.company}

PERSONAL INFORMATION:
Name: ${(document.querySelector('input[type="text"]') as HTMLInputElement)?.value || "Not provided"}
Street Address: ${(document.querySelectorAll('input[type="text"]')[1] as HTMLInputElement)?.value || "Not provided"}
City: ${(document.querySelectorAll('input[type="text"]')[2] as HTMLInputElement)?.value || "Not provided"}
State: ${(document.querySelectorAll('input[type="text"]')[3] as HTMLInputElement)?.value || "Not provided"}
Home Phone: ${(document.querySelector('input[type="tel"]') as HTMLInputElement)?.value || "Not provided"}
Mobile Phone: ${(document.querySelectorAll('input[type="tel"]')[1] as HTMLInputElement)?.value || "Not provided"}
Email: ${(document.querySelector('input[type="email"]') as HTMLInputElement)?.value || "Not provided"}
NIN: ${(document.querySelectorAll('input[type="text"]')[6] as HTMLInputElement)?.value || "Not provided"}

EMPLOYMENT DESIRED:
Position: ${job.title}
Date Available: ${(document.querySelector('input[type="date"]') as HTMLInputElement)?.value || "Not provided"}

EDUCATION:
High School: ${(document.querySelectorAll('input[type="text"]')[7] as HTMLInputElement)?.value || "Not provided"}
University: ${(document.querySelectorAll('input[type="text"]')[11] as HTMLInputElement)?.value || "Not provided"}
Additional Education: ${(document.querySelector("textarea") as HTMLTextAreaElement)?.value || "Not provided"}

EMPLOYMENT HISTORY:
May contact current employer: ${(document.querySelector('input[name="contactCurrent"]:checked') as HTMLInputElement)?.value || "Not specified"}

LANGUAGES:
English: ${(document.querySelector('input[name="english"]:checked') as HTMLInputElement)?.value || "Not specified"}
Hausa: ${(document.querySelector('input[name="hausa"]:checked') as HTMLInputElement)?.value || "Not specified"}
Yoruba: ${(document.querySelector('input[name="yoruba"]:checked') as HTMLInputElement)?.value || "Not specified"}
Igbo: ${(document.querySelector('input[name="igbo"]:checked') as HTMLInputElement)?.value || "Not specified"}

---
This application was submitted through the Leadworth Consulting website.
Please review the complete application form attached.
                  `.trim();

                  // Send email
                  const subject = `Employment Application - ${job.title} - ${job.company}`;
                  const mailtoLink = `mailto:careers@leadworthconsulting.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

                  window.location.href = mailtoLink;
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-4 bg-[#F45625] text-white rounded-xl font-semibold shadow-lg hover:bg-[#e04a1f] transition-all duration-300 text-lg"
              >
                Submit Application
              </motion.button>
            </div>
          </form>
        </motion.div>
      </section>
    </main>
  );
}
