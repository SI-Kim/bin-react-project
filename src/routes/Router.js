import React from "react";
import { HomeContainer } from "../containers/index";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
