"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiArrowLeft,
  HiOutlineBuildingOffice,
  HiOutlineCheckCircle,
  HiOutlineHeart,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import { motion } from "framer-motion";

// Service details data
const serviceDetails = {
  recruitment: {
    title: "Recruitment Solutions",
    heroImage: "/images/recruitment-hero.jpg",
    description:
      "Our comprehensive recruitment solutions help you find and attract the best talent for your organization. We combine industry expertise with innovative approaches to deliver exceptional results.",
    overview:
      "From executive search to graduate hiring, we provide end-to-end recruitment services tailored to your specific needs. Our team of experienced recruiters understands the importance of finding the right fit for your organization.",
    benefits: [
      "Access to top-tier talent across industries",
      "Reduced time-to-hire",
      "Improved candidate quality",
      "Enhanced employer branding",
      "Cost-effective recruitment solutions",
      "Diversity and inclusion focus",
    ],
    features: [
      {
        title: "Executive Search",
        description:
          "Specialized recruitment for senior and executive positions",
        details: [
          "Comprehensive market mapping",
          "Discrete candidate approach",
          "Thorough assessment process",
          "Competitive compensation analysis",
        ],
      },
      {
        title: "Graduate Hiring",
        description:
          "Strategic recruitment of fresh talent for your organization",
        details: [
          "Campus recruitment programs",
          "Assessment center design",
          "Graduate development planning",
          "Employer branding on campuses",
        ],
      },
      {
        title: "Diversity & Inclusion",
        description: "Building diverse and inclusive teams",
        details: [
          "Inclusive hiring practices",
          "Diversity training",
          "Equal opportunity programs",
          "Inclusive workplace policies",
        ],
      },
      {
        title: "Onboarding Support",
        description: "Seamless transition for new hires",
        details: [
          "Structured onboarding programs",
          "Integration support",
          "Performance tracking",
          "Employee engagement initiatives",
        ],
      },
    ],
    process: [
      "Initial consultation and needs assessment",
      "Job analysis and position profiling",
      "Sourcing and candidate screening",
      "Interview and assessment",
      "Reference checking",
      "Offer management and negotiation",
      "Onboarding support",
    ],
  },
  "hr-consulting": {
    title: "HR Consulting",
    heroImage: "/images/hr-consulting-hero.jpg",
    description:
      "Transform your HR function with our expert consulting services. We help organizations optimize their HR processes, develop effective policies, and drive business growth through strategic HR solutions.",
    overview:
      "Our HR consulting services are designed to address your specific challenges and opportunities. We work closely with you to develop and implement solutions that align with your business objectives.",
    benefits: [
      "Improved HR efficiency",
      "Enhanced compliance",
      "Better employee engagement",
      "Strategic HR alignment",
      "Cost optimization",
      "Risk mitigation",
    ],
    features: [
      {
        title: "HR Audits",
        description: "Comprehensive review of your HR function",
        details: [
          "Policy compliance review",
          "Process efficiency analysis",
          "Risk assessment",
          "Best practice benchmarking",
        ],
      },
      {
        title: "Policy Development",
        description: "Custom HR policies aligned with your business",
        details: [
          "Policy framework design",
          "Employee handbook creation",
          "Compliance documentation",
          "Implementation support",
        ],
      },
      {
        title: "Compliance Guidance",
        description: "Stay compliant with employment laws",
        details: [
          "Regulatory compliance review",
          "Risk management strategies",
          "Compliance training",
          "Audit support",
        ],
      },
      {
        title: "Change Management",
        description: "Navigate organizational change effectively",
        details: [
          "Change strategy development",
          "Communication planning",
          "Stakeholder engagement",
          "Implementation support",
        ],
      },
    ],
    process: [
      "Initial assessment and scoping",
      "Data collection and analysis",
      "Solution development",
      "Implementation planning",
      "Change management",
      "Monitoring and evaluation",
      "Continuous improvement",
    ],
  },
  training: {
    title: "Training & Development",
    heroImage: "/images/training-hero.jpg",
    description:
      "Empower your workforce with our comprehensive training and development programs. We design and deliver engaging learning experiences that drive performance and growth.",
    overview:
      "Our training solutions are tailored to your organization&apos;s specific needs, combining industry best practices with innovative learning methodologies to ensure maximum impact.",
    benefits: [
      "Enhanced employee performance",
      "Improved skill development",
      "Increased employee engagement",
      "Better knowledge retention",
      "Customized learning paths",
      "Measurable results",
    ],
    features: [
      {
        title: "Leadership Workshops",
        description: "Develop strong leaders at all levels",
        details: [
          "Strategic thinking",
          "Team management",
          "Decision making",
          "Change leadership",
        ],
      },
      {
        title: "Soft Skills Training",
        description: "Enhance interpersonal effectiveness",
        details: [
          "Communication skills",
          "Emotional intelligence",
          "Conflict resolution",
          "Time management",
        ],
      },
      {
        title: "Custom E-Learning",
        description: "Flexible, scalable learning solutions",
        details: [
          "Interactive modules",
          "Mobile learning",
          "Progress tracking",
          "Certification programs",
        ],
      },
      {
        title: "Team Building",
        description: "Strengthen team dynamics and collaboration",
        details: [
          "Team workshops",
          "Outdoor activities",
          "Problem-solving exercises",
          "Team assessments",
        ],
      },
    ],
    process: [
      "Training needs analysis",
      "Program design and customization",
      "Content development",
      "Delivery and facilitation",
      "Progress monitoring",
      "Impact assessment",
      "Continuous improvement",
    ],
  },
  "background-checks": {
    title: "Background Checks",
    heroImage: "/images/background-checks-hero.jpg",
    description:
      "Ensure safe and reliable hiring decisions with our comprehensive background screening services. We help you make informed choices while maintaining compliance and efficiency.",
    overview:
      "Our background check services provide thorough verification while ensuring a smooth candidate experience. We combine technology with human expertise to deliver accurate results quickly.",
    benefits: [
      "Enhanced hiring safety",
      "Reduced hiring risks",
      "Improved compliance",
      "Faster turnaround times",
      "Better candidate experience",
      "Comprehensive reporting",
    ],
    features: [
      {
        title: "Reference Checks",
        description: "Verify professional history and performance",
        details: [
          "Employment verification",
          "Performance validation",
          "Character references",
          "Professional reputation",
        ],
      },
      {
        title: "Criminal Record Checks",
        description: "Ensure workplace safety and security",
        details: [
          "Criminal history search",
          "Identity verification",
          "Address history",
          "Security clearance",
        ],
      },
      {
        title: "Credential Verification",
        description: "Validate qualifications and certifications",
        details: [
          "Education verification",
          "Professional licenses",
          "Certifications",
          "Memberships",
        ],
      },
      {
        title: "Employment History",
        description: "Comprehensive work history verification",
        details: [
          "Position verification",
          "Duration confirmation",
          "Salary verification",
          "Reason for leaving",
        ],
      },
    ],
    process: [
      "Initial consultation",
      "Service selection",
      "Candidate consent",
      "Data collection",
      "Verification process",
      "Report generation",
      "Results delivery",
    ],
  },
  "hr-outsourcing": {
    title: "HR Outsourcing",
    heroImage: "/images/hr-outsourcing-hero.jpg",
    description:
      "Streamline your HR operations with our comprehensive outsourcing solutions. Let us handle your HR administration while you focus on growing your business.",
    overview:
      "Our HR outsourcing services provide end-to-end support for all your HR needs, from payroll to compliance, allowing you to reduce costs and improve efficiency.",
    benefits: [
      "Reduced operational costs",
      "Enhanced compliance",
      "Improved efficiency",
      "Access to HR expertise",
      "Scalable solutions",
      "Better employee experience",
    ],
    features: [
      {
        title: "Payroll Management",
        description: "Accurate and timely payroll processing",
        details: [
          "Salary processing",
          "Tax compliance",
          "Benefits administration",
          "Payroll reporting",
        ],
      },
      {
        title: "Benefits Administration",
        description: "Comprehensive benefits management",
        details: [
          "Health insurance",
          "Retirement plans",
          "Leave management",
          "Employee assistance",
        ],
      },
      {
        title: "Employee Records",
        description: "Secure and organized record keeping",
        details: [
          "Digital documentation",
          "Compliance storage",
          "Access management",
          "Data security",
        ],
      },
      {
        title: "HR Helpdesk",
        description: "Dedicated HR support for employees",
        details: [
          "Employee queries",
          "Policy guidance",
          "Issue resolution",
          "Support ticketing",
        ],
      },
    ],
    process: [
      "Needs assessment",
      "Solution design",
      "Implementation planning",
      "Data migration",
      "Service transition",
      "Ongoing support",
      "Continuous improvement",
    ],
  },
  "employee-relations": {
    title: "Employee Relations",
    heroImage: "/images/employee-relations-hero.jpg",
    description:
      "Build a positive workplace culture and resolve conflicts effectively with our employee relations services. We help you create an environment where employees thrive.",
    overview:
      "Our employee relations solutions focus on fostering positive relationships, resolving conflicts, and maintaining a productive work environment through expert guidance and support.",
    benefits: [
      "Improved workplace culture",
      "Reduced conflicts",
      "Better employee engagement",
      "Enhanced productivity",
      "Lower turnover",
      "Stronger teams",
    ],
    features: [
      {
        title: "Conflict Resolution",
        description: "Effective conflict management and resolution",
        details: [
          "Mediation services",
          "Dispute resolution",
          "Grievance handling",
          "Communication strategies",
        ],
      },
      {
        title: "Engagement Surveys",
        description: "Measure and improve employee engagement",
        details: [
          "Survey design",
          "Data collection",
          "Analysis and reporting",
          "Action planning",
        ],
      },
      {
        title: "Performance Management",
        description: "Comprehensive performance solutions",
        details: [
          "Goal setting",
          "Performance reviews",
          "Feedback systems",
          "Development planning",
        ],
      },
      {
        title: "Wellness Programs",
        description: "Promote employee health and wellbeing",
        details: [
          "Health initiatives",
          "Stress management",
          "Work-life balance",
          "Wellness resources",
        ],
      },
    ],
    process: [
      "Initial assessment",
      "Strategy development",
      "Program implementation",
      "Monitoring and support",
      "Feedback collection",
      "Impact evaluation",
      "Continuous improvement",
    ],
  },
};

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const service = serviceDetails[slug as keyof typeof serviceDetails];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#130F45] mb-4">
            Service Not Found
          </h1>
          <Link href="/services" className="text-[#F45625] hover:underline">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

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
          mail: `ajayidaniel.dev@gmail.com`,
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
    <main className="min-h-screen bg-[#F8F9FB]">
      {/* Hero Section */}
      <section className="relative w-full min-h-[650px] flex items-center justify-center overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#130F45]/90 via-[#130F45]/70 to-[#F45625]/40" />
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          href="/services"
          className="inline-flex items-center text-[#130F45] hover:text-[#F45625] transition-colors"
        >
          <HiArrowLeft className="mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Overview Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#130F45] mb-4">Overview</h2>
          <p className="text-gray-600 mb-8">{service.overview}</p>

          <h3 className="text-xl font-bold text-[#130F45] mb-4">
            Key Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {service.benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-[#F8F9FB] rounded-lg"
              >
                <HiOutlineCheckCircle className="w-6 h-6 text-[#F45625] flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#130F45] mb-8 text-center">
          Our Service Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#130F45] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#F45625]" />
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full bg-[#FFF7F3] px-4 py-12">
        <div className=" max-w-7xl mx-auto rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-[#130F45]">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((step, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md border-2 border-[#F45625]/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F45625] to-[#130F45] flex items-center justify-center font-bold text-white text-lg shadow group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-[#130F45] text-base font-medium group-hover:text-[#F45625] transition-colors">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
