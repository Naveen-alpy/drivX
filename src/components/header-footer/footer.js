import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CompanyCall,
  CompanyEmail,
  CompanyLogo,
  SocialShare,
} from "../reusables";

const FooterPrjct = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  // Footer Menu
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const footerMenuItems = [
    { title: "About", slug: "about" },
    { title: "New Drivers", slug: "new-drivers" },
    { title: "Driving Instructors", slug: "driving-instructors" },
    { title: "BDE Course", slug: "bde-course" },
    { title: "Blogs", slug: "blogs" },
    { title: "Contact", slug: "contact" },
    { title: "Site Map", slug: "site-map" },
    { title: "Privacy Policy", slug: "privacy-policy" },
    { title: "Terms & Conditions", slug: "terms-conditions" },
  ];
  const serviceAreas = [
    { title: "Ontario", slug: "ontario" },
    { title: "Toronto", slug: "toronto" },
    { title: "Mississauga", slug: "mississauga" },
    { title: "Scarborough", slug: "scarborough" },
    { title: "Brampton", slug: "brampton" },
    { title: "Richmond Hill", slug: "richmond-hill" },
    { title: "Markham", slug: "markham" },
    { title: "Kitchener", slug: "kitchener" },
    { title: "Vaughan", slug: "vaughan" },
    { title: "Milton", slug: "milton" },
    { title: "Oakville", slug: "oakville" },
    { title: "Burlington", slug: "burlington" },
    { title: "Hamilton", slug: "hamilton" },
  ];
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="project_footer">
      <div className="container">
        <section className="footer-widget dFlex">
          <article className="comp_widget">
            <figure className="footer_logo">
              <CompanyLogo link={false} alt="DriverX" />
            </figure>
            <ul className="footer_call_mail">
              <li>
                <CompanyCall />
              </li>
              <li>
                <CompanyEmail />
              </li>
            </ul>
          </article>
          <nav className="footer_navigation dFlex" role="navigation">
            <ul className="ftr_main_nav">
              <li className={splitLocation[1] === "" ? "active" : ""}>
                <Link
                  to={"/"}
                  title="Home"
                  onClick={() => {
                    scrollTop();
                  }}
                >
                  Home
                </Link>
              </li>
              {footerMenuItems.map((items, index) => (
                <li
                  className={
                    splitLocation[1] === `${items.slug}` ? "active" : ""
                  }
                  key={index}
                >
                  <Link
                    to={items.slug}
                    title={items.title}
                    onClick={() => {
                      scrollTop();
                    }}
                  >
                    {items.title}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="ftr_sub_nav">
              <li
                className={splitLocation[1] === "service-areas" ? "active" : ""}
              >
                <Link
                  to={"/service-areas"}
                  title="Service Areas"
                  onClick={() => {
                    scrollTop();
                  }}
                >
                  Service Areas
                </Link>
                <ul>
                  {serviceAreas.map((serAreas, index) => (
                    <li
                      className={
                        splitLocation[1] === `${serAreas.slug}` ? "active" : ""
                      }
                      key={index}
                    >
                      {serAreas.title}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </section>
      </div>
      <section className="footer-copyright">
        <div className="container">
          <div className="vCenter">
            <div className="ftr-social vCenter">
              Share Us on
              <SocialShare />
            </div>
            <div className="copy_text">
              &copy; {getCurrentYear()} In Car Driving Lessons - thedriverx.com.
              All Rights Reserved.
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default FooterPrjct;
