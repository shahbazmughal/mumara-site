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
                            "@context": "http://schema.org/", 
                            "@type": "BreadcrumbList", 
                            "itemListElement": [{
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Mumara",
                                "item": "https://www.mumara.com"
                            },{
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Classic",
                                "item": "https://www.mumara.com/classic"
                            }]
                        }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                        {
                        "@context": "http://schema.org/",
                        "@type": "Product",
                        "name": "MumaraClassic",
                        "sku": "classic-1947",
                        "mpn": "925876",
                        "image": [
                            "https://post.mumara.com/images/mumara-home.jpg"
                        ],
                        "description": "Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software.",
                        "brand": {
                            "@type": "Brand",
                            "name": "Mumara"
                        },
                        "review": {
                                "@type": "Review",
                                "reviewRating": {
                                "@type": "Rating",
                                "ratingValue": "4",
                                "bestRating": "5"
                                },
                                "author": {
                                "@type": "Person",
                                "name": "Wasif Ahmed"
                                }
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5.0",
                            "reviewCount": "1797"
                        },
                        "offers": {
                                "@type": "Offer",
                                "url": "https://example.com/anvil",
                                "priceCurrency": "USD",
                                "price": "47",
                                "priceValidUntil": "2023-12-31",
                                "itemCondition": "https://schema.org/UsedCondition",
                                "availability": "https://schema.org/InStock",
                                "seller": {
                                    "@type": "Organization",
                                    "name": "Hostings House"
                                },
                                "shippingDetails": {
                                    "@type": "OfferShippingDetails",
                                    "shippingRate": {
                                      "@type": "MonetaryAmount",
                                      "value": 0.00,
                                      "currency": "USD"
                                    },
                                    "shippingDestination": {
                                      "@type": "DefinedRegion",
                                      "addressCountry": "US"
                                    },
                                    "deliveryTime": {
                                      "@type": "ShippingDeliveryTime",
                                      "handlingTime": {
                                        "@type": "QuantitativeValue",
                                        "minValue": 0,
                                        "maxValue": 1,
                                        "unitCode": "DAY"
                                      },
                                      "transitTime": {
                                        "@type": "QuantitativeValue",
                                        "minValue": 0,
                                        "maxValue": 1,
                                        "unitCode": "DAY"
                                      }
                                    }
                                },
                                "hasMerchantReturnPolicy": {
                                    "@type": "MerchantReturnPolicy",
                                    "applicableCountry": "US",
                                    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                                    "merchantReturnDays": 0,
                                    "returnMethod": "https://schema.org/ReturnByMail",
                                    "returnFees": "https://schema.org/FreeReturn"
                                }
                            }
                        }
                    `}
                </script>
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "SoftwareApplication",
                            "name": "MumaraClassic",
                            "operatingSystem": "LINUX",
                            "applicationCategory": "BusinessApplication",
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "5",
                                "ratingCount": "1797"
                            },
                            "offers": {
                                "@type": "Offer",
                                "price": "47.00",
                                "priceCurrency": "USD"
                            }
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
                        itemProp="item" itemID="https://www.mumara.com/classic"
                        href="https://www.mumara.com/classic">
                        <span itemProp="name">MumaraClassic</span>
                        <img itemProp="image" src="https://post.mumara.com/images/mumara-home.jpg" alt="Classic | Mumara"/></a>
                        <meta itemProp="position" content="2" />
                    </li>
                </ol>
                <div className="schemaproduct" itemScope itemType="http://schema.org/Product">
                    <meta itemProp="mpn" content="925876" />
                    <span itemProp="brand">Mumara</span>
                    <span itemProp="name">MumaraClassic</span>
                    <img itemProp="image" src="https://post.mumara.com/images/mumara-home.jpg" alt="Mumara Classic" />
                    <span itemProp="description">Start sending sizeable amount of emails speedily right in the target inbox with MumaraClassic. Reliable self-hosted email marketing software.
                    </span>
                    Product #: <span itemProp="mpn">1</span>
                    <span itemProp="aggregateRating" itemScope itemType="http://schema.org/AggregateRating">
                    <span itemProp="ratingValue">5.0</span> stars, based on <span itemProp="reviewCount">1797
                        </span> reviews
                    </span>
                    <div itemProp="offers" itemScope itemType="http://schema.org/Offer">
                        <span itemProp="seller" itemScope itemType="http://schema.org/Organization">
                            <span itemProp="name">Hostings House</span>
                        </span>
                        <link itemProp="url" href="https://www.mumara.com/campaigns/" />
                        <meta itemProp="availability" content="https://schema.org/InStock" />
                        <meta itemProp="priceCurrency" content="USD" />
                        <meta itemProp="itemCondition" content="https://schema.org/UsedCondition" />
                        <meta itemProp="price" content="47" />
                        <meta itemProp="priceValidUntil" content="2023-12-31" />
                        <div itemProp="shippingDetails" itemType="https://schema.org/OfferShippingDetails" itemScope>
                            <div itemProp="shippingRate" itemType="https://schema.org/MonetaryAmount" itemScope>
                                <meta itemProp="value" content="0.00" />
                                <meta itemProp="currency" content="USD" />
                            </div>
                            <div itemProp="shippingDestination" itemType="https://schema.org/DefinedRegion" itemScope>
                                <meta itemProp="addressCountry" content="US" />
                            </div>
                            <div itemProp="deliveryTime" itemType="https://schema.org/ShippingDeliveryTime" itemScope>
                                <div itemProp="handlingTime" itemType="https://schema.org/QuantitativeValue" itemScope>
                                    <meta itemProp="minValue" content="0" />
                                    <meta itemProp="maxValue" content="1" />
                                    <meta itemProp="unitCode" content="DAY" />
                                </div>
                                <div itemProp="transitTime" itemType="https://schema.org/QuantitativeValue" itemScope>
                                    <meta itemProp="minValue" content="0" />
                                    <meta itemProp="maxValue" content="1" />
                                    <meta itemProp="unitCode" content="DAY" />
                                </div>
                            </div>
                        </div>
                        <div itemProp="hasMerchantReturnPolicy" itemType="https://schema.org/MerchantReturnPolicy" itemScope>
                            <meta itemProp="applicableCountry" content="US" />
                            <meta itemProp="returnPolicyCategory" content="https://schema.org/MerchantReturnFiniteReturnWindow" />
                            <meta itemProp="merchantReturnDays" content="0" />
                            <meta itemProp="returnMethod" content="https://schema.org/ReturnByMail" />
                            <meta itemProp="returnFees" content="https://schema.org/FreeReturn" />
                        </div>
                    </div>
                    <meta itemProp="sku" content="classic-1947" />
                    <div itemProp="review" itemType="http://schema.org/Review" itemScope>
                        <div itemProp="author" itemType="http://schema.org/Person" itemScope>
                            <meta itemProp="name" content="Wasif Ahmed" />
                        </div>
                        <div itemProp="reviewRating" itemType="http://schema.org/Rating" itemScope>
                            <meta itemProp="ratingValue" content="5.0" />
                            <meta itemProp="bestRating" content="5" />
                        </div>
                    </div>
                </div>
                <div itemScope itemType="https://schema.org/SoftwareApplication">
                    <span itemProp="name">MumaraClassic</span> -
                    REQUIRES <span itemProp="operatingSystem">LINUX</span>
                    TYPE: <span itemProp="applicationCategory" content="BusinessApplication">BUSINESS</span>
                    RATING:
                    <div itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                        <span itemProp="ratingValue">5</span> (
                        <span itemProp="ratingCount">1797</span> ratings )
                    </div>
                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        Price: $<span itemProp="price">47.00</span>
                        <meta itemProp="priceCurrency" content="USD" />
                    </div>
                </div>   
            </div>
        </>
    );
}

export default index;