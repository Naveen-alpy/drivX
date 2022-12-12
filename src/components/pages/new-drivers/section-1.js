import React from "react";
import { Link } from "react-router-dom";
import leftImage from "../about/images/img-sec-2.png";

const NewDriverSectionOne = () => {
  return (
    <section className="section-1">
      <div className="container">
        <div className="tw-row mr-bt-0">
          <div className="tw-col-md-7 tw-order-md-2">
            <div className="cmn-space pdLft-md-30">
              <article className="list-on-content">
                <header className="section-title">
                  <h2 className="h1">
                    In Car <span className="light-green">Driving Lessons </span>
                    in Ontario New <span className="Drivers"></span>
                  </h2>
                </header>
                <p>
                  <strong>
                    Driver<span className="light-green">X</span>
                  </strong>{" "}
                  is a mobile app connecting driving students and driving
                  instructors. If you’re learning to drive,{" "}
                  <strong>
                    Driver<span className="light-green">X</span>
                  </strong>{" "}
                  can help you find:
                </p>
                <ul>
                  <li>Independent lessons</li>
                  <li>Driving courses</li>
                  <li>
                    <Link to="/driving-instructors" title="">
                      Driving Instructors
                    </Link>
                  </li>
                </ul>
                <p>
                  To use the{" "}
                  <strong>
                    Driver<span className="light-green">X</span>
                  </strong>{" "}
                  app, students must be certified as new drivers. You can select
                  an instructor from registered{" "}
                  <strong>
                    Driver<span className="light-green">X</span>
                  </strong>
                  users in your local area. After driving with an instructor you
                  can rate them through the app, and either drive with them
                  again or select a new driver.
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
export default NewDriverSectionOne;
