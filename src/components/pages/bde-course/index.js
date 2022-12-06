import React, { useEffect } from "react";
import InnerBanner from "../../banner/inner-banner";
import FooterForm from "../../footer-form";
import TestimonialSection from "../../testimonial-section";

const BdeCourse = () => {
  useEffect(() => {
    document.title = "DriverX | BDE Course";
  }, []);
  return (
    <main className="bde_course_page">
      <InnerBanner parentClass="" pageLinkBtnDisplay="block" />
      <section className="container cmn-space">
        BDE Course Page Content Goes Here!
      </section>
      <TestimonialSection />
      <FooterForm />
    </main>
  );
};
export default BdeCourse;
