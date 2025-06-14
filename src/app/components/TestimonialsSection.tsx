"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Williams",
    role: "HR Manager, Acme Corp",
    text: "Leadworth transformed our hiring process. Their team is professional, responsive, and truly understands our needs!",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "John Smith",
    role: "CEO, TechNova",
    text: "The training programs were engaging and impactful. Our team is more motivated than ever!",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Aisha Bello",
    role: "Talent Lead, FinEdge",
    text: "Excellent background checks and HR support. Highly recommended for any growing business!",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Carlos Mendez",
    role: "Operations, GlobalBiz",
    text: "Their HR outsourcing made our processes seamless. We trust Leadworth for all our HR needs!",
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#00AEEF]/10 via-[#F5F6FA] to-[#FFE5DC] py-20 my-12"
    >
      {/* Decorative Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F45625]/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#00AEEF]/20 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-[#FFE5DC]/80 rounded-t-full blur-2xl z-0" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#130F45] mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-[#333333] text-lg max-w-2xl mx-auto mb-12"
        >
          We&apos;re proud to partner with amazing organizations and
          professionals. Here&apos;s what some of our clients have to say about
          working with Leadworth.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, scale: 0.95, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                type: "spring",
                bounce: 0.3,
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(0,174,239,0.10)",
                rotate: 1,
              }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 group border-l-4 border-[#F45625] relative"
            >
              {/* Quote Icon */}
              <svg
                className="absolute -top-6 left-6 w-10 h-10 text-[#00AEEF]/30"
                fill="none"
                viewBox="0 0 40 40"
              >
                <text
                  x="0"
                  y="32"
                  fontSize="40"
                  fontWeight="bold"
                  fill="currentColor"
                >
                  “
                </text>
              </svg>
              <Image
                src={t.image}
                alt={t.name}
                width={72}
                height={72}
                className="rounded-full mb-4 border-4 border-[#F45625] group-hover:scale-110 transition-transform duration-300 shadow-md"
              />
              <p className="text-[#333333] italic mb-4 text-lg">{t.text}</p>
              <div className="font-semibold text-[#130F45]">{t.name}</div>
              <div className="text-[#F45625] text-sm">{t.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
