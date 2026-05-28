import { motion, useReducedMotion } from "framer-motion";
import { Upload, Mic, ListChecks } from "lucide-react";

const STEPS = [
  {
    n: "01",
    icon: Upload,
    title: "Upload your notes",
    body: "Camera OCR, gallery, PDF, or just paste the text. TeachBack pulls out the key concepts.",
  },
  {
    n: "02",
    icon: Mic,
    title: "Teach the topic out loud",
    body: "Explain it like you are teaching a curious 12-year-old. No script. Mark moments of confusion as you go.",
  },
  {
    n: "03",
    icon: ListChecks,
    title: "Get your gaps, score, and plan",
    body: "See exactly what you nailed, what you missed, and a personalized study plan for the next 7–21 days.",
  },
];

export default function Solution() {
  const reduce = useReducedMotion();
  return (
    <section
      id="solution"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5"
      data-testid="solution-section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00E5FF]/80">
            How it works
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-white leading-[1.1]">
            TeachBack turns studying into
            <span className="block">
              <span className="text-[#00E5FF]">proof of understanding.</span>
            </span>
          </h2>
          <p className="mt-4 max-w-xl text-soft">
            Three steps. No quizzes to write. No flashcards to maintain.
          </p>
        </div>

        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Decorative connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block steps-divider"
          />
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 group rounded-[24px] border border-white/10 bg-[rgba(10,16,28,0.7)] backdrop-blur-xl p-6 transition-[border-color,box-shadow,transform] duration-200 hover:border-[rgba(0,229,255,0.25)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(0,229,255,0.14),0_0_24px_rgba(0,229,255,0.10)]"
                data-testid={`solution-step-${i + 1}`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading text-xs font-semibold tracking-[0.25em] text-[#00E5FF]/85">
                    {s.n}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-[rgba(0,229,255,0.06)]">
                    <Icon className="h-4.5 w-4.5 text-[#00E5FF]" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-[18px] font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-soft leading-relaxed">{s.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
