// 👇 Disable TLS error (for self-signed certs, dev only)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// ✅ Get API URL from env
const STRAPI_API_URL = "https://strapi5-dev-jt.mumara.com";

const strapiConfig = {
  apiURL: STRAPI_API_URL,
  collectionTypes: ["homehero", "clintlogo", "featureone", "highlightedfeature", "whychooseus", "featuretwo", "stat", "strategie", "download", "testimonial", "getstarted", "blog", "saashero", "saasstrategie", "saasfeaturetabone", "saasfeaturetabtwo", "pricing", "saasv2featureone", "saasv2featuretwo", "saasv2featurethree", "tab", "saasv2screenshort", "saasv2feature", "process", "faq", "fintechfeature", "fintchfeatureone", "fintchfeaturetwo", "fintchwhychooseus", "featurethreemore", "mobilehero",
    "mobilefeatureone", "mobilefeaturetwo", "mobilefeaturethree", "markeeetingfeature", "pricing03testmonial", "aboutusone", "aboutusoneteam", "aboutustwostrategie", "servicesonehero", "servicesonefeature", "servicesonecalltoaction", "servicestwohome", "servicestwoservice", "servicesjoincompanie", "servicestwophoto", "servicesthreeblog", "servicesthreecontent", "base", "seomain", "seometa"],
  singleTypes: ["footer", "header"],
};

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "https://strapi5-dev-jt.mumara.com", // <-- Check this URL carefully
        // accessToken: "YOUR_STRAPI_TOKEN", // optional
        collectionTypes: ["homehero", "clintlogo", "featureone", "highlightedfeature", "whychooseus", "featuretwo", "stat", "strategie", "download", "testimonial", "getstarted", "blog", "saashero", "saasstrategie", "saasfeaturetabone", "saasfeaturetabtwo", "pricing", "saasv2featureone", "saasv2featuretwo", "saasv2featurethree", "tab", "saasv2screenshort", "saasv2feature", "process", "faq", "fintechfeature", "fintchfeatureone", "fintchfeaturetwo", "fintchwhychooseus", "featurethreemore", "mobilehero", "mobilefeatureone", "mobilefeaturetwo", "mobilefeaturethree", "markeeetingfeature", "pricing03testmonial", "aboutusone", "aboutusoneteam", "aboutustwostrategie", "servicesonehero", "servicesonefeature", "servicesonecalltoaction", "servicestwohome", "servicestwoservice", "servicesjoincompanie", "servicestwophoto", "servicesthreeblog", "servicesthreecontent", "base", "seomain", "seometa"],
      singleTypes: ["footer", "header"],
      },
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
