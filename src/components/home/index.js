import React, { useEffect } from "react";
import BannerModule from "../banner";
import TestimonialSection from "../testimonial-section";
import DownloadShare from "./download-share";
import SectionOne from "./section-1";
import SectionTwo from "./section-2";
import SectionThree from "./section-3";
import SectionFour from "./section-4";
import SectionFive from "./section-5";
import SectionSix from "./section-6";

const HomePage = () => {
  useEffect(() => {
    document.title = "DriverX";
  }, []);
  return (
    <>
      <BannerModule />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <TestimonialSection />
      <DownloadShare />
    </>
  );
};

export default HomePage;
