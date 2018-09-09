import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ErrorView from "../views/ErrorView/ErrorView";

const withErrorCheck = Component => {
  function ErrorCheck({ errors, ...props }) {
    return errors.length ? (
      <ErrorView errors={errors} />
    ) : (
      <Component {...props} />
    );
  }

  ErrorCheck.defaultProps = {
    errors: []
  };

  ErrorCheck.propTypes = {
    errors: PropTypes.array
  };

  const mapStateToProps = state => ({
    errors: state.errors
  });

  return connect(mapStateToProps)(ErrorCheck);
};

export default withErrorCheck;
