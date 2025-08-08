import React, { useState, useEffect } from 'react'
import { Container, Flex, Box, css, Input, Button, Select, Textarea, Radio } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import { Helmet } from "react-helmet"
import Toast from '../../../Toastr'
import axios from "axios";
import countries2 from './countries.json'
import './loader.css'
import './requestdemo.css'

const styles = {
  listItem: {
    flexBasis: [`1`, null, `1/2`],
    alignItems: `center`,
    justifyContent: `center`,
    p: [3, 4],
    ':nth-of-type(even)': {
      borderLeftStyle: `solid`,
      borderLeftColor: `rgba(113, 128, 150, 0.2)`,
      borderLeftWidth: [0, null, null, `sm`]
    }
  },
  button: {
    backgroundColor: `rgba(255, 255, 255, 0)`,
    color: "#333"
  },
  fIcon : {
    paddingLeft: "10px",
    paddingTop: "8px"
  },
  w50 : {
    width: "50%",
    maxWidth: "100%",
    flex: "0 0 auto",
    marginTop: "calc(2rem)",
    paddingLeft: "calc(2rem)",
    paddingRight: "calc(2rem)"
  },
  w250 : {
    width: "50%",
    maxWidth: "100%",
    flex: "0 0 auto",
    paddingLeft: "calc(1rem)",
    paddingRight: "calc(1rem)"
  },
  w100 : {
    width: "100%",
    maxWidth: "100%",
    flex: "0 0 auto",
    marginTop: "calc(2rem)",
    paddingLeft: "calc(2rem)",
    paddingRight: "calc(2rem)"
  },
  w101 : {
    width: "auto",
    maxWidth: "100%",
    flex: "0 0 auto",
    marginTop: "calc(2rem)",
    paddingLeft: "calc(2rem)",
    paddingRight: "calc(2rem)"
  },
  wrow : {
    display: "flex",
    flexWrap: "wrap"
  },
  mb0: {
    marginBottom: 0
  },
  mb30 : {
    marginBottom:'30px'
  },
  btnConct: {
    borderRadius:`6px`,
    fontWeight: '600',
    outline:`0 none`
  }
}

