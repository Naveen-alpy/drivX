import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/pages/about";
import BlogPosts from "./components/blog";
import BlogPostsTemplate from "./components/blog/listing";
import SingleBlogPost from "./components/blog/single-blog-post";
import HomePage from "./components/home";
import NewDriversPage from "./components/pages/new-drivers";
import Template from "./components/template";
import NoBannerTemplate from "./components/no-banner-template";
import SiteMap from "./components/pages/site-map";

import "./main-theme-style.css";
import ThankYou from "./components/pages/others/thank-you";
import PageNotFound from "./components/pages/others/404";
import DrivingInstructors from "./components/pages/driving-instructors";

const App = () => {
  return (
    <HelmetProvider>
      <section className="outer_wrapper">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Template />}>
              <Route index element={<HomePage />} className="home" />
              <Route path="about" element={<AboutPage />} />
              <Route path="new-drivers" element={<NewDriversPage />} />
              <Route
                path="driving-instructors"
                element={<DrivingInstructors />}
              />
              <Route path="bde-course" element={<AboutPage />} />
              <Route path="blogs" element={<BlogPosts />}>
                <Route index element={<BlogPostsTemplate />} />
                <Route path=":myslug" element={<SingleBlogPost />} />
              </Route>
              <Route path="service-areas" element={<AboutPage />} />
              <Route path="contact" element={<AboutPage />} />
            </Route>
            <Route path="/" element={<NoBannerTemplate />}>
              <Route path="site-map" element={<SiteMap />} />
              <Route path="thank-you" element={<ThankYou />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </section>
    </HelmetProvider>
  );
};

export default App;
