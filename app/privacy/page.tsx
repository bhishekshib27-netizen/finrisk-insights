export const metadata = {
  title: "Privacy Policy | FinRisk Insights",
  description: "Privacy Policy for FinRisk Insights.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">Privacy Policy</h1>
        <p className="mt-2 text-sm text-neutral-400">Last updated: June 2026</p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-black text-base mb-2">1. Who We Are</h2>
          <p>FinRisk Insights is a financial intelligence platform based in Mauritius. We operate the website finriskinsight.com and related services. References to "we", "us", or "our" refer to FinRisk Insights.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">2. Information We Collect</h2>
          <p>We collect information you provide directly to us, including:</p>
          <ul className="mt-2 ml-4 space-y-1 list-disc">
            <li>Email address when you subscribe to our newsletter</li>
            <li>Account information when you register (name, email, password)</li>
            <li>Usage data such as pages visited and features used</li>
            <li>Device and browser information for analytics purposes</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="mt-2 ml-4 space-y-1 list-disc">
            <li>Send you our weekly newsletter and market updates (with your consent)</li>
            <li>Provide and improve our platform and services</li>
            <li>Respond to your enquiries and support requests</li>
            <li>Analyse usage patterns to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">4. Data Sharing</h2>
          <p>We do not sell your personal data. We may share your data with trusted third-party service providers who assist us in operating the platform, including email delivery services and analytics providers. These providers are contractually obligated to protect your data.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">5. Cookies</h2>
          <p>We use cookies and similar technologies to improve your experience on our platform, remember your preferences, and analyse traffic. You can control cookie settings through your browser preferences.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">6. Data Retention</h2>
          <p>We retain your personal data for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data at any time by contacting us.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">7. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data. You may also withdraw consent for newsletter communications at any time by clicking the unsubscribe link in any email we send.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">8. Contact</h2>
          <p>For any privacy-related enquiries, please contact us at <a href="mailto:hello@finriskinsight.com" className="text-green-600 underline">hello@finriskinsight.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
