"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { SiAmericanairlines, SiUnitedairlines, SiMarriott, SiDelta, SiBritishairways, SiHilton } from "react-icons/si"
import {
  PiAirplaneTakeoffBold,
  PiBuildingsBold,
  PiDevicesBold,
  PiUsersBold,
  PiCheckCircleBold,
  PiCreditCardBold,
  PiClockCountdownBold,
  PiCalendarBold,
  PiMapPinBold,
  PiUserCircleBold,
} from "react-icons/pi"

const features = [
  {
    id: "flights",
    title: "Startup Flights",
    description: "Access to special rates and centralized booking management for your growing team.",
    icon: PiAirplaneTakeoffBold,
    partners: [
      { name: "American Airlines", icon: SiAmericanairlines },
      { name: "United Airlines", icon: SiUnitedairlines },
      { name: "Delta", icon: SiDelta },
      { name: "British Airways", icon: SiBritishairways },
    ],
    benefits: [
      { text: "Exclusive corporate rates", icon: PiCreditCardBold },
      { text: "Loyalty program management", icon: PiCheckCircleBold },
      { text: "Flexible changes & cancellations", icon: PiClockCountdownBold },
      { text: "24/7 assistance", icon: PiUsersBold },
    ],
    quote: "Seamless business travel experience",
  },
  {
    id: "lodging",
    title: "Startup Workspace",
    description: "Global network of coworking spaces and flexible accommodations for growing teams.",
    icon: PiBuildingsBold,
    partners: [
      { name: "Marriott", icon: SiMarriott },
      { name: "Hilton", icon: SiHilton },
    ],
    benefits: [
      { text: "Exclusive corporate rates", icon: PiCreditCardBold },
      { text: "Guaranteed late check-out", icon: PiClockCountdownBold },
      { text: "Included workspace", icon: PiDevicesBold },
      { text: "Flexible cancellation", icon: PiCheckCircleBold },
    ],
    quote: "Your home away from home",
  },
]

export default function BusinessTravelPlatform() {
  const [activeFeature, setActiveFeature] = useState(features[0].id)

  const currentFeature = features.find((feature) => feature.id === activeFeature) || features[0]

  return (
    <div className="bg-white/50 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1">
          <div className="space-y-2">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all ${
                  activeFeature === feature.id ? "bg-gray-100 border border-gray-200" : "hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg ${
                      activeFeature === feature.id ? "bg-black text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    <feature.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-1">{feature.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="h-full flex flex-col">
            <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden mb-4">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/chaotic-gradients-bg.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11/12 md:w-4/5 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-gray-200">
                    {activeFeature === "flights" && (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/logo/suitpax-bl-logo.webp"
                              alt="Suitpax"
                              width={40}
                              height={10}
                              className="h-3 w-auto"
                            />
                            <span className="text-[10px] font-serif italic text-gray-600">skyways</span>
                          </div>
                          <span className="text-[10px] font-medium text-gray-500">SCALE UP PLAN</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 mb-3">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500">FROM</span>
                            <span className="text-sm font-medium">SFO</span>
                            <span className="text-[10px] text-gray-500">San Francisco</span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] text-gray-500">TO</span>
                            <span className="text-sm font-medium">JFK</span>
                            <span className="text-[10px] text-gray-500">New York</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            <PiCalendarBold className="w-3 h-3 text-gray-600" />
                            <span className="text-[10px] font-medium">Oct 15 - Oct 22</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <PiUserCircleBold className="w-3 h-3 text-gray-600" />
                            <span className="text-[10px] font-medium">3 travelers</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-medium text-gray-500">Economy Plus</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-medium">$1,850</span>
                            <span className="text-[10px] text-gray-500">/ person</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeFeature === "lodging" && (
                      <div className="flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/logo/suitpax-bl-logo.webp"
                              alt="Suitpax"
                              width={40}
                              height={10}
                              className="h-3 w-auto"
                            />
                            <span className="text-[10px] font-serif italic text-gray-600">executive</span>
                          </div>
                          <span className="text-[10px] font-medium text-gray-500">SCALE UP PLAN</span>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">WeWork Shared Office</span>
                            <div className="flex items-center gap-1">
                              <PiMapPinBold className="w-3 h-3 text-gray-600" />
                              <span className="text-[10px] text-gray-500">SoHo, New York</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-1">
                            <PiCalendarBold className="w-3 h-3 text-gray-600" />
                            <span className="text-[10px] font-medium">Oct 15 - Oct 22</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <PiUserCircleBold className="w-3 h-3 text-gray-600" />
                            <span className="text-[10px] font-medium">3 desks</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <span className="text-[10px] font-medium text-gray-500">Hot Desk</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span className="text-xs font-medium">$149</span>
                            <span className="text-[10px] text-gray-500">/ week</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow">
              <h3 className="text-xl font-medium tracking-tighter text-black mb-2">{currentFeature.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{currentFeature.description}</p>

              <div className="mb-6">
                <h4 className="text-xs font-medium text-gray-500 mb-3">TRAVEL NETWORK</h4>
                <div className="grid grid-cols-4 gap-2">
                  {currentFeature.partners.map((partner, idx) => (
                    <motion.div
                      key={partner.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1, type: "spring", stiffness: 400, damping: 15 }}
                      className="flex flex-col items-center justify-center p-2 rounded-lg bg-white border border-gray-200 shadow-sm"
                      title={partner.name}
                    >
                      <partner.icon className="w-5 h-5 text-gray-700" />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 400, damping: 15 }}
                    className="flex flex-col items-center justify-center p-2 rounded-lg bg-gray-50 border border-gray-200"
                  >
                    <span className="text-xs font-medium text-gray-400">+12</span>
                  </motion.div>
                </div>
              </div>

              <div className="mb-6">
                <div className="rounded-xl bg-gray-50 p-4 border-l-4 border-black">
                  <p className="font-serif italic text-lg text-gray-800">"{currentFeature.quote}"</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-medium text-gray-500 mb-2">BENEFITS</h4>
                <div className="grid grid-cols-2 gap-2">
                  {currentFeature.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100">
                        <benefit.icon className="h-3 w-3 text-gray-700" />
                      </span>
                      <span className="text-xs font-medium">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xs font-medium text-gray-500 mb-1">SEAMLESS INTEGRATION</h4>
            <p className="text-sm text-gray-600">Connect with your existing business management tools</p>
          </div>
          <motion.div className="flex items-center gap-1 text-xs font-medium text-black" whileHover={{ scale: 1.05 }}>
            View integrations
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
