import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import rating from "../assets/images/Icons/trustpilot.webp";
import { NavLink } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";
import "../assets/customCss/Main.css";
import SlickSlider from "../components/Layout/SlickSlider.jsx";

const Thanku = () => {
  return (
    <Layout>
      <div className="thanku-top p-5">
        <div className="thanku-h">
          <h1 className="text-light p-3">
            BGS energy experts are currently working to find the best quotes for
            bgs energy
          </h1>

          <p className="text-light">
            Due to the complexity of gathering business rates, we need to
            confirm a few details to ensure we offer accurate prices.
          </p>
        </div>
        <div className="thanku">
          <div className="">
            <h4 className="text-light p-3">
              Why am I not seeing prices online?
            </h4>
            <p className="text-light p-3">
              Our energy experts will give you a call to discuss your bespoke
              business energy quotes that are tailored to your needs. As an
              award-winning energy broker, we can advise you on the best
              business gas and business electricity prices. Using immediate
              pricing access to all major UK business energy suppliers, we can
              help find the best energy tariff for your business. We will
              provide you with a quote that is bespoke to the needs of your
              business in a matter of minutes.
            </p>
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

          <div className="thanku-info">
            <div className="">
              <h3 className="text-light">What happens next?</h3>
              <p className="text-light">
                {" "}
                1:We are now working to identify the best quote that suits your
                business requirements
              </p>
              <p className="text-light">
                2:We will call you on 020 7123 4567 to discuss your quote
              </p>
              <p className="text-light">
                3:If you are happy to proceed, we will complete the entire
                switching process on your behalf
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* slick-slider */}
      <SlickSlider />

      {/* case studies */}
      <div>
        <div className="home-case">
          <div className="home-case-study">
            <div>
              <img src={banner11} />
            </div>
            <div className="home-case-study-content">
              <NavLink to="#">HTC CORPORATION</NavLink>
              <h2>£14000 Total Savings</h2>
              <p>
                Founded in 2009, with a range of industry accolades to our name,
                Hayri recognised that bgs Bidder was a well-established and
                growing business and our five star Trustpilot reviews along with
                our size and longevity ensured HTC Europe had peace of m ...
              </p>
              <NavLink to="#" className="banner-contact-link p-2">
                Save more now
                <span>
                  {" "}
                  <FaGreaterThan />
                </span>
              </NavLink>
            </div>
          </div>
          <div className="home-case-study">
            <div>
              <img src={banner14} />
            </div>
            <div className="home-case-study-content">
              <NavLink to="#">HTC CORPORATION</NavLink>
              <h2>£14000 Total Savings</h2>
              <p>
                Founded in 2009, with a range of industry accolades to our name,
                Hayri recognised that bgs Bidder was a well-established and
                growing business and our five star Trustpilot reviews along with
                our size and longevity ensured HTC Europe had peace of m ...
              </p>
              <NavLink to="#" className="banner-contact-link p-2">
                Save more now
                <span>
                  {" "}
                  <FaGreaterThan />
                </span>
              </NavLink>
            </div>
          </div>
          <div className="home-case-study">
            <div>
              <img src={banner13} />
            </div>
            <div className="home-case-study-content">
              <NavLink to="#">HTC CORPORATION</NavLink>
              <h2>£14000 Total Savings</h2>
              <p>
                Founded in 2009, with a range of industry accolades to our name,
                Hayri recognised that bgs Bidder was a well-established and
                growing business and our five star Trustpilot reviews along with
                our size and longevity ensured HTC Europe had peace of m ...
              </p>
              <NavLink to="#" className="banner-contact-link p-2">
                Save more now
                <span>
                  {" "}
                  <FaGreaterThan />
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        {/* bgs para */}
        <div className="utlity-para">
          <h1 className=" p-2">Find the best bgs deals for your business</h1>

          <p>
            <NavLink to="#" className="banner-contact-link mb-5">
              Compare Prices
            </NavLink>
          </p>
          <h4 className="text-center p-2">Related content</h4>
          <div className="thanku-links">
            <span>
              <a href="#">Choosing your business energy broker</a>
              <a href="#">Compare Business Electricity Prices</a>
              <a href="#">What Is A bgs Bill?</a>
              <a href="#">Business Energy Comparison</a>
              <a href="#">Compare Business Water Prices</a>
              <a href="#">Should I Fix My Energy Prices Until 2024?</a>
              <a href="#">Compare Home Energy Prices</a>
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Thanku;
