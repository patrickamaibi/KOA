import { useState } from "react";
import { SEO } from "../components/ui/SEO";
import { Section } from "../components/ui/Section";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "../lib/supabaseClient";
import { hardcodedProjects } from "../data/projects";

const ACCESS_CODE = "KOA2025";
const currentYear = new Date().getFullYear();
const years = Array.from({ length: 10 }, (_, i) => String(currentYear - i));
const categories = ["Structural", "Highway", "Industrial", "Others"];

type Step = "gate" | "form" | "success";

export function SubmitTestimonial() {
  const [step, setStep] = useState<Step>("gate");
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    company: "",
    year: String(currentYear),
    projectId: "",
    remark: "",
  });

  const handleCodeSubmit = () => {
    if (codeInput.trim().toUpperCase() === ACCESS_CODE) {
      setCodeError(false);
      setStep("form");
    } else {
      setCodeError(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    const selectedProject = hardcodedProjects.find(
      (p) => String(p.id) === form.projectId
    );
    if (!selectedProject) return;

    setSubmitting(true);
    setSubmitError(false);

    const { error } = await supabase.from("testimonials").insert({
      name: form.name,
      role: form.role,
      company: form.company,
      year: form.year,
      project_id: selectedProject.id,
      project_title: selectedProject.title,
      category: selectedProject.category,
      remark: form.remark,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError(true);
    } else {
      setStep("success");
    }
  };

  const isFormValid =
    form.name.trim() &&
    form.role.trim() &&
    form.projectId &&
    form.remark.trim().length >= 20;

  return (
    <div className="pt-24 bg-white min-h-screen">
      <SEO
        title="Submit Testimonial - KOA Engineering"
        description="Share your experience working with KOA Engineering."
      />

      <Section variant="white" className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">

          {/* ── Step 1: Access Gate ──────────────────────────────────────── */}
          {step === "gate" && (
            <motion.div
              key="gate"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center py-16 px-6"
            >
              <div className="w-16 h-16 rounded-full bg-koa-accent/10 flex items-center justify-center mb-6">
                <Lock size={28} className="text-koa-accent" />
              </div>
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Client Access
              </h1>
              <p className="text-gray-500 mb-8 max-w-sm">
                Enter the access code shared with you by KOA Engineering to proceed.
              </p>

              <div className="w-full max-w-sm space-y-3">
                <input
                  type="text"
                  placeholder="Access code"
                  value={codeInput}
                  onChange={(e) => {
                    setCodeInput(e.target.value);
                    setCodeError(false);
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleCodeSubmit()}
                  className={`w-full border rounded-[4px] px-4 py-3 text-center font-display text-lg tracking-widest uppercase outline-none transition-colors ${
                    codeError
                      ? "border-red-400 bg-red-50 text-red-700"
                      : "border-gray-200 focus:border-koa-accent"
                  }`}
                />
                {codeError && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm flex items-center justify-center gap-1"
                  >
                    <AlertCircle size={14} /> Incorrect code. Please try again.
                  </motion.p>
                )}
                <button
                  onClick={handleCodeSubmit}
                  className="w-full bg-koa-accent text-koa-dark font-display font-bold uppercase tracking-widest py-3 rounded-[4px] hover:scale-[1.02] transition-transform duration-200 shadow-sm"
                >
                  Continue
                </button>
              </div>

              {/* ✅ FIX: was missing closing </p> and the <a> tag was missing its opening < */}
              <p className="mt-8 text-xs text-gray-400">
                Don't have a code?{" "}
                <a
                  href="mailto:info@koaengineering.com"
                  className="text-koa-accent underline underline-offset-2"
                >
                  Contact us
                </a>
              </p>
            </motion.div>
          )}

          {/* ── Step 2: Form ─────────────────────────────────────────────── */}
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="py-12 px-4"
            >
              <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                Share Your Experience
              </h1>
              <p className="text-gray-500 mb-10">
                Select the project you worked on with us and share a brief remark.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-display font-bold text-gray-700 mb-1.5 uppercase tracking-widest">
                    Full Name <span className="text-koa-accent">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Engr. Chidi Okeke"
                    className="w-full border border-gray-200 rounded-[4px] px-4 py-3 text-gray-800 outline-none focus:border-koa-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-display font-bold text-gray-700 mb-1.5 uppercase tracking-widest">
                    Role / Title <span className="text-koa-accent">*</span>
                  </label>
                  <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="e.g. Project Director"
                    className="w-full border border-gray-200 rounded-[4px] px-4 py-3 text-gray-800 outline-none focus:border-koa-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-display font-bold text-gray-700 mb-1.5 uppercase tracking-widest">
                    Company / Organisation
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="e.g. GreenPower Nigeria Ltd"
                    className="w-full border border-gray-200 rounded-[4px] px-4 py-3 text-gray-800 outline-none focus:border-koa-accent transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-display font-bold text-gray-700 mb-1.5 uppercase tracking-widest">
                      Year of Project
                    </label>
                    <select
                      name="year"
                      value={form.year}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-[4px] px-4 py-3 text-gray-800 outline-none focus:border-koa-accent transition-colors bg-white"
                    >
                      {years.map((y) => (
                        <option key={y} value={y}>{y}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-display font-bold text-gray-700 mb-1.5 uppercase tracking-widest">
                      Project <span className="text-koa-accent">*</span>
                    </label>
                    <select
                      name="projectId"
                      value={form.projectId}
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-[4px] px-4 py-3 text-gray-800 outline-none focus:border-koa-accent transition-colors bg-white"
                    >
                      <option value="">— Select a project —</option>
                      {categories.map((cat) => (
                        <optgroup key={cat} label={cat}>
                          {hardcodedProjects
                            .filter((p) => p.category === cat)
                            .map((p) => (
                              <option key={p.id} value={String(p.id)}>
                                {p.title}
                              </option>
                            ))}
                        </optgroup>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-display font-bold text-gray-700 mb-1.5 uppercase tracking-widest">
                    Your Remark <span className="text-koa-accent">*</span>
                  </label>
                  <textarea
                    name="remark"
                    value={form.remark}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Share your experience working with KOA Engineering on this project..."
                    className="w-full border border-gray-200 rounded-[4px] px-4 py-3 text-gray-800 outline-none focus:border-koa-accent transition-colors resize-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Minimum 20 characters ({form.remark.length} entered)
                  </p>
                </div>

                {submitError && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 text-sm flex items-center gap-1"
                  >
                    <AlertCircle size={14} /> Submission failed. Please try again.
                  </motion.p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={!isFormValid || submitting}
                  className="w-full bg-koa-accent text-koa-dark font-display font-bold uppercase tracking-widest py-4 rounded-[4px] hover:scale-[1.02] active:scale-100 transition-transform duration-200 shadow-sm disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100"
                >
                  {submitting ? "Submitting…" : "Submit Testimonial"}
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Step 3: Success ──────────────────────────────────────────── */}
          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center py-24 px-6"
            >
              <div className="w-20 h-20 rounded-full bg-koa-accent/10 flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-koa-accent" />
              </div>
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-3">
                Thank You!
              </h2>
              <p className="text-gray-500 max-w-sm">
                Your testimonial has been received and is now live on your
                project page. We appreciate you taking the time to share your
                experience.
              </p>
            </motion.div>
          )}

        </AnimatePresence>
      </Section>
    </div>
  );
}