import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

import smallLogo from "../assets/images/logo-sm.png";
import callIcon from "../assets/images/call.svg";
import emailIcon from "../assets/images/icon-email.svg";
import facebook from "../assets/images/facebook.svg";
import twitter from "../assets/images/twitter.svg";
import instagram from "../assets/images/instagram.svg";

export const CompanyLogo = (props) => {
  const logoTemplate = <img src={smallLogo} alt={props.alt} />;
  if (props.link) {
    return (
      <Link className="comp_logo" title={props.title} to={props.linkTo}>
        {logoTemplate}
      </Link>
    );
  } else {
    return logoTemplate;
  }
};
// Call
export const CompanyCall = () => {
  return (
    <a href="tel:8339582452" className="top-call vCenter">
      <i className="vhCenter">
        <SVG src={callIcon} title="Call" />
      </i>
      <span className="text">833-958-2452</span>
    </a>
  );
};
// Email
export const CompanyEmail = () => {
  return (
    <a href="mailto:ontariodriverx@gmail.com" className="comp_email vCenter">
      <i className="vhCenter">
        <SVG src={emailIcon} title="Email" />
      </i>
      <span className="text">ontariodriverX@gmail</span>
    </a>
  );
};
// Social Media shares
export const SocialShare = () => {
  const loopers = [
    {
      title: "Facebook",
      url: "https://www.facebook.com/",
      icon: facebook,
    },
    {
      title: "Twitter",
      url: "https://twitter.com/login",
      icon: twitter,
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/",
      icon: instagram,
    },
  ];
  return (
    <ul className="social_share vCenter">
      {loopers.map((loops, index) => (
        <li key={index}>
          <a
            href={loops.url}
            title={loops.title}
            target="_blank"
            rel="noreferrer noopener nofollow"
            className="vhCenter"
          >
            <SVG src={loops.icon} title={loops.title} />
          </a>
        </li>
      ))}
    </ul>
  );
};
