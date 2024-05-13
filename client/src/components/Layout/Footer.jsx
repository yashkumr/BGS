import React from "react";
import { NavLink } from "react-router-dom";
import footer2 from "../../assets/images/Icons/footer2.png";
import footer3 from "../../assets/images/Icons/footer3.webp";
import footer4 from "../../assets/images/Icons/footer4.webp";
import "../../assets/customCss/Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="container-fluid ">
        <footer className="utility-footer text-white p-4">
          <div className="text-center text-md-left">
            <div className="row text-center text-md-left">
              <div className=" foot-content col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className=" foot-heading text-uppercase mb-4  text-warning">
                  Companies
                </h5>
                <div className="foot-content-img">

                
                 <img src={footer2}/>
                 <img src={footer3}/>
                 <img src={footer4}/>
               
                 </div>
              </div>
              <div className=" foot-content col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 foot-heading text-warning">
                  Products
                </h5>
                <p>
                  <a href="#" className="text-white ">
                  Green Business Energy
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white ">
                  Business Energy
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white ">
                  Business Electricity
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white ">
                  Business Gas
                  </a>
                </p>
              </div>
              <div className="foot-content col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="foot-heading text-uppercase mb-4 font-weight-bold text-warning ">
                  UseFul Links
                </h5>
                <p>
                  <a href="/term-condition" className="text-white ">
                    Terms & conditions
                  </a>
                </p>
                <p>
                  <a href="/policy" className="text-white ">
                    privacy policy
                  </a>
                </p>
                <p>
                  <a href="/complaint" className="text-white ">
                    complaint
                  </a>
                </p>
                <p>
                  <a href="#" className="text-white ">
                    The Provider
                  </a>
                </p>
              </div>
              <div className=" foot-content col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="foot-heading text-uppercase mb-4 font-weight-bold text-warning ">
                  Contacts
                </h5>
                <p className="p-2">
                  <IoHomeOutline />
                  &nbsp; 71-75, Shelton Street, Covent Garden, London WC2H 9JQ
                </p>
                <p>
                  <AiTwotoneMail />
                  &nbsp; info@bgsenergy.co.uk
                </p>
                <p>
                  <MdOutlineLocalPhone />
                  &nbsp; 0144 4390 132
                </p>
                <p>
                  <IoHomeOutline />
                  &nbsp; 01444390139
                </p>
              </div>
            </div>
          </div>
          <hr className="mb-4" />
          <div className=" row">
            <div className="foot-heading-copy col-md-12 text-center">
              CopyRight @2024 All right reserved by :BGS Energy LTD
              <a href="#">
                <strong className="text-warning">The Providers</strong>
              </a>
              <p></p>
            </div>
            <div className="col-md-5 col-lg-4">
              <div className=" foot-icons text-md-right text-center">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <FaFacebook />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <AiFillTwitterCircle />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <AiTwotoneMail />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn-floating btn-sm text-white">
                      <FaLinkedinIn/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
