"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "HR Audit & ISO 30414",
    desc: "We help organizations measure, manage, and report workforce performance with globally recognized standards. Ensure compliance, transparency, and data-driven HR strategies with ISO 30414 human capital reporting.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="10" y="10" width="28" height="28" rx="4" fill="#F45625" />
        <path
          d="M16 20H32"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 26H32"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16 32H24"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Manpower Recruitment",
    desc: "Connecting top talent with leading employers for lasting success. We manage the entire recruitment process, from sourcing and screening to placement and onboarding, ensuring you get the best fit for your organization.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="16" r="8" fill="#00AEEF" />
        <ellipse cx="24" cy="34" rx="14" ry="8" fill="#F45625" />
        <circle cx="24" cy="16" r="8" stroke="#130F45" strokeWidth="2" />
        <ellipse
          cx="24"
          cy="34"
          rx="14"
          ry="8"
          stroke="#130F45"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  // {
  //   title: "Training & Development",
  //   desc: "Empowering teams with skills for tomorrow's workplace. Our programs are tailored to boost leadership, digital skills, and communication, helping your staff grow and thrive in a dynamic business world.",
  //   icon: (
  //     <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
  //       <rect x="8" y="12" width="32" height="20" rx="4" fill="#F45625" />
  //       <rect
  //         x="8"
  //         y="12"
  //         width="32"
  //         height="20"
  //         rx="4"
  //         stroke="#130F45"
  //         strokeWidth="2"
  //       />
  //       <rect x="20" y="32" width="8" height="4" rx="2" fill="#00AEEF" />
  //     </svg>
  //   ),
  // },
  {
    title: "Background Checks",
    desc: "Ensuring trust and safety with thorough verification. We conduct comprehensive background checks, reference verification, and credential validation to protect your business and reputation.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="16" fill="#FFE5DC" />
        <circle cx="24" cy="24" r="16" stroke="#130F45" strokeWidth="2" />
        <path
          d="M18 24l4 4 8-8"
          stroke="#F45625"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "HR Outsourcing",
    desc: "Streamlining HR processes so you can focus on growth. We handle payroll, compliance, employee relations, and more, acting as your trusted HR partner for efficiency and peace of mind.",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <rect x="8" y="20" width="32" height="12" rx="6" fill="#00AEEF" />
        <rect
          x="8"
          y="20"
          width="32"
          height="12"
          rx="6"
          stroke="#130F45"
          strokeWidth="2"
        />
        <circle
          cx="16"
          cy="26"
          r="4"
          fill="#F45625"
          stroke="#130F45"
          strokeWidth="2"
        />
        <circle
          cx="32"
          cy="26"
          r="4"
          fill="#FFE5DC"
          stroke="#130F45"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#FFE5DC] via-[#F5F6FA] to-[#00AEEF]/10 my-12 py-20"
    >
      {/* Decorative Shapes */}
      <div className="absolute -top-16 left-1/4 w-72 h-72 bg-[#00AEEF]/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-64 h-32 bg-[#F45625]/10 rounded-t-full blur-2xl z-0" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#130F45] mb-4"
        >
          What We Do
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-[#333333] text-lg max-w-2xl mx-auto mb-12"
        >
          Discover our full suite of HR solutions designed to help your business
          attract, develop, and retain top talent. We combine expertise,
          technology, and a people-first approach to deliver results you can
          trust.
        </motion.p>
        {/* Mockup Illustration above cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl h-56 sm:h-40 md:h-40 flex items-center justify-center overflow-x-auto">
            {/* Workflow line */}
            <div className="absolute left-4 right-4 top-1/2 h-1 bg-gradient-to-r from-[#00AEEF] via-[#F45625] to-[#130F45] opacity-30 rounded-full z-0" />
            {/* Floating icons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#00AEEF]/90 rounded-xl shadow-lg flex flex-col items-center justify-center border-4 border-white animate-float">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect
                  x="8"
                  y="20"
                  width="32"
                  height="12"
                  rx="6"
                  fill="#00AEEF"
                />
                <rect
                  x="8"
                  y="20"
                  width="32"
                  height="12"
                  rx="6"
                  stroke="#130F45"
                  strokeWidth="2"
                />
                <circle
                  cx="16"
                  cy="26"
                  r="4"
                  fill="#F45625"
                  stroke="#130F45"
                  strokeWidth="2"
                />
                <circle
                  cx="32"
                  cy="26"
                  r="4"
                  fill="#FFE5DC"
                  stroke="#130F45"
                  strokeWidth="2"
                />
              </svg>
              <div className="text-white font-bold mt-1 text-[10px] md:text-xs">
                Recruit
              </div>
            </div>
            <div className="absolute left-1/4 sm:left-1/3 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#F45625]/90 rounded-xl shadow-lg flex flex-col items-center justify-center border-4 border-white animate-float2">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#fff" />
                <rect
                  x="12"
                  y="12"
                  width="16"
                  height="16"
                  rx="4"
                  fill="#F45625"
                />
              </svg>
              <div className="text-white font-bold mt-1 text-[10px] md:text-xs">
                Train
              </div>
            </div>
            <div className="absolute right-1/4 sm:right-1/3 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#130F45]/90 rounded-xl shadow-lg flex flex-col items-center justify-center border-4 border-white animate-float3">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#fff" />
                <path d="M20 10v20M10 20h20" stroke="#130F45" strokeWidth="3" />
              </svg>
              <div className="text-white font-bold mt-1 text-[10px] md:text-xs">
                Verify
              </div>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 bg-[#FFE5DC] rounded-xl shadow-lg flex flex-col items-center justify-center border-4 border-white animate-float4">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="20" fill="#fff" />
                <path
                  d="M10 30h20v-2c0-4-4-6-10-6s-10 2-10 6v2z"
                  fill="#F45625"
                />
              </svg>
              <div className="text-[#F45625] font-bold mt-1 text-[10px] md:text-xs">
                Outsource
              </div>
            </div>
          </div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px 0 rgba(244,86,37,0.15)",
              }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group border-t-4 border-[#00AEEF] relative"
            >
              <div className="mb-4 bg-[#00AEEF]/10 rounded-full p-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#130F45] mb-2">
                {service.title}
              </h3>
              <p className="text-[#333333] text-base">{service.desc}</p>
              {/* Fun floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                className="absolute -top-6 right-6 bg-[#F45625] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md "
              >
                {service.title.split(" ")[0]}
              </motion.div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/services"
            className="px-8 py-3 bg-[#F45625] text-white rounded-lg font-semibold shadow hover:bg-[#e04a1f] transition-colors duration-300 text-lg"
          >
            See All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
