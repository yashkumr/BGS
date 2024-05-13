import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import rating from "../assets/images/Icons/trustpilot.webp";
import { CiCircleCheck } from "react-icons/ci";
import { NavLink, useNavigate } from "react-router-dom";
import company2 from "../assets/images/Home/company2.webp";
import company3 from "../assets/images/Home/company3.webp";
import company4 from "../assets/images/Home/company4.webp";
import company5 from "../assets/images/Home/company5.webp";
import company6 from "../assets/images/Home/company6.webp";
import company7 from "../assets/images/Home/company7.webp";
import company8 from "../assets/images/Home/company8.webp";
import company9 from "../assets/images/Home/company9.webp";
import company10 from "../assets/images/Home/company10.webp";
import company11 from "../assets/images/Home/company11.webp";
import company12 from "../assets/images/Home/company12.webp";
import company13 from "../assets/images/Home/company13.webp";
import banner6 from "../assets/images/Home/banner6.jpg";
import banner7 from "../assets/images/Home/banner7.jpg";
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";

const Supplier = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the specified route
    navigate("/business");
  };

  return (
    <Layout>
      <div className="contact">
        <div className="contact-content">
          <h2>Bgs supplier</h2>
          <h1>BGS work with over 27 leading and alternative suppliers</h1>
          <p>Our team are on hand to help you every step of the way</p>
          <p>
            We’re always working to build relationships with more suppliers to
            ensure our clients get the best deals.
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

      <div className="about-company">
        <div>
          <img src={company2} alt="" />
        </div>
        {/* <img src={company3} alt="" /> */}
        <div>
          <img src={company4} alt="" />
        </div>
        <div>
          <img src={company5} alt="" />
        </div>
        <div>
          <img src={company6} alt="" />
        </div>
        <div>
          <img src={company7} alt="" />
        </div>
        <div>
          <img src={company8} alt="" />
        </div>
        <div>
          <img src={company9} alt="" />
        </div>
        <div>
          <img src={company10} alt="" />
        </div>
        <div>
          <img src={company11} alt="" />
        </div>
        <div>
          <img src={company12} alt="" />
        </div>
        {/* <img src={company13} alt="" /> */}
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
                <NavLink to="/about" className="banner-contact-link p-2">
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

export default Supplier;
