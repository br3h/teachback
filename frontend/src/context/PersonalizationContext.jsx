import { createContext, useCallback, useContext, useMemo, useState } from "react";

/**
 * PersonalizationContext
 * Shared selection state across the landing page so that user picks in the
 * "Choose your study mode", "Pick a subject", and "What kind of learner" cards
 * propagate to the hero/iPad preview, mini demo, and waitlist form defaults.
 */
const PersonalizationContext = createContext(null);

export const STUDY_MODES = [
  {
    id: "exam-prep",
    label: "Exam Prep",
    blurb:
      "Upload your unit notes, teach the topic out loud, and get a gap report before test day.",
  },
  {
    id: "homework-help",
    label: "Homework Help",
    blurb:
      "Turn confusing homework topics into guided explanations you can actually understand.",
  },
  {
    id: "notes-review",
    label: "Notes Review",
    blurb:
      "Use your own notes as the source of truth and see what you really retained.",
  },
  {
    id: "last-minute",
    label: "Last-Minute Cramming",
    blurb:
      "Find the highest-priority gaps fast so you know what to review first.",
  },
];

export const SUBJECTS = [
  { id: "biology", label: "Biology", topic: "Cell Biology · Mitosis" },
  { id: "chemistry", label: "Chemistry", topic: "Organic · Reaction Mechanisms" },
  { id: "physics", label: "Physics", topic: "Mechanics · Newton's Laws" },
  { id: "math", label: "Math", topic: "Calculus · Derivatives" },
  { id: "history", label: "History", topic: "Modern World · World War II" },
  { id: "english", label: "English", topic: "Literary Analysis · Themes" },
  { id: "other", label: "Other", topic: "Your Topic" },
];

export const PERSONAS = [
  {
    id: "student",
    label: "Student",
    cta: "Get early access to study smarter.",
  },
  {
    id: "parent",
    label: "Parent",
    cta: "Help your student find what they actually understand.",
  },
  {
    id: "tutor",
    label: "Tutor / Teacher",
    cta: "See where students are stuck before the test.",
  },
];

export const DEFAULT_CTA = "Be first to try TeachBack AI.";

export function PersonalizationProvider({ children }) {
  const [studyMode, setStudyMode] = useState(""); // "" | exam-prep | homework-help | notes-review | last-minute
  const [subject, setSubject] = useState("biology"); // default biology so hero preview shows something
  const [persona, setPersona] = useState(""); // "" | student | parent | tutor

  const selections = useMemo(() => {
    const mode = STUDY_MODES.find((m) => m.id === studyMode) || null;
    const sub = SUBJECTS.find((s) => s.id === subject) || SUBJECTS[0];
    const per = PERSONAS.find((p) => p.id === persona) || null;
    return { mode, subject: sub, persona: per };
  }, [studyMode, subject, persona]);

  const ctaHeadline = useMemo(() => {
    return selections.persona?.cta || DEFAULT_CTA;
  }, [selections.persona]);

  const reset = useCallback(() => {
    setStudyMode("");
    setSubject("biology");
    setPersona("");
  }, []);

  const value = useMemo(
    () => ({
      studyMode,
      setStudyMode,
      subject,
      setSubject,
      persona,
      setPersona,
      selections,
      ctaHeadline,
      reset,
    }),
    [studyMode, subject, persona, selections, ctaHeadline, reset]
  );

  return (
    <PersonalizationContext.Provider value={value}>
      {children}
    </PersonalizationContext.Provider>
  );
}

export function usePersonalization() {
  const ctx = useContext(PersonalizationContext);
  if (!ctx) {
    throw new Error("usePersonalization must be used within a PersonalizationProvider");
  }
  return ctx;
}
