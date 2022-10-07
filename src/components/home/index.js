import React, { useEffect } from "react";
import BannerModule from "../banner";

const Home_page = () => {
  useEffect(() => {
    document.title = "DriverX";
  }, []);
  return <BannerModule />;
};

export default Home_page;
