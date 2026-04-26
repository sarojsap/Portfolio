import { personalInfo } from "../data/portfolioData";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function About() {
  const sectionRef = useIntersectionObserver();

  return (
    <section id="about" className="py-28" ref={sectionRef}>
      <div className="section-wrapper">
        {/* Top divider */}
        <div className="reveal divider mb-12" />

        <div className="grid md:grid-cols-[1fr_340px] gap-16 items-start">
          {/* ── Left: Bio text ── */}
          <div>
            {/* Section label */}
            <p className="reveal section-label">01 / About</p>

            <h2 className="reveal reveal-delay-1 section-heading dark:text-[#EFEFEF] text-[#1A1A1A] mb-8">
              A little bit
              <br />
              <span className="italic text-emerald-500">about me.</span>
            </h2>

            {/* Render bio paragraphs from data array */}
            {/* REACT CONCEPT: .map() over array, using index as key (OK for static data) */}
            {personalInfo.bio.map((paragraph, index) => (
              <p
                key={index}
                className={`reveal reveal-delay-${index + 2} font-sans font-light
                           dark:text-[#999] text-[#555] leading-[1.85] text-base mb-5`}
              >
                {paragraph}
              </p>
            ))}

            {/* Tech I'm learning */}
            <div className="reveal reveal-delay-4 mt-8">
              <p className="font-mono text-xs tracking-widest text-emerald-500 uppercase mb-4">
                Currently exploring
              </p>
              <div className="flex flex-wrap gap-2">
                {["TypeScript", "Next.js", "FastAPI"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded
                               dark:bg-slate-900 bg-white
                               dark:border-slate-700 border-slate-200 border
                               dark:text-[#888] text-[#666]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Quick facts card ── */}
          <div className="reveal reveal-delay-3">
            <div className="card p-6">
              <p className="font-mono text-xs tracking-widest text-emerald-500 uppercase mb-6">
                Quick Facts
              </p>

              {/* Facts list */}
              <ul className="space-y-5">
                {personalInfo.facts.map((fact, index) => (
                  <li
                    key={fact.label}
                    className={`flex flex-col gap-1 ${index !== 0 ? "pt-5 border-t dark:border-slate-700 border-slate-200" : ""}`}
                  >
                    <span className="font-mono text-xs dark:text-[#555] text-[#AAA] tracking-widest uppercase">
                      {fact.label}
                    </span>
                    <span className="font-sans text-sm dark:text-[#EFEFEF] text-[#1A1A1A]">
                      {/* Highlight "Open to Opportunities" in accent */}
                      {fact.value.includes("Open") ? (
                        <span className="text-emerald-500">{fact.value}</span>
                      ) : (
                        fact.value
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Download CV button */}
              <div className="mt-8 pt-6 border-t dark:border-slate-700 border-slate-200">
                <a
                  href="/Saroj_Sapkota_Resume.pdf"
                  className="btn-ghost w-full justify-center text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
