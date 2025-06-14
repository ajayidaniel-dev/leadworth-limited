"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const trainings = [
  {
    title: "Leadership Mastery",
    desc: "Unlock your leadership potential with hands-on workshops, real-world scenarios, and expert coaching. Learn to inspire, motivate, and guide teams to success in any environment.",
    image:
      "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Digital Skills Bootcamp",
    desc: "Accelerate your digital transformation. This bootcamp covers essential tools, collaboration platforms, cybersecurity basics, and the latest in remote work best practices.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Effective Communication",
    desc: "Master the art of clear, persuasive, and empathetic communication. Includes public speaking, active listening, and conflict resolution for the modern workplace.",
    image:
      "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
  },
];

export default function TrainingSection() {
  return (
    <section
      id="training"
      className="relative w-full overflow-hidden bg-gradient-to-br from-[#F5F6FA] via-[#00AEEF]/10 to-[#FFE5DC] my-12 py-20"
    >
      {/* Decorative Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00AEEF]/20 rounded-full blur-3xl z-0" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#F45625]/20 rounded-full blur-2xl z-0" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-[#FFE5DC]/80 rounded-t-full blur-2xl z-0" />
      <div className="relative max-w-7xl mx-auto px-4 md:px-8 z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#130F45] mb-4"
        >
          Training Programs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-[#333333] text-lg max-w-2xl mx-auto mb-12"
        >
          Invest in your people with our expertly designed training programs.
          Whether you&apos;re building leaders, boosting digital skills, or
          improving communication, we have a course for every team.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainings.map((training, idx) => (
            <motion.div
              key={training.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 group border-b-4 border-[#F45625] relative"
            >
              <div className="h-48 w-full relative bg-[#FFE5DC] flex items-center justify-center">
                <Image
                  src={training.image}
                  alt={training.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 rounded-t-xl"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  className="absolute top-4 right-4 bg-[#00AEEF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md"
                >
                  {training.title.split(" ")[0]}
                </motion.div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#130F45] mb-2">
                  {training.title}
                </h3>
                <p className="text-[#333333] text-base">{training.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="/training"
            className="px-8 py-3 bg-[#F45625] text-white rounded-lg font-semibold shadow hover:bg-[#e04a1f] transition-colors duration-300 text-lg"
          >
            See All Programs
          </a>
        </div>
      </div>
    </section>
  );
}
