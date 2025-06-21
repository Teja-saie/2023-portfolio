const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

const generateSitemap = async () => {
  // Set your website URL
  const baseURL = 'https://www.tejasaie.com/';

  // Set the output path for the sitemap file
  const outputPath = './public/sitemap.xml';

  // Create a sitemap generator
  const generator = SitemapGenerator(baseURL, {
    stripQuerystring: false,
  });

  // Register the routes to be included in the sitemap
  generator.on('done', () => {
    console.log('Sitemap generated successfully.');

    // Check if the file exists before attempting to read its content
    if (fs.existsSync(outputPath)) {
      const sitemapContent = fs.readFileSync(outputPath, 'utf-8');
      console.log('Sitemap content:', sitemapContent);
    } else {
      console.error('Sitemap file does not exist.');
    }
  });

  // Start the sitemap generation process
  generator.start();
};

generateSitemap();
