import { useField } from "formik";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export default function TextArea({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="field">
      {label && (
        <label htmlFor={props.name || props.id} className="label">
          {label}
        </label>
      )}
      <div className="control">
        <textarea
          className={classNames({
            textarea: true,
            "is-danger": meta.touched && meta.error,
          })}
          {...field}
          {...props}
        ></textarea>
      </div>
      {meta.touched && meta.error && (
        <p className="help is-danger">{meta.error}</p>
      )}
    </div>
  );
}

TextArea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
