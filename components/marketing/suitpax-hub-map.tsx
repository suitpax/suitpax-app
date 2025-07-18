"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  PiMapPinBold,
  PiUsersBold,
  PiChatCircleBold,
  PiAirplaneTakeoffBold,
  PiBuildingsBold,
  PiCalendarBold,
  PiDevicesBold,
  PiPhoneBold,
  PiVideoCameraBold,
  PiWaveformBold,
  PiLightningBold,
} from "react-icons/pi"

const teamMembers = [
  {
    name: "Ammar Foley",
    image: "/community/ammar-foley.webp",
    location: "San Francisco",
    status: "traveling",
    action: "Quick Call",
    icon: PiPhoneBold,
  },
  {
    name: "Owen Harding",
    image: "/community/owen-harding.webp",
    location: "New York",
    status: "available",
    action: "Video Chat",
    icon: PiVideoCameraBold,
  },
  {
    name: "Jordan Burgess",
    image: "/community/jordan-burgess.webp",
    location: "London",
    status: "in-event",
    action: "Join Live Event",
    icon: PiWaveformBold,
  },
  {
    name: "Nicolas Trevino",
    image: "/community/nicolas-trevino.webp",
    location: "Berlin",
    status: "traveling",
    action: "Schedule Meet",
    icon: PiCalendarBold,
  },
  {
    name: "Scott Clayton",
    image: "/community/scott-clayton.webp",
    location: "Toronto",
    status: "available",
    action: "Connect Now",
    icon: PiLightningBold,
  },
  {
    name: "Lana Steiner",
    image: "/community/lana-steiner.jpg",
    location: "Paris",
    status: "in-event",
    action: "Join Suitpax Live",
    icon: PiWaveformBold,
  },
]

const cityBadges = [
  {
    name: "London",
    image: "/placeholder.svg?height=32&width=48",
    members: 3,
  },
  {
    name: "San Francisco",
    image: "/placeholder.svg?height=32&width=48",
    members: 2,
  },
  {
    name: "Paris",
    image: "/placeholder.svg?height=32&width=48",
    members: 1,
  },
  {
    name: "Tokyo",
    image: "/placeholder.svg?height=32&width=48",
    members: 2,
  },
  {
    name: "New York",
    image: "/placeholder.svg?height=32&width=48",
    members: 4,
  },
  {
    name: "Berlin",
    image: "/placeholder.svg?height=32&width=48",
    members: 1,
  },
]

const features = [
  {
    icon: PiMapPinBold,
    title: "Real-time Location",
    description: "See where your team is traveling",
  },
  {
    icon: PiUsersBold,
    title: "Team Connections",
    description: "Connect with colleagues nearby",
  },
  {
    icon: PiChatCircleBold,
    title: "Smart Networking",
    description: "AI-powered introductions",
  },
  {
    icon: PiBuildingsBold,
    title: "Company Hubs",
    description: "Discover partner offices",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "traveling":
      return "bg-white"
    case "available":
      return "bg-gray-300"
    case "in-meeting":
      return "bg-gray-400"
    case "in-event":
      return "bg-gray-600"
    default:
      return "bg-gray-500"
  }
}

const getStatusLabel = (status: string) => {
  switch (status) {
    case "traveling":
      return "Traveling"
    case "available":
      return "Available"
    case "in-meeting":
      return "In meeting"
    case "in-event":
      return "Live event"
    default:
      return "Offline"
  }
}

