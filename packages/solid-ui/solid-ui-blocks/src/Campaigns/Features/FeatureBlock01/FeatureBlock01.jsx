import React from 'react'
import Reveal from '@solid-ui-components/Reveal'
import ContentButtons from '@solid-ui-components/ContentButtons'
import WithDefaultContent from '@solid-ui-blocks/WithDefaultContent'


function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const FeatureBlock01 = ({ content: { text, buttons, form, images, html } }) => (
  <div className="pt-40 pb-60 feature-block-01 campaigns-feature" id="features">
      <div className="container">

        <Reveal effect='fadeInUp' duration={0.7}>
          <h2 className=" text-42 h1g text-center mb-20">“ SO YOU ARE IN SAFE HANDS ”</h2>
        </Reveal>
        <Reveal effect='fadeInUp' duration={0.9}>
          <p className="text-left text-26 text-center">Enhanced Deliverability, Increased Open Rate, High CTR, Advanced Realtime Reporting, and a lot more features, available to you starting from FREE.</p>
        </Reveal>
        <Reveal effect='fadeInUp' duration={1.1}>
          <h2 className="sub-title text-center text-32 text-blue mb-30">Key Features to Look At:</h2>
        </Reveal>

        <div className="row">
          <div className="col-md-6">
            <div className="ctaperson mb-20 pb-76">
                <div className="ctaboxalign">
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Custom Fields of all Types" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Custom Fields</b> of all Types </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Assign Custom Fields to the Contact Lists" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Assign Custom Fields</b> to the Contact Lists </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="List/Tree View of the Contact Lists" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>List/Tree View</b> of the Contact Lists </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Import Your Contacts From a CSV File" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Import Your Contacts</b> From a CSV File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Export Your Contacts to a CSV File" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Export Your Contacts</b> to a CSV File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Make Parts of the Contact List by <b>Splitting it, based on Number of Contacts or Number of Lists" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Make Parts</b> of the Contact List by <b>Splitting it</b>, based on Number of Contacts or Number of Lists </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Merge a Contact List into Another" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Merge</b> a Contact List into <b>Another</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Arrange Contact Lists into Groups" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Arrange</b> Contact Lists into <b>Groups</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Custom Audiences based on Contact Fields and Statistics (Segmentation)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Custom Audiences</b> based on Contact Fields and Statistics <b>(Segmentation)</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png"  alt="Block the problematic recipients/domains From Receiving Further Emails by <b>Suppressing Them" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Block the <b>problematic recipients/domains</b> From Receiving Further Emails by <b>Suppressing</b> Them </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Bulk Update Your Contacts According to Your Needs" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Bulk Update</b> Your Contacts According to Your Needs </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Fastest Import Mechanism with Rocket Import" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Fastest</b> Import Mechanism with <b>Rocket Import</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Option to Skip/Overwrite/Update Duplicate Contacts" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to <b>Skip/Overwrite/Update Duplicate Contacts</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Flexible Custom Fields Mapping During Import" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Flexible <b>Custom Fields Mapping</b> During Import </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Massive Sorting Options for Data View" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Massive <b>Sorting Options</b> for Data View </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Double Optin Functionality available to Confirm Subscriptions" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Double Optin</b> Functionality available to <b>Confirm Subscriptions</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create Drip Campaigns to Send Auto-followup Emails to Your Contacts" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Drip Campaigns</b> to Send <b>Auto-followup Emails</b> to Your Contacts </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Run Split Tests to Find the Best Converting of Your Broadcast or Contact List" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Run <b>Split Tests</b> to Find the <b>Best Converting</b> of Your Broadcast or Contact List </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="A/B Testing of Your Broadcasts, Contact Lists and Sending Nodes" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>A/B Testing</b> of Your Broadcasts, Contact Lists and Sending Nodes </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Build Unlimited Variations of Your Content by Spinning the Content" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Build <b>Unlimited Variations</b> of Your Content by <b>Spinning the Content</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Send Personalized Content-Blocks based on Specific Criteria Using Dynamic Content Tags" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Send Personalized Content-Blocks based on Specific Criteria Using <b>Dynamic Content Tags</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="If/else Conditions for the Content Areas Based on Custom Field Values" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>If/else Conditions</b> for the Content Areas Based on Custom Field Values </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Schedule as many Broadcasts as Your Like" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Schedule</b> as many <b>Broadcasts</b> as Your Like </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Post Scheduling of the Future Broadcasts" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Post Scheduling</b> of the Future Broadcasts </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Pause/resume Scheduled Broadcasts" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Pause/resume</b> Scheduled Broadcasts </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Set Hourly Sending Rate of the Campaigns" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Set <b>Hourly Sending Rate</b> of the Campaigns </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Daily/Monthly/Overall Sending Quotas/limits" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Daily/Monthly/Overall</b> Sending Quotas/limits </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Multi-MTA Support (Rotate Sending Nodes / SMTP)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Multi-MTA</b> Support (Rotate Sending Nodes / SMTP) </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Multi-Broadcasts Support (Rotate Broadcasts)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Multi-Broadcasts</b> Support (Rotate Broadcasts) </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Schedule Broadcast to your Custom Audiences</b> (Segments)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Schedule</b> Broadcast to your <b>Custom Audiences</b> (Segments) </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Batches and Loop Sending Methodology" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Batches and Loop</b> Sending Methodology </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Choice of Random or Sequential Sending Node Selection for Rotation" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Choice of Random or Sequential <b>Sending Node Selection</b> for Rotation </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Track Opening of the HTML Emails" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Track Opening</b> of the HTML Emails </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Track the Links that are Being Clicked" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Track the Links</b> that are Being <b>Clicked</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Option to Skip Duplicates when Scheduling to Multiple Contact Lists" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to <b>Skip Duplicates</b> when Scheduling to <b>Multiple Contact Lists</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="List-Unsubscribe Header Implementation for Optimized Sending" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>List-Unsubscribe Header</b> Implementation for Optimized Sending </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Flexibility to Fetch Sender-Info From Contact List Information and Sending Node Information" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Flexibility to <b>Fetch Sender-Info</b> From <b>Contact List</b> Information and <b>Sending Node</b> Information </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Process Bounces by POP/IMAP Method" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Process Bounces</b> by <b>POP/IMAP</b> Method </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="A Wide Range of Bounce Rules to Differentiate Between Soft and Hard Bounces" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> A Wide Range of <b>Bounce Rules</b> to Differentiate Between <b>Soft and Hard</b> Bounces </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Skip Hard Bounced Contacts while Sending Campaigns" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Skip Hard Bounced</b> Contacts while Sending Campaigns </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Add or Edit Bounce Rules" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add or Edit <b>Bounce Rules</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Drag &amp; Drop Processing Order of the Bounce Rules" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Drag &amp; Drop <b>Processing Order</b> of the Bounce Rules </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Add Sending Domains to Brand Your Emails" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Sending Domains</b> to <b>Brand</b> Your Emails </p>
                  </div>
                  <div className="list-overflow-green14 mb-40"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Generate DKIM Public and Private Keys" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Generate DKIM</b> Public and Private <b>Keys</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create Triggers to Perform Actions Upon the Occurrence of Events" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Triggers</b> to Perform <b>Actions</b> Upon the <b>Occurrence of Events</b> </p>
                  </div>
                  <div className="inner">
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Initiate a Trigger when a Contact is added to a List or Segment" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> <b>Initiate a Trigger</b> when a Contact is <b>added</b> to a <b>List or Segment</b> </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Option to Set Custom Delay before Starting a Trigger" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Option to Set <b>Custom Delay</b> before Starting a Trigger </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Upon Meeting a Criteria" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Upon Meeting a <b>Criteria</b> </p>
                    </div>
                    <div className="inner2">
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Copy or Move the Contact to Another Contact List" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> <b>Copy or Move</b> the Contact to <b>Another</b> Contact List </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Send a Broadcast" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Send a <b>Broadcast</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Notify Admin by Sending an Email" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> <b>Notify Admin</b> by Sending an <b>Email</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Start a Series of Drip Emails" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Start a Series of <b>Drip Emails</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Change Contact Status" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Change <b>Contact Status</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Change Contact Format to Receive HTML or TEXT" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Change Contact Format to Receive <b>HTML or TEXT</b> </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Update a Custom Field Value" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Update a Custom Field Value </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Remove Contact from the Contact List" className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Remove Contact from the Contact List </p>
                      </div>
                      <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Add the Contact to Suppression List " className="bulletlistgreen14 img-responsive" />
                        <p className="text-15 mont list-paddingx"> Add the Contact to Suppression List </p>
                      </div>
                    </div>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Sign <b>Outgoing Emails with a <b>Digital Signature" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Sign <b>Outgoing Emails</b> with a <b>Digital Signature</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Enable <b>Custom Tracking Domains to Brand the Hyperlinks and Image Source URLs" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Enable <b>Custom Tracking Domains</b> to Brand the <b>Hyperlinks</b> and <b>Image Source URLs</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Intellectual Pattern of Tracking Domain Selection" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Intellectual Pattern</b> of Tracking Domain Selection </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Add Sending Node to Connect with an ESP Account or an SMTP" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Sending Node</b> to Connect with an <b>ESP Account</b> or an <b>SMTP</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Process Delivery Reports from Callbacks" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Process <b>Delivery Reports</b> from <b>Callbacks</b> </p>
                  </div>
                </div>
              </div>
          </div>
          <div className="col-md-6">
            <div className="ctaperson step2">
                <div className="ctaboxalign">
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create Beautiful and Error-free Broadcasts" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Beautiful and Error-free Broadcasts</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="WYSIWYG HTML Editor with Massive Options" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>WYSIWYG HTML Editor</b> with Massive Options </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Send Personalized Emails by Inserting Values from Recipient’s Fields" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Send <b>Personalized</b> Emails by Inserting Values from <b>Recipient’s Fields</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Embed System Variables in Your Broadcasts e.g. today’s date, subscriber-id, recipient-id, etc" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Embed <b>System Variables</b> in Your Broadcasts e.g. today’s date, subscriber-id, recipient-id, etc </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Keep Your Reputation High by Allowing Recipients to Unsubscribe Automatically" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Keep Your <b>Reputation High</b> by Allowing Recipients to <b>Unsubscribe Automatically</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Embed Web-version Link of Your Broadcast to View in Browser" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Embed <b>Web-version</b> Link of Your Broadcast to View in Browser </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Send both HTML and TEXT Content" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Send both <b>HTML and TEXT</b> Content </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Check Spam Score Before You Send" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Check <b>Spam Score</b> Before You Send </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Preview Your Broadcast for all Mail Clients" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Preview Your Broadcast</b> for all Mail Clients </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Advanced Drag &amp; Drop Email Newsletter Builder" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced Drag &amp; Drop <b>Email Newsletter Builder</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Import Your Broadcast From a URL" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Import</b> Your Broadcast <b>From a URL</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Fully Responsive Emails (resizes automatically according to the recipient’s screen size)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Fully Responsive</b> Emails (resizes automatically according to the recipient’s screen size) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Integrated Email Server Providers" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Integrated <b>Email Server Providers</b> </p>
                  </div>
                  <div className="inner">
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Sendgrid" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Sendgrid </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Mailgun" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Mailgun </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Amazon SES" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Amazon SES </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Sparkpost" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Sparkpost </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Elastic Email" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Elastic Email </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Mailjet" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> Mailjet </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="SMTP2GO" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> SMTP2GO </p>
                    </div>
                    <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="PostMark" className="bulletlistgreen14 img-responsive" />
                      <p className="text-15 mont list-paddingx"> PostMark </p>
                    </div>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Quickly Setup the PowerMTA Server with PMTA Addon and Let Mumara Generates" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Quickly Setup the <b>PowerMTA Server</b> with PMTA Addon and Let Mumara Generates </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Sending Nodes, DNS Keys, Bounce Handlers, PMTA Config and Everything Else Itself" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Sending Nodes, DNS Keys, Bounce Handlers, PMTA Config</b> and Everything Else Itself </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Process Delivery Status Notifications from PowerMTA <b>Accounting Files" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Process <b>Delivery Status Notifications</b> from PowerMTA <b>Accounting Files</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Import SMTPs from a File" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Import SMTPs</b> from a File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Auto Activate/Deactivate SMTPs based on Connectivity" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Auto <b>Activate/Deactivate SMTPs</b> based on Connectivity </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Export SMTPs to a File" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Export SMTPs</b> to a File </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create Single and Double Optin Webforms for Your Website or Application with Advanced Functionality" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Single and Double Optin Webforms</b> for Your Website or Application with Advanced Functionality </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Flag the Contacts Producing Spam Complaints and Suppress Them by Processing Feedback Loops" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Flag the Contacts Producing <b>Spam Complaints</b> and Suppress Them by Processing <b>Feedback Loops</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create Staff Users (Admins) and Assign Them <b>Desired Privileges" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Staff Users (Admins)</b> and Assign Them <b>Desired Privileges</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Multithreading to Multiply the Email Sending Speed" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Multithreading</b> to Multiply the Email Sending Speed </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Advanced User Management" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced <b>User Management</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create User Roles and Assign Desired Privileges" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>User Roles</b> and Assign Desired <b>Privileges</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Extensive Access Control List (ACL) for Users and Staff/Admin Roles" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Extensive <b>Access Control List (ACL)</b> for Users and Staff/Admin Roles </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Monitor User’s Assets (data) from admin account" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Monitor User’s Assets</b> (data) from admin account </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="HTTP/HTTPS Protocols Switch" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>HTTP/HTTPS</b> Protocols Switch </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="SMTP Persistent Connection (Send Your Desired Number of Emails Per Connection)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> SMTP <b>Persistent Connection</b> (Send Your Desired Number of Emails Per Connection) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Keep the <b>Database Optimized by Auto-deletion of Logs After X Number of Days" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Keep the <b>Database Optimized</b> by <b>Auto-deletion</b> of Logs After X Number of Days </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Add Additional Header/Footer to Every Email Going Out" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Additional Header/Footer</b> to Every Email Going Out </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Option to Select Desired Domain Key Bit Size" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to Select Desired <b>Domain Key Bit Size</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Automatic Pause/resume of running Campaigns Upon Connection Failure with the Sending Node" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Automatic Pause/resume</b> of running Campaigns Upon Connection Failure with the Sending Node </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Detect and Ignore Duplicate Opening of Emails by Bots" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Detect and Ignore <b>Duplicate Opening</b> of Emails by <b>Bots</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Several Levels of Debug Log Reporting" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Several Levels of <b>Debug Log Reporting</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Display/Hide Remember Me Option" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Display/Hide <b>Remember Me</b> Option </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Option to Logout Idle Users Automatically" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Option to <b>Logout Idle Users</b> Automatically </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Flexible Cron Timers Yourself for Different" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Flexible Cron Timers</b> Yourself for Different Jobs </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Add Custom Headers Globally to Every Email going Out" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Custom Headers Globally</b> to Every Email going Out </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Add <b>Custom Headers with Specific Sending Nodes" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Add <b>Custom Headers</b> with Specific <b>Sending Nodes</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create <b>API Roles and Attach Desired Permissions" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>API Roles</b> and Attach <b>Desired Permissions</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Generate API Tokens and Assign Roles" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Generate <b>API Tokens</b> and <b>Assign Roles</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Brand the Application with Your Own Logo, Title, Copyright Statement, and Images" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Brand the Application</b> with Your <b>Own Logo, Title, Copyright Statement, and Images</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Overwrite the Design with Your Own Custom CSS" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Overwrite the <b>Design</b> with Your Own <b>Custom CSS</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Hide Your Main Domain by Using a Different Primary Domain" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Hide Your Main Domain</b> by Using a <b>Different Primary Domain</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Advanced Level Graphical Statistics" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced Level <b>Graphical Statistics</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Realtime Reporting of Delivery Statuses and Engagements (e.g. Opened, Clicked, Unsubscribed)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Realtime Reporting</b> of <b>Delivery Statuses</b> and <b>Engagements</b> (e.g. Opened, Clicked, Unsubscribed) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Geolocation Analytics and Individual Tracking" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Geolocation Analytics</b> and Individual <b>Tracking</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="A/B Testing of Your Statistics Ingredients" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>A/B Testing</b> of Your Statistics Ingredients </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Search Functionality in your Campaign Stats" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Search Functionality</b> in your Campaign Stats </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Export Options for your Statistics" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Export Options</b> for your Statistics </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Trigger Statistics along with Number of Actions Performed" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Trigger Statistics</b> along with Number of <b>Actions</b> Performed </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Detailed &amp; Explanatory Debug Logs View" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Detailed &amp; Explanatory <b>Debug Logs</b> View </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="View Complete Activity Log" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> View Complete <b>Activity Log</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Keep Track of the People Accessing the Application" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Keep Track</b> of the People <b>Accessing</b> the Application </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="ESP Callback Logs" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> ESP <b>Callback Logs</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Very User-Friendly Update Process (Need a Few Mouse Clicks)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Very User-Friendly <b>Update Process</b> (Need a Few Mouse Clicks) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Create Restoration Points to Keep the Backups of the Application and Database" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Create <b>Restoration Points</b> to Keep the <b>Backups</b> of the Application and Database </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Two Factor Authentication (Addon)" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> <b>Two Factor</b> Authentication (Addon) </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="In-app Bug Reporting System" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> In-app <b>Bug Reporting</b> System </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Advanced Restful API along with Massive Documentation" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Advanced Restful API along with Massive Documentation </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Inline Help Tooltips and Help Buttons" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Inline <b>Help Tooltips</b> and <b>Help Buttons</b> </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Enhanced &amp; Complete <b>Knowledgebase of Mumara" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Enhanced &amp; Complete <b>Knowledgebase</b> of Mumara </p>
                  </div>
                  <div className="list-overflow-green14 mb-20"> <img src="/static/check-8166153ac362b18e185c42c6a0d3bfb4.png" alt="Premium Support &amp; Helpdesk" className="bulletlistgreen14 img-responsive" />
                    <p className="text-15 mont list-paddingx"> Premium <b>Support &amp; Helpdesk</b> </p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="row">
          <Reveal effect='fadeInUp' duration={1.1}>
            <div className="work-yourself text-center text-40 w100">LET ME TELL YOU <br />This is not the <span style={{color: "#3078f4"}}><strong>complete features</strong></span> list but a key features list. You’ll <strong>experience it yourself</strong> when you have it for yourself!</div>
          </Reveal>
        </div>

      </div>
  </div>
)

export default WithDefaultContent(FeatureBlock01)
