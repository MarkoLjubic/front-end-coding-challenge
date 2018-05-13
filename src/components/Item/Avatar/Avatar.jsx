import React from "react";
import PropTypes from "prop-types";

import "./Avatar.css";

function Avatar({ title, url }) {
  return (
    <div className={`avatar`}>
      {url ? (
        <img alt="avatar" src={url} />
      ) : (
        <span>
          {title
            .trim()
            .substr(0, 1)
            .toUpperCase()}
        </span>
      )}
    </div>
  );
}

Avatar.defaultProps = {
  title: "",
  url: ""
};

Avatar.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Avatar;
