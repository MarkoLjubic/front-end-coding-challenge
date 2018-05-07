import React from "react";
import PropTypes from "prop-types";

import Avatar from './Avatar/Avatar.jsx';
import { officeModel } from '../../utils/models';
import './Item.css';

function Item({ office }) {

  const officeDescription = office.description.length > 90
    ? office.description.slice(0, 90).concat('...')
    : office.description;
  return (
    <div className="item" key={office.id}>
      <Avatar title={office.name} url={office.photo} />
      <div className="item-data">
        <h3>{office.name}</h3>
        <p>{officeDescription}</p>
      </div>
    </div>
  );
}

Item.defaultProps = {
  office: {
    description: '',
    id: -1,
    name: '',
    photo: ''
  },
};

Item.propTypes = {
  office: officeModel(PropTypes)
};

export default Item;