export default function SuitpaxHubMap() {
  const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

  return (
    <section className="pt-12 pb-6 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-xl bg-white/5 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium text-white/80 border border-white/10 mb-6">
            Global Team Network
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-white mb-4">
            <span className="font-serif italic">Connect</span> <span className="font-sans">with your team</span>
            <br />
            <span className="font-sans">anywhere in the</span> <span className="font-serif italic">world</span>
          </h2>

          <p className="text-sm font-light text-white/60 max-w-2xl mx-auto">
            Suitpax Hub Map transforms business travel into meaningful connections. Discover teammates, partners, and
            opportunities wherever your journey takes you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl p-6">
              <div
                className="relative w-full aspect-square max-w-lg mx-auto rounded-xl overflow-hidden"
                style={{
                  backgroundImage: `url('/images/radial-pattern-bg.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Dark overlay for better contrast */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Team member avatars distributed across the map */}
                <div className="absolute inset-0">
                  {teamMembers.map((member, index) => {
                    // Better distribution positions for 6 members
                    const positions = [
                      { top: '15%', left: '20%' },  // Top left
                      { top: '25%', left: '75%' },  // Top right
                      { top: '45%', left: '15%' },  // Middle left
                      { top: '40%', left: '65%' },  // Middle right
                      { top: '70%', left: '30%' },  // Bottom left
                      { top: '65%', left: '80%' },  // Bottom right
                    ]
                    
                    return (
                    <motion.div
                      key={member.name}
                      className="absolute cursor-pointer group"
                      style={{
                        top: positions[index]?.top || '50%',
                        left: positions[index]?.left || '50%',
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15, type: "spring", stiffness: 400, damping: 15 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      onClick={() => setSelectedMember(member)}
                    >
                      <div className="relative">
                        <div className="relative">
                          <Image
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            width={36}
                            height={36}
                            className="rounded-xl object-cover shadow-lg ring-2 ring-white/50"
                          />
                          <div
                            className={`absolute -top-1 -right-1 w-3 h-3 ${getStatusColor(
                              member.status,
                            )} rounded-full border-2 border-white ${
                              member.status === "traveling" || member.status === "in-event" ? "animate-pulse" : ""
                            }`}
                          />
                        </div>

                        {/* Modern interactive badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ delay: index * 0.15 + 0.4, type: "spring", stiffness: 300, damping: 20 }}
                          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 group-hover:scale-110 transition-all duration-300"
                        >
                          <div className="bg-white/10 backdrop-blur-md text-white rounded-lg px-3 py-1.5 text-[9px] font-medium whitespace-nowrap shadow-xl border border-white/20">
                            <div className="flex items-center gap-1.5">
                              <member.icon className="w-3 h-3" />
                              <span>{member.action}</span>
                            </div>
                            {/* Subtle glow effect */}
                            <div className="absolute inset-0 bg-white/5 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                          </div>
                        </motion.div>
                      </div>

                      {selectedMember?.name === member.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 15, scale: 0.8 }}
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200/50 p-4 min-w-[160px] z-30"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <Image
                              src={member.image || "/placeholder.svg"}
                              alt={member.name}
                              width={28}
                              height={28}
                              className="rounded-lg object-cover"
                            />
                            <div>
                              <p className="text-xs font-semibold text-black">{member.name}</p>
                              <p className="text-[10px] text-gray-500">{member.location}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 mb-3">
                            <div className={`w-2.5 h-2.5 ${getStatusColor(member.status)} rounded-full`}></div>
                            <span className="text-[10px] text-gray-600 font-medium">
                              {getStatusLabel(member.status)}
                            </span>
                          </div>

                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-black text-white rounded-lg text-[10px] font-semibold shadow-lg hover:bg-gray-800 transition-all duration-300"
                          >
                            <member.icon className="w-3 h-3" />
                            {member.action}
                          </motion.button>
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* City badges with modern styling */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {cityBadges.slice(0, 4).map((city, index) => (
                      <motion.div
                        key={city.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/10 backdrop-blur-md rounded-lg p-2 shadow-lg border border-white/20 flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
                      >
                        <Image
                          src={city.image || "/placeholder.svg"}
                          alt={city.name}
                          width={28}
                          height={20}
                          className="rounded object-cover opacity-80"
                        />
                        <div>
                          <p className="text-[10px] font-semibold text-white">{city.name}</p>
                          <p className="text-[8px] text-white/60">{city.members} members</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-xs font-medium text-white mb-2">Live Team Activity</p>
                <div className="flex items-center justify-center gap-3 text-[10px] text-white/60">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>6 traveling</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <span>8 available</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
                    <span>2 in events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl p-5">
              <h3 className="text-lg font-medium tracking-tighter text-white mb-3">Smart Team Discovery</h3>
              <p className="text-xs text-white/70 mb-4">
                AI-powered insights help you make the most of every business trip by connecting you with the right
                people at the right time.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 400, damping: 15 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="p-1.5 rounded-lg bg-white/10">
                        <feature.icon className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <h4 className="text-xs font-medium text-white mb-1">{feature.title}</h4>
                    <p className="text-[10px] text-white/60">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl p-5">
              <h4 className="text-lg font-medium tracking-tighter text-white mb-3">Quick Connect</h4>

              <div className="space-y-2">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <PiAirplaneTakeoffBold className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">Find teammates in NYC</span>
                  </div>
                  <span className="text-[10px] text-white/60">3 available</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <PiWaveformBold className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">Join Suitpax Live event</span>
                  </div>
                  <span className="text-[10px] text-white/60">Starting now</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <PiVideoCameraBold className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">Start team video call</span>
                  </div>
                  <span className="text-[10px] text-white/60">5 online</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <PiDevicesBold className="w-3 h-3 text-white" />
                    <span className="text-xs font-medium text-white">Book shared workspace</span>
                  </div>
                  <span className="text-[10px] text-white/60">WeWork SoHo</span>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl p-6">
            <h3 className="text-xl font-medium tracking-tighter text-white mb-3">Never travel alone again</h3>
            <p className="text-xs text-white/70 mb-4 max-w-md mx-auto">
              Join thousands of professionals who use Suitpax Hub Map to turn business trips into networking
              opportunities and meaningful connections.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-xl font-medium text-xs hover:bg-gray-100 transition-colors"
            >
              <PiMapPinBold className="w-3 h-3" />
              Explore Hub Map
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}