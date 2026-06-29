import type { Metadata } from 'next';
import LegalShell from '../components/LegalShell';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'The terms governing use of the Kora Health website and services, including the medical disclaimer, acceptable use, intellectual property, and liability.',
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      lastUpdated="29 June 2026"
      intro="These Terms of Service govern your access to and use of the Kora Health website at korahealthafrica.com and any related services. By using the site, you agree to these terms."
    >
      <h2>1. Acceptance of terms</h2>
      <p>By accessing or using korahealthafrica.com (the &quot;Site&quot;), you agree to be bound by these Terms of Service and our <a href="/privacy/">Privacy Policy</a>. If you do not agree, please do not use the Site.</p>

      <h2>2. About Kora</h2>
      <p>The Site is operated by <strong>[Legal Entity Name]</strong> (&quot;Kora&quot;, &quot;we&quot;, &quot;us&quot;), registered in <strong>[Country of Incorporation]</strong>. Kora provides a clinical-intelligence platform and related information for healthcare providers, health systems, governments, and partners.</p>

      <h2>3. The Site and services</h2>
      <p>The Site provides information about Kora and lets you request a demo or contact us. Access to Kora&apos;s software platform is provided separately under a written agreement. Nothing on the Site is an offer to provide medical services to the public.</p>

      <h2>4. Eligibility and authority</h2>
      <p>You represent that you are at least 18 years old and, where you act on behalf of an organization, that you are authorized to do so. Information you submit must be accurate and not misleading.</p>

      <h2>5. Medical disclaimer</h2>
      <p>
        Kora is a clinical-intelligence and decision-<strong>support</strong> tool. It is intended to assist qualified healthcare professionals and does <strong>not</strong> provide medical advice, diagnosis, or treatment, and is <strong>not a substitute for professional clinical judgment</strong>. Healthcare professionals remain solely responsible for all clinical decisions. Use of the Site does not create a doctor–patient relationship. In an emergency, contact local emergency services.
      </p>

      <h2>6. Acceptable use</h2>
      <p>You agree not to: use the Site unlawfully; attempt to gain unauthorized access to our systems or data; interfere with the Site&apos;s operation or security; scrape or harvest data without permission; or submit malicious code or false information.</p>

      <h2>7. Intellectual property</h2>
      <p>The Site and its content — including the Kora name, logo, text, graphics, and software — are owned by Kora or its licensors and are protected by intellectual-property laws. You may not copy, modify, distribute, or create derivative works without our prior written consent.</p>

      <h2>8. Third-party links and services</h2>
      <p>The Site may link to or rely on third-party services (for example, email delivery or scheduling). We are not responsible for the content or practices of third parties, which are governed by their own terms and policies.</p>

      <h2>9. Submissions and communications</h2>
      <p>When you submit a demo request or other information, you consent to us contacting you in connection with your enquiry. Do not submit confidential patient information through the Site&apos;s contact forms.</p>

      <h2>10. Disclaimers</h2>
      <p>The Site is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including fitness for a particular purpose, accuracy, or non-infringement, to the fullest extent permitted by law.</p>

      <h2>11. Limitation of liability</h2>
      <p>To the maximum extent permitted by law, Kora and its affiliates will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of data, profits, or goodwill, arising from your use of the Site.</p>

      <h2>12. Indemnification</h2>
      <p>You agree to indemnify and hold harmless Kora and its affiliates from claims, losses, and expenses arising out of your misuse of the Site or violation of these terms.</p>

      <h2>13. Governing law</h2>
      <p>These terms are governed by the laws of <strong>[Governing Jurisdiction]</strong>, without regard to conflict-of-laws principles. Disputes will be subject to the courts of <strong>[Jurisdiction/Venue]</strong>, unless otherwise required by applicable law.</p>

      <h2>14. Changes to these terms</h2>
      <p>We may update these terms from time to time. Continued use of the Site after changes take effect constitutes acceptance of the revised terms.</p>

      <h2>15. Contact</h2>
      <p>Questions about these terms: <a href="mailto:info@korahealthafrica.com">info@korahealthafrica.com</a> · [Legal Entity Name], [Registered Address].</p>
    </LegalShell>
  );
}
