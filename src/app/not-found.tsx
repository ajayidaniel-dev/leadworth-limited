"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FB] px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center text-center"
      >
        {/* SVG Illustration */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <svg
            width="220"
            height="180"
            viewBox="0 0 220 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              cx="110"
              cy="160"
              rx="90"
              ry="15"
              fill="#F45625"
              fillOpacity="0.12"
            />
            <circle cx="110" cy="80" r="60" fill="#F45625" fillOpacity="0.15" />
            <circle cx="110" cy="80" r="50" fill="#130F45" fillOpacity="0.10" />
            <rect
              x="60"
              y="60"
              width="100"
              height="60"
              rx="20"
              fill="#fff"
              stroke="#F45625"
              strokeWidth="3"
            />
            <circle cx="90" cy="90" r="6" fill="#F45625" />
            <circle cx="130" cy="90" r="6" fill="#F45625" />
            <ellipse
              cx="110"
              cy="110"
              rx="12"
              ry="6"
              fill="#F45625"
              fillOpacity="0.5"
            />
            <text
              x="110"
              y="105"
              textAnchor="middle"
              fontSize="18"
              fill="#130F45"
              fontWeight="bold"
            >
              ?
            </text>
          </svg>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-5xl font-extrabold text-[#130F45] mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-2xl font-bold text-[#F45625] mb-2"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-gray-600 mb-8 max-w-md"
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
          <br />
          Let&apos;s get you back to something awesome!
        </motion.p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.97, rotate: 2 }}
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#130F45] to-[#F45625] text-white font-bold text-lg shadow-md hover:shadow-xl active:scale-95 transition-all"
          >
            Go Home
          </motion.button>
        </Link>
      </motion.div>
    </main>
  );
}
