
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

const GasInfo = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified route
    navigate("/quotes");
  };
  return (
    <Layout>
      <div className="contact">
        <div className="contact-content">
          <h2>BE IN TOUCH</h2>
          <h1>
            {" "}
            BGS Addres logged In
          </h1>
          <p>Congrates ....</p>
          <p>Address: Apartment 20501, 4Cal End, Trafford Park, Usa, M17 1HZ (edit)</p>
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
          <h5>enter your business gas information</h5>
          <p>
            {" "}
            <CiCircleCheck />
            Save up to 65%
          </p>
          <div >
            <form >
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  placeholder="Current Supplier"
                  required
                />
              </div>
              <p>How much do you spend & how often?</p>
              <p className="text-light">
                An estimate is fine if you don't have a bill to hand
              </p>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  placeholder="How often do you pay"
                  required
                />
              </div>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  placeholder="spend"
                  required
                />
              </div>
              <div className="m-1">
                <input
                  type="text"
                  className="form-control rounded-0 shadow-none"
                  placeholder="contract start date"
                  required
                />
              </div>

              <buttton className="banner-contact-link" onClick={handleClick}>
                Get Price
              </buttton>
            </form>
          </div>
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

export default GasInfo;
