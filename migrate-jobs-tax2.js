import { createClient } from 'next-sanity'

async function main() {
  const client = createClient({
    projectId: 'ika5wgux',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
  })

  const jobs = [
    {
      _type: 'job',
      title: 'Accounts Officer',
      company: 'Ferney Spinning Mills (CIEL Textile)',
      sector: 'Accounting',
      type: 'Full-time',
      location: 'Forest-Side',
      workStyle: 'On-site',
      description: 'Ensures accurate, timely and compliant processing of supplier invoices and payments, supporting effective cash flow management for a Mauritian yarn manufacturer operating since 1978.',
      requirements: [
        'Minimum HSC; ACCA Level 1 an advantage',
        'Proven working experience in the accounting field',
        'Sound knowledge of accounting standards',
        'Strong Excel skills',
        'Attention to detail and ability to meet deadlines',
      ],
      applyUrl: 'https://www.linkedin.com/jobs/view/4438458852/',
      postedAt: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
      active: true,
    },
    {
      _type: 'job',
      title: 'Client Accountant',
      company: 'Kreston TSS',
      sector: 'Accounting',
      type: 'Full-time',
      location: 'Port Louis',
      workStyle: 'On-site',
      description: 'Prepares accounts, financial statements, and tax returns for a portfolio of clients at the Mauritius member firm of Kreston Global, an international accounting network ranked 13th worldwide.',
      requirements: [
        'University degree in Accounting or ACCA Level 2 completed',
        'Minimum 4 years of accounting and preparation of accounts experience',
        'Auditing experience an advantage',
        'Good verbal and written communication skills',
      ],
      applyUrl: 'https://www.linkedin.com/jobs/view/4438085217/',
      postedAt: new Date(Date.now() - 21 * 60 * 60 * 1000).toISOString(),
      active: true,
    },
    {
      _type: 'job',
      title: 'Accounts Officer',
      company: 'HealthActiv',
      sector: 'Accounting',
      type: 'Full-time',
      location: 'Port Louis',
      workStyle: 'On-site',
      description: 'Supports day-to-day accounting operations including supplier invoice processing, reconciliations, and TDS/VAT reporting for a healthcare sector company.',
      requirements: [
        'Minimum HSC and ACCA Level 1',
        'At least 2 years professional experience in a commercial environment',
        'Strong hands-on accounting skills',
        'Ability to work under pressure and meet deadlines',
      ],
      applyUrl: 'https://www.linkedin.com/jobs/view/4438465600/',
      postedAt: new Date(Date.now() - 57 * 60 * 1000).toISOString(),
      active: true,
    },
  ]

  for (const job of jobs) {
    const result = await client.create(job)
    console.log(`Created: ${job.title} at ${job.company} (${result._id})`)
  }
}

main()
