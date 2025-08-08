import React, {useState} from 'react'
import { Helmet } from "react-helmet"
import {Link} from 'gatsby';
import './style.css'

function FeaturePriceBlock() {

  const [state, setState] = useState({
    price:27,
    link:'https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=42'
  });

  const priceChange =(e)=> {
    var val = e.target.value;
    if(val == 1) {
      setState({...state,
        price:27, 
        link: 'https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=42'
      })
    } else if (val == 2) {
      setState({...state,
        price:37, 
        link: 'https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=39'
      })
    } else if (val == 3) {
      setState({...state,
        price:47, 
        link: 'https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=40'
      })
    } else if (val == 4) {
      setState({...state,
        price:97, 
        link: 'https://billing.mumara.com/cart.php?a=add&pid=56&billingcycle=monthly&configoption[11]=41'
      })
    }
  }

  return (
    <div id="pricing" className="pricing bg-white">
        <Helmet>
        {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" integrity="sha384-EvBWSlnoFgZlXJvpzS+MAUEjvN7+gcCwH+qh7GRFOGgZO0PuwOFro7qPOJnLfe7l" crossorigin="anonymous" /> */}
        </Helmet>
        <div className="container " data-aos="fade-up">
            <div className="row gy-4 " data-aos="fade-left">
              <div className="col-lg-3 col-md-6 " data-aos="zoom-in" data-aos-delay="100">
                <div className="box">
                  <h3 style={{color: "#007bff"}} className="mb-0">Lite</h3>
                  <div style={{color: "#bababa", fontSize:13, fontWeight:300}}>(Single User)</div>
                  <div className="price mb-3">Free<span className="monthly"> Monthly</span></div>
                  <ul className="price-180">
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Single user</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> 5000 Contacts</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> All modules except
                      <ul>
                        <li><i className="bi bi-patch-minus-fill fpbicon text-success"></i> Segments</li>
                        <li><i className="bi bi-patch-minus-fill fpbicon text-success"></i> Drips</li>
                        <li><i className="bi bi-patch-minus-fill fpbicon text-success"></i> Triggers</li>
                        <li><i className="bi bi-patch-minus-fill fpbicon text-success"></i> Staff Management</li>
                      </ul>
                    </li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Community Support</li>
                  </ul>
                  <div className="update">
                    <i className="bi bi-check"><img src="/img/check.png" alt="3-Month Updates" /></i>
                    <span>3-Month Updates</span>
                  </div>
                  <Link to="https://billing.mumara.com/cart.php?a=add&pid=63&billingcycle=monthly" id="btn-free" className="btn-buy button-group-button">Order Now</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 " data-aos="zoom-in" data-aos-delay="100">
                <div className="box">
                  <h3 style={{color: "#007bff"}} className="mb-0">Personal</h3>
                  <div style={{color: "#bababa", fontSize:13, fontWeight:300}}>(Single User)</div>
                  <div className="price mb-3"><sup>$</sup><span id="consPrice31">7</span><span className="monthly" id="monthlyannual1"> Monthly</span></div>
                  <ul className="price-180">
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Unlimited Contacts</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Unlimited Lists</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Unlimited Nodes</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Unlimited Domains</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Support Desk</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Community Support</li>
                  </ul>
                  <div className="update">
                    <i className="bi bi-check"><img src="/img/check.png" alt="Lifetime updates" /></i>
                    <span>Lifetime updates</span>
                  </div>
                  <Link to="https://billing.mumara.com/cart.php?a=add&pid=54&billingcycle=monthly" id="btn-personal" title="Order Now" className="btn-buy button-group-button">Order Now</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 " data-aos="zoom-in" data-aos-delay="200">
                <div className="box feature-block">
                  <span className="featured bg-success">Featured</span>
                  <h3 style={{color: "#007bff"}} className="mb-0">Professional</h3>
                  <div style={{color: "#bababa", fontSize:13, fontWeight:300}}>(Single User)</div>
                  <div className="price mb-3"><sup>$</sup><span id="consPrice32">17</span><span className="monthly" id="monthlyannual2"> Monthly</span></div>
                  <ul className="price-180">
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Everything as in Personal Edition</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Segments</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Drips</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Triggers</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Staff Management</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Support Desk</li>
                  </ul>
                  <div className="update">
                    <i className="bi bi-check"><img src="/img/check.png" alt="Lifetime updates" /></i>
                    <span>Lifetime updates</span>
                  </div>
                  <Link to="https://billing.mumara.com/cart.php?a=add&pid=55&billingcycle=monthly" id="btn-pro" className="btn-buy" title="Order Now">Order Now</Link>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 " data-aos="zoom-in" data-aos-delay="100">
                <div className="box">
                  <h3 style={{color: "#007bff"}} className="mb-0">Commercial</h3>
                  <div style={{height:"28px"}}></div>
                  <div className="price mb-3"><sup>$</sup><span id="consPrice333">{state.price}</span><span className="monthly" id="monthlyannual3"> Monthly</span></div>
                  <div className="dd-filter" id="camfilter">
                    <select className="form-control" id="selfHostDD2" onChange={priceChange}>
                      <option value="1" selected="selected">10 Users</option>
                      <option value="2">25 Users</option>
                      <option value="3">100 Users</option>
                      <option value="4">Unlimited Users</option>
                    </select>
                  </div>
                  <ul className="price-180 w225">
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Everything as in Professional Edition</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> User Management</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Packages</li>
                    <li><i className="bi bi-patch-plus-fill fpbicon text-success"></i> Premium Support</li>
                  </ul>
                  <div className="update">
                    <i className="bi bi-check"><img src="/img/check.png" alt="Lifetime updates" /></i>
                    <span>Lifetime updates</span>
                  </div>
                  <Link to={state.link} title="Order Now" id="btn-com" className="btn-buy button-group-button">Order Now</Link>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturePriceBlock;