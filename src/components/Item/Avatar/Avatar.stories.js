import React from "react";
import { storiesOf } from "@storybook/react";

import Avatar from './Avatar.jsx';
import { avatarSizes } from '../../../utils/constants';

const title = 'title';
const url = 'https://cdn.pixabay.com/photo/2017/08/15/03/22/wheat-2642654_960_720.jpg';

storiesOf("Avatar", module)
  .add("default", () => <Avatar title={title} />)
  .add("with url and size", () => <Avatar size={avatarSizes.BIG} title={title} url={url} />);
