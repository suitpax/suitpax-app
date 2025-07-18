"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function FoundersOpenLetter() {
  return (
    <div className="relative py-20 md:py-28 lg:py-32 bg-black">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-md bg-white/5 backdrop-blur-sm px-3 py-1 text-[10px] font-medium text-white/80 border border-white/10 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 animate-pulse"></span> From my mind to yours
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tighter leading-none max-w-4xl mx-auto bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent normal-case"
          >
            Why I built Suitpax?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-xs sm:text-sm font-medium text-white/60 max-w-2xl"
          >
            My journey to revolutionize business travel and why I believe it's time for a change
          </motion.p>
        </div>

        {/* Founder section */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center">
            {/* Alberto */}
            <motion.div
              className="flex flex-col max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image src="/founders/alberto.webp" alt="" fill className="object-cover rounded-xl" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white flex items-center">
                    Alberto Zurano
                    <a
                      href="https://linkedin.com/in/alberto-zurano-burillo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center ml-2 text-white/40 hover:text-white/80 transition-colors duration-200"
                    >
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        width="12"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="8"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="inline-block ml-0.5"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </h3>
                  <div className="flex flex-col gap-1 mt-1">
                    <div className="inline-flex items-center px-2 py-0.5 rounded-md bg-white/5 border border-gray-200/20">
                      <div className="flex items-center">
                        <span className="text-[9px] text-white/80 mr-1.5">Founder and CEO</span>
                      </div>
                      <div className="h-3 w-px bg-white/20 mx-1.5"></div>
                      <a
                        href="https://www.aena.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center"
                      >
                        <div className="flex flex-col mr-1">
                          <span className="text-[8px] text-white/60 group-hover:text-white/80 transition-colors duration-200">
                            ex-Aena
                          </span>
                          <span className="text-[7px] text-white/40 group-hover:text-white/60 transition-colors duration-200 -mt-0.5">
                            IBEX 35
                          </span>
                        </div>
                        <div className="relative h-3.5 w-12">
                          <Image
                            src="https://cdn.brandfetch.io/aena.es/w/512/h/250/logo?c=1idU-l8vdm7C5__3dci"
                            alt="Aena"
                            fill
                            className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-xs text-white/70 italic font-serif">
                <p>
                  "After experiencing the frustrations of business travel firsthand, I knew there had to be a better
                  way. With Suitpax, I'm building the platform I always wished existed."
                </p>
                <p>
                  "My vision goes beyond just another travel platform—I'm creating an ecosystem that truly
                  understands the unique needs of business travelers and their companies."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Personal statement */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-white/80 italic font-serif max-w-3xl mx-auto text-xs">
              "I'm committed to building a platform that doesn't just meet the needs of today's business
              travelers but anticipates the challenges of tomorrow. Suitpax is more than a product—it's my vision for
              the future of business travel."
            </p>
            <div className="mt-4 flex justify-center space-x-1 text-xs">
              <span className="text-white font-medium">Alberto</span>
              <span className="text-white/60">|</span>
              <span className="text-white/60">April 2025</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}