import React from "react";
import { makeStyles } from "@mui/styles";

import { Header, Footer } from "../layouts/index";

const HomeContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header />

      <Footer />
    </div>
  );
};

const useStyles = makeStyles({
  main: {
    height: "inherit",
    width: "100%",
    float: "right"
  }
});

export default HomeContainer;
