import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import ReactOwlCarousel from "react-owl-carousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// Images and Icons
import fullLogo from "../../assets/images/logo.png";
import iconAndroid from "../../assets/images/icon-android.svg";
import iconIos from "../../assets/images/icon-ios.svg";
import slider1 from "./images/slider-img-1.jpg";
import slider2 from "./images/slider-img-2.jpg";
import slider3 from "./images/slider-img-3.jpg";

const BannerModule = () => {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 1199;
        return window.innerWidth < maxWidth;
      },
      offset: 200,
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);
  const sliderItem = [
    { id: "1", imgs: slider1 },
    { id: "2", imgs: slider2 },
    { id: "3", imgs: slider3 },
    { id: "4", imgs: slider1 },
  ];
  return (
    <section className="project_banner home">
      <span className="bnr-dots-light"></span>
      <span className="bnr-dots-dark"></span>
      <div className="container dFlex">
        <div className="text_container">
          <article className="banner_text_wrapper text-white">
            <img src={fullLogo} alt="DriverX" data-aos="zoom-in-up" />
            <h1 className="main_title">
              <span
                className="ipad-clear"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Revolutionizing The Way{" "}
              </span>
              <span
                className="ipad-clear"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <strong>Students</strong> and <strong>Instructors</strong>{" "}
                Connect
              </span>
            </h1>
            <nav className="button-group vCenter">
              <Link
                className="app_button"
                to=""
                data-aos="fade-right"
                data-aos-delay="1000"
              >
                <i>
                  <SVG src={iconAndroid} title="Android" />
                </i>
                <div className="text-of-btn">
                  <small>GET IT ON</small>Google Play
                </div>
              </Link>
              <Link
                className="app_button"
                to=""
                data-aos="fade-right"
                data-aos-delay="1200"
              >
                <i>
                  <SVG src={iconIos} title="IOS" />
                </i>
                <div className="text-of-btn">
                  <small>Download on the</small>App Store
                </div>
              </Link>
            </nav>
          </article>
        </div>
        <div className="image_container banner_slider">
          <ReactOwlCarousel loop items={3} center margin={0} autoplay={true}>
            {sliderItem.map((sItems) => (
              <div className="item" key={sItems.id}>
                <figure className="image-wrap">
                  <div className="wrapper">
                    <img src={sItems.imgs} alt="" />
                  </div>
                </figure>
              </div>
            ))}
          </ReactOwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default BannerModule;
