"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 md:py-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link
          href="/"
          className="text-zinc-500 hover:text-white transition-colors text-sm mb-8 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          About <span className="text-zinc-600">Me</span>
        </h1>

        <div className="prose prose-invert max-w-none text-zinc-300 space-y-4">
          <p>
            I'm a <strong className="text-white">Product Designer</strong> and{" "}
            <strong className="text-white">Front-End Developer</strong> based in
            Portland, Oregon. I bridge the gap between design and engineering to
            build user-centric, accessible digital products.
          </p>

          <p>
            My process combines UI/UX research, visual design principles, and
            usability testing with clean, semantic code to deliver measurable
            outcomes. I'm currently deepening my expertise in typography, color
            theory, and composition through formal graphic design training, with
            a growing focus on designing for human-centered AI applications.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">What I Do</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>
              <span className="text-white font-medium">Product Design:</span>{" "}
              UI/UX Research, Usability Testing, Wireframing & Prototyping
            </li>
            <li>
              <span className="text-white font-medium">
                Technical Execution:
              </span>{" "}
              React, Next.js, TypeScript, Tailwind CSS
            </li>
            <li>
              <span className="text-white font-medium">Tools:</span> Figma, Git,
              VS Code, Vercel, Netlify
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">Experience</h2>
          <p>
            With 15+ years of diverse experience across logistics,
            administration, and technical support— including service in the U.S.
            Armed Forces—I bring a unique perspective to problem-solving and a
            disciplined approach to product development.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">Education</h2>
          <ul className="list-disc list-inside space-y-2 text-zinc-300">
            <li>Fundamentals of Graphic Design — Coursera</li>
            <li>Meta Front-End Development Certificate — Coursera</li>
            <li>
              Google Cybersecurity Professional Certificate — Merit America
            </li>
          </ul>

          <div className="flex flex-wrap gap-4 mt-8 pt-6 border-t border-zinc-800">
            <a
              href="https://linkedin.com/in/john-oyler"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/johnoyler01-alt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:john.oyler01@gmail.com"
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors"
            >
              Email Me
            </a>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
