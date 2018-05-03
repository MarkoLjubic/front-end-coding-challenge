import React from "react";
import PropTypes from "prop-types";

import Item from '../../components/Item/Item.jsx';
import { officesModel } from '../../utils/models';
import './ListView.css';

function ListView({ offices }) {
  return offices
    ? (<div className="list-view">
        {offices.map(office => <Item office={office} />)}
      </div>)
    : null;
}

ListView.defaultProps = {
  offices: []
};

ListView.PropTypes = {
  offices: officesModel(PropTypes)
};

export default ListView;
