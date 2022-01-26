import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Boards from "./pages/Boards";

import { BOARDS } from "./routers/index";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={BOARDS} element={<Boards />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
