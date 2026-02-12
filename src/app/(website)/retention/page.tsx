"use client";
import React from "react";
import Link from "next/link";

export default function RetentionPolicyPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40 z-0" />
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-16 text-center flex flex-col items-center justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm mb-4">
            Legal
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-xl">
            Data Retention Policy
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow">
            How we retain and protect data in line with NDPA 2023 and GDPR.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 animate-fade-in">
          <div className="space-y-10 text-gray-700">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                Introduction
              </h2>
              <p className="mb-4">
                The purpose of this policy is to establish a uniform standard
                for data retention at LWC. We strive to retain data strictly for
                the duration necessary to satisfy the objectives for which it
                was originally obtained. Upon the expiration of the required
                retention period, LWC&apos;s protocol requires the complete
                erasure of such data.
              </p>
              <p>
                These guidelines are to be strictly adhered to by all
                organizational units to ensure regulatory compliance and
                operational integrity.
              </p>
            </div>

            {/* Scope */}
            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">Scope</h2>
              <p>
                This policy encompasses all data collected by LWC and stored on
                company-owned or leased systems and media, irrespective of
                geographic location. It applies to all formats, including
                electronic records (such as photographs, video, and audio
                recordings) and physical hard-copy files. Retention requirements
                are governed by the Nigeria Data Protection Act (NDPA) 2023, the
                EU General Data Protection Regulation (GDPR), and defined
                legitimate business interests. For how we collect and use
                personal data, see our{" "}
                <Link
                  href="/privacy"
                  className="text-[#F45625] underline hover:text-[#130F45]"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Reasons for Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                Reasons for data retention
              </h2>
              <p className="mb-4">
                LWC maintains only the data essential for its operational
                efficiency, the fulfillment of its mission, and strict adherence
                to all applicable laws and regulations.
              </p>
              <p className="mb-4">
                LWC maintains data for the following legitimate purposes:
              </p>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong className="text-[#130F45]">
                    Service Delivery &amp; Stakeholder Engagement:
                  </strong>{" "}
                  To facilitate ongoing services for data subjects, including
                  the distribution of newsletters and program updates,
                  administration of training programs, and the processing of
                  payroll and employee benefits.
                </li>
                <li>
                  <strong className="text-[#130F45]">
                    Statutory &amp; Financial Compliance:
                  </strong>{" "}
                  To adhere to legal requirements concerning financial reporting
                  to shareholders and the submission of mandatory disclosures to
                  regulatory agencies for the maintenance of business licenses
                  and permits.
                </li>
                <li>
                  <strong className="text-[#130F45]">
                    Legal &amp; Administrative Obligations:
                  </strong>{" "}
                  To ensure compliance with applicable labor, taxation, and
                  immigration laws.
                </li>
                <li>
                  <strong className="text-[#130F45]">
                    Regulatory Adherence:
                  </strong>{" "}
                  To satisfy other industry-specific or governmental regulatory
                  requirements.
                </li>
                <li>
                  <strong className="text-[#130F45]">
                    Security &amp; Risk Management:
                  </strong>{" "}
                  To support security incident investigations or other internal
                  and external forensic inquiries.
                </li>
                <li>
                  <strong className="text-[#130F45]">
                    Asset &amp; Legal Protection:
                  </strong>{" "}
                  To facilitate the preservation of intellectual property and
                  the management of active or anticipated litigation.
                </li>
              </ol>
            </div>

            {/* Data Duplication */}
            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                Data duplication
              </h2>
              <p>
                LWC prioritizes the elimination of redundant data storage to
                optimize system efficiency and security. While the organization
                endeavors to avoid duplication, multiple copies may be
                maintained where justified by operational necessity or specific
                business requirements. Regardless of the number of iterations or
                storage locations, this policy applies universally to all data
                in LWC&apos;s possession, including all backup and duplicate
                copies.
              </p>
            </div>

            {/* Retention Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                Retention requirements
              </h2>
              <p className="mb-4">
                LWC has set the following guidelines for retaining all personal
                data as defined in its data privacy policy:
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Website visitor data will be retained as long as necessary to
                  provide the service requested/initiated through the LWC
                  website.
                </li>
                <li>
                  Personal data of Guarantors, Contractors, Subcontractors and
                  Vendors will be kept for the duration of the contract or
                  agreement.
                </li>
                <li>
                  Employee data will be held for the duration of employment and
                  then five years after the last day of employment.
                </li>
                <li>
                  Data associated with employee wages, leave and pension shall
                  be held for the period of employment plus five years.
                </li>
                <li>
                  Recruitment data, including interview notes of unsuccessful
                  applicants, will be held for one year after the closing of the
                  position recruitment process.
                </li>
                <li>
                  Consultant (both paid and pro bono) data will be held for the
                  duration of the consulting contract plus two years after the
                  end of the consultancy.
                </li>
                <li>
                  Data associated with tax payments (including payroll,
                  corporate, and VAT) will be held for five years.
                </li>
                <li>
                  Operational data related to business proposals, reporting, and
                  training programs will be held for the period required by
                  LWC&apos;s Management, but not more than five years.
                </li>
              </ol>
            </div>

            {/* Data Destruction */}
            <div>
              <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                Data destruction
              </h2>
              <p className="mb-4">
                To ensure responsible data management, LWC mandates the active
                destruction of data once its retention period has lapsed.
                Employees who believe certain information warrants further
                retention for business reasons must report this to their
                supervisor with a formal justification. All policy exceptions
                are subject to approval by the Data Protection Officer and legal
                counsel. Furthermore, a litigation hold may be implemented by
                the legal department in rare instances, overriding standard
                destruction protocols to preserve evidence for legal matters.
              </p>
              <p>
                If you have questions about this policy or your data, please{" "}
                <Link
                  href="/contact"
                  className="text-[#F45625] underline hover:text-[#130F45]"
                >
                  contact us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
