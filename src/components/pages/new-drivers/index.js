import React, { useEffect } from "react";
import InnerBanner from "../../banner/inner-banner";
import FooterForm from "../../footer-form";
import TestimonialSection from "../../testimonial-section";
import NewDriverSectionOne from "./section-1";
import NewDriverSectionTwo from "./section-2";
import NewDriverSectionThree from "./section-3";
import NewDriverSectionFour from "./section-4";
import NewDriverSectionFive from "./section-5";

const NewDriversPage = () => {
  useEffect(() => {
    document.title = "DriverX | New Drivers";
  }, []);
  return (
    <main className="newdriver_page">
      <InnerBanner
        parentClass=""
        firstLine={<>New Drivers</>}
        appButtonDisplay="none"
        pageLinkBtnText="Learn More"
        pageLinkTo="/about"
      />
      <NewDriverSectionOne />
      <NewDriverSectionTwo />
      <NewDriverSectionThree />
      <NewDriverSectionFour />
      <NewDriverSectionFive />
      <TestimonialSection />
      <FooterForm />
    </main>
  );
};

export default NewDriversPage;