const RequestDemo = () => {

  const [contry, setCountry] = useState([]);
  const [loader, setLoader] = useState(false);
  // const [countries, setCountries] = useState([]);
  // const fetchPosts =()=> {
  //   fetch(`https://app-qrbuzz.mumara.com/api/home/countries`)
  //     .then(response => response.json())
  //     .then(
  //       data =>
  //       setCountries(data.countries)
  //     )
  //     .catch(error => this.setState({ error, isLoading: false }));
  // }

  const [values, setValues] = React.useState({
		firstname:"",
		lastname:"",
		email: "",
		company: "",
		phoneno: "",
		skype: "",
		website: "",
		country:"",
		emailsquota:"",
		emailservers:"",
		message:""
	});

  const [state, setState] = React.useState({
		firstname:"",
		lastname:"",
		email: "",
		company: "",
		phoneno: "",
		skype: "",
		website: "",
		country:"",
		emailsquota:"",
		emailservers:"",
		message:"",
    valid_firstname: "",
    valid_lastname: "",
    valid_email: "",
    valid_company: "",
    valid_phoneno:"",
    valid_skype:"",
    valid_website:"",
    valid_country: "",
    valid_message: "",
    firstnameMsg:"hide",
    lastnameMsg:"hide",
    emailMsg:"hide",
    companyMsg:"hide",
    phoneMsg:"hide",
    skypeMsg:"hide",
    websiteMsg:"hide",
    countriesMsg:"hide",
    messageMsg:"hide", 
    ip_address: "",
    url: "",
    toast:false,
    captcha:false,
    captchahide: "hide"
	});

  const handleChange = name => event => {
	  setState({ ...state, [name]: event.target.value, valid_firstname: "", valid_lastname: "", valid_email: "", valid_company:"", valid_phoneno:"", firstnameMsg:"hide", lastnameMsg:"hide", emailMsg:"hide", companyMsg:"hide", phoneMsg:"hide"});
    setValues({ ...values, [name]: event.target.value });
	}; 

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg, form) => {
      setServerState({
      submitting: false,
      status: { ok, msg }
      });
      if (ok) {
        form.reset();
        setLoader(false);
        grecaptcha.reset();
        setState({ ...state, firstname:"", lastname:"", email: "", phoneno: "", company: "", skype:"", website:"", country:"", message:"", valid_firstname: "", valid_lastname: "", valid_email: "", valid_company:"", valid_phoneno:"", valid_skype: "", valid_website: "", valid_country: "", valid_message: "", firstnameMsg:"hide", lastnameMsg:"hide", emailMsg:"hide", companyMsg:"hide", phoneMsg:"hide", skypeMsg:"hide", websiteMsg:"hide", countriesMsg:"hide", messageMsg:"hide", toast:true});
        setValues({...values, firstname:"", lastname:"", email: "", phoneno: "", company: "", skype:"", website:"", country:"", message:""});
        setTimeout(() => {
          setState({ ...state,toast:false})
        }, 3000);
      }
  };

  useEffect( ()=>{ 
    setCountry(countries2.countries);
    setTimeout(() => {
      grecaptcha.reset();
    }, 800);
    // fetchPosts();
	} , []);

  const handleOnSubmit = e => {
    e.preventDefault();
    setLoader(true);
    const form = e.target;

    if(values.firstname === "") {
      setState({...state, valid_firstname: "is-invalid", firstnameMsg: "show"});
      setLoader(false);
      return false;
    } else if (values.firstname !== "") {
      setState({...state, valid_firstname: "is-valid", firstnameMsg: "hide"});
    } 
    if(values.lastname === "") {
      setState({...state, valid_lastname: "is-invalid", lastnameMsg: "show", valid_firstname: "is-valid", firstnameMsg: "hide"});
      setLoader(false);
      return false;
    } else if (values.lastname !== "") {
      setState({...state, valid_lastname: "is-valid", lastnameMsg: "hide"});
    } 
    if (values.email === "") {
      setState({...state, valid_email: "is-invalid", emailMsg: "show", valid_lastname: "is-valid", lastnameMsg: "hide", valid_firstname: "is-valid", firstnameMsg: "hide"});
      setLoader(false);
      return false;
    } else if (values.email !== "") {
      setState({...state, valid_email: "is-valid", emailMsg: "hide", valid_firstname: "is-valid", firstnameMsg: "hide"});
    } 
    if(values.company === "") {
      setState({...state, valid_company: "is-invalid", companyMsg: "show", valid_email: "is-valid", emailMsg: "hide", valid_lastname: "is-valid", lastnameMsg: "hide", valid_firstname: "is-valid", firstnameMsg: "hide"});
      setLoader(false);
      return false;
    } else if (values.company !== "") {
      setState({...state, valid_company: "is-valid", companyMsg: "hide"});
    } 
    if (values.phoneno === "") {
      setState({...state, valid_phoneno: "is-invalid", phoneMsg: "show", valid_company: "is-valid", companyMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_lastname: "is-valid", lastnameMsg: "hide", valid_firstname: "is-valid", firstnameMsg: "hide"});
      setLoader(false);
      return false;
    } else if(values.phoneno !== "") {
      setState({...state, valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
    }

    if (grecaptcha.getResponse() === '') {                            
      e.preventDefault();
      setState({ ...state, captcha:true, captchahide:"show", valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
      setLoader(false);
      setTimeout(() => { setState({ ...state,captcha:false, captchahide:"hide"}) }, 3000);
      return false;
    } else {
      setState({ ...state, captcha:false, captchahide:"hide", valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"})
    }

    
    setServerState({ submitting: true });
    axios({
      method: "post",
      // url: "https://post.mumara.com/demo2/curl2.php",
      url: "https://post.mumara.com/demo2/curl.php",
      // url: "https://shahbaz.dev.jt.hostingshouse.com/php/demo2/curl.php",
      data: new FormData(form)
      })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
    });
  };

  return(
      <Container sx={{ textAlign: `center` }}>
        <Box style={styles.wrow} className="contact">
          <Box  style={styles.w250}>
            <div className="info-box mb-5">
              <h3>Product Edition</h3>
              <p>Product edition is a very suitable choice for bulk mailers who need to send multiple campaigns for themselves and their clients.</p>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            
              <ul className="no-list">
                <li><i className="bi bi-check"></i> High speed contacts importing</li>
                <li><i className="bi bi-check"></i> Maximum Deliverability and Optimized Email Headers</li>
                <li><i className="bi bi-check"></i> Integration with Adstation and PowerMTA</li>
                <li><i className="bi bi-check"></i> Auto Server Setup (supports PowerMTA only)</li>
                <li><i className="bi bi-check"></i> Advanced Reporting System</li>
              </ul>
            </div>
          </Box>
          <Box  style={styles.w250}>
            <div className="info-box mb-5">
              <h3>ESP Edition</h3>
              <p>ESP edition of Mumara is the best choice for Email Service Providers and is a rapidly growing platform for the providers. It comes up with the complete suite of features that any ESP would want to implement for their clients.</p>
            
              <ul className="no-list">
                <li><i className="bi bi-check"></i> Advanced User Management</li>
                <li><i className="bi bi-check"></i> Staff Roles Management</li>
                <li><i className="bi bi-check"></i> Multi-Servers Management and IP(s) Assignment</li>
                <li><i className="bi bi-check"></i> Authentication Wizard for Clients to Setup DKIM, Domain Keys, SPF and CNAME records.</li>
                <li><i className="bi bi-check"></i> Supports Transactional Emailing (Compatible with PowerMTA)</li>
                <li><i className="bi bi-check"></i> Advanced Graphical Reporting System</li>
              </ul>
            </div>
          </Box>
        </Box>
        <ContentContainer variant='cards.paper-lg'>
          {
            loader == true ?
            <div className="preloading" id="preloading">
                <div className="preloader"></div>
            </div>
            :<></>
          }

          {
            state.toast == true ?
            <Toast content="Request Demo Form successfully submitted!" type="success" onClick={() => setState({...state, toast:false})} />
            : <></>
          }

          {
            state.captcha == true ?
            <Toast content="Please check the recaptcha" type="error" onClick={() => setState({...state, captcha:false})} />
            : <></>
          }

          <Helmet>
            <script src={`https://www.google.com/recaptcha/api.js?r=${Math.random(4)}`} async defer></script>
          </Helmet>
          
          
          <h2 className="css-8idint"  style={styles.mb0}>Request Demo</h2>
          <div className="css-1xmmrjk" style={styles.mb30}>PLEASE COMPLETE AND SUBMIT THE SHORT FORM BELOW TO SCHEDULE A FREE, <br />BUSINESS CONSULTATION WITH ONE OF OUR EXPERTS.</div>
          <form onSubmit={handleOnSubmit} method='post'>

            <Box style={styles.wrow}>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_firstname}>      
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    onChange={handleChange("firstname")}
                    value={values.firstname}
                  />
                </Box>
                <span className={`error-block error `+state.firstnameMsg}>This field is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_lastname}>       
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    onChange={handleChange("lastname")}
                    value={values.lastname}
                  />
                </Box>
                <span className={`error-block error `+state.lastnameMsg}>This field is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_email}>      
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    onChange={handleChange("email")}
                    value={values.email}
                  />
                </Box>
                <span className={`error-block error `+state.emailMsg}>Email Address is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_company}>      
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company"
                    onChange={handleChange("company")}
                    value={values.company}
                  />
                </Box>
                <span className={`error-block error `+state.companyMsg}>This field is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_phoneno}>       
                  <Input
                    type="text"
                    name="phoneno"
                    placeholder="Phone No"
                    onChange={handleChange("phoneno")}
                    value={values.phoneno}
                  />
                </Box>
                <span className={`error-block error `+state.phoneMsg}>Phone No is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_skype}>      
                  <Input
                    type="text"
                    name="skype"
                    placeholder="Skype"
                    onChange={handleChange("skype")}
                    value={values.skype}
                  />
                </Box>
                <span className={`error-block error `+state.skypeMsg}>This field is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_website}>     
                  <Input
                    type="text"
                    name="website"
                    placeholder="Website"
                    onChange={handleChange("website")}
                    value={values.website}
                  />
                </Box>
                <span className={`error-block error `+state.websiteMsg}>This field is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk countries-block ` + state.valid_countries}>    
                  {
                    contry !== undefined && contry.length > 0 ?
                    <Select
                      type="text"
                      name="country"
                      placeholder="Country"
                      onChange={handleChange("country")}
                      value={values.country}
                    >
                      <option>Select Country</option>
                      {contry.map(option => (
                          <option key={option.country_code} value={option.country_name}>
                            {option.country_name}
                          </option>
                        ))}
                    </Select>
                    : <></>
                  }
                </Box>
                <span className={`error-block error `+state.countriesMsg}>This field is required</span>
              </Box>

              <Box  style={styles.w100}>
                  <label className="label-control text-left">Maximum Emails Required to Deliver Per Hour</label> 
                <Box variant='forms.field' className="emailsquotablock">  
                
                  <div className="kt-radio-inline">
 
                    <label htmlFor="lessthen10k" className="kt-radio">
                      <input
                      type="radio"
                      id="lessthen10k"
                      name="emailsquota"
                      onChange={handleChange("emailsquota")}
                      value="less than 10K"
                    />
                        less than 10K
                        <span></span>
                    </label>

                    <label htmlFor="between10k50k" className="kt-radio">
                      <input
                      type="radio"
                      id="between10k50k"
                      name="emailsquota"
                      onChange={handleChange("emailsquota")}
                      value="between 10K and 50K"
                    />
                        between 10K and 50K
                        <span></span>
                    </label>

                    <label htmlFor="between50k250k" className="kt-radio">
                      <input
                      type="radio"
                      id="between50k250k"
                      name="emailsquota"
                      onChange={handleChange("emailsquota")}
                      value="between 50K and 250K"
                    />
                        between 50K and 250K
                        <span></span>
                    </label>

                    <label htmlFor="between250k1M" className="kt-radio">
                      <input
                      type="radio"
                      id="between250k1M"
                      name="emailsquota"
                      onChange={handleChange("emailsquota")}
                      value="between 250K and 1M"
                    />
                        between 250K and 1M
                        <span></span>
                    </label>

                    <label htmlFor="morethen1m" className="kt-radio">
                      <input
                      type="radio"
                      id="morethen1m"
                      name="emailsquota"
                      onChange={handleChange("emailsquota")}
                      value="more than 1M"
                    />
                        more than 1M
                        <span></span>
                    </label>

                  </div>
                </Box>
              </Box>

              <Box  style={styles.w100}>
                  <label className="label-control text-left">Looking For Emailing Servers?</label> 
                <Box variant='forms.field' className="emailsquotablock">  
                
                  <div className="kt-radio-inline">
 
                    <label htmlFor="yes" className="kt-radio">
                      <input
                      type="radio"
                      id="yes"
                      name="emailservers"
                      onChange={handleChange("emailservers")}
                      value="Yes"
                    />
                        Yes
                        <span></span>
                    </label>

                    <label htmlFor="no" className="kt-radio">
                      <input
                      type="radio"
                      id="no"
                      name="emailservers"
                      onChange={handleChange("emailservers")}
                      value="No"
                    />
                        No
                        <span></span>
                    </label>

                  </div>
                </Box>
              </Box>

              <Box  style={styles.w100}>
                <Box variant='forms.field' className="emailsquotablock">  
                
                  <label htmlFor="newsyes" className="kt-checkbox">
                    <input
                    type="checkbox"
                    id="newsyes"
                    name="newsletter"
                    onChange={handleChange("newsletter")}
                    value="Yes"
                  />
                      Add me to mailing list for Mumara newsletters and updates
                      <span></span>
                  </label>

                </Box>
              </Box>

              <Box  style={styles.w100}>
                <Box variant='forms.field' className="messageblock">      
                  <Textarea
                    type="multiline"
                    name="message"
                    placeholder="Message"
                    onChange={handleChange("message")}
                    value={values.message}
                  />
                </Box>
              </Box>

              <Box  style={styles.w100}>
                <Box variant='forms.field' className="messageblock bg-white">
                  {/* <div className="g-recaptcha" data-sitekey="6LeWnyYUAAAAAK4FRYeaoWHa_Wy-_QGmwdPY1dnt"></div> */}
                  <div className="g-recaptcha" data-sitekey="6LfOOxUTAAAAAJblc0i56yq0yoJj1vDd8Q9T0jGD"></div>
                </Box>
                <div className={`error-recaptcha `+state.captchahide}>Please check the recaptcha</div>
              </Box>

              <input type="hidden" name="url" value={state.url} />
              <input type="hidden" name="ip_address" value={state.ip_address} />
              <input type="hidden" name="insert_data" value="1" />

              <Box  style={styles.w101}>
                <Button style={styles.btnConct} type="submit">Submit & Continue</Button>
              </Box>

            </Box>

          </form>
        </ContentContainer>
      </Container>
  )
}

export default RequestDemo