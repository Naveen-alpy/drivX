import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import InnerBanner from "../../banner/inner-banner";
import FooterForm from "../../footer-form";
import TestimonialSection from "../../testimonial-section";
import AboutSectionOne from "./section-1";
import AboutSectionTwo from "./section-2";
import AboutSectionThree from "./section-3";

const AboutPage = () => {
  useEffect(() => {
    document.title = "DriverX | About Us";
  }, []);
  return (
    <main className="about_page">
      <Helmet>
        <title>About the DriverX App | DriverX</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <InnerBanner parentClass="" pageLinkBtnDisplay="block" />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <TestimonialSection />
      <FooterForm />
    </main>
  );
};

export default AboutPage;
