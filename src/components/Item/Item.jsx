import React from "react";
import PropTypes from "prop-types";

import Avatar from './Avatar/Avatar.jsx';
import { officeModel } from '../../utils/models';
import './Item.css';

function Item({ office }) {
  return (
    <div className='item'>
      <Avatar title={office.name} url={office.photo} />
      <div className='item-data'>
        <h3>{office.name}</h3>
        <p>{office.description}</p>
      </div>
    </div>
  );
}

Item.defaultProps = {
  office: {
    description: '',
    name: '',
    photo: ''
  },
};

Item.propTypes = {
  office: officeModel(PropTypes),
};

export default Item;
