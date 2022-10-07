import axios from "axios";
import { format } from "date-fns";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleBlogPost = () => {
  const [singleBlog, setSingleBlog] = useState();
  let params = useParams();
  useEffect(() => {
    console.log("Single Blog Posts", params.myslug);
    const postLists = axios.get(
      `http://localhost/wordpress/wp-json/wp/v2/posts?slug=${params.myslug}`
    );
    Promise.all([postLists]).then((res) => {
      const [getPostList] = res;
      const { featured_media } = getPostList.data[0];
      console.log("Response of Single Post", getPostList.data[0]);
      const singleImage = axios
        .get(`http://localhost/wordpress/wp-json/wp/v2/media/${featured_media}`)
        .then((resp) => {
          getPostList.data[0].featured_image();
          //setSingleBlog(getPostList.data[0]);
        });
      setSingleBlog(getPostList.data[0]);
    });
  }, [params]);

  const { singImg } = singleBlog;

  return (
    <>
      {singleBlog && (
        <article className="blog_post_wrapper-single">
          <figure className="post_thumb vhCenter">
            <img src={singleBlog.singleImage} alt="" />
            <div className="date"></div>
          </figure>
          <header className="title">{singleBlog.title.rendered}</header>
        </article>
      )}
    </>
  );
};

export default SingleBlogPost;
