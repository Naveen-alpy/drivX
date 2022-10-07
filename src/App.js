import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About_page from "./components/about";
import BlogPosts from "./components/blog";
import BlogPostsTemplate from "./components/blog/listing";
import SingleBlogPost from "./components/blog/single-blog-post";
import Home_page from "./components/home";
import Template from "./components/template";

import "./main-theme-style.css";

const App = () => {
  return (
    <section className="outer_wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Template />}>
            <Route index element={<Home_page />} />
            <Route path="about" element={<About_page />} />
            <Route path="new-drivers" element={<About_page />} />
            <Route path="driving-instructors" element={<About_page />} />
            <Route path="bde-course" element={<About_page />} />
            <Route path="blogs" element={<BlogPosts />}>
              <Route index element={<BlogPostsTemplate />} />
              <Route path=":myslug" element={<SingleBlogPost />} />
            </Route>
            <Route path="service-areas" element={<About_page />} />
            <Route path="contact" element={<About_page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
