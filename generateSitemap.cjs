const fs = require('fs');
const path = require('path');

// All your public URLs
const urls = [
  'https://www.tejasaie.com/',
  'https://www.tejasaie.com/contact',
  'https://www.tejasaie.com/resume',
];

// XML structure
const generateXML = () => {
  const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
  const urlsetOpen =
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  const urlsetClose = '</urlset>';

  const urlEntries = urls
    .map((url) => {
      return `  <url>\n    <loc>${url}</loc>\n  </url>`;
    })
    .join('\n');

  return xmlHeader + urlsetOpen + urlEntries + '\n' + urlsetClose;
};

const outputPath = path.resolve('./public/sitemap.xml');
const distPath = path.resolve('./dist/sitemap.xml');

const xmlContent = generateXML();

// Write to public folder
fs.writeFileSync(outputPath, xmlContent, 'utf8');
console.log('✅ sitemap.xml written to public folder.');

// Copy to dist folder (for deployment)
if (fs.existsSync('./dist')) {
  fs.copyFileSync(outputPath, distPath);
  console.log('✅ sitemap.xml copied to dist folder.');
} else {
  console.warn(
    '⚠️ dist folder does not exist yet — build first or copy after build.'
  );
}
