import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

// Import your slideshow images
import shed1 from "../assets/shed1.png";
import shed2 from "../assets/shed2.png";
import shed3 from "../assets/shed3.png";
import shed4 from "../assets/shed4.png";
import shed5 from "../assets/shed5.png";
import shed6 from "../assets/shed6.png";
import shed7 from "../assets/shed7.png";
import shed8 from "../assets/shed8.png";
import shed9 from "../assets/shed9.png";
import shed10 from "../assets/shed10.png";
import shed11 from "../assets/shed11.png";
import shed12 from "../assets/shed12.png";
import trailer1 from "../assets/trailer1.png";
import trailer2 from "../assets/trailer2.png";
import trailer3 from "../assets/trailer3.png";
import trailer4 from "../assets/trailer4.png";
import trailer5 from "../assets/trailer5.png";
import trailer6 from "../assets/trailer6.png";
import trailer7 from "../assets/trailer7.png";
import trailer8 from "../assets/trailer8.png";
import trailer9 from "../assets/trailer9.png";
import trailer10 from "../assets/trailer10.png";
import trailer11 from "../assets/trailer11.png";

function Home() {
  const sliderSettings = {
    dots: false, // This will remove the dots from the Slick Slider
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleImageError = (e) => {
    console.error("Error loading image:", e.target.src);
    e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
  };

  return (
    <div className="home">
      <div className="landing">
        <h1>
          Welcome to <span className="red">CAN</span>Ventures
        </h1>
        <p className="landing-text">
          Your premier distributor of custom-built sheds and trailers. We
          partner with industry-leading manufacturers to bring you top-quality,
          personalized solutions for all your storage and transportation needs.
        </p>
      </div>

      <section className="featured-products">
        {/* <h2>Our Products</h2> */}
        <div className="product-categories">
          <div className="category">
            <h3>
              <a href="/custom-sheds">
                <span className="red">CAN</span>Sheds
              </a>
            </h3>
            <a href="/custom-sheds" className="slider-link">
              <Slider {...sliderSettings}>
                <div className="slide-img">
                  <img
                    src={shed1}
                    alt="Custom Shed 1"
                    onError={handleImageError}
                  />
                </div>
                <div className="slide-img">
                  <img src={shed2} alt="Custom Shed 2" />
                </div>
                <div className="slide-img">
                  <img src={shed3} alt="Custom Shed 3" />
                </div>
                <div className="slide-img">
                  <img src={shed4} alt="Custom Shed 4" />
                </div>
                <div className="slide-img">
                  <img src={shed5} alt="Custom Shed 5" />
                </div>
                <div className="slide-img">
                  <img src={shed6} alt="Custom Shed 6" />
                </div>
                <div className="slide-img">
                  <img src={shed7} alt="Custom Shed 7" />
                </div>
                <div className="slide-img">
                  <img src={shed8} alt="Custom Shed 8" />
                </div>
                <div className="slide-img">
                  <img src={shed9} alt="Custom Shed 9" />
                </div>
                <div className="slide-img">
                  <img src={shed10} alt="Custom Shed 10" />
                </div>
                <div className="slide-img">
                  <img src={shed11} alt="Custom Shed 11" />
                </div>
                <div className="slide-img">
                  <img src={shed12} alt="Custom Shed 12" />
                </div>
              </Slider>
            </a>
          </div>
          <div className="category">
            <h3>
              <a href="/custom-trailers">
                <span className="red">CAN</span>Trailers
              </a>
            </h3>
            <a href="/custom-trailers" className="slider-link">
              <Slider {...sliderSettings}>
                <div className="slide-img">
                  <img
                    src={trailer1}
                    alt="Custom Trailer 1"
                    onError={handleImageError}
                  />
                </div>
                <div className="slide-img">
                  <img src={trailer2} alt="Custom Trailer 2" />
                </div>
                <div className="slide-img">
                  <img src={trailer3} alt="Custom Trailer 3" />
                </div>
                <div className="slide-img">
                  <img src={trailer4} alt="Custom Trailer 4" />
                </div>
                <div className="slide-img">
                  <img src={trailer5} alt="Custom Trailer 5" />
                </div>
                <div className="slide-img">
                  <img src={trailer6} alt="Custom Trailer 6" />
                </div>
                <div className="slide-img">
                  <img src={trailer7} alt="Custom Trailer 7" />
                </div>
                <div className="slide-img">
                  <img src={trailer8} alt="Custom Trailer 8" />
                </div>
                <div className="slide-img">
                  <img src={trailer9} alt="Custom Trailer 9" />
                </div>
                <div className="slide-img">
                  <img src={trailer10} alt="Custom Trailer 10" />
                </div>
                <div className="slide-img">
                  <img src={trailer11} alt="Custom Trailer 11" />
                </div>
              </Slider>
            </a>
          </div>
        </div>
      </section>

      {/* <section className="about-summary">
        <h2>About CanVentures</h2>
        <p>
          CanVentures is your go-to solution for premium custom sheds and
          trailers. With years of experience and a commitment to quality, we
          deliver products that meet your unique needs.
        </p>

        <a href="/about">Read More About Us</a>

      </section> */}
      <section className="contact-us">
        <a href="/contact" className="contact-button">
          Contact Us Today
        </a>
      </section>
    </div>
  );
}

export default Home;
