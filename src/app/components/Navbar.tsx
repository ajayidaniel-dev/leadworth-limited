"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { logo } from "../asset/images";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Services", path: "/services" },
  { name: "Training Programs", path: "/training" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const underlineVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 shadow-2xl transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center h-full">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group flex items-center h-full"
            >
              <Image
                src={logo}
                alt="LeadWorth Logo"
                width={120}
                height={48}
                className="object-contain max-h-12 md:max-h-14 max-w-[120px]"
                priority
              />
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F45625]"
                initial={false}
                animate={{
                  width: "100%",
                  opacity: 0,
                }}
                whileHover={{
                  width: "100%",
                  opacity: 1,
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.path === "/"
                  ? pathname === "/"
                  : pathname.toLowerCase().startsWith(link.path.toLowerCase());

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative group"
                >
                  <motion.div
                    variants={linkVariants}
                    whileHover="hover"
                    className={`relative ${
                      isActive ? "text-[#F45625]" : "text-[#130F45]"
                    } transition-colors duration-300`}
                  >
                    {link.name}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#F45625]"
                      variants={underlineVariants}
                      initial="hidden"
                      animate={isActive ? "visible" : "hidden"}
                      whileHover="visible"
                    />
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#F45625]"
                      initial={{ width: 0, opacity: 0 }}
                      whileHover={{ width: "100%", opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <motion.div className="md:hidden" whileTap={{ scale: 0.95 }}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#130F45] hover:text-[#F45625] focus:outline-none p-2"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.3,
                  delay: 0.1,
                },
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  duration: 0.3,
                },
                opacity: {
                  duration: 0.2,
                },
              },
            }}
            className="md:hidden bg-white/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.path === "/"
                    ? pathname === "/"
                    : pathname
                        .toLowerCase()
                        .startsWith(link.path.toLowerCase());
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                  >
                    <motion.div
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className={`block px-3 py-2 rounded-md text-base font-medium ${
                        isActive
                          ? "text-[#F45625] bg-[#FFE5DC]"
                          : "text-[#130F45] hover:text-[#F45625] hover:bg-[#FFE5DC]"
                      } transition-colors duration-300`}
                    >
                      {link.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
