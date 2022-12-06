import React, { useEffect } from "react";
import InnerBanner from "../../banner/inner-banner";
import FooterForm from "../../footer-form";
import TestimonialSection from "../../testimonial-section";

const ContactUs = () => {
  useEffect(() => {
    document.title = "DriverX | BDE Course";
  }, []);
  return (
    <main className="contacte_page">
      <InnerBanner parentClass="" pageLinkBtnDisplay="block" />
      <section className="container cmn-space">
        Contact Page Content Goes Here!
      </section>
      <TestimonialSection />
      <FooterForm />
    </main>
  );
};
export default ContactUs;
