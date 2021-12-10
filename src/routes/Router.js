import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeContainer } from "../containers";
import { makeStyles } from "@mui/styles";

const Router = () => {
  const classes = useStyles();
  return (
    <div className={classes.routes}>
      <Routes>
        <Route path="/" element={<HomeContainer />} />
      </Routes>
    </div>
  );
};

const useStyles = makeStyles({
  routes: {
    height: "100%",
    width: "100%"
  }
});

export default Router;
