import React from "react";
import { Link } from "react-router-dom";
import section_image from "../about/images/img-sec-3.png";

const NewDriverSectionTwo = () => {
  const listItems = [
    {
      id: 1,
      content: (
        <>
          <strong className="light-green">Click</strong> the "signup" button
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <strong className="light-green">Choose</strong> either student or
          instructor
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <strong className="light-green">Fill</strong> in the required
          information
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <strong className="light-green">Select</strong> the type of driving
          lessons you require
        </>
      ),
    },
  ];
  return (
    <section className="section-2 cmn-space">
      <div className="container">
        <div className="tw-row vCenter">
          <div className="tw-col-xl-7 list-on-content desk-p-r-4">
            <header className="section-title">
              <h2 className="h1">
                Registering for{" "}
                <strong>
                  Driver<span className="light-green">X</span>
                </strong>
              </h2>
            </header>
            <p className="fSize-20">
              Becoming a driver on the{" "}
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              app is a simple process.
            </p>
            <ul>
              {listItems.map((itemss) => (
                <li key={itemss.id}>{itemss.content}</li>
              ))}
            </ul>
            <p>
              You will need the number from your learner’s license, along with
              your address. This lets{" "}
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              show you matches for instructors in your city, rather than
              province, or nation-wide.
            </p>
            <p>
              Being matched in your city is one of the best things about
              <strong>
                Driver<span className="light-green">X</span>
              </strong>
              . It reduces time waste and improves your chances of meeting an
              instructor who can help you throughout your learning experience.
            </p>
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
export default NewDriverSectionTwo;
