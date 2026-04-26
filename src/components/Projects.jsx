import { useState } from "react";
import { projects } from "../data/portfolioData";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

// Get unique categories for filter tabs
const categories = ["All", ...new Set(projects.map((p) => p.category))];

function ProjectCard({ project }) {
  return (
    <div className="card group p-6 hover:border-emerald-500/50 cursor-default">
      {/* Header row: category tag + links */}
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs tracking-widest text-emerald-500 uppercase">
          {project.category}
        </span>

        {/* External links — visible on hover */}
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="dark:text-[#666] text-[#AAA] hover:text-emerald-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* GitHub icon */}
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            aria-label="Live site"
            className="dark:text-[#666] text-[#AAA] hover:text-emerald-500 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* External link icon */}
            <svg
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
            </svg>
          </a>
        </div>
      </div>

      {/* Project title */}
      <h3 className="font-serif text-2xl font-light dark:text-[#EFEFEF] text-[#1A1A1A] mb-3 group-hover:text-emerald-500 transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-sans font-light text-sm dark:text-[#777] text-[#666] leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="font-mono text-xs px-2.5 py-1 rounded
                       dark:bg-slate-950 bg-slate-100
                       dark:text-[#666] text-[#888]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const sectionRef = useIntersectionObserver();

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-28" ref={sectionRef}>
      <div className="section-wrapper">
        <div className="reveal divider mb-12" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="reveal section-label">03 / Projects</p>
            <h2 className="reveal reveal-delay-1 section-heading dark:text-[#EFEFEF] text-[#1A1A1A]">
              Things I've
              <br />
              <span className="italic text-emerald-500">built.</span>
            </h2>
          </div>

          <div className="reveal reveal-delay-2 flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded border transition-all duration-200
                  ${
                    activeFilter === cat
                      ? "bg-emerald-500 text-slate-950 border-emerald-500"
                      : "dark:border-slate-700 border-slate-200 dark:text-[#666] text-[#999] hover:border-emerald-500 hover:text-emerald-500"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="reveal reveal-delay-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty state — if filter returns nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="font-mono text-sm dark:text-[#555] text-[#AAA]">
              No projects in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
