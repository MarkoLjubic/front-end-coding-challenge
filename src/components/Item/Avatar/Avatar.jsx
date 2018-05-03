import React from "react";
import PropTypes from "prop-types";

import { avatarSizes } from '../../../utils/constants';
import './Avatar.css';

function Avatar({ size, title, url }) {
  return (
    <div className={`avatar ${size}`}>
      {url
        ? <img alt='avatar' src={url} />
        : <span>{title.trim().substr(0, 1).toUpperCase()}</span>
      }
    </div>
  )
}

Avatar.defaultProps = {
  size: avatarSizes.SMALL,
  title: '',
  url: ''
};

Avatar.propTypes = {
  size: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

export default Avatar;
