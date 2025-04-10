import CardStack from "@/components/card-stack"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black p-4">
      {/* Cosmic Background - Refined for better color harmony */}
      <div className="absolute inset-0 z-0">
        {/* Gradient background - Adjusted to complement card colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0f172a] to-[#1e1b4b]"></div>

        {/* Animated stars - Reduced opacity for subtlety */}
        <div className="stars-small"></div>
        <div className="stars-medium"></div>
        <div className="stars-large"></div>

        {/* Glowing orbs - Repositioned and color adjusted */}
        <div className="absolute left-1/4 top-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-3xl"></div>
        <div className="absolute right-1/3 top-1/3 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl"></div>
      </div>

      {/* Content - Optimized for MacBook Pro M2 screen */}
      <div className="relative z-10 flex h-screen w-full max-w-6xl flex-col items-center justify-center py-6">
        {/* Hero Section - Reduced vertical spacing */}
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              AURA
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg font-medium text-slate-300">Your AI-powered productivity assistant</p>
        </div>

        <div className="w-full max-w-md">
          <h2 className="mb-2 text-center text-xl font-bold text-white">Discover Our Features</h2>
          <p className="mb-4 text-center text-sm text-slate-300">
            Swipe through the cards to explore AURA's powerful capabilities
          </p>
          {/* Card stack with reduced height */}
          <div className="h-[450px]">
            <CardStack />
          </div>
        </div>

        {/* Footer - Positioned at bottom with minimal spacing */}
        <div className="mt-4 text-center text-xs text-slate-400">
          <p>© 2025 AURA Project. All rights reserved.</p>
        </div>
      </div>
    </main>
  )
}
