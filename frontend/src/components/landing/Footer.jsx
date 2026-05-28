export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative border-t border-white/10 bg-[#04060B]"
      data-testid="footer"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
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
              <span className="font-heading text-base font-semibold tracking-tight">
                <span className="text-white">TeachBack</span>
                <span className="text-[#00E5FF]"> AI</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-soft max-w-sm">
              Learn it by teaching it. A focused mobile-first learning app
              built on the Feynman Technique.
            </p>
          </div>

          <div className="flex flex-col sm:items-end gap-2">
            <a
              href="mailto:hello@teachback.ai"
              className="text-sm text-soft hover:text-[#00E5FF] transition-colors"
              data-testid="footer-contact-link"
            >
              hello@teachback.ai
            </a>
            <p className="text-xs text-muted-soft">
              © {year} TeachBack AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
