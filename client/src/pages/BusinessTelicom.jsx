import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import { CiCircleCheck } from "react-icons/ci";
import rating from "../assets/images/Icons/trustpilot.webp";
import telicom1 from "../assets/images/Home/telicom1.avif"

const BusinessTelicom = () => {
  return (
    <>
      <Layout>
      <div className="contact">
        <div className="contact-content">
          <h2>BE IN TOUCH</h2>
          <h1>
            {" "}
            If Any <strong>questions </strong> then you have before switching
            provider, please <strong>in touch.</strong> .
          </h1>
          <p>Our team are on hand to help you every step of the way</p>
          <div className="contact-content-img">
            <div>
              <img src={rating} />
            </div>
            <div>
              <p>
                {" "}
                Rated Excellent on <a href="#"> Trustpilot</a> <br />
                Over 2,000 Reviews
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Get  Immediate Pricing at BGS</h2>
          <p>
            {" "}
            <CiCircleCheck />
            Save up to 65%
          </p>
          <div>
            <form>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Full Name"
                />
              </div>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Business Name"
                />
              </div>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="Phone Number"
                />
              </div>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0"
                  placeholder="PostCode"
                />
              </div>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control  rounded-0"
                  placeholder="Your Mail"
                />
              </div>

              <buttton to="#" className="banner-contact-link">
                Save more now
              </buttton>
            </form>
          </div>
        </div>
      </div>

      {/* wrapper wrapper--normal */}
      <div className="">
        <div className="w-container ">
          <div className="section-header">
            <div className="w-titles">
              <h2>should I  Compare telecoms services with BGS Energy </h2>
              <p>
                Over the past couple of years, energy prices have risen at an
                unprecedented rate. And although they’ve have started to fall,
                they’re still considerably higher than they were during the
                first half of 2021. With a home energy comparison, you could
                potentially find yourself a better deal.
              </p>
              <span>
                {" "}
                What does that better deal look like in the current market? The
                latest Energy Price Cap is currently set at £1,834 a year until
                31 December – this is for the typical UK household using gas and
                electricity and paying via Direct Debit. Energy suppliers are
                starting to offer fixed household deals again too, which could
                also help you lock in at a lower rate.{" "}
              </span>
            </div>

            <div className="w-image img--circle">
              <img src={telicom1} />
            </div>
          </div>
        </div>
      </div>
      
      {/* switch energy */}
      <div className="home-switch">
          <h1> At BGS Switching energy suppliers couldn't be easier</h1>
          <p className="home-switch-main">
            If you’re a business owner, it’s only natural that you’ll be
            concerned with minimising business disruption.
          </p>
          <p>
            with minimising business disruption. If you’re a business owner,
            it’s only natural that you’ll be concerned with minimising business
            disruption. This is one of the reasons that some companies don’t
            switch energy providers, because they believe it’ll be stressful,
            disruptive and time-consuming. Switching energy suppliers can help
            your business massively save on your business utilities. bgs
            Bidder provides services that allow any business to quickly and
            easily switch energy suppliers without the hassle. We’ve streamlined
            our service so that you can easily compare business bgs prices
            and get a free quote within as little as 5 minutes.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default BusinessTelicom;
