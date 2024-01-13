// generateSitemap.js
const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

const generateSitemap = async () => {
  // Set your website URL
  const baseURL = 'https://teja-portfolio-2023.netlify.app/';

  // Set the output path for the sitemap file
  const outputPath = './sitemap.xml';

  // Create a sitemap generator
  const generator = SitemapGenerator(baseURL, {
    stripQuerystring: false,
  });

  // Register the routes to be included in the sitemap
  generator.on('done', () => {
    console.log('Sitemap generated successfully.');
  });

  // Start the sitemap generation process
  generator.start();
};

generateSitemap();
