import Script from "next/script";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FinRisk Insights",
    url: "https://www.finriskinsight.com",
    logo: "https://www.finriskinsight.com/logo.jpeg",
    description: "Mauritius's leading financial intelligence platform — live markets, regulatory updates, research, compliance news, and finance jobs.",
    foundingDate: "2026",
    areaServed: "Mauritius",
    sameAs: [
      "https://www.linkedin.com/company/finrisk-insights"
    ]
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FinRisk Insights",
    url: "https://www.finriskinsight.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.finriskinsight.com/insights?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <Script
        id="json-ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
