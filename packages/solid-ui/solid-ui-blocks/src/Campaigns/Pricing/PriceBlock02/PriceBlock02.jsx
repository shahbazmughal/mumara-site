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
          planName: "Machine - 1",
          price: "$47",
          link: "https://billing.mumara.com/store/mumara-machines/machine-1",
          button: "Order Now",
          ram:"1 GB", cpu:"1 Core", storage: "10GB (SSD)", contacts: "Up to 10,000 contacts",
          ramp:"2%", cpup:"5%", strgp:"2%", contactsp:"1%"
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
            price: "$47",
            planName: "Machine - 1",
            link: "https://billing.mumara.com/store/mumara-machines/machine-1",
            button: "Order Now",
            ram:"1 GB", cpu:"1 Core", storage: "10GB (SSD)", contacts: "up to 10,000 contacts",
            ramp:"2%", cpup:"5%", strgp:"2%", contactsp:"1%"
          });
        } else if(this.state.value == 2) {
          this.setState({
            price: "$97",
            planName: "Machine - 2",
            link: "https://billing.mumara.com/store/mumara-machines/machine-2",
            button: "Order Now",
            ram:"2 GB", cpu:"1 Core", storage: "20GB (SSD)", contacts: "Up to 25,000 contacts",
            ramp:"4%", cpup:"5%", strgp:"4%", contactsp:"2%"
          })
        } else if(this.state.value  == 3) {
          this.setState({
            price: "$147",
            planName: "Machine - 3",
            link: "https://billing.mumara.com/store/mumara-machines/machine-3",
            button: "Order Now",
            ram:"4 GB", cpu:"2 Core", storage: "40GB (SSD)", contacts: "Up to 100,000 contacts",
            ramp:"8%", cpup:"10%", strgp:"8%", contactsp:"8%"
          })
        } else if(this.state.value == 4) {
          this.setState({
            price: "$197",
            planName: "Machine - 4",
            link: "https://billing.mumara.com/store/mumara-machines/machine-4",
            button: "Order Now",
            ram:"8 GB", cpu:"4 Core", storage: "80GB (SSD)", contacts: "Up to 250,000 contacts",
            ramp:"16%", cpup:"20%", strgp:"16%", contactsp:"20%"
          })
        } else if(this.state.value == 5) {
          this.setState({
            price: "$397",
            planName: "Machine - 5",
            link: "https://billing.mumara.com/store/mumara-machines/machine-5",
            button: "Order Now",
            ram:"16 GB", cpu:"6 Core", storage: "160GB (SSD)", contacts: "up to 1,000,000 contacts",
            ramp:"30%", cpup:"30%", strgp:"30%", contactsp:"35%"
          })
        } else if(this.state.value == 6) {
          this.setState({
            price: "$797",
            planName: "Machine - 6",
            link: "https://billing.mumara.com/store/mumara-machines/machine-6",
            button: "Order Now",
            ram:"32 GB", cpu:"8 Core", storage: "320GB (SSD)", contacts: "up to 2,500,000 contacts",
            ramp:"45%", cpup:"45%", strgp:"45%", contactsp:"50%"
          })
        } else if(this.state.value == 7) {
          this.setState({
            price: "$1597",
            planName: "Machine - 7",
            link: "https://billing.mumara.com/store/mumara-machines/machine-7-1",
            button: "Order Now",
            ram:"64 GB", cpu:"16 Core", storage: "640GB (SSD)", contacts: "up to 10,000,000 contacts",
            ramp:"55%", cpup:"55%", strgp:"55%", contactsp:"70%"
          })
        } else if(this.state.value == 8) {
          this.setState({
            price: "$3197",
            planName: "Machine - 8",
            link: "https://billing.mumara.com/store/mumara-machines/machine-8",
            button: "Order Now",
            ram:"96 GB", cpu:"20 Core", storage: "960GB (SSD)", contacts: "up to 25,000,000 contacts",
            ramp:"68%", cpup:"62%", strgp:"70%", contactsp:"80%"
          })
        } else if(this.state.value == 9) {
          this.setState({
            price: "$4797",
            planName: "Machine - 9",
            link: "https://billing.mumara.com/store/mumara-machines/machine-9",
            button: "Order Now",
            ram:"128 GB", cpu:"24 Core", storage: "1280GB (SSD)", contacts: "up to 100,000,000 contacts",
            ramp:"80%", cpup:"80%", strgp:"80%", contactsp:"90%"
          })
        } else {
          this.setState({
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Order Now",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          })
        }
    };
    
    handleChangeComplete = () => {
        console.log("Change event completed");
    };

    render() {
        const { value } = this.state;
        return (
          <Container as={Reveal} className="cloud-price op-page">
            <div className="head-title">
              <h3 id="hth3">Machine <small>(all addons included)</small></h3>
              <p id="hthp">We host it for you</p>
            </div>
            <Box className="row slider">

              <div className="prelative">
                <Link to="https://billing.mumara.com/store/mumara-machines/machine-trial" title="Deploy Trial" className="button-group-button level-1 css-1bd5b98 btn-sm btn-needtrail">
                    <div className="css-12hibeq">Deploy Trial</div>
                </Link>
              </div>

              {/* <Link className="slider-left-link" to="/campaigns/pricing/?tab=self">Startig from FREE to a fully-featured platform.</Link> */}
              <Box className="slider-left-block">
                <Box className="slider-input-blk">
                  <h3>Choose your plan!</h3>
                  <p>Automate Your Marketing to the Next Level!</p>
                </Box>
                <Slider
                  min={1}
                  max={10}
                  value={value}
                  tooltip={false}
                  onChangeStart={this.handleChangeStart}
                  onChange={this.handleChange}
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
                        <Box className="pp-flbl-title">Ram</Box>
                        <Box className="pp-flbl-cntnt">{this.state.ram}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.ramp}}></div>
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
                        <Box className="pp-flbl-title">CPU</Box>
                        <Box className="pp-flbl-cntnt">{this.state.cpu}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.cpup}}></div>
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
                        <Box className="pp-flbl-title">Storage</Box>
                        <Box className="pp-flbl-cntnt">{this.state.storage}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.strgp}}></div>
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
                        <Box className="pp-flbl-title">Suggested for</Box>
                        <Box className="pp-flbl-cntnt">{this.state.contacts}</Box>
                      </Box>
                      <Box className="pp-flbl-prow">
                        <div className="progress">
                          <div className="progress-bar progress-bar-success" style={{width:this.state.contactsp}}></div>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>

              </Box>
              
            </Box>

            <div className="css-fytypu"></div>

            <div className="css-1lx7oj">
              <h5 className="css-1wzqk93">CampaignsPlus Features</h5>
              <h2 className="css-8idint">INCLUDED WITH EVERY PLAN</h2>
            </div>

            <div className="css-ad53z1"></div>

            <div className="css-1jca6ri mcp-fblk">
              <div className="css-1npmguo">
                <div className="op-fl css-2obwxi">
                  <div className="css-k0djys">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1l4ust4"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <div className="css-vurnku">Auto Deployment</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1npmguo">
                <div className="op-fl css-2obwxi">
                  <div className="css-k0djys">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1l4ust4"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <div className="css-vurnku">Resize at any time</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1npmguo">
                <div className="op-fl css-2obwxi">
                  <div className="css-k0djys">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1l4ust4"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <div className="css-vurnku">All Modules Included</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1npmguo">
                <div className="op-fl css-2obwxi">
                  <div className="css-k0djys">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1l4ust4"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <div className="css-vurnku">User Management</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1npmguo">
                <div className="op-fl css-2obwxi">
                  <div className="css-k0djys">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1l4ust4"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <div className="css-vurnku">Staff Management</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1npmguo">
                <div className="op-fl css-2obwxi">
                  <div className="css-k0djys">
                    <div className="css-9uke8i">
                      <div className="css-wjyr4o">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1l4ust4"><path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8s3.589-8,8-8 s8,3.589,8,8S16.411,20,12,20z"></path><path d="M9.999 13.587L7.7 11.292 6.288 12.708 10.001 16.413 16.707 9.707 15.293 8.293z"></path></svg>
                      </div>
                    </div>
                    <div className="css-nnrka7">
                      <div className="css-vurnku">Auto Backups</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>           
            
          </Container>
        );
    }
}


export default PriceBlock02;