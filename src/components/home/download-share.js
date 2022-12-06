import React from "react";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";

// Images and Icons
import iconAndroid from "../../assets/images/icon-android.svg";
import iconIos from "../../assets/images/icon-ios.svg";
import { SocialShare } from "../reusables";

const DownloadShare = () => {
  return (
    <section className="cmn-space-top">
      <div className="container">
        <header className="section-title lg center">
          <h2 className="h1">
            Download{" "}
            <strong>
              Driver<span className="light-green">X</span>
            </strong>{" "}
            App Today
            <div className="sub-text">
              Praesent at mattis enim phasellus ut varius ante quisque sem
              ligula
            </div>
          </h2>
        </header>
        <nav className="btn-group vhCenter">
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
        <div className="download_share hCenter">
          <header className="section-title center">
            <span className="sub-text">Follow Us On Social Media</span>
          </header>
          <SocialShare />
        </div>
      </div>
    </section>
  );
};

export default DownloadShare;
