import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const reports = [
  { file: 'mauritius-financial-stability-2024.pdf', title: 'Mauritius Financial Stability Report 2024', category: 'Stability', date: 'December 2024' },
  { file: 'imf-article-iv-2024.pdf', title: 'IMF Article IV Consultation — Mauritius 2024', category: 'IMF', date: 'November 2024' },
  { file: 'finrisk-fx-outlook-q1-2025.pdf', title: 'FinRisk FX Outlook Q1 2025', category: 'FX', date: 'January 2025' },
  { file: 'aml-cft-risk-assessment-2025.pdf', title: 'AML/CFT Risk Assessment Mauritius 2025', category: 'Regulation', date: 'February 2025' },
  { file: 'semdex-sector-performance-2025.pdf', title: 'SEMDEX Sector Performance Deep Dive', category: 'Equities', date: 'March 2025' },
  { file: 'mauritius-banking-outlook-2026.pdf', title: 'Mauritius Banking Industry Outlook 2026', category: 'Banking', date: 'Q1 2026' },
];

async function createPDF(report) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595, 842]);
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  page.drawRectangle({ x: 0, y: 792, width: 595, height: 50, color: rgb(0, 0, 0) });
  page.drawText('FinRisk Insights', { x: 40, y: 808, size: 16, font, color: rgb(1, 1, 1) });
  page.drawRectangle({ x: 40, y: 720, width: 80, height: 20, color: rgb(0.95, 0.95, 0.95) });
  page.drawText(report.category.toUpperCase(), { x: 45, y: 726, size: 8, font, color: rgb(0.4, 0.4, 0.4) });
  page.drawText(report.title, { x: 40, y: 680, size: 20, font, color: rgb(0, 0, 0), maxWidth: 515 });
  page.drawText(report.date, { x: 40, y: 645, size: 11, font: fontRegular, color: rgb(0.5, 0.5, 0.5) });
  page.drawLine({ start: { x: 40, y: 625 }, end: { x: 555, y: 625 }, thickness: 1, color: rgb(0.9, 0.9, 0.9) });
  page.drawText('This is a placeholder report. Full content will be available in the published version.', { x: 40, y: 590, size: 11, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  page.drawText('FinRisk Insights — Financial Intelligence for Mauritius', { x: 40, y: 565, size: 11, font: fontRegular, color: rgb(0.3, 0.3, 0.3) });
  page.drawRectangle({ x: 0, y: 0, width: 595, height: 40, color: rgb(0.97, 0.97, 0.97) });
  page.drawText('© 2026 FinRisk Insights. All rights reserved.', { x: 40, y: 14, size: 8, font: fontRegular, color: rgb(0.6, 0.6, 0.6) });

  const pdfBytes = await pdfDoc.save();
  const outPath = path.join(__dirname, '../public/reports', report.file);
  fs.writeFileSync(outPath, pdfBytes);
  console.log('Created: ' + report.file);
}

async function main() {
  const dir = path.join(__dirname, '../public/reports');
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  for (const report of reports) {
    await createPDF(report);
  }
  console.log('All PDFs created successfully!');
}

main().catch(console.error);
