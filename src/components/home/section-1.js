import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel/umd/OwlCarousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// Images and Icons
import appIcon1 from "../../assets/images/app-screen-icon-1.svg";
import appIcon2 from "../../assets/images/app-screen-icon-2.svg";
import appIcon3 from "../../assets/images/app-screen-icon-3.svg";
import appIcon4 from "../../assets/images/app-screen-icon-4.svg";
import appScreen1 from "../../assets/images/app-screen-1.jpg";
import appScreen2 from "../../assets/images/app-screen-2.jpg";
import appScreen3 from "../../assets/images/app-screen-3.jpg";
import appScreen4 from "../../assets/images/app-screen-4.jpg";

const SectionOne = () => {
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
  const AppItems = [
    {
      icon: <SVG src={appIcon1} title="Call" />,
      title: "Search for Nearby Instructors",
      imgs: appScreen1,
      delay: 400,
    },
    {
      icon: <SVG src={appIcon2} title="Call" />,
      title: "Instantly book driving lessons right through the app",
      imgs: appScreen2,
      delay: 800,
    },
    {
      icon: <SVG src={appIcon3} title="Call" />,
      title: "Rate, review and choose your driving instructor ",
      imgs: appScreen3,
      delay: 1200,
    },
    {
      icon: <SVG src={appIcon4} title="Call" />,
      title: "Make payments easily and securely in the app",
      imgs: appScreen4,
      delay: 1600,
    },
  ];
  return (
    <section className="section_one cmn-space-top container">
      <header className="section-title center">
        <h1 className="h1" data-aos="zoom-in">
          One App for Your Entire{" "}
          <span className="ipad-clear">Driving Journey</span>
        </h1>
      </header>
      <section className="app_section">
        <ReactOwlCarousel
          loop
          margin={0}
          autoplay={true}
          items={4}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4, autoplay: false },
          }}
        >
          {AppItems.map((appIt, index) => (
            <div
              className="app-cols"
              key={index}
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              data-aos-delay={appIt.delay}
            >
              <article className="app-wrapper">
                <i className="icon-wrapper vhCenter">{appIt.icon}</i>
                <header className="app_title">{appIt.title}</header>
                <figure className="app_img_wrap vhCenter">
                  <img src={appIt.imgs} alt="" />
                </figure>
              </article>
            </div>
          ))}
        </ReactOwlCarousel>
      </section>
      <nav
        className="btn-wrapper center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Link to="" className="project_btns-" title="">
          Sign Up Now
        </Link>
      </nav>
    </section>
  );
};

export default SectionOne;
