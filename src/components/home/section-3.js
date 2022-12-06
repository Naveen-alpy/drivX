import React, { useEffect } from "react";
import SVG from "react-inlinesvg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// Images and Icons
import image_1 from "../../assets/images/become-instructor.png";
import image_2 from "../../assets/images/home-become-instructor-img-1.jpg";
import icon_1 from "../../assets/images/become-instructor-icon-1.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const SectionThree = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      yourName: "",
      yourEmail: "",
      yourPhone: "",
    },
    validationSchema: Yup.object({
      yourName: Yup.string().required("Please mention your Name"),
      yourEmail: Yup.string()
        .email("Invalide email address provided")
        .required("Please enter your Email ID"),
      yourPhone: Yup.string().required("Please fill your Contact Number"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/thank-you");
    },
  });
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
  return (
    <section className="become-instructor cmn-space-top">
      <div className="container">
        <div className="tw-row">
          <div className="tw-col-xl-40">
            <header className="section-title">
              <h2 className="h1" data-aos="fade-right">
                <span className="ipad-clear">Its So Easy Becoming an </span>
                <strong className="light-green">Instructor </strong>With{" "}
                <strong>
                  Driver<span className="light-green">X</span>
                </strong>
              </h2>
            </header>
            <p data-aos="fade-right" data-aos-delay="400">
              <strong>Signup online</strong> today or enter your contact
              information and we will get in touch to get you started.
            </p>
            <div
              className="form-wrapper"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              <form onSubmit={formik.handleSubmit}>
                <div className="tw-row">
                  <div className="tw-col-md-6">
                    <div className="input-holder">
                      <input
                        type="text"
                        name="yourName"
                        id="yourName"
                        placeholder="Your Name"
                        className="form-elements"
                        {...formik.getFieldProps("yourName")}
                      />
                      {formik.touched.yourName && formik.errors.yourName ? (
                        <span className="error">{formik.errors.yourName}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="tw-col-md-6">
                    <div className="input-holder">
                      <input
                        type="email"
                        name="yourEmail"
                        id="yourEmail"
                        placeholder="Your Email"
                        className="form-elements"
                        {...formik.getFieldProps("yourEmail")}
                      />
                      {formik.touched.yourEmail && formik.errors.yourEmail ? (
                        <span className="error">{formik.errors.yourEmail}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="tw-col-">
                    <div className="input-holder">
                      <input
                        type="tel"
                        name="yourPhone"
                        id="yourPhone"
                        placeholder="Your Name"
                        className="form-elements"
                        {...formik.getFieldProps("yourPhone")}
                      />
                      {formik.touched.yourPhone && formik.errors.yourPhone ? (
                        <span className="error">{formik.errors.yourPhone}</span>
                      ) : null}
                    </div>
                  </div>
                  <div className="tw-col-">
                    <nav className="hRight">
                      <button type="submit" className="project_btns-">
                        Get Started
                      </button>
                    </nav>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            className="tw-col-xl-60"
            data-aos="fade-left"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
            <section className="img_icon_group">
              <div className="hm_inst_large_img">
                <img src={image_1} alt="Instructor" />
              </div>
              <div className="hm_inst_slider_container">
                <div className="slider_wrapper">
                  <figure>
                    <img src={image_2} alt="" />
                  </figure>
                </div>
                <span className="vhCenter svg-with-roundbox">
                  <SVG src={icon_1} alt="" />
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SectionThree;
