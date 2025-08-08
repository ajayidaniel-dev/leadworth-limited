"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ServicesSection from "../components/ServicesSection";
import TrainingSection from "../components/TrainingSection";
// import PartnerSection from "../components/PartnerSection";
// import TestimonialsSection from "../components/TestimonialsSection";
import AboutSection from "../components/AboutSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen  bg-[#F5F6FA]">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/homeIcon.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative w-full overflow-hidden  min-h-[600px] flex items-center"
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/80 via-[#130F45]/60 to-[#F45625]/40 z-10" />

        {/* Decorative Shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-3xl z-0" />
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#F45625]/20 rounded-full blur-2xl z-0" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-[#FFE5DC]/80 rounded-t-full blur-2xl z-0" />

        <div className="relative w-full max-w-[95%] lg:max-w-7xl xl:max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-8 py-16 md:py-24 gap-8 z-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className=" text-center  flex-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
            >
              HR Solutions <span className="text-[#F45625]">Reimagined</span>
              <br />
              For <span className="text-[#00AEEF]">Modern</span> Teams
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto "
            >
              Discover a new era of recruitment, training, and HR consulting. We
              help you build, grow, and empower your workforce with creativity
              and care.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="px-8 py-3 bg-[#F45625] text-white rounded-lg font-semibold shadow hover:bg-[#e04a1f] transition-colors duration-300 text-lg"
              >
                Explore Services
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#130F45] transition-colors duration-300 text-lg"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
          {/* Mockup Illustration */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className=" flex justify-center mb-8 md:mb-0 z-10 flex-1 w-full"
          >
            <div className="relative w-full max-w-md h-[320px] md:h-[360px] flex items-center justify-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-44 bg-white rounded-2xl shadow-xl border-2 border-[#F45625]/30 flex flex-col items-center justify-center p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#F45625]" />
                  <div className="w-3 h-3 rounded-full bg-[#00AEEF]" />
                  <div className="w-3 h-3 rounded-full bg-[#130F45]" />
                </div>
                <div className="w-20 h-20 rounded-full bg-[#FFE5DC] flex items-center justify-center mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <circle cx="20" cy="20" r="20" fill="#F45625" />
                    <text
                      x="50%"
                      y="55%"
                      textAnchor="middle"
                      fill="#fff"
                      fontSize="18"
                      fontWeight="bold"
                      dy=".3em"
                    >
                      HR
                    </text>
                  </svg>
                </div>
                <div className="font-bold text-[#130F45] text-lg">
                  Welcome, Team!
                </div>
                <div className="text-[#333333] text-xs">
                  Your HR dashboard is ready
                </div>
              </div>
              <div className="absolute -top-8 left-2 w-24 h-24 bg-[#00AEEF]/90 rounded-xl shadow-lg flex flex-col items-center justify-center border-4 border-white animate-bounce-slow">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="16" r="12" fill="#fff" />
                  <ellipse cx="20" cy="32" rx="12" ry="6" fill="#F45625" />
                </svg>
                <div className="text-white font-bold mt-1">Jane</div>
              </div>
              <div className="absolute -bottom-8 right-2 w-24 h-24 bg-[#F45625]/90 rounded-xl shadow-lg flex flex-col items-center justify-center border-4 border-white animate-bounce-slow2">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="16" r="12" fill="#fff" />
                  <ellipse cx="20" cy="32" rx="12" ry="6" fill="#00AEEF" />
                </svg>
                <div className="text-white font-bold mt-1">Sam</div>
              </div>
              <div className="absolute top-8 right-0 w-32 h-16 bg-[#130F45] rounded-xl shadow-lg flex flex-col items-center justify-center border-4 border-white animate-float">
                <div className="text-white font-bold">+3 New Hires</div>
                <div className="text-[#FFE5DC] text-xs">This week</div>
              </div>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* What We Do */}
      <ServicesSection />
      {/*  Partner Section */}
      {/* <PartnerSection /> */}
      {/* About Us (Short) */}
      <AboutSection />

      {/* Training Programs */}
      <TrainingSection />

      {/* Testimonials */}
      {/* <TestimonialsSection /> */}

      {/* Call to Action / Contact */}
      <section
        id="contact"
        className="relative max-w-[1400px] mx-auto px-4 py-20 bg-gradient-to-r from-[#F45625] via-[#F45625]/90 to-[#00AEEF]/80 rounded-3xl my-16 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 text-white max-w-6xl mx-auto"
        >
          <div className="text-center lg:text-left max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              Ready to Transform Your{" "}
              <span className="text-[#FFE5DC] relative">
                HR Strategy?
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute -bottom-2 left-0 w-full h-1 bg-[#FFE5DC]"
                />
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-lg md:text-xl mb-8 text-white/90"
            >
              Let&apos;s discuss how we can elevate your organization&apos;s
              potential with our expert HR solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-white text-[#F45625] rounded-xl font-semibold shadow-lg hover:bg-[#FFE5DC] hover:text-[#F45625] transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-lg"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-lg"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative w-[450px] h-[500px] p-6 md:p-0"
          >
            <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl transform -rotate-6" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="relative bg-white rounded-xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 overflow-hidden h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Professional HR Consulting"
                width={500}
                height={500}
                className="rounded-lg object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#130F45]/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.8 }}
                  className="text-xl font-bold mb-2"
                >
                  Transform Your HR
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.9 }}
                  className="text-sm opacity-90"
                >
                  Expert solutions for modern teams
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
