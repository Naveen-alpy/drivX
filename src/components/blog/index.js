import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BannerModule from "../banner";
import PostListing from "./post-listing";

const BlogPosts = () => {
  const [post, setPost] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    document.title = "DriverX | Blogs";

    /* const data1 = axios.get("http://localhost/wordpress/wp-json/wp/v2/posts");
    const data2 = axios.get(
      `http://localhost/wordpress/wp-json/wp/v2/categories`
    );
    Promise.all([data1, data2]).then((res) => {
      const [res1, res2] = res;
      console.log("Response of Posts", res1.data);
      setPost(res1.data);
      setCategories(res2.data);
      // res[0] => data1
      // res[1] => data2
      // res[2] => data3
      // res[0] = [{.........},{........}] ==> can write loop
      // res[1] = {.......} ==> res[1].key_name
    }); */
  }, []);

  return (
    <main className="blog_page_template">
      <BannerModule />
      <section className="container">
        <h1>Blogs</h1>
        <div className="tw-row">
          <div className="tw-col-xl-8">
            <div className="tw-row">
              <Outlet />
              {/* {post.map((el, index) => {
                  return (
                    <div key={index}>
                      <h2>{el.title.rendered}</h2>
                      {el.id}
                      <ul>
                        {categories
                          .filter((els) => {
                            return (
                              el.categories.find((ef) => {
                                return (ef = els.id);
                              }) > 0
                            );
                          })
                          .map((em) => (
                            <li>{em.name}</li>
                          ))}
                      </ul>
                    </div>
                  );
                })} */}
            </div>
          </div>
          <div className="tw-col-xl-4">
            <aside className="post_widget_recentPosts"></aside>
            <aside className="post_widget_categories">
              <ul>
                {/* {categories
                  .filter((els) => {
                    return (
                      el.categories.find((ef) => {
                        return (ef = els.id);
                      }) > 0
                    );
                  })
                  .map((em) => (
                    <li>{em.name}</li>
                  ))} */}
              </ul>
            </aside>
            <aside className="post_widget_archieves"></aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPosts;
