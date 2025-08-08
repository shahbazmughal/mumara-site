import React from 'react';
import { Helmet } from "react-helmet"
import {Link} from 'gatsby';

function index(props) {
    return (
        <>
            <Helmet>
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [{
                              "@type": "ListItem",
                              "position": 1,
                              "name": "Mumara",
                              "item": "https://www.mumara.com"
                            },{
                              "@type": "ListItem",
                              "position": 2,
                              "name": "Campaigns | Mumara",
                              "item": "https://www.mumara.com/campaigns/"
                            },{
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Request Demo | Campaigns | Mumara",
                                "item": "https://www.mumara.com/campaigns/request-demo/"
                              }]
                        }
                    `}
                </script>
            </Helmet>
            <div className="seo-block" style={{display: "none"}}>
                <ol itemScope itemType="http://schema.org/BreadcrumbList">
                    <li itemProp="itemListElement" itemScope
                        itemType="https://schema.org/ListItem">
                        <a itemProp="item" href="https://www.mumara.com">
                            <span itemProp="name">Mumara</span>
                            <img itemProp="image" src="https://post.mumara.com/images/mumara-home.jpg" alt="Mumara"/></a>
                        <meta itemProp="position" content="1" />
                    </li>
                    ›
                    <li itemProp="itemListElement" itemScope
                        itemType="https://schema.org/ListItem">
                        <a itemScope itemType="https://schema.org/WebPage"
                        itemProp="item" itemID="https://www.mumara.com/campaigns"
                        href="https://www.mumara.com/campaigns">
                        <span itemProp="name">Campaigns | Mumara</span>
                        <img itemProp="image" src="https://post.mumara.com/images/mumara-home.jpg" alt="Campaigns | Mumara"/></a>
                        <meta itemProp="position" content="2" />
                    </li>
                    ›
                    <li itemProp="itemListElement" itemScope
                        itemType="https://schema.org/ListItem">
                        <a itemScope itemType="https://schema.org/WebPage"
                        itemProp="item" itemID="https://www.mumara.com/campaigns/request-demo/"
                        href="https://www.mumara.com/campaigns/request-demo/">
                        <span itemProp="name">Request Demo</span>
                        <img itemProp="image" src="https://post.mumara.com/images/mumara-home.jpg" alt="Request Demo | Campaigns | Mumara"/></a>
                        <meta itemProp="position" content="3" />
                    </li>
                </ol>
            </div>   
        </>
    );
}

export default index;