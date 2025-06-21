// copy-sitemap.js
const fs = require('fs');
const path = require('path');

const src = path.resolve(__dirname, 'public', 'sitemap.xml');
const dest = path.resolve(__dirname, 'dist', 'sitemap.xml');

if (!fs.existsSync(src)) {
  console.error('❌ sitemap.xml not found in public/');
  process.exit(1);
}

fs.copyFileSync(src, dest);
console.log('✅ sitemap.xml copied to dist/');
