import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import InnerBanner from "../banner/inner-banner";

const BlogPosts = () => {
  useEffect(() => {
    document.title = "DriverX | Blogs";
  });

  /* const data2 = axios.get(
      `http://localhost/wordpress/wp-json/wp/v2/categories`
    ); */

  return (
    <main className="blog_page_template">
      <InnerBanner parentClass="" pageLinkBtnDisplay="block" />
      <section className="container cmn-space">
        <h1>Blogs</h1>
        <div className="tw-row">
          <div className="tw-col-xl-8">
            <div className="tw-row">
              <Outlet />
            </div>
          </div>
          <div className="tw-col-xl-4">
            <aside className="post_widget_recentPosts"></aside>
            <aside className="post_widget_categories"></aside>
            <aside className="post_widget_archieves"></aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPosts;
