import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";

function Hero() {
  // ── Typewriter effect state ──
  // Current displayed text
  const [displayText, setDisplayText] = useState("");
  // Which role we're currently typing
  const [roleIndex, setRoleIndex] = useState(0);
  // Are we deleting or typing?
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = 110;
    const deletingSpeed = 50;

    let timer;

    if (!isDeleting) {
      if (displayText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 1800);
      } else {
        timer = setTimeout(
          () => setDisplayText(currentRole.slice(0, displayText.length + 1)),
          typingSpeed,
        );
      }
    } else {
      if (displayText === "") {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }, 500);
      } else {
        timer = setTimeout(
          () => setDisplayText(currentRole.slice(0, displayText.length - 1)),
          deletingSpeed,
        );
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background decorative elements ── */}
      <div
        aria-hidden
        className="absolute top-1/4 right-10 w-64 h-64 rounded-full
                   bg-emerald-500/10 blur-3xl pointer-events-none animate-float"
      />
      <div
        aria-hidden
        className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full
                   bg-emerald-500/10 blur-2xl pointer-events-none"
        style={{ animationDelay: "2s" }}
      />

      {/* ── Content ── */}
      <div className="section-wrapper w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Availability badge */}
          {/* REACT CONCEPT: Conditional rendering with ternary */}
          {personalInfo.available && (
            <div
              className="inline-flex items-center gap-2 mb-8
                           dark:bg-slate-900 bg-white border dark:border-slate-700 border-slate-200
                           rounded-full px-4 py-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="font-mono text-xs dark:text-[#888] text-[#666] tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>
          )}

          {/* Greeting */}
          <p className="font-mono text-xs tracking-[0.25em] text-emerald-500 uppercase mb-4">
            Hello, I'm
          </p>

          {/* Name — large serif display font */}
          <h1
            className="font-serif text-6xl md:text-7xl lg:text-8xl font-light
                        dark:text-[#EFEFEF] text-[#1A1A1A] leading-none mb-4"
          >
            {personalInfo.name}
          </h1>

          {/* Typewriter role */}
          <div className="flex items-center gap-1 mb-8 h-10">
            <span className="font-serif text-2xl md:text-3xl font-light italic text-emerald-500">
              {displayText}
            </span>
            {/* Blinking cursor */}
            <span className="w-0.5 h-7 bg-emerald-500 animate-blink inline-block" />
          </div>

          {/* Short bio tagline */}
          <p
            className="font-sans text-base md:text-lg dark:text-[#888] text-[#666]
                       leading-relaxed max-w-xl mb-10 font-light"
          >
            I build clean, performant web interfaces with React and robust
            backend systems with Django. Focused on details that make products
            feel great.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              See My Work
              <svg
                width="14"
                height="14"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href="#contact" className="btn-ghost">
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-12">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-widest dark:text-[#555] text-[#999] hover:text-emerald-500 transition-colors uppercase"
            >
              GitHub
            </a>
            <span className="dark:text-[#333] text-[#DDD]">—</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs tracking-widest dark:text-[#555] text-[#999] hover:text-emerald-500 transition-colors uppercase"
            >
              LinkedIn
            </a>
            <span className="dark:text-[#333] text-[#DDD]">—</span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-mono text-xs tracking-widest dark:text-[#555] text-[#999] hover:text-emerald-500 transition-colors uppercase"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-xs tracking-widest dark:text-[#444] text-[#AAA] uppercase">
          scroll
        </span>
        <div className="w-px h-12 dark:bg-gradient-to-b from-[#444] to-transparent bg-gradient-to-b from-[#AAA] to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
