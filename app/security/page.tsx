import type { Metadata } from 'next';
import LegalShell from '../components/LegalShell';

export const metadata: Metadata = {
  title: 'Security & Trust',
  description:
    'How Kora Health protects clinical and personal data: encryption, access control, data residency, breach response, and our compliance posture across Africa.',
};

export default function SecurityPage() {
  return (
    <LegalShell
      title="Security & Trust"
      lastUpdated="29 June 2026"
      intro="Health data is among the most sensitive information that exists. Protecting it is foundational to everything Kora builds. This page summarizes the safeguards and practices we use to keep clinical and personal data secure."
    >
      <h2>Our commitment</h2>
      <p>Kora is built for environments where trust, reliability, and data protection are non-negotiable: clinics, hospitals, and ministries of health. Security and privacy are designed into the platform, not added afterward.</p>

      <h2>Encryption</h2>
      <ul>
        <li><strong>In transit:</strong> all connections to our services use modern TLS encryption.</li>
        <li><strong>At rest:</strong> stored data is encrypted using industry-standard algorithms.</li>
      </ul>

      <h2>Access control</h2>
      <ul>
        <li>Role-based access and the principle of least privilege: people and systems get only the access they need.</li>
        <li>Authentication controls and audit logging of access to sensitive data.</li>
      </ul>

      <h2>Data residency and sovereignty</h2>
      <p>Kora supports <strong>in-country data residency</strong> for clinical data where required, so that patient information can be stored and processed in line with national data-protection and health-data laws. De-identified, aggregated population-health data is used for surveillance and reporting wherever individual-level data is not required.</p>

      <h2>Offline-first and edge processing</h2>
      <p>Kora&apos;s offline-first architecture runs clinical AI on-device or on a facility server, reducing the need to transmit sensitive data over networks and keeping core functions available even without connectivity.</p>

      <h2>Data minimization</h2>
      <p>We collect and retain only what is necessary, and we de-identify or aggregate data for analytics and population-health use wherever feasible.</p>

      <h2>Monitoring and resilience</h2>
      <p>We monitor our systems for security and availability, maintain logging, and apply secure development and change-management practices.</p>

      <h2>Breach response</h2>
      <p>We maintain procedures to detect, contain, and respond to security incidents, and to notify affected clients, individuals, and regulators within the timeframes required by applicable law.</p>

      <h2>Compliance posture</h2>
      <p>We design our practices to align with applicable African data-protection laws, including Nigeria&apos;s Data Protection Act, Kenya&apos;s Data Protection Act, and Ghana&apos;s Data Protection Act, and with recognized security standards and health-data safeguards (for example, ISO 27001-style controls and HIPAA-aligned practices). We enter into Data Processing Agreements with the providers, health systems, and government partners whose data we process. <em>[Specific certifications and audit status to be listed here as they are obtained.]</em></p>

      <h2>Responsible disclosure</h2>
      <p>If you believe you have found a security vulnerability, please contact us at <a href="mailto:info@korahealthafrica.com">info@korahealthafrica.com</a> so we can investigate and respond. We appreciate responsible disclosure.</p>

      <h2>Contact</h2>
      <p>For security or data-protection questions: <a href="mailto:info@korahealthafrica.com">info@korahealthafrica.com</a>.</p>
    </LegalShell>
  );
}
