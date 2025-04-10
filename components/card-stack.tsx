"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Brain,
  Languages,
  MessageSquare,
  Lightbulb,
  CalendarClock,
  Search,
  Code,
  ImageIcon,
  Presentation,
  GraduationCap,
  BookOpen,
  BarChart3,
  TrendingUp,
  Database,
} from "lucide-react"
import ColorThief from "colorthief"

// Update the CardData interface to match our AURA features
interface CardData {
  id: number
  title: string
  subtitle: string
  description: string
  imageUrl: string
  icon: string
  colors: {
    primary: string
    secondary: string
    text: string
    shadow: string
  }
}

// Replace the initialCards array with AURA features with more harmonious colors
const initialCards: CardData[] = [
  {
    id: 1,
    title: "AI-POWERED WRITING",
    subtitle: "Enhance Your Content",
    description:
      "Generate short-form content (emails, social media, summaries), check grammar and style, and paraphrase text.",
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "sparkles",
    colors: {
      primary: "#4338ca", // indigo-700
      secondary: "#6366f1", // indigo-500
      text: "#ffffff",
      shadow: "rgba(67, 56, 202, 0.5)",
    },
  },
  {
    id: 2,
    title: "INTELLIGENT SUMMARIZATION",
    subtitle: "Extract Key Insights",
    description: "Summarize text content from user input, making it easier to digest complex information.",
    imageUrl:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "brain",
    colors: {
      primary: "#4f46e5", // indigo-600
      secondary: "#818cf8", // indigo-400
      text: "#ffffff",
      shadow: "rgba(79, 70, 229, 0.5)",
    },
  },
  {
    id: 3,
    title: "SMART TASK MANAGEMENT",
    subtitle: "Prioritize Efficiently",
    description: "Manage to-do lists with AI-powered prioritization to help you focus on what matters most.",
    imageUrl:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "zap",
    colors: {
      primary: "#5b21b6", // purple-700
      secondary: "#8b5cf6", // purple-500
      text: "#ffffff",
      shadow: "rgba(91, 33, 182, 0.5)",
    },
  },
  {
    id: 4,
    title: "TRANSLATION SERVICES",
    subtitle: "Break Language Barriers",
    description: "Translate text between multiple languages with high accuracy, enabling global communication.",
    imageUrl:
      "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "languages",
    colors: {
      primary: "#6d28d9", // purple-700
      secondary: "#a78bfa", // purple-400
      text: "#ffffff",
      shadow: "rgba(109, 40, 217, 0.5)",
    },
  },
  {
    id: 5,
    title: "TONE ADJUSTMENT",
    subtitle: "Perfect Your Message",
    description: "Adjust the tone of your writing to match your intended audience and purpose.",
    imageUrl:
      "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "messageSquare",
    colors: {
      primary: "#7c3aed", // violet-600
      secondary: "#a78bfa", // violet-400
      text: "#ffffff",
      shadow: "rgba(124, 58, 237, 0.5)",
    },
  },
  {
    id: 6,
    title: "BRAINSTORMING",
    subtitle: "Spark Creativity",
    description: "Generate creative ideas and solutions for your projects when you need inspiration.",
    imageUrl:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "lightbulb",
    colors: {
      primary: "#8b5cf6", // violet-500
      secondary: "#c4b5fd", // violet-300
      text: "#ffffff",
      shadow: "rgba(139, 92, 246, 0.5)",
    },
  },
  {
    id: 7,
    title: "MEETING ASSISTANCE",
    subtitle: "Streamline Collaboration",
    description: "Generate meeting agendas and capture key points to make meetings more productive.",
    imageUrl:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "calendarClock",
    colors: {
      primary: "#3730a3", // indigo-800
      secondary: "#6366f1", // indigo-500
      text: "#ffffff",
      shadow: "rgba(55, 48, 163, 0.5)",
    },
  },
  {
    id: 8,
    title: "INFORMATION RETRIEVAL",
    subtitle: "Research Assistant",
    description: "Find answers to your questions with AI-powered research capabilities.",
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "search",
    colors: {
      primary: "#4c1d95", // purple-900
      secondary: "#8b5cf6", // purple-500
      text: "#ffffff",
      shadow: "rgba(76, 29, 149, 0.5)",
    },
  },
  {
    id: 9,
    title: "CODE GENERATION",
    subtitle: "Developer Tools",
    description: "Generate basic Python & JavaScript snippets to accelerate your development process.",
    imageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "code",
    colors: {
      primary: "#312e81", // indigo-900
      secondary: "#6366f1", // indigo-500
      text: "#ffffff",
      shadow: "rgba(49, 46, 129, 0.5)",
    },
  },
  {
    id: 10,
    title: "IMAGE GENERATION",
    subtitle: "Visual Creation",
    description: "Create and manipulate images using AI technology for your creative projects.",
    imageUrl:
      "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "imageIcon",
    colors: {
      primary: "#5b21b6", // purple-700
      secondary: "#a78bfa", // purple-400
      text: "#ffffff",
      shadow: "rgba(91, 33, 182, 0.5)",
    },
  },
  {
    id: 11,
    title: "PRESENTATION CREATION",
    subtitle: "Impress Your Audience",
    description: "Generate outlines and content for your presentations to save time and effort.",
    imageUrl:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "presentation",
    colors: {
      primary: "#6d28d9", // purple-700
      secondary: "#a78bfa", // purple-400
      text: "#ffffff",
      shadow: "rgba(109, 40, 217, 0.5)",
    },
  },
  {
    id: 12,
    title: "LEARNING PATHS",
    subtitle: "Personalized Education",
    description: "Get personalized content recommendations tailored to your learning journey.",
    imageUrl:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "graduationCap",
    colors: {
      primary: "#4338ca", // indigo-700
      secondary: "#818cf8", // indigo-400
      text: "#ffffff",
      shadow: "rgba(67, 56, 202, 0.5)",
    },
  },
  {
    id: 13,
    title: "LANGUAGE LEARNING",
    subtitle: "Master New Languages",
    description: "Practice vocabulary and grammar in multiple languages to improve your skills.",
    imageUrl:
      "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "bookOpen",
    colors: {
      primary: "#5b21b6", // purple-700
      secondary: "#a78bfa", // purple-400
      text: "#ffffff",
      shadow: "rgba(91, 33, 182, 0.5)",
    },
  },
  {
    id: 14,
    title: "DATA VISUALIZATION",
    subtitle: "See Your Data Clearly",
    description: "Create visual representations of your data to identify patterns and insights.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "barChart3",
    colors: {
      primary: "#4c1d95", // purple-900
      secondary: "#8b5cf6", // purple-500
      text: "#ffffff",
      shadow: "rgba(76, 29, 149, 0.5)",
    },
  },
  {
    id: 15,
    title: "TREND IDENTIFICATION",
    subtitle: "Stay Ahead of the Curve",
    description: "Identify basic trends in your data and information to make informed decisions.",
    imageUrl:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "trendingUp",
    colors: {
      primary: "#6d28d9", // purple-700
      secondary: "#a78bfa", // purple-400
      text: "#ffffff",
      shadow: "rgba(109, 40, 217, 0.5)",
    },
  },
  {
    id: 16,
    title: "DATA SUMMARIZATION",
    subtitle: "Simplify Complexity",
    description: "Summarize complex datasets into digestible insights for better understanding.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2760&q=80",
    icon: "database",
    colors: {
      primary: "#4338ca", // indigo-700
      secondary: "#818cf8", // indigo-400
      text: "#ffffff",
      shadow: "rgba(67, 56, 202, 0.5)",
    },
  },
]

