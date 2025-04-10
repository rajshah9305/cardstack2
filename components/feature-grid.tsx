"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import type { Feature } from "@/lib/features"
import FeatureCard from "./feature-card"

interface FeatureGridProps {
  features: Feature[]
}

export default function FeatureGrid({ features }: FeatureGridProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          onMouseEnter={() => setHoveredId(feature.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="h-full"
        >
          <FeatureCard feature={feature} isHovered={hoveredId === feature.id} />
        </motion.div>
      ))}
    </div>
  )
}
