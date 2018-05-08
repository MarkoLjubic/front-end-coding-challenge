import React, { Component } from 'react';
import {
  Marker,
  InfoWindow
} from 'react-google-maps';
import PropTypes from 'prop-types';

import { officeModel } from '../../../utils/models';
import './MapMarker.css';

class MapMarker extends Component {
  constructor() {
    super();

    this.handleOnClick = this.handleOnClick.bind(this);
    this.renderInfoWindow = this.renderInfoWindow.bind(this);
  }

  handleOnClick() {
    this.props.handleOnClick(this.props.office.id);
  }

  renderInfoWindow() {
    return (
      <InfoWindow>
        <div>
          <div className='marker-header'>
            {this.props.office.name}
          </div>
          <div className='marker-description'>
            {this.props.office.description.length > 60
              ? <div>{this.props.office.description.slice(0, 60)}...</div>
              : this.props.office.description
            }
          </div>
        </div>
      </InfoWindow>
    )
  }

  render() {
    return (
      <Marker
        position={{
          lat: parseFloat(this.props.office.latitude),
          lng: parseFloat(this.props.office.longitude),
        }}
        onClick={this.handleOnClick}
      >
        {this.props.isOpen && this.renderInfoWindow()}
      </Marker>
    );
  }
}

MapMarker.defaultProps = {
  handleOnClick: () => {},
  isOpen: false,
  office: {}
};

MapMarker.propTypes = {
  handleOnClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  office: officeModel(PropTypes)
};

export default MapMarker;
