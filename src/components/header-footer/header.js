import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { CompanyLogo } from "../reusables";
import callIcon from "../../assets/images/call.svg";

const Header_prjct = () => {
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

  const logSignMenu = [
    {
      title: "Login",
      url: "",
      submenu: [
        { title: "Student", url: "https://app.thedriverx.com/#/login" },
        { title: "Instructor", url: "https://app.thedriverx.com/#/login" },
      ],
    },
    {
      title: "Sign Up",
      url: "",
      submenu: [
        { title: "Student", url: "https://app.thedriverx.com/#/signup" },
        { title: "Instructor", url: "https://app.thedriverx.com/#/signup" },
      ],
    },
  ];

  // Slim Header
  const [slimHeader, setSlimHeader] = useState(false);
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
    <header className={`project_header ${slimHeader ? "slim" : ""}`}>
      <div className="container dFlex">
        <nav className="logo_wrap">
          <CompanyLogo link={true} linkTo={"/"} />
        </nav>
        <div className="header_right">
          <div className="hdr_right_top vCenHRight">
            <a href="tel:8339582452" className="top-call vCenter">
              <i className="vhCenter">
                <SVG src={callIcon} title="Call" />
              </i>
              <span className="text">833-958-2452</span>
            </a>
            <nav className="log_sign">
              <button type="button" className="project_btns-white">
                <span>Login/Sign Up</span>
              </button>
              <List>
                {logSignMenu.map((dropMenu, index) => (
                  <ListItem key={index}>
                    {}
                    <Link>{dropMenu.title}</Link>
                  </ListItem>
                ))}
              </List>
            </nav>
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

export default Header_prjct;
