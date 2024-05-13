import Layout from "../components/Layout/Layout.jsx";
import "../assets/customCss/Main.css";
import { NavLink } from "react-router-dom";
import about1 from "../assets/images/Home/about1.avif";
import { FaGreaterThan } from "react-icons/fa";
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

const About = () => {
  return (
    <Layout>
      {/* Banner */}
      <div className="home-banner">
        <div className="banner--header--page">
          <div className="block-banner-page">
            <div className="header--page__inner">
              <div className="header--page__content p-5">
                <h1>About BGS Energy </h1>
                <div className="banner-content">
                  <p className="p-2">
                    BGS costs have become an increasing part of a business’s
                    overheads
                  </p>
                  <p></p>
                </div>
                <p className=" text-light p-3 m-2">
                  We aim to decrease these costs by offering a fully
                  comprehensive service on your energy, gas and electricity
                  bills. We search the breadth of the market to find you the
                  best prices for your gas, electricity, water and telecoms
                  supplies{" "}
                </p>
                <NavLink to="/contact-us" className="banner-contact-link">
                  Get prices
                </NavLink>
              </div>
            </div>
            <div className="header--page__image">
              <img src={about1} />
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
            Let us  Get You The Best Price. We'll Pay You £1,000 If
            <br /> We Can't Beat Your Renewal Quote.
          </h5>

          <p>
            {" "}
            <strong>Why choose us </strong>– We make a commitment to each and
            every business that we’ll provide an award-winning service and 5*
            expertise at every stage of the process. No two businesses are the
            same – our team of bgs experts are available to help you and provide
            services based on the specifics of your business. We successfully
            work with UK businesses across all sectors and sizes to help them to
            lower their utilities bill.
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
          your business massively save on your business utilities. bgs Bidder
          provides services that allow any business to quickly and easily switch
          energy suppliers without the hassle. We’ve streamlined our service so
          that you can easily compare business bgs prices and get a free quote
          within as little as 5 minutes.
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
                        equipped to help you find the best business bgs deals.
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
          <NavLink to="/contact-us" className="banner-contact-link">
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
        <div className="home-com1">
          <div>
            <h1>Save up to 65% on commercial utilities</h1>
            <p className="home-commercial-p">
              Every penny you can save on business energy and business utilities
              will help your business and increase your profits.
            </p>
          </div>
          <div className="home-commercial-p">
            bgs Bidder works closely with the UK’s leading energy suppliers to
            deliver more affordable quotes than you’d find anywhere else.
            Cutting your business energy bills down can make a huge difference
            to your bottom line, and we’ll do all the legwork allowing you to
            focus on the hectic nature of being a business owner.
          </div>
        </div>
        <div className="home-com-2">
          <div>
            <p className="home-commercial-p">
              <strong>Who are BGS Energy?</strong>
            </p>
            <p className="home-commercial-p">
              BGS (Business Gas Solutions) was established 
              Longley who identified a market need for a dedicated, diligent,
              and transparent service in sourcing optimal utility tariffs for
              businesses. Originally named Business Energy Consultants, the
              company has flourished, leveraging principles of unparalleled
              customer care while committing to delivering exceptional value to
              both clients and suppliers.
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
              Bgs energy Customer Commitment
              </strong>
            </p>
            <p className="home-commercial-p">
              Here at bgswe know that no two businesses are the same.
              This is why we tailor our service to suit you. Our business bgs
              consultants have experience across all sectors and understand the
              needs of SME’s, large businesses and public sectors. Our
              experience in providing business utilities enables us to find the
              best business energy prices that fit your company’s specific
              needs.
            </p>
          </div>
          <div>
            <img src={banner7} alt="" />
          </div>
        </div>
      </div>

      {/* award */}
      <div className="home-award">
        <div className="home-awards">
          <div className="home-awards-content">
            <h1>Our Awards</h1>
            <div>
              <p>
                bgs Bidder won the prestigious ‘Best Customer Service’ award for
                SME customers at the Energy Live Consultancy Awards (TELCA)
                2019. We were also named Consultancy of the Year at the same
                awards. We’re dedicated to our customers. We work hard to
                deliver the best possible service, no matter the sector or size
                of business. After years of commitment to great customer
                service, the whole bgs Bidder team was really pleased to receive
                the 2019 TELCA award in recognition for our efforts.
              </p>
              <p>
                bgs Bidder also won Best Business Utilities Comparison Service
                in England at the 2019 Energy and Power Awards.
              </p>
              <li>Best customer service for SME customers</li>
              <li>Consultancy of the year</li>
              <li>Sales leader of the year</li>
            </div>
          </div>
          <div className="home-awards-img">
            <img src={banner8} />
          </div>
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
              become more competitive. Working with bgs Bidder, you can find a
              supplier or tariff that matches your environmental and
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
          <h1 className=" p-2">Find the best bgs deals for your business</h1>

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

export default About;
