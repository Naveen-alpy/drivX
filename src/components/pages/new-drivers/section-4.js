import React from "react";
import { Link } from "react-router-dom";
import section_image from "../new-drivers/images/img-sec-4.png";

const NewDriverSectionFour = () => {
  const listItems = [
    {
      id: 1,
      content: (
        <>
          <strong className="light-green">Picking</strong> Your Instructor
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <strong className="light-green">Pay</strong> Per Use Services
        </>
      ),
    },
    {
      id: 3,
      content: (
        <>
          <strong className="light-green">Certified</strong> as a BDE Course
        </>
      ),
    },
    {
      id: 4,
      content: (
        <>
          <strong className="light-green">Chatting</strong> With Your Instructor
        </>
      ),
    },
    {
      id: 5,
      content: (
        <>
          <strong className="light-green">Making</strong> Mobile Payments
        </>
      ),
    },
    {
      id: 6,
      content: (
        <>
          <strong className="light-green">Following</strong> Driving Progress
        </>
      ),
    },
    {
      id: 7,
      content: (
        <>
          <strong className="light-green">Viewing</strong> Instructor
          Credentials
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
                Ideal for <span className="light-green">New Drivers</span>
              </h2>
            </header>
            <p>
              Some of the benefits you can look forward to while using the
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              app as a new driver include:
            </p>
            <ul>
              {listItems.map((itemss) => (
                <li key={itemss.id}>{itemss.content}</li>
              ))}
            </ul>
            <p>
              Whatever your reason for choosing{" "}
              <strong>
                Driver<span className="light-green">X</span>
              </strong>
              , you’ll find the support and tools you need to successfully
              become a fully licensed Canadian driver. Follow your driving
              dreams and user{" "}
              <strong>
                Driver<span className="light-green">X</span>
              </strong>{" "}
              to set up and manage your driving lessons. Minimize time waste and
              create a budget that works for your lifestyle.
            </p>
            <nav className="btn-wrapper right">
              <Link to="" title="Learn More" className="project_btns-">
                Learn More
              </Link>
            </nav>
          </div>
          <div className="tw-col-xl-5 center">
            <figure>
              <img src={section_image} alt="" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NewDriverSectionFour;
