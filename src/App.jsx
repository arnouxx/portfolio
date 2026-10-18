import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Mail } from "lucide-react"

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

const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
]

export default function App() {
  const glowRef = useRef(null)
  const [activeSection, setActiveSection] = useState("about")

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

  // Scroll spy to highlight active section on the left nav
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["about", "experience", "projects", "skills"]
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
                Full-Stack Web Developer
              </h2>

              <p className="mt-4 max-w-xs text-sm leading-normal text-white/50">
                I build accessible, perfect experiences for the web.
              </p>

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
                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
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
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:abdulazim49787@gmail.com"
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
            <section
              id="about"
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
                  In my spare time, I enjoy playing{" "}
                  <span className="font-medium text-white">chess</span>, reading{" "}
                  <span className="font-medium text-white">manga</span>, or flipping through perspective-shifting books like{" "}
                  <span className="font-medium text-white">Atomic Habits</span>. When I'm away from screens, I love being out and about—either hanging out with a group of friends or wandering around solo with some good music.
                </p>
              </div>
            </section>

            {/* --- EXPERIENCE & EDUCATION SECTION --- */}
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience and education"
            >
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  Experience
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
                            href="#"
                            target="_blank"
                            rel="noreferrer"
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
            </section>

            {/* --- PROJECTS SECTION --- */}
            <section
              id="projects"
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
                    <div className="z-10 sm:col-span-2">
                      <div className="flex h-20 w-full items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-blue-950/40 via-slate-900 to-black text-xs font-bold tracking-wider text-blue-400 shadow-sm sm:h-18">
                        DEVS<span className="text-white">CORD</span>
                      </div>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
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
                    </div>
                  </div>
                </li>

                {/* Project 2: Smart Attendance */}
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    {/* Thumbnail preview badge */}
                    <div className="z-10 sm:col-span-2">
                      <div className="flex h-20 w-full items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-black text-xs font-bold tracking-wider text-blue-400 shadow-sm sm:h-18">
                        SMART<span className="text-white">ATT</span>
                      </div>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
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
                    </div>
                  </div>
                </li>

                {/* Project 3: VR Web Tour */}
                <li className="mb-12">
                  <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />

                    {/* Thumbnail preview badge */}
                    <div className="z-10 sm:col-span-2">
                      <div className="flex h-20 w-full items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-cyan-950/40 via-slate-900 to-black text-xs font-bold tracking-wider text-cyan-400 shadow-sm sm:h-18">
                        VR<span className="text-white">TOUR</span>
                      </div>
                    </div>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-white">
                        <div>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-white hover:text-blue-400 focus-visible:text-blue-400 group/link text-base"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
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
                    </div>
                  </div>
                </li>
              </ul>

              {/* View Full Archive Link */}
              <div className="mt-12">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center text-sm font-semibold leading-tight text-white hover:text-blue-400"
                >
                  <span>View Full Project Archive</span>
                  <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </section>

            {/* --- SKILLS & TOOLKIT SECTION --- */}
            <section
              id="skills"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Development toolkit"
            >
              {/* Mobile Sticky Section Header */}
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-black/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-white">
                  Skills
                </h2>
              </div>

              {/* Current Focus Highlight */}
              <div className="rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] p-6 mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  Current Focus
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">Python Development</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Strengthening Python fundamentals, problem-solving, backend development, APIs,
                  and practical full-stack application development.
                </p>
              </div>

              {/* Skills breakdown */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Languages */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    01 · Languages
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {["Python", "JavaScript", "HTML", "CSS"].map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Frontend */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    02 · Frontend
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {["React", "Vite", "Tailwind CSS", "Three.js"].map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Backend & Data */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    03 · Backend & Data
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {["Flask", "REST APIs", "PostgreSQL", "MySQL"].map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Other */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                    04 · Tools & Other
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {["Git", "GitHub", "OpenCV", "MediaPipe"].map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

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
    </div>
  )
}