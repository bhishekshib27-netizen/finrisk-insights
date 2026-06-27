export const metadata = {
  title: "Terms of Use | FinRisk Insights",
  description: "Terms of Use for FinRisk Insights.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">Terms of Use</h1>
        <p className="mt-2 text-sm text-neutral-400">Last updated: June 2026</p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
        <div>
          <h2 className="font-bold text-black text-base mb-2">1. Acceptance of Terms</h2>
          <p>By accessing or using finriskinsight.com, you agree to be bound by these Terms of Use. If you do not agree, please do not use our platform.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">2. Use of the Platform</h2>
          <p>FinRisk Insights provides financial news, market data, research, and regulatory updates for informational purposes. You agree to use the platform only for lawful purposes and in accordance with these terms. You must not:</p>
          <ul className="mt-2 ml-4 space-y-1 list-disc">
            <li>Reproduce, redistribute, or resell any content without written permission</li>
            <li>Use automated tools to scrape or extract data from the platform</li>
            <li>Attempt to gain unauthorised access to any part of the platform</li>
            <li>Use the platform to distribute spam or harmful content</li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">3. Intellectual Property</h2>
          <p>All content on FinRisk Insights — including articles, analysis, data visualisations, and design — is the property of FinRisk Insights or its licensors and is protected by applicable intellectual property laws. You may share links to our content but may not reproduce it without permission.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">4. User Accounts</h2>
          <p>If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us immediately of any unauthorised use.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">5. Third-Party Links</h2>
          <p>Our platform may contain links to third-party websites including regulators, data providers, and news sources. We are not responsible for the content or privacy practices of those sites.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">6. Limitation of Liability</h2>
          <p>FinRisk Insights is not liable for any loss or damage arising from your use of the platform or reliance on any information provided. All content is provided on an "as is" basis without warranties of any kind.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">7. Changes to Terms</h2>
          <p>We may update these terms from time to time. Continued use of the platform after changes constitutes acceptance of the updated terms.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">8. Governing Law</h2>
          <p>These terms are governed by the laws of the Republic of Mauritius. Any disputes shall be subject to the exclusive jurisdiction of the courts of Mauritius.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">9. Contact</h2>
          <p>For any questions regarding these terms, contact us at <a href="mailto:hello@finriskinsight.com" className="text-green-600 underline">hello@finriskinsight.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
