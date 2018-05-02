import React from "react";
import { storiesOf } from "@storybook/react";

import NavbarItem from "./NavbarItem.jsx";

const path = "http://link";
const title = "title";

storiesOf("NavbarItem", module)
  .add("default", () => <NavbarItem path={path} title={title} />)
  .add("when isActive is true", () => (
    <NavbarItem isActive path={path} title={title} />
  ));
