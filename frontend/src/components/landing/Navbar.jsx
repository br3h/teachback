import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToWaitlist = (e) => {
    e.preventDefault();
    const el = document.getElementById("waitlist");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[rgba(5,7,13,0.72)] border-b border-white/10"
          : "backdrop-blur-md bg-[rgba(5,7,13,0.35)] border-b border-transparent"
      }`}
      data-testid="navbar"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 group"
          data-testid="navbar-brand-link"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-[10px] border border-white/10 bg-[rgba(0,229,255,0.08)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M4 6h16M4 12h12M4 18h8"
                stroke="#00E5FF"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-heading text-[15px] sm:text-base font-semibold tracking-tight">
            <span className="text-white">TeachBack</span>
            <span className="text-[#00E5FF]"> AI</span>
          </span>
        </a>

        <Button
          onClick={scrollToWaitlist}
          className="rounded-[22px] h-9 px-4 bg-[#00E5FF] text-[#05070D] font-medium hover:bg-[#00E5FF] hover:brightness-105 hover:shadow-[0_0_0_1px_rgba(0,229,255,0.22),0_0_34px_rgba(0,229,255,0.16)] transition-[box-shadow,filter] duration-200 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#00E5FF]/40"
          data-testid="navbar-join-waitlist-button"
        >
          Join Waitlist
        </Button>
      </div>
    </header>
  );
}
