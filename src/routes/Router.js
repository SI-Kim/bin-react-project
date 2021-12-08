import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeContainer } from "../containers";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" component={HomeContainer} />
      </Routes>
    </div>
  );
};

export default Router;
