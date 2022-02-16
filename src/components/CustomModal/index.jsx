import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import Container from "@mui/material/Container";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import Portal from "../Portal";

const CustomModal = ({ title, isOpen, onClose, className, children }) => {
  if (!isOpen) return null;

  return (
    <Portal portalName="modal">
      <div className="modalOverlay" />
      <Container
        maxWidth="sm"
        className={classnames("modalContainer", className)}
      >
        <CloseIcon onClick={onClose} className="closeIcon" />
        {title && (
          <Typography
            className="modalTitle"
            variant="button"
            display="block"
            gutterBottom
          >
            {title}
          </Typography>
        )}
        <Divider id="modalDivider" />
        {children}
      </Container>
    </Portal>
  );
};

CustomModal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default CustomModal;
