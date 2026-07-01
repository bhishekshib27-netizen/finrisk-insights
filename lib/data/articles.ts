export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  excerpt: string;
  content: string;
};

export const articles: Article[] = [
  {
    slug: "semdex-closes-higher-banking-performance",
    title: "SEMDEX closes higher amid strong banking performance",
    category: "Markets",
    date: "June 25, 2026",
    readTime: "4 min",
    author: "FinRisk Insights",
    authorRole: "Markets Desk",
    excerpt: "The Stock Exchange of Mauritius closed the week on a positive note, driven by strong earnings reports from major banking groups and renewed investor confidence.",
    content: `The Stock Exchange of Mauritius ended the week on a positive note, with the SEMDEX gaining 0.42% to close at 2,145.32. The rally was led by the banking sector, which posted strong quarterly earnings across the board.

## Banking Sector Leads

MCB Group, SBM Holdings, and AfrAsia Bank all reported earnings above analyst expectations for Q2 2026. MCB Group reported a net profit increase of 12% year-on-year, driven by growth in net interest income and a reduction in non-performing loans.

## Market Breadth

Market breadth was positive, with 18 stocks advancing against 9 declining. Total turnover for the week reached MUR 245 million, above the 12-week average of MUR 189 million.

## Outlook

Analysts remain cautiously optimistic heading into Q3 2026. The stable Key Rate environment, combined with improving economic fundamentals, provides a supportive backdrop for equities.

## Key Data Points

- SEMDEX: 2,145.32 (+0.42%)
- Week top performer: MCB Group (+2.1%)
- Total market turnover: MUR 245 million
- Number of trades: 1,247`,
  },
  {
    slug: "aml-developments-compliance-officers",
    title: "Key AML developments every compliance officer should know",
    category: "Compliance",
    date: "June 22, 2026",
    readTime: "6 min",
    author: "FinRisk Insights",
    authorRole: "Regulatory Desk",
    excerpt: "The FSC and Bank of Mauritius have issued new guidance on AML/CFT obligations. Here is what financial institutions need to action before the deadline.",
    content: `The Financial Services Commission and the Bank of Mauritius have both issued significant AML/CFT guidance in recent weeks, reflecting ongoing efforts to maintain Mauritius's status as a compliant international financial centre.

## FSC Guidance Update

The FSC has issued a revised circular on AML/CFT obligations for all licensees, effective from October 1, 2026.

**Enhanced Customer Due Diligence**
All licensees must now apply ECDD to all Politically Exposed Persons, including domestic PEPs.

**Transaction Monitoring**
The FSC has set minimum standards for transaction monitoring systems, requiring real-time screening for high-risk customers.

**Suspicious Transaction Reporting**
The deadline for filing STRs has been reduced from 5 business days to 3 business days.

## What Compliance Officers Should Do Now

- Review your current CDD procedures against the new FSC circular
- Update your PEP screening to include domestic PEPs
- Test your transaction monitoring system against the new thresholds
- Brief your STR team on the reduced reporting deadline

The deadline for full implementation is October 1, 2026.`,
  },
  {
    slug: "inflation-figures-mauritius",
    title: "What the latest inflation figures mean for Mauritius",
    category: "Economy",
    date: "June 18, 2026",
    readTime: "5 min",
    author: "FinRisk Insights",
    authorRole: "Economics Desk",
    excerpt: "Mauritius recorded a headline inflation rate of 3.2% in May 2026, down from 3.6% the previous month. We break down what this means for consumers, businesses, and monetary policy.",
    content: `Statistics Mauritius has released the latest Consumer Price Index data, showing headline inflation of 3.2% year-on-year for May 2026, a continued moderation from the elevated levels seen in 2024.

## What is Driving the Decline?

**Food and Non-Alcoholic Beverages**
Food inflation has moderated significantly, falling to 2.8% in May from a peak of 6.2% in early 2024.

**Energy Prices**
The State Trading Corporation's petroleum pricing mechanism has helped stabilise domestic fuel prices.

**Core Inflation**
Core inflation remains sticky at 3.8%, driven by services sector pricing in hospitality, healthcare, and education.

## Implications for Monetary Policy

The continued moderation gives the MPC room to maintain the Key Rate at 4.50% at its upcoming September meeting.

## Our View

We expect headline inflation to remain in the 3.0 to 3.5% range through the remainder of 2026, assuming no major external shocks.`,
  },
];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
