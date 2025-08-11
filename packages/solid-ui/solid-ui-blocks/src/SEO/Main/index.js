import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEOCombined = () => {
  const { strapiSeomain } = useStaticQuery(graphql`
    query {
      strapiSeomain {
        metaTitle
        metaDescription
        structuredData {
          children {
            text
          }
        }
        customScripts {
          children {
            text
          }
        }
        noScriptContent {
          children {
            text
          }
        }
        gtmscript {
          children {
            text
          }
        } 
        greapscript{
          children{
            text
          }
        }
    		DMCAnoscript{
          children{
            text
          }
        }
      }
    }
  `);

  const seo = strapiSeomain || {};

  const getTexts = (nodes = []) =>
    Array.isArray(nodes)
      ? nodes.map((n) => n?.text).filter((t) => typeof t === 'string' && t.trim() !== '')
      : [];

  const structuredDataTexts = getTexts(seo.structuredData?.children);
  const customScriptTexts = getTexts(seo.customScripts?.children);
  const noScriptTexts = getTexts(seo.noScriptContent?.children);
  const gtmScriptTexts = getTexts(seo.gtmscript?.children);
  const gleapScriptTexts = getTexts(seo.greapscript?.children);
  const dmcaNoscriptTexts = getTexts(seo.DMCAnoscript?.children);

  return (
    <Helmet>
      {/* ======= META TITLE & DESCRIPTION ======= */}
      {seo.metaTitle && <title>{seo.metaTitle}</title>}
      {seo.metaDescription && <meta name="description" content={seo.metaDescription} />}

      {/* ======= DYNAMIC: GTM Script from Strapi ======= */}
      {gtmScriptTexts.map((script, idx) => (
        <script key={`gtm-${idx}`}>{script}</script>
      ))}

      {/* ======= STATIC: JSON-LD Scripts ======= */}
      {/* (Optional: keep this static if needed or also move to Strapi) */}

      {/* ======= STATIC: Gleap Script ======= */}
      <script>
        {`
          setTimeout(() => {
            !function(Gleap,t,i){
              if(!(Gleap=window.Gleap=window.Gleap||[]).invoked){
                for(window.GleapActions=[],Gleap.invoked=!0,Gleap.methods=[
                  "identify","setEnvironment","setTags","attachCustomData","setCustomData",
                  "removeCustomData","clearCustomData","registerCustomAction","trackEvent","log",
                  "preFillForm","showSurvey","sendSilentCrashReport","startFeedbackFlow",
                  "startBot","setAppBuildNumber","setAppVersionCode","setApiUrl","setFrameUrl",
                  "isOpened","open","close","on","setLanguage","setOfflineMode","initialize",
                  "disableConsoleLogOverwrite","logEvent","hide","enableShortcuts",
                  "showFeedbackButton","destroy","getIdentity","isUserIdentified",
                  "clearIdentity","openConversations","openConversation","openHelpCenterCollection",
                  "openHelpCenterArticle","openHelpCenter","searchHelpCenter","openNewsArticle",
                  "openNews","openFeatureRequests","isLiveMode"],
                Gleap.f=function(e){return function(){
                  var t=Array.prototype.slice.call(arguments);
                  window.GleapActions.push({e:e,a:t})}},
                t=0;t<Gleap.methods.length;t++)Gleap[i=Gleap.methods[t]]=Gleap.f(i);
                Gleap.load=function(){
                  var t=document.getElementsByTagName("head")[0],
                  i=document.createElement("script");
                  i.type="text/javascript",i.async=!0,
                  i.src="https://sdk.gleap.io/latest/index.js",
                  t.appendChild(i)},
                Gleap.load();
                Gleap.initialize("MM4XayoVdXy2kBC3YtDy7eCLMPCiCiuE")
              }
            }();
          }, 2000);
        `}
      </script>

      {/* ======= DYNAMIC: DMCA Noscript ======= */}
      {dmcaNoscriptTexts.map((ns, idx) => (
        <noscript key={`dmca-${idx}`}>{ns}</noscript>
      ))}

      {/* ======= DYNAMIC: Structured Data from Strapi ======= */}
      {structuredDataTexts.map((json, idx) => (
        <script key={`structured-${idx}`} type="application/ld+json">
          {json}
        </script>
      ))}

      {/* ======= DYNAMIC: Custom Scripts from Strapi ======= */}
      {customScriptTexts.map((script, idx) => (
        <script key={`custom-${idx}`}>{script}</script>
      ))}

      {/* ======= DYNAMIC: NoScript from Strapi ======= */}
      {noScriptTexts.map((ns, idx) => (
        <noscript key={`ns-${idx}`}>{ns}</noscript>
      ))}
    </Helmet>
  );
};

export default SEOCombined;
