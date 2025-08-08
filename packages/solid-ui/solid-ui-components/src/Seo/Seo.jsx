import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const STRAPI_BASE_URL = 'https://strapi5-dev-jt.mumara.com'; // Replace with your live/base URL

const normalizeUrl = (url) =>
  url?.startsWith('http') ? url : `${STRAPI_BASE_URL}${url}`;

const Seo = () => {
  const { strapiSeometa } = useStaticQuery(graphql`
    query {
      strapiSeometa {
        title
        description
        excerpt
        keywords
        keywords1
        keywords2
        keywords3
        keywords4
        keywords5
        keywords6
        image { url }
        image1 { url }
        favicon { url }
        siteUrl
        canonical
      }
    }
  `);

  const {
    title,
    description,
    excerpt,
    keywords,
    keywords1,
    keywords2,
    keywords3,
    keywords4,
    keywords5,
    keywords6,
    image,
    image1,
    favicon,
    siteUrl,
    canonical
  } = strapiSeometa || {};

  const finalDescription = excerpt || description || '';
  const finalImage = normalizeUrl(image?.url || '');
  const finalImage1 = normalizeUrl(image1?.url || '');
  const finalFavicon = normalizeUrl(favicon?.url || '');
  const finalSiteUrl = siteUrl || '';
  const finalCanonical = canonical || '';

  const allKeywords = [
    keywords, keywords1, keywords2,
    keywords3, keywords4, keywords5, keywords6
  ].filter(Boolean).join(', ');

  const metaTags = [
    { itemprop: 'name', content: title },
    { itemprop: 'description', content: finalDescription },
    { name: 'title', content: title },
    { name: 'description', content: finalDescription },
    { name: 'keywords', content: allKeywords },
    { property: 'og:locale', content: 'en_US' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: finalDescription },
    { property: 'og:site_name', content: title },
    { property: 'og:url', content: finalSiteUrl },
    { property: 'og:image', content: finalImage },
    { property: 'og:image:url', content: finalImage },
    { property: 'og:image:secure_url', content: finalImage },
    { property: 'og:image:type', content: 'image/png' },
    { property: 'og:image:alt', content: title },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'twitter:card', content: 'summary' },
    { property: 'twitter:title', content: title },
    { property: 'twitter:description', content: finalDescription },
    { property: 'twitter:image', content: finalImage1 },
    { 'http-equiv': 'Cache-Control', content: 'max-age: 31536000, must-revalidate' },
    { 'http-equiv': 'Pragma', content: 'must-revalidate' },
    { 'http-equiv': 'Expires', content: '31536000' },
    { name: 'initial-scale', content: '1.0' }
  ];

  return (
    <>
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title={title}
        meta={metaTags}
      />
      <Helmet>
        <link rel="icon" href={finalFavicon} type="image/x-icon" />
        <link rel="canonical" href={finalCanonical} />
        <link rel="website-url" href={finalSiteUrl} />
      </Helmet>
    </>
  );
};

export default Seo;
