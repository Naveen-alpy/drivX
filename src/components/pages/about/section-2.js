import React from "react";
import { Link } from "react-router-dom";
import section_image from "../about/images/img-sec-3.png";

const AboutSectionTwo = () => {
  const listItems = [
    {
      id: 1,
      content: "Search for nearby instructors",
    },
    {
      id: 2,
      content: "Book lessons based on key skills you need to practice",
    },
    {
      id: 3,
      content: (
        <>
          Book comprehensive driving packages that include access to the
          interactive and cutting-edge{" "}
          <strong>
            Driver<span className="light-green">X</span>
          </strong>{" "}
          Education course (available for the Ontario region)
        </>
      ),
    },
    {
      id: 4,
      content: "Rate and choose your instructor",
    },
    {
      id: 5,
      content: "Make payments easily through the app",
    },
    {
      id: 6,
      content: "Chat instantly with your instructor",
    },
    {
      id: 7,
      content: "Track your progress towards earning your driving certificate",
    },
  ];
  return (
    <section className="section-2 cmn-space">
      <div className="container">
        <div className="tw-row">
          <div className="tw-col-xl-7 list-on-content">
            <header className="section-title">
              <h2 className="h1">
                Designed for{" "}
                <span className="ipad-clear light-green">Students</span>
              </h2>
            </header>
            <p className="fSize-20">
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              is expertly designed for{" "}
              <strong className="light-green">Students</strong>, providing the
              ability to:
            </p>
            <ul>
              {listItems.map((itemss) => (
                <li key={itemss.id}>{itemss.content}</li>
              ))}
            </ul>
          </div>
          <div className="tw-col-xl-5 center">
            <figure>
              <img src={section_image} alt="" />
            </figure>
            <nav className="btn-wrapper hCenter">
              <Link to="" title="Get Started" className="project_btns-">
                Get Started
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSectionTwo;
