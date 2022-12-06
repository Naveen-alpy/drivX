import axios from "axios";
import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
//import defaultImage from "../../assets/images/default-image.jpg";
import authorIcon from "../../assets/images/author.svg";
import dateIcon from "../../assets/images/icon-calendar.svg";

const PostListing = (props) => {
  function formatDate(newDate) {
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    };
    //const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const d = newDate;
    const year = d.getFullYear();
    const date = d.getDate();
    //const monthIndex = d.getMonth();
    const monthName = months[d.getMonth()];
    //const dayName = days[d.getDay()]; // Thu

    /* const formatted = `${dayName}, ${date} ${monthName} ${year}`; */
    const formatted = `${date} ${monthName} ${year}`;
    return formatted.toString();
  }

  const defaultItems = {
    imgUrl: "",
    postAuthor: "",
    isLoaded: false,
  };
  const [newPostList, setNewPostList] = useState(defaultItems);
  useEffect(() => {
    const { featured_media, author } = props.pList;

    const pulledImage = axios.get(
      `http://localhost/wordpress/wp-json/wp/v2/media/${featured_media}`
    );
    const postedAuthor = axios.get(
      `http://localhost/wordpress/wp-json/wp/v2/users/${author}`
    );
    Promise.all([pulledImage, postedAuthor]).then((res) => {
      setNewPostList({
        imgUrl: res[0].data.source_url,
        postAuthor: res[1].data.name,
        isLoaded: true,
      });
    });
  }, [props]);

  const { title, date, excerpt, slug } = props.pList;
  const { imgUrl, postAuthor } = newPostList;
  return (
    <article className="blog_post_wrapper-listing">
      <figure className="post_thumb vhCenter">
        <img src={imgUrl} alt="" />
      </figure>
      <div className="post_brief">
        <div className="info-wrapper-top vCenter">
          <div className="date vCenter">
            <SVG src={dateIcon} title="Calendar" />
            {formatDate(new Date(date))}
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
