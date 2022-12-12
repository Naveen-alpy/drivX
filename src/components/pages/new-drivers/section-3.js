import React from "react";
import { Link } from "react-router-dom";
import section_Image from "../about/images/img-sec-4.png";
const NewDriverSectionThree = () => {
  return (
    <section className="cmn-space section-3">
      <div className="container">
        <div className="tw-row vCenter">
          <div className="tw-col-xl-6 tw-order-xl-2 desk-p-l-4 list-on-content">
            <header className="section-title">
              <h2 className="h1">
                Earn Your License{" "}
                <span className="ipad-clear">
                  <span className="light-green">With</span>{" "}
                  <strong>
                    Driver<span className="light-green">X</span>
                  </strong>
                </span>
              </h2>
            </header>
            <p>
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              takes a somewhat stressful experience and simplifies it for you.
              Finding instructors, making payments, and organizing your schedule
              with your driving school are all streamlined in the
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              app.
            </p>
            <p>
              Forget juggling multiple platforms to find, book, and pay for a
              driving instructor. Select a full course, individual lessons, and
              practice sessions with a contracted instructor.
            </p>
            <nav className="btn-wrapper right">
              <Link to="" title="" className="project_btns-">
                Learn More
              </Link>
            </nav>
          </div>
          <div className="tw-col-xl-6 tw-order-xl-1">
            <figure>
              <img src={section_Image} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewDriverSectionThree;
