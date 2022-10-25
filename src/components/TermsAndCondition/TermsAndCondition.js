import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div className="container my-3">
      <p>
        <h4>Terms and Conditions</h4> Welcome to <h5>Learn Shine</h5>
        <br />
        By accessing this website we assume you accept these terms and
        conditions. Do not continue to use Website Name if you do not agree to
        take all of the terms and conditions stated on this page. <br />
        The following terminology applies to these Terms and Conditions, Privacy
        Statement and Disclaimer Notice and all Agreements: “Client”, “You” and
        “Your” refers to you, the person log on this website and compliant to
        the Company's terms and conditions. “The Company”, “Ourselves”, “We”,
        “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”,
        refers to both the Client and ourselves. All terms refer to the offer,
        acceptance and consideration of payment necessary to undertake the
        process of our assistance to the Client in the most appropriate manner
        for the express purpose of meeting the Client's needs in respect of
        provision of the Company's stated services, in accordance with and
        subject to, prevailing law of Netherlands. Any use of the above
        terminology or other words in the singular, plural, capitalization
        and/or he/she or they, are taken as interchangeable and therefore as
        referring to same. Cookies We employ the use of cookies. By accessing
        Website Name, you agreed to use cookies in agreement with the Company
        Name's Privacy Policy. Most interactive websites use cookies to let us
        retrieve the user's details for each visit. Cookies are used by our
        website to enable the functionality of certain areas to make it easier
        for people visiting our website. <br />
        <h5> License</h5>
        <br />
        Unless otherwise stated, Company Name and/or its licensors own the
        intellectual property rights for all material on Website Name. All
        intellectual property rights are reserved. You may access this from
        Website Name for your own personal use subjected to restrictions set in
        these terms and conditions. <br />
        You must not:
        <br />
        1.Republish material from Learn shine <br />
        2.Sell, rent or sub-license material from Learn shine <br />
        3.Reproduce, duplicate or copy material from Website Name <br />
        4.Redistribute content from Website Name
      </p>
      <Link to="/signup">
        <button className="btn btn-outline-primary">Back to Sign up</button>
      </Link>
    </div>
  );
};

export default TermsAndCondition;
