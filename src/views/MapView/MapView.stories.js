import React from "react";
import { storiesOf } from "@storybook/react";

import MapView from './MapView';

const offices = [
  {
    "id": 1,
    "name": "Belgrade Office",
    "description": "Itekako Belgrade office address is Terazije 2",
    "latitude": "44.786568",
    "longitude": "20.4489216",
    "photo": "http://www.geonames.org/flags/x/rs.gif"
  },
  {
    "id": 2,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street \
    Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  }
];

const directionList =  'list';
const directionGrid = 'grid';

storiesOf("MapView", module)
  .add("default", () => <MapView />)
  .add("with offices", () => <MapView offices={offices} />);
