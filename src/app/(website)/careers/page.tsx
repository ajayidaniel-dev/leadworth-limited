"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineBriefcase,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineCurrencyDollar,
  HiOutlineBuildingOffice,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineHeart,
} from "react-icons/hi2";

// Sample job data - you can replace with real data
const jobs = [
  {
    id: 1,
    title: "Team Lead - Operations",
    company: "",
    location: "Port Harcourt, Nigeria",
    type: "Full-time",
    salary: "Competitive (based on experience)",
    experience: "10+ years",
    department: "Operations",
    postedDate: "2025-08-20",
    description:
      "We are seeking an experienced Operations Team Lead for our client, one of the major players in the Oil and Gas industry based in Port Harcourt. The right candidate must have at least ten years of experience in Automated and Robotic Tank Cleaning with proven experience in managing degassing, dislodging tanks. The candidate must have background in project management and work well in a team.",
    requirements: [
      "Bachelor's degree in Mechanical Engineering, Petrochemical Engineering, or related field",
      "COREN certification",
      "10+ years of experience in tank cleaning operations, NDT inspection, or related field",
      "NEBOSH or other relevant safety certifications",
      "Strong leadership and team management skills",
      "Technical knowledge of engineering principles and HSSE compliance",
      "Excellent communication and problem-solving abilities",
    ],
    responsibilities: [
      "Plan and manage project scopes, budgets, and resources across client sites",
      "Lead and supervise project teams during execution of operations",
      "Oversee tank cleaning operations, inspections, and related processes",
      "Ensure HSSE compliance and promote a safety-first culture",
      "Maintain accurate documentation, reports, and progress updates",
      "Coordinate with clients, vendors, and stakeholders for seamless project delivery",
      "Troubleshoot operational challenges and adapt plans to site conditions",
    ],
  },
];

const benefits = [
  {
    icon: <HiOutlineHeart className="w-8 h-8 text-[#F45625]" />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8 text-[#130F45]" />,
    title: "Professional Growth",
    description: "Continuous learning and career development opportunities",
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8 text-[#00B4D8]" />,
    title: "Collaborative Culture",
    description: "Work with talented professionals in a supportive environment",
  },
  {
    icon: <HiOutlineBuildingOffice className="w-8 h-8 text-[#F9A826]" />,
    title: "Modern Workplace",
    description: "Flexible work arrangements and modern office facilities",
  },
];

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const departments = [
    "All",
    "HR Consulting",
    "Recruitment",
    "Training & Development",
    "Business Development",
  ];
  const locations = [
    "All",
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "FCT",
    "Remote",
  ];

  const filteredJobs = jobs.filter((job) => {
    const deptMatch =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const locationMatch =
      selectedLocation === "All" || job.location.includes(selectedLocation);
    return deptMatch && locationMatch;
  });

  return (
    <main className="bg-[#F8F9FB] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/luis-villasmil-4V8uMZx8FYA-unsplash.jpg"
          alt="Careers at Leadworth Consulting"
          fill
          priority
          className="object-cover w-full h-full z-0"
          style={{ objectPosition: "center" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40 z-10" />
        {/* Content */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <HiOutlineBriefcase className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-xl">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Build your career with a company that values innovation,
              collaboration, and making a real impact in the HR industry.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                <HiOutlineUserGroup className="w-5 h-5" />
                {jobs.length} Open Positions
              </span>
              <span className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold">
                <HiOutlineMapPin className="w-5 h-5" />
                Multiple Locations
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#130F45] mb-4">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a team that&apos;s passionate about transforming HR practices
            and helping organizations thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6 text-center hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-125 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-[#130F45] mb-2 group-hover:text-[#F45625] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Listings */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#130F45] mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the perfect role that matches your skills and career
            aspirations.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
        >
          <select
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
            className="px-4 py-2 border-2 border-[#F45625]/20 rounded-lg focus:border-[#F45625] focus:outline-none bg-white"
          >
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 border-2 border-[#F45625]/20 rounded-lg focus:border-[#F45625] focus:outline-none bg-white"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6 hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#130F45] group-hover:text-[#F45625] transition-colors mb-2">
                    {job.title}
                  </h3>
                  <p className="text-[#F45625] font-semibold">{job.company}</p>
                </div>
                <span className="px-3 py-1 bg-[#F45625]/10 text-[#F45625] rounded-full text-sm font-semibold">
                  {job.type}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <HiOutlineMapPin className="w-4 h-4" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <HiOutlineCurrencyDollar className="w-4 h-4" />
                  <span className="text-sm">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <HiOutlineClock className="w-4 h-4" />
                  <span className="text-sm">{job.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <HiOutlineBuildingOffice className="w-4 h-4" />
                  <span className="text-sm">{job.department}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">
                {job.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  Posted {new Date(job.postedDate).toLocaleDateString()}
                </span>
                <Link
                  href={`/careers/${job.id}`}
                  className="px-6 py-2 bg-[#F45625] text-white rounded-lg font-semibold hover:bg-[#e04a1f] transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <HiOutlineBriefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No positions found
            </h3>
            <p className="text-gray-500">
              Try adjusting your filters or check back later for new
              opportunities.
            </p>
          </motion.div>
        )}
      </section>

      {/* CTA Section */}
      <section className="relative max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#130F45] to-[#F45625] rounded-3xl p-8 md:p-12 text-center text-white"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            About Our Hiring Process
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            We maintain an active talent pipeline and regularly review
            applications for future opportunities. Our team grows based on
            project needs and strategic initiatives throughout the year.
          </p>
        </motion.div>
      </section>
    </main>
  );
}
