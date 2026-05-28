import LegalLayout from "@/components/landing/LegalLayout";

export default function DataCompliance() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Data & Compliance Notice"
      lastUpdated={"November 2025"}
      testId="data-compliance-page"
    >
      <p className="intro">
        TeachBack AI is designed to help students study smarter. This notice
        explains what data we collect during the waitlist stage and how we
        handle it.
      </p>

      <h2>What we collect at the waitlist stage</h2>
      <ul>
        <li>The email address you submit.</li>
        <li>
          Optional preferences: persona, main goal, and subject, only if you
          choose to share them.
        </li>
        <li>
          A timestamped record of the policies you consented to and the
          policy version.
        </li>
        <li>
          A one-way salted hash of your IP address (never the raw IP) and
          your browser user-agent string, used for basic abuse prevention.
        </li>
      </ul>

      <h2>Consent</h2>
      <p>
        Consent is required to join the waitlist. You must explicitly accept
        the Privacy Policy, Terms and Conditions, and this Data &amp;
        Compliance Notice before submitting your email. Your consent is
        recorded with a timestamp and policy version.
      </p>

      <h2>IP handling</h2>
      <p>
        We do not store raw IP addresses. If an IP is available from your
        request, we hash it with a server-side salt so the original value
        cannot be recovered.
      </p>

      <h2>Data removal</h2>
      <p>
        You can request removal of your waitlist entry at any time by
        emailing{" "}
        <a href="mailto:support@teachback.dev">support@teachback.dev</a>. We
        will remove your record from active systems.
      </p>

      <h2>Future product</h2>
      <p>
        The TeachBack AI product may, after launch, process content you
        provide for the purpose of evaluating your understanding (for
        example, notes you upload and transcripts of your explanations). The
        landing page waitlist does <em>not</em> collect that data. Any future
        processing will be governed by an updated, product-stage privacy
        notice and additional consent.
      </p>

      <h2>Transparency</h2>
      <p>
        We aim to keep this notice short, clear, and honest. If anything is
        unclear, please email{" "}
        <a href="mailto:support@teachback.dev">support@teachback.dev</a>.
      </p>
    </LegalLayout>
  );
}
