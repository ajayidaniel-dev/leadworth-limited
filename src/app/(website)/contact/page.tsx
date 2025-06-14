"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineBuildingOffice,
  HiOutlineChevronDown,
  HiOutlineChevronUp,
} from "react-icons/hi2";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socialLinks = [
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com" },
  { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com" },
  { icon: <FaFacebook />, label: "Facebook", url: "https://facebook.com" },
  { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com" },
];

const faqs = [
  {
    question: "How soon will I get a response?",
    answer:
      "We aim to respond to all inquiries within 24 hours on business days. Once you submit your message, our team will review your request and connect you with the most suitable HR expert for your needs. If you contact us outside of business hours (Monday–Friday, 9am–5pm WAT), we'll get back to you the next working day. You'll receive a confirmation email as soon as your inquiry is received.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Leadworth Consulting Limited provides a comprehensive suite of HR solutions, including:\n\n• Recruitment: Executive search, graduate hiring, onboarding, and diversity & inclusion.\n• HR Consulting: Audits, policy development, compliance, and change management.\n• Training & Development: Leadership workshops, soft skills, e-learning, and team building.\n• Background Checks: Reference, criminal record, credential, and employment verification.\n• HR Outsourcing: Payroll, benefits, employee records, and HR helpdesk.\n• Employee Relations: Conflict resolution, engagement surveys, performance management, and wellness programs.\n\nWe tailor our services to organizations of all sizes and industries.",
  },
  {
    question: "Can I schedule a free consultation?",
    answer:
      "Absolutely! We offer a complimentary, no-obligation consultation to discuss your HR needs. Simply fill out the contact form with your details and area of interest. Our team will reach out to schedule a convenient time—either virtually or in-person. During the consultation, we'll listen to your challenges, answer your questions, and recommend the best solutions for your business. No pressure, just expert advice.",
  },
  {
    question: "Where are you located?",
    answer:
      "Our head office is located at 123 Business Avenue, Lagos, Nigeria. However, we proudly serve clients nationwide and internationally. Many of our services can be delivered remotely, and we're happy to arrange virtual meetings, workshops, or consultations to suit your location and schedule. If you'd like to visit us in person, please contact us to book an appointment.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          <title>New Contact Request</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              line-height: 1.6;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 10px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              background: linear-gradient(135deg, #130F45, #F45625);
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              padding: 20px;
            }
            .field {
              margin-bottom: 15px;
              padding: 10px;
              background-color: #f8f9fa;
              border-radius: 5px;
            }
            .label {
              font-weight: bold;
              color: #F45625;
              margin-bottom: 5px;
            }
            .value {
              color: #333;
            }
            .footer {
              text-align: center;
              padding: 20px;
              color: #666;
              font-size: 0.9em;
              border-top: 1px solid #eee;
            }
            @media (max-width: 600px) {
              .container {
                margin: 10px;
                padding: 10px;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
                <h1>New Contact Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value">${formData.phone}</div>
              </div>
              <div class="field">
                <div class="label">Company Name</div>
                <div class="value">${formData.company}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${formData.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This message was sent from your contact page</p>
            </div>
          </div>
        </body>
      </html>
    `;

    try {
      const response = await fetch("https://techxmail.onrender.com/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          mail: `ajayidaniel.dev@gmail.com`,
          subject: `Contact Form Submission from ${formData.name}`,
          html: htmlTemplate,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
      setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8F9FB] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40 z-0" />
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
            Let&apos;s Connect &amp; Grow Together
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-2 drop-shadow">
            Have a question, need a quote, or want to schedule a consultation?
            We&apos;re here to help!
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Animated Background Accent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-16 -left-16 w-72 h-72 bg-gradient-to-br from-[#F45625]/30 via-[#130F45]/20 to-[#F45625]/10 rounded-full blur-3xl z-0"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 right-0 w-60 h-60 bg-gradient-to-tr from-[#130F45]/20 via-[#F45625]/20 to-[#F45625]/5 rounded-full blur-2xl z-0"
        />
        {/* Contact Form */}
        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          onSubmit={handleSubmit}
          className="relative bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-8 flex flex-col gap-6 z-10"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-2xl font-bold text-[#130F45] mb-2"
          >
            Send Us a Message
          </motion.h2>
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
                id="contact-name"
                autoComplete="off"
              />
              <label
                htmlFor="contact-name"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#130F45]/60
                  peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#F45625] peer-focus:bg-white/90
                  peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
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
                id="contact-email"
                autoComplete="off"
              />
              <label
                htmlFor="contact-email"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#130F45]/60
                  peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#F45625] peer-focus:bg-white/90
                  peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
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
                id="contact-phone"
                autoComplete="off"
              />
              <label
                htmlFor="contact-phone"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#130F45]/60
                  peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#F45625] peer-focus:bg-white/90
                  peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
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
                id="contact-company"
                autoComplete="off"
              />
              <label
                htmlFor="contact-company"
                className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none
                  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#130F45]/60
                  peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#F45625] peer-focus:bg-white/90
                  peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
              >
                Company Name
              </label>
            </motion.div>
          </div>
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
              id="contact-message"
              autoComplete="off"
            />
            <label
              htmlFor="contact-message"
              className="absolute left-4 top-3 text-[#130F45]/60 bg-white/0 px-1 transition-all duration-200 pointer-events-none
                peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#130F45]/60
                peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#F45625] peer-focus:bg-white/90
                peer-[&:not(:placeholder-shown)]:-top-4 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#F45625] peer-[&:not(:placeholder-shown)]:bg-white/90"
            >
              How can we help you?
            </label>
          </motion.div>
          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.97, rotate: 2 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-3 rounded-lg bg-gradient-to-r from-[#130F45] to-[#F45625] text-white font-bold text-lg shadow-md hover:shadow-xl hover:from-[#F45625] hover:to-[#130F45] active:scale-95 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
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
                Send Message
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

        {/* Contact Details & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col gap-8 justify-center"
        >
          <div className="bg-white/90 rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-8">
            <h3 className="text-xl font-bold text-[#130F45] mb-4">
              Contact Details
            </h3>
            <div className="flex flex-col gap-4 text-[#130F45]">
              <div className="flex items-center gap-3">
                <HiOutlineBuildingOffice className="w-6 h-6 text-[#F45625]" />
                <span>Leadworth Consulting Limited</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[#F45625]" />
                <span>123 Business Avenue, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlineEnvelope className="w-6 h-6 text-[#F45625]" />
                <a
                  href="mailto:info@leadworth.com"
                  className="underline hover:text-[#F45625]"
                >
                  info@leadworth.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <HiOutlinePhone className="w-6 h-6 text-[#F45625]" />
                <a
                  href="tel:+2348000000000"
                  className="underline hover:text-[#F45625]"
                >
                  +234 800 000 0000
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-[#130F45] mb-2">
                Connect with us
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#F45625]/10 text-[#F45625] hover:bg-[#F45625] hover:text-white transition-colors text-xl"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#130F45] mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white/90 rounded-xl border border-[#F45625]/10 shadow p-6"
            >
              <button
                className="flex items-center justify-between w-full text-left text-[#130F45] font-semibold text-lg focus:outline-none"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
                aria-controls={`faq-${idx}`}
              >
                <span>{faq.question}</span>
                {openFaq === idx ? (
                  <HiOutlineChevronUp className="w-6 h-6 text-[#F45625]" />
                ) : (
                  <HiOutlineChevronDown className="w-6 h-6 text-[#F45625]" />
                )}
              </button>
              {openFaq === idx && (
                <motion.div
                  id={`faq-${idx}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-4 text-[#130F45]/90"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
