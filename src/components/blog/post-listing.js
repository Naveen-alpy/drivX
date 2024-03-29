import axios from "axios";
import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
//import defaultImage from "../../assets/images/default-image.jpg";
import authorIcon from "../../assets/images/author.svg";
import dateIcon from "../../assets/images/icon-calendar.svg";
import moment from "moment";

const PostListing = (props) => {
  const defaultItems = {
    imgUrl: "",
    postAuthor: "",
    isLoaded: false,
  };
  const [newPostList, setNewPostList] = useState(defaultItems);
  useEffect(() => {
    const { featured_media, author } = props.pList;

    const pulledImage = axios.get(
      `https://thedriverx.com/blog/wp-json/wp/v2/media/${featured_media}`
    );
    const postedAuthor = axios.get(
      `https://thedriverx.com/blog/wp-json/wp/v2/users/${author}`
    );
    Promise.all([pulledImage, postedAuthor]).then((res) => {
      setNewPostList({
        imgUrl: res[0].data.source_url,
        postAuthor: res[1].data.name,
        isLoaded: true,
      });
    });
  }, [props]);

  const { title, date, excerpt, slug, _embedded } = props.pList;
  const { imgUrl, postAuthor } = newPostList;
  return (
    <article className="blog_post_wrapper-listing">
      <figure className="post_thumb vhCenter">
        <img src={_embedded["wp:featuredmedia"][0].source_url} alt="" />
      </figure>
      <div className="post_brief">
        <div className="info-wrapper-top vCenter">
          <div className="date vCenter">
            <SVG src={dateIcon} title="Calendar" />
            {moment(date).format("D MMMYYYY")}
          </div>
          <Link to="" className="vCenter author m-l-auto">
            <i>
              <SVG src={authorIcon} title="User Avatar" />
            </i>
            {postAuthor}
          </Link>
        </div>
        <h2>
          <Link
            to={`/blogs/${slug}`}
            title={title.rendered}
            className="post_title"
          >
            {title.rendered}
          </Link>
        </h2>
        <div
          className="post_excerpt"
          dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
        ></div>
        <Link to={`/blogs/${slug}`} title="Read More" className="read_more">
          Read More
        </Link>
      </div>
    </article>
  );
};

export default PostListing;
