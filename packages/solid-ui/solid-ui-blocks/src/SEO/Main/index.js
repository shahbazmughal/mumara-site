import React from 'react';
import { Helmet } from "react-helmet"

function index(props) {
    return (
        <Helmet>
            {/*  Google Tag Manager  */}
            <script>
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-N7S4SQ7');
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "http://www.mumara.com",
                        "logo": "https://post.mumara.com/images/mumara-home.jpg"
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "NYC NY",
                        "addressCountry": "US",
                        "postalCode": "10017",
                        "streetAddress": "708 3rd Ave"
                      },
                    "email": "info@mumara.com",
                    "member": [
                        {
                          "@type": "Organization"
                        },
                        {
                          "@type": "Organization"
                        }
                    ],
                    "alumni": [
                        {
                          "@type": "Person",
                          "name": "Wasif Ahmed"
                        }
                    ],
                    "name": "Mumara",
                    "telephone": "1 (844) 686 2721",
                    "alternateName": "Marketing Automation &amp; Customer Engagement Tools | Mumara",
                    "url": "https://www.mumara.com",
                    "logo": "https://post.mumara.com/images/mumara-home.jpg",
                    "Image": "https://post.mumara.com/images/mumara-home.jpg",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "1 (844) 686 2721",
                        "contactType": "customer service"
                    },
                    "sameAs": [
                        "https://www.facebook.com/MumaraApps",
                        "https://twitter.com/MumaraApps",
                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",
                        "https://www.linkedin.com/company/mumara"
                    ]
                    }

                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                        "@context":"https://schema.org",
                        "@type":"ItemList",
                        "itemListElement":[
                            {
                            "@type":"ListItem",
                            "position":1,
                            "url":"https://www.mumara.com/campaigns/"
                            },
                            {
                            "@type":"ListItem",
                            "position":2,
                            "url":"https://www.mumara.com/one/"
                            },
                            {
                            "@type":"ListItem",
                            "position":3,
                            "url":"https://www.mumara.com/sms/"
                            },
                            {
                            "@type":"ListItem",
                            "position":4,
                            "url":"https://www.mumara.com/smsplus/"
                            },
                            {
                            "@type":"ListItem",
                            "position":5,
                            "url":"https://www.mumara.com/classic/"
                            },
                            {
                            "@type":"ListItem",
                            "position":6,
                            "url":"https://www.mumara.com/classic-esp/"
                            }
                        ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Mumara",
                    "url": "https://www.mumara.com",
                    "sameAs": [
                        "https://www.facebook.com/MumaraApps",
                        "https://twitter.com/MumaraApps",
                        "https://www.youtube.com/channel/UC1k6voQOVss0_PWg7CfJTdw",
                        "https://www.linkedin.com/company/mumara"
                    ]
                    }
                `}
            </script>
            <script type="application/ld+json">
                {`
                    {
                    "@context": "https://schema.org/",
                    "@type": "WebSite",
                    "name": "Mumara",
                    "url": "https://www.mumara.com/",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https://www.mumara.com/?s={s}",
                        "query-input": "required name=s"
                    }
                    }
                `}
            </script>
            <script>
                {`
                    setTimeout(() => {
                        !function(Gleap,t,i){if(!(Gleap=window.Gleap=window.Gleap||[]).invoked){for(window.GleapActions=[],Gleap.invoked=!0,Gleap.methods=["identify","setEnvironment","setTags","attachCustomData","setCustomData","removeCustomData","clearCustomData","registerCustomAction","trackEvent","log","preFillForm","showSurvey","sendSilentCrashReport","startFeedbackFlow","startBot","setAppBuildNumber","setAppVersionCode","setApiUrl","setFrameUrl","isOpened","open","close","on","setLanguage","setOfflineMode","initialize","disableConsoleLogOverwrite","logEvent","hide","enableShortcuts","showFeedbackButton","destroy","getIdentity","isUserIdentified","clearIdentity","openConversations","openConversation","openHelpCenterCollection","openHelpCenterArticle","openHelpCenter","searchHelpCenter","openNewsArticle","openNews","openFeatureRequests","isLiveMode"],Gleap.f=function(e){return function(){var t=Array.prototype.slice.call(arguments);window.GleapActions.push({e:e,a:t})}},t=0;t<Gleap.methods.length;t++)Gleap[i=Gleap.methods[t]]=Gleap.f(i);Gleap.load=function(){var t=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.async=!0,i.src="https://sdk.gleap.io/latest/index.js",t.appendChild(i)},Gleap.load(),
                            Gleap.initialize("MM4XayoVdXy2kBC3YtDy7eCLMPCiCiuE")
                        }}();
                    }, 2000);
                `}
            </script>
            <noscript>
                {`
                    
                    setTimeout(function() {
                        var headID = document.getElementsByTagName("head")[0];         
                        var newScript = document.createElement('script');
                        newScript.type = 'text/javascript';
                        newScript.src = 'https://images.dmca.com/Badges/DMCABadgeHelper.min.js';
                        headID.appendChild(newScript);
                    }, 2000);
                    
                `}

            </noscript>
            
        </Helmet>
    );
}

export default index;