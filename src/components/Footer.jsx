// Footer.jsx — simple, clean footer

import { personalInfo } from "../data/portfolioData";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-10 border-t dark:border-slate-700 border-slate-200">
      <div className="section-wrapper flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs dark:text-[#444] text-[#BBB] tracking-widest">
          © {year} {personalInfo.name}. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest dark:text-[#444] text-[#BBB] hover:text-emerald-500 transition-colors uppercase"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs tracking-widest dark:text-[#444] text-[#BBB] hover:text-emerald-500 transition-colors uppercase"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="font-mono text-xs tracking-widest dark:text-[#444] text-[#BBB] hover:text-emerald-500 transition-colors uppercase"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
