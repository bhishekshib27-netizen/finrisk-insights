export const metadata = {
  title: "Disclaimer | FinRisk Insights",
  description: "Financial disclaimer for FinRisk Insights.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-8 sm:px-12 py-10 space-y-8">
      <div className="border-b border-neutral-200 pb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-600">Legal</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-black">Disclaimer</h1>
        <p className="mt-2 text-sm text-neutral-400">Last updated: June 2026</p>
      </div>

      <div className="space-y-6 text-sm text-neutral-700 leading-relaxed">
        <div className="border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-amber-800">Important: Not Financial Advice</p>
          <p className="mt-1 text-amber-700">Nothing on FinRisk Insights constitutes financial, investment, legal, or regulatory advice. All content is for informational purposes only.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">1. Informational Purpose Only</h2>
          <p>All content published on finriskinsight.com — including market data, research reports, articles, regulatory updates, and analysis — is provided for general informational and educational purposes only. It does not constitute financial advice, investment advice, trading advice, or any other form of professional advice.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">2. No Investment Advice</h2>
          <p>FinRisk Insights is not a licensed investment advisor, broker, or financial planner. Nothing on this platform should be interpreted as a recommendation to buy, sell, or hold any security, currency, or financial instrument. Always consult a qualified financial professional before making investment decisions.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">3. Market Data Accuracy</h2>
          <p>While we strive to provide accurate and timely market data, FinRisk Insights does not guarantee the completeness, accuracy, or timeliness of any data displayed on the platform. FX rates, index values, and economic indicators are sourced from third-party providers and may be delayed or subject to error.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">4. Regulatory Information</h2>
          <p>Regulatory updates and compliance information published on this platform are for awareness purposes only. They do not constitute legal advice. For specific regulatory guidance, consult a qualified legal or compliance professional or contact the relevant authority directly.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">5. No Liability</h2>
          <p>FinRisk Insights, its editors, contributors, and affiliates accept no liability for any loss, damage, or consequence arising from reliance on any information published on this platform. Use of the platform is entirely at your own risk.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">6. External Sources</h2>
          <p>We reference and link to external sources including the Bank of Mauritius, Financial Services Commission, Statistics Mauritius, and others. We are not responsible for the accuracy or availability of content on those sites.</p>
        </div>

        <div>
          <h2 className="font-bold text-black text-base mb-2">7. Contact</h2>
          <p>For any questions regarding this disclaimer, contact us at <a href="mailto:hello@finriskinsight.com" className="text-green-600 underline">hello@finriskinsight.com</a>.</p>
        </div>
      </div>
    </div>
  );
}
