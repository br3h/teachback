import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useReducedMotion } from "framer-motion";

const ITEMS = [
  {
    q: "Who is TeachBack AI for?",
    a: "Students who want to test real understanding instead of just rereading notes. High school, college, and anyone studying for a serious exam.",
  },
  {
    q: "How does it work?",
    a: "You upload notes, explain the topic out loud, and TeachBack AI compares your explanation to the material to surface what you understood and what you missed.",
  },
  {
    q: "Does it just give me the answers?",
    a: "No. It helps you find your gaps and guides you to improve. The Socratic Tutor asks questions instead of handing you the answer.",
  },
  {
    q: "When will it launch?",
    a: "Early access spots are released through the waitlist in small batches. Join below to get the earliest invite.",
  },
];

export default function FAQ() {
  const reduce = useReducedMotion();
  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 lg:py-24 border-t border-white/5"
      data-testid="faq-section"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#00E5FF]/80">
            Frequently asked
          </p>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-semibold tracking-tight text-white leading-[1.15]">
            Questions, answered.
          </h2>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14 }}
          whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8"
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-3"
            data-testid="faq-accordion"
          >
            {ITEMS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i + 1}`}
                className="rounded-[20px] border border-white/10 bg-[rgba(10,16,28,0.55)] backdrop-blur-xl px-5 data-[state=open]:border-[rgba(0,229,255,0.25)]"
                data-testid={`faq-item-${i + 1}`}
              >
                <AccordionTrigger className="py-5 text-left text-[15px] sm:text-base font-medium text-white hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-soft leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
