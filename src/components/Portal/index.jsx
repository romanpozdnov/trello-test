import PropTypes from "prop-types";
import reactDom from "react-dom";

const Portal = ({ portalName, children }) =>
  reactDom.createPortal(children, document.getElementById(portalName));

Portal.propTypes = {
  portalName: PropTypes.string,
  children: PropTypes.any,
};

export default Portal;
