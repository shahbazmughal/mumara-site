import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

const SEOBlock = () => {
  const { strapiBase } = useStaticQuery(graphql`
    query {
      strapiBase {
        websiteurl
        fblink
        fbtext
        twitterlink
        twittertext
        youtubelink
        youtubetext
        linkedinlink
        linkedintext
      }
    }
  `);

  return (
    <div className="seo-block" style={{ display: 'none' }}>
      <div className="sitesearch" itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content={strapiBase?.websiteurl || 'https://www.mumara.com'} />
        <form itemProp="potentialAction" itemScope itemType="https://schema.org/SearchAction">
          <meta itemProp="target" content={`${strapiBase?.websiteurl || 'https://www.mumara.com'}?s={s}`} />
          <input itemProp="query-input" type="text" name="s" required />
          <input type="submit" />
        </form>
      </div>

      <span className="socialorg" itemScope itemType="https://schema.org/Organization">
        <link itemProp="url" href={strapiBase?.websiteurl || 'https://www.mumara.com'} />
        {strapiBase?.fblink && (
          <Link itemProp="sameAs" to={strapiBase.fblink}>
            {strapiBase.fbtext || 'Facebook'}
          </Link>
        )}
        {strapiBase?.twitterlink && (
          <Link itemProp="sameAs" to={strapiBase.twitterlink}>
            {strapiBase.twittertext || 'Twitter'}
          </Link>
        )}
        {strapiBase?.youtubelink && (
          <Link itemProp="sameAs" to={strapiBase.youtubelink}>
            {strapiBase.youtubetext || 'YouTube'}
          </Link>
        )}
        {strapiBase?.linkedinlink && (
          <Link itemProp="sameAs" to={strapiBase.linkedinlink}>
            {strapiBase.linkedintext || 'LinkedIn'}
          </Link>
        )}
      </span>
    </div>
  );
};

export default SEOBlock;
