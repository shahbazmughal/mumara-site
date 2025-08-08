import React, { Component } from "react";
import "react-rangeslider/lib/index.css";
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Slider from "react-rangeslider";
import {Link} from 'gatsby';
import "react-rangeslider/lib/index.css";
import transactionalItems from './products_transactional_all.json'


class TransactionalPricing extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 1,
        planName: "Machine - 1",
        price: "$47",
        link: "https://billing.mumara.com/store/mumara-machines/machine-1",
        button: "Signup",
        ram:"1 GB", cpu:"1 Core", storage: "10GB (SSD)", contacts: "Up to 10,000 contacts",
        ramp:"2%", cpup:"5%", strgp:"2%", contactsp:"1%",
        horizontal:50,
        symbol: "$",
        no_emails: "50000",
        month: "month",
        link1: "https://account.mumara.com/signup?pid=125",
        link2: "https://account.mumara.com/signup?pid=126",
        link3: "https://account.mumara.com/signup?pid=127",
        disabled_1: "",
        disabled_2: "",
        disabled_3: "",
        disabled_4: "",
        recomended0: "",
        recomended1: " show",
        recomended2: "",
        recomended3: "",
        disabled1: "",
        disabled2: "",
        disabled3: "",
        tHourlySpeed: 10000,
        tDailyLimit: 50000,
        tSendingDomain: 10,
        tBridges: 10,
        tTransactionalCredits: 50000,
        tWebhooksLimit: 5,
        tDedicatedIPs: 4,
        tLandingPages: 4,
        tPixels: 4,
        nPixels: 1,
        selected_mo:1,
        ddVal: 1,
        ma_tab_selected1: "tabs_selectedTab tab1",
        ma_tab_selected2: " tab2",
        items: transactionalItems?.products?.product ,
        es_price: 20,
        pr_price: 40,
        bu_price: 60
      };
  }

  handleChangeStart = () => {
    console.log("Change event started");
  };

  handleChange = (value) => {
      this.setState({
        value: value
      });
      if(this.state.selected_mo == 1) {
        if(this.state.value == 1) {
          this.setState({
            es_price:Math.round(this.state?.items[0]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[1]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[2]?.pricing?.USD?.monthly),
            no_emails: "50000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=125",
            link2: "https://account.mumara.com/signup?pid=126",
            link3: "https://account.mumara.com/signup?pid=127",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 10000,
            tDailyLimit: 50000,
            tSendingDomain: 10,
            tBridges: 10,
            tTransactionalCredits: 50000,
            tWebhooksLimit: 5,
            tDedicatedIPs: 4,
            tLandingPages: 4,
            tPixels: 4,
            price: "$47",
            planName: "Machine - 1",
            link: "https://billing.mumara.com/store/mumara-machines/machine-1",
            button: "Signup",
            ram:"1 GB", cpu:"1 Core", storage: "10GB (SSD)", contacts: "up to 10,000 contacts",
            ramp:"2%", cpup:"5%", strgp:"2%", contactsp:"1%"
          });
        } else if(this.state.value == 2) {
          this.setState({
            es_price:Math.round(this.state?.items[3]?.pricing?.USD?.monthly),
            pr_price: Math.round(this.state?.items[4]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[5]?.pricing?.USD?.monthly),
            no_emails: "100000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=83",
            link2: "https://account.mumara.com/signup?pid=123",
            link3: "https://account.mumara.com/signup?pid=124",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 20000,
            tDailyLimit: 100000,
            tSendingDomain: 20,
            tBridges: 20,
            tTransactionalCredits: 100000,
            tWebhooksLimit: 10,
            tDedicatedIPs: 8,
            tLandingPages: 5,
            tPixels: 5,
            price: "$97",
            planName: "Machine - 2",
            link: "https://billing.mumara.com/store/mumara-machines/machine-2",
            button: "Signup",
            ram:"2 GB", cpu:"1 Core", storage: "20GB (SSD)", contacts: "Up to 25,000 contacts",
            ramp:"4%", cpup:"5%", strgp:"4%", contactsp:"2%"
          });
        } else if(this.state.value  == 3) {
          this.setState({
            es_price:0,
            pr_price: Math.round(this.state?.items[6]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[7]?.pricing?.USD?.monthly),
            no_emails: "250000",
            disabled1: " disabled",
            link1: "#",
            disabled2: "",
            disabled3: "",
            link2: "https://account.mumara.com/signup?pid=128",
            link3: "https://account.mumara.com/signup?pid=84",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 50000,
            tDailyLimit: 250000,
            tSendingDomain: 25,
            tBridges: 25,
            tTransactionalCredits: 250000,
            tWebhooksLimit: 25,
            tDedicatedIPs: 16,
            tLandingPages: 10,
            tPixels: 10,
            price: "$147",
            planName: "Machine - 3",
            link: "https://billing.mumara.com/store/mumara-machines/machine-3",
            button: "Signup",
            ram:"4 GB", cpu:"2 Core", storage: "40GB (SSD)", contacts: "Up to 100,000 contacts",
            ramp:"8%", cpup:"10%", strgp:"8%", contactsp:"8%"
          });
        } else if(this.state.value == 4) {
          this.setState({
            es_price: 0,
            pr_price: Math.round(this.state?.items[8]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[9]?.pricing?.USD?.monthly),
            no_emails: "500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=129",
            link3: "https://account.mumara.com/signup?pid=130",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 100000,
            tDailyLimit: 500000,
            tSendingDomain: 50,
            tBridges: 50,
            tTransactionalCredits: 500000,
            tWebhooksLimit: 50,
            tDedicatedIPs: 24,
            tLandingPages: 12,
            tPixels: 12,
            price: "$197",
            planName: "Machine - 4",
            link: "https://billing.mumara.com/store/mumara-machines/machine-4",
            button: "Signup",
            ram:"8 GB", cpu:"4 Core", storage: "80GB (SSD)", contacts: "Up to 250,000 contacts",
            ramp:"16%", cpup:"20%", strgp:"16%", contactsp:"20%"
          });
        } else if(this.state.value == 5) {
          this.setState({
            es_price: 0,
            pr_price: Math.round(this.state?.items[10]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[11]?.pricing?.USD?.monthly),
            no_emails: "1000000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=85",
            link3: "https://account.mumara.com/signup?pid=132",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 200000,
            tDailyLimit: 1000000,
            tSendingDomain: 100,
            tBridges: 100,
            tTransactionalCredits: 1000000,
            tWebhooksLimit: 100,
            tDedicatedIPs: 32,
            tLandingPages: 15,
            tPixels: 15,
            price: "$397",
            planName: "Machine - 5",
            link: "https://billing.mumara.com/store/mumara-machines/machine-5",
            button: "Signup",
            ram:"16 GB", cpu:"6 Core", storage: "160GB (SSD)", contacts: "up to 1,000,000 contacts",
            ramp:"30%", cpup:"30%", strgp:"30%", contactsp:"35%"
          });
        } else if(this.state.value == 6) {
          this.setState({
            es_price: 0,
            pr_price: Math.round(this.state?.items[12]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[13]?.pricing?.USD?.monthly),
            no_emails: "2500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=86",
            link3: "https://account.mumara.com/signup?pid=133",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 500000,
            tDailyLimit: 2500000,
            tSendingDomain: 250,
            tBridges: 250,
            tTransactionalCredits: 2500000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$797",
            planName: "Machine - 6",
            link: "https://billing.mumara.com/store/mumara-machines/machine-6",
            button: "Signup",
            ram:"32 GB", cpu:"8 Core", storage: "320GB (SSD)", contacts: "up to 2,500,000 contacts",
            ramp:"45%", cpup:"45%", strgp:"45%", contactsp:"50%"
          });
        } else if(this.state.value == 7) {
          this.setState({
            es_price: 0,
            pr_price: Math.round(this.state?.items[14]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[15]?.pricing?.USD?.monthly),
            no_emails: "5000000",
            disabled1: " disabled",
            disabled2: " ",
            disabled3: "",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=134",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 1000000,
            tDailyLimit: 5000000,
            tSendingDomain: 500,
            tBridges: 500,
            tTransactionalCredits: 5000000,
            tWebhooksLimit: 300,
            tDedicatedIPs: 128,
            tLandingPages: 25,
            tPixels: 25,
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          });
        } else {
          this.setState({
            es_price: 0,
            pr_price: 0,
            bu_price: 0,
            no_emails: "5000000+",
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: " disabled",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=27",
            disabled_1: " disabled",
            disabled_2: " disabled",
            disabled_3: " disabled",
            disabled_4: " active",
            recomended0: " show",
            recomended1: " ",
            recomended2: " ",
            recomended3: " ",
            tHourlySpeed: "1000000+",
            tDailyLimit: "5000000+",
            tSendingDomain: "500+",
            tBridges: "500+",
            tTransactionalCredits: "5000000+",
            tWebhooksLimit: "300+",
            tDedicatedIPs: "128+",
            tLandingPages: "25+",
            tPixels: "25+",
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          });
        }
      } else {
        if(this.state.value == 1) {
          this.setState({
            es_price:20*10,
            pr_price: 40*10,
            bu_price: 60*10,
            no_emails: "50000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=01&billing=annually",
            link2: "https://account.mumara.com/signup?pid=11&billing=annually",
            link3: "https://account.mumara.com/signup?pid=21&billing=annually",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 10000,
            tDailyLimit: 50000,
            tSendingDomain: 10,
            tBridges: 10,
            tTransactionalCredits: 50000,
            tWebhooksLimit: 5,
            tDedicatedIPs: 4,
            tLandingPages: 4,
            tPixels: 4,
            price: "$47",
            planName: "Machine - 1",
            link: "https://billing.mumara.com/store/mumara-machines/machine-1",
            button: "Signup",
            ram:"1 GB", cpu:"1 Core", storage: "10GB (SSD)", contacts: "up to 10,000 contacts",
            ramp:"2%", cpup:"5%", strgp:"2%", contactsp:"1%"
          });
        } else if(this.state.value == 2) {
          this.setState({
            es_price:35*10,
            pr_price: 75*10,
            bu_price: 115*10,
            no_emails: "100000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=02&billing=annually",
            link2: "https://account.mumara.com/signup?pid=12&billing=annually",
            link3: "https://account.mumara.com/signup?pid=22&billing=annually",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 20000,
            tDailyLimit: 100000,
            tSendingDomain: 20,
            tBridges: 20,
            tTransactionalCredits: 100000,
            tWebhooksLimit: 10,
            tDedicatedIPs: 8,
            tLandingPages: 5,
            tPixels: 5,
            price: "$97",
            planName: "Machine - 2",
            link: "https://billing.mumara.com/store/mumara-machines/machine-2",
            button: "Signup",
            ram:"2 GB", cpu:"1 Core", storage: "20GB (SSD)", contacts: "Up to 25,000 contacts",
            ramp:"4%", cpup:"5%", strgp:"4%", contactsp:"2%"
          })
        } else if(this.state.value  == 3) {
          this.setState({
            es_price:0,
            pr_price: 175*10,
            bu_price: 275*10,
            no_emails: "250000",
            disabled1: " disabled",
            link1: "#",
            disabled2: "",
            disabled3: "",
            link2: "https://account.mumara.com/signup?pid=13&billing=annually",
            link3: "https://account.mumara.com/signup?pid=23&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 50000,
            tDailyLimit: 250000,
            tSendingDomain: 25,
            tBridges: 25,
            tTransactionalCredits: 250000,
            tWebhooksLimit: 25,
            tDedicatedIPs: 16,
            tLandingPages: 10,
            tPixels: 10,
            price: "$147",
            planName: "Machine - 3",
            link: "https://billing.mumara.com/store/mumara-machines/machine-3",
            button: "Signup",
            ram:"4 GB", cpu:"2 Core", storage: "40GB (SSD)", contacts: "Up to 100,000 contacts",
            ramp:"8%", cpup:"10%", strgp:"8%", contactsp:"8%"
          })
        } else if(this.state.value == 4) {
          this.setState({
            es_price: 0,
            pr_price: 325*10,
            bu_price: 525*10,
            no_emails: "500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=14&billing=annually",
            link3: "https://account.mumara.com/signup?pid=24&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 100000,
            tDailyLimit: 500000,
            tSendingDomain: 50,
            tBridges: 50,
            tTransactionalCredits: 500000,
            tWebhooksLimit: 50,
            tDedicatedIPs: 24,
            tLandingPages: 12,
            tPixels: 12,
            price: "$197",
            planName: "Machine - 4",
            link: "https://billing.mumara.com/store/mumara-machines/machine-4",
            button: "Signup",
            ram:"8 GB", cpu:"4 Core", storage: "80GB (SSD)", contacts: "Up to 250,000 contacts",
            ramp:"16%", cpup:"20%", strgp:"16%", contactsp:"20%"
          })
        } else if(this.state.value == 5) {
          this.setState({
            es_price: 0*10,
            pr_price: 600*10,
            bu_price: 1000*10,
            no_emails: "1000000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=15&billing=annually",
            link3: "https://account.mumara.com/signup?pid=25&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 200000,
            tDailyLimit: 1000000,
            tSendingDomain: 100,
            tBridges: 100,
            tTransactionalCredits: 1000000,
            tWebhooksLimit: 100,
            tDedicatedIPs: 32,
            tLandingPages: 15,
            tPixels: 15,
            price: "$397",
            planName: "Machine - 5",
            link: "https://billing.mumara.com/store/mumara-machines/machine-5",
            button: "Signup",
            ram:"16 GB", cpu:"6 Core", storage: "160GB (SSD)", contacts: "up to 1,000,000 contacts",
            ramp:"30%", cpup:"30%", strgp:"30%", contactsp:"35%"
          })
        } else if(this.state.value == 6) {
          this.setState({
            es_price: 0,
            pr_price: 1350*10,
            bu_price: 2025*10,
            no_emails: "2500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=16&billing=annually",
            link3: "https://account.mumara.com/signup?pid=26&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 500000,
            tDailyLimit: 2500000,
            tSendingDomain: 250,
            tBridges: 250,
            tTransactionalCredits: 2500000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$797",
            planName: "Machine - 6",
            link: "https://billing.mumara.com/store/mumara-machines/machine-6",
            button: "Signup",
            ram:"32 GB", cpu:"8 Core", storage: "320GB (SSD)", contacts: "up to 2,500,000 contacts",
            ramp:"45%", cpup:"45%", strgp:"45%", contactsp:"50%"
          })
        } else if(this.state.value == 7) {
          this.setState({
            es_price: 0,
            pr_price: 0,
            bu_price: 3645*10,
            no_emails: "5000000",
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: "",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=27&billing=annually",
            disabled_1: " disabled",
            disabled_2: " disabled",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 1000000,
            tDailyLimit: 5000000,
            tSendingDomain: 500,
            tBridges: 500,
            tTransactionalCredits: 5000000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          })
        } else {
          this.setState({
            es_price: 0,
            pr_price: 0,
            bu_price: 0,
            no_emails: "5000000",
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: " disabled",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=27&billing=annually",
            disabled_1: " disabled",
            disabled_2: " disabled",
            disabled_3: " disabled",
            disabled_4: " active",
            recomended0: " show",
            recomended1: " ",
            recomended2: " ",
            recomended3: " ",
            tHourlySpeed: 1000000,
            tDailyLimit: 5000000,
            tSendingDomain: 500,
            tBridges: 500,
            tTransactionalCredits: 5000000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          })
        }
      } 
  };

  handleChangeComplete = () => {
      console.log("Change event completed");
  };

  currencyChange = (e) => {
    console.log(e.target.value);
    var cur = e.target.value;
    if(cur == "usd") {
      this.setState({...this.state, symbol:"$"});
    } else if(cur == "eur") {
      this.setState({...this.state, symbol:"€"});
    } else {
      this.setState({...this.state, symbol:"£"});
    }
      
  }
    
    render() {
      const horizontalLabels = {
        1: "50,000",
        2: "100,000",
        3: "250,000",
        4: "500,000",
        5: "1,000,000",
        6: "2,500,000",
        7: "5,000,000",
        8: "5,000,000+"
      }
      const formatkg = value => value + ' kg';
      const { value, horizontal } = this.state;
      const monthClick =()=> {
        this.setState({...this.state, selected_mo:1, ma_tab_selected1: " tabs_selectedTab", ma_tab_selected2: " "});
        if(this.state.value == 1) {
          this.setState({
            es_price:Math.round(this.state?.items[0]?.pricing?.USD?.monthly),
            pr_price: Math.round(this.state?.items[1]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[2]?.pricing?.USD?.monthly),
            no_emails: "50000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=125",
            link2: "https://account.mumara.com/signup?pid=126",
            link3: "https://account.mumara.com/signup?pid=127",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 10000,
            tDailyLimit: 50000,
            tSendingDomain: 10,
            tBridges: 10,
            tTransactionalCredits: 50000,
            tWebhooksLimit: 5,
            tDedicatedIPs: 4,
            tLandingPages: 4,
            tPixels: 4,
            price: "$47",
            planName: "Machine - 1",
            link: "https://billing.mumara.com/store/mumara-machines/machine-1",
            button: "Signup",
            ram:"1 GB", cpu:"1 Core", storage: "10GB (SSD)", contacts: "up to 10,000 contacts",
            ramp:"2%", cpup:"5%", strgp:"2%", contactsp:"1%"
          });
        } else if(this.state.value == 2) {
          this.setState({
            es_price:Math.round(this.state?.items[3]?.pricing?.USD?.monthly),
            pr_price: Math.round(this.state?.items[4]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[5]?.pricing?.USD?.monthly),
            no_emails: "100000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=83",
            link2: "https://account.mumara.com/signup?pid=123",
            link3: "https://account.mumara.com/signup?pid=124",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 20000,
            tDailyLimit: 100000,
            tSendingDomain: 20,
            tBridges: 20,
            tTransactionalCredits: 100000,
            tWebhooksLimit: 10,
            tDedicatedIPs: 8,
            tLandingPages: 5,
            tPixels: 5,
            price: "$97",
            planName: "Machine - 2",
            link: "https://billing.mumara.com/store/mumara-machines/machine-2",
            button: "Signup",
            ram:"2 GB", cpu:"1 Core", storage: "20GB (SSD)", contacts: "Up to 25,000 contacts",
            ramp:"4%", cpup:"5%", strgp:"4%", contactsp:"2%"
          });
        } else if(this.state.value  == 3) {
          this.setState({
            es_price:0,
            pr_price: Math.round(this.state?.items[6]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[7]?.pricing?.USD?.monthly),
            no_emails: "250000",
            disabled1: " disabled",
            link1: "#",
            disabled2: "",
            disabled3: "",
            link2: "https://account.mumara.com/signup?pid=128",
            link3: "https://account.mumara.com/signup?pid=84",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 50000,
            tDailyLimit: 250000,
            tSendingDomain: 25,
            tBridges: 25,
            tTransactionalCredits: 250000,
            tWebhooksLimit: 25,
            tDedicatedIPs: 16,
            tLandingPages: 10,
            tPixels: 10,
            price: "$147",
            planName: "Machine - 3",
            link: "https://billing.mumara.com/store/mumara-machines/machine-3",
            button: "Signup",
            ram:"4 GB", cpu:"2 Core", storage: "40GB (SSD)", contacts: "Up to 100,000 contacts",
            ramp:"8%", cpup:"10%", strgp:"8%", contactsp:"8%"
          });
        } else if(this.state.value == 4) {
          this.setState({
            es_price: 0,
            pr_price: Math.round(this.state?.items[8]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[9]?.pricing?.USD?.monthly),
            no_emails: "500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=129",
            link3: "https://account.mumara.com/signup?pid=130",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 100000,
            tDailyLimit: 500000,
            tSendingDomain: 50,
            tBridges: 50,
            tTransactionalCredits: 500000,
            tWebhooksLimit: 50,
            tDedicatedIPs: 24,
            tLandingPages: 12,
            tPixels: 12,
            price: "$197",
            planName: "Machine - 4",
            link: "https://billing.mumara.com/store/mumara-machines/machine-4",
            button: "Signup",
            ram:"8 GB", cpu:"4 Core", storage: "80GB (SSD)", contacts: "Up to 250,000 contacts",
            ramp:"16%", cpup:"20%", strgp:"16%", contactsp:"20%"
          });
        } else if(this.state.value == 5) {
          this.setState({
            es_price: 0,
            pr_price: Math.round(this.state?.items[10]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[11]?.pricing?.USD?.monthly),
            no_emails: "1000000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=85",
            link3: "https://account.mumara.com/signup?pid=132",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 200000,
            tDailyLimit: 1000000,
            tSendingDomain: 100,
            tBridges: 100,
            tTransactionalCredits: 1000000,
            tWebhooksLimit: 100,
            tDedicatedIPs: 32,
            tLandingPages: 15,
            tPixels: 15,
            price: "$397",
            planName: "Machine - 5",
            link: "https://billing.mumara.com/store/mumara-machines/machine-5",
            button: "Signup",
            ram:"16 GB", cpu:"6 Core", storage: "160GB (SSD)", contacts: "up to 1,000,000 contacts",
            ramp:"30%", cpup:"30%", strgp:"30%", contactsp:"35%"
          });
        } else if(this.state.value == 6) {
          this.setState({
            es_price: 0,
            pr_price: Math.round(this.state?.items[12]?.pricing?.USD?.monthly),
            bu_price: Math.round(this.state?.items[13]?.pricing?.USD?.monthly),
            no_emails: "2500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=86",
            link3: "https://account.mumara.com/signup?pid=133",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 500000,
            tDailyLimit: 2500000,
            tSendingDomain: 250,
            tBridges: 250,
            tTransactionalCredits: 2500000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$797",
            planName: "Machine - 6",
            link: "https://billing.mumara.com/store/mumara-machines/machine-6",
            button: "Signup",
            ram:"32 GB", cpu:"8 Core", storage: "320GB (SSD)", contacts: "up to 2,500,000 contacts",
            ramp:"45%", cpup:"45%", strgp:"45%", contactsp:"50%"
          });
        } else if(this.state.value == 7) {
          this.setState({
            es_price: 0,
            pr_price: 0,
            bu_price: Math.round(this.state?.items[14]?.pricing?.USD?.monthly),
            no_emails: "5000000",
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: "",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=134",
            disabled_1: " disabled",
            disabled_2: " disabled",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 1000000,
            tDailyLimit: 5000000,
            tSendingDomain: 500,
            tBridges: 500,
            tTransactionalCredits: 5000000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          });
        } else {
          this.setState({
            es_price: 0,
            pr_price: 0,
            bu_price: 0,
            no_emails: "5000000",
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: " disabled",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=27",
            disabled_1: " disabled",
            disabled_2: " disabled",
            disabled_3: " disabled",
            disabled_4: " active",
            recomended0: " show",
            recomended1: " ",
            recomended2: " ",
            recomended3: " ",
            tHourlySpeed: 1000000,
            tDailyLimit: 5000000,
            tSendingDomain: 500,
            tBridges: 500,
            tTransactionalCredits: 5000000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          });
        }
      }
      const annualClick =()=> {
        this.setState({...this.state, selected_mo:2, ma_tab_selected1: " ", ma_tab_selected2:" tabs_selectedTab"});
        if(this.state.value == 1) {
          this.setState({
            es_price:20*10,
            pr_price: 40*10,
            bu_price: 60*10,
            no_emails: "50000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=01&billing=annually",
            link2: "https://account.mumara.com/signup?pid=11&billing=annually",
            link3: "https://account.mumara.com/signup?pid=21&billing=annually",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 10000,
            tDailyLimit: 50000,
            tSendingDomain: 10,
            tBridges: 10,
            tTransactionalCredits: 50000,
            tWebhooksLimit: 5,
            tDedicatedIPs: 4,
            tLandingPages: 4,
            tPixels: 4,
            price: "$47",
            planName: "Machine - 1",
            link: "https://billing.mumara.com/store/mumara-machines/machine-1",
            button: "Signup",
            ram:"1 GB", cpu:"1 Core", storage: "10GB (SSD)", contacts: "up to 10,000 contacts",
            ramp:"2%", cpup:"5%", strgp:"2%", contactsp:"1%"
          });
        } else if(this.state.value == 2) {
          this.setState({
            es_price:35*10,
            pr_price: 75*10,
            bu_price: 115*10,
            no_emails: "100000",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            link1: "https://account.mumara.com/signup?pid=02&billing=annually",
            link2: "https://account.mumara.com/signup?pid=12&billing=annually",
            link3: "https://account.mumara.com/signup?pid=22&billing=annually",
            disabled_1: "",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            tHourlySpeed: 20000,
            tDailyLimit: 100000,
            tSendingDomain: 20,
            tBridges: 20,
            tTransactionalCredits: 100000,
            tWebhooksLimit: 10,
            tDedicatedIPs: 8,
            tLandingPages: 5,
            tPixels: 5,
            price: "$97",
            planName: "Machine - 2",
            link: "https://billing.mumara.com/store/mumara-machines/machine-2",
            button: "Signup",
            ram:"2 GB", cpu:"1 Core", storage: "20GB (SSD)", contacts: "Up to 25,000 contacts",
            ramp:"4%", cpup:"5%", strgp:"4%", contactsp:"2%"
          })
        } else if(this.state.value  == 3) {
          this.setState({
            es_price:0,
            pr_price: 175*10,
            bu_price: 275*10,
            no_emails: "250000",
            disabled1: " disabled",
            link1: "#",
            disabled2: "",
            disabled3: "",
            link2: "https://account.mumara.com/signup?pid=13&billing=annually",
            link3: "https://account.mumara.com/signup?pid=23&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 50000,
            tDailyLimit: 250000,
            tSendingDomain: 25,
            tBridges: 25,
            tTransactionalCredits: 250000,
            tWebhooksLimit: 25,
            tDedicatedIPs: 16,
            tLandingPages: 10,
            tPixels: 10,
            price: "$147",
            planName: "Machine - 3",
            link: "https://billing.mumara.com/store/mumara-machines/machine-3",
            button: "Signup",
            ram:"4 GB", cpu:"2 Core", storage: "40GB (SSD)", contacts: "Up to 100,000 contacts",
            ramp:"8%", cpup:"10%", strgp:"8%", contactsp:"8%"
          })
        } else if(this.state.value == 4) {
          this.setState({
            es_price: 0,
            pr_price: 325*10,
            bu_price: 525*10,
            no_emails: "500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=14&billing=annually",
            link3: "https://account.mumara.com/signup?pid=24&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 100000,
            tDailyLimit: 500000,
            tSendingDomain: 50,
            tBridges: 50,
            tTransactionalCredits: 500000,
            tWebhooksLimit: 50,
            tDedicatedIPs: 24,
            tLandingPages: 12,
            tPixels: 12,
            price: "$197",
            planName: "Machine - 4",
            link: "https://billing.mumara.com/store/mumara-machines/machine-4",
            button: "Signup",
            ram:"8 GB", cpu:"4 Core", storage: "80GB (SSD)", contacts: "Up to 250,000 contacts",
            ramp:"16%", cpup:"20%", strgp:"16%", contactsp:"20%"
          })
        } else if(this.state.value == 5) {
          this.setState({
            es_price: 0*10,
            pr_price: 600*10,
            bu_price: 1000*10,
            no_emails: "1000000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=15&billing=annually",
            link3: "https://account.mumara.com/signup?pid=25&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            tHourlySpeed: 200000,
            tDailyLimit: 1000000,
            tSendingDomain: 100,
            tBridges: 100,
            tTransactionalCredits: 1000000,
            tWebhooksLimit: 100,
            tDedicatedIPs: 32,
            tLandingPages: 15,
            tPixels: 15,
            price: "$397",
            planName: "Machine - 5",
            link: "https://billing.mumara.com/store/mumara-machines/machine-5",
            button: "Signup",
            ram:"16 GB", cpu:"6 Core", storage: "160GB (SSD)", contacts: "up to 1,000,000 contacts",
            ramp:"30%", cpup:"30%", strgp:"30%", contactsp:"35%"
          })
        } else if(this.state.value == 6) {
          this.setState({
            es_price: 0,
            pr_price: 1350*10,
            bu_price: 2025*10,
            no_emails: "2500000",
            disabled1: " disabled",
            disabled2: "",
            disabled3: "",
            link1: "#",
            link2: "https://account.mumara.com/signup?pid=16&billing=annually",
            link3: "https://account.mumara.com/signup?pid=26&billing=annually",
            disabled_1: " disabled",
            disabled_2: "",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 500000,
            tDailyLimit: 2500000,
            tSendingDomain: 250,
            tBridges: 250,
            tTransactionalCredits: 2500000,
            tWebhooksLimit: 200,
            tDedicatedIPs: 64,
            tLandingPages: 20,
            tPixels: 20,
            price: "$797",
            planName: "Machine - 6",
            link: "https://billing.mumara.com/store/mumara-machines/machine-6",
            button: "Signup",
            ram:"32 GB", cpu:"8 Core", storage: "320GB (SSD)", contacts: "up to 2,500,000 contacts",
            ramp:"45%", cpup:"45%", strgp:"45%", contactsp:"50%"
          })
        } else if(this.state.value == 7) {
          this.setState({
            es_price: 0,
            pr_price: 0,
            bu_price: 3645*10,
            no_emails: "5000000",
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: "",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=27&billing=annually",
            disabled_1: " disabled",
            disabled_2: " disabled",
            disabled_3: "",
            disabled_4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            tHourlySpeed: 1000000,
            tDailyLimit: 5000000,
            tSendingDomain: 500,
            tBridges: 500,
            tTransactionalCredits: 5000000,
            tWebhooksLimit: 300,
            tDedicatedIPs: 128,
            tLandingPages: 25,
            tPixels: 25,
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          })
        } else {
          this.setState({
            es_price: 0,
            pr_price: 0,
            bu_price: 0,
            no_emails: "5000000",
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: " disabled",
            link1: "#",
            link2: "#",
            link3: "https://account.mumara.com/signup?pid=27&billing=annually",
            disabled_1: " disabled",
            disabled_2: " disabled",
            disabled_3: " disabled",
            disabled_4: " active",
            recomended0: " show",
            recomended1: " ",
            recomended2: " ",
            recomended3: " ",
            tHourlySpeed: "1000000+",
            tDailyLimit: "5000000+",
            tSendingDomain: "500+",
            tBridges: "500=",
            tTransactionalCredits: "5000000+",
            tWebhooksLimit: "300+",
            tDedicatedIPs: "128+",
            tLandingPages: "25+",
            tPixels: "25+",
            price: "$6397",
            planName: "Machine - 10",
            link: "https://billing.mumara.com/store/mumara-machines/machine-10",
            button: "Signup",
            ram:"192 GB", cpu:"32 Core", storage: "1920GB (SSD)", contacts: "up to 100,000,000+ contacts",
            ramp:"100%", cpup:"100%", strgp:"100%", contactsp:"100%"
          })
        }
      }
      const numberFormat =(x)=> {
        x = x.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x))
            x = x.replace(pattern, "$1,$2");
        return x;
      }
      return (
        <Box className="newletter-main">
          <Box className="newslettetr-head">
            <div className="news-heading">Personalized Packages</div>
            <div className="slider-input-blk css-vurnku">
              <h3>Choose your plan!</h3>
              <div className="news-desc">Select your Monthly email volume?</div>
            </div>
            <div className="css-n8ejw4">
              <Slider
                min={1}
                max={8}
                step={1}
                value={value}
                tooltip={false}
                labels={horizontalLabels}
                format={formatkg}
                onChangeStart={this.handleChangeStart}
                onChange={this.handleChange}
                onChangeComplete={this.handleChangeComplete}
              />
            </div>
            <div className={`monep-container n-pkg-blk-sm enterprise ${this.state.disabled_4} `}>
              <div className="rel-blk">
                <div className="enter-blk">
                  <div className={`recomended ` + this.state.recomended0}><span>Recommended</span></div>
                  <div className="pb-head">
                    <h3>Enterprise</h3>
                  </div>
                  <div className="pb-body">
                    <b className="pb-priceBlk">Unlimited</b>
                    <div className="linkBlock">
                      <Link to="https://www.mumara.com/contact-us" target="_blank" className="btn btn-info btn-order-pb" >Contact Sales</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="css-1l6651k one-pricing-new d-none">
              <div className="react-tabs" data-tabs="true">
                <ul className="tabs_tabList" role="tablist">
                  <li className={`tabs_tab `+this.state.ma_tab_selected1} onClick={monthClick} data-selected={this.state.selected_mo} data-dd={this.state.ddVal}>Monthly</li>
                  <li className={`tabs_tab `+this.state.ma_tab_selected2} onClick={annualClick} data-selected={this.state.selected_mo} data-dd={this.state.ddVal}>Annually</li>
                </ul>
                <div className="css-jgj9px"></div>
              </div>
            </div>
            <div className="currencyBlock d-none hide">
              <div className="cr-desc">Select your currency:</div>
              <div className="currencyDD">
                <select className="cr-dd" defaultValue="usd" onChange={this.currencyChange}>
                  <option value="usd">$ USD</option>
                  <option value="eur">€ EUR</option>
                  <option value="gbp">£ GBP</option>
                </select>
              </div>
            </div>
          </Box>
          <Container className="monep-container">
              <Box className="row newletter-packages-row">

                <Box className="col-md-4">
                  <div className={`n-pkg-blk essential ${this.state.disabled_1}`}>
                    <div className={`recomended ` + this.state.recomended1}><span>Recommended</span></div>
                    <div className="pb-head">
                      <h3>Essential</h3>
                      <p>Empower your business with foundational email features.</p>
                    </div>
                    <div className="pb-body">
                      <div className="pb-priceBlk">
                        {
                          this.state.es_price > 0 ? 
                          <>
                          <span className="pr-curr-symbol">{this.state.symbol}</span>
                          <span className="pr-price-main">{numberFormat(this.state.es_price)}</span>
                          /<span className="tenure">{this.state.month}</span>
                          </> :
                          <span className="dashprice">
                          -
                          </span>
                        }
                        
                      </div>
                      <div className="linkBlock">
                        <Link to={this.state.link1} className={`btn btn-info btn-order-pb ${this.state.disabled1}` } >Signup</Link>
                      </div>
                      <div className="view-limits-block pb-feature-blk">
                        <div className="features-desc limits-all">
                          <span className="tooltip">
                            <div className="limits-head">Business Limits</div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                              <span className="limit-value">{this.state.tHourlySpeed}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                              <span className="limit-value">{this.state.tDailyLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                              <span className="limit-value">{this.state.tSendingDomain}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                              <span className="limit-value">{this.state.tBridges}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                              <span className="limit-value">{this.state.tTransactionalCredits}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Webhook Limits</span>
                              <span className="limit-value">{this.state.tWebhooksLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Max Dedicated IPs Support</span>
                              <span className="limit-value">{this.state.tDedicatedIPs}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                              <span className="limit-value">{this.state.tLandingPages}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                              <span className="limit-value">{this.state.tWebhooksLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                          </span>
                          <span className="fdesc">View Limits</span>
                        </div>
                      </div>
                      <div className="pb-feature-blk">

                        <div className="features-head">Advanced Deliverability Options</div>
                        <div className="features-desc">
                          <span className="tooltip">Manage and authenticate your sending domains.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Sending Domains</span><span className="fdesc"></span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">DKIM adds a digital signature to each email, which verifies that the email was sent from your domain and hasn't been tampered with during transit. This helps in improving email deliverability and protecting against email spoofing.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">DKIM Authentication</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Use custom bounce domains to manage and analyze email bounces under your own domain, enhancing brand consistency and trust. This also helps in segregating transactional and marketing email traffic, improving deliverability insights.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Custom Bounce Domains</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Implement branded tracking domains for all the links in your emails. This not only masks third-party tracking services but also strengthens your brand’s identity and increases recipient trust in the safety of the links they are clicking.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Tracking Domains Branding</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Use dedicated IP addresses for sending emails.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Dedicated IPs</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Group IPs for specific sending strategies.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Dedicated Pools</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Create SMTP accounts for transactional emailing.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">SMTP Relays (Bridges)</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Link SMTP bridges to specific IP pools.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Bridges Binding to Dedicated Pools</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Send transactional emails through API integration.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Transactional Email API</span>
                        </div>

                        <div className="features-head">Automation & Integration</div>
                        <div className="features-desc">
                          <span className="tooltip">Integrate with external services via real-time data hooks.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Webhooks</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Utilize templates that automatically adjust content based on subscriber data, ensuring personalized and relevant communications.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Dynamic Templates</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Incorporate individual recipient data into your emails effortlessly with Mail Merge, personalizing each message at scale.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Mail Merge</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Access Mumara functionalities programmatically.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">RESTFUL API</span>
                        </div>

                        <div className="features-head">Monitoring & Reporting</div>
                        <div className="features-desc">
                          <span className="tooltip">Detailed reports on email delivery statuses.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Delivery Reports</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Processes the failed messages and flag them.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Bounce Processing</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Handle spam complaints effectively.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Complaints Processing</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Oversee the queue of emails waiting to be sent.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Email Queue Management</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Monitor when emails are opened.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Open Tracking</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Track clicks on links within emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Click Tracking</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Detailed reporting on the geographical locations from where the emails are being opened or clicked.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Geographical Reporting</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Insights into how subscribers are interacting with emails.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Engagement Reports</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Keep an eye on your sender reputation.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Reputation Monitoring</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Continuously monitor and manage your sender status to avoid being blacklisted, ensuring optimal deliverability of your emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Blacklist Monitoring</span>
                        </div>

                        <div className="features-head">Security & Compliance</div>
                        <div className="features-desc">
                          <span className="tooltip">How long messages are stored.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Log Retention (3 Days)</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Track authentication activities for security.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Authentication Logs</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Enhance account security by applying another layer of authentication.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Two Factor Authentication</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Secure account access by whitelisting IPs.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">IP Whitelisting</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Manage active sessions for additional security.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Session Management</span>
                        </div>

                        <div className="features-head">Support</div>
                        <div className="features-desc">
                          <span className="tooltip">Access the new features before the official launch.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">New Features Early Access</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Connect and collaborate with other users to gain insights and share solutions in our vibrant Mumara Community.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Community Support</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Access a wealth of information with our extensive Knowledgebase, your go-to resource for quick answers and in-depth guidance.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Knowledgebase</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Explore our detailed Documentation for easy-to-follow instructions and comprehensive insights into all Mumara features.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Documentation</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Reach out to our dedicated Helpdesk for personalized assistance and expert support whenever you need it.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Helpdesk</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Get immediate answers with our Live Chat support, where our experts are ready to help you in real-time.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Live Chat</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Experience dependable service with our SLA, ensuring top-tier performance and reliability for your email marketing campaigns.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">SLA (Service Level Agreement)</span>
                        </div>
                        
                      </div>
                      <div className="linkBlock footer">
                        <Link to={this.state.link1} className={`btn btn-info btn-order-pb ${this.state.disabled1}` } >Signup</Link>
                      </div>
                    </div>
                  </div>
                </Box>

                <Box className="col-md-4">
                  <div className={`n-pkg-blk professional ${this.state.disabled_2}`}>
                    <div className={`recomended ` + this.state.recomended2}><span>Recommended</span></div>
                    <div className="pb-head">
                      <h3>Professional</h3>
                      <p>Take ownership of your sending to maximize your email delivery.</p>
                    </div>
                    <div className="pb-body">
                      <div className="pb-priceBlk">
                        {
                          this.state.pr_price > 0 ? 
                          <>
                          <span className="pr-curr-symbol">{this.state.symbol}</span>
                          <span className="pr-price-main">{numberFormat(this.state.pr_price)}</span>
                          /<span className="tenure">{this.state.month}</span>
                          </> :
                          <span className="dashprice">
                          -
                          </span>
                        }
                      </div>
                      <div className="linkBlock">
                        <Link to={this.state.link2} className={`btn btn-info btn-order-pb ${this.state.disabled2}` }>Signup</Link>
                      </div>
                      <div className="view-limits-block pb-feature-blk">
                        <div className="features-desc limits-all">
                          <span className="tooltip">
                            <div className="limits-head">Professional Limits</div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                              <span className="limit-value">{this.state.tHourlySpeed}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                              <span className="limit-value">{this.state.tDailyLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                              <span className="limit-value">{this.state.tSendingDomain}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                              <span className="limit-value">{this.state.tBridges}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                              <span className="limit-value">{this.state.tTransactionalCredits}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Webhook Limits</span>
                              <span className="limit-value">{this.state.tWebhooksLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Max Dedicated IPs Support</span>
                              <span className="limit-value">{this.state.tDedicatedIPs}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                              <span className="limit-value">{this.state.tLandingPages}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                              <span className="limit-value">{this.state.tWebhooksLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                          </span>
                          <span className="fdesc">View Limits</span>
                        </div>
                      </div>
                      <div className="pb-feature-blk">

                        <div className="features-head">Advanced Deliverability Options</div>
                        <div className="features-desc">
                          <span className="tooltip">Manage and authenticate your sending domains.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Sending Domains</span><span className="fdesc"></span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">DKIM adds a digital signature to each email, which verifies that the email was sent from your domain and hasn't been tampered with during transit. This helps in improving email deliverability and protecting against email spoofing.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">DKIM Authentication</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Use custom bounce domains to manage and analyze email bounces under your own domain, enhancing brand consistency and trust. This also helps in segregating transactional and marketing email traffic, improving deliverability insights.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Custom Bounce Domains</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Implement branded tracking domains for all the links in your emails. This not only masks third-party tracking services but also strengthens your brand’s identity and increases recipient trust in the safety of the links they are clicking.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Tracking Domains Branding</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Use dedicated IP addresses for sending emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Dedicated IPs</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Group IPs for specific sending strategies.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Dedicated Pools</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Create SMTP accounts for transactional emailing.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">SMTP Relays (Bridges)</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Link SMTP bridges to specific IP pools.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Bridges Binding to Dedicated Pools</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Send transactional emails through API integration.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Transactional Email API</span>
                        </div>

                        <div className="features-head">Automation & Integration</div>
                        <div className="features-desc">
                          <span className="tooltip">Integrate with external services via real-time data hooks.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Webhooks</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Utilize templates that automatically adjust content based on subscriber data, ensuring personalized and relevant communications.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Dynamic Templates</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Incorporate individual recipient data into your emails effortlessly with Mail Merge, personalizing each message at scale.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">Mail Merge</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Access Mumara functionalities programmatically.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">RESTFUL API</span>
                        </div>

                        <div className="features-head">Monitoring & Reporting</div>
                        <div className="features-desc">
                          <span className="tooltip">Detailed reports on email delivery statuses.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Delivery Reports</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Processes the failed messages and flag them.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Bounce Processing</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Handle spam complaints effectively.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Complaints Processing</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Oversee the queue of emails waiting to be sent.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Email Queue Management</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Monitor when emails are opened.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Open Tracking</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Track clicks on links within emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Click Tracking</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Detailed reporting on the geographical locations from where the emails are being opened or clicked.</span>
                          <i className="bi bi-check bg-success"></i>
                          <span className="fdesc">Geographical Reporting</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Insights into how subscribers are interacting with emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Engagement Reports</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Keep an eye on your sender reputation.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Reputation Monitoring</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Continuously monitor and manage your sender status to avoid being blacklisted, ensuring optimal deliverability of your emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Blacklist Monitoring</span>
                        </div>

                        <div className="features-head">Security & Compliance</div>
                        <div className="features-desc">
                          <span className="tooltip">How long messages are stored.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Log Retention (7 Days)</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Track authentication activities for security.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Authentication Logs</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Enhance account security by applying another layer of authentication.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Two Factor Authentication</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Secure account access by whitelisting IPs.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">IP Whitelisting</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Manage active sessions for additional security.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Session Management</span>
                        </div>

                        <div className="features-head">Support</div>
                        <div className="features-desc">
                          <span className="tooltip">Access the new features before the official launch.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">New Features Early Access</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Connect and collaborate with other users to gain insights and share solutions in our vibrant Mumara Community.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Community Support</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Access a wealth of information with our extensive Knowledgebase, your go-to resource for quick answers and in-depth guidance.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Knowledgebase</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Explore our detailed Documentation for easy-to-follow instructions and comprehensive insights into all Mumara features.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Documentation</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Reach out to our dedicated Helpdesk for personalized assistance and expert support whenever you need it.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Helpdesk</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Get immediate answers with our Live Chat support, where our experts are ready to help you in real-time.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Live Chat</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Experience dependable service with our SLA, ensuring top-tier performance and reliability for your email marketing campaigns.</span>
                          <i className="bi bi-x bg-danger"></i>
                          <span className="fdesc">SLA (Service Level Agreement)</span>
                        </div>
                        
                      </div>
                      <div className="linkBlock footer">
                        <Link to={this.state.link2} className={`btn btn-info btn-order-pb ${this.state.disabled2}` }>Signup</Link>
                      </div>
                    </div>
                  </div>
                </Box>

                <Box className="col-md-4">
                  <div className={`n-pkg-blk business ${this.state.disabled_3}`}>
                    <div className={`recomended ` + this.state.recomended3}><span>Recommended</span></div>
                    <div className="pb-head">
                      <h3>Business</h3>
                      <p>Amplify your email program with extra support from our team.</p>
                    </div>
                    <div className="pb-body">
                      <div className="pb-priceBlk">
                        {
                          this.state.bu_price > 0 ? 
                          <>
                          <span className="pr-curr-symbol">{this.state.symbol}</span>
                          <span className="pr-price-main">{numberFormat(this.state.bu_price)}</span>
                          /<span className="tenure">{this.state.month}</span>
                          </> :
                          <span className="dashprice">
                          -
                          </span>
                        }
                        
                      </div>
                      <div className="linkBlock">
                        <Link to={this.state.link3} className={`btn btn-info btn-order-pb ${this.state.disabled3}` }>Signup</Link>
                      </div>
                      <div className="view-limits-block pb-feature-blk">
                        <div className="features-desc limits-all">
                          <span className="tooltip">
                            <div className="limits-head">Business Limits</div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                              <span className="limit-value">{this.state.tHourlySpeed}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                              <span className="limit-value">{this.state.tDailyLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                              <span className="limit-value">{this.state.tSendingDomain}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                              <span className="limit-value">{this.state.tBridges}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                              <span className="limit-value">{this.state.tTransactionalCredits}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Webhook Limits</span>
                              <span className="limit-value">{this.state.tWebhooksLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Max Dedicated IPs Support</span>
                              <span className="limit-value">{this.state.tDedicatedIPs}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                              <span className="limit-value">{this.state.tLandingPages}</span>
                              <div className="totalbar"> </div>
                            </div>
                            <div className="limits-row">
                              <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                              <span className="limit-value">{this.state.tWebhooksLimit}</span>
                              <div className="totalbar"> </div>
                            </div>
                          </span>
                          <span className="fdesc">View Limits</span>
                        </div>
                      </div>
                      <div className="pb-feature-blk">

                        <div className="features-head">Advanced Deliverability Options</div>
                        <div className="features-desc">
                          <span className="tooltip">Manage and authenticate your sending domains.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Sending Domains</span><span className="fdesc"></span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">DKIM adds a digital signature to each email, which verifies that the email was sent from your domain and hasn't been tampered with during transit. This helps in improving email deliverability and protecting against email spoofing.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">DKIM Authentication</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Use custom bounce domains to manage and analyze email bounces under your own domain, enhancing brand consistency and trust. This also helps in segregating transactional and marketing email traffic, improving deliverability insights.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Custom Bounce Domains</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Implement branded tracking domains for all the links in your emails. This not only masks third-party tracking services but also strengthens your brand’s identity and increases recipient trust in the safety of the links they are clicking.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Tracking Domains Branding</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Use dedicated IP addresses for sending emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Dedicated IPs</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Group IPs for specific sending strategies.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Dedicated Pools</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Create SMTP accounts for transactional emailing.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">SMTP Relays (Bridges)</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Link SMTP bridges to specific IP pools.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Bridges Binding to Dedicated Pools</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Send transactional emails through API integration.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Transactional Email API</span>
                        </div>

                        <div className="features-head">Automation & Integration</div>
                        <div className="features-desc">
                          <span className="tooltip">Integrate with external services via real-time data hooks.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Webhooks</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Utilize templates that automatically adjust content based on subscriber data, ensuring personalized and relevant communications.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Dynamic Templates</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Incorporate individual recipient data into your emails effortlessly with Mail Merge, personalizing each message at scale.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Mail Merge</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Access Mumara functionalities programmatically.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">RESTFUL API</span>
                        </div>

                        <div className="features-head">Monitoring & Reporting</div>
                        <div className="features-desc">
                          <span className="tooltip">Detailed reports on email delivery statuses.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Delivery Reports</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Processes the failed messages and flag them.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Bounce Processing</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Handle spam complaints effectively.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Complaints Processing</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Oversee the queue of emails waiting to be sent.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Email Queue Management</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Monitor when emails are opened.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Open Tracking</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Track clicks on links within emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Click Tracking</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Detailed reporting on the geographical locations from where the emails are being opened or clicked.</span>
                          <i className="bi bi-check bg-success"></i>
                          <span className="fdesc">Geographical Reporting</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Insights into how subscribers are interacting with emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Engagement Reports</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Keep an eye on your sender reputation.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Reputation Monitoring</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Continuously monitor and manage your sender status to avoid being blacklisted, ensuring optimal deliverability of your emails.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Blacklist Monitoring</span>
                        </div>

                        <div className="features-head">Security & Compliance</div>
                        <div className="features-desc">
                          <span className="tooltip">How long messages are stored.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Log Retention (7 Days)</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Track authentication activities for security.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Authentication Logs</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Enhance account security by applying another layer of authentication.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Two Factor Authentication</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Secure account access by whitelisting IPs.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">IP Whitelisting</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Manage active sessions for additional security.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Session Management</span>
                        </div>
                        <div className="features-head">Support</div>
                        <div className="features-desc">
                          <span className="tooltip">Access the new features before the official launch.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">New Features Early Access</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Connect and collaborate with other users to gain insights and share solutions in our vibrant Mumara Community.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Community Support</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Access a wealth of information with our extensive Knowledgebase, your go-to resource for quick answers and in-depth guidance.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Knowledgebase</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Explore our detailed Documentation for easy-to-follow instructions and comprehensive insights into all Mumara features.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Documentation</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Reach out to our dedicated Helpdesk for personalized assistance and expert support whenever you need it.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Helpdesk</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Get immediate answers with our Live Chat support, where our experts are ready to help you in real-time.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">Live Chat</span>
                        </div>
                        <div className="features-desc">
                          <span className="tooltip">Experience dependable service with our SLA, ensuring top-tier performance and reliability for your email marketing campaigns.</span>
                          <i className="bi-check bg-success"></i>
                          <span className="fdesc">SLA (Service Level Agreement)</span>
                        </div>
                      </div>
                      <div className="linkBlock footer">
                        <Link to={this.state.link3} className={`btn btn-info btn-order-pb ${this.state.disabled3}` }>Signup</Link>
                      </div>
                    </div>
                  </div>
                </Box>

                <div className="col-md-4 offset-md-8 view-limits-block pb-feature-blk footer-limits">
                  <div className="features-desc limits-all">
                    <span className="tooltip">
                      <div className="limits-head">Limits</div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                        <span className="limit-value">{this.state.tHourlySpeed}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                        <span className="limit-value">{this.state.tDailyLimit}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                        <span className="limit-value">{this.state.tSendingDomain}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                        <span className="limit-value">{this.state.tBridges}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                        <span className="limit-value">{this.state.tTransactionalCredits}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Webhook Limits</span>
                        <span className="limit-value">{this.state.tWebhooksLimit}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Max Dedicated IPs Support</span>
                        <span className="limit-value">{this.state.tDedicatedIPs}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                        <span className="limit-value">{this.state.tLandingPages}</span>
                        <div className="totalbar"> </div>
                      </div>
                      <div className="limits-row">
                        <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                        <span className="limit-value">{this.state.tPixels}</span>
                        <div className="totalbar"> </div>
                      </div>
                    </span>
                    <span className="fdesc">View Limits</span>
                  </div>
                </div>

              </Box>
          </Container>
        </Box>
      );
  }
}


export default TransactionalPricing;