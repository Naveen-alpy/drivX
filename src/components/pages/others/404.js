import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <main className="error_page">
      <section className="container center">
        <header className="section-title center">
          <h1 className="h1">
            Sorry!
            <div className="sub-text light-green">Page Not Found</div>
          </h1>
        </header>
        <p>
          <Link to="/site-map" title="">
            Click Here
          </Link>{" "}
          to visit our sitemap to find what you're looking for or{" "}
          <span className="ipad-clear">
            <Link to="/contact" title="">
              Contact Us
            </Link>{" "}
            directly if you require assistance.
          </span>
        </p>
      </section>
    </main>
  );
};

export default PageNotFound;
