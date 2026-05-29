import { Link } from "react-router-dom";

const SOCIAL_LINKS = [
  {
    href: "https://x.com/teachbackdev",
    label: "TeachBack AI on X",
    handle: "@teachbackdev",
    testId: "footer-social-x",
    Icon: () => (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M17.53 3H20.5l-6.51 7.44L21.75 21h-6.21l-4.86-6.35L4.99 21H2.02l6.97-7.96L1.5 3h6.36l4.39 5.81L17.53 3zm-1.09 16.2h1.71L7.66 4.7H5.83L16.44 19.2z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/teachback.dev/",
    label: "TeachBack AI on Instagram",
    handle: "@teachback.dev",
    testId: "footer-social-instagram",
    Icon: () => (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="relative border-t border-white/10 bg-[#04060B]"
      data-testid="footer"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
          {/* Brand + mission + socials */}
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

            {/* Socials */}
            <div className="mt-5" data-testid="footer-socials">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                Follow
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                {SOCIAL_LINKS.map(({ href, label, handle, testId, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    data-testid={testId}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-[rgba(10,16,28,0.55)] px-3 py-1.5 text-[12px] text-soft hover:text-white hover:border-[rgba(0,229,255,0.35)] hover:bg-[rgba(0,229,255,0.06)] transition-[color,background-color,border-color] duration-200"
                  >
                    <span className="text-[#00E5FF] group-hover:text-[#2AF6D6] transition-colors">
                      <Icon />
                    </span>
                    <span>{handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="sm:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">
              Contact
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex flex-wrap gap-x-1">
                <span className="text-muted-soft">General —</span>
                <a
                  href="mailto:hello@teachback.dev"
                  className="text-soft hover:text-[#00E5FF] transition-colors break-all"
                  data-testid="footer-email-hello"
                >
                  hello@teachback.dev
                </a>
              </li>
              <li className="flex flex-wrap gap-x-1">
                <span className="text-muted-soft">Support —</span>
                <a
                  href="mailto:support@teachback.dev"
                  className="text-soft hover:text-[#00E5FF] transition-colors break-all"
                  data-testid="footer-email-support"
                >
                  support@teachback.dev
                </a>
              </li>
              <li className="flex flex-wrap gap-x-1">
                <span className="text-muted-soft">Updates —</span>
                <a
                  href="mailto:updates@teachback.dev"
                  className="text-soft hover:text-[#00E5FF] transition-colors break-all"
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
          <p className="text-xs text-muted-soft">Learn it by teaching it.</p>
        </div>
      </div>
    </footer>
  );
}
