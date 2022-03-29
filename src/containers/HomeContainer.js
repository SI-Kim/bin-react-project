import React from "react";
import { makeStyles } from "@mui/styles";
import { DefaultComponent } from "../components/index";
import { Header, Footer } from "../layouts/index";

const HomeContainer = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header />
      <DefaultComponent />
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
