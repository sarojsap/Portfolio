import { useState } from "react";
import useScrollPosition from "../hooks/useScrollPosition";
import { navLinks, personalInfo } from "../data/portfolioData";

// ─── Props destructuring: we pull isDark and toggleTheme from props
function Navbar({ isDark, toggleTheme }) {
  // Local state for mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Custom hook — gives us scroll Y value reactively
  const scrollY = useScrollPosition();

  // Derived state: is the user scrolled down?
  const isScrolled = scrollY > 50;

  // Close menu when a link is clicked (good UX)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "dark:bg-slate-950/95 bg-slate-50/95 backdrop-blur-sm border-b dark:border-slate-700 border-slate-200"
            : "bg-transparent"
        }
      `}
    >
      <nav className="max-w-5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="font-mono text-sm tracking-widest dark:text-[#EFEFEF] text-[#1A1A1A] hover:text-emerald-500 transition-colors"
        >
          {personalInfo.firstName.toLowerCase()}
          <span className="text-emerald-500">.</span>
        </a>

        {/* Desktop Navigation */}
        {/* REACT CONCEPT: Rendering lists with .map() and key prop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-widest dark:text-[#888] text-[#666] hover:text-emerald-500 transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: Theme toggle + Hire Me */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          {/* REACT CONCEPT: Event handler calling a prop function */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-9 h-9 flex items-center justify-center rounded dark:text-[#888] text-[#666] hover:text-emerald-500 transition-colors"
          >
            {/* Conditional rendering based on isDark prop */}
            {isDark ? (
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Hire Me link — hidden on small screens */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-xs py-2 px-4"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
          >
            <span
              className={`block w-5 h-px dark:bg-[#EFEFEF] bg-[#1A1A1A] transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
            />
            <span
              className={`block w-5 h-px dark:bg-[#EFEFEF] bg-[#1A1A1A] transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px dark:bg-[#EFEFEF] bg-[#1A1A1A] transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}

      {menuOpen && (
        <div className="md:hidden dark:bg-slate-950 bg-slate-50 border-t dark:border-slate-700 border-slate-200 px-6 py-6">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="font-mono text-sm tracking-widest dark:text-[#888] text-[#666] hover:text-emerald-500 transition-colors uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="btn-primary mt-6 text-xs"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

export default Navbar;
