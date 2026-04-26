import { useState, useEffect } from 'react';

function useScrollPosition() {
  // Initialize state with current scroll position
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    // Handler to update state on scroll
    const handleScroll = () => setScrollY(window.scrollY);

    // Add event listener when component mounts
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup: remove listener when component unmounts
    // Without this, the listener would live forever (memory leak!)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty array = add listener once, remove on unmount

  return scrollY;
}

export default useScrollPosition;
