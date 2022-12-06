import React from "react";
import ReactOwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import ratingIcon from "../assets/images/rating.svg";

const TestimonialSection = () => {
  let rIcon = <SVG src={ratingIcon} title="" />;
  const testimonialItems = [
    {
      name: "Curabi Euis",
      letter: "c",
      role: "Quisque",
      rating: rIcon,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod vel orci eget vestibulum. Duis tempor vitae nunc id iaculis. Phasellus ut varius ante. Sed tincidunt sed elit a venenatis.",
    },
    {
      name: "Proin Gravida",
      letter: "p",
      role: "Fusce",
      rating: rIcon,
      content:
        "Aenean commodo sapien et massa rhoncus placerat. Nulla eu tortor maximus, fringilla turpis eget, sagittis quam. Suspendisse elementum odio ac accumsan sollicitudin. Aenean commodo pellentesque.",
    },
    {
      name: "Orci Varius",
      letter: "o",
      role: "Donec",
      rating: rIcon,
      content:
        "Quisque pretium purus ipsum, quis luctus tortor malesuada gravida. Fusce gravida dolor quis lectus accumsan cursus. Phasellus ultricies consequat velit, nec consectetur urna. Praesent id egestas odio.",
    },
    {
      name: "Molestias",
      letter: "m",
      role: "Verto",
      rating: rIcon,
      content:
        "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas.",
    },
    {
      name: "Debitis Aut",
      letter: "d",
      role: "Quibusdam",
      rating: rIcon,
      content:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus",
    },
    {
      name: "Culpa Officia",
      letter: "c",
      role: "Deserunt",
      rating: rIcon,
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
    },
  ];
  return (
    <section className="testimonial_wrapper">
      <div className="container">
        <header className="section-title center">
          <h2 className="h1">
            <div className="sub-text light-green">User Reviews</div>
            What Users Say About Us
          </h2>
        </header>
      </div>
      <section className="bottom_container cmn-space-btm">
        <div className="container">
          <div className="bg_gradent_box"></div>
          <div className="testimonial_widget">
            <ReactOwlCarousel
              items={3}
              loop
              center={true}
              margin={30}
              dots={true}
              smartSpeed={800}
              responsive={{ 0: { items: 1 }, 1200: { items: 3 } }}
            >
              {testimonialItems.map((tstItems, index) => (
                <div className="item" key={index}>
                  <article className="test_wrapper">
                    <span className="userAvat vhCenter">{tstItems.letter}</span>
                    <div className="vCenter">
                      <header className="h3">{tstItems.name}</header>
                      <span className="ratings">{tstItems.rating}</span>
                    </div>
                    <h3 className="h4">{tstItems.role}</h3>
                    <blockquote className="tst_content">
                      {tstItems.content}
                    </blockquote>
                  </article>
                </div>
              ))}
            </ReactOwlCarousel>
          </div>
          <nav className="hCenter p-t-20">
            <Link to="" className="project_btns-" title="">
              <span>View More</span>
            </Link>
          </nav>
        </div>
      </section>
    </section>
  );
};

export default TestimonialSection;
