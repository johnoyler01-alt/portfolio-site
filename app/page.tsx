"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    id: "ai-index",
    title: "AI Index 2026",
    subtitle: "Interactive Explorer",
    description:
      "Data visualization of Stanford AI Index 2026 report findings.",
    tags: ["React", "Three.js", "Framer Motion", "Vercel"],
    link: "https://ai-index-2026-eight.vercel.app",
    color: "#f97316",
  },
  {
    id: "bay-area-transit",
    title: "Bay Area Transit",
    subtitle: "Real-Time Dashboard",
    description:
      "Interactive dashboard with live transit data, charts, and station details.",
    tags: ["Next.js", "Recharts", "SWR", "Vercel"],
    link: "https://bay-area-transit-anah.vercel.app",
    color: "#3b82f6",
  },
  {
    id: "ai-writing",
    title: "AI Writing Assistant",
    subtitle: "Gemini 2.5 Flash Integration",
    description:
      "A professional writing assistant powered by Gemini 2.5 Flash with real-time text optimization.",
    tags: ["React", "Gemini API", "Netlify"],
    link: "https://ai-writing-assistant-final.netlify.app/", // <-- This is the new, correct link
    color: "#22c55e",
  },
  {
    id: "new-wave-city",
    title: "New Wave City",
    subtitle: "Event Landing Page",
    description:
      "Responsive event page capturing 1980s nostalgia with a broken-grid layout.",
    tags: ["HTML5", "CSS3", "Grid/Flexbox"],
    link: "https://john-oyler-new-wave-city.netlify.app",
    color: "#ec4899",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:py-16 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-orange-400 text-sm font-medium tracking-wider uppercase mb-2">
          Product Designer & Developer
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          John <span className="text-zinc-600">Oyler</span>
        </h1>
        <p className="text-zinc-400 text-lg mt-3 max-w-2xl">
          Bridging design and engineering to build user-centric, accessible
          digital products.
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="/about"
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white font-medium transition-colors"
          >
            About Me
          </Link>
          <a
            href="#projects"
            className="px-6 py-2 border border-zinc-700 hover:border-zinc-500 rounded-lg text-white transition-colors"
          >
            View Projects
          </a>
          <Link
            href="/resume"
            className="px-6 py-2 border border-zinc-700 hover:border-zinc-500 rounded-lg text-white transition-colors"
          >
            Resume
          </Link>
        </div>
      </motion.div>

      <section id="projects">
        <h2 className="text-2xl font-semibold mb-8">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block bg-zinc-900/50 hover:bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-zinc-700 transition-all hover:scale-[1.02]"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span
                    className="text-xs font-medium px-2 py-1 rounded"
                    style={{
                      backgroundColor: project.color + "20",
                      color: project.color,
                    }}
                  >
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 group-hover:text-orange-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="text-zinc-600 group-hover:text-white transition-colors text-xl">
                  →
                </span>
              </div>
              <p className="text-zinc-400 text-sm mt-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <footer className="mt-20 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
        <p>© 2026 John Oyler</p>
        <div className="flex gap-6">
          <a
            href="https://linkedin.com/in/john-oyler"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/johnoyler01-alt"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:john.oyler01@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </footer>
    </main>
  );
}
