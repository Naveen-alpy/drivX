import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import fullLogo from "../../assets/images/logo.png";
import iconAndroid from "../../assets/images/icon-android.svg";
import iconIos from "../../assets/images/icon-ios.svg";

const BannerModule = () => {
  return (
    <section className="project_banner home">
      <span className="bnr-dots-light"></span>
      <span className="bnr-dots-dark"></span>
      <div className="container dFlex">
        <div className="text_container">
          <article className="banner_text_wrapper text-white">
            <img src={fullLogo} alt="DriverX" />
            <h1 className="main_title">
              Revolutionizing The Way{" "}
              <span className="ipad-clear">
                <strong>Students</strong> and <strong>Instructors</strong>{" "}
                Connect
              </span>
            </h1>
            <nav className="button-group vCenter">
              <Link to="">
                <button type="button" className="app_button">
                  <i>
                    <SVG src={iconAndroid} title="Android" />
                  </i>
                  <div className="text-of-btn">
                    <small>GET IT ON</small>Google Play
                  </div>
                </button>
              </Link>
              <Link to="">
                <button type="button" className="app_button">
                  <i>
                    <SVG src={iconIos} title="IOS" />
                  </i>
                  <div className="text-of-btn">
                    <small>Download on the</small>App Store
                  </div>
                </button>
              </Link>
            </nav>
          </article>
        </div>
        <div className="image_container"></div>
      </div>
    </section>
  );
};

export default BannerModule;
