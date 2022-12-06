import React, { useEffect } from "react";
import ReactOwlCarousel from "react-owl-carousel";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// Images & Icons
import slider_1 from "../../assets/images/ap-1.png";
import slider_2 from "../../assets/images/ap-2.png";
import slider_3 from "../../assets/images/ap-3.png";
import slider_4 from "../../assets/images/ap-4.png";
import slider_5 from "../../assets/images/ap-5.png";
import slider_6 from "../../assets/images/ap-6.png";
import slider_7 from "../../assets/images/ap-7.png";
import slider_8 from "../../assets/images/ap-8.png";
import slider_9 from "../../assets/images/ap-9.png";

const SectionFour = () => {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 1199;
        return window.innerWidth < maxWidth;
      },
      offset: 200,
      duration: 1000,
      easing: "ease",
      once: false,
    });
  }, []);
  const slider_content = [
    {
      title: "Image 1",
      imgSrc: slider_1,
    },
    {
      title: "Image 2",
      imgSrc: slider_2,
    },
    {
      title: "Image 3",
      imgSrc: slider_3,
    },
    {
      title: "Image 4",
      imgSrc: slider_4,
    },
    {
      title: "Image 5",
      imgSrc: slider_5,
    },
    {
      title: "Image 6",
      imgSrc: slider_6,
    },
    {
      title: "Image 7",
      imgSrc: slider_7,
    },
    {
      title: "Image 8",
      imgSrc: slider_8,
    },
    {
      title: "Image 9",
      imgSrc: slider_9,
    },
  ];
  return (
    <section className="inside_app">
      <div className="container">
        <header className="section-title center">
          <h2 className="h1" data-aos="zoom-in-up">
            A Look Inside the{" "}
            <strong>
              Driver<span className="light-green">X</span>
            </strong>{" "}
            App
          </h2>
        </header>
        <section
          className="inside_ap_slider"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <ReactOwlCarousel
            loop
            margin={0}
            autoplay="false"
            items={5}
            responsive={{
              0: { items: 1 },
              575: { items: 2 },
              768: { items: 3 },
              1200: { items: 5 },
            }}
          >
            {slider_content.map((slider_item, index) => (
              <div key={index}>
                <figure className="slider_wrapper vhCenter">
                  <img src={slider_item.imgSrc} alt={slider_item.title} />
                </figure>
              </div>
            ))}
          </ReactOwlCarousel>
        </section>
      </div>
    </section>
  );
};

export default SectionFour;
