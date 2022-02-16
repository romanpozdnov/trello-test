import React from "react";
import PropTypes from "prop-types";

import TextField from "@mui/material/TextField";

const CustomInput = ({
  id,
  name,
  label,
  value,
  onChange,
  className,
  errorMessage,
}) => {
  return (
    <TextField
      id={id}
      name={name}
      label={label}
      onChange={onChange}
      className={className}
      value={value}
      error={!!errorMessage}
      helperText={errorMessage}
      fullWidth
    />
  );
};

CustomInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default CustomInput;
