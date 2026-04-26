import { useEffect, useRef } from 'react';

/**
 * useIntersectionObserver
 * Finds all .reveal elements inside the referenced container
 * and adds the .visible class when they scroll into view.
 *
 * @returns {React.RefObject} - attach to a wrapper element
 */
function useIntersectionObserver() {
  // useRef creates a persistent reference to a DOM node
  // It doesn't trigger re-renders when it changes
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait for the ref to be attached to the DOM
    if (!containerRef.current) return;

    // Grab all .reveal elements inside our container
    const elements = containerRef.current.querySelectorAll('.reveal');

    // IntersectionObserver watches elements and calls our callback
    // when they intersect (enter/leave) the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is visible — trigger animation
            entry.target.classList.add('visible');
            // Unobserve so we don't re-trigger (animate once)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: '0px 0px -40px 0px', // Slightly before it fully enters
      }
    );

    // Start watching each element
    elements.forEach((el) => observer.observe(el));

    // Cleanup: disconnect observer when component unmounts
    // This prevents memory leaks — a key React best practice
    return () => observer.disconnect();
  }, []); // Empty dependency array = run once after first render

  return containerRef;
}

export default useIntersectionObserver;
