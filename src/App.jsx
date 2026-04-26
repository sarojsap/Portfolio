
import { useState, useEffect } from 'react';

import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import About    from './components/About';
import Skills   from './components/Skills';
import Projects from './components/Projects';
import Contact  from './components/Contact';
import Footer   from './components/Footer';

function App() {
  // REACT CONCEPT: Lifting state up
  // Theme state lives here (the closest common ancestor of Navbar and the rest)
  // so both Navbar (toggle button) and the entire page can react to it.
  const [isDark, setIsDark] = useState(true);

  // REACT CONCEPT: useEffect for side effects
  // This syncs React state → the real DOM.
  // Tailwind's darkMode:'class' reads whether <html> has class="dark"
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]); // Re-run whenever isDark changes

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    // REACT CONCEPT: Fragments — wrap siblings without adding a DOM node
    <>
      {/* Noise texture overlay (purely decorative) */}
      <div className="noise fixed inset-0 pointer-events-none z-50" aria-hidden />

      {/* REACT CONCEPT: Props — passing data down to child components */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main>
        {/* Each section is its own self-contained component */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
