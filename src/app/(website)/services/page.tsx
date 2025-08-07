"use client";
import React, { useState } from "react";
import {
  HiOutlineUserGroup,
  HiOutlineClipboard,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiArrowRight,
  HiOutlineChatBubbleLeftRight,
  HiOutlineDocumentChartBar,
  HiOutlineHeart,
  HiOutlineBuildingOffice,
  HiOutlineUserCircle,
  HiOutlineClipboardDocumentCheck,
  HiOutlinePresentationChartLine,
  HiOutlineWrenchScrewdriver,
  HiOutlinePhone,
  HiOutlineDocumentPlus,
} from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: <HiOutlineDocumentPlus className="w-8 h-8 text-[#F45625]" />,
    title: "HR Audit & ISO 30414",
    desc: "Assess, measure, and report workforce performance with global HR audit standards.",
    features: [
      "Human capital disclosure",
      "ISO 30414 audit",
      "Strategic HR analytics",
      "Data-driven decision making",
    ],
    cta: "/services/audit",
  },
  {
    icon: <HiOutlineUserCircle className="w-8 h-8 text-[#F45625]" />,
    title: "Recruitment",
    desc: "Find and attract top talent with our tailored recruitment solutions for every industry.",
    features: [
      "Executive search",
      "Graduate hiring",
      "Diversity & inclusion",
      "Onboarding support",
    ],
    cta: "/services/recruitment",
  },
  {
    icon: <HiOutlineDocumentChartBar className="w-8 h-8 text-[#F45625]" />,
    title: "HR Consulting",
    desc: "Expert advice and strategies to optimize your HR processes and drive business growth.",
    features: [
      "HR audits",
      "Policy development",
      "Compliance guidance",
      "Change management",
    ],
    cta: "/services/hr-consulting",
  },
  {
    icon: <HiOutlinePresentationChartLine className="w-8 h-8 text-[#F45625]" />,
    title: "Training & Development",
    desc: "Upskill your workforce with engaging, impactful training programs led by industry experts.",
    features: [
      "Leadership workshops",
      "Soft skills training",
      "Custom e-learning",
      "Team building",
    ],
    cta: "/services/training",
  },
  {
    icon: <HiOutlineShieldCheck className="w-8 h-8 text-[#F45625]" />,
    title: "Background Checks",
    desc: "Comprehensive background screening to ensure safe and reliable hiring decisions.",
    features: [
      "Reference checks",
      "Criminal record checks",
      "Credential verification",
      "Employment history",
    ],
    cta: "/services/background-checks",
  },
  {
    icon: <HiOutlineBuildingOffice className="w-8 h-8 text-[#F45625]" />,
    title: "HR Outsourcing",
    desc: "Let us handle your HR admin, payroll, and compliance so you can focus on your core business.",
    features: [
      "Payroll management",
      "Benefits administration",
      "Employee records",
      "HR helpdesk",
    ],
    cta: "/services/hr-outsourcing",
  },
  {
    icon: <HiOutlineHeart className="w-8 h-8 text-[#F45625]" />,
    title: "Employee Relations",
    desc: "Foster a positive workplace culture and resolve conflicts with our expert support.",
    features: [
      "Conflict resolution",
      "Engagement surveys",
      "Performance management",
      "Wellness programs",
    ],
    cta: "/services/employee-relations",
  },
];

const processSteps = [
  {
    title: "Initial Consultation",
    desc: "We begin with a deep dive into your organization's needs, challenges, and goals.",
    details: [
      "Comprehensive needs assessment",
      "Current state analysis",
      "Goal setting and alignment",
      "Timeline and budget planning",
    ],
    icon: <HiOutlineChatBubbleLeftRight className="w-6 h-6" />,
  },
  {
    title: "Strategic Planning",
    desc: "Our experts craft a tailored solution that aligns with your business objectives.",
    details: [
      "Custom strategy development",
      "Resource allocation",
      "Risk assessment",
      "Success metrics definition",
    ],
    icon: <HiOutlineClipboardDocumentCheck className="w-6 h-6" />,
  },
  {
    title: "Implementation",
    desc: "We execute the plan with precision, ensuring minimal disruption to your operations.",
    details: [
      "Phased rollout",
      "Team training",
      "Process integration",
      "Quality assurance",
    ],
    icon: <HiOutlineWrenchScrewdriver className="w-6 h-6" />,
  },
  {
    title: "Ongoing Support",
    desc: "Continuous partnership and support to ensure long-term success and growth.",
    details: [
      "Regular performance reviews",
      "Continuous improvement",
      "24/7 support access",
      "Strategic guidance",
    ],
    icon: <HiOutlinePhone className="w-6 h-6" />,
  },
];

