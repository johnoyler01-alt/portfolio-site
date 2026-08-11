"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Resume() {
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

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
          Resume
        </h1>
        <p className="text-zinc-400 mb-8">
          Download a PDF version or view online.
        </p>

        <div className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold">John A. Oyler</h2>
              <p className="text-zinc-400">Portland, Oregon · (415) 615-2704</p>
              <p className="text-zinc-400">john.oyler01@gmail.com</p>
            </div>
            <div className="flex flex-col items-end text-sm text-zinc-400">
              <a href="#" className="hover:text-white transition-colors">
                Download PDF
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {/* Professional Summary */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Professional Summary
              </h3>
              <p className="text-zinc-300 text-sm leading-relaxed">
                Creative and analytical Product Designer with a strong
                foundation in front-end development. I bridge the gap between
                design and engineering to build user-centric, accessible digital
                products. My process combines UI/UX research, visual design
                principles, and usability testing with clean, semantic code to
                deliver measurable outcomes.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Skills & Expertise
              </h3>
              <div className="space-y-2 text-sm text-zinc-300">
                <p>
                  <span className="text-white font-medium">
                    Product Design:
                  </span>{" "}
                  UI/UX Research · Usability Testing · Wireframing & Prototyping
                  · Visual Hierarchy · Typography & Color Theory · User Flows &
                  Journey Mapping · WCAG Accessibility · Human-Centered AI
                  Design
                </p>
                <p>
                  <span className="text-white font-medium">
                    Technical Execution:
                  </span>{" "}
                  React.js / React Native · JavaScript (ES6+) · HTML5 / CSS3 /
                  Sass · Responsive Web Design · CSS Grid / Flexbox · DOM
                  Manipulation · Python
                </p>
                <p>
                  <span className="text-white font-medium">
                    Tools & Workflow:
                  </span>{" "}
                  Figma · Git / GitHub · VS Code · Netlify / Vite · Jekyll /
                  Webpack · Unix / PowerShell · FigJam / Miro
                </p>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Selected Projects
              </h3>
              <div className="space-y-4 text-sm text-zinc-300">
                <div>
                  <p className="text-white font-medium">
                    AI Index 2026 Interactive Explorer
                  </p>
                  <p className="text-xs text-zinc-400 mb-1">
                    Product Designer & Developer
                  </p>
                  <p>
                    Designed a clean, data-visualization-focused interface for
                    Stanford AI Index 2026 report findings. Built with React and
                    modern charting libraries.
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium">AI Writing Assistant</p>
                  <p className="text-xs text-zinc-400 mb-1">
                    Product Designer & Developer
                  </p>
                  <p>
                    Full-stack React application integrated with Gemini 2.5
                    Flash for distraction-free AI-assisted writing.
                  </p>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Bay Area Transit Dashboard
                  </p>
                  <p className="text-xs text-zinc-400 mb-1">
                    Product Designer & Developer
                  </p>
                  <p>
                    Interactive dashboard with live transit data, Recharts
                    visualizations, and real-time station information.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Professional Experience
              </h3>
              <div className="space-y-3 text-sm text-zinc-300">
                <div>
                  <p className="text-white font-medium">
                    Mail Handler | USPS, Portland, OR
                  </p>
                  <p className="text-xs text-zinc-400">05/2023 – Present</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>
                      Process thousands of letters and packages daily with
                      rigorous attention to detail
                    </li>
                    <li>
                      Identify and mitigate potential security risks through
                      careful observation
                    </li>
                    <li>
                      Maintain calm, methodical focus under high-volume pressure
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-white font-medium">
                    Parts Associate | Lithia Buick/GMC, Portland, OR
                  </p>
                  <p className="text-xs text-zinc-400">09/2021 – 03/2023</p>
                  <ul className="list-disc list-inside mt-1">
                    <li>
                      Collaborated with technicians and customers on parts
                      ordering and distribution
                    </li>
                    <li>
                      Anticipated demand through cross-functional partnership
                    </li>
                    <li>
                      Increased customer satisfaction through proactive
                      problem-solving
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400 mb-2">
                Education & Certifications
              </h3>
              <ul className="list-disc list-inside text-sm text-zinc-300 space-y-1">
                <li>Fundamentals of Graphic Design — Coursera</li>
                <li>Meta Front-End Development Certificate — Coursera</li>
                <li>
                  Google Cybersecurity Professional Certificate — Merit America
                  | 12/2024
                </li>
                <li>
                  Mastercard Cybersecurity Virtual Experience Program — Forage |
                  10/2024
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=john.oyler01@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-white transition-colors"
          >
            Contact Me
          </a>
          <Link
            href="/"
            className="px-6 py-2 border border-zinc-700 hover:border-zinc-500 rounded-lg text-white transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
