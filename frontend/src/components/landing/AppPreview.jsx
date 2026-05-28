import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Flame,
  Sparkles,
} from "lucide-react";

/**
 * AppPreview — Custom, believable mobile-app screenshot built from UI.
 * NOT a stock image. NOT a generic dashboard.
 */
export default function AppPreview() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [retention, setRetention] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setRetention(72);
      return;
    }
    const target = 72;
    const start = performance.now();
    const duration = 900;
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - t, 3);
      setRetention(Math.round(eased * target));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce]);

  return (
    <div
      ref={ref}
      className="relative"
      data-testid="app-preview"
      aria-label="TeachBack AI app preview"
    >
      {/* Soft glow behind device */}
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[60px] blur-3xl opacity-60"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,229,255,0.18), transparent 70%)",
        }}
      />

      {/* Device frame */}
      <div className={`${reduce ? "" : "tb-float"} mx-auto`}>
        <div
          className="relative w-[300px] sm:w-[330px] rounded-[44px] border border-white/10 p-[6px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            boxShadow:
              "0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 0 0 1px rgba(255,255,255,0.03)",
          }}
        >
          {/* Screen */}
          <div className="relative overflow-hidden rounded-[38px] bg-[#05070D] aspect-[9/19]">
            {/* Subtle radial inside screen */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(280px circle at 60% 0%, rgba(0,229,255,0.14), transparent 60%)",
              }}
            />
            {/* Notch */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 h-5 w-[88px] rounded-full bg-black/80 border border-white/5" />

            {/* Status row */}
            <div className="relative z-10 flex items-center justify-between px-5 pt-3 text-[10px] text-white/70 font-medium">
              <span>9:41</span>
              <div className="flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <span className="h-1 w-1 rounded-full bg-white/50" />
                <span className="ml-1.5 inline-block h-2 w-3 rounded-sm border border-white/40" />
              </div>
            </div>

            {/* Header */}
            <div className="relative z-10 px-5 pt-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">
                Session Results
              </p>
              <h3 className="mt-1 font-heading text-[15px] font-semibold text-white">
                Cell Biology · Mitosis
              </h3>
            </div>

            {/* Score card */}
            <div className="relative z-10 mx-5 mt-4 rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.7)] backdrop-blur-md p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                    Overall Score
                  </p>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="font-heading text-[40px] leading-none font-bold text-white">
                      87
                    </span>
                    <span className="text-white/45 text-sm">/ 100</span>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span
                    className="inline-flex items-center gap-1 rounded-full border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.08)] px-2 py-0.5 text-[10px] font-medium text-[#00E5FF]"
                    data-testid="app-preview-delta-badge"
                  >
                    <TrendingUp className="h-3 w-3" aria-hidden="true" />
                    +6 this week
                  </span>
                  <span className="text-[10px] text-white/50">Grade B+</span>
                </div>
              </div>
            </div>

            {/* Feynman Verdict */}
            <div className="relative z-10 mx-5 mt-3 rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.6)] backdrop-blur-md p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-[#00E5FF]" aria-hidden="true" />
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/55">
                  Feynman Verdict
                </p>
              </div>
              <p className="mt-1.5 text-[12px] leading-snug text-white/85">
                Clear explanation with strong intuition. Missed one key
                constraint and a definition edge-case.
              </p>
            </div>

            {/* Two columns */}
            <div className="relative z-10 mx-5 mt-3 grid grid-cols-2 gap-2.5">
              <div className="rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.55)] p-3">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-3.5 w-3.5 text-[#2AF6D6]"
                    aria-hidden="true"
                  />
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">
                    Strengths
                  </p>
                </div>
                <ul className="mt-1.5 space-y-1 text-[11px] text-white/80">
                  <li>Core idea explained</li>
                  <li>Correct example used</li>
                  <li>Good causal reasoning</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.55)] p-3">
                <div className="flex items-center gap-1.5">
                  <AlertTriangle
                    className="h-3.5 w-3.5 text-[#F7C948]"
                    aria-hidden="true"
                  />
                  <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">
                    Gaps to Review
                  </p>
                </div>
                <ul className="mt-1.5 space-y-1 text-[11px] text-white/80">
                  <li>Limiting case skipped</li>
                  <li>Mixed two terms</li>
                  <li>One formula recall</li>
                </ul>
              </div>
            </div>

            {/* Retention bar */}
            <div className="relative z-10 mx-5 mt-3 rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.55)] p-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] uppercase tracking-[0.14em] text-white/55">
                  Retention · 7 days
                </p>
                <span
                  className="text-[11px] font-medium text-[#00E5FF]"
                  data-testid="app-preview-retention-value"
                >
                  {retention}%
                </span>
              </div>
              <div
                className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={retention}
                aria-valuemin={0}
                aria-valuemax={100}
                data-testid="app-preview-retention-progress"
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

            {/* XP / Streak */}
            <div className="relative z-10 mx-5 mt-3 mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-[rgba(10,16,28,0.55)] px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.1)] text-[#00E5FF] text-[10px] font-semibold">
                  XP
                </span>
                <div>
                  <p className="text-[11px] font-semibold text-white">+120</p>
                  <p className="text-[9px] uppercase tracking-wider text-white/45">
                    earned
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="h-4 w-4 text-[#F7C948]" aria-hidden="true" />
                <div className="text-right">
                  <p className="text-[11px] font-semibold text-white">5 days</p>
                  <p className="text-[9px] uppercase tracking-wider text-white/45">
                    streak
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
