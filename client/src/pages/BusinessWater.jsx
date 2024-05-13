import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import rating from "../assets/images/Icons/trustpilot.webp";
import { CiCircleCheck } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaGreaterThan } from "react-icons/fa";

import water2 from "../assets/images/Home/water2.avif";
import { ImFire } from "react-icons/im";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoIosWater } from "react-icons/io";
import water3 from "../assets/images/Home/water3.avif";
import Energy from "../assets/images/Home/Energy-Awards-2022-Logo-HC-HR-1800x701.png";
import TELCA from "../assets/images/Home/large-TELCA-2022-Banner.webp";
import { GiNotebook } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import water1 from "../assets/images/Home/water1.avif";
import SlickSlider from "../components/Layout/SlickSlider.jsx";
import water4 from "../assets/images/Home/water4.jpg";
import water5 from "../assets/images/Home/water5.avif";
import banner8 from "../assets/images/Home/banner8.jpg";
import banner9 from "../assets/images/Home/banner9.jpg";
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";

const BusinessWater = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified route
    navigate("/business");
  };
  return (
    <Layout>
      <div className="contact">
        <div className="contact-content">
          <h2>Why TO CHOOSE TO US FOR WATER PRICE</h2>
          <h1>
            {" "}
            To Find your origination at bgs the business water rates and deals
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
                  required
                />
              </div>

              <buttton className="banner-contact-link" onClick={handleClick}>
                Save more now
              </buttton>
            </form>
          </div>
        </div>
      </div>

      {/* Home Wrapper */}
      <div className="home-wrapper">
        <div className="home-wrapper-content">
          <div className="wrpper-content-area">
            <div className="wrapper-content">
              <p>
                We provide a comprehensive business water comparison service,
                offering comparisons of water rates tailored to your business
                needs. Collaborating with leading water providers and suppliers,
                we ensure our customers receive the most competitive live
                quotes. Whether you're seeking cost-effective solutions or
                aiming to optimize your water consumption, we've got you
                covered.
              </p>
            </div>
            <div className="shortcode">
              <div className="tp-widget">
                <a>
                  <span>Our customers say</span>
                </a>
              </div>
              <div className="tp-widget">
                <a>
                  <span>Excellent</span>
                </a>
              </div>
              <div className="tp-widget">
                <a>
                  <span>
                    <MdOutlineStarBorder />
                  </span>
                  <span>
                    <MdOutlineStarBorder />
                  </span>
                  <span>
                    <MdOutlineStarBorder />
                  </span>
                  <span>
                    <MdOutlineStarBorder />
                  </span>
                  <span>
                    <MdOutlineStarBorder />
                  </span>
                </a>
              </div>
              <div className="tp-widget">
                <a>
                  <span>4.6 out of 5 based on 2,457 reviews</span>
                </a>
              </div>
              <div className="tp-widget">
                <a>
                  <span>Trustpilot</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* wrapper wrapper--normal */}
      <div className="w-wrapper wrapper--normal">
        <div className="w-container ">
          <div className="section-header   ">
            <div className="">
              <div className="w-titles">
                <h2>Get the best prices and deals on your utilities </h2>
                <p>Immediate pricing access to almost all UK suppliers</p>
              </div>
            </div>
            <div className="">
              <div className="w-image img--circle">
                <img src={water2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-home-supply">
        <div className="home-supply">
          <div className="home-gas">
            <ImFire />
          </div>
          <div className="home-electricity">
            <div>
              <h2>Business Gas</h2>
            </div>
            <div>
              <p>
                Immediate pricing access to all major UK gas suppliers. We can
                save you upto 65% on your business gas prices.
              </p>
            </div>
            <div className="gas-shortcode">
              <a href="#">Get Quote</a>
            </div>
          </div>
        </div>
        <div className="home-supply supplier-2">
          <div className="home-gas">
            <RiLightbulbFlashFill />
          </div>
          <div className="home-electricity">
            <div>
              <h2>Business Electricity</h2>
            </div>
            <div>
              <p>
                Immediate pricing access to all major UK gas suppliers. We can
                save you upto 65% on your business gas prices.
              </p>
            </div>
            <div className="gas-shortcode">
              <a href="#">Get Quote</a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-home-supply">
        <div className="home-supply supplier-3">
          <div className="home-gas">
            <RiLightbulbFlashFill /> <ImFire />
          </div>
          <div className="home-electricity">
            <div>
              <h2>Business Energy</h2>
            </div>
            <div>
              <p>
                Immediate pricing access to all major UK gas suppliers. We can
                save you upto 65% on your business gas prices.
              </p>
            </div>
            <div className="gas-shortcode">
              <a href="#">Get Quote</a>
            </div>
          </div>
        </div>
        <div className="home-supply supplier-4">
          <div className="home-gas">
            <IoIosWater />
          </div>
          <div className="home-electricity ">
            <div>
              <h2>Business Water</h2>
            </div>
            <div>
              <p>
                Immediate pricing access to all major UK gas suppliers. We can
                save you upto 65% on your business gas prices.
              </p>
            </div>
            <div className="gas-shortcode">
              <a href="#">Get Quote</a>
            </div>
          </div>
        </div>
      </div>

      {/* Business */}
      <div className="business">
        <div className="home-bus">
          <div className="home-bus-content">
            <h1>What type of business are you?</h1>
            <p>We help businesses of all sizes from a range of sectors</p>
            <div>
              <p>
                <strong>Small and medium businesses</strong> <br />
                Easy-to-manage business energy solutions for SMEs and
                <br /> sole traders.
              </p>
              <a href="#">How we helps SMEs</a>
              <p>
                <strong>Large business & public sector</strong>
                <br />
                Business energy solutions for the public sector, corporates
                <br /> and consortiums.
              </p>
              <a href="#">Supporting large business</a>
            </div>
          </div>
          <div className="home-bus-img">
            <img src={water3} />
          </div>
        </div>
      </div>
      {/* Save time, money */}
      <div className="home-money">
        <div>
          <h1>Save time & money</h1>
          <h5 className="">
            Let's Get You The Best Price. We'll Pay You £1,000 If
            <br /> We Can't Beat Your Renewal Quote.
          </h5>

          <p>
            {" "}
            <strong>Why choose us </strong>– We make a commitment to each and
            every business that we’ll provide an award-winning service and 5*
            expertise at every stage of the process. No two businesses are the
            same – our team of bgs experts are available to help you and provide
            services based on the specifics of your business. We successfully
            work with UK businesses across all sectors and sizes to help them to
            lower their utilities bill.
          </p>

          <NavLink to="/contact-us" className="banner-contact-link">
            Save more now
            <span>
              {" "}
              <FaGreaterThan />
            </span>
          </NavLink>
        </div>
        <div className="home-money-img">
          <div>
            <img src={Energy} alt="" />
          </div>
          <div>
            <img src={TELCA} alt="" />
          </div>
        </div>
      </div>

      {/* switch energy */}
      <div className="home-switch">
        <h1>
          We specialize in delivering a comprehensive business water comparison
          service
        </h1>
        <p className="home-switch-main">
          If you’re a business owner, it’s only natural that you’ll be concerned
          with minimising business disruption.
        </p>
        <p>
          Switching energy suppliers can sometimes be a smart move to save money
          or get better service, but "water change" makes me think you might be
          referring to changing water providers. If you're considering switching
          water providers, there might be different considerations than when
          switching energy suppliers. For water, the provider is often
          determined by your location and may not be as easily changeable as
          energy suppliers.
        </p>
      </div>

      {/* price-deals */}
      <div className="w-wrapper wrapper--normal home-deals">
        <div className="w-container container--col-1">
          <div className="block col-1__block">
            <div className="section--service-circles">
              <div className="w-wrapper wrapper--normal section-1-1-bubbles">
                <div className="section-header w-container w-container--col-1-1 ">
                  <div className="block col-1-1__block block--1">
                    <div className="w-titles">
                      <h2> Water Switch  suppliers now </h2>
                      <p className="home-deals-p">
                       
Switching energy suppliers can sometimes be a smart move to save money or get better service, but "water change" makes me think you might be referring to changing water providers. If you're considering switching water providers, there might be different considerations than when switching energy suppliers. For water, the provider is often determined by your location and may not be as easily changeable as energy suppliers.
                      </p>
                      <br />
                      <p className="home-deals-p">
                        Simply call us, use our live chat services or fill in a
                        quick contact form and we will be in touch as soon as
                        possible. You’ll be kept in the loop at all times, all
                        the way up to your new contract going live and we will
                        offer continuous support to ensure you save as much as
                        you can on your business bgs bills.
                      </p>
                    </div>
                  </div>
                  <div className="block col-1-1__block block--2">
                    <div className="w-image img--circle">
                      <img src={water1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-center">Energy And bgs Guides</h2>
        <p className="text-center">
          <NavLink to="/contact-us" className="banner-contact-link">
            Save more now
            <span>
              {" "}
              <FaGreaterThan />
            </span>
          </NavLink>
        </p>
      </div>

      {/* slick-slider */}
      <SlickSlider />

      {/* comercial */}
      <div className="home-commercial">
        <div className="home-com1">
          <div>
            <h1>Save up to 65% on commercial utilities</h1>
            <p className="home-commercial-p">
              Every penny you can save on business energy and business utilities
              will help your business and increase your profits.
            </p>
          </div>
          <div className="home-commercial-p">
            bgs energy works closely with the UK’s leading energy suppliers to
            deliver more affordable quotes than you’d find anywhere else.
            Cutting your business energy bills down can make a huge difference
            to your bottom line, and we’ll do all the legwork allowing you to
            focus on the hectic nature of being a business owner.
          </div>
        </div>
        <div className="home-com-2">
          <div>
            <p className="home-commercial-p">
              <strong>
                We'll find the perfect solution, tailored to your business
              </strong>
            </p>
            <p className="home-commercial-p">
              Here at bgs energy we know that no two businesses are the same.
              This is why we tailor our service to suit you. Our business bgs
              consultants have experience across all sectors and understand the
              needs of SME’s, large businesses and public sectors. Our
              experience in providing business utilities enables us to find the
              best business energy prices that fit your water3’s specific
              needs.
            </p>
          </div>
          <div>
            <img src={water4} alt="" />
          </div>
        </div>
        <div className="home-com-3">
          <div>
            <p className="home-commercial-p">
              <strong>
                We'll find the perfect solution, tailored to your business
              </strong>
            </p>
            <p className="home-commercial-p">
              Here at bgs energy we know that no two businesses are the same.
              This is why we tailor our service to suit you. Our business bgs
              consultants have experience across all sectors and understand the
              needs of SME’s, large businesses and public sectors. Our
              experience in providing business utilities enables us to find the
              best business energy prices that fit your water3’s specific
              needs.
            </p>
          </div>
          <div>
            <img src={water5} alt="" />
          </div>
        </div>
      </div>

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
                Hayri recognised that bgs energy was a well-established and
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
                Hayri recognised that bgs energy was a well-established and
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
                Hayri recognised that bgs energy was a well-established and
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
          <div className="bgs-links">
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

export default BusinessWater;
