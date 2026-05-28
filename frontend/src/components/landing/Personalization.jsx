import { motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import {
  usePersonalization,
  STUDY_MODES,
  SUBJECTS,
  PERSONAS,
} from "@/context/PersonalizationContext";

/**
 * Personalization — Interactive section where visitors pick a study mode,
 * subject, and persona. These selections propagate (via context) to the hero
 * previews, the mini demo, and the waitlist form defaults.
 */
export default function Personalization() {
  const reduce = useReducedMotion();
  const {
    studyMode,
    setStudyMode,
    subject,
    setSubject,
    persona,
    setPersona,
    selections,
  } = usePersonalization();

  return (
    <section
      id="personalize"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5"
      data-testid="personalization-section"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#00E5FF]/80">
            Make it yours
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-white leading-[1.1]">
            Tell us how you study.
            <span className="block text-white/55">We&rsquo;ll shape the demo to match.</span>
          </h2>
          <p className="mt-4 max-w-xl text-soft">
            Pick a mode, a subject, and a persona. The product preview below
            updates live to reflect your choices.
          </p>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5"
        >
          {/* LEFT: pickers */}
          <div className="lg:col-span-8 space-y-4">
            <PickerCard
              testId="picker-study-mode"
              eyebrow="01 · Study mode"
              title="Choose your study mode"
              items={STUDY_MODES}
              selected={studyMode}
              onSelect={(id) => setStudyMode(id === studyMode ? "" : id)}
              itemTestPrefix="study-mode"
            />
            <PickerCard
              testId="picker-subject"
              eyebrow="02 · Subject"
              title="Pick a subject"
              items={SUBJECTS}
              selected={subject}
              onSelect={(id) => setSubject(id)}
              itemTestPrefix="subject"
              required
            />
            <PickerCard
              testId="picker-persona"
              eyebrow="03 · Persona"
              title="What kind of learner are you?"
              items={PERSONAS}
              selected={persona}
              onSelect={(id) => setPersona(id === persona ? "" : id)}
              itemTestPrefix="persona"
            />
          </div>

          {/* RIGHT: explainer card */}
          <div className="lg:col-span-4">
            <div
              className="sticky top-20 rounded-[24px] border border-white/10 bg-[rgba(10,16,28,0.62)] backdrop-blur-xl p-6"
              data-testid="personalization-explainer"
            >
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#00E5FF]" aria-hidden="true" />
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">
                  Live tailoring
                </p>
              </div>
              <h3 className="mt-3 font-heading text-[18px] font-semibold text-white">
                {selections.mode?.label || "Pick a study mode"}
              </h3>
              <p
                className="mt-2 text-sm text-soft leading-relaxed min-h-[60px]"
                data-testid="personalization-mode-blurb"
              >
                {selections.mode?.blurb ||
                  "Choose a mode above and we'll explain how TeachBack adapts to it."}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                    Subject
                  </p>
                  <p className="mt-1 font-medium text-white" data-testid="personalization-subject-summary">
                    {selections.subject?.label || "—"}
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/30 p-3">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">
                    Persona
                  </p>
                  <p className="mt-1 font-medium text-white" data-testid="personalization-persona-summary">
                    {selections.persona?.label || "Anyone"}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-xs text-muted-soft">
                {selections.persona
                  ? selections.persona.cta
                  : "We'll tailor the early-access invite to your needs."}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PickerCard({
  testId,
  eyebrow,
  title,
  items,
  selected,
  onSelect,
  itemTestPrefix,
  required = false,
}) {
  return (
    <div
      className="rounded-[24px] border border-white/10 bg-[rgba(10,16,28,0.55)] backdrop-blur-xl p-5 sm:p-6"
      data-testid={testId}
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#00E5FF]/80">
          {eyebrow}
        </p>
        {required && (
          <span className="text-[10px] uppercase tracking-wider text-white/40">
            Required for preview
          </span>
        )}
      </div>
      <h3 className="mt-2 font-heading text-[17px] sm:text-[18px] font-semibold text-white">
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((it) => {
          const active = selected === it.id;
          return (
            <button
              key={it.id}
              type="button"
              onClick={() => onSelect(it.id)}
              data-testid={`${itemTestPrefix}-${it.id}`}
              aria-pressed={active}
              className={`group inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition-[background-color,border-color,box-shadow,color] duration-200 ${
                active
                  ? "border-[rgba(0,229,255,0.55)] bg-[rgba(0,229,255,0.12)] text-white shadow-[0_0_0_1px_rgba(0,229,255,0.18),0_0_18px_rgba(0,229,255,0.18)]"
                  : "border-white/10 bg-[rgba(10,16,28,0.45)] text-white/80 hover:text-white hover:border-white/20"
              }`}
            >
              {active && (
                <Check
                  className="h-3.5 w-3.5 text-[#00E5FF]"
                  aria-hidden="true"
                />
              )}
              <span>{it.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
