"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#F5F6FA] via-[#00AEEF]/10 to-[#FFE5DC] py-20 my-12"
    >
      {/* Decorative Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F45625]/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-[#FFE5DC]/80 rounded-t-full blur-2xl z-0" />
      <div className="relative max-w-4xl mx-auto px-4 md:px-8 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#130F45] mb-8"
        >
          About Us
        </motion.h2>
        {/* Team/Office Image */}

        {/* Two-column grid: Company story/mission and image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-2xl font-bold text-[#130F45] mb-4">
              Our Mission
            </h3>
            <p className="text-[#333333] mb-4">
              Our mission is to provide the highest level of support to
              organizations and business leaders in building people and
              organization’s capabilities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-2xl font-bold text-[#130F45] mb-4 ">
              Our Vision
            </h3>
            <p className="text-[#333333]">
              To be a key provider of strategic consulting services that
              inspires and empowers people and organizations to push their
              limits in performance.
            </p>
          </motion.div>
        </div>
        {/* Animated stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-8 text-center max-w-2xl mx-auto border-t-4 border-[#130F45] mb-12"
        >
          <p className="text-[#333333] text-lg mb-4">
            Leadworth Consulting Limited (LWC) was incorporated in 2022 as a
            recruitment and Human Resources (HR) consulting firm with the
            Corporate Affairs Commission. LWC is a Nigerian company which
            specializes in HR management consulting and Organizational
            competence development, Training, ISO 30414:2025 certification,
            Recruitment services, Manpower Outsourcing, employee background
            verification services, employee assistance services,
            coaching/mentoring services, logistics and facilities Management
            services.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-bold text-[#F45625]">30+</span>
              <span className="text-[#130F45]">Years Experience</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-bold text-[#F45625]">100+</span>
              <span className="text-[#130F45]">Clients Served</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="text-3xl font-bold text-[#F45625]">500+</span>
              <span className="text-[#130F45]">Candidates Placed</span>
            </motion.div>
          </div>
          <Link
            href="/about"
            className="inline-block mt-8 px-6 py-2 border-2 border-[#F45625] text-[#F45625] rounded-lg font-semibold hover:bg-[#F45625] hover:text-white transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>
        {/* Why Choose Us grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8"
        >
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#00AEEF" />
              <path d="M12 28h16v-2c0-4-4-6-8-6s-8 2-8 6v2z" fill="#F45625" />
            </svg>
            <h4 className="font-bold text-[#130F45] mt-4 mb-2">Expert Team</h4>
            <p className="text-[#333333] text-sm">
              Our consultants are industry veterans with a passion for people
              and results.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#F45625" />
              <rect
                x="12"
                y="12"
                width="16"
                height="16"
                rx="4"
                fill="#00AEEF"
              />
            </svg>
            <h4 className="font-bold text-[#130F45] mt-4 mb-2">
              Tailored Solutions
            </h4>
            <p className="text-[#333333] text-sm">
              We customize our services to fit your unique business needs and
              culture.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#130F45" />
              <path d="M20 10v20M10 20h20" stroke="#fff" strokeWidth="3" />
            </svg>
            <h4 className="font-bold text-[#130F45] mt-4 mb-2">
              Proven Results
            </h4>
            <p className="text-[#333333] text-sm">
              We deliver measurable outcomes and long-term value for our
              clients.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#FFE5DC" />
              <rect x="12" y="20" width="16" height="8" rx="2" fill="#F45625" />
            </svg>
            <h4 className="font-bold text-[#130F45] mt-4 mb-2">
              Trusted Support
            </h4>
            <p className="text-[#333333] text-sm">
              We&apos;re always here for you, offering ongoing support and
              expert advice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
