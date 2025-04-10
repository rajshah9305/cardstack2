"use client"

import { motion } from "framer-motion"
import type { Feature } from "@/lib/features"

interface FeatureCardProps {
  feature: Feature
  isHovered: boolean
}

export default function FeatureCard({ feature, isHovered }: FeatureCardProps) {
  return (
    <motion.div
      className={`flex h-full flex-col rounded-xl p-6 shadow-lg transition-all duration-300 ${feature.bgColor} ${isHovered ? "scale-105" : ""}`}
      whileHover={{ y: -5 }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
        <feature.icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
      <p className="mt-auto text-white/90">{feature.description}</p>
    </motion.div>
  )
}
