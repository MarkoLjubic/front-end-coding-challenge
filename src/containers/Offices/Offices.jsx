import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter, Route, Redirect, Switch } from 'react-router';

import { getOffices } from '../../actions/offices';
import { officesModel } from '../../utils/models';
import TextView from '../../views/TextView/TextView';
import MapView from '../../views/MapView/MapView';
import Loader from '../../components/Loader/Loader';
import { linkShema } from '../../utils/config';
import './Offices.css';

class Offices extends Component {
  constructor() {
    super();

    this.renderRouter = this.renderRouter.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(getOffices());
  }

  renderRouter() {
    return (
      <Switch>
        <Redirect exact from='/' to='/list' />
        <Route path={linkShema.Map.path} render={() => <MapView offices={this.props.offices} />}/>
        <Route path={linkShema.Grid.path} render={() => <TextView offices={this.props.offices} direction={linkShema.Grid.direction} />}/>
        <Route path={linkShema.List.path} render={() => <TextView offices={this.props.offices} direction={linkShema.List.direction} />}/>
      </Switch>
    )
  }

  render() {
    return (
      <div className='offices'>
        {this.props.offices
          ? this.renderRouter()
          : <Loader />
        }
      </div>
    );
  }
}

TextView.defaultProps = {
  offices: []
};

TextView.propTypes = {
  offices: officesModel(PropTypes)
};

const mapStateToProps = store => ({
  offices: store.offices
});

export default withRouter(connect(mapStateToProps)(Offices));
