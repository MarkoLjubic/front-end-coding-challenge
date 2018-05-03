import React from "react";
import { storiesOf } from "@storybook/react";

import Item from './Item.jsx';

const officeWithRequiredProps = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  name: 'Name',
};

const officeWithPhoto = {
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  name: 'Name',
  photo: 'https://cdn.pixabay.com/photo/2017/08/15/03/22/wheat-2642654_960_720.jpg'
};

storiesOf("Item", module)
  .add("with required props", () => <Item office={officeWithRequiredProps} />)
  .add("with photo", () => <Item office={officeWithPhoto} />)
