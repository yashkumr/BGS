import React from 'react'
import Layout from '../components/Layout/Layout.jsx'
import rating from "../assets/images/Icons/trustpilot.webp";
import { CiCircleCheck } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import banner6 from "../assets/images/Home/banner6.jpg";
import banner7 from "../assets/images/Home/banner7.jpg";
import banner8 from "../assets/images/Home/banner8.jpg";
import banner9 from "../assets/images/Home/banner9.jpg";
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";
import { FaGreaterThan } from "react-icons/fa";
import { ImFire } from "react-icons/im";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { IoIosWater } from "react-icons/io";
import imageoutline from "../assets/images/Home/banner2.jpg";
import SlickSlider from '../components/Layout/SlickSlider.jsx';

const Lbu = () => {
  
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
             We have <strong>assists </strong> thousands of SMEs in saving on
             their small business electricity, gas, and water rates <strong>with BGS."</strong> .
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

              <buttton  className="banner-contact-link" onClick={handleClick}>
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

      {/* comercial */}
      <div className="home-commercial">
          <div className="home-com1">
            <div>
              <h1>Save up to 65% on commercial utilities</h1>
              <p className="home-commercial-p">
                Every penny you can save on business energy and business
                utilities will help your business and increase your profits.
              </p>
            </div>
            <div className="home-commercial-p">
              bgs energy works closely with the UK’s leading energy
              suppliers to deliver more affordable quotes than you’d find
              anywhere else. Cutting your business energy bills down can make a
              huge difference to your bottom line, and we’ll do all the legwork
              allowing you to focus on the hectic nature of being a business
              owner.
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
                Here at bgs energy we know that no two businesses are the
                same. This is why we tailor our service to suit you. Our
                business bgs consultants have experience across all sectors
                and understand the needs of SME’s, large businesses and public
                sectors. Our experience in providing business utilities enables
                us to find the best business energy prices that fit your
                company’s specific needs.
              </p>
            </div>
            <div>
              <img src={banner6} alt="" />
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
                Here at bgs energy we know that no two businesses are the
                same. This is why we tailor our service to suit you. Our
                business bgs consultants have experience across all sectors
                and understand the needs of SME’s, large businesses and public
                sectors. Our experience in providing business utilities enables
                us to find the best business energy prices that fit your
                company’s specific needs.
              </p>
            </div>
            <div>
              <img src={banner7} alt="" />
            </div>
          </div>
        </div>
        <SlickSlider/>
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
                  name, Hayri recognised that bgs energy was a
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
                  name, Hayri recognised that bgs energy was a
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
                  name, Hayri recognised that bgs energy was a
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
  )
}

export default Lbu