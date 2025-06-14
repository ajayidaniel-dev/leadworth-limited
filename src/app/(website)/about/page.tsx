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
import TestimonialsSection from "@/app/components/TestimonialsSection";

const team = [
  {
    name: "Daniel Ajayi",
    role: "Founder & CEO",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    linkedin: "#",
    funFact: "Loves hiking and jazz music.",
  },
  {
    name: "Aisha Bello",
    role: "Head of HR Consulting",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    linkedin: "#",
    funFact: "Speaks 3 languages and is a coffee enthusiast.",
  },
  {
    name: "Chinedu Okafor",
    role: "Lead Recruiter",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    linkedin: "#",
    funFact: "Plays chess competitively.",
  },
  {
    name: "Fatima Yusuf",
    role: "Training Manager",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    linkedin: "#",
    funFact: "Avid traveler and foodie.",
  },
];

const values = [
  {
    icon: <HiOutlineHeart className="w-8 h-8 text-[#F45625]" />,
    title: "People First",
    desc: (
      <>
        <span className="font-semibold text-[#130F45] block mb-1">
          Empowering People
        </span>
        We put people at the heart of everything we do, fostering growth,
        well-being, and a sense of belonging. Our approach ensures every client
        and employee feels valued, heard, and empowered to reach their full
        potential.
      </>
    ),
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-[#130F45]" />,
    title: "Innovation",
    desc: (
      <>
        <span className="font-semibold text-[#130F45] block mb-1">
          Forward-Thinking Solutions
        </span>
        We embrace creativity and forward-thinking to deliver modern HR
        solutions. By staying ahead of industry trends and leveraging new
        technologies, we help our clients adapt, grow, and thrive in a rapidly
        changing world.
      </>
    ),
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8 text-[#00B4D8]" />,
    title: "Collaboration",
    desc: (
      <>
        <span className="font-semibold text-[#130F45] block mb-1">
          Stronger Together
        </span>
        We believe in teamwork, open communication, and building lasting
        partnerships. Our collaborative spirit extends to our clients, partners,
        and within our own team, ensuring every project benefits from diverse
        perspectives and shared expertise.
      </>
    ),
  },
  {
    icon: <HiOutlineStar className="w-8 h-8 text-[#F9A826]" />,
    title: "Excellence",
    desc: (
      <>
        <span className="font-semibold text-[#130F45] block mb-1">
          Raising the Bar
        </span>
        We strive for the highest standards in service, results, and client
        satisfaction. Our commitment to excellence drives us to exceed
        expectations, deliver measurable outcomes, and continuously improve in
        everything we do.
      </>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F9FB] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/patrick-tomasso-1NTFSnV-KLs-unsplash.jpg"
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
            Leadworth Consulting Limited is a leading HR consultancy firm based
            in Lagos, Nigeria, serving clients nationwide and internationally.
            Since our founding, we&apos;ve been dedicated to helping
            organizations unlock their full potential by providing expert HR
            solutions tailored to their unique needs. Our team of passionate
            professionals brings decades of combined experience in recruitment,
            HR consulting, training, and employee relations.
          </p>
          <p className="text-lg text-gray-700">
            We believe that people are the heart of every successful business.
            That&apos;s why we focus on building strong partnerships, fostering
            innovation, and delivering measurable results for our clients.
            Whether you&apos;re a startup or a multinational, we&apos;re here to
            help you build a thriving, future-ready workforce.
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
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#F45625]/10 to-[#130F45]/5 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
        >
          <HiOutlineGlobeAlt className="w-12 h-12 text-[#F45625] mb-4" />
          <h3 className="text-xl font-bold text-[#130F45] mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To empower organizations and individuals to achieve their goals by
            delivering innovative, people-centric HR solutions that drive
            growth, engagement, and long-term success.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-gradient-to-br from-[#130F45]/10 to-[#F45625]/5 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center"
        >
          <HiOutlineSparkles className="w-12 h-12 text-[#130F45] mb-4" />
          <h3 className="text-xl font-bold text-[#130F45] mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To be the most trusted and innovative HR partner, inspiring positive
            change and building workplaces where people and businesses flourish
            together.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border-2 border-[#F45625]/10 p-6 flex flex-col items-center text-center hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-[#F45625]/20 group-hover:border-[#F45625] transition-all">
                <Image
                  width={96}
                  height={96}
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
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#130F45] hover:text-[#F45625] text-sm font-medium mt-2"
              >
                <FaLinkedin className="w-4 h-4" /> LinkedIn
              </a>
            </motion.div>
          ))}
        </div>
      </section>
      <TestimonialsSection />

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
          <a href="/contact" className="inline-block">
            <motion.button
              whileTap={{ scale: 0.97, rotate: 2 }}
              className="px-10 py-4 rounded-xl bg-white text-[#F45625] font-bold text-lg shadow-lg hover:bg-[#FFF7F3] active:scale-95 transition-all flex items-center gap-2"
            >
              <span role="img" aria-label="spark">
                ✨
              </span>{" "}
              Contact Us
            </motion.button>
          </a>
        </motion.div>
      </section>
    </main>
  );
}
