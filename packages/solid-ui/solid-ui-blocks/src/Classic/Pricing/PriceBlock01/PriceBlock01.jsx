import React, {useState} from 'react'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'
import { Helmet } from "react-helmet"
import {Link} from 'gatsby';
import './classic-price.css'
import './style.css'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;

}

const PriceBlock01 = ({ content: { text, buttons, form, images, html } }) => {

    const [state, setState] = useState({
        ma_tab_selected1: "tabs_selectedTab tab1",
        ma_tab_selected2: " tab2",
        monthly: "show",
        lifetime: "hide"
    });
    const monthClick =()=> {
        setState({...state, monthly: "show", lifetime: "hide", ma_tab_selected1: "tabs_selectedTab tab1", ma_tab_selected2: " tab2"});
    }
    
    const annualClick =()=> {
        setState({...state, monthly: "hide", lifetime: "show", ma_tab_selected1: " tab1", ma_tab_selected2: " tabs_selectedTab  tab2"});
    }

    return (

        <div className="pt-40 pb-60 feature-block-01" id="mainPricing">

            <section id="pricing" className="pricing classic-pricing bg-white">

                <div className="css-1l6651k">
                    <div className="react-tabs" data-tabs="true">
                        <ul className="tabs_tabList" role="tablist">
                            <li className={`tabs_tab `+state.ma_tab_selected1} onClick={monthClick} data-selected={state.selected_mo} data-dd={state.ddVal}>Monthly</li>
                            <li className={`tabs_tab `+state.ma_tab_selected2} onClick={annualClick} data-selected={state.selected_mo} data-dd={state.ddVal}>Lifetime</li>
                        </ul>
                        <div className="css-jgj9px"></div>
                    </div>
                </div>

                <div className="container aos-init aos-animate classic-pricing" data-aos="fade-up">
                    <div className="row gy-4 aos-init aos-animate" data-aos="fade-left">
                        <div className={`col-md-4 aos-init aos-animate mx-auto ${state.monthly}`} data-aos="zoom-in" data-aos-delay="100">
                            <div className="box">
                            <h3 style={{color: `#007bff`}} className="mb-0">Monthly Deluxe</h3>
                            <div className="price mb-3"><sup>$</sup><span id="consPrice31">47</span><span className="monthly" id="monthlyannual1"> Monthly</span></div>
                            <ul className="price-180">
                                <li><i className="bi-plus-square-dotted circle-no"></i> All Addons Included</li>
                                <li><i className="bi-plus-square-dotted circle-no"></i> Life-time Upgrades</li>
                                <li><i className="bi-plus-square-dotted circle-no"></i> 1 Month Free Support</li>
                                <li><i className="bi-plus-square-dotted circle-no"></i> Free Installation</li>
                            </ul>
                            <div className="update">
                                <i className="bi bi-check"></i>
                                <span>Lifetime Upgrades</span>
                            </div>
                            <Link to="https://billing.mumara.com/store/mumara-classic/deluxe" title="Lifetime Upgrades" id="btn-personal" className="btn-buy">Order Now</Link>
                            </div>
                        </div>
                        <div className={`col-md-4 aos-init aos-animate mx-auto ${state.lifetime}`} data-aos="zoom-in" data-aos-delay="200">
                            <div className="box feature-block">
                            <span className="featured bg-success">Featured</span>
                            <h3 style={{color: `#0f977e !important`}} className="mb-0 mclassic-feature-csuite">Complete Suite</h3>
                            <div className="price mb-3"><sup>$</sup><span id="consPrice32">1487</span><span className="monthly" id="monthlyannual2"> Lifetime</span></div>
                            <ul className="price-180">
                                <li><i className="bi-plus-square-dotted circle-no"></i> All Addons Included</li>
                                <li><i className="bi-plus-square-dotted circle-no"></i> Life-time Upgrades</li>
                                <li><i className="bi-plus-square-dotted circle-no"></i> 1 Month Free Support</li>
                                <li><i className="bi-plus-square-dotted circle-no"></i> Free Installation</li>
                            </ul>
                            <div className="update">
                                <i className="bi bi-check"></i>
                                <span>Lifetime upgrades</span>
                            </div>
                            <Link to="https://billing.mumara.com/store/mumara-classic/complete-suite" title="Order Now" id="btn-pro" className="btn-buy">Order Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="table" className="pricing-table bg-light">
            <div className="container" data-aos="fade-up">
                <header className="section-header">
                <p>Features</p>
                </header>
                <div className="row gy-4" data-aos="fade-left">
                <div className="col-lg-12 col-md-12" data-aos="zoom-in" data-aos-delay="100">
                    <table className="table table-striped">
                    <thead>
                        <tr>
                        <th scope="col">Modules</th>
                        <th scope="col" className="align-center">Monthly Delux</th>
                        <th scope="col" className="align-center">Complete Suite</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>adKnowledge Integration</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Multi Campaign Scheduling</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Auto Responders</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Domain Masking</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Dynamic Content Tags</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Feedback Loops Processor</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Geo Location Tool</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>User Management</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>PowerMTA Integration and Bounce Processor</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Spin Tags</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Split Tests</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Website Forms</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Triggers</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Advance Export</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Responsive Newsletter Templates</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Multi MTA / SMTP</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>IP/Domain Reputation Monitor</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Sender Score Monitor</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Authentication Check</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Emails Verifier</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>White Labeling</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Server Maintenance Robot</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td>Auto Backup Module</td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                            <td>
                                <div className="align-center"><i className="bi-check-circle circle-no"></i></div>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Pricing</strong></td>
                            <td align="center"><strong>$47.00 / mo</strong></td>
                            <td align="center"><strong>$1,487 / life-time</strong></td>
                        </tr>
                        <tr>
                        <td align="center"></td>
                        <td align="center">
                            <Link className="btn btn-primary btn-sm btn-rounded" target="_self" to="https://billing.mumara.com/store/mumara-classic/deluxe">
                                <span className="fusion-button-text">Order Now</span>
                            </Link>
                        </td>
                        <td align="center">
                            <Link className="btn btn-primary btn-sm btn-rounded" target="_self" to="https://billing.mumara.com/store/mumara-classic/complete-suite">
                                <span className="fusion-button-text">Order Now</span>
                            </Link>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </section>

            <Helmet>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" integrity="sha384-EvBWSlnoFgZlXJvpzS+MAUEjvN7+gcCwH+qh7GRFOGgZO0PuwOFro7qPOJnLfe7l" crossorigin="anonymous" /> */}
            </Helmet>
        </div>

    )

}

export default WithDefaultContent(PriceBlock01)
