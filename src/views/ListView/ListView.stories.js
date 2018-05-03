import React from "react";
import { storiesOf } from "@storybook/react";

import ListView from './ListView';

const offices = [
  {
    "id": 1,
    "name": "Belgrade Office",
    "description": "Itekako Belgrade office address is Terazije 23",
    "latitude": "44.786568",
    "longitude": "20.4489216",
    "photo": "http://www.geonames.org/flags/x/rs.gif"
  },
  {
    "id": 2,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  }
];

storiesOf("ListView", module)
  .add("default", () => <ListView />)
  .add("with offices", () => <ListView offices={offices} />);
