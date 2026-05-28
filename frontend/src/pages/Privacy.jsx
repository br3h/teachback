import LegalLayout from "@/components/landing/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated={"November 2025"}
      testId="privacy-page"
    >
      <p className="intro">
        TeachBack AI is a learning product built on the Feynman Technique.
        This Privacy Policy explains what information we collect during the
        waitlist stage, how we use it, and the choices you have. We will
        update this policy as the product evolves before full launch.
      </p>

      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Waitlist email.</strong> The email address you submit when
          joining the waitlist.
        </li>
        <li>
          <strong>Optional preferences.</strong> If you choose to share them,
          we store your selected persona (student, parent, or tutor), your
          main goal (e.g. exam prep), and a subject (e.g. biology). These are
          optional.
        </li>
        <li>
          <strong>Limited technical metadata.</strong> Your browser user-agent
          string and a one-way salted hash of your IP address. We do not
          store your raw IP.
        </li>
        <li>
          <strong>Consent record.</strong> A timestamp and version number of
          the policies you accepted when joining the waitlist.
        </li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To send you early access invites when the beta opens.</li>
        <li>
          To send occasional product updates from{" "}
          <a href="mailto:updates@teachback.dev">updates@teachback.dev</a>.
        </li>
        <li>
          To understand which subjects and study modes are most requested so
          we can prioritize features.
        </li>
      </ul>

      <h2>How we store it</h2>
      <p>
        Your information is stored securely in our database. Access is
        restricted to TeachBack AI staff who need it to operate the waitlist.
        We do not sell your personal data to third parties.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>
          You can request removal from the waitlist at any time by emailing{" "}
          <a href="mailto:support@teachback.dev">support@teachback.dev</a>.
        </li>
        <li>
          You can opt out of product update emails using the unsubscribe link
          included in every message.
        </li>
      </ul>

      <h2>Children &amp; students</h2>
      <p>
        TeachBack AI is designed for student learning. If you are a minor,
        please ensure a parent or guardian is aware that you are joining the
        waitlist.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, email{" "}
        <a href="mailto:support@teachback.dev">support@teachback.dev</a>. For
        general inquiries, email{" "}
        <a href="mailto:hello@teachback.dev">hello@teachback.dev</a>.
      </p>

      <p className="footnote">
        This is a waitlist-stage policy and may evolve before TeachBack AI
        launches in full. Material changes will be communicated to waitlist
        subscribers.
      </p>
    </LegalLayout>
  );
}
