import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// Images and Icons
import backgroundImage from "../../assets/images/cutting-edge-bg.jpg";
import rightImage from "../../assets/images/img-cutting-edge.png";
import secImage from "../../assets/images/cutting-edge-img.png";
import onlineEduIcon from "../../assets/images/online-education-icon-1.svg";
import iconAndroid from "../../assets/images/icon-android.svg";
import iconIos from "../../assets/images/icon-ios.svg";

const SectionFive = () => {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 1199;
        return window.innerWidth < maxWidth;
      },
      offset: 100,
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);
  return (
    <section
      className="sections-cutting-edge"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <header className="section-title">
          <h2 className="h1" data-aos="fade-up">
            Our Cutting Edge Online Begginers{" "}
            <span className="ipad-clear">Driver Education Course</span>
          </h2>
        </header>
        <div className="tw-row">
          <div className="tw-col-xl-6 list-on-content">
            <header
              className="sec-title vCenter"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <div className="price">
                <sup>$</sup>199
              </div>
              <div className="short-cnt">
                Simple and Easy Online Payment{" "}
                <span className="ipad-clear">
                  Using the{" "}
                  <strong>
                    Driver<span className="light-green">X</span>
                  </strong>{" "}
                  Mobile App
                </span>
              </div>
            </header>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                Purchase our MTO approved BDE course right through the app.
                Easily take this completely online course from the comfort of
                your home.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                Designed with student’s learning in mind, our innovative course
                teaches students the fundamentals of driving education and
                encourages interaction and participation.
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="800"
              >
                Use the{" "}
                <strong>
                  Driver<span className="light-green">X</span>
                </strong>{" "}
                app to book the mandatory 10 hours of driving lessons. Each
                driving lesson is tracked within the{" "}
                <strong>
                  Driver<span className="light-green">X</span>
                </strong>{" "}
                app allowing you to monitor your progress towards earning your
                certificate.
              </li>
            </ul>
            <nav className="vCenter btn-group">
              <Link
                className="project_btns-"
                to=""
                data-aos="fade-left"
                data-aos-delay="1200"
              >
                <span>Learn More</span>
              </Link>
              <Link
                className="project_btns-"
                to=""
                data-aos="fade-left"
                data-aos-delay="1000"
              >
                <span>Download Now!</span>
              </Link>
              <Link
                className="btns-rounded"
                to=""
                data-aos="fade-left"
                data-aos-delay="800"
              >
                <SVG src={iconAndroid} alt="" />
              </Link>
              <Link
                className="btns-rounded"
                to=""
                data-aos="fade-left"
                data-aos-delay="600"
              >
                <SVG src={iconIos} alt="" />
              </Link>
            </nav>
          </div>
          <div className="tw-col-xl-6 center">
            <figure className="sec-image" data-aos="fade-left">
              <img src={secImage} alt="" />
            </figure>
            <article
              className="shade-box"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <i>
                <SVG src={onlineEduIcon} alt="" />
              </i>
              <p>
                Take advantage of our cutting edge online driversed course, upon
                completion of course get license early and cheaper insurance
              </p>
            </article>
          </div>
        </div>
      </div>
      <figure className="floating_image">
        <img src={rightImage} alt="" />
      </figure>
    </section>
  );
};

export default SectionFive;
