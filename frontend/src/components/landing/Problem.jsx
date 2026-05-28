import { motion, useReducedMotion } from "framer-motion";
import { Eye, Search, GitBranch } from "lucide-react";

const CARDS = [
  {
    icon: Eye,
    title: "Familiarity ≠ understanding.",
    body: "You recognize the answer, but you cannot explain it without your notes in front of you.",
  },
  {
    icon: Search,
    title: "You miss the gaps.",
    body: "You study for hours, but the weak spots stay invisible until the exam reveals them.",
  },
  {
    icon: GitBranch,
    title: "No feedback loop.",
    body: "You do not know what you actually forgot until you have already lost the points.",
  },
];

export default function Problem() {
  const reduce = useReducedMotion();
  return (
    <section
      id="problem"
      className="relative py-16 sm:py-20 lg:py-24"
      data-testid="problem-section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00E5FF]/80">
            The problem
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-white leading-[1.1]">
            Rereading notes feels productive.
            <span className="block text-white/55">It usually is not.</span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
                whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group rounded-[24px] border border-white/10 bg-[rgba(10,16,28,0.62)] backdrop-blur-xl p-6 transition-[border-color,box-shadow] duration-200 hover:border-[rgba(0,229,255,0.25)] hover:shadow-[0_0_0_1px_rgba(0,229,255,0.14),0_0_24px_rgba(0,229,255,0.10)]"
                data-testid={`problem-card-${i + 1}`}
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[rgba(0,229,255,0.06)]">
                  <Icon className="h-5 w-5 text-[#00E5FF]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-heading text-[17px] font-semibold text-white">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm text-soft leading-relaxed">
                  {c.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
