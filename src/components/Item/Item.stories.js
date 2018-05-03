import React from "react";
import { storiesOf } from "@storybook/react";

import Item from './Item.jsx';

const office = {
  "id": 1,
  "name": "Belgrade Office",
  "description": "Itekako Belgrade office address is Terazije 23",
  "latitude": "44.786568",
  "longitude": "20.4489216",
};

const office1 = {
  "id": 1,
  "name": "Belgrade Office",
  "description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
   Donec in est sed neque ullamcorper bibendum venenatis ut sapien.',
  "latitude": "44.786568",
  "longitude": "20.4489216",
  "photo": 'https://cdn.pixabay.com/photo/2017/08/15/03/22/wheat-2642654_960_720.jpg'
};

storiesOf("Item", module)
  .add("with required props", () => <Item office={office} />)
  .add("with photo and long description", () => <Item office={office1} />)
