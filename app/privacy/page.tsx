import type { Metadata } from 'next';
import LegalShell from '../components/LegalShell';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Kora Health collects, uses, protects, and shares personal data — and your rights under Nigerian, Kenyan, Ghanaian, and other African data-protection laws.',
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      lastUpdated="29 June 2026"
      intro="This Privacy Policy explains how Kora Health collects, uses, shares, and protects personal data when you visit korahealthafrica.com, contact us, or engage our services. We take the privacy of health information seriously and aim to comply with applicable data-protection laws across the African markets we serve."
    >
      <h2>1. Who we are</h2>
      <p>
        Kora Health (&quot;Kora&quot;, &quot;we&quot;, &quot;us&quot;) is operated by <strong>[Legal Entity Name]</strong>, registered in <strong>[Country of Incorporation]</strong> at <strong>[Registered Address]</strong>. For privacy questions or to exercise your rights, contact our Data Protection Officer at <a href="mailto:info@korahealthafrica.com">info@korahealthafrica.com</a>.
      </p>

      <h2>2. Scope of this policy</h2>
      <p>
        This policy covers personal data for which Kora is the <strong>data controller</strong> — for example, information from website visitors, prospective clients, and partners. Where Kora processes patient or clinical data <strong>on behalf of</strong> a healthcare provider, hospital, ministry, or other client, Kora acts as a <strong>data processor</strong>; that processing is governed by our agreement (Data Processing Agreement) with that client and by applicable health-data laws, not solely by this policy.
      </p>

      <h2>3. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>Contact and demo-request details: name, work email, organization, role/title, country, phone number, and any message you submit.</li>
        <li>Communications you send to us by email or other channels.</li>
      </ul>
      <h3>Information collected automatically</h3>
      <ul>
        <li>Technical and usage data such as IP address, browser and device type, pages visited, and referring source, collected to operate and secure the site.</li>
        <li>Cookies and similar technologies (see Section 11).</li>
      </ul>
      <h3>Patient and clinical data</h3>
      <p>
        When Kora&apos;s platform processes patient records on behalf of a client, that data is handled under the client&apos;s instructions and the applicable Data Processing Agreement, with safeguards described in our <a href="/security/">Security &amp; Trust</a> page. We do not use client patient data for our own purposes.
      </p>

      <h2>4. How we use personal data</h2>
      <ul>
        <li>To respond to enquiries, demo requests, and partnership or investment discussions.</li>
        <li>To provide, maintain, secure, and improve our website and services.</li>
        <li>To send communications you have requested or that are relevant to an existing relationship.</li>
        <li>To comply with legal, regulatory, and contractual obligations.</li>
      </ul>

      <h2>5. Legal bases for processing</h2>
      <p>Depending on the context and jurisdiction, we rely on one or more of: your <strong>consent</strong>; performance of a <strong>contract</strong>; our <strong>legitimate interests</strong> (e.g., responding to your enquiry, securing our systems); and compliance with a <strong>legal obligation</strong>. You may withdraw consent at any time where consent is the basis.</p>

      <h2>6. Sensitive and health data</h2>
      <p>Health information is treated as a special category of personal data and is subject to heightened protection. Where we process such data as a controller, we do so only with a valid lawful basis and appropriate safeguards. Population-health analytics are performed on de-identified or aggregated data wherever feasible.</p>

      <h2>7. How we share personal data</h2>
      <ul>
        <li><strong>Service providers</strong> who help us operate (e.g., cloud hosting and email-delivery providers), under contractual confidentiality and security obligations.</li>
        <li><strong>Legal and regulatory</strong> disclosures where required by law or to protect rights, safety, and security.</li>
        <li><strong>Business transfers</strong> in connection with a merger, acquisition, or financing, subject to this policy.</li>
      </ul>
      <p>We do <strong>not</strong> sell personal data.</p>

      <h2>8. International data transfers</h2>
      <p>Your data may be processed in countries other than your own. Where required, we use appropriate safeguards and, where applicable, support in-country data residency for clinical data. See <a href="/security/">Security &amp; Trust</a> for details on data location.</p>

      <h2>9. Data retention</h2>
      <p>We keep personal data only for as long as necessary for the purposes described here, to comply with legal obligations, resolve disputes, and enforce agreements, after which it is deleted or anonymized.</p>

      <h2>10. Data security</h2>
      <p>We apply technical and organizational measures — including encryption in transit and at rest, access controls, and monitoring — described further on our <a href="/security/">Security &amp; Trust</a> page. No system is perfectly secure, but we work to protect your information and to notify affected parties and regulators of breaches as required by law.</p>

      <h2>11. Cookies and analytics</h2>
      <p>We use a minimal set of cookies and similar technologies necessary to run the site and understand usage. You can control cookies through your browser settings; disabling some may affect functionality.</p>

      <h2>12. Your rights</h2>
      <p>Subject to applicable law, you may have the right to access, correct, delete, restrict, or object to processing of your personal data; to data portability; and to withdraw consent. To exercise any right, email <a href="mailto:info@korahealthafrica.com">info@korahealthafrica.com</a>. You also have the right to lodge a complaint with your data-protection authority.</p>

      <h2>13. Children&apos;s privacy</h2>
      <p>Our website is intended for healthcare professionals, organizations, and partners, and is not directed to children. We do not knowingly collect personal data directly from children through this website.</p>

      <h2>14. Regulators</h2>
      <p>Depending on your country, the relevant authority may include the <strong>Nigeria Data Protection Commission (NDPC)</strong>, the <strong>Office of the Data Protection Commissioner (Kenya)</strong>, the <strong>Data Protection Commission (Ghana)</strong>, or your local regulator. You have the right to contact them with concerns.</p>

      <h2>15. Changes to this policy</h2>
      <p>We may update this policy from time to time. Material changes will be reflected by updating the &quot;Last updated&quot; date above and, where appropriate, by additional notice.</p>

      <h2>16. Contact us</h2>
      <p>Questions or requests: <a href="mailto:info@korahealthafrica.com">info@korahealthafrica.com</a> · [Legal Entity Name], [Registered Address].</p>
    </LegalShell>
  );
}
