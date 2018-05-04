import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Item from '../../components/Item/Item.jsx';
import { officesModel } from '../../utils/models';
import './TextView.css';
import Loader from '../../components/Loader/Loader';
import { getOffices } from '../../actions/offices';

class TextView extends Component {
  componentDidMount() {
    this.props.dispatch(getOffices());
  }

  render() {
    return this.props.offices && this.props.offices.length
      ? (<div className={`text-view text-view-${this.props.match.params.direction}`}>
          {this.props.offices.map(office => <Item key={office.id} office={office} />)}
        </div>)
      : <Loader />;
  }
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

const mapStateToProps = store => ({
  offices: store.offices
});

export default connect(mapStateToProps)(TextView);
