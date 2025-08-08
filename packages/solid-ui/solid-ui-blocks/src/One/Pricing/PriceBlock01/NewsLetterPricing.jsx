import React, { Component } from "react";
import "react-rangeslider/lib/index.css";
import { Container, Flex, Box } from 'theme-ui'
import Reveal from '@solid-ui-components/Reveal'
import Slider from "react-rangeslider";
import {Link} from 'gatsby';
import "react-rangeslider/lib/index.css";
import newsletterItems from './products_newsletter_all.json'


class NewsLetterPricing extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 1,
        planName: "Machine - 1",
        button: "Signup",
        horizontal:50,
        symbol: "$",
        no_emails: "4,000",
        no_emails2: "8,000",
        no_emails3: "12,000",
        contacts: 1000,
        month: "month",
        link1: "https://account.mumara.com/signup?pid=57",
        link2: "https://account.mumara.com/signup?pid=103",
        link3: "https://account.mumara.com/signup?pid=104",
        recomended1: " show",
        recomended2: "",
        recomended3: "",
        recomended0: "",
        nHourlySpeed: 100,
        nDailyLimit: 200,
        nSendingDomain: 1,
        nBridges: 1,
        nSegments: 1,
        nTriggers: 1,
        nTriggersAction: 1000,
        nEvergreenCampaigns: 1,
        nTransactionalCredits: 100,
        nWebhooksLimit: 1,
        nDedicatedIPs: 0,
        nLandingPages: 1,
        nPixels: 1,
        selected_mo:1,
        ddVal: 1,
        ma_tab_selected1: "tabs_selectedTab tab1",
        ma_tab_selected2: " tab2", 
        items : newsletterItems?.products?.product,
        es_price:5,
        pr_price:10,
        bu_price:15
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
            no_emails: "4,000",
            no_emails2: "8,000",
            no_emails3: "12,000",
            contacts: 1000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[0]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[1]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[2]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 100,
            nDailyLimit: 200,
            nSendingDomain: 1,
            nBridges: 1,
            nSegments: 1,
            nTriggers: 1,
            nTriggersAction: 1000,
            nEvergreenCampaigns: 1,
            nTransactionalCredits: 100,
            nWebhooksLimit: 1,
            nDedicatedIPs: 0,
            nLandingPages: 1,
            nPixels: 1,
            planName: "Machine - 1",
            button: "Signup"
          });
        } else if(this.state.value == 2) {
          this.setState({
            es_price:Math.round(this.state?.items[3]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[4]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[5]?.pricing?.USD?.monthly),
            no_emails: "20,000",
            no_emails2: "40,000",
            no_emails3: "60,000",
            contacts: 5000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[3]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[4]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[5]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 1000,
            nDailyLimit: 5000,
            nSendingDomain: 2,
            nBridges: 2,
            nSegments: 2,
            nTriggers: 5,
            nTriggersAction: 15000,
            nEvergreenCampaigns: 2,
            nTransactionalCredits: 200,
            nWebhooksLimit: 2,
            nDedicatedIPs: 2,
            nLandingPages: 2,
            nPixels: 2,
            planName: "Machine - 2",
            button: "Signup"
          })
        } else if(this.state.value  == 3) {
          this.setState({
            es_price:Math.round(this.state?.items[6]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[7]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[8]?.pricing?.USD?.monthly),
            no_emails: "100,000",
            no_emails2: "200,000",
            no_emails3: "300,000",
            contacts: 25000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[6]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[7]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[8]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 5000,
            nDailyLimit: 25000,
            nSendingDomain: 3,
            nBridges: 3,
            nSegments: 3,
            nTriggers: 10,
            nTriggersAction: 100000,
            nEvergreenCampaigns: 3,
            nTransactionalCredits: 500,
            nWebhooksLimit: 3,
            nDedicatedIPs: 2,
            nLandingPages: 3,
            nPixels: 3,
            planName: "Machine - 3",
            button: "Signup"
          })
        } else if(this.state.value == 4) {
          this.setState({
            es_price:Math.round(this.state?.items[9]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[10]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[11]?.pricing?.USD?.monthly),
            no_emails: "200,000",
            no_emails2: "400,000",
            no_emails3: "600,000",
            contacts: 50000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[9]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[10]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[11]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 10000,
            nDailyLimit: 50000,
            nSendingDomain: 5,
            nBridges: 5,
            nSegments: 4,
            nTriggers: "Unlimited",
            nTriggersAction: 250000,
            nEvergreenCampaigns: 5,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 5,
            nDedicatedIPs: 4,
            nLandingPages: 4,
            nPixels: 4,
            planName: "Machine - 4",
            button: "Signup"
          })
        } else if(this.state.value == 5) {
          this.setState({
            es_price:Math.round(this.state?.items[12]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[13]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[14]?.pricing?.USD?.monthly),
            no_emails: "400,000",
            no_emails2: "800,000",
            no_emails3: "1,200,000",
            contacts: 100000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[12]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[13]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[14]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 20000,
            nDailyLimit: 100000,
            nSendingDomain: 10,
            nBridges: 10,
            nSegments: 10,
            nTriggers: "Unlimited",
            nTriggersAction: "1M",
            nEvergreenCampaigns: 10,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 10,
            nDedicatedIPs: 8,
            nLandingPages: 5,
            nPixels: 5,
            planName: "Machine - 5",
            button: "Signup"
          })
        } else if(this.state.value == 6) {
          this.setState({
            es_price:Math.round(this.state?.items[15]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[16]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[17]?.pricing?.USD?.monthly),
            no_emails: "1,000,000",
            no_emails2: "2,000,000",
            no_emails3: "3,000,000",
            contacts: 250000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[15]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[16]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[17]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 50000,
            nDailyLimit: 250000,
            nSendingDomain: 15,
            nBridges: 25,
            nSegments: 25,
            nTriggers: "Unlimited",
            nTriggersAction: "2.5M",
            nEvergreenCampaigns: 25,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 25,
            nDedicatedIPs: 16,
            nLandingPages: 10,
            nPixels: 10,
            planName: "Machine - 6",
            button: "Signup"
          })
        } else if(this.state.value == 7) {
          this.setState({
            es_price:Math.round(this.state?.items[18]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[19]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[20]?.pricing?.USD?.monthly),
            no_emails: "4,000,000",
            no_emails2: "8,000,000",
            no_emails3: "12,000,000",
            contacts: 1000000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[18]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[19]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[20]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            recomended4: "",
            nHourlySpeed: 200000,
            nDailyLimit: 1000000,
            nSendingDomain: 20,
            nBridges: 50,
            nSegments: 50,
            nTriggers: "Unlimited",
            nTriggersAction: "10M",
            nEvergreenCampaigns: 50,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 50,
            nDedicatedIPs: 32,
            nLandingPages: 15,
            nPixels: 15,
            planName: "Machine - 7",
            button: "Signup"
          })
        } else if(this.state.value == 8) {
          this.setState({
            es_price:Math.round(this.state?.items[21]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[22]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[23]?.pricing?.USD?.monthly),
            no_emails: "10,000,000",
            no_emails2: "20,000,000",
            no_emails3: "30,000,000",
            contacts: 2500000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[21]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[22]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[23]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            recomended4: "",
            nHourlySpeed: 500000,
            nDailyLimit: 1000000,
            nSendingDomain: 25,
            nBridges: 100,
            nSegments: 100,
            nTriggers: "Unlimited",
            nTriggersAction: "25M",
            nEvergreenCampaigns: 100,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 100,
            nDedicatedIPs: 32,
            nLandingPages: 20,
            nPixels: 20,
            planName: "Machine - 8",
            button: "Signup"
          })
        } else if(this.state.value == 9) {
          this.setState({
            es_price:Math.round(this.state?.items[24]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[25]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[26]?.pricing?.USD?.monthly),
            no_emails: "20,000,000",
            no_emails2: "40,000,000",
            no_emails3: "60,000,000",
            contacts: 5000000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[24]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[25]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[26]?.pid,
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended0: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            recomended4: "",
            nHourlySpeed: 1000000,
            nDailyLimit: 5000000,
            nSendingDomain: 50,
            nBridges: 200,
            nSegments: 200,
            nTriggers: "Unlimited",
            nTriggersAction: "50M",
            nEvergreenCampaigns: 200,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 200,
            nDedicatedIPs: 128,
            nLandingPages: 25,
            nPixels: 25,
            planName: "Machine - 9",
            button: "Signup"
          })
        } else {
          this.setState({
            es_price:Math.round(this.state?.items[24]?.pricing?.USD?.monthly),
            pr_price:Math.round(this.state?.items[25]?.pricing?.USD?.monthly),
            bu_price:Math.round(this.state?.items[26]?.pricing?.USD?.monthly),
            no_emails: "20,000,000",
            no_emails2: "40,000,000",
            no_emails3: "60,000,000",
            contacts: 5000000,
            link1: "https://account.mumara.com/signup?pid="+this.state?.items[24]?.pid,
            link2: "https://account.mumara.com/signup?pid="+this.state?.items[25]?.pid,
            link3: "https://account.mumara.com/signup?pid="+this.state?.items[26]?.pid,
            disabled1: " disabled",
            disabled2: " disabled",
            disabled3: " disabled",
            disabled4: " active",
            recomended0: " show",
            recomended1: " ",
            recomended2: " ",
            recomended3: " ",
            recomended4: " show",
            nHourlySpeed: "1000000+",
            nDailyLimit: "5000000+",
            nSendingDomain: "50+",
            nBridges: "200+",
            nSegments: "200+",
            nTriggers: "Unlimited",
            nTriggersAction: "50M+",
            nEvergreenCampaigns: "200+",
            nTransactionalCredits: "1000+",
            nWebhooksLimit: "200+",
            nDedicatedIPs: "128+",
            nLandingPages: "25+",
            nPixels: "25+",
            planName: "Machine - 9",
            button: "Signup"
          })
        }
      } else {
        if(this.state.value == 1) {
          this.setState({
            es_price:1*10,
            pr_price: 2*10,
            bu_price: 3*10,
            no_emails: "4,000",
            contacts: 1000,
            link1: "https://account.mumara.com/signup?pid=01&billing=annually",
            link2: "https://account.mumara.com/signup?pid=11&billing=annually",
            link3: "https://account.mumara.com/signup?pid=21&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 100,
            nDailyLimit: 200,
            nSendingDomain: 1,
            nBridges: 1,
            nSegments: 1,
            nTriggers: 1,
            nTriggersAction: 1000,
            nEvergreenCampaigns: 1,
            nTransactionalCredits: 100,
            nWebhooksLimit: 1,
            nDedicatedIPs: 0,
            nLandingPages: 1,
            nPixels: 1,
            planName: "Machine - 1",
            button: "Signup"
          });
        } else if(this.state.value == 2) {
          this.setState({
            es_price:10*10,
            pr_price: 20*10,
            bu_price: 30*10,
            no_emails: "20,000",
            contacts: 5000,
            link1: "https://account.mumara.com/signup?pid=02&billing=annually",
            link2: "https://account.mumara.com/signup?pid=12&billing=annually",
            link3: "https://account.mumara.com/signup?pid=22&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " show",
            recomended2: "",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 1000,
            nDailyLimit: 6000,
            nSendingDomain: 1,
            nBridges: 1,
            nSegments: 1,
            nTriggers: 1,
            nTriggersAction: 15000,
            nEvergreenCampaigns: 2,
            nTransactionalCredits: 200,
            nWebhooksLimit: 2,
            nDedicatedIPs: 1,
            nLandingPages: 2,
            nPixels: 2,
            planName: "Machine - 2",
            button: "Signup"
          })
        } else if(this.state.value  == 3) {
          this.setState({
            es_price:49*10,
            pr_price: 98*10,
            bu_price: 146*10,
            no_emails: "100,000",
            contacts: 25000,
            link1: "https://account.mumara.com/signup?pid=03&billing=annually",
            link2: "https://account.mumara.com/signup?pid=13&billing=annually",
            link3: "https://account.mumara.com/signup?pid=23&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 5000,
            nDailyLimit: 25000,
            nSendingDomain: 3,
            nBridges: 3,
            nSegments: 3,
            nTriggers: 10,
            nTriggersAction: 100000,
            nEvergreenCampaigns: 3,
            nTransactionalCredits: 500,
            nWebhooksLimit: 3,
            nDedicatedIPs: 2,
            nLandingPages: 3,
            nPixels: 3,
            planName: "Machine - 3",
            button: "Signup"
          })
        } else if(this.state.value == 4) {
          this.setState({
            es_price: 95*10,
            pr_price: 190*10,
            bu_price: 285*10,
            no_emails: "200,000",
            contacts: 50000,
            link1: "https://account.mumara.com/signup?pid=04&billing=annually",
            link2: "https://account.mumara.com/signup?pid=14&billing=annually",
            link3: "https://account.mumara.com/signup?pid=24&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 10000,
            nDailyLimit: 50000,
            nSendingDomain: 5,
            nBridges: 5,
            nSegments: 4,
            nTriggers: "Unlimited",
            nTriggersAction: 250000,
            nEvergreenCampaigns: 5,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 5,
            nDedicatedIPs: 4,
            nLandingPages: 4,
            nPixels: 4,
            planName: "Machine - 4",
            button: "Signup"
          })
        } else if(this.state.value == 5) {
          this.setState({
            es_price: 185*10,
            pr_price: 370*10,
            bu_price: 555*10,
            no_emails: "400,000",
            contacts: 100000,
            link1: "https://account.mumara.com/signup?pid=05&billing=annually",
            link2: "https://account.mumara.com/signup?pid=15&billing=annually",
            link3: "https://account.mumara.com/signup?pid=25&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " ",
            recomended2: " show",
            recomended3: "",
            recomended4: "",
            nHourlySpeed: 20000,
            nDailyLimit: 100000,
            nSendingDomain: 10,
            nBridges: 10,
            nSegments: 10,
            nTriggers: "Unlimited",
            nTriggersAction: "1M",
            nEvergreenCampaigns: 10,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 10,
            nDedicatedIPs: 8,
            nLandingPages: 5,
            nPixels: 5,
            planName: "Machine - 5",
            button: "Signup"
          })
        } else if(this.state.value == 6) {
          this.setState({
            es_price: 450*10,
            pr_price: 900*10,
            bu_price: 1350*10,
            no_emails: "1,000,000",
            contacts: 250000,
            link1: "https://account.mumara.com/signup?pid=06&billing=annually",
            link2: "https://account.mumara.com/signup?pid=16&billing=annually",
            link3: "https://account.mumara.com/signup?pid=26&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            recomended4: "",
            nHourlySpeed: 50000,
            nDailyLimit: 250000,
            nSendingDomain: 15,
            nBridges: 25,
            nSegments: 25,
            nTriggers: "Unlimited",
            nTriggersAction: "2.5M",
            nEvergreenCampaigns: 25,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 25,
            nDedicatedIPs: 16,
            nLandingPages: 10,
            nPixels: 10,
            planName: "Machine - 6",
            button: "Signup"
          })
        } else if(this.state.value == 7) {
          this.setState({
            es_price: 1750*10,
            pr_price: 3500*10,
            bu_price: 5250*10,
            no_emails: "4,000,000",
            contacts: 1000000,
            link1: "https://account.mumara.com/signup?pid=07&billing=annually",
            link2: "https://account.mumara.com/signup?pid=17&billing=annually",
            link3: "https://account.mumara.com/signup?pid=27&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            recomended4: "",
            nHourlySpeed: 200000,
            nDailyLimit: 1000000,
            nSendingDomain: 20,
            nBridges: 50,
            nSegments: 50,
            nTriggers: "Unlimited",
            nTriggersAction: "10M",
            nEvergreenCampaigns: 50,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 50,
            nDedicatedIPs: 32,
            nLandingPages: 15,
            nPixels: 15,
            planName: "Machine - 7",
            button: "Signup"
          })
        } else if(this.state.value == 8) {
          this.setState({
            es_price: 4250*10,
            pr_price: 8500*10,
            bu_price: 12750*10,
            no_emails: "10,000,000",
            contacts: 2500000,
            link1: "https://account.mumara.com/signup?pid=08&billing=annually",
            link2: "https://account.mumara.com/signup?pid=18&billing=annually",
            link3: "https://account.mumara.com/signup?pid=28&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " show",
            recomended4: "",
            nHourlySpeed: 200000,
            nDailyLimit: 1000000,
            nSendingDomain: 20,
            nBridges: 50,
            nSegments: 50,
            nTriggers: "Unlimited",
            nTriggersAction: "10M",
            nEvergreenCampaigns: 50,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 50,
            nDedicatedIPs: 32,
            nLandingPages: 15,
            nPixels: 15,
            planName: "Machine - 8",
            button: "Signup"
          })
        } else {
          this.setState({
            es_price: 8250*10,
            pr_price: 16500*10,
            bu_price: 24750*10,
            no_emails: "20,000,000+",
            contacts: 5000000,
            link1: "https://account.mumara.com/signup?pid=09&billing=annually",
            link2: "https://account.mumara.com/signup?pid=19&billing=annually",
            link3: "https://account.mumara.com/signup?pid=29&billing=annually",
            disabled1: "",
            disabled2: "",
            disabled3: "",
            disabled4: "",
            recomended1: " ",
            recomended2: " ",
            recomended3: " ",
            recomended4: " show",
            nHourlySpeed: 1000000,
            nDailyLimit: 5000000,
            nSendingDomain: 50,
            nBridges: 200,
            nSegments: 200,
            nTriggers: "Unlimited",
            nTriggersAction: "50M",
            nEvergreenCampaigns: 200,
            nTransactionalCredits: 1000,
            nWebhooksLimit: 200,
            nDedicatedIPs: 128,
            nLandingPages: 25,
            nPixels: 25,
            planName: "Machine - 9",
            button: "Signup"
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
      1: "1,000",
      2: "5,000",
      3: "25,000",
      4: "50,000",
      5: "100,000",
      6: "250,000",
      7: "1,000,000",
      8: "2,500,000",
      9: "5,000,000",
      10: "5,000,000+"
    }
    const { value, horizontal } = this.state;
    const formatkg = value => this.state.planName;
    const monthClick =()=> {
      this.setState({...this.state, selected_mo:1, ma_tab_selected1: " tabs_selectedTab", ma_tab_selected2: " "});
      if(this.state.value == 1) {
        this.setState({
          es_price:Math.round(this.state?.items[0]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[1]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[2]?.pricing?.USD?.monthly),
          no_emails: "4,000",
          no_emails2: "8,000",
          no_emails3: "12,000",
          contacts: 1000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[0]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[1]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[3]?.pid
        });
      } else if(this.state.value == 2) {
        this.setState({
          es_price:Math.round(this.state?.items[3]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[4]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[5]?.pricing?.USD?.monthly),
          no_emails: "20,000",
          no_emails2: "40,000",
          no_emails3: "60,000",
          contacts: 5000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[3]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[4]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[5]?.pid
        });
      } else if(this.state.value == 3) {
        this.setState({
          es_price:Math.round(this.state?.items[6]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[7]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[8]?.pricing?.USD?.monthly),
          no_emails: "100,000",
          no_emails2: "200,000",
          no_emails3: "300,000",
          contacts: 25000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[6]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[7]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[8]?.pid
        });
      } else if(this.state.value == 4) {
        this.setState({
          es_price:Math.round(this.state?.items[9]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[10]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[11]?.pricing?.USD?.monthly),
          no_emails: "200,000",
          no_emails2: "400,000",
          no_emails3: "600,000",
          contacts: 50000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[9]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[10]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[11]?.pid
        });
      } else if(this.state.value == 5) {
        this.setState({
          es_price:Math.round(this.state?.items[12]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[13]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[14]?.pricing?.USD?.monthly),
          no_emails: "400,000",
          no_emails2: "800,000",
          no_emails3: "1,200,000",
          contacts: 100000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[12]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[13]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[14]?.pid
        });
      } else if(this.state.value == 6) {
        this.setState({
          es_price:Math.round(this.state?.items[15]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[16]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[17]?.pricing?.USD?.monthly),
          no_emails: "1,000,000",
          no_emails2: "2,000,000",
          no_emails3: "3,000,000",
          contacts: 250000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[15]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[16]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[17]?.pid
        });
      } else if(this.state.value == 7) {
        this.setState({
          es_price:Math.round(this.state?.items[18]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[19]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[20]?.pricing?.USD?.monthly),
          no_emails: "4,000,000",
          no_emails2: "8,000,000",
          no_emails3: "12,000,000",
          contacts: 1000000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[18]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[19]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[20]?.pid
        });
      } else if(this.state.value == 8) {
        this.setState({
          es_price:Math.round(this.state?.items[21]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[22]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[23]?.pricing?.USD?.monthly),
          no_emails: "10,000,000",
          no_emails2: "20,000,000",
          no_emails3: "30,000,000",
          contacts: 2500000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[21]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[22]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[23]?.pid
        });
      } else if(this.state.value == 9) {
        this.setState({
          es_price:Math.round(this.state?.items[24]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[25]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[26]?.pricing?.USD?.monthly),
          no_emails: "20,000,000",
          no_emails2: "40,000,000",
          no_emails3: "60,000,000",
          contacts: 5000000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[24]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[25]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[26]?.pid
        });
      } else {
        this.setState({
          es_price:Math.round(this.state?.items[24]?.pricing?.USD?.monthly),
          pr_price:Math.round(this.state?.items[25]?.pricing?.USD?.monthly),
          bu_price:Math.round(this.state?.items[26]?.pricing?.USD?.monthly),
          no_emails: "20,000,000",
          no_emails2: "40,000,000",
          no_emails3: "60,000,000",
          contacts: 5000000,
          link1: "https://account.mumara.com/signup?pid="+this.state?.items[24]?.pid,
          link2: "https://account.mumara.com/signup?pid="+this.state?.items[25]?.pid,
          link3: "https://account.mumara.com/signup?pid="+this.state?.items[26]?.pid
        });
      }
    }
    const annualClick =()=> {
      this.setState({...this.state, selected_mo:2, ma_tab_selected1: " ", ma_tab_selected2:" tabs_selectedTab"});
      if(this.state.value == 1) {
        this.setState({
          es_price:1*10,
          pr_price: 2*10,
          bu_price: 3*10,
          no_emails: "4,000",
          contacts: 1000,
          link1: "https://account.mumara.com/signup?pid=01&billing=annually",
          link2: "https://account.mumara.com/signup?pid=11&billing=annually",
          link3: "https://account.mumara.com/signup?pid=21&billing=annually",
        });
      } else if(this.state.value == 2) {
        this.setState({
          es_price:10*10,
          pr_price: 20*10,
          bu_price: 30*10,
          no_emails: "20,000",
          contacts: 5000,
          link1: "https://account.mumara.com/signup?pid=02&billing=annually",
          link2: "https://account.mumara.com/signup?pid=12&billing=annually",
          link3: "https://account.mumara.com/signup?pid=22&billing=annually",
        });
      } else if(this.state.value == 3) {
        this.setState({
          es_price:49*10,
          pr_price: 98*10,
          bu_price: 146*10,
          no_emails: "100,000",
          contacts: 25000,
          link1: "https://account.mumara.com/signup?pid=03&billing=annually",
          link2: "https://account.mumara.com/signup?pid=13&billing=annually",
          link3: "https://account.mumara.com/signup?pid=23&billing=annually",
        });
      } else if(this.state.value == 4) {
        this.setState({
          es_price: 95*10,
          pr_price: 190*10,
          bu_price: 285*10,
          no_emails: "200,000",
          contacts: 50000,
          link1: "https://account.mumara.com/signup?pid=04&billing=annually",
          link2: "https://account.mumara.com/signup?pid=14&billing=annually",
          link3: "https://account.mumara.com/signup?pid=24&billing=annually",
        });
      } else if(this.state.value == 5) {
        this.setState({
          es_price: 185*10,
          pr_price: 370*10,
          bu_price: 555*10,
          no_emails: "400,000",
          contacts: 100000,
          link1: "https://account.mumara.com/signup?pid=05&billing=annually",
          link2: "https://account.mumara.com/signup?pid=15&billing=annually",
          link3: "https://account.mumara.com/signup?pid=25&billing=annually",
        });
      } else if(this.state.value == 6) {
        this.setState({
          es_price: 450*10,
          pr_price: 900*10,
          bu_price: 1350*10,
          no_emails: "1,000,000",
          contacts: 250000,
          link1: "https://account.mumara.com/signup?pid=06&billing=annually",
          link2: "https://account.mumara.com/signup?pid=16&billing=annually",
          link3: "https://account.mumara.com/signup?pid=26&billing=annually",
        });
      } else if(this.state.value == 7) {
        this.setState({
          es_price: 1750*10,
          pr_price: 3500*10,
          bu_price: 5250*10,
          no_emails: "4,000,000",
          contacts: 1000000,
          link1: "https://account.mumara.com/signup?pid=07&billing=annually",
          link2: "https://account.mumara.com/signup?pid=17&billing=annually",
          link3: "https://account.mumara.com/signup?pid=27&billing=annually",
        });
      } else if(this.state.value == 8) {
        this.setState({
          es_price: 4250*10,
          pr_price: 8500*10,
          bu_price: 12750*10,
          no_emails: "10,000,000",
          contacts: 2500000,
          link1: "https://account.mumara.com/signup?pid=08&billing=annually",
          link2: "https://account.mumara.com/signup?pid=18&billing=annually",
          link3: "https://account.mumara.com/signup?pid=28&billing=annually",
        });
      } else {
        this.setState({
          es_price: 8250*10,
          pr_price: 16500*10,
          bu_price: 24750*10,
          no_emails: "20,000,000+",
          contacts: 5000000,
          link1: "https://account.mumara.com/signup?pid=09&billing=annually",
          link2: "https://account.mumara.com/signup?pid=19&billing=annually",
          link3: "https://account.mumara.com/signup?pid=29&billing=annually",
        });
      }
    }
    const numberFormat =(x)=> {
      x = x?.toString();
      var pattern = /(-?\d+)(\d{3})/;
      while (pattern.test(x))
          x = x.replace(pattern, "$1,$2");
      return x;
    }
  
    return (
      <Box className="newletter-main">
        <Box className="newslettetr-head">

          <div className="news-heading">Exclusive Bundles</div>
          <div className="bundle-blk">
            <div className="slider-input-blk css-vurnku">
              <h3>Choose your plan!</h3>
              <div className="news-desc">Select your Monthly contacts volume</div>
              <div className="email-section" style={{display: "none"}}>
                <span className="email-label-txt">Monthly Emails Credits: </span> <span className="emails-count-label">{this.state.no_emails}</span>
              </div>
            </div>
            <div className="css-n8ejw4">
              <Slider
                min={1}
                max={10}
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
          </div>
          <div className={`monep-container n-pkg-blk-sm enterprise ${this.state.disabled4} `}>
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
                <div className={`n-pkg-blk essential ${this.state.disabled1}`}>
                  <div className={`recomended ${this.state.recomended1}`}><span>Recommended</span></div>
                  <div className="pb-head">
                    <h3>Essential</h3>
                    <p>Empower your business with foundational email features.</p>
                  </div>
                  <div className="pb-body">
                    <div className="pb-priceBlk">
                      <span className="pr-curr-symbol">{this.state.symbol}</span>
                      <span className="pr-price-main">{numberFormat(this.state.es_price)}</span>
                      /<span className="tenure">{this.state.month}</span>
                    </div>
                    <div className="nws-contacts-blk">
                      {this.state.no_emails}
                      <span>Emails Credits</span>
                    </div>
                    <div className="linkBlock">
                      <Link to={this.state.link1} className="btn btn-info btn-order-pb">Signup</Link>
                    </div>
                    <div className="view-limits-block pb-feature-blk">
                      <div className="features-desc limits-all">
                        <span className="tooltip">
                          <div className="limits-head">Essential Limits</div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                            <span className="limit-value">{this.state.nHourlySpeed}</span>
                            <div className="totalbar"> </div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                            <span className="limit-value">{this.state.nDailyLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                            <span className="limit-value">{this.state.nSendingDomain}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                            <span className="limit-value">{this.state.nBridges}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Segments</span>
                            <span className="limit-value">{this.state.nSegments}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Triggers</span>
                            <span className="limit-value">{this.state.nTriggers}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Trigger Actions</span>
                            <span className="limit-value">{this.state.nTriggersAction}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Evergreen Campaigns</span>
                            <span className="limit-value">{this.state.nEvergreenCampaigns}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                            <span className="limit-value">{this.state.nTransactionalCredits}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Webhooks Limit</span>
                            <span className="limit-value">{this.state.nWebhooksLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                            <span className="limit-value">{this.state.nLandingPages}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                            <span className="limit-value">{this.state.nPixels}</span>
                            <div className="totalbar"></div>
                          </div>
                        </span>
                        <span className="fdesc">View Limits</span>
                      </div>
                    </div>
                    <div className="pb-feature-blk">

                      <div className="features-head">User Interface & List Management</div>
                      <div className="features-desc">
                        <span className="tooltip">Centralized control panel for managing all features.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dashboard Overview</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Handle billing and funds directly within the platform.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Funds Management</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create and edit emails with an intuitive editor.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">HTML Editor & Builder</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Pre-designed templates for quick campaign setup.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Templates</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customizable forms to capture subscriber data.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Web Forms</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Organize and manage subscriber lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Contact Lists</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Define custom data fields for more detailed subscriber information.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Custom Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create targeted segments for personalized campaigns.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Segments</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Bulk import contacts into lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Import Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Export lists for external use.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Export Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Manage large updates to contact lists efficiently.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Bulk Update Contacts</span>
                      </div>

                      <div className="features-head">Email Campaign Tools</div>
                      <div className="features-desc">
                        <span className="tooltip">Send one-time email campaigns to large groups.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Broadcasts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automated campaigns that resend based on set criteria.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Evergreen Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automatically send a series of emails at set intervals.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Drip Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customize content based on subscriber data.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Dynamic Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Test different versions of campaigns to optimize results.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Split Tests</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Randomize content elements to create unique emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Spintags</span>
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

                      <div className="features-head">Personalization Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Custom Fields allow you to store additional information about subscribers, enabling highly tailored email content.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Recipient Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Leverage Systematic Variables to automatically insert relevant data points like date, time, or user-specific details into emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Systematic Variables</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">User Fields enable the addition of user-specific data that can be dynamically included in emails for personalization.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">User Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Dynamic Fields automatically update content in emails based on the latest data or user interactions.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Dynamic Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Enhance recipient engagement by using Conditional Content that changes based on the subscribers' behavior or profile attributes.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Conditional Content</span>
                      </div>

                      <div className="features-head">Advanced Deliverability Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Manage and authenticate your sending domains.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Sending Domains</span>
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
                        <span className="tooltip">Automate your email processes with Workflows that guide the user journey based on specific triggers and actions.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Workflows</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Perform actions based on subscriber's activity, engagements or delivery statuses.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Triggers</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Integrate with external services via real-time data hooks.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Webhooks</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">RSS feeds enable the automatic pulling of content from a predefined source, such as your blog or news section, into email campaigns. This feature is perfect for regularly updating your subscribers with the latest posts, news, or product updates without manual intervention.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">RSS</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">AI can assist in writing or revising sections of your email content, enhancing clarity and engagement.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">AI Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access Mumara functionalities programmatically.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">RESTFUL API</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create beautiful landing pages using pre-built templates.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Landing Pages</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Utilize tracking pixels to gather valuable insights on email opens and user behavior, enhancing campaign analytics.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Pixels</span>
                      </div>

                      <div className="features-head">Monitoring & Reporting</div>
                      <div className="features-desc">
                        <span className="tooltip">In-depth analysis of campaign performance.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Advanced Statistics</span>
                      </div>
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
                        <span className="tooltip">Monitor when and how often your transactional emails are opened, gaining insights into recipient engagement.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Transactional Open Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Track clicks within your transactional emails to evaluate user interest and interaction with your content.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Transactional Click Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access detailed reports on how recipients engage with your transactional emails, including opens, clicks, and more, to optimize future communications.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Transactional Engagement Reports</span>
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
                      <Link to={this.state.link1} className="btn btn-info btn-order-pb">Signup</Link>
                    </div>
                  </div>
                </div>
              </Box>

              <Box className="col-md-4">
                <div className={`n-pkg-blk professional ${this.state.disabled2}`}>
                  <div className={`recomended ` + this.state.recomended2}><span>Recommended</span></div>
                  <div className="pb-head">
                    <h3>Professional</h3>
                    <p>Take ownership of your sending to maximize email.</p>
                  </div>
                  <div className="pb-body">
                    <div className="pb-priceBlk">
                      <span className="pr-curr-symbol">{this.state.symbol}</span>
                      <span className="pr-price-main">{numberFormat(this.state.pr_price)}</span>
                      /<span className="tenure">{this.state.month}</span>
                    </div>
                    <div className="nws-contacts-blk">
                      {this.state.no_emails2}
                      <span>Emails Credits</span>
                    </div>
                    <div className="linkBlock">
                      <Link to={this.state.link2} className="btn btn-info btn-order-pb">Signup</Link>
                    </div>
                    <div className="view-limits-block pb-feature-blk">
                      <div className="features-desc limits-all">
                        <span className="tooltip">
                          <div className="limits-head">Professional Limits</div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                            <span className="limit-value">{this.state.nHourlySpeed}</span>
                            <div className="totalbar"> </div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                            <span className="limit-value">{this.state.nDailyLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                            <span className="limit-value">{this.state.nSendingDomain}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                            <span className="limit-value">{this.state.nBridges}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Segments</span>
                            <span className="limit-value">{this.state.nSegments}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Triggers</span>
                            <span className="limit-value">{this.state.nTriggers}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Trigger Actions</span>
                            <span className="limit-value">{this.state.nTriggersAction}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Evergreen Campaigns</span>
                            <span className="limit-value">{this.state.nEvergreenCampaigns}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                            <span className="limit-value">{this.state.nTransactionalCredits}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Webhooks Limit</span>
                            <span className="limit-value">{this.state.nWebhooksLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                            <span className="limit-value">{this.state.nLandingPages}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                            <span className="limit-value">{this.state.nPixels}</span>
                            <div className="totalbar"></div>
                          </div>
                        </span>
                        <span className="fdesc">View Limits</span>
                      </div>
                    </div>
                    <div className="pb-feature-blk">

                      <div className="features-head">User Interface & List Management</div>
                      <div className="features-desc">
                        <span className="tooltip">Centralized control panel for managing all features.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dashboard Overview</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Handle billing and funds directly within the platform.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Funds Management</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create and edit emails with an intuitive editor.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">HTML Editor & Builder</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Pre-designed templates for quick campaign setup.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Templates</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customizable forms to capture subscriber data.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Web Forms</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Organize and manage subscriber lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Contact Lists</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Define custom data fields for more detailed subscriber information.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Custom Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create targeted segments for personalized campaigns.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Segments</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Bulk import contacts into lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Import Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Export lists for external use.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Export Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Manage large updates to contact lists efficiently.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Bulk Update Contacts</span>
                      </div>

                      <div className="features-head">Email Campaign Tools</div>
                      <div className="features-desc">
                        <span className="tooltip">Send one-time email campaigns to large groups.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Broadcasts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automated campaigns that resend based on set criteria.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Evergreen Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automatically send a series of emails at set intervals.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Drip Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customize content based on subscriber data.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dynamic Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Test different versions of campaigns to optimize results.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Split Tests</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Randomize content elements to create unique emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Spintags</span>
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

                      <div className="features-head">Personalization Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Custom Fields allow you to store additional information about subscribers, enabling highly tailored email content.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Recipient Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Leverage Systematic Variables to automatically insert relevant data points like date, time, or user-specific details into emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Systematic Variables</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">User Fields enable the addition of user-specific data that can be dynamically included in emails for personalization.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">User Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Dynamic Fields automatically update content in emails based on the latest data or user interactions.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dynamic Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Enhance recipient engagement by using Conditional Content that changes based on the subscribers' behavior or profile attributes.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Conditional Content</span>
                      </div>

                      <div className="features-head">Advanced Deliverability Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Manage and authenticate your sending domains.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Sending Domains</span>
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
                        <span className="tooltip">Automate your email processes with Workflows that guide the user journey based on specific triggers and actions.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Workflows</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Perform actions based on subscriber's activity, engagements or delivery statuses.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Triggers</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Integrate with external services via real-time data hooks.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Webhooks</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">RSS feeds enable the automatic pulling of content from a predefined source, such as your blog or news section, into email campaigns. This feature is perfect for regularly updating your subscribers with the latest posts, news, or product updates without manual intervention.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">RSS</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">AI can assist in writing or revising sections of your email content, enhancing clarity and engagement.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">AI Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access Mumara functionalities programmatically.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">RESTFUL API</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create beautiful landing pages using pre-built templates.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Landing Pages</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Utilize tracking pixels to gather valuable insights on email opens and user behavior, enhancing campaign analytics.</span>
                        <i className="bi bi-x bg-danger"></i>
                        <span className="fdesc">Pixels</span>
                      </div>

                      <div className="features-head">Monitoring & Reporting</div>
                      <div className="features-desc">
                        <span className="tooltip">In-depth analysis of campaign performance.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Advanced Statistics</span>
                      </div>
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
                        <span className="tooltip">Monitor when and how often your transactional emails are opened, gaining insights into recipient engagement.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Open Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Track clicks within your transactional emails to evaluate user interest and interaction with your content.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Click Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access detailed reports on how recipients engage with your transactional emails, including opens, clicks, and more, to optimize future communications.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Engagement Reports</span>
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
                      <Link to={this.state.link2} className="btn btn-info btn-order-pb">Signup</Link>
                    </div>
                  </div>
                </div>
              </Box>

              <Box className="col-md-4">
                <div className={`n-pkg-blk business ${this.state.disabled3}`}>
                  <div className={`recomended ` + this.state.recomended3}><span>Recommended</span></div>
                  <div className="pb-head">
                    <h3>Business</h3>
                    <p>Amplify your email program with extra support.</p>
                  </div>
                  <div className="pb-body">
                    <div className="pb-priceBlk">
                      <span className="pr-curr-symbol">{this.state.symbol}</span>
                      <span className="pr-price-main">{numberFormat(this.state.bu_price)}</span>
                      /<span className="tenure">{this.state.month}</span>
                    </div>
                    <div className="nws-contacts-blk">
                      {this.state.no_emails3}
                      <span>Emails Credits</span>
                    </div>
                    <div className="linkBlock">
                      <Link to={this.state.link3} className="btn btn-info btn-order-pb">Signup</Link>
                    </div>
                    <div className="view-limits-block pb-feature-blk">
                      <div className="features-desc limits-all">
                        <span className="tooltip">
                          <div className="limits-head">Business Limits</div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                            <span className="limit-value">{this.state.nHourlySpeed}</span>
                            <div className="totalbar"> </div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                            <span className="limit-value">{this.state.nDailyLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                            <span className="limit-value">{this.state.nSendingDomain}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                            <span className="limit-value">{this.state.nBridges}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Segments</span>
                            <span className="limit-value">{this.state.nSegments}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Triggers</span>
                            <span className="limit-value">{this.state.nTriggers}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Trigger Actions</span>
                            <span className="limit-value">{this.state.nTriggersAction}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Evergreen Campaigns</span>
                            <span className="limit-value">{this.state.nEvergreenCampaigns}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                            <span className="limit-value">{this.state.nTransactionalCredits}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Webhooks Limit</span>
                            <span className="limit-value">{this.state.nWebhooksLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                            <span className="limit-value">{this.state.nLandingPages}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                            <span className="limit-value">{this.state.nPixels}</span>
                            <div className="totalbar"></div>
                          </div>
                        </span>
                        <span className="fdesc">View Limits</span>
                      </div>
                    </div>
                    <div className="pb-feature-blk">

                      <div className="features-head">User Interface & List Management</div>
                      <div className="features-desc">
                        <span className="tooltip">Centralized control panel for managing all features.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dashboard Overview</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Handle billing and funds directly within the platform.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Funds Management</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create and edit emails with an intuitive editor.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">HTML Editor & Builder</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Pre-designed templates for quick campaign setup.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Templates</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customizable forms to capture subscriber data.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Web Forms</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Organize and manage subscriber lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Contact Lists</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Define custom data fields for more detailed subscriber information.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Custom Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create targeted segments for personalized campaigns.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Segments</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Bulk import contacts into lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Import Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Export lists for external use.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Export Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Manage large updates to contact lists efficiently.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Bulk Update Contacts</span>
                      </div>

                      <div className="features-head">Email Campaign Tools</div>
                      <div className="features-desc">
                        <span className="tooltip">Send one-time email campaigns to large groups.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Broadcasts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automated campaigns that resend based on set criteria.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Evergreen Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automatically send a series of emails at set intervals.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Drip Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customize content based on subscriber data.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dynamic Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Test different versions of campaigns to optimize results.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Split Tests</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Randomize content elements to create unique emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Spintags</span>
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

                      <div className="features-head">Personalization Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Custom Fields allow you to store additional information about subscribers, enabling highly tailored email content.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Recipient Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Leverage Systematic Variables to automatically insert relevant data points like date, time, or user-specific details into emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Systematic Variables</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">User Fields enable the addition of user-specific data that can be dynamically included in emails for personalization.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">User Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Dynamic Fields automatically update content in emails based on the latest data or user interactions.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dynamic Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Enhance recipient engagement by using Conditional Content that changes based on the subscribers' behavior or profile attributes.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Conditional Content</span>
                      </div>

                      <div className="features-head">Advanced Deliverability Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Manage and authenticate your sending domains.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Sending Domains</span>
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
                        <span className="tooltip">Automate your email processes with Workflows that guide the user journey based on specific triggers and actions.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Workflows</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Perform actions based on subscriber's activity, engagements or delivery statuses.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Triggers</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Integrate with external services via real-time data hooks.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Webhooks</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">RSS feeds enable the automatic pulling of content from a predefined source, such as your blog or news section, into email campaigns. This feature is perfect for regularly updating your subscribers with the latest posts, news, or product updates without manual intervention.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">RSS</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">AI can assist in writing or revising sections of your email content, enhancing clarity and engagement.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">AI Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access Mumara functionalities programmatically.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">RESTFUL API</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create beautiful landing pages using pre-built templates.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Landing Pages</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Utilize tracking pixels to gather valuable insights on email opens and user behavior, enhancing campaign analytics.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Pixels</span>
                      </div>

                      <div className="features-head">Monitoring & Reporting</div>
                      <div className="features-desc">
                        <span className="tooltip">In-depth analysis of campaign performance.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Advanced Statistics</span>
                      </div>
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
                        <span className="tooltip">Monitor when and how often your transactional emails are opened, gaining insights into recipient engagement.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Open Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Track clicks within your transactional emails to evaluate user interest and interaction with your content.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Click Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access detailed reports on how recipients engage with your transactional emails, including opens, clicks, and more, to optimize future communications.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Engagement Reports</span>
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
                        <span className="fdesc">Log Retention (30 Days)</span>
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
                      <Link to={this.state.link3} className="btn btn-info btn-order-pb">Signup</Link>
                    </div>
                  </div>
                </div>
              </Box>

              <Box className="col-md-4 d-none">
                <div className={`n-pkg-blk enterprise ${this.state.disabled4}`}>
                  <div className={`recomended ` + this.state.recomended4}><span>Recommended</span></div>
                  <div className="pb-head">
                    <h3>Enterprise</h3>
                    <p>Enhance your email program with additional assistance.</p>
                  </div>
                  <div className="pb-body">
                    <div className="pb-priceBlk">
                      Contact Sales
                    </div>
                    <div className="nws-contacts-blk">
                      Unlimited
                      <span>Emails Credits</span>
                    </div>
                    <div className="linkBlock">
                      <Link to="https://mumara.com/contact-us" target="_blank" className="btn btn-info btn-order-pb">Contact Sales</Link>
                    </div>
                    <div className="view-limits-block pb-feature-blk">
                      <div className="features-desc limits-all">
                        <span className="tooltip">
                          <div className="limits-head">Enterprise Limits</div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                            <span className="limit-value">{this.state.nHourlySpeed}</span>
                            <div className="totalbar"> </div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                            <span className="limit-value">{this.state.nDailyLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                            <span className="limit-value">{this.state.nSendingDomain}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                            <span className="limit-value">{this.state.nBridges}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Segments</span>
                            <span className="limit-value">{this.state.nSegments}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Triggers</span>
                            <span className="limit-value">{this.state.nTriggers}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Trigger Actions</span>
                            <span className="limit-value">{this.state.nTriggersAction}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Evergreen Campaigns</span>
                            <span className="limit-value">{this.state.nEvergreenCampaigns}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                            <span className="limit-value">{this.state.nTransactionalCredits}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Webhooks Limit</span>
                            <span className="limit-value">{this.state.nWebhooksLimit}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                            <span className="limit-value">{this.state.nLandingPages}</span>
                            <div className="totalbar"></div>
                          </div>
                          <div className="limits-row">
                            <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                            <span className="limit-value">{this.state.nPixels}</span>
                            <div className="totalbar"></div>
                          </div>
                        </span>
                        <span className="fdesc">View Limits</span>
                      </div>
                    </div>
                    <div className="pb-feature-blk">

                      <div className="features-head">User Interface & List Management</div>
                      <div className="features-desc">
                        <span className="tooltip">Centralized control panel for managing all features.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dashboard Overview</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Handle billing and funds directly within the platform.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Funds Management</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create and edit emails with an intuitive editor.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">HTML Editor & Builder</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Pre-designed templates for quick campaign setup.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Templates</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customizable forms to capture subscriber data.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Web Forms</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Organize and manage subscriber lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Contact Lists</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Define custom data fields for more detailed subscriber information.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Custom Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create targeted segments for personalized campaigns.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Segments</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Bulk import contacts into lists.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Import Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Export lists for external use.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Export Contacts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Manage large updates to contact lists efficiently.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Bulk Update Contacts</span>
                      </div>

                      <div className="features-head">Email Campaign Tools</div>
                      <div className="features-desc">
                        <span className="tooltip">Send one-time email campaigns to large groups.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Broadcasts</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automated campaigns that resend based on set criteria.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Evergreen Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Automatically send a series of emails at set intervals.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Drip Campaigns</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Customize content based on subscriber data.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dynamic Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Test different versions of campaigns to optimize results.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Split Tests</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Randomize content elements to create unique emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Spintags</span>
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

                      <div className="features-head">Personalization Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Custom Fields allow you to store additional information about subscribers, enabling highly tailored email content.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Recipient Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Leverage Systematic Variables to automatically insert relevant data points like date, time, or user-specific details into emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Systematic Variables</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">User Fields enable the addition of user-specific data that can be dynamically included in emails for personalization.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">User Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Dynamic Fields automatically update content in emails based on the latest data or user interactions.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Dynamic Fields</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Enhance recipient engagement by using Conditional Content that changes based on the subscribers' behavior or profile attributes.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Conditional Content</span>
                      </div>

                      <div className="features-head">Advanced Deliverability Options</div>
                      <div className="features-desc">
                        <span className="tooltip">Manage and authenticate your sending domains.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Sending Domains</span>
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
                        <span className="tooltip">Automate your email processes with Workflows that guide the user journey based on specific triggers and actions.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Workflows</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Perform actions based on subscriber's activity, engagements or delivery statuses.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Triggers</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Integrate with external services via real-time data hooks.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Webhooks</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">RSS feeds enable the automatic pulling of content from a predefined source, such as your blog or news section, into email campaigns. This feature is perfect for regularly updating your subscribers with the latest posts, news, or product updates without manual intervention.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">RSS</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">AI can assist in writing or revising sections of your email content, enhancing clarity and engagement.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">AI Content Tags</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access Mumara functionalities programmatically.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">RESTFUL API</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Create beautiful landing pages using pre-built templates.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Landing Pages</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Utilize tracking pixels to gather valuable insights on email opens and user behavior, enhancing campaign analytics.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Pixels</span>
                      </div>

                      <div className="features-head">Monitoring & Reporting</div>
                      <div className="features-desc">
                        <span className="tooltip">In-depth analysis of campaign performance.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Advanced Statistics</span>
                      </div>
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
                        <span className="tooltip">Insights into how subscribers are interacting with emails.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Engagement Reports</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Monitor when and how often your transactional emails are opened, gaining insights into recipient engagement.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Open Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Track clicks within your transactional emails to evaluate user interest and interaction with your content.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Click Tracking</span>
                      </div>
                      <div className="features-desc">
                        <span className="tooltip">Access detailed reports on how recipients engage with your transactional emails, including opens, clicks, and more, to optimize future communications.</span>
                        <i className="bi-check bg-success"></i>
                        <span className="fdesc">Transactional Engagement Reports</span>
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
                        <span className="fdesc">Log Retention (30 Days)</span>
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
                      <Link to="https://mumara.com/contact-us" target="_blank" className="btn btn-info btn-order-pb">Contact Sales</Link>
                    </div>
                  </div>
                </div>
              </Box>

              <div className="col-md-3 offset-md-9 view-limits-block pb-feature-blk footer-limits">
                <div className="features-desc limits-all">
                  <span className="tooltip">
                    <div className="limits-head">Limits</div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Maximum Hourly Speed</span>
                      <span className="limit-value">{this.state.nHourlySpeed}</span>
                      <div className="totalbar"> </div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Daily Limit</span>
                      <span className="limit-value">{this.state.nDailyLimit}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Sending Domains</span>
                      <span className="limit-value">{this.state.nSendingDomain}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Bridges</span>
                      <span className="limit-value">{this.state.nBridges}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Segments</span>
                      <span className="limit-value">{this.state.nSegments}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Triggers</span>
                      <span className="limit-value">{this.state.nTriggers}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Trigger Actions</span>
                      <span className="limit-value">{this.state.nTriggersAction}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Evergreen Campaigns</span>
                      <span className="limit-value">{this.state.nEvergreenCampaigns}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Transactional Credits</span>
                      <span className="limit-value">{this.state.nTransactionalCredits}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Webhooks Limit</span>
                      <span className="limit-value">{this.state.nWebhooksLimit}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Landing Pages</span>
                      <span className="limit-value">{this.state.nLandingPages}</span>
                      <div className="totalbar"></div>
                    </div>
                    <div className="limits-row">
                      <span className="limit-content"><i className="bi-check"></i> Pixels</span>
                      <span className="limit-value">{this.state.nPixels}</span>
                      <div className="totalbar"></div>
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


export default NewsLetterPricing;