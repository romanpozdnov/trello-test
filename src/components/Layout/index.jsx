import React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};

export default Layout;
