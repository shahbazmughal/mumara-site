import React from "react";
import connection5 from "./images/connection5.png";
import connection5b from "./images/connection5-b.png";
import emailcapture from './images/sending-domain.jpg';
import emailcampaign from './images/Emailcampaign-rafiki.jpg';
import sentMessage from './images/SentMessage-rafiki.jpg';
import onlinewishes from './images/Onlinewishes-rafiki1.jpg';
import bg18 from "./images/bg18.svg";
import "./section18.css";
export default function Section18() {
    return (
        <div className="one-section one-section-18 pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="odd-section mx-auto mt-1">
                            <div className="row">
                                <div className="col-md-6 align-self-center">
                                    <h1 className="lh-4 fw600 text-black mt-20">Add a <span className="fw600 text-red">Sending Domain</span></h1>
                                    <p className="fw400 text-black margint10 lh-5 fs-20">Sending domains are the domains that appear in message headers and the email appears to be sent from these domains. When you add a sending domain, Mumara One will generate DNS keys to authenticate the domain.</p>
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <img
                                        src={emailcapture} alt="problems"
                                        className="img-fluid mx-auto d-block img-style"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <img
                            src={connection5} alt="connection"
                            className="img-fluid mx-auto d-block connection5"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row even-section mx-auto">
                            <div className="col-lg-6 col-md-6 align-self-center problem-text mt-20 order-md-2">
                                <h1 className="lh-4 fw600 text-black">Add a <span className="fw600 text-red">Contact List</span></h1>
                                <p className="fw400 margint10 lh-4 fs-20 text-blackish">A contact list is where you can store your leads, and their important information. You can segment your list to send the right information to the right audience. </p>
                            </div>
                            <div className="col-md-6 align-self-center order-md-1">
                                <img
                                    src={emailcampaign} alt="emailcampaign"
                                    className="img-style img-fluid mx-auto d-block"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <img
                            src={connection5b} alt="connection"
                            className="img-fluid mx-auto d-block connection5"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row odd-section mx-auto">
                            <div className="col-lg-6 col-md-6 align-self-center problem-text mt-20">
                                <h1 className="lh-4 fw600 text-black">Add a <span className="fw600 text-red">Broadcast</span></h1>
                                <p className="fw400 margint10 text-black lh-4 fs-20">A broadcast is an email template that your recipient will receive carrying TEXT/HTML body content. Create your broadcast using HTML Editor or Drag &amp; Drop Builder.</p>
                            </div>
                            <div className="col-md-6 align-self-center">
                                <img
                                    src={sentMessage} alt="sentMessage"
                                    className="img-fluid mx-auto d-block img-style "
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <img
                            src={connection5} alt="connection"
                            className="img-fluid mx-auto d-block connection5"
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row even-section mx-auto">
                            <div className="col-lg-6 col-md-6 align-self-center problem-text order-md-2 mt-20">
                                <h1 className="lh-4 fw600 text-black">Schedule Your <span className="fw600 text-red">Broadcast</span></h1>
                                <p className="fw400 margint10 lh-4 fs-20 text-blackish">After adding a contact list and sending the domain, you are ready to schedule your broadcast. Give relevant information to the required fields, and send your broadcast instantly or schedule it to send it later. </p>
                            </div>
                            <div className="col-md-6 align-self-center order-md-1">
                                <img
                                    src={onlinewishes} alt="onlinewishes"
                                    className="img-fluid mx-auto d-block img-style"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}