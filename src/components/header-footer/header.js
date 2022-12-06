import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { CompanyCall, CompanyLogo } from "../reusables";
import lockIcon from "../../assets/images/lock.svg";
import MenuItems from "./menu-items";

const HeaderPrjct = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const headerMenuItems = [
    { title: "About", slug: "about" },
    { title: "New Drivers", slug: "new-drivers" },
    { title: "Driving Instructors", slug: "driving-instructors" },
    { title: "BDE Course", slug: "bde-course" },
    { title: "Blogs", slug: "blogs" },
    { title: "Service Areas", slug: "service-areas" },
    { title: "Contact", slug: "contact" },
  ];

  // Slim Header
  const [slimHeader, setSlimHeader] = useState(false);
  // Mobile Menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const buttonClickEvent = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  useEffect(() => {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        setSlimHeader(true);
      } else {
        setSlimHeader(false);
      }
    });
  }, [slimHeader]);
  return (
    <header
      className={`project_header${showMobileMenu ? " openMobMenu" : ""}${
        slimHeader ? " slim" : ""
      } ${props.noBannerClass ? props.noBannerClass : ""}`}
    >
      <div className="container dFlex">
        <nav className="logo_wrap">
          <CompanyLogo link={true} linkTo={"/"} title="DriverX" alt="DriverX" />
        </nav>
        <div className="header_right">
          <div className="hdr_right_top vCenHRight">
            <CompanyCall />
            <nav className="log_sign">
              <button type="button" className="project_btns-white md">
                <span className="text">Login/Sign Up</span>
                <i className="icon">
                  <SVG src={lockIcon} title="Login/Register" />
                </i>
              </button>
              {/* <ul>
                <li>
                  Menu Item
                  <ul>
                    <li>
                      Sub menu
                      <ul>
                        <li>Sub Sub menu</li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul>
                <li>
                  Login
                  <ul>
                    <li>
                      Sub Child
                      <ul>
                        <li>Sub Sub Child</li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Sign Up
                  <ul>
                    <li>Sub Child</li>
                  </ul>
                </li>
              </ul> */}
            </nav>
            <button
              type="button"
              className="mob_trigger"
              onClick={() => {
                buttonClickEvent();
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <nav className="main-menu">
            <List>
              <ListItem className={splitLocation[1] === "" ? "active" : ""}>
                <Link to="/">Home</Link>
              </ListItem>
              {headerMenuItems.map((menuItems, index) => (
                <ListItem
                  className={
                    splitLocation[1] === `${menuItems.slug}` ? "active" : ""
                  }
                  key={index}
                >
                  <Link to={menuItems.slug}>{menuItems.title}</Link>
                </ListItem>
              ))}
            </List>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderPrjct;
