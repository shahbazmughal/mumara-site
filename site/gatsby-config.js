// 👇 Disable TLS error (for self-signed certs, dev only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


// ✅ Get API URL from env
const STRAPI_API_URL = process.env.GATSBY_STRAPI_API_URL || "https://strapi5-mumara-dev-jt.mumara.com/";

const strapiConfig = {
  apiURL: STRAPI_API_URL,
  collectionTypes: ["hero", "feature", "pricing"],
  // singleTypes: ["footer", "header"],
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: true,
        colorMode: true,
      },
    },
  ],
  siteMetadata: {
    title: 'FlexiBlocks Theme',
    name: 'FlexiBlocks',
    description: 'My site description...',
  },
};