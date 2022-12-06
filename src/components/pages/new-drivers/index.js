import React from "react";
import InnerBanner from "../../banner/inner-banner";
import FooterForm from "../../footer-form";
import TestimonialSection from "../../testimonial-section";

const NewDriversPage = () => {
  return (
    <main className="newdriver_page">
      <InnerBanner
        parentClass="new-drivers"
        firstLine="Revolutioning the Way of Drivers"
        secondLine={
          <>
            <strong>Students</strong> and <strong>Instructors</strong> Connect
          </>
        }
        appButtonDisplay="none"
        pageLinkBtnDisplay="block"
        pageLinkBtnText="Read More"
        pageLinkBtnAlign="left"
        pageLinkTo="/about"
      />
      <section className="container">
        New Drivers Page Content Goes Here!
      </section>
      <TestimonialSection />
      <FooterForm />
    </main>
  );
};

export default NewDriversPage;
