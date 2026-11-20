import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Mail, Eye, X, ChevronLeft, ChevronRight, Play, Code2, Globe, Sparkles, Cpu, CheckCircle2 } from "lucide-react"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

function GithubIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function LinkedinIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  )
}

// Obfuscated mailto link constructor to mitigate automated crawler scraping
function getSafeMailto(subject = "") {
  const user = "abdulazim49787"
  const domain = "gmail.com"
  const base = `mailto:${user}@${domain}`
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base
}

const CHESS_PIECES = ["♟", "♞", "♝", "♜", "♛", "♚"]

function getChessCursorSvg(piece, isWhiteTheme) {
  const bg = isWhiteTheme ? "#ffffff" : "#000000"
  const stroke = isWhiteTheme ? "#000000" : "#ffffff"
  const fill = isWhiteTheme ? "#000000" : "#ffffff"
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="${bg}" stroke="${stroke}" stroke-width="2"/><text x="16" y="22" font-size="18" text-anchor="middle" fill="${fill}" font-family="sans-serif">${piece}</text></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 16 16, pointer`
}

function getMangaCursorSvg() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#18181b" stroke="#f43f5e" stroke-width="2"/><path d="M10 21c2-1 4-1 6 0 2-1 4-1 6 0V11c-2-1-4-1-6 0-2-1-4-1-6 0v10z" fill="#f43f5e" fill-opacity="0.3" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 11v10" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 16 16, pointer`
}

