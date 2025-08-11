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
        apiURL: "https://strapi5-dev-jt.mumara.com/api", // <-- Check this URL carefully
        accessToken: "57cfa91bef8a573ac936994145e26d415a886885aaa8b350d0d5b5f9043c902af38636074c4d704b5a55dbb9b6f7c2f3999028dbbad95770441bf1ff55ba21ea6758dfa156ad465e352b72b7d5b229b1a4fbba150bd38eabec5edf18445ca62038df0be49580a7e7b686d090834a836acd9c6c733c91d6f54cd49ada18e61daf", // optional
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
