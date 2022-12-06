import axios from "axios";
import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import authorIcon from "../../assets/images/author.svg";
import dateIcon from "../../assets/images/icon-calendar.svg";
import moment from "moment";

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
      const { featured_media, author, id } = getPostList.data[0];
      console.log("Response of Single Post", getPostList.data[0]);
      // Featured Image
      const pulledImage = axios.get(
        `http://localhost/wordpress/wp-json/wp/v2/media/${featured_media}`
      );
      // Author Name
      const authorName = axios.get(
        `http://localhost/wordpress/wp-json/wp/v2/users/${author}`
      );
      // Category
      const postCategory = axios.get(
        `http://localhost/wordpress/wp-json/wp/v2/categories?post=${id}`
      );
      Promise.all([pulledImage, authorName, postCategory]).then((res) => {
        const arrCategory = res[2].data.map((cats) => {
          const { id: catId, name: catName } = cats;
          return { catId, catName };
        });
        getPostList.data[0] = {
          ...getPostList.data[0],
          featured_media: res[0].data.source_url,
          author: res[1].data.name,
          categories: arrCategory,
        };
        setSingleBlog(getPostList.data[0]);
      });
    });
  }, [params]);

  //const { singImg } = singleBlog;

  return (
    <>
      {singleBlog && (
        <div className="tw-col-12">
          <article className="blog_post_wrapper-single">
            <header className="post_title">
              <h2>{singleBlog.title.rendered}</h2>
            </header>
            <figure className="post_thumb vhCenter">
              <img src={singleBlog.featured_media} alt="" />
              <div className="date"></div>
            </figure>
            <div className="post_brief">
              <div className="info-wrapper-top vCenter">
                <div className="date vCenter">
                  <SVG src={dateIcon} title="Calendar" />
                  {moment(singleBlog.date).format("D MMM YYYY")}
                </div>
                <Link to="" className="vCenter author m-l-auto">
                  <i>
                    <SVG src={authorIcon} title="User Avatar" />
                  </i>
                  {singleBlog.author}
                </Link>
              </div>
            </div>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: singleBlog.content.rendered }}
            ></div>
            {/* <div className="info-wrapper-bottom">Tags: {singleBlog.tags}</div>
          {singleBlog.categories.map((catLoop, i) => {
            return (
              <span className="cats" key={catLoop.catId}>
                {singleBlog.categories.length - 1 === i
                  ? catLoop.catName
                  : `${catLoop.catName},`}
              </span>
            );
          })} */}
          </article>
        </div>
      )}
    </>
  );
};

export default SingleBlogPost;
