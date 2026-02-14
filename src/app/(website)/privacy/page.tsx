"use client";
import React from "react";
import Link from "next/link";

const sectionIds = [
  "section-1",
  "section-2",
  "section-3",
  "section-4",
  "section-5",
  "section-6",
  "section-7",
  "section-8",
  "section-9",
  "section-10",
  "section-11",
];

const tocItems = [
  "Introduction and background",
  "Information we may collect",
  "Utilization of personal information",
  "Transmission, storage and security",
  "Disclosure of information",
  "Your rights and contact",
  "Cookies policy",
  "Complaints and data accuracy",
  "Amendments",
  "User acknowledgment",
  "Dispute resolution and governing law",
];

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow">
            We respect your privacy and are committed to protecting your
            personal information in line with NDPA 2023 and GDPR.
          </p>
        </div>
      </section>

      {/* Content + TOC layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Sticky TOC - desktop */}
          <nav
            aria-label="Table of contents"
            className="hidden lg:block lg:w-56 xl:w-64 flex-shrink-0"
          >
            <div className="sticky top-24 rounded-xl bg-white/80 backdrop-blur-sm border border-[#130F45]/10 p-4 shadow-sm">
              <h2 className="text-sm font-bold text-[#130F45] uppercase tracking-wide mb-3">
                On this page
              </h2>
              <ul className="space-y-2 text-sm">
                {tocItems.map((label, i) => (
                  <li key={sectionIds[i]}>
                    <a
                      href={`#${sectionIds[i]}`}
                      className="text-gray-600 hover:text-[#F45625] transition-colors"
                    >
                      {i + 1}. {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Main content */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10 animate-fade-in">
              <div className="prose prose-gray max-w-none space-y-10 text-gray-700">
                {/* Section 1 */}
                <div id={sectionIds[0]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    1. Introduction and background
                  </h2>
                  <p className="mb-4">
                    Leadworth Consulting Limited (&quot;LWC&quot; or
                    &quot;Leadworth&quot;), a company duly registered in Nigeria
                    (RC: 2021777), is committed to maintaining the highest
                    standards of data protection and privacy. Together with our
                    global partners, we prioritize the security of the personal
                    information entrusted to us by our clients, job applicants,
                    website visitors, and other third parties with whom we
                    engage.
                  </p>

                  <p className="mb-4">
                    This Privacy Policy outlines our practices regarding the
                    collection, use, and disclosure of personal data acquired
                    through our digital platforms and professional engagements.
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mt-6 mb-2">
                    1.1. Consent and compliance
                  </h3>
                  <p className="mb-4">
                    By accessing our website or providing personal information
                    whether in person, via email, telephone, or other electronic
                    means—you acknowledge and consent to the data processing
                    practices described in this policy.
                  </p>
                  <p className="mb-2">
                    We are dedicated to full transparency and compliance with
                    relevant data protection frameworks, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>The Nigeria Data Protection Act (NDPA) 2023</li>
                    <li>
                      The General Data Protection Regulation (GDPR) (EU)
                      2016/679
                    </li>
                  </ul>
                  <p>
                    Where applicable, we may provide supplemental notices at the
                    point of data collection to highlight specific uses of your
                    information, offering you the opportunity to opt-in or
                    opt-out of certain processing activities.
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mt-6 mb-2">
                    1.2. Scope of this policy
                  </h3>
                  <p className="mb-2">
                    To ensure clarity and accessibility, this policy is
                    structured to cover the following key areas:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Data Collection: The types of personal information we may
                      collect from you.
                    </li>
                    <li>
                      Utilization of Data: How your information is used to
                      facilitate our services.
                    </li>
                    <li>
                      Information Sharing: The circumstances under which we
                      disclose data to third parties.
                    </li>
                    <li>
                      Data Security: The technical and organizational measures
                      we employ to protect your information.
                    </li>
                    <li>
                      Your Rights: How to access your data, update your
                      preferences, or opt-out of marketing communications.
                    </li>
                    <li>
                      Cookies: Our policy regarding tracking technologies.
                    </li>
                    <li>
                      Complaints: Your right to lodge a formal grievance
                      regarding data handling.
                    </li>
                    <li>
                      Policy Updates: Procedures for notifying you of changes to
                      this document.
                    </li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div id={sectionIds[1]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    2. Information we may collect
                  </h2>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    2.1. General data collection
                  </h3>
                  <p className="mb-2">
                    We may collect and process personal information through the
                    following channels:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>Correspondence:</strong> Records of communications
                      via post, telephone, live chat, email, or other electronic
                      means.
                    </li>
                    <li>
                      <strong>Voluntary Submissions:</strong> Information
                      provided during inquiries, registrations, or the
                      employment application process, including your name,
                      professional title, and contact details.
                    </li>
                    <li>
                      <strong>Transaction Records:</strong> Details of
                      engagements and transactions conducted through our website
                      or our Partners, and the subsequent fulfillment of
                      services.
                    </li>
                    <li>
                      <strong>Website &amp; Analytics:</strong> Technical data
                      regarding your visits to our website, including but not
                      limited to IP addresses, domain names, browser versions,
                      operating systems, traffic and location data, and the
                      specific resources accessed via cookies and tracking
                      technologies.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    2.2. Specialized service delivery
                  </h3>
                  <p className="mb-4">
                    Leadworth Consulting is a primary HR Consulting,
                    Organizational Competence Development, and Data Privacy
                    Compliance firm. In the course of delivering our
                    recruitment, outsourcing, and career development services,
                    we process data in the following ways:
                  </p>
                  <h4 className="text-base font-semibold text-[#130F45] mb-2">
                    a. Indirect collection (public sources)
                  </h4>
                  <p className="mb-4">
                    To facilitate recruitment and background verification, we
                    may aggregate information regarding your academic and
                    professional history—including current and former employers
                    and job titles—from publicly available sources. This
                    includes search engines, corporate websites, and
                    professional networking platforms where you have chosen to
                    make your profile public.
                  </p>
                  <p className="mb-4">
                    We have installed CCTV cameras at strategic locations
                    throughout our office to monitor building access and enhance
                    security. In accordance with privacy regulations, clear
                    signage is posted at all entrances to notify visitors. In
                    addition, all guests are required to provide their details
                    in our data protection compliance visitor register to assist
                    with our ongoing movement monitoring and security protocols.
                  </p>
                  <h4 className="text-base font-semibold text-[#130F45] mb-2">
                    b. Direct submissions
                  </h4>
                  <p className="mb-2">
                    We collect detailed personal information provided by you,
                    such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>
                      Full name and contact information (address, telephone,
                      email).
                    </li>
                    <li>
                      Comprehensive academic and professional history as
                      contained in a CV or resume.
                    </li>
                    <li>
                      Financial information (e.g., bank account details) where
                      required for platform access or specific service
                      participation.
                    </li>
                  </ul>
                  <h4 className="text-base font-semibold text-[#130F45] mb-2">
                    c. Background verification &amp; compliance
                  </h4>
                  <p className="mb-2">
                    As part of our commitment to industry best practices and
                    client instructions, we may conduct background checks to
                    verify your identity and financial data. By engaging our
                    services, you consent to screening against:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Sanction, regulatory, and law enforcement lists.</li>
                    <li>Criminal record databases.</li>
                    <li>
                      Negative media reports to prevent fraud and mitigate
                      professional risk.
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div id={sectionIds[2]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    3. Utilization of personal information
                  </h2>
                  <p className="mb-4">
                    We utilize your personal information for specific business
                    and legal purposes. Under the Nigeria Data Protection Act
                    (NDPA) 2023 and the GDPR, we are required to specify the
                    legal &quot;grounds&quot; (justifications) for processing
                    your data.
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    3.1. Service delivery for client employees &amp; candidates
                  </h3>
                  <p className="mb-2">
                    To provide effective HR and compliance services to our
                    clients, we process the information described in Section 2
                    to perform background checks and verification exercises.
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>
                      <strong>Verification Scope:</strong> We conduct these
                      exercises strictly in accordance with applicable data
                      protection laws.
                    </li>
                    <li>
                      <strong>Authorization:</strong> Processing for these
                      purposes occurs only after you have provided explicit
                      consent to us and/or the relevant Data Controller.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    3.2. Legal bases for processing
                  </h3>
                  <p className="mb-2">
                    The following justifications represent the legal grounds
                    upon which Leadworth processes your information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>Consent:</strong> Where you have granted clear and
                      unambiguous permission for us to process your data for a
                      specific purpose (typically collected via a formal consent
                      form).
                    </li>
                    <li>
                      <strong>Contract Performance:</strong> Where processing is
                      necessary to fulfill a contract we have with you, or to
                      take specific steps at your request before entering into a
                      contract.
                    </li>
                    <li>
                      <strong>Legal Obligation:</strong> Where processing is
                      required for Leadworth to remain compliant with statutory
                      and regulatory laws in Nigeria or other relevant
                      jurisdictions.
                    </li>
                    <li>
                      <strong>Legitimate Interests:</strong> Where processing is
                      necessary for our legitimate business interests (or those
                      of a third party), provided these interests are not
                      overridden by your fundamental rights or freedoms.
                    </li>
                    <li>
                      <strong>Legal Claims:</strong> Where your information is
                      required to establish, exercise, or defend legal claims or
                      proceedings.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    3.3. Third-party data
                  </h3>
                  <p>
                    If you provide personal information to us regarding another
                    individual (a &quot;Data Subject&quot;), you represent and
                    warrant that you have obtained the necessary prior consent
                    from that individual. You are responsible for ensuring they
                    are aware of the terms of this Privacy Policy and how their
                    data will be utilized by Leadworth.
                  </p>
                </div>

                {/* Section 4 */}
                <div id={sectionIds[3]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    4. Transmission, storage and security
                  </h2>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    4.1. Security measures
                  </h3>
                  <p className="mb-4">
                    Leadworth prioritizes the integrity and confidentiality of
                    your data. We have implemented robust physical, electronic,
                    and managerial procedures designed to safeguard the
                    information we collect.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>Access Control:</strong> Access to personal data
                      is strictly limited to employees, partners, and clients
                      who have a legitimate &quot;need-to-know&quot; to fulfill
                      business obligations. These parties process data only
                      under our direct instructions and are bound by stringent
                      confidentiality agreements.
                    </li>
                    <li>
                      <strong>Payment Security:</strong> All financial
                      transactions and payment data are processed using
                      industry-standard encryption protocols.
                    </li>
                    <li>
                      <strong>Breach Protocols:</strong> We have established
                      formal procedures to address any suspected personal data
                      breach. In the event of a high-risk security incident, we
                      will notify you and the relevant regulatory authorities as
                      required by law.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    4.2. Internet communications
                  </h3>
                  <p className="mb-4">
                    While we maintain commercially reasonable safeguards in
                    accordance with the NDPA and GDPR, no method of transmission
                    over the internet or electronic storage is 100% secure.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>User Responsibility:</strong> You are encouraged
                      to take appropriate precautions when transmitting data to
                      us online. By providing your personal data, you
                      acknowledge the inherent security risks associated with
                      internet-based communication.
                    </li>
                    <li>
                      <strong>Third-Party Interactions:</strong> We urge you to
                      exercise caution when sharing personal information with
                      third-party partners. Only provide sensitive data when
                      absolutely necessary for the service being rendered.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    4.3. Data storage and retention
                  </h3>
                  <p className="mb-2">
                    All personal information is stored on secure servers and
                    managed under our internal security standards.
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Retention Policy:</strong> We retain your personal
                      information only for as long as is necessary to fulfill
                      the purposes for which it was collected, or to satisfy
                      legal, regulatory, or reporting requirements.
                    </li>
                    <li>
                      <strong>Dual-Purpose Data:</strong> If data is used for
                      two distinct purposes, we will retain it until the purpose
                      with the longer duration expires; however, we will cease
                      all processing for the shorter-term purpose once its
                      specific timeframe has elapsed.
                    </li>
                    <li>
                      <strong>Data Disposal:</strong> Once your information is
                      no longer required for business or legal purposes, it is
                      either permanently deleted, securely destroyed, or
                      anonymized (rendered non-identifiable) for long-term
                      analytical use.
                    </li>
                  </ul>
                </div>

                {/* Section 5 */}
                <div id={sectionIds[4]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    5. Disclosure of information
                  </h2>
                  <p className="mb-4">
                    Leadworth Consulting may disclose your personal information
                    to third parties under specific circumstances, ensuring such
                    sharing is always conducted within the framework of the NDPA
                    and other relevant privacy laws.
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    5.1. Authorized disclosures
                  </h3>
                  <p className="mb-2">
                    We are permitted to disclose your information in the
                    following instances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>
                      <strong>Recruitment and Placement:</strong> If you are a
                      candidate, we may disclose your professional profile and
                      relevant data to potential employers and recruiters to
                      facilitate employment opportunities on your behalf.
                    </li>
                    <li>
                      <strong>Verification Services:</strong> We exchange
                      necessary information with our clients and partners during
                      the execution of background checks, academic
                      verifications, or professional screenings.
                    </li>
                    <li>
                      <strong>Legal and Safety Requirements:</strong> We may
                      disclose data if required by law, or when such disclosure
                      is necessary to protect the property, safety, or legal
                      rights of Leadworth Consulting, our clients, or the
                      general public.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    5.2. Third-party service providers
                  </h3>
                  <p className="mb-2">
                    We may engage reputable third-party organizations to perform
                    specialized functions on our behalf. These services include,
                    but are not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>Payment processing and financial transactions.</li>
                    <li>Background screening and identity verification.</li>
                    <li>Search engine optimization and digital analytics.</li>
                    <li>Marketing and advertising activities.</li>
                    <li>
                      Cv analysis for prospective applicants and job seekers.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    5.3. Data protection standards for third parties
                  </h3>
                  <p className="mb-2">
                    When we share your information with third-party service
                    providers, we implement the following safeguards:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      <strong>Contractual Compliance:</strong> Any third party
                      granted access to your data is contractually prohibited
                      from using it for any purpose other than the specific
                      service they are performing for Leadworth.
                    </li>
                    <li>
                      <strong>Security Assurance:</strong> We take all
                      reasonable steps to ensure that third parties handle your
                      data safely and securely, in full alignment with your
                      rights and our statutory obligations under the NDPA 2023.
                    </li>
                  </ul>
                </div>

                {/* Section 6 */}
                <div id={sectionIds[5]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    6. Your rights and contact information
                  </h2>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    6.1. Marketing preferences
                  </h3>
                  <p className="mb-2">
                    You have the right to opt-out of receiving marketing
                    communications from us. We will typically inform you (before
                    collecting your data) if we intend to use your information
                    for such purposes. You can exercise your right to prevent
                    marketing processing by:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>
                      Checking the relevant &quot;opt-out&quot; boxes on our
                      data collection forms.
                    </li>
                    <li>
                      Clicking the &quot;unsubscribe&quot; link in any marketing
                      email.
                    </li>
                    <li>
                      Contacting us directly at any time via the details
                      provided in Section 6.6.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    6.2. Your statutory rights
                  </h3>
                  <p className="mb-2">
                    Under the NDPA 2023 and GDPR, you possess specific rights
                    regarding your personal information. Subject to certain
                    legal conditions, you may request that we:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>
                      <strong>Information Access:</strong> Provide further
                      details on how we utilize your personal data.
                    </li>
                    <li>
                      <strong>Data Portability:</strong> Provide a copy of the
                      personal information you have shared with us in a
                      structured format.
                    </li>
                    <li>
                      <strong>Rectification:</strong> Update or correct any
                      inaccuracies in the personal information we hold.
                    </li>
                    <li>
                      <strong>
                        Erasure (&quot;Right to be Forgotten&quot;):
                      </strong>{" "}
                      Delete personal information for which we no longer have a
                      lawful ground to process.
                    </li>
                    <li>
                      <strong>Withdrawal of Consent:</strong> Terminate specific
                      processing activities where consent was the primary legal
                      basis.
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing based on
                      &quot;Legitimate Interests,&quot; unless our compelling
                      grounds for processing override your individual rights.
                    </li>
                    <li>
                      <strong>Restriction:</strong> Limit the processing of your
                      data while a formal complaint or inaccuracy is being
                      investigated.
                    </li>
                    <li>
                      <strong>Account Deactivation:</strong> Close your account
                      and cease active use of your data.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    6.3. Exercising your rights
                  </h3>
                  <p className="mb-2">
                    To exercise any of the rights listed above, please submit a
                    formal request to{" "}
                    <a
                      href="mailto:info@leadworthconsulting.com"
                      className="text-[#F45625] underline hover:text-[#130F45]"
                    >
                      info@leadworthconsulting.com
                    </a>
                    .
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-6">
                    <li>
                      <strong>Identity Verification:</strong> For your
                      protection, we may require proof of identity before
                      fulfilling your request.
                    </li>
                    <li>
                      <strong>Response Timeline:</strong> We aim to respond to
                      all legitimate requests within one month.
                    </li>
                    <li>
                      <strong>Exemptions:</strong> Please note that these rights
                      are not absolute. We may decline requests where processing
                      is necessary to safeguard public interest (e.g., crime
                      prevention) or to maintain legal privilege.
                    </li>
                  </ul>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    6.4. Data accuracy
                  </h3>
                  <p className="mb-6">
                    We rely on the information you provide to remain accurate
                    and complete. If your professional or contact details
                    change, please notify us promptly at the contact address
                    below to ensure our records remain up to date.
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    6.5. How long your data is retained
                  </h3>
                  <p className="mb-6">
                    We retain data for not more than five (5) years, and this is
                    determined by the purposes for which your data was
                    collected. Thereafter, we securely dispose of it in
                    accordance with our data retention policies (see our{" "}
                    <Link
                      href="/retention"
                      className="text-[#F45625] underline hover:text-[#130F45]"
                    >
                      Data Retention Policy
                    </Link>
                    ).
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    6.6. Contact and complaints
                  </h3>
                  <p className="mb-2">
                    If you have questions regarding this Privacy Policy or
                    Leadworth Consulting&apos;s data handling practices, please
                    contact our Data Protection Officer (DPO):
                  </p>
                  <ul className="list-disc pl-6 space-y-1 mb-4">
                    <li>
                      Email:{" "}
                      <a
                        href="mailto:info@leadworthconsulting.com"
                        className="text-[#F45625] underline hover:text-[#130F45]"
                      >
                        info@leadworthconsulting.com
                      </a>
                    </li>
                    <li>Subject Line: Attention: Data Protection Officer</li>
                  </ul>
                  <p>
                    If you remain unsatisfied with our response or believe our
                    processing of your data does not comply with the law, you
                    have the right to lodge a complaint with the Nigeria Data
                    Protection Commission (NDPC). You may also{" "}
                    <Link
                      href="/contact"
                      className="text-[#F45625] underline hover:text-[#130F45]"
                    >
                      contact us
                    </Link>{" "}
                    through our website.
                  </p>
                </div>

                {/* Section 7 - Cookies policy */}
                <div id={sectionIds[6]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    7. Cookies policy
                  </h2>
                  <p className="mb-4">
                    We use secure cookies and similar technologies to improve
                    your experience and analyze site traffic. We do not sell
                    personal information collected via our website. For full
                    details on how we use cookies and data privacy in tracking,
                    see our{" "}
                    <Link
                      href="/cookies"
                      className="text-[#F45625] underline hover:text-[#130F45]"
                    >
                      Cookies Policy
                    </Link>
                    .
                  </p>
                </div>

                {/* Section 8 */}
                <div id={sectionIds[7]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    8. Complaints and data accuracy
                  </h2>
                  <p className="mb-4">
                    You have the right to lodge a formal complaint at any time
                    with the Nigeria Data Protection Commission (NDPC). However,
                    Leadworth Consulting values the opportunity to resolve your
                    concerns directly. We encourage you to{" "}
                    <Link
                      href="/contact"
                      className="text-[#F45625] underline hover:text-[#130F45]"
                    >
                      contact us
                    </Link>{" "}
                    in the first instance so we may address any grievances
                    regarding your data privacy.
                  </p>
                  <p>
                    To ensure your data remains protected, it is vital that the
                    information we hold is accurate and current. Please notify
                    us immediately of any changes to your personal details
                    during your professional relationship with us.
                  </p>
                </div>

                {/* Section 9 */}
                <div id={sectionIds[8]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    9. Amendments to this policy
                  </h2>
                  <p>
                    As our services evolve and technology advances, we may
                    update the content of our website and our use of cookies
                    without prior notice. Consequently, this Privacy Policy may
                    be modified periodically. We encourage you to review this
                    page regularly to remain informed about how we protect and
                    utilize your personal information.
                  </p>
                </div>

                {/* Section 10 */}
                <div id={sectionIds[9]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    10. User acknowledgment
                  </h2>
                  <p>
                    By accessing our website and utilizing our services, you
                    acknowledge that you have read, understood, and agree to the
                    terms of this Privacy Policy.
                  </p>
                </div>

                {/* Section 11 */}
                <div id={sectionIds[10]}>
                  <h2 className="text-2xl font-bold text-[#130F45] mb-4">
                    11. Dispute resolution and governing law
                  </h2>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    11.1. Amicable settlement
                  </h3>
                  <p className="mb-6">
                    In the event of a dispute arising out of or relating to this
                    Privacy Policy, both parties agree to use their best efforts
                    to negotiate in good faith to reach an amicable settlement.
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    11.2. Continuity of obligations
                  </h3>
                  <p className="mb-6">
                    The existence of a dispute shall not suspend or affect the
                    ongoing obligations of Leadworth Consulting to protect your
                    data as outlined in this policy.
                  </p>
                  <h3 className="text-lg font-semibold text-[#F45625] mb-2">
                    11.3. Jurisdiction
                  </h3>
                  <p>
                    This Privacy Policy, including any non-contractual claims or
                    disputes, shall be governed by and construed in accordance
                    with the laws of the Federal Republic of Nigeria.
                  </p>
                </div>
              </div>

              <p className="mt-12 pt-6 border-t border-gray-200 text-sm text-gray-500">
                This Privacy Policy was last updated in January 2026.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
