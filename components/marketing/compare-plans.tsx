"use client"

import React from "react"
import { Check, X, HelpCircle } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip"

// Feature categories and their descriptions
const featureCategories = [
  {
    name: "AI Tokens & Usage",
    features: [
      {
        name: "Monthly AI Tokens",
        description: "Number of AI tokens available for use each month",
        free: "5,000",
        basic: "15,000",
        pro: "25,000",
        enterprise: "Unlimited",
      },
      {
        name: "AI Travel Searches",
        description: "Number of AI-powered travel searches per month",
        free: "10/month",
        basic: "30/month",
        pro: "50/month",
        enterprise: "Unlimited",
      },
      {
        name: "Token Rollover",
        description: "Unused tokens roll over to the next month",
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    name: "Travel Management",
    features: [
      {
        name: "Itinerary Management",
        description: "Create, edit, and manage travel itineraries",
        free: "Basic",
        basic: "Standard",
        pro: "Enhanced",
        enterprise: "Advanced",
      },
      {
        name: "Travel Policies",
        description: "Set and enforce travel policies for your team",
        free: "Basic templates",
        basic: "Standard templates",
        pro: "Custom policies",
        enterprise: "Global compliance",
      },
      {
        name: "Expense Tracking",
        description: "Track and manage travel expenses",
        free: "Basic",
        basic: "Advanced",
        pro: "AI-powered",
        enterprise: "Enterprise-grade",
      },
    ],
  },
  {
    name: "Team Features",
    features: [
      {
        name: "Team Members",
        description: "Number of team members allowed on the plan",
        free: "5",
        basic: "15",
        pro: "25",
        enterprise: "Unlimited",
      },
      {
        name: "Team Coordination",
        description: "Coordinate travel for multiple team members",
        free: "Basic",
        basic: "Standard",
        pro: "Advanced",
        enterprise: "Global",
      },
      {
        name: "Multi-Entity Management",
        description: "Manage travel across multiple business entities",
        free: false,
        basic: false,
        pro: false,
        enterprise: true,
      },
    ],
  },
  {
    name: "Support & Integrations",
    features: [
      {
        name: "Customer Support",
        description: "Access to customer support",
        free: "Email",
        basic: "Priority email",
        pro: "24/5 Priority",
        enterprise: "24/7 VIP",
      },
      {
        name: "Bank API Integration",
        description: "Connect bank accounts for seamless expense management",
        free: false,
        basic: "Basic",
        pro: "Basic",
        enterprise: "Full",
      },
      {
        name: "CRM Integration",
        description: "Connect with CRM systems for better customer insights",
        free: false,
        basic: "Basic",
        pro: "Advanced",
        enterprise: "Enterprise",
      },
    ],
  },
]

// Helper function to render feature value
const renderFeatureValue = (value: boolean | string) => {
  if (value === true) {
    return <Check className="h-4 w-4 text-emerald-400" />
  } else if (value === false) {
    return <X className="h-4 w-4 text-gray-600" />
  } else {
    return <span className="text-xs font-medium text-white">{value}</span>
  }
}

export function ComparePlans() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("AI Tokens & Usage")
  const [isAnnual, setIsAnnual] = useState(false)

  const toggleCategory = (category: string) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

  return (
    <TooltipProvider>
      <section className="py-12 sm:py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter text-white leading-none">
              Compare all features
            </h2>
            <p className="mt-3 text-sm text-gray-400">Detailed comparison of all features across our plans</p>
            <div className="flex justify-center mt-6">
              <div className="flex items-center bg-gray-800 p-1 rounded-full">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                    !isAnnual ? "bg-white shadow-sm text-black" : "text-gray-400"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all ${
                    isAnnual ? "bg-white shadow-sm text-black" : "text-gray-400"
                  }`}
                >
                  Annual
                  <span className="ml-1 inline-flex items-center rounded-full bg-emerald-500 px-2 py-0.5 text-[9px] font-medium text-black">
                    Save 20%
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="overflow-x-auto rounded-xl border border-gray-800 shadow-2xl bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="min-w-[800px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-800 bg-gray-900">
                    <th className="py-4 px-4 text-left w-1/5"></th>
                    <th className="py-4 px-4 text-center w-1/5">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-white">Free</span>
                        <span className="text-xs text-gray-400">€0</span>
                        <span className="mt-1 inline-flex items-center rounded-full bg-transparent border border-gray-600 px-3 py-0.5 text-[10px] font-medium text-gray-300">
                          Free
                        </span>
                      </div>
                    </th>
                    <th className="py-4 px-4 text-center w-1/5 bg-gray-800">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-white">Basic</span>
                        <span className="text-xs text-gray-400">{isAnnual ? "€39/month" : "€49/month"}</span>
                        <span className="mt-1 inline-flex items-center rounded-full bg-white px-4 py-0.5 text-[10px] font-medium text-black">
                          Most Popular
                        </span>
                      </div>
                    </th>
                    <th className="py-4 px-4 text-center w-1/5">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-white">Pro</span>
                        <span className="text-xs text-gray-400">{isAnnual ? "€71/month" : "€89/month"}</span>
                        <span className="mt-1 inline-flex items-center rounded-full bg-transparent border border-gray-600 px-3 py-0.5 text-[10px] font-medium text-gray-300">
                          Advanced
                        </span>
                      </div>
                    </th>
                    <th className="py-4 px-4 text-center w-1/5">
                      <div className="flex flex-col items-center">
                        <span className="text-sm font-medium text-white">Enterprise</span>
                        <span className="text-xs text-gray-400">Custom pricing</span>
                        <span className="mt-1 inline-flex items-center rounded-full bg-transparent border border-gray-600 px-3 py-0.5 text-[10px] font-medium text-gray-300">
                          Enterprise
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {featureCategories.map((category, categoryIndex) => (
                    <React.Fragment key={category.name}>
                      <tr
                        className={`border-b border-gray-800 cursor-pointer hover:bg-gray-800/50 ${
                          expandedCategory === category.name ? "bg-gray-800/50" : ""
                        }`}
                        onClick={() => toggleCategory(category.name)}
                      >
                        <td colSpan={6} className="py-3 px-4">
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm text-white">{category.name}</span>
                            <svg
                              className={`w-4 h-4 transition-transform text-gray-400 ${expandedCategory === category.name ? "rotate-180" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>
                        </td>
                      </tr>
                      {expandedCategory === category.name &&
                        category.features.map((feature, index) => (
                          <motion.tr
                            key={`${category.name}-${index}`}
                            className={`border-b border-gray-800 ${index % 2 === 1 ? "bg-gray-800/30" : ""}`}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <td className="py-3 px-4">
                              <div className="flex items-center">
                                <span className="text-xs sm:text-sm font-medium text-white">{feature.name}</span>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <HelpCircle className="h-3 w-3 text-gray-500 ml-1 cursor-help" />
                                  </TooltipTrigger>
                                  <TooltipContent className="bg-gray-800 text-white border-gray-700">
                                    {feature.description}
                                  </TooltipContent>
                                </Tooltip>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-center">{renderFeatureValue(feature.free)}</td>
                            <td className="py-3 px-4 text-center bg-gray-800/30">
                              {renderFeatureValue(feature.basic)}
                            </td>
                            <td className="py-3 px-4 text-center">{renderFeatureValue(feature.pro)}</td>
                            <td className="py-3 px-4 text-center">{renderFeatureValue(feature.enterprise)}</td>
                          </motion.tr>
                        ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-sm text-gray-400 mb-2">Need help choosing the right plan for your business?</p>
            {isAnnual && (
              <p className="text-xs text-emerald-400 font-medium mb-3">
                Annual plans include a 20% discount compared to monthly billing
              </p>
            )}
            <a
              href="mailto:hello@suitpax.com"
              className="inline-flex items-center text-sm font-medium bg-white text-black rounded-xl px-5 py-2.5 hover:bg-gray-200 transition-colors"
            >
              Talk to our sales team
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </TooltipProvider>
  )
}

export default ComparePlans
