import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const INITIAL_FORM = { name: "", email: "", message: "" };

function Contact() {
  const sectionRef = useIntersectionObserver();

  const [formData, setFormData] = useState(INITIAL_FORM);

  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Spread existing state, override only the changed field
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as user types
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  //  Validate form
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 20)
      newErrors.message = "Message too short (min 20 chars).";
    return newErrors;
  };

  //  Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData(INITIAL_FORM); // Reset form
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28" ref={sectionRef}>
      <div className="section-wrapper">
        <div className="reveal divider mb-12" />

        <div className="grid md:grid-cols-[1fr_400px] gap-16 items-start">
          {/* ── Left: Text ── */}
          <div>
            <p className="reveal section-label">04 / Contact</p>
            <h2 className="reveal reveal-delay-1 section-heading dark:text-[#EFEFEF] text-[#1A1A1A] mb-6">
              Let's work
              <br />
              <span className="italic text-emerald-500">together.</span>
            </h2>
            <p className="reveal reveal-delay-2 font-sans font-light dark:text-[#888] text-[#666] leading-relaxed mb-10">
              I'm currently open to internship and junior roles. Whether it's a
              quick question or a new project — my inbox is always open.
            </p>

            {/* Direct contact links */}
            <div className="reveal reveal-delay-3 space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded dark:bg-slate-900 bg-white dark:border-slate-700 border-slate-200 border dark:text-[#666] text-[#999] group-hover:text-emerald-500 group-hover:border-emerald-500 transition-colors">
                  <svg
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-widest dark:text-[#666] text-[#888] group-hover:text-emerald-500 transition-colors uppercase">
                  {personalInfo.email}
                </span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded dark:bg-slate-900 bg-white dark:border-slate-700 border-slate-200 border dark:text-[#666] text-[#999] group-hover:text-emerald-500 group-hover:border-emerald-500 transition-colors">
                  <svg
                    width="13"
                    height="13"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-widest dark:text-[#666] text-[#888] group-hover:text-emerald-500 transition-colors uppercase">
                  GitHub
                </span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded dark:bg-slate-900 bg-white dark:border-slate-700 border-slate-200 border dark:text-[#666] text-[#999] group-hover:text-emerald-500 group-hover:border-emerald-500 transition-colors">
                  <svg
                    width="13"
                    height="13"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-widest dark:text-[#666] text-[#888] group-hover:text-emerald-500 transition-colors uppercase">
                  LinkedIn
                </span>
              </a>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="reveal reveal-delay-2">
            {/* Success state */}
            {status === "success" ? (
              <div className="card p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="#4ade80"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl dark:text-[#EFEFEF] text-[#1A1A1A] mb-2">
                  Message sent!
                </h3>
                <p className="font-sans text-sm dark:text-[#888] text-[#666] mb-6">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn-ghost text-xs"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="card p-6 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="font-mono text-xs tracking-widest dark:text-[#555] text-[#AAA] uppercase block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`input-field ${errors.name ? "border-red-500" : ""}`}
                  />
                  {errors.name && (
                    <p className="font-mono text-xs text-red-400 mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="font-mono text-xs tracking-widest dark:text-[#555] text-[#AAA] uppercase block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`input-field ${errors.email ? "border-red-500" : ""}`}
                  />
                  {errors.email && (
                    <p className="font-mono text-xs text-red-400 mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="font-mono text-xs tracking-widest dark:text-[#555] text-[#AAA] uppercase block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className={`input-field resize-none ${errors.message ? "border-red-500" : ""}`}
                  />
                  {errors.message && (
                    <p className="font-mono text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="animate-spin"
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                          className="opacity-25"
                        />
                        <path
                          fill="currentColor"
                          className="opacity-75"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {status === "error" && (
                  <p className="font-mono text-xs text-red-400 text-center">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
