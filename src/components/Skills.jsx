import { useRef, useEffect } from "react";
import { skills } from "../data/portfolioData";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

function Skills() {
  const sectionRef = useIntersectionObserver();

  // Ref to watch when the skills section enters viewport
  const barsRef = useRef(null);

  // Group skills by category using .reduce()
  // { "Core": [...], "Frameworks": [...], "Tools": [...] }
  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Animate skill bars when section comes into view
  useEffect(() => {
    if (!barsRef.current) return;

    const bars = barsRef.current.querySelectorAll(".skill-bar-fill");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger CSS transition by adding class
            // The target width is set via CSS custom property --target-width
            bars.forEach((bar) => bar.classList.add("animate"));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(barsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28" ref={sectionRef}>
      <div className="section-wrapper">
        <div className="reveal divider mb-12" />

        <div className="mb-12">
          <p className="reveal section-label">02 / Skills</p>
          <h2 className="reveal reveal-delay-1 section-heading dark:text-[#EFEFEF] text-[#1A1A1A]">
            What I work
            <br />
            <span className="italic text-emerald-500">with.</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div ref={barsRef} className="reveal reveal-delay-2">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {Object.entries(grouped).map(([category, categorySkills]) => (
              <div key={category}>
                {/* Category label */}
                <p className="font-mono text-xs tracking-widest text-emerald-500 uppercase mb-6">
                  {category}
                </p>

                {/* Skills in this category */}
                <div className="space-y-5">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-sans text-sm dark:text-[#EFEFEF] text-[#1A1A1A] font-light">
                          {skill.name}
                        </span>
                        <span className="font-mono text-xs dark:text-[#555] text-[#AAA]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar track */}
                      <div className="h-px dark:bg-slate-700 bg-lightborder relative overflow-hidden rounded-full">
                        {/* Progress bar fill */}
                        {/* CSS custom property sets target width for transition */}
                        <div
                          className="skill-bar-fill h-full bg-emerald-500 rounded-full"
                          style={{ "--target-width": `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <p className="reveal mt-16 font-mono text-xs dark:text-[#444] text-[#BBB] tracking-widest">
          * Percentages reflect personal confidence, not objective measure.
        </p>
      </div>
    </section>
  );
}

export default Skills;
