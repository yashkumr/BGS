import React from "react";
import Slider from "react-slick";
import slider1 from "../../assets/images/Home/slider1.jpg"
import slider2 from "../../assets/images/Home/slider2.jpg"
import slider3 from "../../assets/images/Home/slider3.webp"
import "../../assets/customCss/Main.css"

const SlickSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        {/* <div className="homeCardSlider-top mt-5">
          <h2> Best Seller</h2>
          <p>Top view in the week</p>
        </div> */}

        <div style={{ backgroundColor: "#f3fcff",padding:"3rem" }}>
          <div
            className="slider-container "
            style={{ width: "95%", margin: "auto" }}
          >
            <Slider {...settings}>
            <div className="homeCardSlider">
                  <img
                    src={slider3}
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src={slider2}
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src={slider3}
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src={slider2}
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src={slider3}
                    alt="image"
                  />
                </div>

            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickSlider;
