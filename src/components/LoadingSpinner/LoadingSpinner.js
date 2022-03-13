import React from "react";
import PropTypes from "prop-types";

import "./LoadingSpinner.css";

export const LoadingSpinner = ({ asOverlay }) => {
  return (
    <div className={`${asOverlay ? "loading-spinner__overlay" : "center"}`}>
      <div className="lds-dual-ring" />
    </div>
  );
};

LoadingSpinner.propTypes = {
  asOverlay: PropTypes.bool,
};

LoadingSpinner.defaultProps = {
  asOverlay: false,
};