const values = [
  {
    icon: <HiOutlineShieldCheck className="w-8 h-8" />,
    title: "Trusted Expertise",
    desc: "Years of experience and a proven track record in HR excellence.",
    stats: "15+ Years Experience",
    details: [
      "Industry-leading HR professionals",
      "Proven methodologies",
      "Best practice frameworks",
      "Continuous learning & development",
    ],
  },
  {
    icon: <HiOutlineSparkles className="w-8 h-8" />,
    title: "Innovative Solutions",
    desc: "We use the latest tools and methods to solve your HR challenges.",
    stats: "95% Client Satisfaction",
    details: [
      "Cutting-edge HR technology",
      "Data-driven insights",
      "Customized solutions",
      "Future-ready strategies",
    ],
  },
  {
    icon: <HiOutlineUserGroup className="w-8 h-8" />,
    title: "People First",
    desc: "We care about your team and help you build a thriving workplace.",
    stats: "10,000+ Employees Served",
    details: [
      "Employee-centric approach",
      "Cultural alignment",
      "Wellness & engagement",
      "Diversity & inclusion",
    ],
  },
  {
    icon: <HiOutlineClipboard className="w-8 h-8" />,
    title: "Results Driven",
    desc: "We focus on outcomes that move your business forward.",
    stats: "85% ROI Average",
    details: [
      "Measurable outcomes",
      "Performance metrics",
      "Regular reporting",
      "Continuous improvement",
    ],
  },
];

