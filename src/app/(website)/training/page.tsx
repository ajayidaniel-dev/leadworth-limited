"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlinePresentationChartLine,
  HiOutlineSparkles,
  HiOutlineClipboardDocumentCheck,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

const programs = [
  {
    icon: <HiOutlinePresentationChartLine className="w-8 h-8 text-[#F45625]" />,
    title: "Leadership Development",
    desc: "Empower your leaders with practical skills for inspiring teams and driving results.",
    features: ["Workshops", "Coaching", "Real-world scenarios"],
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8 text-[#130F45]" />,
    title: "Soft Skills Mastery",
    desc: "Boost communication, collaboration, and emotional intelligence across your workforce.",
    features: ["Communication", "Teamwork", "Emotional Intelligence"],
  },
  {
    icon: (
      <HiOutlineClipboardDocumentCheck className="w-8 h-8 text-[#00B4D8]" />
    ),
    title: "Compliance & Ethics",
    desc: "Stay ahead of regulations with engaging, up-to-date compliance training.",
    features: ["HR Law", "Workplace Ethics", "Diversity & Inclusion"],
  },
  {
    icon: <HiOutlineLightBulb className="w-8 h-8 text-[#F9A826]" />,
    title: "Custom Workshops",
    desc: "Tailored training solutions for your unique business needs and goals.",
    features: ["Bespoke Content", "Flexible Delivery", "Expert Facilitators"],
  },
];

const steps = [
  {
    icon: <HiOutlineUserGroup className="w-6 h-6 text-[#F45625]" />,
    title: "Consultation",
    desc: "We assess your needs and recommend the best training programs for your team.",
  },
  {
    icon: <HiOutlineLightBulb className="w-6 h-6 text-[#130F45]" />,
    title: "Engaging Delivery",
    desc: "Our expert facilitators deliver interactive, impactful sessions—onsite or online.",
  },
  {
    icon: <HiOutlineCheckCircle className="w-6 h-6 text-[#00B4D8]" />,
    title: "Real Results",
    desc: "We measure outcomes and provide feedback to ensure lasting impact.",
  },
];

export default function TrainingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Training Request</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); }
            .header { background: linear-gradient(135deg, #130F45, #F45625); color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center; }
            .content { padding: 20px; }
            .field { margin-bottom: 15px; padding: 10px; background-color: #f8f9fa; border-radius: 5px; }
            .label { font-weight: bold; color: #F45625; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 0.9em; border-top: 1px solid #eee; }
            @media (max-width: 600px) { .container { margin: 10px; padding: 10px; } }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
                <h1>New Training Request</h1>
            </div>
            <div class="content">
              <div class="field"><div class="label">Full Name</div><div class="value">${formData.name}</div></div>
              <div class="field"><div class="label">Email Address</div><div class="value">${formData.email}</div></div>
              <div class="field"><div class="label">Phone Number</div><div class="value">${formData.phone}</div></div>
              <div class="field"><div class="label">Company Name</div><div class="value">${formData.company}</div></div>
              <div class="field"><div class="label">Training Interest</div><div class="value">${formData.interest}</div></div>
              <div class="field"><div class="label">Message</div><div class="value">${formData.message}</div></div>
            </div>
            <div class="footer"><p>This message was sent from your training page</p></div>
          </div>
        </body>
      </html>
    `;

    try {
      const response = await fetch("https://techxmail.onrender.com/sendmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          mail: `ajayidaniel.dev@gmail.com`,
          subject: `Training Form Submission from ${formData.name}`,
          html: htmlTemplate,
        }),
      });
      if (!response.ok) throw new Error("Failed to send message");
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8F9FB] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src="/charlesdeluvio-Lks7vei-eAg-unsplash.jpg"
          alt="Leadworth Training & Development"
          fill
          priority
          className="object-cover w-full h-full z-0"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40 z-10" />
        <div className="relative z-20 w-full max-w-3xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm mb-4 ">
            Upskill with Leadworth
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
            Training & Development
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-6 drop-shadow">
            Unlock your team&apos;s potential with engaging, expert-led training
            programs designed for real-world impact.
          </p>
        </div>
      </section>

      {/* Training Programs Grid */}
      <section className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-8 hover:shadow-2xl hover:border-[#F45625] hover:-translate-y-2 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 group-hover:scale-125 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-[#130F45] mb-2 group-hover:text-[#F45625] transition-colors">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-4 min-h-[48px]">{program.desc}</p>
              <ul className="text-left text-sm text-[#130F45] mb-4 space-y-1 w-full max-w-xs mx-auto">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#F45625]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works / Why Train With Us */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/5 via-[#F45625]/5 to-[#130F45]/5" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F45625]/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#130F45]/10 rounded-full filter blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#130F45] mb-4">
              How Our Training Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We make learning engaging, practical, and results-driven for every
              participant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-8 hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group-hover:-translate-y-2 flex flex-col items-center text-center"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-[#F45625]/10 flex items-center justify-center text-[#F45625] group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#130F45] mb-3 group-hover:text-[#F45625] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact/Join Form */}
      <section className="relative max-w-3xl mx-auto px-4 py-16 flex items-center justify-center">
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
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          onSubmit={handleSubmit}
          className="relative z-10 w-full bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-8 flex flex-col gap-6"
        >
          <h2 className="text-2xl font-bold text-[#130F45] mb-2 text-center">
            Join a Training
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 rounded-lg bg-white/60 border border-[#F45625]/20 text-[#130F45] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#F45625]/40 focus:bg-white/90 transition-all"
                placeholder=" "
                id="training-name"
                autoComplete="off"
              />
              <label
                htmlFor="training-name"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base rounded-t-lg peer-placeholder-shown:text-[#130F45]/60 peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#F45625] peer-focus:bg-white/90 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
              >
                Full Name
              </label>
            </motion.div>
            {/* Email */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative"
            >
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 rounded-lg bg-white/60 border border-[#F45625]/20 text-[#130F45] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#F45625]/40 focus:bg-white/90 transition-all"
                placeholder=" "
                id="training-email"
                autoComplete="off"
              />
              <label
                htmlFor="training-email"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base rounded-t-lg peer-placeholder-shown:text-[#130F45]/60 peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#F45625] peer-focus:bg-white/90 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
              >
                Email
              </label>
            </motion.div>
            {/* Phone */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative"
            >
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="peer w-full px-4 py-3 rounded-lg bg-white/60 border border-[#F45625]/20 text-[#130F45] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#F45625]/40 focus:bg-white/90 transition-all"
                placeholder=" "
                id="training-phone"
                autoComplete="off"
              />
              <label
                htmlFor="training-phone"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base rounded-t-lg peer-placeholder-shown:text-[#130F45]/60 peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#F45625] peer-focus:bg-white/90 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
              >
                Phone Number
              </label>
            </motion.div>
            {/* Company */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative"
            >
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="peer w-full px-4 py-3 rounded-lg bg-white/60 border border-[#F45625]/20 text-[#130F45] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#F45625]/40 focus:bg-white/90 transition-all"
                placeholder=" "
                id="training-company"
                autoComplete="off"
              />
              <label
                htmlFor="training-company"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base rounded-t-lg peer-placeholder-shown:text-[#130F45]/60 peer-focus:-top-3 peer-focus:text-[12px] peer-focus:text-[#F45625] peer-focus:bg-white/90 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
              >
                Company Name
              </label>
            </motion.div>
          </div>
          {/* Training Interest */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative"
          >
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="peer w-full px-4 py-3 rounded-lg bg-white/60 border border-[#F45625]/20 text-[#130F45] focus:outline-none focus:ring-2 focus:ring-[#F45625]/40 focus:bg-white/90 transition-all"
            >
              <option value="" className="bg-[#130F45]">
                Select a training program
              </option>
              {programs.map((p) => (
                <option key={p.title} value={p.title} className="bg-[#130F45]">
                  {p.title}
                </option>
              ))}
            </select>
            <label
              htmlFor="training-interest"
              className="absolute left-4 -top-3 rounded-t-lg text-[#F45625] text-[12px] bg-white/90 px-2"
            >
              Training Interest
            </label>
          </motion.div>
          {/* Message */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="relative"
          >
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="peer w-full px-4 py-3 rounded-lg bg-white/60 border border-[#F45625]/20 text-[#130F45] placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#F45625]/40 focus:bg-white/90 transition-all"
              placeholder=" "
              id="training-message"
              autoComplete="off"
            />
            <label
              htmlFor="training-message"
              className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#130F45]/60 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#F45625] peer-focus:bg-white/90 peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
            >
              How can we help you?
            </label>
          </motion.div>
          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.97, rotate: 2 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-[#130F45] to-[#F45625] text-white font-bold text-lg shadow-lg hover:shadow-xl hover:from-[#F45625] hover:to-[#130F45] active:scale-95 transition-all flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                <span className="animate-spin inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2" />
                Sending...
              </>
            ) : (
              <>
                <span role="img" aria-label="paper plane">
                  🛫
                </span>{" "}
                Join Training
              </>
            )}
          </motion.button>
          {/* Success Animation */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center text-green-600 text-center mt-2"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="mb-2"
              >
                <span className="inline-block text-4xl">🎉</span>
              </motion.div>
              Message sent successfully! We&apos;ll get back to you soon.
            </motion.div>
          )}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-600 text-center"
            >
              Something went wrong. Please try again later.
            </motion.div>
          )}
        </motion.form>
      </section>
    </main>
  );
}
