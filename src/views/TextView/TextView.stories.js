import React from "react";
import { storiesOf } from "@storybook/react";

import TextView from "./TextView";

const offices = [
  {
    id: 1,
    name: "Belgrade Office",
    description: "Itekako Belgrade office address is Terazije 2",
    latitude: "44.786568",
    longitude: "20.4489216",
    photo: "http://www.geonames.org/flags/x/rs.gif"
  },
  {
    id: 2,
    name: "Paris Office",
    description: "Itekako Paris office address is Main street",
    latitude: "48.856614",
    longitude: "2.3522219",
    photo: null
  }
];

const directionList = "list";
const directionGrid = "grid";

storiesOf("TextView", module)
  .add("default", () => <TextView />)
  .add("with offices", () => <TextView offices={offices} />)
  .add("with list direction", () => (
    <TextView direction={directionList} offices={offices} />
  ))
  .add("with grid direction", () => (
    <TextView direction={directionGrid} offices={offices} />
  ));
