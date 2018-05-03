import React from "react";
import PropTypes from "prop-types";

import Item from '../../components/Item/Item.jsx';
import { officesModel } from '../../utils/models';
import './TextView.css';

function TextView({ offices, direction }) {
  return offices
    ? (<div className={`text-view ${direction}`}>
        {offices.map(office => <Item office={office} />)}
      </div>)
    : null;
}

TextView.defaultProps = {
  offices: []
};

TextView.propTypes = {
  offices: officesModel(PropTypes)
};

export default TextView;
