import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

/**
 * Shared layout for legal pages (/privacy, /terms, /data-compliance).
 * Keeps the same dark theme as the landing page, with readable prose.
 */
export default function LegalLayout({ eyebrow, title, lastUpdated, children, testId }) {
  return (
    <div
      className="min-h-screen w-full overflow-x-hidden bg-[#05070D] text-white font-body"
      data-testid={testId || "legal-page"}
    >
      {/* Top bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[rgba(5,7,13,0.72)] border-b border-white/10">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 group"
            data-testid="legal-brand-link"
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
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-[rgba(10,16,28,0.55)] px-3 py-1.5 text-xs text-soft hover:text-white hover:border-[rgba(0,229,255,0.3)] transition-colors"
            data-testid="legal-back-link"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative hero-bg noise-overlay">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-[#00E5FF]/80">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
            {title}
          </h1>
          {lastUpdated && (
            <p className="mt-4 text-sm text-muted-soft">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <main className="relative">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 pb-20 sm:pb-24">
          <div className="rounded-[24px] border border-white/10 bg-[rgba(10,16,28,0.6)] backdrop-blur-xl p-6 sm:p-8 lg:p-10 prose-legal">
            {children}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <Link
              to="/privacy"
              className="text-soft hover:text-[#00E5FF] transition-colors"
              data-testid="legal-link-privacy"
            >
              Privacy Policy
            </Link>
            <span className="text-white/15">•</span>
            <Link
              to="/terms"
              className="text-soft hover:text-[#00E5FF] transition-colors"
              data-testid="legal-link-terms"
            >
              Terms and Conditions
            </Link>
            <span className="text-white/15">•</span>
            <Link
              to="/data-compliance"
              className="text-soft hover:text-[#00E5FF] transition-colors"
              data-testid="legal-link-compliance"
            >
              Data &amp; Compliance
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
