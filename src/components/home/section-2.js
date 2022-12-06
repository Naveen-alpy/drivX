import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
import ReactOwlCarousel from "react-owl-carousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// Image & Icon files
import skewed_img from "../../assets/images/home-instructor-image.png";
import inst_icon1 from "../../assets/images/instrcutor-icon.svg";
import slider_1 from "../../assets/images/home-instructor-slider-1.jpg";
import listItem_icon_1 from "../../assets/images/instructor-icon-1.svg";
import listItem_icon_2 from "../../assets/images/instructor-icon-2.svg";
import listItem_icon_3 from "../../assets/images/instructor-icon-3.svg";
import listItem_icon_4 from "../../assets/images/instructor-icon-4.svg";
import listItem_icon_5 from "../../assets/images/instructor-icon-5.svg";

const SectionTwo = () => {
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
  const boxed_list_item = [
    {
      title: "Low booking fees cut of 10% (equivalent to $4)",
      icon: <SVG src={listItem_icon_1} title="" />,
      delay: 400,
    },
    {
      title: "Connect instructors with students in their area",
      icon: <SVG src={listItem_icon_2} title="" />,
      delay: 800,
    },
    {
      title: "Grant your students access to our BDE ministry approved course",
      icon: <SVG src={listItem_icon_3} title="" />,
      delay: 1200,
    },
    {
      title: "Simplify student payments via cash, online, or our app",
      icon: <SVG src={listItem_icon_4} title="" />,
      delay: 1600,
    },
    {
      title:
        "Instructors can earn 50% commission on learners taking the DriverX BDE Course",
      icon: <SVG src={listItem_icon_5} title="" />,
      delay: 2000,
    },
  ];
  return (
    <section className="home_instructure cmn-space">
      <div className="container">
        <div className="tw-row">
          <div className="tw-col-xl-40 tw-order-xl-2">
            <header className="section-title" data-aos="fade-left">
              <h2 className="h1">
                <span className="light-green fw-700 clear">Instructors:</span>
                <div className="sub-text">
                  Become an <strong className="light-green">Instructor</strong>{" "}
                  With{" "}
                  <strong>
                    Driver<span className="light-green">X</span>
                  </strong>
                </div>
              </h2>
            </header>
            <article className="boxed_list_items text-white">
              <ul>
                {boxed_list_item.map((items, index) => (
                  <li
                    key={index}
                    data-aos="fade-left"
                    data-aos-delay={items.delay}
                  >
                    <i>{items.icon}</i>
                    <p>{items.title}</p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div
            className="tw-col-xl-60 tw-order-xl-1 mob-t-align-center"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="2000"
          >
            <div className="hm_inst_large_img">
              <img src={skewed_img} alt="Instructor" />
            </div>
            <div className="hm_inst_slider_container">
              <div className="slider_wrapper">
                <ReactOwlCarousel
                  loop
                  items={1}
                  center
                  margin={0}
                  autoplay={true}
                >
                  <div className="item">
                    <figure>
                      <img src={slider_1} alt="" />
                    </figure>
                  </div>
                  <div className="item">
                    <figure>
                      <img src={slider_1} alt="" />
                    </figure>
                  </div>
                  <div className="item">
                    <figure>
                      <img src={slider_1} alt="" />
                    </figure>
                  </div>
                </ReactOwlCarousel>
              </div>
              <span className="vhCenter svg-with-roundbox">
                <SVG src={inst_icon1} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
