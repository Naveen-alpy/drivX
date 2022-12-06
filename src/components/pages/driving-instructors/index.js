import React, { useEffect } from "react";
import InnerBanner from "../../banner/inner-banner";
import FooterForm from "../../footer-form";
import TestimonialSection from "../../testimonial-section";
const DrivingInstructors = () => {
  useEffect(() => {
    document.title = "DriverX | Driving Instructors";
  }, []);
  return (
    <main className="driving_instructor_page">
      <InnerBanner parentClass="" pageLinkBtnDisplay="block" />
      <section className="container">
        Driving Instructors Page Content Goes Here!
      </section>
      <TestimonialSection />
      <FooterForm />
    </main>
  );
};
export default DrivingInstructors;
