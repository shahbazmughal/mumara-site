import React, { useState, useEffect } from 'react'
import { Container, Box, Input, Button, Textarea } from 'theme-ui'
import ContentContainer from '@solid-ui-components/ContentContainer'
import Toast from '../Toast'
import { Helmet } from "react-helmet"
import axios from "axios";
import './loader.css'

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
  fIcon33 : {
    paddingLeft: "10px",
    paddingTop: "-33px"
  },
  w50 : {
    width: "50%",
    maxWidth: "100%",
    flex: "0 0 auto",
    marginTop: "calc(2rem)",
    paddingLeft: "calc(2rem)",
    paddingRight: "calc(2rem)"
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
  mt33 :{marginTop:-`33px`},
  btnConct: {
    borderRadius:`6px`,
    fontWeight: '600',
    outline:`0 none`
  }
}

const Contacts = () => {

  const [submitted, setSubmitted] = useState(false)

  const [loader, setLoader] = useState(false);

  const [values, setValues] = React.useState({
		fullname:"",
		email: "",
		phoneno: "",
		subject:"",
		message:""
	});

  const [state, setState] = React.useState({
		fullname:"",
		email: "",
		phoneno: "",
		subject:"",
		message:"",
    valid_fullname: "",
    valid_email: "",
    valid_phoneno:"",
    valid_subject: "",
    valid_message: "",
    nameMsg:"hide",
    emailMsg:"hide",
    phoneMsg:"hide",
    subjectMsg:"hide",
    messageMsg:"hide", 
    ip_address: "",
    url: "",
    toast:false,
    captcha:false,
    captchahide: "hide"
	});

  const handleChange = name => event => {
	  setState({ ...state, [name]: event.target.value});
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
        setState({ ...state,  fullname:"", email: "", phoneno: "", subject:"", message:"", valid_fullname: "", valid_email: "", valid_phoneno:"", valid_subject: "", valid_message: "", nameMsg:"hide", emailMsg:"hide", phoneMsg:"hide", subjectMsg:"hide", messageMsg:"hide", toast:true,  valid_subject: "is-valid", subjectMsg: "hide",});
        setValues({...values,fullname:"",email: "",phoneno: "",subject:"",message:""});
        setTimeout(() => {
          setState({ ...state,toast:false})
        }, 3000);
      }
  };

  useEffect(() => {
    setTimeout(() => {
      grecaptcha.reset();
    }, 800);
  }, [])

  const handleOnSubmit = e => {
    e.preventDefault();
    setLoader(true);
    const form = e.target;

    if(values.fullname === "") {
      setState({...state, valid_fullname: "is-invalid", nameMsg: "show"});
      setLoader(false);
      return false;
    } else if (values.fullname !== "") {
      setState({...state, valid_fullname: "is-valid", nameMsg: "hide"});
    } 
    if (values.email === "") {
      setState({...state, valid_email: "is-invalid", emailMsg: "show", valid_fullname: "is-valid", nameMsg: "hide"});
      setLoader(false);
      return false;
    } else if (values.email !== "") {
      setState({...state, valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
    } 
    
    if (values.phoneno === "") {
      setState({...state, valid_phoneno: "is-invalid", phoneMsg: "show", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
      setLoader(false);
      return false;
    } else if(values.phoneno !== "") {
      setState({...state, valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
    }

    if (values.subject === "") {
      setState({...state, valid_subject: "is-invalid", subjectMsg: "show", valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
      setLoader(false);
      return false;
    } else if(values.phoneno !== "") {
      setState({...state, valid_subject: "is-valid", subjectMsg: "hide", valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
    }

    if (grecaptcha) {
      if (grecaptcha.getResponse() === '') {       
        console.log("Captcha Empty");                   
        e.preventDefault();
        setState({ ...state, captcha:true, captchahide:"show", valid_subject: "is-valid", subjectMsg: "hide", valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"});
        setLoader(false);
        setTimeout(() => { setState({ ...state,captcha:false, captchahide:"hide"}) }, 3000);
        return false;
      } else {
        setState({ ...state, captcha:false, captchahide:"hide", valid_subject: "is-valid", subjectMsg: "hide", valid_phoneno: "is-valid", phoneMsg: "hide", valid_email: "is-valid", emailMsg: "hide", valid_fullname: "is-valid", nameMsg: "hide"})                      
      }
    } else {
      setLoader(false);
    }
    
    setServerState({ submitting: true });
    axios({
      method: "post",
      // url: "https://post.mumara.com/contact/curl2.php",
      url: "https://post.mumara.com/contact/curl.php",
      // url: "https://shahbaz.dev.jt.hostingshouse.com/php/contact/curl.php",
      data: new FormData(form)
      })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, "Error", form);
    });
  };

  return(
      <Container sx={{ textAlign: `center` }}>
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
            <Toast content="Contact Form successfully submitted!" type="success" onClick={() => setState({...state, toast:false})} />
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
          
          <h2 className="css-8idint"  style={styles.mb0}>Contact Us</h2>
          <div className="css-1xmmrjk" style={styles.mb30}>PLEASE COMPLETE AND SUBMIT THE SHORT FORM BELOW TO SCHEDULE A FREE, <br />BUSINESS CONSULTATION WITH ONE OF OUR EXPERTS.</div>
          <form onSubmit={handleOnSubmit} method='post' className="contact-us-form">

            <Box style={styles.wrow}>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_fullname}>
                  <div style={styles.fIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1dy5z9e">
                      <circle fill="none" cx="12" cy="7" r="3"></circle>
                      <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 5-5S14.757 2 12 2zM12 10c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3S13.654 10 12 10zM21 21v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1H21z"></path>
                    </svg>
                  </div>        
                  <Input
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                    onChange={handleChange("fullname")}
                    value={values.fullname}
                  />
                </Box>
                <span className={`error-block error `+state.nameMsg}>This field is required</span>
              </Box>

              <Box  style={styles.w50}>
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_email}>
                  <div style={styles.fIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="css-1dy5z9e">
                      <path d="M20,4H4C2.897,4,2,4.897,2,6v12c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V6C22,4.897,21.103,4,20,4z M20,6v0.511 l-8,6.223L4,6.512V6H20z M4,18V9.044l7.386,5.745C11.566,14.93,11.783,15,12,15s0.434-0.07,0.614-0.211L20,9.044L20.002,18H4z"></path>
                    </svg>
                  </div>        
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
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_phoneno}>
                  <div style={styles.fIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="">
                    <path d="M17.707,12.293c-0.391-0.391-1.023-0.391-1.414,0l-1.594,1.594c-0.739-0.22-2.118-0.72-2.992-1.594 s-1.374-2.253-1.594-2.992l1.594-1.594c0.391-0.391,0.391-1.023,0-1.414l-4-4c-0.391-0.391-1.023-0.391-1.414,0L3.581,5.005 c-0.38,0.38-0.594,0.902-0.586,1.435c0.023,1.424,0.4,6.37,4.298,10.268s8.844,4.274,10.269,4.298c0.005,0,0.023,0,0.028,0 c0.528,0,1.027-0.208,1.405-0.586l2.712-2.712c0.391-0.391,0.391-1.023,0-1.414L17.707,12.293z M17.58,19.005 c-1.248-0.021-5.518-0.356-8.873-3.712c-3.366-3.366-3.692-7.651-3.712-8.874L7,4.414L9.586,7L8.293,8.293 C8.054,8.531,7.952,8.875,8.021,9.205c0.024,0.115,0.611,2.842,2.271,4.502s4.387,2.247,4.502,2.271 c0.333,0.071,0.674-0.032,0.912-0.271L17,14.414L19.586,17L17.58,19.005z"></path>
                  </svg>
                  </div>        
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
                <Box variant='forms.field' className={`fieldBlk ` + state.valid_subject}>
                  <div style={styles.fIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M7 7H17V9H7zM7 11H14V13H7z"/>
                    <path d="M20,2H4C2.897,2,2,2.897,2,4v18l5.333-4H20c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M20,16H6.667L4,18V4h16V16z"/>
                  </svg>
                  </div>        
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    onChange={handleChange("subject")}
                    value={values.subject}
                  />
                </Box>
                <span className={`error-block error `+state.subjectMsg}>Subject is required</span>
              </Box>

              <Box  style={styles.w100}>
                <Box variant='forms.field' className="messageblock">
                  <div style={styles.fIcon33}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M5,18v3.766l1.515-0.909l0,0L11.277,18H16c1.103,0,2-0.897,2-2V8c0-1.103-0.897-2-2-2H4C2.897,6,2,6.897,2,8v8 c0,1.103,0.897,2,2,2H5z M4,8h12v8h-5.277L7,18.234V16H4V8z"/>
                    <path d="M20,2h-1h-2.002H8C6.897,2,6,2.897,6,4h10.586H18c1.103,0,2,0.897,2,2v1.414V12v2c1.103,0,2-0.897,2-2V7V5V4 C22,2.897,21.103,2,20,2z"/>
                  </svg>
                  </div>        
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

              <Box style={styles.w101}>
                <Button type="submit" style={styles.btnConct} onClick={() => setSubmitted(true)}>Lets Talk</Button>
              </Box>

            </Box>

          </form>
        </ContentContainer>
      </Container>
  )
}

export default Contacts