module.exports = {
  flags: {
    DEV_SSR: false
  },
  plugins: [
    {
      resolve: '@elegantstack/gatsby-theme-flexiblocks',
      options: {
        createDemoPages: false
      }
    },
    {
      resolve: `gatsby-plugin-recaptcha`,
      options: {
         async: false,
         defer: false,
         args: `?onload=onloadCallback&render=explicit`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 60,
        },
        failOnError: false,
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "G-24SE2C1DVV"
    //   }
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.mumara.com',
        sitemap: 'https://www.mumara.com/sitemap-0.xml',
        policy: [{ userAgent: '*', disallow: '/' }]
      }
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: '/',
        excludes: [
          `/pages/`,
          `/campaignsplus/`,
          `/campaignsplus-gdpr/`,
          `/campaignsplus/pricing/`,
          `/campaignsplus/request-demo/`,
          `/campaignsplus/campaign-feature/`,
          `/campaignsplus/campaign-feature/auto-backup/`,
          `/campaignsplus/campaign-feature/auto-upgrade/`,
          `/campaignsplus/campaign-feature/bounces-and-spam-processing/`,
          `/campaignsplus/campaign-feature/cohesive-process-of-automation/`,
          `/campaignsplus/campaign-feature/contact-management/`,
          `/campaignsplus/campaign-feature/content-personalization/`,
          `/campaignsplus/campaign-feature/email-list-management/`,
          `/campaignsplus/campaign-feature/multithreading/`,
          `/campaignsplus/campaign-feature/regular-or-evergreen-email-campaigns/`,
          `/campaignsplus/campaign-feature/integrated-email-delivery-services/`,
          `/campaignsplus/campaign-feature/multiple-smtpssending-nodes/`,
          `/campaignsplus/campaign-feature/sendingmasking-domains/`,
          `/campaignsplus/campaign-feature/smart-segments/`,
          `/campaignsplus/campaign-feature/staff-management/`,
          `/campaignsplus/campaign-feature/reporting-and-statistics/`,
          `/campaignsplus/campaign-feature/triggers/`,
          `/campaignsplus/campaign-feature/web-forms/`,
          `/campaignsplus/customize-message-headers/`,
          `/campaigns/features/auto-backup/`,
          `/campaigns/features/auto-upgrade/`,
          `/campaigns/features/bounces-and-spam-processing/`,
          `/campaigns/features/cohesive-process-of-automation/`,
          `/campaigns/features/customize-message-headers/`,
          `/campaigns/features/email-builder/`,
          `/campaigns/features/email-list-management/`,
          `/campaigns/features/flexibility-customization/`,
          `/campaigns/features/integrated-email-delivery-services/`,
          `/campaigns/features/multiple-smtpssending-nodes/`,
          `/campaigns/features/multithreading/`,
          `/campaigns/features/regular-or-evergreen-email-campaigns/`,
          `/campaigns/features/reporting-and-statistics/`,
          `/campaigns/features/sendingmasking-domains/`,
          `/campaigns/features/smart-segments/`,
          `/campaigns/features/split-testing/`,
          `/campaigns/features/staff-management/`,
          `/campaigns/features/triggers/`,
          `/campaigns/features/white-labeling/`,
          `/Timer/`
        ],
      },
    }
  ],
  // Customize your site metadata
  siteMetadata: {
    title: 'Mumara',
    name: 'Mumara',
    description: 'Mumara is collection of SaaS applications and customer engagement tools to fuel your multi-channel marketing strategy.',
    siteUrl: `https://www.mumara.com`,
    icon: 'https://www.mumara.com/favicon.ico'
  }
}
