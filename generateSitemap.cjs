const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

const generateSitemap = async () => {
  // Set your website URL
  const baseURL = 'https://teja-portfolio-2023.netlify.app/';

  // Set the output path for the sitemap file
  const outputPath = './public/sitemap.xml';

  // Create a sitemap generator
  const generator = SitemapGenerator(baseURL, {
    stripQuerystring: false,
  });

  // Register the routes to be included in the sitemap
  generator.on('done', () => {
    console.log('Sitemap generated successfully.');

    // Set content-type for the generated sitemap.xml
    const sitemapContent = fs.readFileSync(outputPath, 'utf-8');
    fs.writeFileSync(outputPath, sitemapContent, 'utf-8');
  });

  // Start the sitemap generation process
  generator.start();
};

generateSitemap();
