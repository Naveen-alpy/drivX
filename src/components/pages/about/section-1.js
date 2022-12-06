import React from "react";
import { Link } from "react-router-dom";

import leftImage from "../about/images/img-sec-2.png";

const AboutSectionOne = () => {
  return (
    <section className="section-1">
      <div className="container">
        <div className="tw-row mr-bt-0">
          <div className="tw-col-md-7 tw-order-md-2">
            <div className="cmn-space pdLft-md-30">
              <article>
                <header className="section-title">
                  <h2 className="h1">
                    <span className="ipad-clear">
                      A <span className="light-green">Convenient </span>
                    </span>
                    Mobile App
                  </h2>
                </header>
                <p>
                  <strong>
                    Driver<span className="primary-color">X</span>
                  </strong>{" "}
                  provides you with the support and tools you need to
                  successfully become a fully licensed Canadian driver. The{" "}
                  <strong>
                    Driver<span className="primary-color">X</span>
                  </strong>{" "}
                  app is designed to ease the methods of connecting driving
                  students and instructors.
                </p>
                <p>
                  Created by CEO Ali Malik in August 2021. Using a
                  technology-based approach,{" "}
                  <strong>
                    Driver<span className="primary-color">X</span>
                  </strong>{" "}
                  was built to revolutionize the way students and{" "}
                  <Link to="/driving-instructors" title="instructors">
                    instructors
                  </Link>{" "}
                  connect. Ali is committed to the future growth of this
                  industry and excited about the innovative ways{" "}
                  <strong>
                    Driver<span className="primary-color">X</span>
                  </strong>{" "}
                  will shape this industry.
                </p>
                <p>
                  The{" "}
                  <strong>
                    Driver<span className="primary-color">X</span>
                  </strong>{" "}
                  app bridges the gap between{" "}
                  <span className="primary-color">driving students,</span> and{" "}
                  <span className="primary-color">driving instructors</span> in
                  a state-of-the-art and fresh technology-based way.
                </p>
                <nav className="btn-wrapper right">
                  <Link to="" className="project_btns-" title="Get Started">
                    Get Started
                  </Link>
                </nav>
              </article>
            </div>
          </div>
          <div className="tw-col-md-5 tw-order-md-1">
            <figure
              style={{ backgroundImage: `url(${leftImage})` }}
              className="fit_image"
            ></figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionOne;
