import LegalLayout from "@/components/landing/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms and Conditions"
      lastUpdated={"November 2025"}
      testId="terms-page"
    >
      <p className="intro">
        Welcome to TeachBack AI. By using this site or joining the waitlist,
        you agree to these Terms and Conditions. We keep them short and
        readable on purpose.
      </p>

      <h2>Use of the site</h2>
      <p>
        This site is provided to share information about TeachBack AI and to
        collect waitlist signups. You agree to use the site lawfully and not
        to attempt to disrupt, attack, scrape at scale, or misuse it.
      </p>

      <h2>Waitlist access</h2>
      <p>
        Joining the waitlist does not guarantee immediate or any specific
        access to the product. Early access invitations are released in
        batches as the product matures.
      </p>

      <h2>Updates</h2>
      <p>
        TeachBack AI may update the site, the product, the waitlist process,
        and these policies at any time. Material updates that affect waitlist
        subscribers will be communicated by email.
      </p>

      <h2>Educational purpose</h2>
      <p>
        TeachBack AI is an educational tool intended to help students learn
        and self-assess. It is not a substitute for instructors or formal
        academic guidance. We do not guarantee grades, exam outcomes, or
        academic results.
      </p>

      <h2>Misuse &amp; spam</h2>
      <p>
        Automated abuse, spam submissions, and attempts to bypass safeguards
        may result in removal from the waitlist and being blocked from the
        service.
      </p>

      <h2>Contact</h2>
      <p>
        For general inquiries, email{" "}
        <a href="mailto:hello@teachback.dev">hello@teachback.dev</a>. For
        support questions, email{" "}
        <a href="mailto:support@teachback.dev">support@teachback.dev</a>.
      </p>
    </LegalLayout>
  );
}
