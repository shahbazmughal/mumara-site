import React, { Component } from "react";
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import {Link} from 'gatsby';
import './react-slider.css'


class PriceBlock02 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 1,
          emails: 1000,
          planName: "1 - 1000",
          price: "FREE",
          active1: "active",
          active2: "",
          active3: "",
          active4: "",
          active5: "",
          active6: "",
          active7: "",
          active8:"",
          link: "https://account.mumara.com/signup?pid=57",
          button: "Get Started"
        };
    }
    
    handleChangeStart = () => {
        console.log("Change event started");
    };
    
    handleChange = (value) => {
      this.setState({
        value: value
      });
      if(this.state.value == 1) {
        this.setState({
          emails: 1000,
          price: "FREE",
          planName: "1 - 1,000",
          active1: "active", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=57",
          button: "Get Started"
        });
      } else if(this.state.value == 2) {
        this.setState({
          emails: 5000,
          price: "$17.00",
          planName: "1,001 - 5,000",
          active1: "", active2: "active", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=58",
          button: "Get Started"
        })
      } else if(this.state.value  == 3) {
        this.setState({
          emails: 25000,
          price: "$67.00",
          planName: "5,001 - 25,000",
          active1: "", active2: "", active3: "active", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=59",
          button: "Get Started"
        })
      } else if(this.state.value == 4) {
        this.setState({
          emails: 50000,
          price: "$117.00",
          planName: "25,001 - 50,000",
          active1: "", active2: "", active3: "", active4: "active", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=60",
          button: "Get Started"
        })
      } else if(this.state.value == 5) {
        this.setState({
          emails: 100000,
          price: "$197.00",
          planName: "50,001 - 100,000",
          active1: "", active2: "", active3: "", active4: "", active5: "active", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=61",
          button: "Get Started"
        })
      } else if(this.state.value == 6) {
        this.setState({
          emails: 250000,
          price: "$397.00",
          planName: "100,001 - 250,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "active", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=81",
          button: "Get Started"
        })
      } else if(this.state.value == 7) {
        this.setState({
          emails: 1000000,
          price: "$797.00",
          planName: "250,001 - 1,000,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "active", active8: "",
          link: "https://account.mumara.com/signup?pid=82",
          button: "Get Started"
        })
      } else {
        this.setState({
          emails: 2000000,
          price: "Custom",
          planName: "1,000,000+",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "active",
          link: "/contact-us/",
          button: "Contact us"
        })
      }
    };
  
    handleClick = (value) => {
      console.log("Clicked Value: "+value)
      this.setState({
        value: value
      });
      if(this.state.value == 1) {
        this.setState({
          emails: 1000,
          price: "FREE",
          planName: "1 - 1,000",
          active1: "active", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=57",
          button: "Get Started"
        });
      } else if(this.state.value == 2) {
        this.setState({
          emails: 5000,
          price: "$17.00",
          planName: "1,001 - 5,000",
          active1: "", active2: "active", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=58",
          button: "Get Started"
        })
      } else if(this.state.value  == 3) {
        this.setState({
          emails: 25000,
          price: "$67.00",
          planName: "5,001 - 25,000",
          active1: "", active2: "", active3: "active", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=59",
          button: "Get Started"
        })
      } else if(this.state.value == 4) {
        this.setState({
          emails: 50000,
          price: "$117.00",
          planName: "25,001 - 50,000",
          active1: "", active2: "", active3: "", active4: "active", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=60",
          button: "Get Started"
        })
      } else if(this.state.value == 5) {
        this.setState({
          emails: 100000,
          price: "$197.00",
          planName: "50,001 - 100,000",
          active1: "", active2: "", active3: "", active4: "", active5: "active", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=61",
          button: "Get Started"
        })
      } else if(this.state.value == 6) {
        this.setState({
          emails: 250000,
          price: "$397.00",
          planName: "100,001 - 250,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "active", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=81",
          button: "Get Started"
        })
      } else if(this.state.value == 7) {
        this.setState({
          emails: 1000000,
          price: "$797.00",
          planName: "250,001 - 1,000,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "active", active8: "",
          link: "https://account.mumara.com/signup?pid=82",
          button: "Get Started"
        })
      } else {
        this.setState({
          emails: 2000000,
          price: "Custom",
          planName: "1,000,000+",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "active",
          link: "/contact-us/",
          button: "Contact us"
        })
      }
    };
    
    handleChangeComplete = () => {
        console.log("Change event completed");
    };
    
    changeInput = (e) => {
      var val = e.target.value;
      this.setState({
        emails: val
      });
      if(val < 1001) {
        this.setState({
          value:1,
          price: "FREE",
          planName: "1 - 1,000",
          active1: "active", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=57",
          button: "Get Started"
        });
      } else if(val > 1000 && val < 5001) {
        this.setState({
          value:2,
          price: "$17.00",
          planName: "1001 - 5,000",
          active1: "", active2: "active", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=58",
          button: "Get Started"
        })
      } else if(val > 5000 && val < 25001) {
        this.setState({
          value:3,
          price: "$67.00",
          planName: "5,001 - 25,000",
          active1: "", active2: "", active3: "active", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=59",
          button: "Get Started"
        })
      } else if(val > 25000 && val < 50001) {
        this.setState({
          value:4,
          price: "$117.00",
          planName: "25,001 - 50,000",
          active1: "", active2: "", active3: "", active4: "active", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=60",
          button: "Get Started"
        })
      } else if(val > 50000 && val < 100001) {
        this.setState({
          value:5,
          price: "$197.00",
          planName: "50,001 - 100,000",
          active1: "", active2: "", active3: "", active4: "", active5: "active", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=61",
          button: "Get Started"
        })
      } else if(val > 100000 && val < 250001) {
        this.setState({
          value:6,
          price: "$397.00",
          planName: "100,001 - 250,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "active", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=81",
          button: "Get Started"
        })
      } else if(val > 250000 && val < 1000001) {
        this.setState({
          value:7,
          price: "$797.00",
          planName: "250,001 - 1,000,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "active", active8: "",
          link: "https://account.mumara.com/signup?pid=82",
          button: "Get Started"
        })
      } else {
        this.setState({
          value:8,
          price: "Custom",
          planName: "1,000,000+",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "active",
          link: "/contact-us/",
          button: "Contact us"
        })
      }
    };

    changePackage =(e)=> {
      var data = e.target.dataset.id;
      console.log(data);
      if(data == 1) {
        this.setState({
          emails:1000,
          value:1,
          price: "FREE",
          planName: "1 - 1,000",
          active1: "active", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=57",
          button: "Get Started"
        });
      } else if(data == 2) {
        this.setState({
          emails:5000,
          value:2,
          price: "$17.00",
          planName: "1001 - 5,000",
          active1: "", active2: "active", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=58",
          button: "Get Started"
        })
      } else if(data == 3) {
        this.setState({
          emails:25000,
          value:3,
          price: "$67.00",
          planName: "5,001 - 25,000",
          active1: "", active2: "", active3: "active", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=59",
          button: "Get Started"
        })
      } else if(data == 4) {
        this.setState({
          emails:50000,
          value:4,
          price: "$117.00",
          planName: "25,001 - 50,000",
          active1: "", active2: "", active3: "", active4: "active", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=60",
          button: "Get Started"
        })
      } else if(data == 5) {
        this.setState({
          emails:100000,
          value:5,
          price: "$197.00",
          planName: "50,001 - 100,000",
          active1: "", active2: "", active3: "", active4: "", active5: "active", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=61",
          button: "Get Started"
        })
      } else if(data == 6) {
        this.setState({
          emails:250000,
          value:6,
          price: "$397.00",
          planName: "100,001 - 250,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "active", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=81",
          button: "Get Started"
        })
      } else if(data == 7) {
        this.setState({
          emails:1000000,
          value:7,
          price: "$797.00",
          planName: "250,001 - 1,000,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "active", active8: "",
          link: "https://account.mumara.com/signup?pid=82",
          button: "Get Started"
        })
      } else {
        this.setState({
          emails:2000000,
          value:8,
          price: "Custom",
          planName: "1,000,000+",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "active",
          link: "/contact-us/",
          button: "Contact us"
        })
      }
    }
    
    render() {
        const { value } = this.state;
        return (
          <Container as={Reveal}>
            <Box className="row slider">

              <Box className="slider-left-block">
                <Box className="slider-input-blk">
                  <h3>Your contact list size?</h3>
                  <p>Select the plan below as per your contact list size</p>
                  <input className="subscribers-input" type="number" min="1000" max="10000000" value={this.state.emails} onChange={this.changeInput} />
                </Box>
                <Slider
                  min={1}
                  max={8}
                  value={value}
                  tooltip={false}
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChange}
                  onClick={this.handleClick}
                  onChangeComplete={this.handleChangeComplete}
                />
                {/* <Box className="slider-value">{this.state.planName}</Box> */}
                <Box className="slider-desc-val">Plan Price</Box>
                <Box className="slider-value">{this.state.price}<span className="pmonth">/mo</span></Box>
                <Box className="ohbblk">
                  <Link className="btn btn-ohb" to={this.state.link}>{this.state.button}</Link>
                </Box>
              </Box>

              <Box className="slider-right-block">
                <Box className="slider-packages-header">
                  <h3>Select Your Plan!</h3>
                  <p>Test the platform with no commitment</p>
                </Box>
                <Box className="slider-packages">

                  <Box className="one-hpkg-top">
                    <Box>Package</Box>
                    <Box>Package Price</Box>
                  </Box>

                  <Box className={`one-hpkg `+this.state.active1} onClick={this.changePackage} data-id="1">
                    <Box onClick={this.changePackage} data-id="1">1 - 1000</Box>
                    <Box onClick={this.changePackage} data-id="1">Free</Box>
                  </Box>

                  <Box className={`one-hpkg `+this.state.active2} onClick={this.changePackage} data-id="2">
                    <Box onClick={this.changePackage} data-id="2">1001 - 5000</Box>
                    <Box onClick={this.changePackage} data-id="2">$17.00</Box>
                  </Box>
                  
                  <Box className={`one-hpkg `+this.state.active3} onClick={this.changePackage} data-id="3">
                    <Box onClick={this.changePackage} data-id="3">5001 - 25000</Box>
                    <Box onClick={this.changePackage} data-id="3">$67.00</Box>
                  </Box>

                  <Box className={`one-hpkg `+this.state.active4} onClick={this.changePackage} data-id="4">
                    <Box onClick={this.changePackage} data-id="4">25001 - 50000</Box>
                    <Box onClick={this.changePackage} data-id="4">$117.00</Box>
                  </Box>

                  <Box className={`one-hpkg `+this.state.active5} onClick={this.changePackage} data-id="5">
                    <Box onClick={this.changePackage} data-id="5">50001 - 100000</Box>
                    <Box onClick={this.changePackage} data-id="5">$197.00</Box>
                  </Box>

                  <Box className={`one-hpkg `+this.state.active6} onClick={this.changePackage} data-id="6">
                    <Box onClick={this.changePackage} data-id="6">100001 - 250000</Box>
                    <Box onClick={this.changePackage} data-id="6">$397.00</Box>
                  </Box>

                  <Box className={`one-hpkg `+this.state.active7} onClick={this.changePackage} data-id="7">
                    <Box onClick={this.changePackage} data-id="7">250001 - 1000000</Box>
                    <Box onClick={this.changePackage} data-id="7">$797.00</Box>
                  </Box>

                  <Box className={`one-hpkg `+this.state.active8} onClick={this.changePackage} data-id="8">
                    <Box onClick={this.changePackage} data-id="8">1000000+</Box>
                    <Box onClick={this.changePackage} data-id="8">Custom</Box>
                  </Box>

                </Box>

                <Box className="price-hint">
                  For package details go to <Link  to="/one/pricing">Price Page </Link> 
                </Box>

              </Box>
              
            </Box>
          </Container>
        );
    }
}


export default PriceBlock02;