import React from "react";
import { useField } from "formik";
import classnames from "classnames";
import PropTypes from "prop-types";

export default function Input({ label, leftIcon, rightIcon, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="field">
      {label && <label className="label">{label}</label>}
      <div
        className={classnames({
          control: true,
          "has-icons-left": leftIcon,
          "has-icons-right": rightIcon,
        })}
      >
        <input
          className={classnames({
            input: true,
            "is-danger": meta.touched && meta.error,
          })}
          {...field}
          {...props}
        />
        {leftIcon && <span className="icon is-small is-left">{leftIcon}</span>}
        {rightIcon && (
          <span className="icon is-small is-right">{rightIcon}</span>
        )}
      </div>
      {meta.touched && meta.error && (
        <p className="help is-danger">{meta.error}</p>
      )}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  leftIcon: PropTypes.node, // example: <i className="fas fa-user"></i>
  rightIcon: PropTypes.node, // example: <i className="fas fa-user"></i>
};
