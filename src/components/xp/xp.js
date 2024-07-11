import React from 'react';
import Card from '../card/card';



const Xp = () => (
  <div>
    <h1><mark>Work Experience</mark></h1>
    <div style={{display: "flex", flexWrap: "wrap", alignContent: "center"}}>
        <Card
          title={"Work Study"}
          subtitle={"U of T, 2024-2025"}
          content={"Relevant Work Study Position."}
        />
        <Card
          title={"Verification Specialist"}
          subtitle={"Shopify, 2022-2023"}
          content={" I ensured KYC and AML compliance, supported merchants with Shopify Payments verification,"+
          " collaborated with Stripe and PayPal, and improved team efficiency through technical solutions and"+
          " process optimization."}
        />
        <Card
          title={"Support Advisor"}
          subtitle={"Shopify, 2021-2022"}
          content={"I delivered exceptional first-contact support to merchants, resolving a broad spectrum "+
          "of e-commerce issues with expertise in Shopify's platform, while improving team processes and enhancing"+
          " customer satisfaction through professionalism and empathy."}
        />
        <Card
          title={"Web Developer"}
          subtitle={"Univeristy of Toronto, 2021"}
          content={"I significantly contributed to integrating the Trinity Sustainability Initiative"+
          " into the Trinity College website, ensuring brand compliance, designing the structure, content"+
          " implementation, and maintaining clear communication with stakeholders."}
        />
        <Card
          title={"IT Helpdesk"}
          subtitle={"Town of Oakville, 2019-2020"}
          content={" I maintained and repaired various hardware, managed toner inventory, and supported "+
          "the Information Services team with IT projects and network tasks."}
        />
        <Card
          title={"Senior Keyholder"}
          subtitle={"EB Games, 2018-2019"}
          content={"I helped customers with gaming selections, managed pre-orders, drove sales, provided "+
          "technical advice, and took on store opening/closing duties, including bank deposits and balancing the tills."}
        />
        <Card
          title={"Student Library Assistant"}
          subtitle={"Robarts Library, 2015-2017"}
          content={"I assisted with the circulation of library materials including registering new barcodes in addition to checkin and checkout. "+
          "I also was responsible for overseeing the entrance and exit activity in the library, ensuring efficient and helpful service."}
        />
        <Card
          title={"Membership Services"}
          subtitle={"Athletic Center, 2014-2015"}
          content={"I delivered comprehensive administrative support and customer service at the Athletic"+
          " Centre, handling membership sales, program registrations, and inquiries, while ensuring efficient "+
          "and friendly interactions with all members and staff."}
        />
        <Card
          title={"Patron Services"}
          subtitle={"TSO, 2013-2014"}
          content={"I utilized my expertise in Tessitura Ticketing Systems and classical music "+
          "to provide excellent and efficient customer service for the Toronto Symphony patrons through "+
          "various communication channels and duties, including sales, exchanges, and event support."}
        />
            </div>
  </div>
);



export default Xp;
