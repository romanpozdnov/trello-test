import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import styles from "./index.module.scss";

const CreateNewBoardButton = ({ onClick = () => {} }) => {
  return (
    <Box
      component="span"
      className={classnames("boardCard", styles.boxWrapper)}
      onClick={onClick}
    >
      <Button>Create new board</Button>
    </Box>
  );
};

CreateNewBoardButton.propTypes = {
  onClick: PropTypes.func,
};

export default CreateNewBoardButton;
