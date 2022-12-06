import React from "react";
import { Link } from "react-router-dom";
import section_Image from "../about/images/img-sec-4.png";
const AboutSectionThree = () => {
  const listItems = [
    {
      id: 1,
      content: (
        <>
          <strong>Access</strong> a fully integrated system to help manage
          students and bookings.
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <strong>Easily</strong> expand your client base with the{" "}
          <strong>
            Driver<span className="light-green">X</span>
          </strong>{" "}
          app and get discovered by new students who can search for instructors
          in their city and instantly book lessons.
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <strong>Stay</strong> on top of your schedule,
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <strong>Get</strong> paid instantly,
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <strong>Communicate</strong> with clients, right through the app.
        </>
      ),
    },
    {
      id: 6,
      content: (
        <>
          <strong>Sign up</strong> and use{" "}
          <strong>
            Driver<span className="light-green">X</span>
          </strong>{" "}
          as an independent instructor and book individual lessons immediately.
        </>
      ),
    },
  ];
  return (
    <section className="cmn-space section-3">
      <div className="container">
        <div className="tw-row vCenter">
          <div className="tw-col-xl-6 tw-order-xl-2 list-on-content">
            <header className="section-title">
              <h2 className="h1">
                Greatly benefits{" "}
                <span className="ipad-clear light-green">Instructors</span>
              </h2>
            </header>
            <p className="fSize-20">
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              benefits <strong className="light-green">Instructors</strong> by
              providing the ability to:
            </p>
            <ul>
              {listItems.map((itemss) => (
                <li key={itemss.id}>{itemss.content}</li>
              ))}
            </ul>
            <nav className="btn-wrapper right">
              <Link
                to={"/driving-instructors"}
                title=""
                className="project_btns-"
              >
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

export default AboutSectionThree;
