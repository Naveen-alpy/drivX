import axios from "axios";
import React, { useEffect, useState } from "react";
import PostListing from "./post-listing";

const BlogPostsTemplate = () => {
  const [getBlogPosts, setGetBlogPosts] = useState([]);
  useEffect(() => {
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

    const postLists = axios.get(
      "http://localhost/wordpress/wp-json/wp/v2/posts"
    );
    Promise.all([postLists]).then((res) => {
      const [getPostList] = res;
      console.log("Response of BPosts", getPostList.data);
      setGetBlogPosts(getPostList.data);
    });
  }, []);

  return (
    <>
      {getBlogPosts.map((pList) => (
        <div className="tw-col-md-6">
          <PostListing key={pList.id} pList={pList} />
        </div>
      ))}
    </>
  );
};

export default BlogPostsTemplate;
