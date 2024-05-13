import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import rating from "../assets/images/Icons/trustpilot.webp";
import { CiCircleCheck } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import sector1 from "../assets/images/Home/sector1.avif";

import sector2 from "../assets/images/Home/sector2.jpg";

import sector5 from "../assets/images/Home/sector5.avif";
import sector6 from "../assets/images/Home/sector6.avif";
import sector7 from "../assets/images/Home/sector7.avif";
import sector8 from "../assets/images/Home/sector8.avif";
import sector9 from "../assets/images/Home/sector9.avif";
import sector10 from "../assets/images/Home/sector10.avif";
import sector11 from "../assets/images/Home/sector11.avif";
import sector13 from "../assets/images/Home/sector13.avif";

const AllSector = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified route
    navigate("/business");
  };
  return (
    <Layout>
      <div className="contact">
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
                Compare Price
              </buttton>
            </form>
          </div>
        </div>

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
                Over 2,000 Review
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 p-2">
        <div className="our-sector">
          <div>
            <img src={sector1} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Hospitatlity
            </NavLink>
            </div>
            
          </div>
          {/* <div>
            <img src={sector4} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Save more now
            </NavLink>
            </div>
          </div> */}
          <div>
            <img src={sector7} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
             Care Home
            </NavLink>
            </div>
          </div>

          <div>
            <img src={sector2} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Place of Worship
            </NavLink>
            </div>
          </div>

          {/* <div>
            <img src={ sector3} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Save more now
            </NavLink>
            </div>
          </div> */}

          <div>
            <img src={sector6} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Business
            </NavLink>
            </div>
          </div>

          <div>
            <img src={sector5} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Manufacturing
            </NavLink>
            </div>
          </div>
          <div>
            <img src={sector8} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Larg Business
            </NavLink>
            </div>
          </div>
          <div>
            <img src={sector9} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              School
            </NavLink>
            </div>
          </div>
          <div>
            <img src={sector10} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              Super Market
            </NavLink>
            </div>
          </div>
          <div>
            <img src={sector13} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
             Office Management
            </NavLink>
            </div>
          </div>
          <div>
            <img src={sector11} alt="" />
            <div className=" text-center" >
            <NavLink to="/contact-us" className="banner-contact-link text-center " >
              
              SME Bussiness
            </NavLink>
            </div>
          </div>
         
        </div>
      </div>
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
    </Layout>
  );
};

export default AllSector;
