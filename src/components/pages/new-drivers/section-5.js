import React from "react";
import { Link } from "react-router-dom";

const NewDriverSectionFive = () => {
  return (
    <section className="new-driver cmn-space">
      <div className="container vCenter">
        <article className="desk-p-r-4">
          <header className="sec-title-">
            <h2>
              <a href="<?php echo $baseURL; ?>/bde-course.php" title="">
                Why Our Online{" "}
                <span className="desktop-clearr">
                  <span className="primary-color">BDE Course</span>{" "}
                </span>
                Is Best
              </a>
            </h2>
          </header>
          <p>
            While{" "}
            <strong>
              Driver<span className="primary-color">X</span>
            </strong>{" "}
            is designed to help you pass a road test for your G2 license, we
            also help you become a fully licensed driver more quickly with our
            BDE course selection.
          </p>
          <p>
            In Ontario, your G2 license comes with restrictions which allow you
            to drive, but don’t permit you the same freedoms as G license
            drivers. To remove the novice driver status from your license, you
            must either be a G2 license holder for one year or take a full
            driver’s education course, including 10-hours of instructed in-car
            lessons.
          </p>
          <nav className="btn-wrapper">
            <Link to="/bde-course" title="" className="project_btns-">
              Learn More
            </Link>
          </nav>
        </article>
        <section className="bde_slider_wrapper">
          <figure className="ipad-frame"></figure>
          <div className="main_slider">
            {/* <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-1.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-2.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-3.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-4.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-5.jpg)"></figure>
            </div> */}
          </div>
          <div className="thumb_slider">
            {/* <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-1.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-2.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-3.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-4.jpg)"></figure>
            </div>
            <div>
              <figure style="background-image:url(<?php echo $baseURL; ?>/assets/images/slider-5.jpg)"></figure>
            </div> */}
          </div>
        </section>
      </div>
    </section>
  );
};
export default NewDriverSectionFive;
