import React from "react";
import { storiesOf } from "@storybook/react";
import { HashRouter, MemoryRouter } from 'react-router-dom';

import NavbarItem from "./NavbarItem.jsx";

const path = "/list";
const title = "title";

storiesOf("NavbarItem", module)
  .add("default", () =>
    (<MemoryRouter>
      <HashRouter>
        <NavbarItem path={path} title={title} />
      </HashRouter>
    </MemoryRouter>)
  );
