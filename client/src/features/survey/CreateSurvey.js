import classNames from "classnames";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Input from "../../components/forms/Input";
import TextArea from "../../components/forms/TextArea";
import { createSurvey, selectStatus } from "../survey/surveySlice";
import { useNavigate } from "react-router-dom";

export default function CreateSurvey() {
  const [confirmValues, setConfirmValues] = useState(null);
  const dispatch = useDispatch();
  const surveyLoading = useSelector(selectStatus);
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(createSurvey(confirmValues)).then((res) => {
      if (res.type === "surveys/create/fulfilled") {
        navigate("/surveys");
      }
    });
  };

  return (
    <div className="container">
      <section
        className={classNames({
          section: true,
          "is-hidden": confirmValues,
        })}
      >
        <h1 className="title">Create Survey</h1>
        <Formik
          initialValues={{
            title: "",
            subject: "",
            body: "",
            recipients: "",
          }}
          validationSchema={Yup.object({
            title: Yup.string().required("Required"),
            subject: Yup.string().required("Required"),
            body: Yup.string().required("Required"),
            recipients: Yup.array()
              .transform(function (value, originalValue) {
                if (this.isType(value) && value !== null) {
                  return value;
                }
                return originalValue ? originalValue.split(/[\s,]+/) : [];
              })
              .of(
                Yup.string().email(
                  ({ value }) => `${value} is not a valid email`
                )
              )
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            values.recipients = values.recipients
              .split(",")
              .map((email) => email.trim())
              .join(",");
            setConfirmValues(values);
            setSubmitting(false);
          }}
        >
          <Form>
            <Input label="Title" name="title" type="text" />
            <Input label="Subject" name="subject" type="text" />
            <TextArea label="Body" name="body" />
            <Input label="Recipients" name="recipients" type="text" />
            <button className="button is-link" type="submit">
              Next
            </button>
          </Form>
        </Formik>
      </section>

      <section
        className={classNames({
          section: true,
          "is-hidden": !confirmValues,
        })}
      >
        <h1 className="title">Review Survey</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>Title</th>
              <td>{confirmValues && confirmValues.title}</td>
            </tr>
            <tr>
              <th>Subject</th>
              <td>{confirmValues && confirmValues.subject}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{confirmValues && confirmValues.body}</td>
            </tr>
            <tr>
              <th>Recipients</th>
              <td>{confirmValues && confirmValues.recipients}</td>
            </tr>
          </tbody>
        </table>
        <button className="button mr-2" onClick={() => setConfirmValues(null)}>
          Back
        </button>
        <button
          className={classNames({
            button: true,
            "is-link": true,
            "is-loading": surveyLoading === "creatingSurvey",
          })}
          onClick={handleSubmit}
        >
          Send Survey
        </button>
      </section>
    </div>
  );
}
