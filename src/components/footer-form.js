import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const FooterForm = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      comments: "",
    },
    validationSchema: Yup.object({
      yourName: Yup.string().required("Enter Your Name"),
      yourEmail: Yup.string()
        .email("Invalid Email address provided")
        .required("Enter your E-mail ID"),
      yourPhone: Yup.string().required("Enter Your Phone Number"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      navigate("/thank-you");
    },
  });
  return (
    <section className="cmn-space footer_form">
      <div className="container">
        <header className="section-title center">
          <h2 className="h1">
            <span className="light-green">Request </span>More Info
          </h2>
        </header>
        <div className="form-wrapper">
          <form onSubmit={formik.handleSubmit}>
            <div className="tw-row">
              <div className="tw-col-md-4">
                <div className="input-holder">
                  <input
                    type="text"
                    name="yourName"
                    id="yourName"
                    placeholder="Name*"
                    className="form-elements"
                    {...formik.getFieldProps("yourName")}
                  />
                  {formik.touched.yourName && formik.errors.yourName ? (
                    <span className="error">{formik.errors.yourName}</span>
                  ) : null}
                </div>
              </div>
              <div className="tw-col-md-4">
                <div className="input-holder">
                  <input
                    type="email"
                    name="yourEmail"
                    id="yourEmail"
                    placeholder="Email*"
                    className="form-elements"
                    {...formik.getFieldProps("yourEmail")}
                  />
                  {formik.touched.yourEmail && formik.errors.yourEmail ? (
                    <span className="error">{formik.errors.yourEmail}</span>
                  ) : null}
                </div>
              </div>
              <div className="tw-col-md-4">
                <div className="input-holder">
                  <input
                    type="tel"
                    name="yourPhone"
                    id="yourPhone"
                    placeholder="Phone*"
                    className="form-elements"
                    {...formik.getFieldProps("yourPhone")}
                  />
                  {formik.touched.yourPhone && formik.errors.yourPhone ? (
                    <span className="error">{formik.errors.yourPhone}</span>
                  ) : null}
                </div>
              </div>
              <div className="tw-col-md-8 tw-col-xl-9">
                <div className="input-holder">
                  <textarea
                    id="comments"
                    placeholder="Questions/Comments"
                    onChange={formik.handleChange}
                    value={formik.values.comments}
                  ></textarea>
                </div>
              </div>
              <div className="tw-col-md-4 tw-col-xl-3">
                <nav className="hRight">
                  <button type="submit" className="project_btns-">
                    Submit
                  </button>
                </nav>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FooterForm;
