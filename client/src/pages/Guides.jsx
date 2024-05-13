import React from 'react'
import Layout from '../components/Layout/Layout'
import { NavLink } from 'react-router-dom'
import { FaGreaterThan } from "react-icons/fa";
import guides2 from "../assets/images/Home/guides2.jpg"
import banner11 from "../assets/images/Home/banner11.avif";
import banner14 from "../assets/images/Home/banner14.jpg";
import banner13 from "../assets/images/Home/banner13.jpg";
import guide1 from "../assets/images/Home/guide1.avif"
import guide2 from "../assets/images/Home/guide2.avif"
import guide3 from "../assets/images/Home/guide3.avif"
import guide4 from "../assets/images/Home/guide4.avif"
import guide5 from "../assets/images/Home/guide5.avif"
import guide6 from "../assets/images/Home/guide6.avif"
import guide7 from "../assets/images/Home/guide7.avif"
import guide8 from "../assets/images/Home/guide8.avif"
import guide9 from "../assets/images/Home/guide9.avif"

const Guides = () => {
  return (
    <Layout>
       {/* Banner */}
       <div className="home-banner">
          <div className="banner--header--page">
            <div className="block-banner-page p-4">
              <div className="header--page__inner ">
                <div className="header--page__content">
                  <h1>Tips & Guides to Save a Users Money</h1>
                  <div className="banner-content">
                    <p> According to BGS 
                    GUIDES AND TIPS TO SAVE MONEY
View our selection of business energy and utility guides
                    </p>
                    <p>
                      <NavLink to="/contact-us" className="banner-contact-link">
                        Save more now
                       
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
              <div className="header--page__image">
                <img src={guides2} />
              </div>
            </div>
          </div>
        </div>

        {/* BGS energy guides */}
        <div>
          <h1 className='text-center'>At Bgs Energy & Utility Guides</h1>
            <p className='text-center'>  To Learn more about business utilities using our guides below</p>
        </div>
        <div className='bgs-guide-img'>
          <div> 
            <img src={guide9} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide2} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide3} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide4} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide5} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide6} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide7} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide8} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
            </div>

          </div>
          <div> 
            <img src={guide1} alt="" />
            <div className='text-center'>
            <NavLink to="/contact-us" className="banner-contact-link">
              Read More
             
            </NavLink>
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
  )
}

export default Guides