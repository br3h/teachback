import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative border-t border-white/10 bg-[#04060B]"
      data-testid="footer"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
          {/* Brand + mission */}
          <div className="sm:col-span-5">
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

          {/* Contact */}
          <div className="sm:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
              Contact
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <span className="text-muted-soft">General — </span>
                <a
                  href="mailto:hello@teachback.dev"
                  className="text-soft hover:text-[#00E5FF] transition-colors"
                  data-testid="footer-email-hello"
                >
                  hello@teachback.dev
                </a>
              </li>
              <li>
                <span className="text-muted-soft">Support — </span>
                <a
                  href="mailto:support@teachback.dev"
                  className="text-soft hover:text-[#00E5FF] transition-colors"
                  data-testid="footer-email-support"
                >
                  support@teachback.dev
                </a>
              </li>
              <li>
                <span className="text-muted-soft">Updates — </span>
                <a
                  href="mailto:updates@teachback.dev"
                  className="text-soft hover:text-[#00E5FF] transition-colors"
                  data-testid="footer-email-updates"
                >
                  updates@teachback.dev
                </a>
              </li>
            </ul>
          </div>

          {/* Legal links */}
          <div className="sm:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
              Legal
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <Link
                  to="/privacy"
                  className="text-soft hover:text-[#00E5FF] transition-colors"
                  data-testid="footer-link-privacy"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-soft hover:text-[#00E5FF] transition-colors"
                  data-testid="footer-link-terms"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/data-compliance"
                  className="text-soft hover:text-[#00E5FF] transition-colors"
                  data-testid="footer-link-compliance"
                >
                  Data &amp; Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-muted-soft">
            © {year} TeachBack AI. All rights reserved.
          </p>
          <p className="text-xs text-muted-soft">
            Learn it by teaching it.
          </p>
        </div>
      </div>
    </footer>
  );
}
