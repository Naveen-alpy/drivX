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
      width: "100vw",
      height: "100vh",
      useBouncyWalls: false,
    },
    particle: {
      particleCount: 30,
      color: "#2fa14a",
      minSize: 5,
      maxSize: 10,
    },
    velocity: {
      directionAngle: 10,
      directionAngleVariance: 360,
      minSpeed: 1,
      maxSpeed: 3,
    },
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.4,
      opacityTransitionTime: 5000,
    },
  };
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
      <section className="particleBg">
        <ParticleBackground settings={settings} />
      </section>
    </>
  );
};

export default HomePage;
