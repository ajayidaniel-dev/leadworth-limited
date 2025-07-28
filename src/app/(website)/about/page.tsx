"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlineStar,
} from "react-icons/hi2";
import { FaLinkedin } from "react-icons/fa";
// import TestimonialsSection from "@/app/components/TestimonialsSection";
import Link from "next/link";

const team = [
  {
    name: "Mr Wale Arowojobe",
    role: "Founder & CEO",
    img: "/ceo.jpg",
    linkedin: "https://www.linkedin.com/in/wale-arowojobe/",
    funFact: "Loves hiking and jazz music.",
  },
  // {
  //   name: "Aisha Bello",
  //   role: "Head of HR Consulting",
  //   img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  //   linkedin: "#",
  //   funFact: "Speaks 3 languages and is a coffee enthusiast.",
  // },
  // {
  //   name: "Chinedu Okafor",
  //   role: "Lead Recruiter",
  //   img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  //   linkedin: "#",
  //   funFact: "Plays chess competitively.",
  // },
  // {
  //   name: "Fatima Yusuf",
  //   role: "Training Manager",
  //   img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  //   linkedin: "#",
  //   funFact: "Avid traveler and foodie.",
  // },
];

const values = [
  {
    icon: <HiOutlineStar className="w-8 h-8 text-[#F45625]" />, // Leadership
    title: "Leadership",
    desc: "Developing and supporting strong leaders who inspire and guide others.",
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8 text-[#130F45]" />, // Excellence
    title: "Excellence",
    desc: "Pursuing the highest quality in products, services, and performance.",
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8 text-[#00B4D8]" />, // Accountability
    title: "Accountability",
    desc: "Taking responsibility for one’s actions and ensuring the achievement of goals.",
  },
  {
    icon: <HiOutlineHeart className="w-8 h-8 text-[#F45625]" />, // Dependability
    title: "Dependability",
    desc: "Fostering accountability and building trust as we consistently deliver on our commitments.",
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-[#130F45]" />, // Work-Life Balance
    title: "Work-Life Balance",
    desc: "Promoting work-life balance and overall well-being for employees.",
  },
  {
    icon: <HiOutlineGlobeAlt className="w-8 h-8 text-[#00B4D8]" />, // Ownership
    title: "Ownership",
    desc: "Encouraging employees to take initiative and make decisions that drive the company forward.",
  },
  {
    icon: <HiOutlineHeart className="w-8 h-8 text-[#F45625]" />, // Respect
    title: "Respect",
    desc: "Treating everyone with dignity, empathy, and fairness, regardless of their background or position.",
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8 text-[#00B4D8]" />, // Team Work
    title: "Team Work",
    desc: "Promoting teamwork, open communication, and cooperation across the organization.",
  },
  {
    icon: <HiOutlineHeart className="w-8 h-8 text-[#F45625]" />, // Health
    title: "Health",
    desc: "Focusing on both the physical and mental health of the organization for improved employee engagement and increase ROI on HC cost.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/patrick-tomasso-1NTFSnV-KLs-unsplash.jpg"
          alt="About Leadworth Consulting Limited"
          fill
          priority
          className="object-cover w-full h-full z-0"
          style={{ objectPosition: "center" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40 z-10" />
        {/* Content */}
        <div className="relative z-20 w-full max-w-3xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block px-4 py-1 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm mb-4 "
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-xl"
          >
            About Leadworth Consulting Limited
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow"
          >
            Empowering organizations and people to thrive through innovative,
            people-first HR solutions.
          </motion.p>
        </div>
      </section>

      {/* About the Company */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/90 rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#130F45] mb-4">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Leadworth Consulting Limited (LWC) was incorporated in 2022 as a
            recruitment and Human Resources (HR) consulting firm with the
            Corporate Affairs Commission. LWC is a Nigerian company which
            specializes in HR management consulting and Organizational
            competence development, Training, ISO 30414 certification,
            Recruitment services, Manpower Outsourcing, employee background
            verification services, employee assistance services,
            coaching/mentoring services, logistics and facilities Management
            services. In addition to the extensive industrial experience in
            Human Resource Management and organizational logistics management,
            we have pool of experts in our faculty specializing in specific
            areas that serve our growing clientele in various sectors of the
            economy.
          </p>
          <p className="text-lg text-gray-700">
            At LWC, we work together with companies as smart partners in
            providing hands-on solutions to help solve day to day business
            challenges by developing their human capital with focus on creating
            lasting value and increase productivity. We believe in holistic
            approach-becoming a part of our client’s business and gaining as
            much in-depth knowledge about their operations and challenges so as
            to help them resolve them and re-engineer their system. Our focus is
            to support our valued clients in meeting their needs, achieving
            their goals in improving their business results. Our philosophy is
            to add value to our clients by being more than just providers of HR
            and corporate services but also partners to our clients. By
            embracing and exceeding our clients’ expectations, the success of
            each client becomes the success of LWC. This level of service is
            achieved by dedicating a team of professionals to meet the unique
            needs of each client. LWC operates from its head office in Ibadan.
          </p>
        </motion.div>
        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4  gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#130F45] mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#130F45] mb-2">500+</div>
            <div className="text-gray-600">Clients Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#130F45] mb-2">95%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#130F45] mb-2">10k+</div>
            <div className="text-gray-600">Employees Impacted</div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#F45625]/10 to-[#130F45]/5 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
        >
          <HiOutlineGlobeAlt className="w-12 h-12 text-[#F45625] mb-4" />
          <h3 className="text-xl font-bold text-[#130F45] mb-2">Our Mission</h3>
          <p className="text-gray-700">
            Our mission is to provide the highest level of support to
            organizations and business leaders in building people and
            organization’s capabilities.
          </p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-[#130F45]/10 to-[#F45625]/5 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
        >
          <HiOutlineSparkles className="w-12 h-12 text-[#130F45] mb-4" />
          <h3 className="text-xl font-bold text-[#130F45] mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To be a key provider of strategic consulting services that inspires
            and empowers people and organizations to push their limits in
            performance.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#130F45] mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {values.map((value, idx) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6 flex flex-col items-center text-center hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group"
            >
              <div className="mb-4 group-hover:scale-125 transition-transform duration-300">
                {value.icon}
              </div>
              <h4 className="text-lg font-bold text-[#130F45] mb-2 group-hover:text-[#F45625] transition-colors">
                {value.title}
              </h4>
              <p className="text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#130F45] mb-8 text-center">
          Meet the Team
        </h2>
        {/* center this incase it is just one */}
        <div className="flex justify-center flex-wrap gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="w-full sm:w-[45%] md:w-[22%] bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6 flex flex-col items-center text-center hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-[#F45625]/20 group-hover:border-[#F45625] transition-all">
                <Image
                  width={150}
                  height={150}
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold text-[#130F45] mb-1 group-hover:text-[#F45625] transition-colors">
                {member.name}
              </h4>
              <p className="text-[#F45625] font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.funFact}</p>
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#130F45] hover:text-[#F45625] text-sm font-medium mt-2"
              >
                <FaLinkedin className="w-4 h-4" /> LinkedIn
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      {/* <TestimonialsSection /> */}

      {/* CTA Section */}
      <section className="relative max-w-7xl mx-auto px-4 py-16 flex items-center justify-center">
        {/* Animated Gradient & Blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#130F45] via-[#F45625]/80 to-[#F45625] z-0 shadow-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute -top-10 -left-10 w-40 h-40 bg-[#F45625]/30 rounded-full blur-2xl z-0"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-0 right-0 w-32 h-32 bg-[#130F45]/30 rounded-full blur-2xl z-0"
        />
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 w-full text-center flex flex-col items-center justify-center p-10 sm:p-14"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4 drop-shadow-xl"
          >
            🚀 Ready to build a brighter future with us?
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-white/90 mb-8 max-w-xl mx-auto"
          >
            Let&apos;s work together to create a thriving, people-powered
            organization. Join hundreds of happy clients who trust Leadworth to
            transform their HR and unlock new possibilities.
          </motion.p>
          <Link href="/contact" className="inline-block">
            <motion.button
              whileTap={{ scale: 0.97, rotate: 2 }}
              className="px-10 py-4 rounded-xl bg-white text-[#F45625] font-bold text-lg shadow-lg hover:bg-[#FFF7F3] active:scale-95 transition-all flex items-center gap-2"
            >
              <span role="img" aria-label="spark">
                ✨
              </span>{" "}
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
