# 🚀 Portfolio — React + Tailwind CSS

A clean, interactive portfolio website built with **React 18**, **Tailwind CSS**, and **Vite**.

---

## 📁 Project Structure

```
portfolio/
├── index.html               # Entry HTML — loads Google Fonts here
├── vite.config.js           # Vite bundler config
├── tailwind.config.js       # Tailwind: custom colors, fonts, animations
├── postcss.config.js        # Needed by Tailwind
└── src/
    ├── main.jsx             # React root — mounts App into #root
    ├── App.jsx              # Root component — theme state lives here
    ├── index.css            # Global CSS: Tailwind layers + custom classes
    ├── data/
    │   └── portfolioData.js # ← EDIT THIS to personalize your portfolio
    ├── hooks/
    │   ├── useScrollPosition.js        # Custom hook: tracks window.scrollY
    │   └── useIntersectionObserver.js  # Custom hook: scroll-reveal animations
    └── components/
        ├── Navbar.jsx    # Sticky nav, mobile menu, theme toggle
        ├── Hero.jsx      # Landing section with typewriter effect
        ├── About.jsx     # Bio + quick facts card
        ├── Skills.jsx    # Animated skill progress bars
        ├── Projects.jsx  # Filterable project grid
        ├── Contact.jsx   # Controlled form with validation
        └── Footer.jsx    # Simple footer
```

---

## ⚛️ React Concepts Covered (Interview Prep)

### 1. `useState`
Used everywhere. Key examples:
- `App.jsx` — theme toggle: `const [isDark, setIsDark] = useState(true)`
- `Hero.jsx` — typewriter: `displayText`, `roleIndex`, `isDeleting`
- `Navbar.jsx` — mobile menu: `const [menuOpen, setMenuOpen] = useState(false)`
- `Projects.jsx` — active filter tab
- `Contact.jsx` — `formData`, `errors`, `status`

### 2. `useEffect`
- `App.jsx` — syncing theme state to DOM class
- `Hero.jsx` — setTimeout-based typewriter loop with **cleanup**
- `Skills.jsx` — IntersectionObserver for bar animation with **cleanup**
- `useScrollPosition.js` — scroll event listener with **cleanup**

> **Key interview point**: Always return a cleanup function from useEffect when you add event listeners, intervals, or observers. Without cleanup → memory leaks.

### 3. `useRef`
- `useIntersectionObserver.js` — `containerRef` to grab DOM node without re-render
- `Skills.jsx` — `barsRef` to target the skills container

> `useRef` doesn't trigger re-renders. Use it to reference DOM nodes or store mutable values across renders.

### 4. Custom Hooks
- `useScrollPosition()` — encapsulates scroll tracking logic
- `useIntersectionObserver()` — encapsulates reveal animation logic

> Custom hooks = functions starting with `use` that call other hooks. They let you reuse stateful logic across components.

### 5. Props
- `<Navbar isDark={isDark} toggleTheme={toggleTheme} />` — passing state and functions down
- `<ProjectCard project={project} />` — passing data objects as props

### 6. Lifting State Up
- Theme state lives in `App.jsx` (the common ancestor), not in Navbar, because the whole page needs it.

### 7. Controlled Components
- Every `<input>` in Contact.jsx has `value={formData.field}` + `onChange={handleChange}`.
- React state is the **single source of truth** — not the DOM.

### 8. Conditional Rendering
- `{personalInfo.available && <Badge />}` — using `&&`
- `{isDark ? <SunIcon /> : <MoonIcon />}` — using ternary
- `{status === 'success' ? <SuccessCard /> : <Form />}` — complex branching

### 9. Lists and Keys
- `{projects.map((p) => <ProjectCard key={p.id} project={p} />)}`
- Always use a **stable, unique key** (not array index for dynamic lists)

### 10. Derived State
- `const filteredProjects = activeFilter === 'All' ? projects : projects.filter(...)`
- Don't create a separate `useState` for things you can compute from existing state.

---

## 🎨 Design Decisions

| Choice | Reason |
|--------|--------|
| Dark mode default | Preferred by developers, easier on eyes |
| Cormorant Garamond | Elegant serif — stands out from generic sans-serif portfolios |
| DM Mono for labels | Creates visual rhythm and code-like feel |
| Warm gold accent (#C8A96E) | Sophisticated, not aggressive — works on both dark/light |
| CSS `IntersectionObserver` | Native API, no library needed, great performance |
| Section numbers (01, 02...) | Editorial feel — adds structure without headers |

---

## 🛠️ Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📚 Key Libraries

| Library | Version | Purpose |
|---------|---------|---------|
| React | 18.x | UI framework |
| Vite | 4.x | Build tool (fast HMR) |
| Tailwind CSS | 3.x | Utility-first styling |
| PostCSS | 8.x | Tailwind preprocessor |

No extra libraries — everything is vanilla React + CSS.
