import React from "react";
import { storiesOf } from "@storybook/react";

import Navbar from "./Navbar.jsx";

const path = "http://link";
const title = "title";

storiesOf("Navbar", module).add("default", () => <Navbar />);
