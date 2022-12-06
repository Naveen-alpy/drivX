import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// Image and Icons
import bgShape from "../../assets/images/bg-benefits.jpg";
import courseIconOne from "../../assets/images/bde-icon-1.svg";
import courseIconTwo from "../../assets/images/bde-icon-2.svg";
import courseIconThree from "../../assets/images/bde-icon-3.svg";

const SectionSix = () => {
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
  const bdeCourse = [
    {
      title: "Become eligible for a discount on your car insurance",
      icon: courseIconOne,
      delay: 400,
    },
    {
      title: "Get MTO certified",
      icon: courseIconTwo,
      delay: 800,
    },
    {
      title: "Fast track your G2 road test",
      icon: courseIconThree,
      delay: 1200,
    },
  ];
  return (
    <section
      className="sections-bde-course"
      style={{ backgroundImage: `url(${bgShape})` }}
    >
      <div className="container">
        <header className="section-title center" data-aos="fade-up">
          <h2 className="h1">
            Benefits of Completing{" "}
            <span className="ipad-clear">Our MTO Approved BDE Course</span>
          </h2>
        </header>
        <section className="tw-row center p-b-20">
          {bdeCourse.map((bdeList, index) => (
            <div
              className="tw-col-xl-4 tw-col-md-6"
              key={index}
              data-aos="fade-up"
              data-aos-duration={bdeList.delay}
            >
              <article className="bde_online_course vCenter">
                <i className="vhCenter icon_wrapper">
                  <SVG src={bdeList.icon} alt="" />
                </i>
                <header className="bde_title">{bdeList.title}</header>
              </article>
            </div>
          ))}
        </section>
        <nav className="center" data-aos="fade-up">
          <Link className="project_btns-" to="">
            <span>Download Now!</span>
          </Link>
        </nav>
      </div>
    </section>
  );
};

export default SectionSix;
