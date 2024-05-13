import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import "../assets/customCss/Main.css";
import { NavLink } from "react-router-dom";
import energy3 from "../assets/images/Home/energy3.avif";
import { FaGreaterThan } from "react-icons/fa";
import { MdOutlineStarBorder } from "react-icons/md";
import imageoutline from "../assets/images/Home/banner2.jpg";
import { ImFire } from "react-icons/im";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoIosWater } from "react-icons/io";
import company from "../assets/images/Home/banner3.jpg";
import Energy from "../assets/images/Home/Energy-Awards-2022-Logo-HC-HR-1800x701.png";
import TELCA from "../assets/images/Home/large-TELCA-2022-Banner.webp";
import { GiNotebook } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import banner5 from "../assets/images/Home/banner5.avif";
import SlickSlider from "../components/Layout/SlickSlider.jsx";
import banner6 from "../assets/images/Home/banner6.jpg";
import banner7 from "../assets/images/Home/banner7.jpg";
import banner8 from "../assets/images/Home/banner8.jpg";
import banner9 from "../assets/images/Home/banner9.jpg";
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";
import Accordion from "react-bootstrap/Accordion";
import energy2 from "../assets/images/Home/energy2.avif";

const DomesticEnergy = () => {
  return (
    <Layout>
      {/* Banner */}
      <div className="home-banner">
        <div className="banner--header--page">
          <div className="block-banner-page">
            <div className="header--page__inner">
              <div className="header--page__content">
                <h1 className="text-light fw-normal">Business Utilities Comparison</h1>
                <div className="banner-content">
                  <p>
                    At BGS Energy
                    <strong> – get your gas and electricity quote. </strong>
                    exhaustive business energy correlation
                    <strong>administration</strong>
                    <strong> Compare </strong>Business energy prices today
                  </p>
                  <p>
                    <NavLink to="#" className="banner-contact-link">
                      Save more now
                      {/* <span>
                          {" "}
                          <FaGreaterThan />
                        </span> */}
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            <div className="header--page__image">
              <img src={energy3} />
            </div>
          </div>
        </div>
      </div>

      {/* wrapper wrapper--normal */}
      <div className="">
        <div className="w-container ">
          <div className="section-header">
            <div className="w-titles">
              <h2>Why should I compare and switch energy suppliers? </h2>
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
              <img src={energy2} />
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
            <img src={company} />
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
            same – our team of bgs experts are available to help you and
            provide services based on the specifics of your business. We
            successfully work with UK businesses across all sectors and sizes to
            help them to lower their utilities bill.
          </p>

          <NavLink to="#" className="banner-contact-link">
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

      {/* quotes */}
      <div className="home-quotes">
        <div className="home-quotes-all">
          <div>
            <GiNotebook />
          </div>
          <div>
            <h5>Quick Quotes</h5>
            <p>
              We generate exclusive rates from 27+ suppliers, so you can quickly
              compare tariffs.
            </p>
          </div>
        </div>
        <div className="home-quotes-all">
          <div>
            <FaHandHoldingWater />
          </div>
          <div>
            <h5>Save Money</h5>
            <p>
              We generate exclusive rates from 27+ suppliers, so you can quickly
              compare tariffs.
            </p>
          </div>
        </div>
        <div className="home-quotes-all">
          <div>
            <FaHands />
          </div>
          <div>
            <h5>5* Service</h5>
            <p>
              We generate exclusive rates from 27+ suppliers, so you can quickly
              compare tariffs.
            </p>
          </div>
        </div>
      </div>

      {/* switch energy */}
      <div className="home-switch">
        <h1>Switching energy suppliers couldn't be easier</h1>
        <p className="home-switch-main">
          If you’re a business owner, it’s only natural that you’ll be concerned
          with minimising business disruption.
        </p>
        <p>
          with minimising business disruption. If you’re a business owner, it’s
          only natural that you’ll be concerned with minimising business
          disruption. This is one of the reasons that some companies don’t
          switch energy providers, because they believe it’ll be stressful,
          disruptive and time-consuming. Switching energy suppliers can help
          your business massively save on your business utilities. bgs
          Bidder provides services that allow any business to quickly and easily
          switch energy suppliers without the hassle. We’ve streamlined our
          service so that you can easily compare business bgs prices and get
          a free quote within as little as 5 minutes.
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
                      <h2>Switch energy suppliers now </h2>
                      <p className="home-deals-p">
                        Our perfect combination of expert business energy
                        consultants our simple switching process means you can
                        easily switch suppliers without eating into your own
                        time. Here at bgs bidder, we understand the value of
                        time and the lifestyle of busy business owners. No
                        matter how big or small your company is our team is
                        equipped to help you find the best business bgs
                        deals.
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
                      <img src={banner5} />
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
          <NavLink to="#" className="banner-contact-link">
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
        <div className="home-com-2">
          <div>
            <p className="home-commercial-p">
              <h2>Why is energy so expensive in the UK? </h2>
            </p>
            <p className="home-commercial-p">
              However, it’s important to remember if you use more than the
              average household, you’ll pay more for your gas and electricity
              bills. The price cap only covers the unit charge. Your bill is
              dependent on where you live, your energy consumption and your
              payment method.
              <br />
              Prices are still higher than in 2021, but there is good news – they have started to fall. And the latest Energy Price Cap (October) is set to £1,834 per year for the average household.


            </p>
          </div>
          <div>
            <img src={banner6} alt="" />
          </div>
        </div>
        <div className="home-com-3">
          <div>
            <p className="home-commercial-p">
              <h2>
                We'll find the perfect solution, tailored to your business
              </h2>
            </p>
            <p className="home-commercial-p">
              Here at bgs Bidder we know that no two businesses are the
              same. This is why we tailor our service to suit you. Our business
              bgs consultants have experience across all sectors and
              understand the needs of SME’s, large businesses and public
              sectors. Our experience in providing business utilities enables us
              to find the best business energy prices that fit your company’s
              specific needs.
            </p>
          </div>
          <div>
            <img src={banner7} alt="" />
          </div>
        </div>
        <div className="home-com-2">
          <div>
            <p className="home-commercial-p">
              <h2>BGS Gurantee Prices </h2>
            </p>
            <p className="home-commercial-p">
              However, it’s important to remember if you use more than the
              average household, you’ll pay more for your gas and electricity
              bills. The price cap only covers the unit charge. Your bill is
              dependent on where you live, your energy consumption and your
              payment method.
              <br />
              Prices are still higher than in 2021, but there is good news – they have started to fall. And the latest Energy Price Cap (October) is set to £1,834 per year for the average household.


            </p>
          </div>
          <div>
            <img src={banner6} alt="" />
          </div>
        </div>
        <div className="home-com-3">
          <div>
            <p className="home-commercial-p">
              <h2>
               According to BGS ,How to compare energy prices
              </h2>
            </p>
            <p className="home-commercial-p">
              Here at bgs Bidder we know that no two businesses are the
              same. This is why we tailor our service to suit you. Our business
              bgs consultants have experience across all sectors and
              understand the needs of SME’s, large businesses and public
              sectors. Our experience in providing business utilities enables us
              to find the best business energy prices that fit your company’s
              specific needs.
            </p>
          </div>
          <div>
            <img src={banner7} alt="" />
          </div>
        </div>
      </div>

   

      {/* Accordian */}
      <div className="home-ques">
        <div className="home-question-1">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" className="home-accordian">
              <Accordion.Header>
                There's a lot of companies offering a similar service?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="home-accordian">
              <Accordion.Header>
                There's a lot of companies offering a similar service?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="home-accordian">
              <Accordion.Header>
                There's a lot of companies offering a similar service?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" className="home-accordian">
              <Accordion.Header>
                There's a lot of companies offering a similar service?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="home-question-2">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="5" className="home-accordian">
              <Accordion.Header>Business Renewals</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" className="home-accordian">
              <Accordion.Header>Abgs bill checkk</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7" className="home-accordian">
              <Accordion.Header>
                I’m out of contract, what does this mean for my bills?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="8" className="home-accordian">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      {/* greener energy */}
      <div className="home-g-energy">
        <div className="home-energy">
          <div>
            <h1>Looking to switch to greener energy?</h1>
            <p>
              A growing number of businesses all over the world are committing
              to reducing their carbon footprints and operate more sustainably.
            </p>
            <p>
              One of the best ways to do this is by making the switch to
              renewable energy. A change like this is great news for your
              corporate image and social responsibility targets, especially when
              combined with improved energy efficiency.
            </p>
            <p>
              We can offer expert advice on which renewable energy options are
              available for you. Our advice is catered to SME’s. large companies
              and corporate sectors. The choice of green energy providers is
              growing every day, which also means that tariffs and rates should
              become more competitive. Working with bgs Bidder, you can find
              a supplier or tariff that matches your environmental and
              sustainability goals – while at the same time securing the best
              possible prices.
            </p>

            <p>
              <NavLink to="#" className="banner-contact-link">
                Green Energy
                <span>
                  {" "}
                  <FaGreaterThan />
                </span>
              </NavLink>
            </p>
          </div>
          <div>
            <img src={banner9} />
          </div>
        </div>
      </div>

      {/* forms */}
      <div className="home-form">
        <div className="container mt-5">
          <form className="row g-3">
            <div className="col-md-6 h-form-control">
              <label htmlFor="inputEmail4" className="form-label">
                First Name*
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6 h-form-control">
              <label htmlFor="inputPassword4" className="form-label">
                Last Name*
              </label>
              <input
                type="password"
                className="form-control shadow-none"
                id="inputPassword4"
              />
            </div>
            <div className="col-12 h-form-control">
              <label htmlFor="inputAddress" className="form-label">
                Phone No*
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                id="inputAddress"
              />
            </div>
            <div className="col-12 h-form-control">
              <label htmlFor="inputAddress2" className="form-label">
                Email*
              </label>
              <input
                type="email"
                className="form-control shadow-none"
                id="inputAddress2"
              />
            </div>
            <div className="col-md-6 h-form-control">
              <label htmlFor="inputCity" className="form-label">
                Business Name
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                id="inputCity"
              />
            </div>
            <div className="col-md-4 h-form-control">
              <label htmlFor="inputState" className="form-label">
                PostCode
              </label>
              <select id="inputState" className="form-select shadow-none">
                <option selected>Choose...</option>
                <option>Nashik</option>
              </select>
            </div>
            <div className="col-md-2 h-form-control">
              <label htmlFor="inputZip" className="form-label ">
                Zip
              </label>
              <input
                type="text"
                className="form-control shadow-none"
                id="inputZip"
              />
            </div>
            <div className="col-12 h-form-control">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <div className="col-12 h-form-control">
              <button type="submit" className="shadow-none border-0 outline-0">
                <NavLink to="#" className="banner-contact-link p-2">
                  Submit
                </NavLink>
              </button>
            </div>
          </form>
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
          <h1 className=" p-2">
            Find the best bgs deals for your business
          </h1>

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

export default DomesticEnergy;
