import React from "react";
import { storiesOf } from "@storybook/react";

import TextView from './TextView';

const offices = [
  {
    "id": 1,
    "name": "Belgrade Office",
    "description": "Itekako Belgrade office address is Terazije 2 wefger ge er hae hsg sg r gsdt hsts thsr hah taeh ra sth3",
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
  },
  {
    "id": 3,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  },
  {
    "id": 4,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  },
  {
    "id": 5,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  },
  {
    "id": 6,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  },
  {
    "id": 7,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  },
  {
    "id": 8,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  },
  {
    "id": 9,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  },
  {
    "id": 10,
    "name": "Paris Office",
    "description": "Itekako Paris office address is Main street",
    "latitude": "48.856614",
    "longitude": "2.3522219",
    "photo": null
  }
];

storiesOf("TextView", module)
  .add("default", () => <TextView />)
  .add("with list direction", () => <TextView direction='list' offices={offices} />)
  .add("with grid direction", () => <TextView direction='grid' offices={offices} />);
