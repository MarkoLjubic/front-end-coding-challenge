import React from "react";
import PropTypes from "prop-types";

import Avatar from './Avatar/Avatar.jsx';
import { officeModel } from '../../utils/models';
import './Item.css';

function Item({ direction, office }) {

  const maxLength = direction === 'list' ? 90 : 120;
  const officeDescription = office.description.length > maxLength
    ? office.description.slice(0, maxLength).concat('...')
    : office.description;
  return (
    <div className={`item ${direction}-item`} key={office.id}>
      <Avatar title={office.name} url={office.photo} />
      <div className="item-data">
        <h3>{office.name}</h3>
        <p>{officeDescription}</p>
      </div>
    </div>
  );
}

Item.defaultProps = {
  direction: 'list',
  office: {
    description: '',
    id: -1,
    name: '',
    photo: ''
  },
};

Item.propTypes = {
  direction: PropTypes.string,
  office: officeModel(PropTypes)
};

export default Item;
