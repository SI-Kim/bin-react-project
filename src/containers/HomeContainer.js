import React from "react";
import { makeStyles } from "@mui/styles";

const HomeContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes.mainFirst}>관리자화면</div>
      <div className={classes.mainSecond}>buttons</div>
    </div>
  );
};

const useStyles = makeStyles({
  main: {
    height: "inherit",
    width: "100%"
  },
  mainFirst: {
    height: "80%",
    width: "100%",
    backgroundColor: "#FEFBF3"
  },
  mainSecond: {
    height: "50%",
    width: "100%",
    backgroundColor: "#F8F0DF"
  }
});

export default HomeContainer;
