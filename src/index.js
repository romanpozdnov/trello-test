import React from "react";
import ReactDOM from "react-dom";

import { StylesProvider } from "@mui/styles";

import Routers from "./Routers";

import "./index.css";

ReactDOM.render(
  <StylesProvider injectFirst>
    <Routers />
  </StylesProvider>,
  document.getElementById("root")
);
