import React from "react";
import { storiesOf } from "@storybook/react";
import { HashRouter, MemoryRouter } from "react-router-dom";

import Navbar from "./Navbar.jsx";

const path = "http://link";
const title = "title";

storiesOf("Navbar", module).add("default", () => (
  <MemoryRouter>
    <HashRouter>
      <Navbar path={path} title={title} />
    </HashRouter>
  </MemoryRouter>
));
