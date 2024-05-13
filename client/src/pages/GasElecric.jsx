import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import rating from "../assets/images/Icons/trustpilot.webp";
import { CiCircleCheck } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import imageoutline from "../assets/images/Home/banner2.jpg";
import { ImFire } from "react-icons/im";
import { IoIosWater } from "react-icons/io";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa";
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";
import company from "../assets/images/Home/banner3.jpg";
import Energy from "../assets/images/Home/Energy-Awards-2022-Logo-HC-HR-1800x701.png";
import TELCA from "../assets/images/Home/large-TELCA-2022-Banner.webp";

const GasElecric = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified route
    navigate("/business");
  };

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
                <img src={imageoutline} />
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


      <div className="gas-table p-3">
        <h2 className="text-center p-2 mt-3 fw-bold">Average business electricity prices per kwh by business size</h2>
        <table className="table">
          <tbody>
            <tr >
              <th scope="col">Annual usage</th>
              <th scope="col">Business size</th>
              <th scope="col">Unit price (per kWh)</th>
              <th scope="col">Daily standing charge (pence)</th>
              <th scope="col">Annual cost</th>
            </tr>
            <tr>
              <td> 5,000 to 15,000 kWH</td> <td>Micro business</td>
              <td>26.6p</td>
              <td>64.6p </td>{" "}
              <td>£2,833 (based on annual usage of 10,000 kWh)</td>
            </tr>
            <tr>
              <td> 5,000 to 15,000 kWH</td> <td>Micro business</td>
              <td>26.6p</td>
              <td>64.6p </td>{" "}
              <td>£2,833 (based on annual usage of 10,000 kWh)</td>
            </tr>
            <tr>
              <td> 5,000 to 15,000 kWH</td> <td>Micro business</td>
              <td>26.6p</td>
              <td>64.6p </td>{" "}
              <td>£2,833 (based on annual usage of 10,000 kWh)</td>
            </tr>
            <tr>
              <td> 5,000 to 15,000 kWH</td> <td>Micro business</td>
              <td>26.6p</td>
              <td>64.6p </td>{" "}
              <td>£2,833 (based on annual usage of 10,000 kWh)</td>
            </tr>
            <tr>
              <td> 5,000 to 15,000 kWH</td> <td>Micro business</td>
              <td>26.6p</td>
              <td>64.6p </td>{" "}
              <td>£2,833 (based on annual usage of 10,000 kWh)</td>
            </tr>
          </tbody>
        </table>
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
              successfully work with UK businesses across all sectors and sizes
              to help them to lower their utilities bill.
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

export default GasElecric;
