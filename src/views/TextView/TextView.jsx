import React from "react";
import PropTypes from "prop-types";

import Item from '../../components/Item/Item.jsx';
import { officesModel } from '../../utils/models';
import './TextView.css';

function TextView({ offices, match: { params: { direction } } }) {
  return offices && offices.length
    ? (<div className={`text-view text-view-${direction}`}>
        {offices.map(office => <Item office={office} />)}
      </div>)
    : null;
}

TextView.defaultProps = {
  match: {
    params: {
      direction: 'list'
    }
  },
  offices: []
};

TextView.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      direction: PropTypes.string
    })
  }),
  offices: officesModel(PropTypes)
};

export default TextView;
