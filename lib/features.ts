import {
  Pen,
  FileText,
  CheckSquare,
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

export interface Feature {
  id: string
  title: string
  description: string
  icon: any
  bgColor: string
}

export const features: Feature[] = [
  {
    id: "writing-assistant",
    title: "AI-Powered Writing Assistant",
    description:
      "Generate short-form content (emails, social media, summaries), check grammar and style, and paraphrase text.",
    icon: Pen,
    bgColor: "bg-violet-500 hover:bg-violet-600",
  },
  {
    id: "summarization",
    title: "Intelligent Summarization",
    description: "Summarize text content from user input.",
    icon: FileText,
    bgColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    id: "task-management",
    title: "Smart Task Management",
    description: "Manage to-do lists with AI-powered prioritization.",
    icon: CheckSquare,
    bgColor: "bg-emerald-500 hover:bg-emerald-600",
  },
  {
    id: "translation",
    title: "Translation Services",
    description: "Translate text between multiple languages with high accuracy.",
    icon: Languages,
    bgColor: "bg-cyan-500 hover:bg-cyan-600",
  },
  {
    id: "tone-adjustment",
    title: "Tone Adjustment",
    description: "Adjust the tone of your writing to match your intended audience.",
    icon: MessageSquare,
    bgColor: "bg-pink-500 hover:bg-pink-600",
  },
  {
    id: "brainstorming",
    title: "Brainstorming and Idea Generation",
    description: "Generate creative ideas and solutions for your projects.",
    icon: Lightbulb,
    bgColor: "bg-amber-500 hover:bg-amber-600",
  },
  {
    id: "meeting-assistance",
    title: "Meeting Assistance",
    description: "Generate meeting agendas and capture key points.",
    icon: CalendarClock,
    bgColor: "bg-indigo-500 hover:bg-indigo-600",
  },
  {
    id: "information-retrieval",
    title: "Information Retrieval & Research",
    description: "Find answers to your questions with AI-powered research.",
    icon: Search,
    bgColor: "bg-teal-500 hover:bg-teal-600",
  },
  {
    id: "code-generation",
    title: "Code Generation",
    description: "Generate basic Python & JavaScript snippets for your projects.",
    icon: Code,
    bgColor: "bg-slate-500 hover:bg-slate-600",
  },
  {
    id: "image-generation",
    title: "AI-Powered Image Generation",
    description: "Create and manipulate images using AI technology.",
    icon: ImageIcon,
    bgColor: "bg-rose-500 hover:bg-rose-600",
  },
  {
    id: "presentation-assistance",
    title: "Presentation Creation Assistance",
    description: "Generate outlines and content for your presentations.",
    icon: Presentation,
    bgColor: "bg-orange-500 hover:bg-orange-600",
  },
  {
    id: "learning-paths",
    title: "Personalized Learning Paths",
    description: "Get personalized content recommendations for your learning journey.",
    icon: GraduationCap,
    bgColor: "bg-purple-500 hover:bg-purple-600",
  },
  {
    id: "language-learning",
    title: "Language Learning Support",
    description: "Practice vocabulary and grammar in multiple languages.",
    icon: BookOpen,
    bgColor: "bg-lime-500 hover:bg-lime-600",
  },
  {
    id: "data-visualization",
    title: "Simple Data Visualization",
    description: "Create visual representations of your data.",
    icon: BarChart3,
    bgColor: "bg-sky-500 hover:bg-sky-600",
  },
  {
    id: "trend-identification",
    title: "Trend Identification",
    description: "Identify basic trends in your data and information.",
    icon: TrendingUp,
    bgColor: "bg-fuchsia-500 hover:bg-fuchsia-600",
  },
  {
    id: "data-summarization",
    title: "Data Summarization",
    description: "Summarize complex datasets into digestible insights.",
    icon: Database,
    bgColor: "bg-green-500 hover:bg-green-600",
  },
]
