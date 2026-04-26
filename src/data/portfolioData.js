export const personalInfo = {
  name: "Saroj Sapkota",
  firstName: "saroj",
  role: "FullStack Developer",
  location: "Kathmandu, Nepal",
  email: "sarojsap985@gmail.com",
  github: "https://github.com/sarojsap",
  linkedin: "https://www.linkedin.com/in/saroj-sapkota-552147261/",
  available: true,

  // Typewriter roles in the Hero section
  roles: [
    "React Developer",,
    "Django Developer",
    "AI/ML Enthusiast",
  ],

  // Bio paragraphs for the About section
  bio: [
    "I'm a self-taught Full Stack Developer from Kathmandu with a strong focus on backend development. I enjoy designing scalable systems, building RESTful APIs, and working with Django to create robust and maintainable web applications.",
    "While backend is my core strength, I also work with React to build responsive and intuitive user interfaces. I focus on writing clean, efficient code and building systems that are reliable, performant, and easy to extend.",
  ],

  // Quick-glance facts
  facts: [
    { label: "Location", value: "Kathmandu, Nepal" },
    { label: "Focus", value: "Django / Backend Systems" },
    { label: "Status", value: "Open to Opportunities" },
    { label: "Learning", value: "TypeScript, Next.js, System Design" },
  ],
};

// ─── Skills ────────────────────────────────────────────── */
// level: 0–100 (shown as progress bar)
export const skills = [
  { name: "Python", level: 85, category: "Backend" },
  { name: "Django", level: 82, category: "Backend" },
  { name: "Django REST Framework", level: 78, category: "Backend" },
  { name: "REST API Design", level: 80, category: "Backend" },
  { name: "PostgreSQL", level: 72, category: "Backend" },
  { name: "Node.js (basics)", level: 50, category: "Backend" },

  { name: "React.js", level: 75, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 82, category: "Frontend" },
  { name: "HTML & CSS", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "Responsive Design", level: 88, category: "Frontend" },

  { name: "Git & GitHub", level: 75, category: "Tools" },
];

// ─── Projects ───────────────────────────────────────────── */
export const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description:
      "An enterprise-grade, full-stack Automated Attendance System using Computer Vision, Django REST Framework, and SQLite/PostgreSQL. Instead of traditional roll calls or RFID cards, this system uses a Kiosk-style webcam to detect faces, calculate 128-dimension facial embeddings, and communicate with a backend REST API to log check-ins and check-outs smartly.",
    tech: ["Django", "DRF", "OpenCV", "SQLite"],
    category: "Django",
    github: "https://github.com/sarojsap/Face-Recognition-Attendance-System",
    live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "INVENTORY MANAGEMENT SYSTEM",
    description:
      "Built a scalable Django-based inventory system with automated stock alerts, secure REST APIs for real-time analytics, Google OAuth authentication, and CSV reporting features.",
    tech: ["Django", "DRF", "PostgreSQL", "Tailwind", "JavaScript"],
    category: ["Django","JavaScript"],
    github: "https://github.com/sarojsap/Inventory-Stock-Alert-System",
    live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "SHABDASANSAR – NEPALI LITERARY PLATFORM",
    description:
      "Developed a full-featured literary platform with custom authentication, user profiles, content management (posts, likes, comments, search), AI-powered Nepali summaries using Gemini, and production-ready deployment.",
    tech: ["Django", "PostgreSQL", "Tailwind", "Cloudinary", "Gemini AI"],
    category: "Django",
    github: "https://github.com/sarojsap/WordGhar",
    live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "SAJHATOOLS",
    description:
      "Built a modular backend for tool borrowing with approvals, messaging, and request tracking, featuring optimized relational models and secure authentication.",
    tech: ["Django", "PostgreSQL"],
    category: "Django",
    github: "https://github.com/yourusername/quiz-app",
    live: "https://your-quiz-app.vercel.app",
    featured: false,
  },
  {
    id: 5,
    title: "This Portfolio",
    description:
      "The site you're on right now. Built with React, Tailwind CSS, and Vite. Features dark/light mode, scroll animations, and a contact form.",
    tech: ["React", "Tailwind", "Vite", "CSS Animations"],
    category: "React",
    github: "https://github.com/yourusername/portfolio",
    live: "#",
    featured: true,
  },
];

// ─── Nav links ───────────────────────────────────────────── */
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
