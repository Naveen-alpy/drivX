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
import ParticleBackground from "react-particle-backgrounds";

const HomePage = () => {
  useEffect(() => {
    document.title = "DriverX";
  }, []);
  const settings = {
    canvas: {
      canvasFillSpace: true,
      width: "100%",
      height: "100%",
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 50,
      color: "#94ecbe",
      minSize: 2,
      maxSize: 5,
    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 3000,
    },
  };
  return (
    <>
      {/* <ParticleBackground settings={settings} /> */}
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
