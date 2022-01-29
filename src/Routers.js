import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import Boards from "./pages/Boards";

import { BOARDS } from "./routers/index";

const Routers = () => {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={BOARDS} element={<Boards />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
