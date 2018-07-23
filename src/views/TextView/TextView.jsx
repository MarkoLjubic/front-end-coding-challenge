import React from "react";
import PropTypes from "prop-types";

import Item from '../../components/Item/Item.jsx';
import { officesModel } from '../../utils/models';
import './TextView.css';

function TextView({ direction, offices }) {
  return offices && offices.length
    ? (<div className={`text-view text-view-${direction}`}>
        {offices.map(office => <Item direction={direction} key={office.id} office={office} />)}
      </div>)
    : null;
}

TextView.defaultProps = {
  direction: 'list',
  offices: []
};

TextView.propTypes = {
  direction: PropTypes.string,
  offices: officesModel(PropTypes)
};


export default TextView;