export default function CardStack() {
  const [cards, setCards] = useState<CardData[]>(initialCards)
  const [loading, setLoading] = useState(true)
  const [extractedColors, setExtractedColors] = useState<boolean>(false)

  // Extract colors from images when component mounts
  useEffect(() => {
    const extractColors = async () => {
      if (extractedColors) return

      const updatedCards = [...cards]
      const colorThief = new ColorThief()

      for (let i = 0; i < updatedCards.length; i++) {
        const card = updatedCards[i]
        try {
          const img = new Image()
          img.crossOrigin = "Anonymous"
          img.src = card.imageUrl

          await new Promise((resolve) => {
            img.onload = () => {
              try {
                const palette = colorThief.getPalette(img, 3)

                // Convert RGB to hex and create color scheme
                const primaryColor = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]})`
                const secondaryColor = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]})`
                const shadowColor = `rgba(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]}, 0.6)`

                // Determine if text should be white or black based on primary color brightness
                const brightness = (palette[0][0] * 299 + palette[0][1] * 587 + palette[0][2] * 114) / 1000
                const textColor = brightness < 128 ? "#ffffff" : "#000000"

                // We're not using the extracted colors to maintain harmony with the background
                // Instead, we'll keep our predefined colors that match the cosmic theme
                /*
                updatedCards[i].colors = {
                  primary: primaryColor,
                  secondary: secondaryColor,
                  text: textColor,
                  shadow: shadowColor,
                }
                */
              } catch (error) {
                console.error("Error extracting colors:", error)
              }
              resolve(null)
            }
          })
        } catch (error) {
          console.error("Error loading image:", error)
        }
      }

      setExtractedColors(true)
      setLoading(false)
    }

    extractColors()
  }, [cards, extractedColors])

  const removeCard = (id: number) => {
    setCards((prevCards) => {
      const newCards = prevCards.filter((card) => card.id !== id)

      // If we've gone through all cards, reset to the initial set
      if (newCards.length === 0) {
        return initialCards
      }

      // Otherwise, cycle through the cards
      return newCards
    })
  }

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "sparkles":
        return <Sparkles className="h-5 w-5" />
      case "brain":
        return <Brain className="h-5 w-5" />
      case "zap":
        return <Zap className="h-5 w-5" />
      case "languages":
        return <Languages className="h-5 w-5" />
      case "messageSquare":
        return <MessageSquare className="h-5 w-5" />
      case "lightbulb":
        return <Lightbulb className="h-5 w-5" />
      case "calendarClock":
        return <CalendarClock className="h-5 w-5" />
      case "search":
        return <Search className="h-5 w-5" />
      case "code":
        return <Code className="h-5 w-5" />
      case "imageIcon":
        return <ImageIcon className="h-5 w-5" />
      case "presentation":
        return <Presentation className="h-5 w-5" />
      case "graduationCap":
        return <GraduationCap className="h-5 w-5" />
      case "bookOpen":
        return <BookOpen className="h-5 w-5" />
      case "barChart3":
        return <BarChart3 className="h-5 w-5" />
      case "trendingUp":
        return <TrendingUp className="h-5 w-5" />
      case "database":
        return <Database className="h-5 w-5" />
      default:
        return <ArrowUpRight className="h-5 w-5" />
    }
  }

  if (loading) {
    return <div className="flex h-96 w-full items-center justify-center text-white">Loading cards...</div>
  }

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="popLayout">
        {cards.slice(0, 3).map((card, index) => (
          <Card
            key={card.id}
            card={card}
            index={index}
            removeCard={removeCard}
            getIconComponent={getIconComponent}
            totalCards={Math.min(cards.length, 3)}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

interface CardProps {
  card: CardData
  index: number
  removeCard: (id: number) => void
  getIconComponent: (iconName: string) => JSX.Element
  totalCards: number
}

function Card({ card, index, removeCard, getIconComponent, totalCards }: CardProps) {
  const zIndex = totalCards - index
  const yOffset = index * 20 // Reduced vertical offset for MacBook screen
  const xOffset = index * 5 // Added horizontal offset

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, x: xOffset }}
      animate={{
        opacity: 1,
        y: yOffset,
        x: xOffset,
        scale: 1 - index * 0.04,
        rotateZ: index * -2, // Reduced rotation for more professional look
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 1,
      }}
      style={{
        zIndex,
        boxShadow: `0 ${10 + index * 5}px ${20 + index * 5}px ${card.colors.shadow}, 0 0 15px rgba(255, 255, 255, 0.1)`,
        backgroundColor: card.colors.primary,
        border: "1px solid rgba(255, 255, 255, 0.1)",
      }}
      className="absolute left-0 top-0 h-full w-full cursor-grab overflow-hidden rounded-2xl backdrop-blur-sm active:cursor-grabbing"
      drag={index === 0} // Allow drag in all directions for the top card
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (index === 0) {
          const distance = Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2))
          if (distance > 100) {
            // Reduced threshold for easier swiping
            removeCard(card.id)
          }
        }
      }}
      whileDrag={{
        scale: 1.03, // Reduced scale for more subtle effect
        boxShadow: `0 ${15 + index * 5}px ${30 + index * 5}px ${card.colors.shadow}, 0 0 20px rgba(255, 255, 255, 0.2)`,
      }}
    >
      <motion.div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl"
        style={{ color: card.colors.text }}
      >
        {/* Card Header - More compact */}
        <div className="flex items-center justify-between p-3">
          <div className="rounded-full bg-opacity-20 p-2" style={{ backgroundColor: `${card.colors.text}20` }}>
            {getIconComponent(card.icon)}
          </div>
          <div className="rounded-full bg-opacity-20 p-2" style={{ backgroundColor: `${card.colors.text}20` }}>
            <ArrowUpRight className="h-5 w-5" />
          </div>
        </div>

        {/* Card Title - More compact */}
        <div className="px-4 py-1">
          <h2 className="text-2xl font-bold">{card.title}</h2>
          <h3 className="text-lg font-medium" style={{ color: `${card.colors.text}99` }}>
            {card.subtitle}
          </h3>
        </div>

        {/* Card Image - Smaller aspect ratio */}
        <div className="mt-1 overflow-hidden px-4">
          <div
            className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${card.imageUrl})`,
              boxShadow: `0 5px 15px ${card.colors.shadow}`,
            }}
          />
        </div>

        {/* Card Footer - More compact */}
        <div className="mt-auto p-3">
          <div
            className="rounded-full px-3 py-1 text-xs"
            style={{
              backgroundColor: `${card.colors.text}20`,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            {getIconComponent(card.icon)}
            <span className="ml-1">{card.subtitle}</span>
          </div>
          <p className="mt-2 text-xs opacity-80">{card.description}</p>
        </div>

        {/* Drag indicator for the top card */}
        {index === 0 && (
          <div className="absolute bottom-1 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <motion.div
              className="h-1 w-10 rounded-full"
              style={{ backgroundColor: `${card.colors.text}40` }}
              animate={{ y: [0, 3, 0] }} // Reduced animation range
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
