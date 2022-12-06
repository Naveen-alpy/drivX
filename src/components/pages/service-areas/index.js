import React, { useEffect } from "react";
import InnerBanner from "../../banner/inner-banner";
import FooterForm from "../../footer-form";
import TestimonialSection from "../../testimonial-section";

const ServiceAreas = () => {
  useEffect(() => {
    document.title = "DriverX | Service Areas";
  }, []);
  return (
    <main className="service_areas_page">
      <InnerBanner parentClass="" pageLinkBtnDisplay="block" />
      <section className="container cmn-space">
        Service Areas Page Content Goes Here!
      </section>
      <TestimonialSection />
      <FooterForm />
    </main>
  );
};
export default ServiceAreas;