export default function ServicesPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Consultation Request</title>
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
                <h1>New Consultation Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Company Name</div>
                <div class="value">${formData.name}</div>
              </div>
              <div class="field">
                <div class="label">Email Address</div>
                <div class="value">${formData.email}</div>
              </div>
              <div class="field">
                <div class="label">Service</div>
                <div class="value">${formData.service}</div>
              </div>
              
            </div>
            <div class="footer">
              <p>This message was sent from your services page</p>
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
          mail: `info@leadworthconsulting.com`,
          subject: formData.service,
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
      setFormData({ name: "", email: "", service: "" });
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
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-[#F8F9FB] min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/luis-villasmil-4V8uMZx8FYA-unsplash.jpg"
          alt="Leadworth HR Services"
          fill
          priority
          className="object-cover w-full h-full z-0"
          style={{ objectPosition: "center" }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40 z-10" />
        {/* Content */}
        <div className="relative z-20 w-full max-w-3xl mx-auto px-4 py-20 text-center flex flex-col items-center justify-center">
          <span className="inline-block px-4 py-1 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm mb-4 ">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl">
            HR Solutions That Empower{" "}
            <span className="bg-[#F45625]/80 px-2 rounded text-white">
              Your Business
            </span>
          </h1>
          <p className="text-lg text-white/90 max-w-xl mx-auto mb-6 drop-shadow">
            From recruitment to training, background checks to HR outsourcing,
            we deliver people-powered results for organizations of all sizes.
          </p>
          <Link href="/contact">
            <button className="mt-2 px-8 py-3 rounded-lg bg-[#F45625] text-white font-bold text-lg shadow-md hover:bg-[#e04a1f] active:scale-95 transition-all">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8">
        {/* Subtle background accent */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-2/3 h-64 bg-gradient-to-tr from-[#F45625]/10 via-[#130F45]/5 to-transparent rounded-full blur-2xl mx-auto mt-16" />
        </div>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="flex flex-col items-center text-center bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-8 hover:shadow-2xl hover:border-[#F45625] hover:-translate-y-2 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-[#130F45] mb-2 group-hover:text-[#F45625] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 min-h-[48px]">{service.desc}</p>
              <ul className="text-left text-sm text-[#130F45] mb-4 space-y-1 w-full max-w-xs mx-auto">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-[#F45625]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={service.cta} className="mt-auto">
                <span className="inline-block px-5 py-2 rounded-lg bg-[#F45625]/10 text-[#F45625] font-bold text-sm shadow hover:bg-[#F45625] hover:text-white transition-all duration-200">
                  Learn More
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/5 via-[#F45625]/5 to-[#130F45]/5" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F45625]/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#130F45]/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#130F45] mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured approach to ensure successful delivery of
              our HR solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div key={step.title} className="relative group">
                {/* Connection Line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#F45625]/50 to-transparent" />
                )}

                <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-6 hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group-hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#130F45] to-[#F45625] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {i + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-2">
                    <div className="w-12 h-12 rounded-xl bg-[#F45625]/10 flex items-center justify-center text-[#F45625] group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#130F45] mb-3 group-hover:text-[#F45625] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.desc}</p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F45625] mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow Indicator */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[#F45625] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <HiArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link href="/contact">
              <button className="inline-flex items-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#130F45] to-[#F45625] text-white font-bold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all">
                Start Your Journey
                <HiArrowRight className="ml-2 w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F45625]/5 via-[#130F45]/5 to-[#F45625]/5" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#130F45]/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F45625]/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#130F45] mb-4">
              Why Choose Leadworth?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and a people-first approach to
              deliver exceptional HR solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group relative">
                <div className="h-full bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-[#F45625]/10 p-8 hover:shadow-2xl hover:border-[#F45625] transition-all duration-300 group-hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#130F45] to-[#F45625] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-[#130F45] mb-2 group-hover:text-[#F45625] transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>

                    {/* Stats Badge */}
                    <div className="inline-block px-4 py-2 rounded-full bg-[#F45625]/10 text-[#F45625] font-semibold text-sm">
                      {value.stats}
                    </div>

                    {/* Details List */}
                    <ul className="space-y-3 pt-4">
                      {value.details.map((detail, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-gray-600"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F45625] mr-3" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#F45625] transition-colors duration-300 pointer-events-none" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F45625]/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#130F45]/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#130F45] via-[#F45625]/80 to-[#F45625] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-left">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                  Ready to Transform Your HR?
                </h3>
                <p className="text-lg text-white/90 mb-8">
                  Join hundreds of successful companies who trust Leadworth
                  Consulting Limited to build stronger, happier, and more
                  productive teams.
                  <br />
                  <span className="text-white/90 text-sm">
                    <strong>Email:</strong> info@leadworthconsulting.com
                  </span>
                </p>

                {/* Key Benefits */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <HiOutlineShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">
                      Expert HR Solutions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <HiOutlineSparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">
                      Customized Approach
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                      <HiOutlineUserGroup className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">
                      Dedicated Support Team
                    </span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <HiOutlineHeart className="w-5 h-5" />
                    <span>95% Client Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiOutlineBuildingOffice className="w-5 h-5" />
                    <span>500+ Companies Served</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Form */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-6">
                  Get Started Today
                </h4>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-white/90 text-sm font-medium mb-2">
                      Service Interest
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          service: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="" className="bg-[#130F45]">
                        Select a service
                      </option>
                      <option value="Recruitment" className="bg-[#130F45]">
                        Recruitment
                      </option>
                      <option value="HR Consulting" className="bg-[#130F45]">
                        HR Consulting
                      </option>
                      <option
                        value="Training & Development"
                        className="bg-[#130F45]"
                      >
                        Training & Development
                      </option>
                      <option
                        value="Background Checks"
                        className="bg-[#130F45]"
                      >
                        Background Checks
                      </option>
                      <option value="HR Outsourcing" className="bg-[#130F45]">
                        HR Outsourcing
                      </option>
                      <option
                        value="Employee Relations"
                        className="bg-[#130F45]"
                      >
                        Employee Relations
                      </option>
                    </select>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full px-8 py-4 rounded-lg bg-white text-[#F45625] font-bold text-lg shadow-lg hover:bg-[#FFF7F3] active:scale-95 transition-all"
                  >
                    {isSubmitting ? "Sending..." : "Schedule Free Consultation"}
                  </button>
                </div>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 dark:text-green-400 text-center"
                  >
                    Message sent successfully! We&apos;ll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 dark:text-red-400 text-center"
                  >
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
