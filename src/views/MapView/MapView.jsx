import React, { Component } from "react";
import { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";
import { compose, withProps } from "recompose";
import PropTypes from "prop-types";

import { googleMapURL } from "../../utils/config";
import { officesModel } from "../../utils/models";
import MapMarker from "./MapMarker/MapMarker";

class MapView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: -1
    };

    this.showInfo = this.showInfo.bind(this);
    this.hideInfo = this.hideInfo.bind(this);
  }

  showInfo(id) {
    this.setState({
      isOpen: id
    });
  }

  hideInfo() {
    this.setState({
      isOpen: -1
    });
  }

  render() {
    return this.props.offices && this.props.offices.length ? (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 33.4, lng: 18.2 }}
        onClick={this.hideInfo}
      >
        {this.props.offices.map(office => (
          <MapMarker
            handleOnClick={this.showInfo}
            isOpen={office.id === this.state.isOpen}
            key={office.id}
            office={office}
          />
        ))}
      </GoogleMap>
    ) : null;
  }
}

MapView.defaultProps = {
  offices: []
};

MapView.propTypes = {
  offices: officesModel(PropTypes)
};

export default compose(
  withProps({
    googleMapURL,
    loadingElement: <div style={{ height: `600px` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(MapView);
