import React from "react";
import { Link } from "react-router-dom";

import smallLogo from "../assets/images/logo-sm.png";

export const CompanyLogo = (props) => {
  const logoTemplate = <img src={smallLogo} alt="" />;
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
