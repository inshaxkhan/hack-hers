import { useState } from 'react'
import About from './About.jsx'
import Contact from './Contact.jsx'

function HackHersLogo({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="35%" stopColor="#ec4899" />
          <stop offset="70%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Solid gradient ring */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="url(#ringGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#glow)"
      />
      {/* Dashed accent - upper arc */}
      <circle
        cx="32"
        cy="32"
        r="26"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
        strokeDasharray="4 8"
        strokeDashoffset="45"
      />
      {/* Equalizer bars - bottom-left arc, radiating inward */}
      <g filter="url(#glow)">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const angle = (200 + i * 10) * (Math.PI / 180)
          const outerR = 26
          const barLen = 5 + i * 1.2
          const innerR = outerR - barLen
          const x1 = 32 + innerR * Math.cos(angle)
          const y1 = 32 + innerR * Math.sin(angle)
          const x2 = 32 + outerR * Math.cos(angle)
          const y2 = 32 + outerR * Math.sin(angle)
          const midX = (x1 + x2) / 2
          const midY = (y1 + y2) / 2
          const deg = (200 + i * 10 - 90)
          return (
            <rect
              key={i}
              x={midX - 1.2}
              y={midY - barLen / 2}
              width="2.4"
              height={barLen}
              rx="0.6"
              fill="url(#ringGradient)"
              opacity={0.85 + i * 0.02}
              transform={`rotate(${deg} ${midX} ${midY})`}
            />
          )
        })}
      </g>
    </svg>
  )
}

function HomePageContent() {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center justify-between px-4 py-8 md:py-12">
      {/* Mic Icon */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        <div className="relative flex items-center justify-center">
          <div className="absolute w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-500/20 blur-2xl" />
          <svg
            className="relative w-24 h-24 md:w-32 md:h-32 text-blue-400 drop-shadow-[0_0_30px_rgba(96,165,250,0.5)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
          </svg>
        </div>

        {/* Greeting Text */}
        <br /><br /><br />
        <h2 className="mt-1 text-xl md:text-2xl font-bold text-white">How can we help you today?</h2>
      </div>

      {/* Input Bar */}
      <div className="w-full max-w-xl mt-8">
        <div className="relative flex items-center rounded-2xl bg-blue-500/20 border border-blue-400/30 px-5 py-4 backdrop-blur-sm">
          <input
            type="text"
            placeholder="Ask anything..."
            className="flex-1 bg-transparent text-white placeholder-slate-400 outline-none text-base md:text-lg"
          />
          <button
            type="button"
            className="ml-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Voice input"
          >
            <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const navTabs = [
  { id: 'home', label: 'Home'},
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact'},
]

function Home() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-blue-950">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo / Brand */}
            <a href="#" className="flex items-center gap-3 group">
              <HackHersLogo className="w-9 h-9 md:w-10 md:h-10 flex-shrink-0" />
              <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                HackHers
              </span>
              <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">♀</span>
            </a>

            {/* Desktop Tabs */}
            <div className="hidden md:flex items-center gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300
                    ${activeTab === tab.id
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  {activeTab === tab.id && (
                    <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-fuchsia-500/30 to-violet-500/30 border border-fuchsia-400/30" />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-3">
              <button className="hidden sm:block px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Sign In
              </button>
              <button className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 hover:scale-105 active:scale-100 transition-all duration-200">
                Join Now
              </button>
            </div>
          </div>

          {/* Mobile Tabs - Horizontal Scroll */}
          <div className="md:hidden pb-3 -mx-4 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 px-4 min-w-max">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-shrink-0 px-4 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-300
                    ${activeTab === tab.id
                      ? 'bg-gradient-to-r from-fuchsia-500/40 to-violet-500/40 text-white border border-fuchsia-400/40'
                      : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Tab Content */}
      <main>
        {activeTab === 'about' ? (
          <About />
        ) : activeTab === 'contact' ? (
          <Contact />
        ) : (
          <HomePageContent />
        )}
      </main>
    </div>
  )
}

export default Home