function getMusicCursorSvg() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="14" fill="#030712" stroke="#38bdf8" stroke-width="2"/><path d="M10 17v4a1.5 1.5 0 0 0 1.5 1.5h1A1.5 1.5 0 0 0 14 21v-4a1.5 1.5 0 0 0-1.5-1.5h-1A1.5 1.5 0 0 0 10 17zm8 0v4a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-1a1.5 1.5 0 0 0-1.5 1.5z" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/><path d="M10 17.5A6 6 0 0 1 22 17.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/></svg>`
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 16 16, pointer`
}

function ChessWord() {
  const [isHovered, setIsHovered] = useState(false)
  const [pieceIndex, setPieceIndex] = useState(0)
  const [isWhiteTheme, setIsWhiteTheme] = useState(false)

  const handleMouseEnter = () => {
    // Pick a different random chess piece every time you hover
    setPieceIndex((prev) => {
      const candidates = CHESS_PIECES.map((_, i) => i).filter((i) => i !== prev)
      return candidates[Math.floor(Math.random() * candidates.length)]
    })
    // Randomly choose between black box with white text vs white box with black text
    setIsWhiteTheme(Math.random() > 0.5)
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const currentPiece = CHESS_PIECES[pieceIndex]
  const cursorStyle = getChessCursorSvg(currentPiece, isWhiteTheme)

  return (
    <span
      className="relative inline-block cursor-pointer select-none align-baseline"
      style={{ cursor: cursorStyle }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`inline-flex items-center justify-center rounded px-2 py-0.5 text-sm transition-all duration-200 min-w-[42px] ${
          isHovered
            ? isWhiteTheme
              ? "bg-white text-black font-bold border border-white shadow-[0_0_12px_rgba(255,255,255,0.7)] scale-105"
              : "bg-black text-white font-bold border border-white/80 shadow-[0_0_12px_rgba(255,255,255,0.35)] scale-105"
            : "text-white underline decoration-white/30 underline-offset-4 hover:decoration-white font-medium"
        }`}
      >
        {isHovered ? (
          <span className="text-base leading-none select-none">{currentPiece}</span>
        ) : (
          "chess"
        )}
      </span>
    </span>
  )
}

function MangaWord() {
  const [isHovered, setIsHovered] = useState(false)
  const cursorStyle = getMangaCursorSvg()

  return (
    <span
      className="relative inline-block cursor-pointer select-none"
      style={{ cursor: cursorStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: -26, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-1 z-30 flex items-center gap-1.5 rounded-md border border-rose-500/40 bg-zinc-950/95 px-2 py-0.5 text-xs font-semibold text-rose-300 shadow-xl backdrop-blur-md whitespace-nowrap"
          >
            <span>📖</span>
            <span>巻 · Manga</span>
          </motion.span>
        )}
      </AnimatePresence>

      <span
        className={`inline-flex items-center rounded transition-all duration-200 font-medium ${
          isHovered
            ? "bg-white text-black font-black uppercase tracking-wider px-1.5 py-0.5 rounded shadow-[2px_2px_0px_#f43f5e] -rotate-1 scale-105 text-xs"
            : "text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
        }`}
      >
        manga
      </span>
    </span>
  )
}

function MusicWord() {
  const [isHovered, setIsHovered] = useState(false)
  const cursorStyle = getMusicCursorSvg()

  return (
    <span
      className="relative inline-block cursor-pointer select-none"
      style={{ cursor: cursorStyle }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: -26, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-1 z-30 flex items-center gap-1.5 rounded-md border border-cyan-500/40 bg-slate-950/95 px-2 py-0.5 text-xs font-semibold text-cyan-300 shadow-xl backdrop-blur-md whitespace-nowrap"
          >
            <span>🎧</span>
            <span>Now Vibing</span>
          </motion.span>
        )}
      </AnimatePresence>

      <span
        className={`inline-flex items-center rounded transition-all duration-200 font-medium ${
          isHovered
            ? "bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 px-1.5 py-0.5 rounded shadow-[0_0_12px_rgba(56,189,248,0.25)] scale-105"
            : "text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
        }`}
      >
        <span>music</span>
        {isHovered && (
          <span className="inline-flex items-end gap-[2px] ml-1.5 h-3 pb-0.5">
            <span
              className="w-[2px] bg-cyan-400 rounded-full animate-pulse"
              style={{ height: "60%" }}
            />
            <span
              className="w-[2px] bg-blue-400 rounded-full animate-pulse"
              style={{ height: "100%", animationDelay: "150ms" }}
            />
            <span
              className="w-[2px] bg-indigo-400 rounded-full animate-pulse"
              style={{ height: "75%", animationDelay: "300ms" }}
            />
          </span>
        )}
      </span>
    </span>
  )
}

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Internship & Educations", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Services", href: "#services", id: "services" },
]

const PROJECT_TITLES = {
  devscord: "Devscord",
  smartattendance: "Smart Attendance System",
  vrwebtour: "VR Web Tour",
  tresssalon: "Tress Salon",
  jadimpex: "JADIMPEX",
}

const PROJECT_MEDIA = {
  devscord: [
    { type: "image", src: "/assets/projects/devscord/devmainpg01.png", caption: "Devscord — Real-Time Developer Dashboard & Rooms" },
    { type: "image", src: "/assets/projects/devscord/devmainpg02.png", caption: "Devscord — Active Project Channels & Collaboration Hub" },
    { type: "image", src: "/assets/projects/devscord/devmainpg03.png", caption: "Devscord — Cloud Code Editor & Live Workspace" },
    { type: "image", src: "/assets/projects/devscord/devmainpg04.png", caption: "Devscord — Real-Time Chat & Thread Discussions" },
    { type: "image", src: "/assets/projects/devscord/devs_codejoinerpage.png", caption: "Devscord — Join Live Coding Session by Room Key" },
    { type: "image", src: "/assets/projects/devscord/dev_code_creatorpage.png", caption: "Devscord — Create & Configure New Collaboration Room" },
    { type: "image", src: "/assets/projects/devscord/dev_createaccpage.png", caption: "Devscord — Secure Authentication & Profile Setup" },
    { type: "image", src: "/assets/projects/devscord/devcodeeditpg.png", caption: "Devscord — Full In-Browser IDE with Syntax Highlighting" },
  ],
  jadimpex: [
    { type: "video", src: "/assets/projects/jadimpex/jadimpexvid.mp4", caption: "JADIMPEX — Full Platform Video Walkthrough & Interactive Demo" },
    { type: "image", src: "/assets/projects/jadimpex/jadimpex-logo-transparent.png", caption: "JADIMPEX — Official Corporate Brand Logo" },
    { type: "image", src: "/assets/projects/jadimpex/jadimpex-trade-solutions.png", caption: "JADIMPEX — Global Trade & Export Solutions Hero Showcase" },
    { type: "image", src: "/assets/projects/jadimpex/jadimpex-dusk-showcase.png", caption: "JADIMPEX — International Logistics & Global Supply Chain at Dusk" },
    { type: "image", src: "/assets/projects/jadimpex/jadimpex-brand.png", caption: "JADIMPEX — High-Resolution Corporate Brand Identity" },
    { type: "image", src: "/assets/projects/jadimpex/jadimpex-clean-logo.png", caption: "JADIMPEX — Eco-Friendly Jute & Bamboo Export Emblem" },
  ],
  tresssalon: [
    { type: "video", src: "/assets/projects/tress-salon/tresssalonvid.mp4", caption: "Tress Salon — Full Platform Video Walkthrough & Booking Experience" },
    { type: "image", src: "/assets/projects/tress-salon/tress-logo.svg", caption: "Tress Salon — Signature Brand Logo & 'T' Emblem" },
    { type: "image", src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200", caption: "Tress Salon — Luxury Salon Interior & Premium Styling Stations" },
    { type: "image", src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=1200", caption: "Tress Salon — Exclusive Bridal Lounge & Bespoke Makeover Suite" },
    { type: "image", src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1200", caption: "Tress Salon — Keratin & Protein Hair Smoothening Therapy" },
    { type: "image", src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200", caption: "Tress Salon — Precision Fade & Bespoke Men's Grooming" },
    { type: "image", src: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&q=80&w=1200", caption: "Tress Salon — Custom Nail Lounge & Pedicure Care" },
  ],
  smartattendance: [
    { type: "image", src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", caption: "Smart Attendance — Real-time Geo-verification & QR Token Validation" },
  ],
  vrwebtour: [
    { type: "image", src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&q=80&w=1200", caption: "VR Web Tour — 360° Immersive WebGL & Three.js Virtual Tour Environment" },
  ],
}

function ProjectMediaModal({ projectId, onClose }) {
  const [index, setIndex] = useState(0)
  const media = PROJECT_MEDIA[projectId] || []
  const title = PROJECT_TITLES[projectId] || "Project Media"
  const item = media[index] || {}
  const isImage = item.type === "image"

  // Lock background scrolling while modal is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  // Keyboard navigation: Escape to close, Left/Right arrow keys to cycle
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && media.length > 1) {
        setIndex((i) => (i === 0 ? media.length - 1 : i - 1))
      }
      if (e.key === "ArrowRight" && media.length > 1) {
        setIndex((i) => (i === media.length - 1 ? 0 : i + 1))
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [media.length, onClose])

  if (!media.length) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6 backdrop-blur-md"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose()
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-950 p-6 text-center text-white shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
            <Eye className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-white/60">
            Screenshots &amp; videos for {title} will appear here soon.
          </p>
          <button
            onClick={onClose}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 text-xs font-semibold text-white hover:bg-white/20 transition-colors"
          >
            Close Viewer
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-4 md:p-6 backdrop-blur-md text-white select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {/* Top Header */}
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between pb-3 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="rounded-md border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
            {title}
          </span>
          <span className="text-xs text-white/50">
            Screenshots &amp; Videos · {index + 1} of {media.length}
          </span>
        </div>
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/70 hover:bg-white/15 hover:text-white transition-colors cursor-pointer"
          aria-label="Close viewer"
        >
          <span>Close</span>
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Main Stage */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 items-center justify-center py-4">
        {media.length > 1 && (
          <button
            onClick={() => setIndex((i) => (i === 0 ? media.length - 1 : i - 1))}
            aria-label="Previous image"
            className="absolute left-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        <div className="flex h-full max-h-[66vh] w-full items-center justify-center overflow-hidden">
          {isImage ? (
            <motion.img
              key={item.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={item.src}
              alt={item.caption || title}
              className="max-h-[66vh] max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
              loading="lazy"
            />
          ) : (
            <motion.video
              key={item.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              controls
              autoPlay
              playsInline
              className="max-h-[66vh] max-w-full rounded-xl border border-white/10 bg-black shadow-2xl"
            >
              <source src={item.src} />
              Your browser does not support the video tag.
            </motion.video>
          )}
        </div>

        {media.length > 1 && (
          <button
            onClick={() => setIndex((i) => (i === media.length - 1 ? 0 : i + 1))}
            aria-label="Next image"
            className="absolute right-2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white/20 cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}
      </div>

      {/* Caption & Thumbnail Dock */}
      <div className="mx-auto w-full max-w-6xl pt-2">
        <div className="mb-3 text-center">
          <p className="text-sm font-medium text-white/90">{item.caption || title}</p>
        </div>

        {/* Thumbnail Strip */}
        {media.length > 1 && (
          <div className="flex items-center justify-center gap-2 overflow-x-auto py-1">
            {media.map((m, idx) => (
              <button
                key={m.src + idx}
                onClick={() => setIndex(idx)}
                className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-lg border transition-all cursor-pointer ${
                  idx === index
                    ? "border-blue-400 ring-2 ring-blue-500/50 scale-105"
                    : "border-white/20 opacity-50 hover:opacity-100"
                }`}
              >
                {m.type === "image" ? (
                  <img src={m.src} alt="" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-zinc-900/90 text-[10px] font-semibold text-white gap-1.5 border border-white/10">
                    <Play className="h-3.5 w-3.5 fill-white text-white" />
                    <span>Video</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function App() {
  const glowRef = useRef(null)
  const lenisRef = useRef(null)
  const [activeSection, setActiveSection] = useState("about")
  const [mediaModal, setMediaModal] = useState(null)

  // Framer Motion smooth scroll progress
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Smooth inertial scrolling with Lenis (native touch on mobile, buttery on desktop)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Smooth scroll helper for both mobile and desktop
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return

    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, {
        offset: window.innerWidth >= 1024 ? 0 : -30,
        duration: 1.2,
      })
    } else {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Interactive mouse glow following cursor
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!glowRef.current) return
      const x = event.clientX
      const y = event.clientY
      glowRef.current.style.transform = `translate3d(${x - 250}px, ${y - 250}px, 0)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Scroll spy to highlight active section on navs
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["about", "experience", "projects", "services"]
      const scrollPosition = window.scrollY + 260

      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white">
      {/* Framer Motion Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[2px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 pointer-events-none"
        style={{ scaleX }}
      />
      {/* Background Grid Pattern (Preserved) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Interactive Glow (Preserved) */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed left-0 top-0 z-30 h-[500px] w-[500px] rounded-full"
      >
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.16, 0.22, 0.16],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full rounded-full bg-blue-600 blur-[130px]"
        />
      </div>

      {/* Decorative ambient glow */}
      <div className="pointer-events-none fixed -right-40 top-1/3 z-0 h-80 w-80 rounded-full bg-blue-500/[0.04] blur-[100px]" />

      {/* Brittany Chiang Two-Column Layout Container */}
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* ================= LEFT COLUMN (Fixed / Sticky Sidebar) ================= */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                <a href="#">
                  Abdul Azim<span className="text-blue-500">.</span>
                </a>
              </h1>

              <h2 className="mt-3 text-lg font-medium tracking-tight text-white/90 sm:text-xl">
                Full-Stack Web Developer &amp; Freelancer
              </h2>

              <p className="mt-4 max-w-xs text-sm leading-normal text-white/50">
                I build accessible, high-performance web products, interactive digital experiences, and custom web applications for clients worldwide.
              </p>

              {/* Freelance Availability Status Badge */}
              <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Available for Freelance Projects</span>
              </div>

              {/* Brittany Chiang style Line-Indicator Nav */}
              <nav className="nav hidden lg:block" aria-label="In-page jump links">
                <ul className="mt-16 w-max">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id
                    return (
                      <li key={item.id}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            scrollToSection(item.id)
                          }}
                          className="group flex items-center py-3"
                        >
                          <span
                            className={`mr-4 h-px transition-all duration-300 motion-reduce:transition-none group-hover:w-16 group-hover:bg-white ${
                              isActive ? "w-16 bg-white" : "w-8 bg-white/20"
                            }`}
                          />
                          <span
                            className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-white motion-reduce:transition-none ${
                              isActive ? "text-white" : "text-white/40"
                            }`}
                          >
                            {item.label}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>

            {/* Social Links Footer */}
            <ul className="ml-1 mt-8 flex items-center gap-5 text-white/40" aria-label="Social media">
              <li>
                <a
                  href="https://github.com/arnouxx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/abdul-azim-32b194287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/arnoux000/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href={getSafeMailto()}
                  className="block hover:text-white transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </header>

          {/* ================= RIGHT COLUMN (Scrollable Content) ================= */}
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            {/* --- ABOUT SECTION --- */}
            <motion.section
              id="about"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="About me"
            >
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  About
                </h2>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-white/55">
                <p>
                  Hi there! I'm Azim, and I like building things. I'm a Full-Stack Web Developer with expertise in crafting accessible, pixel-perfect user interfaces and web applications. I take pride in creating thoughtful, inclusive products and have a sharp eye for the little details that separate a good product from an exceptional one. I enjoy working at the intersection of frontend craft and backend engineering, where intuitive design meets resilient, scalable systems.
                </p>

                <p>
                  My practical experience started with a software development internship at{" "}
                  <span className="font-medium text-white">Travarsa Private Limited</span>,{" "}
                  which gave me firsthand exposure to modern development workflows. Since then, I've been focused on expanding my skills across the entire stack—designing relational databases, building REST APIs, and creating responsive frontends for real-world projects.
                </p>

                <p>
                  In my spare time, I enjoy playing <ChessWord />, reading{" "}
                  <MangaWord />, or flipping through perspective-shifting books like{" "}
                  <span className="font-medium text-white">Atomic Habits</span>. When I'm away from screens, I love being out and about—either hanging out with a group of friends or wandering around solo with some good{" "}
                  <MusicWord />.
                </p>
              </div>
            </motion.section>

            {/* --- EXPERIENCE & EDUCATION SECTION --- */}
            <motion.section
              id="experience"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience and education"
            >
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  Internship & Educations
                </h2>
              </div>

              <ol className="group/list space-y-12">
                {/* Travarsa Internship */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      June — July 2024
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base"
                            href="https://travarsa.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Software Development Intern · Travarsa Private Limited
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        Worked on software development projects and gained practical experience
                        working with modern web technologies and development workflows.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                        {["Web Technologies", "Development Workflows", "Problem Solving"].map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* MCA Education */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      2024 — 2026
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base">
                          Master of Computer Applications (MCA) · Amity University
                        </span>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        Advanced postgraduate studies focusing on modern software engineering,
                        computational problem solving, and full-stack system architecture.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Course focus">
                        {["Python", "Full Stack", "Data Architecture"].map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* BCA Education */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      2021 — 2024
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base">
                          Bachelors of Computer Applications (BCA) · University of Engineering &
                          Management
                        </span>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        Undergraduate degree in computer applications covering core programming,
                        database management, algorithms, and web systems.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Course focus">
                        {["Computer Science", "Databases", "Web Development"].map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* CBSE Class 12 */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      2021
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base">
                          CBSE — Class 12 · Indira Gandhi Memorial High School
                        </span>
                      </h3>
                      <p className="mt-1 text-sm text-white/40">Higher Secondary Education</p>
                    </div>
                  </div>
                </li>

                {/* ICSE Class 10 */}
                <li>
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      2019
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base">ICSE — Class 10 · St. Stephen's School</span>
                      </h3>
                      <p className="mt-1 text-sm text-white/40">Secondary Education</p>
                    </div>
                  </div>
                </li>
              </ol>
            </motion.section>

            {/* --- PROJECTS SECTION --- */}
            <motion.section
              id="projects"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Selected projects"
            >
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  Projects
                </h2>
              </div>

              <ul className="group/list space-y-12">
                {/* Project 1: Devscord */}
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    {/* Thumbnail preview badge */}
                    <div className="relative z-20 sm:col-span-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setMediaModal({ projectId: "devscord", index: 0 })
                        }}
                        className="group/thumb relative flex h-20 w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-blue-950/40 via-slate-900 to-black text-xs font-bold tracking-wider text-blue-400 shadow-sm transition-all hover:border-blue-400/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] sm:h-18 cursor-pointer"
                        title="View Devscord Screenshots"
                      >
                        DEVS<span className="text-white">CORD</span>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                          <Eye className="h-5 w-5 text-blue-400 drop-shadow" />
                        </div>
                      </button>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base cursor-pointer"
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault()
                              setMediaModal({ projectId: "devscord", index: 0 })
                            }}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Devscord
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        A developer collaboration platform designed for creating projects,
                        communicating with other developers, and working together in real time.
                        Built with a modern React frontend and Python backend, with real-time
                        communication and database integration.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                        {["React", "Flask", "PostgreSQL", "Socket.IO"].map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className="relative z-20 mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setMediaModal({ projectId: "devscord", index: 0 })
                          }}
                          className="group/btn inline-flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-300 shadow-sm transition-all duration-200 hover:border-blue-400 hover:bg-blue-500/20 hover:text-white hover:shadow-[0_0_16px_rgba(59,130,246,0.3)] cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5 text-blue-400 transition-transform group-hover/btn:scale-110" />
                          <span>View Screenshots</span>
                          <span className="rounded-full bg-blue-400/20 px-1.5 py-0.5 text-[10px] font-bold text-blue-200">
                            8
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Project 2: Smart Attendance */}
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    {/* Thumbnail preview badge */}
                    <div className="relative z-20 sm:col-span-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setMediaModal({ projectId: "smartattendance", index: 0 })
                        }}
                        className="group/thumb relative flex h-20 w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-black text-xs font-bold tracking-wider text-blue-400 shadow-sm transition-all hover:border-indigo-400/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.25)] sm:h-18 cursor-pointer"
                        title="View Smart Attendance Screenshots"
                      >
                        SMART<span className="text-white">ATT</span>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                          <Eye className="h-5 w-5 text-indigo-400 drop-shadow" />
                        </div>
                      </button>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base cursor-pointer"
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault()
                              setMediaModal({ projectId: "smartattendance", index: 0 })
                            }}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Smart Attendance System
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        An attendance system combining QR-based verification with GPS validation to
                        help ensure attendance is recorded from an authorized location. Includes QR
                        token generation, token validation, location verification, and
                        database-backed attendance management.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                        {["Python", "Flask", "MySQL", "QR Verification", "GPS Validation"].map(
                          (tech) => (
                            <li
                              key={tech}
                              className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                            >
                              {tech}
                            </li>
                          )
                        )}
                      </ul>
                      <div className="relative z-20 mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setMediaModal({ projectId: "smartattendance", index: 0 })
                          }}
                          className="group/btn inline-flex items-center gap-2 rounded-lg border border-indigo-500/30 bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 shadow-sm transition-all duration-200 hover:border-indigo-400 hover:bg-indigo-500/20 hover:text-white hover:shadow-[0_0_16px_rgba(99,102,241,0.3)] cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5 text-indigo-400 transition-transform group-hover/btn:scale-110" />
                          <span>View Screenshots</span>
                          <span className="rounded-full bg-indigo-400/20 px-1.5 py-0.5 text-[10px] font-bold text-indigo-200">
                            1
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Project 3: VR Web Tour */}
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    {/* Thumbnail preview badge */}
                    <div className="relative z-20 sm:col-span-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setMediaModal({ projectId: "vrwebtour", index: 0 })
                        }}
                        className="group/thumb relative flex h-20 w-full items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-black text-xs font-bold tracking-wider text-cyan-400 shadow-sm transition-all hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] sm:h-18 cursor-pointer"
                        title="View VR Web Tour Screenshots"
                      >
                        VR<span className="text-white">TOUR</span>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                          <Eye className="h-5 w-5 text-cyan-400 drop-shadow" />
                        </div>
                      </button>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base cursor-pointer"
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault()
                              setMediaModal({ projectId: "vrwebtour", index: 0 })
                            }}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              VR Web Tour
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        An interactive virtual tour experience built for exploring environments
                        through the browser. Built with Three.js for the interactive experience, with
                        PHP and XAMPP used for backend functionality.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                        {["HTML", "CSS", "JavaScript", "Three.js", "PHP"].map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className="relative z-20 mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setMediaModal({ projectId: "vrwebtour", index: 0 })
                          }}
                          className="group/btn inline-flex items-center gap-2 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 shadow-sm transition-all duration-200 hover:border-cyan-400 hover:bg-cyan-500/20 hover:text-white hover:shadow-[0_0_16px_rgba(6,182,212,0.3)] cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5 text-cyan-400 transition-transform group-hover/btn:scale-110" />
                          <span>View Screenshots</span>
                          <span className="rounded-full bg-cyan-400/20 px-1.5 py-0.5 text-[10px] font-bold text-cyan-200">
                            1
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Project 4: Tress Salon */}
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    {/* Thumbnail preview badge */}
                    <div className="relative z-20 sm:col-span-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setMediaModal({ projectId: "tresssalon", index: 0 })
                        }}
                        className="group/thumb relative flex h-20 w-full items-center justify-center overflow-hidden rounded-lg border border-orange-500/20 bg-gradient-to-br from-stone-900 via-neutral-950 to-black p-2 shadow-sm transition-all hover:border-orange-500/60 hover:shadow-[0_0_18px_rgba(234,88,12,0.3)] sm:h-18 cursor-pointer"
                        title="Watch Tress Salon Video & Screenshots"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src="/assets/projects/tress-salon/tress-logo.svg"
                            alt="Tress Salon Logo"
                            className="h-10 w-10 rounded-xl object-contain shadow-md drop-shadow transition-transform group-hover/thumb:scale-110"
                          />
                          <div className="text-left font-serif">
                            <span className="block text-sm font-bold text-white tracking-tight leading-none">
                              Tress<span className="text-orange-500">.</span>
                            </span>
                            <span className="block text-[8px] uppercase tracking-widest text-stone-400 font-sans mt-0.5">
                              Salon
                            </span>
                          </div>
                        </div>

                        <span className="absolute top-1.5 right-1.5 flex items-center gap-1 rounded-full bg-orange-500/25 px-1.5 py-0.5 text-[9px] font-semibold text-orange-200 border border-orange-500/30 backdrop-blur-sm">
                          <Play className="h-2 w-2 fill-orange-300 text-orange-300" /> Video
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                          <Play className="h-6 w-6 fill-orange-400 text-orange-400 drop-shadow" />
                        </div>
                      </button>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base cursor-pointer"
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault()
                              setMediaModal({ projectId: "tresssalon", index: 0 })
                            }}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              Tress Salon
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        A modern beauty &amp; luxury family salon booking platform featuring an
                        interactive service catalog, online appointment booking system, and dynamic
                        aesthetic gallery. Designed for an elegant, high-end experience with smooth
                        responsive UI.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                        {["React", "Tailwind CSS", "Framer Motion", "Lucide React", "Booking System"].map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-rose-500/10 px-3 py-1 text-xs font-medium leading-5 text-rose-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className="relative z-20 mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setMediaModal({ projectId: "tresssalon", index: 0 })
                          }}
                          className="group/btn inline-flex items-center gap-2 rounded-lg border border-rose-500/30 bg-rose-500/10 px-3.5 py-1.5 text-xs font-semibold text-rose-300 shadow-sm transition-all duration-200 hover:border-rose-400 hover:bg-rose-500/20 hover:text-white hover:shadow-[0_0_16px_rgba(244,63,94,0.3)] cursor-pointer"
                        >
                          <Play className="h-3.5 w-3.5 fill-rose-400 text-rose-400 transition-transform group-hover/btn:scale-110" />
                          <span>Watch Video &amp; Screenshots</span>
                          <span className="rounded-full bg-rose-400/20 px-1.5 py-0.5 text-[10px] font-bold text-rose-200">
                            7
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                {/* Project 5: JADIMPEX */}
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    {/* Thumbnail preview badge */}
                    <div className="relative z-20 sm:col-span-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          setMediaModal({ projectId: "jadimpex", index: 0 })
                        }}
                        className="group/thumb relative flex h-20 w-full items-center justify-center overflow-hidden rounded-lg border border-amber-500/20 bg-gradient-to-br from-stone-900 via-neutral-950 to-black p-2 shadow-sm transition-all hover:border-amber-400/60 hover:shadow-[0_0_18px_rgba(245,158,11,0.3)] sm:h-18 cursor-pointer"
                        title="Watch JADIMPEX Video & Screenshots"
                      >
                        <img
                          src="/assets/projects/jadimpex/jadimpex-logo-transparent.png"
                          alt="JADIMPEX Logo"
                          className="h-10 max-w-[90%] object-contain drop-shadow transition-transform group-hover/thumb:scale-105"
                        />
                        <span className="absolute top-1.5 right-1.5 flex items-center gap-1 rounded-full bg-amber-500/25 px-1.5 py-0.5 text-[9px] font-semibold text-amber-200 border border-amber-500/30 backdrop-blur-sm">
                          <Play className="h-2 w-2 fill-amber-300 text-amber-300" /> Video
                        </span>
                        <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                          <Play className="h-6 w-6 fill-amber-400 text-amber-400 drop-shadow" />
                        </div>
                      </button>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base cursor-pointer"
                            href="#projects"
                            onClick={(e) => {
                              e.preventDefault()
                              setMediaModal({ projectId: "jadimpex", index: 0 })
                            }}
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              JADIMPEX
                              <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none" />
                            </span>
                          </a>
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        A premier global export and sourcing enterprise web platform showcasing
                        sustainable Jute packaging, biodegradable Bamboo goods, and handcrafted
                        genuine Leather accessories for international B2B commerce.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies used">
                        {["React", "TypeScript", "Tailwind CSS", "Vite", "Global B2B"].map((tech) => (
                          <li
                            key={tech}
                            className="flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium leading-5 text-amber-300"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className="relative z-20 mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            setMediaModal({ projectId: "jadimpex", index: 0 })
                          }}
                          className="group/btn inline-flex items-center gap-2 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300 shadow-sm transition-all duration-200 hover:border-amber-400 hover:bg-amber-500/20 hover:text-white hover:shadow-[0_0_16px_rgba(245,158,11,0.3)] cursor-pointer"
                        >
                          <Play className="h-3.5 w-3.5 fill-amber-400 text-amber-400 transition-transform group-hover/btn:scale-110" />
                          <span>Watch Video &amp; Screenshots</span>
                          <span className="rounded-full bg-amber-400/20 px-1.5 py-0.5 text-[10px] font-bold text-amber-200">
                            6
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>

              {/* View Full Archive Link */}
              <div className="mt-12">
                <a
                  href="https://github.com/arnouxx?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-sm font-semibold leading-tight text-white hover:text-blue-400"
                >
                  <span>View Full Project Archive</span>
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </motion.section>

            {/* --- SERVICES & FREELANCE SECTION --- */}
            <motion.section
              id="services"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Freelance services and offerings"
            >
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  Services
                </h2>
              </div>

              {/* Freelance Overview Hero Card */}
              <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/[0.08] via-blue-500/[0.02] to-transparent p-6 mb-8 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                    Freelance &amp; Contract Work
                  </p>
                </div>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  End-to-End Web Solutions for Businesses &amp; Founders
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-white/60">
                  As an independent freelance developer, I partner with companies, startups, and individuals to create reliable, modern web applications. From architecture and database design to pixel-perfect, accessible user interfaces, I take projects from concept to production with clear communication and fast turnaround.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-white/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>Direct Communication</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>Agile &amp; Rapid Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>Responsive &amp; Accessible</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0" />
                    <span>Production-Ready Code</span>
                  </div>
                </div>
              </div>

              {/* Freelance Services List */}
              <ul className="group/list space-y-8">
                {/* Service 1: Full-Stack Web Applications */}
                <li>
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      <span className="inline-flex items-center gap-1.5 text-blue-400 font-mono">
                        <Code2 className="h-4 w-4 text-blue-400" />
                        <span>01 · Web Apps</span>
                      </span>
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base font-semibold">
                          Full-Stack Web Application Development
                        </span>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        Design and engineering of custom web applications tailored to your specific business logic. Complete full-stack implementations featuring secure authentication, relational database modeling, REST APIs, and real-time interactive dashboards.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Key features">
                        {["Custom SaaS & Dashboards", "User Auth & Roles", "Real-Time WebSockets", "React", "Flask / Python", "PostgreSQL / MySQL"].map((item) => (
                          <li
                            key={item}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Service 2: Custom Business & Enterprise Platforms */}
                <li>
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      <span className="inline-flex items-center gap-1.5 text-blue-400 font-mono">
                        <Globe className="h-4 w-4 text-blue-400" />
                        <span>02 · Business</span>
                      </span>
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base font-semibold">
                          Custom Business Platforms &amp; Booking Systems
                        </span>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        Tailored digital platforms built to convert visitors and streamline business operations. Specializing in luxury service booking portals, enterprise trade websites, interactive product catalogs, and high-impact corporate brand presences.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Key features">
                        {["Appointment Booking", "Enterprise B2B Portals", "Product Showcases", "Conversion-Focused", "SEO & Speed Optimization"].map((item) => (
                          <li
                            key={item}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Service 3: Frontend Engineering & Interactive UI */}
                <li>
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      <span className="inline-flex items-center gap-1.5 text-blue-400 font-mono">
                        <Sparkles className="h-4 w-4 text-blue-400" />
                        <span>03 · Frontend</span>
                      </span>
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base font-semibold">
                          Interactive Frontend &amp; 3D Web Experiences
                        </span>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        Translating design ideas into responsive, 60fps web experiences. Fluid micro-interactions, custom design systems, and immersive WebGL / Three.js 3D tours that captivate users while remaining accessible and ultra-fast across all devices.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Key features">
                        {["Framer Motion", "Three.js 3D Tours", "Tailwind CSS", "Micro-Interactions", "Mobile-First UI"].map((item) => (
                          <li
                            key={item}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Service 4: REST APIs & Backend Architecture */}
                <li>
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-white/40 sm:col-span-2">
                      <span className="inline-flex items-center gap-1.5 text-blue-400 font-mono">
                        <Cpu className="h-4 w-4 text-blue-400" />
                        <span>04 · Backend</span>
                      </span>
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <span className="text-base font-semibold">
                          RESTful APIs &amp; System Integration
                        </span>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-white/50">
                        Clean and maintainable backend infrastructure. Architecture of secure REST APIs, third-party service integrations, relational database design and optimization, tokenized security, and specialized capabilities like QR verification and GPS geolocation.
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-2" aria-label="Key features">
                        {["RESTful API Design", "Database Modeling", "API Security & Auth", "QR / GPS Verification", "Cloud & Server Setup"].map((item) => (
                          <li
                            key={item}
                            className="flex items-center rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Freelance Workflow / How I Work */}
              <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
                  How We Work Together
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-blue-400">01 / Scope &amp; Plan</span>
                    <h4 className="text-sm font-semibold text-white">Discovery &amp; Strategy</h4>
                    <p className="text-xs leading-relaxed text-white/50">
                      We outline goals, architecture, tech stack, milestones, and deliverable timelines.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-blue-400">02 / Develop &amp; Iterate</span>
                    <h4 className="text-sm font-semibold text-white">Milestone Development</h4>
                    <p className="text-xs leading-relaxed text-white/50">
                      Regular progress previews, iterative feedback cycles, and clean code throughout.
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-xs font-mono font-bold text-blue-400">03 / Deploy &amp; Support</span>
                    <h4 className="text-sm font-semibold text-white">Launch &amp; Handover</h4>
                    <p className="text-xs leading-relaxed text-white/50">
                      Full deployment, production speed audits, code handover, and post-launch support.
                    </p>
                  </div>
                </div>
              </div>

              {/* Freelance Inquiry CTA Card */}
              <div className="mt-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h4 className="text-base font-semibold text-white">Have a project in mind?</h4>
                  <p className="mt-1 text-xs leading-relaxed text-white/60">
                    I'm currently accepting new freelance projects and contract roles. Let's discuss your timeline and vision.
                  </p>
                </div>
                <a
                  href={getSafeMailto("Freelance Project Inquiry")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 transition-all duration-200 shrink-0"
                >
                  <Mail className="h-4 w-4" />
                  <span>Start a Conversation</span>
                </a>
              </div>
            </motion.section>

            {/* --- MINIMALIST FOOTER --- */}
            <footer className="max-w-md pb-16 text-xs leading-relaxed text-white/30">
              <p>
                Built by{" "}
                <span className="font-medium text-white/60">Abdul Azim</span>. Coded in{" "}
                <span className="font-medium text-white/60">React</span> and{" "}
                <span className="font-medium text-white/60">Tailwind CSS</span>, bundled with{" "}
                <span className="font-medium text-white/60">Vite</span>.
              </p>
            </footer>
          </main>
        </div>
      </div>

      {/* Mobile Floating Bottom Nav Dock (Framer Motion smooth scrolling) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden">
        <motion.nav
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-1 rounded-full border border-white/10 bg-black/80 p-1.5 shadow-2xl backdrop-blur-lg"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                  isActive ? "text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="mobileActiveTab"
                    className="absolute inset-0 rounded-full bg-white/15 border border-white/20"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            )
          })}
        </motion.nav>
      </div>

      {/* Global Project Screenshots & Videos Modal */}
      <AnimatePresence>
        {mediaModal && (
          <ProjectMediaModal
            projectId={mediaModal.projectId}
            onClose={() => setMediaModal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}