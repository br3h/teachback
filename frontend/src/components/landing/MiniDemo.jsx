import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Flame,
  Activity,
} from "lucide-react";
import { usePersonalization } from "@/context/PersonalizationContext";

/**
 * MiniDemo — Larger product preview card that updates live based on the
 * user's selections in Personalization (subject + study mode + persona).
 */
export default function MiniDemo() {
  const reduce = useReducedMotion();
  const { selections } = usePersonalization();
  const subject = selections.subject;
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  const target = 78;
  const [retention, setRetention] = useState(reduce ? target : 0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setRetention(target);
      return;
    }
    setRetention(0);
    const start = performance.now();
    const duration = 900;
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setRetention(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce, subject?.id, selections.mode?.id]);

  const verdict = selections.mode
    ? VERDICTS_BY_MODE[selections.mode.id]
    : VERDICTS_BY_MODE.default;

  return (
    <section
      id="demo"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5"
      data-testid="demo-section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00E5FF]/80">
            Live preview
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-white leading-[1.1]">
            What your session would look like.
          </h2>
          <p className="mt-4 max-w-xl text-soft">
            This is a visual preview based on your selections — not real user
            data.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-[28px] border border-white/10 bg-[rgba(10,16,28,0.62)] backdrop-blur-xl p-5 sm:p-7 lg:p-8 relative overflow-hidden"
          data-testid="demo-card"
        >
          {/* Demo header */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-[rgba(0,229,255,0.08)]">
                <Activity className="h-3.5 w-3.5 text-[#00E5FF]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                  Visual demo • Not real data
                </p>
                <p className="text-[13px] font-semibold text-white" data-testid="demo-subject-line">
                  {subject?.topic || "Your topic"}
                  {selections.mode && (
                    <span className="text-white/55 font-medium">
                      {" · "}
                      {selections.mode.label}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.08)] px-2.5 py-1 text-[11px] font-medium text-[#00E5FF]">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Live
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Score block */}
            <div className="md:col-span-4 rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.6)] p-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                Overall Score
              </p>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="font-heading text-[56px] sm:text-[64px] leading-none font-bold text-white">
                  82
                </span>
                <span className="text-white/45 text-sm">/ 100</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.08)] px-2 py-0.5 text-[11px] font-medium text-[#00E5FF]">
                  <TrendingUp className="h-3 w-3" aria-hidden="true" />
                  +9 vs last session
                </span>
                <span className="text-[11px] text-white/55">Grade B</span>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/55">
                    Retention · 7 days
                  </p>
                  <span
                    className="text-[12px] font-medium text-[#00E5FF]"
                    data-testid="demo-retention-value"
                  >
                    {retention}%
                  </span>
                </div>
                <div
                  className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10"
                  role="progressbar"
                  aria-valuenow={retention}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  data-testid="demo-retention-progress"
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${retention}%`,
                      background:
                        "linear-gradient(90deg, #00E5FF 0%, #2AF6D6 100%)",
                      boxShadow: "0 0 12px rgba(0,229,255,0.5)",
                      transition: "width 80ms linear",
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/20 px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.1)] text-[#00E5FF] text-[10px] font-semibold">
                    XP
                  </span>
                  <span className="text-[12px] font-semibold text-white">+140</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="h-4 w-4 text-[#F7C948]" aria-hidden="true" />
                  <span className="text-[12px] font-semibold text-white">
                    Streak 5
                  </span>
                </div>
              </div>
            </div>

            {/* Verdict + lists */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2 rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.6)] p-5">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                    Feynman Verdict
                  </p>
                </div>
                <p
                  className="mt-2 text-[14px] sm:text-[15px] leading-relaxed text-white/90"
                  data-testid="demo-verdict"
                >
                  {verdict}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.55)] p-5">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#2AF6D6]" aria-hidden="true" />
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                    Strengths
                  </p>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-white/85">
                  <li>Solid intuition for the core concept</li>
                  <li>Walked through a correct example</li>
                  <li>Clear cause-and-effect reasoning</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.55)] p-5">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle className="h-3.5 w-3.5 text-[#F7C948]" aria-hidden="true" />
                  <p className="text-[11px] uppercase tracking-[0.16em] text-white/55">
                    Gaps to Review
                  </p>
                </div>
                <ul className="mt-2 space-y-1.5 text-sm text-white/85">
                  <li>Skipped the limiting case</li>
                  <li>Confused two similar terms</li>
                  <li>Missed one key formula recall</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const VERDICTS_BY_MODE = {
  default:
    "You explained the core idea cleanly. One edge case is missing and two terms got blurred together. A 15-minute review will close the gap.",
  "exam-prep":
    "Strong test-ready explanation. Tighten the edge case and one definition before exam day — the rest is solid.",
  "homework-help":
    "You're close. The reasoning is right but one step is hand-waved. Walk through it slowly and the answer locks in.",
  "notes-review":
    "Your notes are mostly internalized. Two ideas need one more pass before they stick under pressure.",
  "last-minute":
    "Cover the limiting case and the formula recall first — those are your highest-priority gaps for tomorrow.",
};
