import React from "react";
import Layout from "../components/Layout/Layout";

const Complaint = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact-content">
          <h2>Conditions</h2>
          <h1>
            When you engage in business with <span> BGS Energy</span> the
            following terms and conditions come into effect.
          </h1>
        </div>

        <div className=""></div>
      </div>

      {/* conditions */}

      <div className="text-muted " style={{ width: "90%", margin: "auto" }}>
        <h6 className="m-4">Step by Step Complaints Procedure</h6>

        <p>
          {" "}
          We endeavour to offer the highest level of service throughout the
          duration of your contract However, if something does go wrong and you
          want to make a complaint, we will investigate any issues and aim to
          rectify any issues promptly, where possible We embrace any feedback
          and continually look to improve. However, if a customer feels
          dissatisfied with any element of our service, we welcome the
          opportunity to put things right.
        </p>

        <p>
          We would like to think that it would not be necessary to go beyond the
          first step, however we understand that in very rare circumstances you
          may need to present your case where the end result leaves you
          unsatisfied. Our complaint service is impartial and free for the
          clients to use. Any customers making complaints will be treated with
          courtesy and respect.
        </p>
        <h2>Step 1</h2>
        <p>
          A complaint is any expression of dissatisfaction with the service
          received by BGS Energy Bidder. A complaint may be made in writing, email,
          by telephone or in any other form. Please provide as much detail as
          possible about the reasons for your complaint and the outcome you
          would like to see. We retain copies of all complaints received.
        </p>

        <p>
          Email: customerservices@BGS Energybidder.co.uk Telephone: 01858439330
          Post: BGS Energy Bidder, Corby Innovation Hub, Bangrave Road South,
          Corby, NN 17 1NN
        </p>
        <h2>Step 2</h2>
        <p>
          We will send you a written or electronic acknowledgement of a
          complaint within five business days of receipt, identifying the person
          who will be handling the complaint for the business. Wherever
          possible, that person will not have been directly involved in the
          matter, which is the subject of the complaint, and will have authority
          to settle the complaint.
        </p>
        <h2>step 3</h2>
        <p>
          Within two weeks of receiving a complaint we will send you either: a
          final response which adequately addresses the complaint; or a holding
          response, which explains why we are not yet in a position to resolve
          the complaint and indicates when we will make further contact with
          you. If we do not hear from you within a timescale of 7 days after
          issuing our final response, we will assume you are satisfied with the
          outcome.
        </p>
        <p>
          The provision of a quotation by a supplier via BGS Energy does not
          constitute an offer to the customer and offers will each have their
          own supplier’s terms and obligations attached.
        </p>
        <p>
          If the customer accepts a quotation and a contract is executed between
          the customer and the supplier, the contract is binding, and the
          customer will not be permitted to revoke such an acceptance. There is
          no cooling off period for business energy contracts.
        </p>
        <p>
          The supplier shall be entitled at any time to refuse to accept a
          customer’s offer of acceptance at their discretion.
        </p>

        <h5 className="">Step 4</h5>
        <p>
          If you are not satisfied with our final response, we will be happy to
          consider a further response, but in the absence of new evidence or
          material flaws being evident in our findings, it is unlikely to change
          the outcome of our investigation.
        </p>
        <p>
          We will send you a final response which adequately addresses the
          complaint no later than eight weeks from receiving a complaint
        </p>
        <h2>Step 6</h2>
        <p>
          If you are unhappy with our final response, you may use the Dispute
          Resolution Ombudsmen. You can also use this service in the unlikely
          event that the complaint has not been resolved within eight weeks of
          submission.
        </p>

        <h5 className="">Change of Tenancy Notifications and Fees</h5>
        <p>
          If you are unhappy with our final response, you may use the Dispute
          Resolution Ombudsmen. You can also use this service in the unlikely
          event that the complaint has not been resolved within eight weeks of
          submission.
        </p>
      </div>
    </Layout>
  );
};

export default Complaint;
