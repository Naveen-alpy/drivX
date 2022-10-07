import axios from "axios";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../assets/images/default-image.jpg";

const PostListing = (props) => {
  const defaultItems = {
    imgUrl: "",
    isLoaded: false,
  };
  const [newPostList, setNewPostList] = useState(defaultItems);
  useEffect(() => {
    const { featured_media } = props.pList;

    const pulledImage = axios.get(
      `http://localhost/wordpress/wp-json/wp/v2/media/${featured_media}`
    );
    Promise.all([pulledImage]).then((res) => {
      setNewPostList({
        imgUrl: res[0].data.source_url,
        isLoaded: true,
      });
    });
  }, []);

  const { title, id, date, excerpt, slug } = props.pList;
  const { imgUrl } = newPostList;
  return (
    <article className="blog_post_wrapper">
      <figure className="post_thumb vhCenter">
        <img src={imgUrl} alt="" />
        <div className="date">{format(new Date(date), "d/MM/yyyy")}</div>
      </figure>
      <h2>{title.rendered}</h2>
      <small>{id}</small>
      <div
        className="post_excerpt"
        dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
      ></div>
      <Link to={`/blogs/${slug}`}>Read More</Link>
    </article>
  );
};

export default PostListing;
