import React, { useEffect } from "react";
import BannerModule from "../banner";

const About_page = () => {
  useEffect(() => {
    document.title = "DriverX | About Us";
  }, []);
  return (
    <main className="about_page">
      <BannerModule />
      <section className="container">About Page Content Goes Here!</section>
    </main>
  );
};

export default About_page;
