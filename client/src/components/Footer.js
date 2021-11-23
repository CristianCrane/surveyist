import React from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Input from "./forms/Input";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="columns">
          <div className="column">
            <InfoArea />
          </div>
          <div className="column">
            <ContactForm />
          </div>
        </div>
        <p className="has-text-centered is-size-6 has-text-grey-dark">
          Website design and development by <a href="#">Cristian Crane</a>.
        </p>
      </div>
    </footer>
  );
}

const InfoArea = () => {
  return (
    <section className="section">
      <h2 className="title has-text-grey-dark is-size-4">About</h2>
      <p className="block has-text-justified">
        Connect with your users and gain valuable feedback with Surveyist. A
        surveys as a service platform, Surveyist lets you create surveys and
        distribute them to your mailing list in just a few clicks. We aggregate
        the feedback so you can track user engagement and gain valuable insight
        allowing you to give your customers exactly what they want.
      </p>
      <div className="p-6">
        <nav className="level">
          <div className="level-item">
            <a className="icon has-text-link">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </div>
          <div className="level-item">
            <a className="icon has-text-info">
              <i className="fab fa-twitter fa-2x fa-info-circle"></i>
            </a>
          </div>
          <div className="level-item">
            <a className="icon has-text-info">
              <i className="fab fa-instagram fa-2x fa-info-circle"></i>
            </a>
          </div>
        </nav>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="section">
      <h2 className="title has-text-grey-dark is-size-4">Contact</h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
        }}
        validationSchema={Yup.object({
          fullName: Yup.string().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        <Form>
          <Input
            label="Full Name"
            name="fullName"
            type="text"
            leftIcon={<i className="fas fa-user"></i>}
            size="small"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            leftIcon={<i className="fas fa-envelope"></i>}
            size="small"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </section>
  );
};
