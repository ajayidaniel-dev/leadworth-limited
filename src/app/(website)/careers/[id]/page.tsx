"use client";

import React from "react";
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
} from "react-icons/hi2";

// Sample job data - you can replace with real data or fetch from API
const jobs = [
  {
    id: 1,
    title: "Senior HR Consultant",
    company: "Leadworth Consulting Limited",
    location: "Ibadan, Nigeria",
    type: "Full-time",
    salary: "₦500,000 - ₦800,000",
    experience: "5+ years",
    department: "HR Consulting",
    postedDate: "2024-01-15",
    description:
      "We are seeking an experienced HR Consultant to join our dynamic team. You will be responsible for providing strategic HR consulting services to our diverse client base, helping organizations optimize their human capital and achieve their business objectives.",
    fullDescription: `As a Senior HR Consultant at Leadworth Consulting Limited, you will play a pivotal role in delivering high-impact HR solutions to our clients. You will work closely with organizations across various industries to develop and implement comprehensive HR strategies that drive business success.

Key Responsibilities:
• Provide strategic HR consulting services to clients across different sectors
• Conduct comprehensive organizational assessments and HR audits
• Develop and implement HR policies, procedures, and best practices
• Lead training and development programs for client organizations
• Manage employee relations and performance management systems
• Provide guidance on compliance with Nigerian labor laws and regulations
• Collaborate with clients to develop recruitment and retention strategies
• Prepare detailed reports and recommendations for client presentations

What We're Looking For:
• Bachelor's degree in Human Resources, Business Administration, or related field
• 5+ years of HR consulting experience in a professional services environment
• Strong knowledge of Nigerian labor laws and HR best practices
• Excellent communication, presentation, and interpersonal skills
• Proven track record of managing multiple client relationships
• Experience with HRIS systems and HR analytics
• Professional HR certification (CIPM, SHRM, or equivalent) preferred
• Strong analytical and problem-solving abilities

What We Offer:
• Competitive salary and benefits package
• Professional development and training opportunities
• Collaborative and supportive work environment
• Opportunity to work with diverse clients across industries
• Career growth and advancement potential
• Flexible work arrangements`,
    requirements: [
      "Bachelor's degree in Human Resources or related field",
      "5+ years of HR consulting experience",
      "Strong knowledge of Nigerian labor laws",
      "Excellent communication and interpersonal skills",
      "Professional HR certification preferred",
      "Experience with HRIS systems",
      "Strong analytical and problem-solving abilities",
    ],
    responsibilities: [
      "Provide strategic HR consulting services to clients",
      "Develop and implement HR policies and procedures",
      "Conduct organizational assessments and audits",
      "Lead training and development programs",
      "Manage employee relations and performance systems",
      "Ensure compliance with labor laws and regulations",
      "Prepare detailed reports and recommendations",
    ],
    benefits: [
      "Competitive salary and benefits package",
      "Professional development opportunities",
      "Collaborative work environment",
      "Flexible work arrangements",
      "Health insurance coverage",
      "Performance-based bonuses",
    ],
  },
  {
    id: 2,
    title: "Recruitment Specialist",
    company: "Leadworth Consulting Limited",
    location: "Lagos, Nigeria",
    type: "Full-time",
    salary: "₦300,000 - ₦500,000",
    experience: "3+ years",
    department: "Recruitment",
    postedDate: "2024-01-10",
    description:
      "Join our recruitment team to help organizations find the best talent. You will be responsible for sourcing, screening, and placing qualified candidates across various industries.",
    fullDescription: `As a Recruitment Specialist, you will be at the forefront of our talent acquisition services, helping organizations build their teams with the right people. You will work with clients across various industries to understand their hiring needs and deliver exceptional recruitment solutions.

Key Responsibilities:
• Source and screen candidates for various positions across industries
• Conduct comprehensive interviews and assessments
• Build and maintain relationships with clients and candidates
• Manage recruitment campaigns and job postings
• Coordinate interview processes and candidate communications
• Conduct reference checks and background verifications
• Provide market insights and salary benchmarking
• Track recruitment metrics and performance indicators

What We're Looking For:
• Bachelor's degree in any field (HR, Business, or Psychology preferred)
• 3+ years of recruitment experience in a professional environment
• Strong sourcing and screening skills using various channels
• Experience with ATS and recruitment tools
• Excellent communication and relationship-building skills
• Knowledge of Nigerian job market and industry trends
• Strong organizational and time management abilities
• Results-oriented with a track record of meeting targets

What We Offer:
• Competitive salary with performance incentives
• Comprehensive training and development programs
• Modern recruitment tools and technology
• Collaborative team environment
• Career growth opportunities
• Health and wellness benefits`,
    requirements: [
      "Bachelor's degree in any field",
      "3+ years of recruitment experience",
      "Strong sourcing and screening skills",
      "Experience with ATS and recruitment tools",
      "Excellent communication skills",
      "Knowledge of Nigerian job market",
    ],
    responsibilities: [
      "Source and screen candidates for various positions",
      "Conduct interviews and assessments",
      "Build relationships with clients and candidates",
      "Manage recruitment campaigns and job postings",
      "Coordinate interview processes",
      "Conduct reference checks",
    ],
    benefits: [
      "Competitive salary with incentives",
      "Training and development programs",
      "Modern recruitment tools",
      "Collaborative environment",
      "Career growth opportunities",
      "Health benefits",
    ],
  },
  {
    id: 3,
    title: "Training Coordinator",
    company: "Leadworth Consulting Limited",
    location: "Ibadan, Nigeria",
    type: "Full-time",
    salary: "₦250,000 - ₦400,000",
    experience: "2+ years",
    department: "Training & Development",
    postedDate: "2024-01-08",
    description:
      "Help organizations develop their workforce through effective training programs. You will coordinate training initiatives and ensure successful learning outcomes.",
    fullDescription: `As a Training Coordinator, you will be instrumental in helping organizations develop their workforce through effective training and development programs. You will work closely with clients to design, coordinate, and deliver impactful learning experiences.

Key Responsibilities:
• Coordinate training programs and workshops for client organizations
• Develop and customize training materials and content
• Track training effectiveness and return on investment
• Manage training schedules, logistics, and participant communications
• Conduct training needs assessments and gap analyses
• Evaluate training outcomes and provide recommendations
• Maintain training records and documentation
• Support the development of learning and development strategies

What We're Looking For:
• Bachelor's degree in Education, Human Resources, or related field
• 2+ years of training coordination experience
• Strong organizational and communication skills
• Experience with learning management systems
• Knowledge of adult learning principles and methodologies
• Excellent presentation and facilitation skills
• Ability to work with diverse groups and learning styles
• Strong attention to detail and project management abilities

What We Offer:
• Competitive salary and benefits
• Professional development opportunities
• Modern training facilities and tools
• Collaborative learning environment
• Career advancement potential
• Health and wellness benefits`,
    requirements: [
      "Bachelor's degree in Education or related field",
      "2+ years of training coordination experience",
      "Strong organizational and communication skills",
      "Experience with learning management systems",
      "Knowledge of adult learning principles",
      "Excellent presentation skills",
    ],
    responsibilities: [
      "Coordinate training programs and workshops",
      "Develop training materials and content",
      "Track training effectiveness and ROI",
      "Manage training schedules and logistics",
      "Conduct training needs assessments",
      "Evaluate training outcomes",
    ],
    benefits: [
      "Competitive salary and benefits",
      "Professional development opportunities",
      "Modern training facilities",
      "Collaborative environment",
      "Career advancement potential",
      "Health benefits",
    ],
  },
  {
    id: 4,
    title: "Business Development Manager",
    company: "Leadworth Consulting Limited",
    location: "Remote / Nigeria",
    type: "Full-time",
    salary: "₦600,000 - ₦900,000",
    experience: "4+ years",
    department: "Business Development",
    postedDate: "2024-01-05",
    description:
      "Drive business growth and expand our client base across Nigeria. You will be responsible for developing new business opportunities and maintaining client relationships.",
    fullDescription: `As a Business Development Manager, you will be a key driver of our company's growth, responsible for expanding our client base and developing new business opportunities across Nigeria. You will work closely with potential clients to understand their needs and position our services effectively.

Key Responsibilities:
• Develop and execute business development strategies
• Build and maintain relationships with potential and existing clients
• Generate new business opportunities through networking and prospecting
• Conduct client presentations and proposals
• Represent the company at industry events and conferences
• Collaborate with internal teams to develop customized solutions
• Track and report on business development activities and outcomes
• Stay informed about industry trends and competitive landscape

What We're Looking For:
• Bachelor's degree in Business, Marketing, or related field
• 4+ years of B2B sales or business development experience
• Strong networking and relationship-building skills
• Experience in HR or consulting industry preferred
• Excellent communication and presentation skills
• Proven track record of meeting sales targets
• Self-motivated and results-oriented
• Knowledge of Nigerian business landscape

What We Offer:
• Competitive salary with commission structure
• Comprehensive benefits package
• Professional development and training
• Flexible work arrangements
• Performance-based incentives
• Health and wellness benefits`,
    requirements: [
      "Bachelor's degree in Business or related field",
      "4+ years of B2B sales experience",
      "Strong networking and relationship-building skills",
      "Experience in HR or consulting industry preferred",
      "Excellent communication skills",
      "Proven track record of meeting targets",
    ],
    responsibilities: [
      "Develop and execute business development strategies",
      "Build and maintain client relationships",
      "Generate new business opportunities",
      "Represent company at industry events",
      "Conduct client presentations",
      "Track business development activities",
    ],
    benefits: [
      "Competitive salary with commission",
      "Comprehensive benefits package",
      "Professional development",
      "Flexible work arrangements",
      "Performance incentives",
      "Health benefits",
    ],
  },
];

export default function JobDetailPage() {
  const params = useParams();
  const jobId = parseInt(params.id as string);

  const job = jobs.find((j) => j.id === jobId);

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
        <motion.div
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
        </motion.div>
      </section>
    </main>
  );
}
