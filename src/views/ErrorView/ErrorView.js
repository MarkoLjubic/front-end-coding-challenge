import React from "react";
import PropTypes from "prop-types";

function ErrorView({ errors }) {
  return <div>Internal server error</div>;
}

ErrorView.defaultProps = {
  errors: []
};

ErrorView.propTypes = {
  errors: PropTypes.array
};

export default ErrorView;
