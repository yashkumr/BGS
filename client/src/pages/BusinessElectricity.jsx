import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import { CiCircleCheck } from "react-icons/ci";
import rating from "../assets/images/Icons/trustpilot.webp";
import largetelca from "../assets/images/Home/large-TELCA-2022-Banner.webp";

const BusinessElectricity = () => {
  return (
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
          <h2>Get Immediate Pricing</h2>
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
                  className="form-control"
                  placeholder="ENTER BUSINESS POSTCODE"
                />
              </div>

              <buttton to="#" className="banner-contact-link">
                Save more now
              </buttton>
            </form>
          </div>
        </div>
      </div>

      <div className="compare">
        <div className="compare-img">
          <h2 className="text-center">
            Why compare business electricity rates and suppliers?
          </h2>
          <img src={largetelca} />
        </div>
        <div>
          <p>
            According to Bgs You could save up to 65% on your annual electricity
            bills by changing your supplier – hundreds of pounds worth of
            savings. Our award-winning customer service team handles the whole
            switching process too, from start to finish – allowing you to focus
            on running your business.
          </p>
          <p>
            When you compare business electricity prices with bgs Bidder,
            you’ll save time and money. Switching can help you ensure you’re on
            the best deal for your business, enjoy better customer service, and
            avoid being stuck on costly rollover tariffs or expensive deemed
            rates.
          </p>
          <strong>
            Get the best business electricity prices. Start your business
            electricity comparison!
          </strong>
          <div className="compare-buget">
            <div>
              <span>
                90&nbsp;K <br />
                
              </span>
              Business Helped
              
            </div>
            <div>
              <span>
                90&nbsp;K <br />
                
              </span>
              Business Helped
              
            </div>
            <div>
              <span>
                90&nbsp;K<br />
                
              </span>
              Business Helped
              
            </div>
          </div>
        </div>
      </div>

       {/* switch energy */}
       <div className="home-switch">
          <h1>Switching energy suppliers couldn't be easier</h1>
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
  );
};

export default BusinessElectricity;
