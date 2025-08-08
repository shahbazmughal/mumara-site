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
          emails: 4000,
          planName: "1 - 1000",
          price: "$1",
          link: "https://account.mumara.com/signup?pid=57",
          button: "Get Started",
          contacts:1000, sending: 200, quota:6000, triggers:1, transactional:100, ips:0,
          cp:"4%", dsp:"1%", mqp:"1%", tp:"1%", tep:"2%", mdip: "0%"
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
            emails: 4000,
            price: "$1",
            planName: "1 - 1,000",
            active1: "active", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
            link: "https://account.mumara.com/signup?pid=57",
            button: "Get Started",
            contacts:1000, sending: 200, quota:6000, triggers:1, transactional:100, ips:0,
            cp:"4%", dsp:"1%", mqp:"1%", tp:"1%", tep:"2%", mdip: "0%"
          });
        } else if(this.state.value == 2) {
          this.setState({
            emails: 20000,
            price: "$10.00",
            planName: "1,001 - 5,000",
            active1: "", active2: "active", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
            link: "https://account.mumara.com/signup?pid=58",
            button: "Get Started",
            contacts:5000, sending: 5000, quota:"Unlimited", triggers:3, transactional:1000, ips:2,
            cp:"8%", dsp:"8%", mqp:"100%", tp:"3%", tep:"8%", mdip: "3%"
          })
        } else if(this.state.value  == 3) {
          this.setState({
            emails: 100000,
            price: "$67.00",
            planName: "5,001 - 25,000",
            active1: "", active2: "", active3: "active", active4: "", active5: "", active6: "", active7: "", active8: "",
            link: "https://account.mumara.com/signup?pid=59",
            button: "Get Started",
            contacts:25000, sending: 25000, quota:"Unlimited", triggers:5, transactional:5000, ips:4,
            cp:"16%", dsp:"16%", mqp:"100%", tp:"5%", tep:"15%", mdip: "6%"
          })
        } else if(this.state.value == 4) {
          this.setState({
            emails: 200000,
            price: "$117.00",
            planName: "25,001 - 50,000",
            active1: "", active2: "", active3: "", active4: "active", active5: "", active6: "", active7: "", active8: "",
            link: "https://account.mumara.com/signup?pid=60",
            button: "Get Started",
            contacts:50000, sending: 50000, quota:250000, triggers:10, transactional:10000, ips:8,
            cp:"32%", dsp:"32%", mqp:"15%", tp:"10%", tep:"30%", mdip: "11%"
          })
        } else if(this.state.value == 5) {
          this.setState({
            emails: 400000,
            price: "$197.00",
            planName: "50,001 - 100,000",
            active1: "", active2: "", active3: "", active4: "", active5: "active", active6: "", active7: "", active8: "",
            link: "https://account.mumara.com/signup?pid=61",
            button: "Get Started",
            contacts:100000, sending: 100000, quota:500000, triggers:20, transactional:20000, ips:16,
            cp:"50%", dsp:"50%", mqp:"30%", tp:"20%", tep:"45%", mdip: "22%"
          })
        } else if(this.state.value == 6) {
          this.setState({
            emails: 1000000,
            price: "$397.00",
            planName: "100,001 - 250,000",
            active1: "", active2: "", active3: "", active4: "", active5: "", active6: "active", active7: "", active8: "",
            link: "https://account.mumara.com/signup?pid=81",
            button: "Get Started",
            contacts:250000, sending: 250000, quota:1250000, triggers:50, transactional:30000, ips:32,
            cp:"65%", dsp:"65%", mqp:"45%", tp:"50%", tep:"65%", mdip: "45%"
          })
        } else if(this.state.value == 7) {
          this.setState({
            emails: 4000000,
            price: "$797.00",
            planName: "250,001 - 1,000,000",
            active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "active", active8: "",
            link: "https://account.mumara.com/signup?pid=82",
            button: "Get Started",
            contacts:1000000, sending: 1000000, quota:5000000, triggers:100, transactional:50000, ips:64,
            cp:"85%", dsp:"85%", mqp:"90%", tp:"95%", tep:"90%", mdip: "90%"
          })
        } else {
          this.setState({
            emails: 5000000,
            price: "Custom",
            planName: "1,000,000+",
            active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "active",
            link: "/contact-us/",
            button: "Contact us",
            contacts:"1000000+", sending: "Unlimited", quota:"50000+", triggers:"10+", transactional:"5+", ips:"Dedicated",
            cp:"100%", dsp:"100%", mqp:"100%", tp:"100%", tep:"100%", mdip: "100%"
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
          button: "Get Started",
          contacts:1000, sending: 200, quota:6000, triggers:1, transactional:100, ips:0,
          cp:"4%", dsp:"1%", mqp:"1%", tp:"1%", tep:"2%", mdip: "0%"
        });
      } else if(this.state.value == 2) {
        this.setState({
          emails: 5000,
          price: "$17.00",
          planName: "1,001 - 5,000",
          active1: "", active2: "active", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=58",
          button: "Get Started",
          contacts:5000, sending: 5000, quota:"Unlimited", triggers:3, transactional:1000, ips:2,
          cp:"8%", dsp:"8%", mqp:"100%", tp:"3%", tep:"8%", mdip: "3%"
        })
      } else if(this.state.value  == 3) {
        this.setState({
          emails: 25000,
          price: "$67.00",
          planName: "5,001 - 25,000",
          active1: "", active2: "", active3: "active", active4: "", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=59",
          button: "Get Started",
          contacts:25000, sending: 25000, quota:"Unlimited", triggers:5, transactional:5000, ips:4,
          cp:"16%", dsp:"16%", mqp:"100%", tp:"5%", tep:"15%", mdip: "6%"
        })
      } else if(this.state.value == 4) {
        this.setState({
          emails: 50000,
          price: "$117.00",
          planName: "25,001 - 50,000",
          active1: "", active2: "", active3: "", active4: "active", active5: "", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=60",
          button: "Get Started",
          contacts:50000, sending: 50000, quota:250000, triggers:10, transactional:10000, ips:8,
          cp:"32%", dsp:"32%", mqp:"15%", tp:"10%", tep:"30%", mdip: "11%"
        })
      } else if(this.state.value == 5) {
        this.setState({
          emails: 100000,
          price: "$197.00",
          planName: "50,001 - 100,000",
          active1: "", active2: "", active3: "", active4: "", active5: "active", active6: "", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=61",
          button: "Get Started",
          contacts:100000, sending: 100000, quota:500000, triggers:20, transactional:20000, ips:16,
          cp:"50%", dsp:"50%", mqp:"30%", tp:"20%", tep:"45%", mdip: "22%"
        })
      } else if(this.state.value == 6) {
        this.setState({
          emails: 250000,
          price: "$397.00",
          planName: "100,001 - 250,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "active", active7: "", active8: "",
          link: "https://account.mumara.com/signup?pid=81",
          button: "Get Started",
          contacts:250000, sending: 250000, quota:1250000, triggers:50, transactional:30000, ips:32,
          cp:"65%", dsp:"65%", mqp:"45%", tp:"50%", tep:"65%", mdip: "45%"
        })
      } else if(this.state.value == 7) {
        this.setState({
          emails: 1000000,
          price: "$797.00",
          planName: "250,001 - 1,000,000",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "active", active8: "",
          link: "https://account.mumara.com/signup?pid=82",
          button: "Get Started",
          contacts:1000000, sending: 1000000, quota:5000000, triggers:100, transactional:50000, ips:64,
          cp:"85%", dsp:"85%", mqp:"90%", tp:"95%", tep:"90%", mdip: "90%"
        })
      } else {
        this.setState({
          emails: 2000000,
          price: "Custom",
          planName: "1,000,000+",
          active1: "", active2: "", active3: "", active4: "", active5: "", active6: "", active7: "", active8: "active",
          link: "/contact-us/",
          button: "Contact us",
          contacts:"25000+", sending: "Unlimited", quota:"50000+", triggers:"10+", transactional:"5+", ips:"Dedicated",
          cp:"100%", dsp:"100%", mqp:"100%", tp:"100%", tep:"100%", mdip: "100%"
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
          link: "https://account.mumara.com/signup?pid=57",
          button: "Get Started",
          contacts:1000, sending: 200, quota:6000, triggers:1, transactional:100, ips:0,
          cp:"4%", dsp:"1%", mqp:"1%", tp:"1%", tep:"2%", mdip: "0%"
        });
      } else if(val > 1000 && val < 5001) {
        this.setState({
          value:2,
          price: "$17.00",
          planName: "1001 - 5,000",
          link: "https://account.mumara.com/signup?pid=58",
          button: "Get Started",
          contacts:5000, sending: 5000, quota:"Unlimited", triggers:3, transactional:1000, ips:2,
          cp:"8%", dsp:"8%", mqp:"100%", tp:"3%", tep:"8%", mdip: "3%"
        })
      } else if(val > 5000 && val < 25001) {
        this.setState({
          value:3,
          price: "$67.00",
          planName: "5,001 - 25,000",
          link: "https://account.mumara.com/signup?pid=59",
          button: "Get Started",
          contacts:25000, sending: 25000, quota:"Unlimited", triggers:5, transactional:5000, ips:4,
          cp:"16%", dsp:"16%", mqp:"100%", tp:"5%", tep:"15%", mdip: "6%"
        })
      } else if(val > 25000 && val < 50001) {
        this.setState({
          value:4,
          price: "$117.00",
          planName: "25,001 - 50,000",
          link: "https://account.mumara.com/signup?pid=60",
          button: "Get Started",
          contacts:50000, sending: 50000, quota:250000, triggers:10, transactional:10000, ips:8,
          cp:"32%", dsp:"32%", mqp:"15%", tp:"10%", tep:"30%", mdip: "11%"
        })
      } else if(val > 50000 && val < 100001) {
        this.setState({
          value:5,
          price: "$197.00",
          planName: "50,001 - 100,000",
          link: "https://account.mumara.com/signup?pid=61",
          button: "Get Started",
          contacts:100000, sending: 100000, quota:500000, triggers:20, transactional:20000, ips:16,
          cp:"50%", dsp:"50%", mqp:"30%", tp:"20%", tep:"45%", mdip: "22%"
        })
      } else if(val > 100000 && val < 250001) {
        this.setState({
          value:6,
          price: "$397.00",
          planName: "100,001 - 250,000",
          link: "https://account.mumara.com/signup?pid=81",
          button: "Get Started",
          contacts:250000, sending: 250000, quota:1250000, triggers:50, transactional:30000, ips:32,
          cp:"65%", dsp:"65%", mqp:"45%", tp:"50%", tep:"65%", mdip: "45%"
        })
      } else if(val > 250000 && val < 1000001) {
        this.setState({
          value:7,
          price: "$797.00",
          planName: "250,001 - 1,000,000",
          link: "https://account.mumara.com/signup?pid=82",
          button: "Get Started",
          contacts:1000000, sending: 1000000, quota:5000000, triggers:100, transactional:50000, ips:64,
          cp:"85%", dsp:"85%", mqp:"90%", tp:"95%", tep:"90%", mdip: "90%"
        })
      } else {
        this.setState({
          value:8,
          price: "Custom",
          planName: "1,000,000+",
          link: "/contact-us/",
          button: "Contact us",
          contacts:"25000+", sending: "Unlimited", quota:"50000+", triggers:"10+", transactional:"5+", ips:"Dedicated",
          cp:"100%", dsp:"100%", mqp:"100%", tp:"100%", tep:"100%", mdip: "100%"
        })
      }
    };
    
    render() {
        const { value } = this.state;
        return (
          <Container>
            <Box className="row slider">

              <Box className="slider-left-block">
                <Box className="slider-input-blk">
                  <h3>Your contact list size?</h3>
                  <p>Select the plan below as per your contact list size</p>
                  <input className="subscribers-input" type="number" min="1000" max="1000001" value={this.state.emails} onChange={this.changeInput} />
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
                <Box className="slider-desc-val">BUNDLE DEAL</Box>
                <Box className="slider-value">{this.state.price}<span className="pmonth">/mo</span></Box>
                <Box className="ohbblk">
                  <Link className="btn btn-ohb" to={this.state.link}>{this.state.button}</Link>
                </Box>
              </Box>

              <Box className="slider-right-block">

                <Box className="pp-header">
                  <Box className="pph-label">Your Plan!</Box>
                  <Box className="pph-data">
                    <span className="pplbl">{this.state.planName}</span>
                    <span className="pprc">{this.state.price}</span>
                  </Box>
                </Box>

                <Box className="pplans">
                  <Box className="pp-features-blk">
                    <Box className="pp-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1s4zhgv"><circle fill="none" cx="12" cy="7" r="3"></circle><path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path></svg>
                    </Box>
                    <Box className="pp-flbl-blk">
                      <Box className="pp-flbl-crow">
                        <Box className="pp-flbl-title">Contacts</Box>
                        <Box className="pp-flbl-cntnt">{this.state.contacts}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.cp}}></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box className="pplans">
                  <Box className="pp-features-blk">
                    <Box className="pp-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1s4zhgv"><path d="M21.781,13.875l-2-2.5C19.591,11.138,19.304,11,19,11h-6V9h6c1.103,0,2-0.897,2-2V4c0-1.103-0.897-2-2-2H5	C4.696,2,4.409,2.138,4.219,2.375l-2,2.5c-0.292,0.365-0.292,0.885,0,1.25l2,2.5C4.409,8.862,4.696,9,5,9h6v2H5	c-1.103,0-2,0.897-2,2v3c0,1.103,0.897,2,2,2h6v4h2v-4h6c0.304,0,0.591-0.138,0.781-0.375l2-2.5	C22.073,14.76,22.073,14.24,21.781,13.875z M4.281,5.5L5.48,4H19l0.002,3H5.48L4.281,5.5z M18.52,16H5v-3h13.52l1.2,1.5L18.52,16z"></path></svg>
                    </Box>
                    <Box className="pp-flbl-blk">
                      <Box className="pp-flbl-crow">
                        <Box className="pp-flbl-title">Daily Sending Limit</Box>
                        <Box className="pp-flbl-cntnt">{this.state.sending}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.dsp}}></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box className="pplans">
                  <Box className="pp-features-blk">
                    <Box className="pp-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-vy74rn"><path d="M19,4h-2V2h-2v2H9V2H7v2H5C3.897,4,3,4.897,3,6v2v12c0,1.103,0.897,2,2,2h14c1.103,0,2-0.897,2-2V8V6 C21,4.897,20.103,4,19,4z M19.002,20H5V8h14L19.002,20z"></path><path d="M11 17.414L16.707 11.707 15.293 10.293 11 14.586 8.707 12.293 7.293 13.707z"></path></svg>
                    </Box>
                    <Box className="pp-flbl-blk">
                      <Box className="pp-flbl-crow">
                        <Box className="pp-flbl-title">Monthly Quota</Box>
                        <Box className="pp-flbl-cntnt">{this.state.quota}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.mqp}}></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box className="pplans">
                  <Box className="pp-features-blk">
                    <Box className="pp-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1s4zhgv"><path fill="none" d="M17.496,4c-1.425,0-3.378,0.256-4.597,1.475C10.794,7.58,9.391,9.03,9.388,9.033 C9.148,9.28,8.795,9.387,8.465,9.316c-0.007,0-2.248-0.435-3.948,0.504l9.694,9.694c0.943-1.702,0.541-3.919,0.536-3.944 c-0.065-0.328,0.037-0.667,0.273-0.903l3.536-3.535c1.896-1.896,1.516-5.498,1.271-6.929C19.289,4.111,18.443,4,17.496,4z M17.142,9.718c-0.781,0.781-2.046,0.781-2.828,0c-0.781-0.782-0.781-2.047,0-2.828c0.782-0.782,2.047-0.782,2.828,0 C17.924,7.671,17.924,8.936,17.142,9.718z"></path><path d="M20.92,2.384C20.857,2.368,19.364,2,17.496,2c-2.585,0-4.663,0.713-6.011,2.061C9.997,5.549,8.857,6.712,8.31,7.273 C7.096,7.136,4.233,7.07,2.293,9.011C2.105,9.198,2,9.452,2,9.718s0.105,0.52,0.293,0.707l11.313,11.313 c0.188,0.188,0.441,0.293,0.707,0.293s0.52-0.105,0.707-0.293c1.954-1.953,1.894-4.814,1.767-6.01l3.184-3.183 c3.191-3.191,1.74-9.182,1.677-9.435C21.559,2.753,21.278,2.473,20.92,2.384z M18.557,11.132l-3.536,3.535 c-0.236,0.236-0.339,0.575-0.273,0.903c0.005,0.025,0.407,2.242-0.536,3.944L4.517,9.82c1.7-0.938,3.941-0.504,3.948-0.504 c0.33,0.07,0.684-0.036,0.923-0.283c0.003-0.003,1.406-1.453,3.512-3.559C14.118,4.256,16.071,4,17.496,4 c0.947,0,1.793,0.111,2.332,0.203C20.072,5.634,20.453,9.235,18.557,11.132z"></path><circle cx="15.728" cy="8.304" r="2"></circle><path d="M5,16c-2,1-2,5-2,5s3,0,5-2L5,16z"></path></svg>
                    </Box>
                    <Box className="pp-flbl-blk">
                      <Box className="pp-flbl-crow">
                        <Box className="pp-flbl-title">Triggers</Box>
                        <Box className="pp-flbl-cntnt">{this.state.triggers}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.tp}}></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box className="pplans">
                  <Box className="pp-features-blk">
                    <Box className="pp-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1s4zhgv"><path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,6v0.511 l-8,6.223L4,6.512V6H20z M4,18V9.044l7.386,5.745C11.566,14.93,11.783,15,12,15s0.434-0.07,0.614-0.211L20,9.044L20.002,18H4z"></path></svg>
                    </Box>
                    <Box className="pp-flbl-blk">
                      <Box className="pp-flbl-crow">
                        <Box className="pp-flbl-title">Transactional Emails</Box>
                        <Box className="pp-flbl-cntnt">{this.state.transactional}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.tep}}></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box className="pplans">
                  <Box className="pp-features-blk">
                    <Box className="pp-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-vy74rn"><path d="M15.794,11.09c0.332-0.263,0.648-0.542,0.947-0.84c0.046-0.047,0.09-0.095,0.136-0.142c0.283-0.293,0.552-0.598,0.801-0.919	c0.021-0.025,0.042-0.05,0.062-0.075c0.255-0.335,0.486-0.688,0.702-1.049c0.043-0.073,0.086-0.146,0.128-0.22	c0.205-0.364,0.395-0.737,0.559-1.123c0.02-0.047,0.035-0.095,0.055-0.142c0.147-0.361,0.274-0.731,0.383-1.109	c0.021-0.07,0.044-0.14,0.063-0.211c0.107-0.402,0.189-0.813,0.251-1.229c0.013-0.087,0.021-0.175,0.032-0.263	C19.964,3.336,20,2.899,20,2.457V2h-2v0.457C18,2.641,17.969,2.818,17.958,3H6.022C6.012,2.819,6,2.64,6,2.457V2H4v0.457	c0,4.876,3.269,9.218,7.952,10.569c0.009,0.003,0.019,0.006,0.028,0.009c2.881,0.823,5.056,3.146,5.769,5.965H6.251l0.799-2h7.607	c-0.55-0.791-1.245-1.471-2.063-2h-4c0.445-0.424,0.956-0.774,1.491-1.09c-0.74-0.259-1.436-0.601-2.08-1.014	C5.55,14.812,4,17.779,4,21.015V23h2v-1.985C6,21.01,6.001,21.005,6.001,21h11.998c0,0.005,0.001,0.01,0.001,0.015V23h2v-1.985	c0-3.83-2.159-7.303-5.443-9.07c0.374-0.221,0.729-0.468,1.072-0.729C15.684,11.174,15.739,11.134,15.794,11.09z M14.604,9.486	c-0.694,0.557-1.476,1.014-2.325,1.348c-0.092,0.036-0.185,0.068-0.278,0.102C10.802,10.511,9.73,9.846,8.836,9h6.292	c-0.171,0.161-0.332,0.333-0.517,0.48C14.609,9.482,14.606,9.484,14.604,9.486z M17.619,5c-0.005,0.016-0.007,0.033-0.012,0.049	C17.592,5.1,17.578,5.15,17.563,5.2c-0.123,0.379-0.271,0.746-0.441,1.103c-0.023,0.05-0.047,0.1-0.072,0.149	C16.954,6.642,16.837,6.817,16.729,7h-9.48C6.881,6.374,6.588,5.703,6.378,5H17.619z"></path></svg>
                    </Box>
                    <Box className="pp-flbl-blk">
                      <Box className="pp-flbl-crow">
                        <Box className="pp-flbl-title">Maximum Dedicated IPs</Box>
                        <Box className="pp-flbl-cntnt">{this.state.ips}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.mdip}}></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>

              </Box>
              
            </Box>
            <Box className="new-newsletter-ft">

            <div className="new-newsletter-ft ft-head-title text-center">

              <p>Newsletter Summarizing key features</p>
              <h3>User Interface & List Management</h3>
              <table className="table table-bordered table-hover table-condences new-newsletter-ft-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Essential</th>
                    <th>Professional</th>
                    <th>Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dashboard Overview</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Funds Management</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>HTML Editor & Builder</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Templates</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Web Forms</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Contact Lists</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Custom Fields</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Segments</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Import Contacts</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Export Contacts</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Bulk Update Contacts</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                </tbody>
              </table>

              <p>Newsletter Summarizing key features</p>
              <h3>Email Campaign Tools</h3>
              <table className="table table-bordered table-hover table-condences new-newsletter-ft-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Essential</th>
                    <th>Professional</th>
                    <th>Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Broadcasts</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Evergreen Campaigns</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Drip Campaigns</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Dynamic Content Tags</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Split Tests</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Spintags</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Dynamic Templates</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Mail Merge</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                </tbody>
              </table>

              <p>Newsletter Summarizing key features</p>
              <h3>Personalization Options</h3>
              <table className="table table-bordered table-hover table-condences new-newsletter-ft-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Essential</th>
                    <th>Professional</th>
                    <th>Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Custom Fields</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Systematic Variables</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>User Fields</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Dynamic Fields</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Conditional Content</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                </tbody>
              </table>

              <p>Newsletter Summarizing key features</p>
              <h3>Advanced Deliverability Options</h3>
              <table className="table table-bordered table-hover table-condences new-newsletter-ft-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Essential</th>
                    <th>Professional</th>
                    <th>Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sending Domains</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>DKIM Authentication</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Custom Bounce Domains</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Tracking Domains Branding</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Dedicated IPs</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Dedicated Pools</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>SMTP Relays (Bridges)</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Bridges Binding to Dedicated Pools</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Transactional Email API</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                </tbody>
              </table>

              <p>Newsletter Summarizing key features</p>
              <h3>Automation & Integration</h3>
              <table className="table table-bordered table-hover table-condences new-newsletter-ft-table">
                <thead>
                  <tr>
                    <th>Features</th>
                    <th>Essential</th>
                    <th>Professional</th>
                    <th>Business</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Workflows</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Triggers</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Webhooks</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>RSS</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>AI Content Tags</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>RESTFUL API</td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Landing Pages</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                  <tr>
                    <td>Pixels</td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-x bg-danger"></i></td>
                    <td><i className="bi bi-check bg-success"></i></td>
                  </tr>
                </tbody>
              </table>

            </div>

            </Box>
          </Container>
        );
    }
}


export default PriceBlock02;