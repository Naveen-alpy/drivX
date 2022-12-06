import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
// Images and Icons
import fullLogo from "../../assets/images/logo.png";
import iconAndroid from "../../assets/images/icon-android.svg";
import iconIos from "../../assets/images/icon-ios.svg";

const InnerBanner = (props) => {
  return (
    <section
      className={`project_banner inner ${
        props.parentClass ? props.parentClass : ""
      }`}
    >
      <span className="bnr-dots-light"></span>
      <span className="bnr-dots-dark"></span>
      <div className="container vCenter">
        <div className="text_container">
          <article className="banner_text_wrapper text-white">
            <img src={fullLogo} alt="DriverX" />
            <h1 className="main_title">
              <span className="ipad-clear">
                {props.firstLine ? props.firstLine : "Revolutionizing The Way "}
              </span>
              <span className="ipad-clear">
                {props.secondLine ? (
                  props.secondLine
                ) : (
                  <>
                    <strong>Students</strong> and <strong>Instructors</strong>{" "}
                    Connect
                  </>
                )}
              </span>
            </h1>
            <nav
              className="button-group vCenter"
              style={{
                display: props.appButtonDisplay
                  ? props.appButtonDisplay
                  : "none",
                ...props.add,
              }}
            >
              <Link className="app_button" to="">
                <i>
                  <SVG src={iconAndroid} title="Android" />
                </i>
                <div className="text-of-btn">
                  <small>GET IT ON</small>Google Play
                </div>
              </Link>
              <Link className="app_button" to="">
                <i>
                  <SVG src={iconIos} title="IOS" />
                </i>
                <div className="text-of-btn">
                  <small>Download on the</small>App Store
                </div>
              </Link>
            </nav>
            <nav
              className={`btn-wrapper ${
                props.pageLinkBtnAlign ? props.pageLinkBtnAlign : ""
              }`}
              style={{
                display: props.pageLinkBtnDisplay
                  ? props.pageLinkBtnDisplay
                  : "none",
              }}
            >
              <Link
                to={props.pageLinkTo ? props.pageLinkTo : "/"}
                className="project_btns-"
                title=""
              >
                {props.pageLinkBtnText ? props.pageLinkBtnText : "Learn More"}
              </Link>
            </nav>
          </article>
        </div>
      </div>
    </section>
  );
};
export default InnerBanner;
