import React from "react";
import PropTypes from "prop-types";

const Input = ({
  handleChange,
  value,
  name,
  type,
  id,
  placeholder,
  label,
}) => {
  return (
    <div className="form_group">
      <label htmlFor="email">{label}</label>
      <input
        onChange={handleChange}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        required
        name={name}
      />
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
