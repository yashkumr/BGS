import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import banner7 from "../assets/images/Home/banner7.jpg";
import { CiCircleCheck } from "react-icons/ci";
import rating from "../assets/images/Icons/trustpilot.webp";
import { FaGreaterThan } from "react-icons/fa";
import Accordion from "react-bootstrap/Accordion";
import energy1 from "../assets/images/Home/energy1.avif"
import { NavLink } from "react-router-dom";
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";

const CorporateEnergy = () => {
  return (
    <Layout>
      <div className="contact">
        <div className="contact-content">
          <h2>BE IN TOUCH</h2>
          <h1>
            {" "}
            BGS Energy Solutions
            <strong className="text-break">questions </strong> to Speak our
            Corporate energy, please be <strong>in touch.</strong> .
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

      <div className="home-com-3">
        <div>
          <p className="home-commercial-p">
            <strong>
              We'll find the perfect solution, tailored to your business
            </strong>
          </p>
          <p className="home-commercial-p">
            Reducing the cost of corporate energy procurement involves a
            strategic approach to sourcing energy that optimizes efficiency and
            minimizes expenses. Here's a condensed guide:
          </p>
          <p className="home-commercial-p">
            <span className="fw-bold"> Business Gas</span>
            Quick evaluating admittance to all significant UK gas providers. We
            can save you up to 50% on your business gas costs.
          </p>
          <p className="home-commercial-p">
            <span className="fw-bold"> Business Electricity: </span>
            We oversee 12000 electric meters for our business clients - So
            you're in safe hands..
          </p>
          <p className="home-commercial-p">
            <span className="fw-bold"> Business Energy: </span>
            We'll track down the best costs and give you a problem free help for
            both your business gas and power… .
          </p>
          <p>
            We’re here to help your business secure a more competitive price on
            its gas, electricity and water supplies. Our specialist corporate
            energy consultants negotiate with the industry’s biggest suppliers
            to secure a contract that meets all of your requirements – from
            half-hourly rates to multi-site meters and much more. You’ll save
            both time and money.
          </p>
        </div>
        <div>
          {/* <h3 className='text-center'>Reduce the cost of corporate energy procurement</h3> */}
          <img src={banner7} alt="" />
        </div>
      </div>

      <div className="home-wrapper">
        <div className="home-wrapper-content">
          <div className="wrpper-content-area">
            <div className="wrapper-content">
              <h1 className="text-center text-gray">
                May I use a corporate energy broker?
              </h1>
              <p>
                When it comes to the switching window, it often depends on
                various factors. Sometimes sticking with your existing supplier
                can be convenient, especially if you're satisfied with their
                service and pricing. However, seeking a better deal elsewhere is
                a common practice among consumers looking to save money or
                improve their terms.
              </p>
            </div>
            <div className="shortcode">
              <p>
                You don’t have to worry about time-consuming paperwork – your
                dedicated account manager will manage your switch. And if you
                want to renew, but at an improved rate? We can help – our team i
              </p>
              <p>
                However, we do all the hard work for you. We hold close
                relationships with many of the industry’s biggest suppliers. It
                enables our corporate energy consultants to procure tailored gas
                and electricity deals at a competitive rate.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" corporate">
        <div>

          <h1>Our corporate energy and utilities services</h1>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0" >
              <Accordion.Header >BGS Corporate electricity procurment</Accordion.Header>
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
            <Accordion.Item eventKey="1" >
              <Accordion.Header >BGS Corporate Gas Procurment</Accordion.Header>
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

            <Accordion.Item eventKey="1" >
              <Accordion.Header >BGS Corporate WaterProcurment</Accordion.Header>
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
        <div>
          <img src={energy1} alt="" />
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
                <button
                  type="submit"
                  className="shadow-none border-0 outline-0"
                >
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
                  Founded in 2009, with a range of industry accolades to our
                  name, Hayri recognised that bgs Bidder was a
                  well-established and growing business and our five star
                  Trustpilot reviews along with our size and longevity ensured
                  HTC Europe had peace of m ...
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
                  Founded in 2009, with a range of industry accolades to our
                  name, Hayri recognised that bgs Bidder was a
                  well-established and growing business and our five star
                  Trustpilot reviews along with our size and longevity ensured
                  HTC Europe had peace of m ...
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
                  Founded in 2009, with a range of industry accolades to our
                  name, Hayri recognised that bgs Bidder was a
                  well-established and growing business and our five star
                  Trustpilot reviews along with our size and longevity ensured
                  HTC Europe had peace of m ...
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

      {/*  */}
    </Layout>
  );
};

export default CorporateEnergy;
