import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Boards from "./pages/Boards";

import { BOARDS } from "./routers/index";

import "./styles/index.scss";

const Routers = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path={BOARDS} element={<Boards />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default Routers;
