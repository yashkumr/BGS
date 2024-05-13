import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import rating from "../assets/images/Icons/trustpilot.webp";
import { CiCircleCheck } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGreaterThan } from "react-icons/fa";
import Energy from "../assets/images/Home/Energy-Awards-2022-Logo-HC-HR-1800x701.png";
import TELCA from "../assets/images/Home/large-TELCA-2022-Banner.webp";
import { GiNotebook } from "react-icons/gi";
import { FaHandHoldingWater } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import { IoBusinessOutline } from "react-icons/io5";

const Business = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified route
      navigate("/best-price");
  };
  return (
    <Layout>
      <div className="contact">
        <div className="contact-form">
          <h2>Current Business address</h2>
          <p>
            {" "}
            <a href="#" className="text-light">
              {" "}
              <CiCircleCheck />
              Can’t see the address? Enter manually
            </a>
          </p>
          <div>
            <form>
              <div className="m-1">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Pleaase Select</option>
                  <option value={1}>
                    Appartment 20501 , 4 British Colony Trafford Greater Landan
                    Manchester
                  </option>
                  <option value={2}>British Colony in England & wells</option>
                </select>
              </div>
              <div>
                <a href="#" className="text-light">
                  {" "}
                  Are you comparing for a business or home
                </a>
              </div>
              <div className=" bgs-energy-button m-2">
                <buttton type="submit" className="bgs-energy-button-click" onClick={handleClick}>
                  <IoBusinessOutline />
                  <br />
                  <span>Business</span>
                </buttton>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-content">
          <h2>BE IN TOUCH</h2>
          <h1>
            {" "}
            If There is no <strong>questions </strong> then Lets find your
            address... <strong>in touch.</strong> .
          </h1>
          <p>Our team are on hand to help you every step of the way</p>
        </div>
      </div>

      <div>
        <div className="contact-form-details">
          {/* forms */}
          <div className="">
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
          </div>

          <div className="contact-details">
            <h3>Speak to dedicated consultants</h3>
            <h4>9335140873</h4>
            <p>Mon – Fri: 9:00am – 5:00pm (GMT)</p>
            <p>US (HEAD OFFICE)</p>
            <p> Corby Innovation Hub,</p>
            <p>Bangrave Road South,</p>
            <p>Weldon, Corby, NN17 1NN</p>
            <h5>MANCHESTER (North)</h5>
            <p> ABC Buildings</p>
            <p>21-23 Quay St</p>
            <p>Manchester, M3 4AE</p>
          </div>
        </div>
        <div></div>
      </div>
      {/* Save time, money */}
      <div>
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

            <NavLink to="#" className="banner-contact-link">
              Save more now
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
    </Layout>
  );
};

export default Business;
