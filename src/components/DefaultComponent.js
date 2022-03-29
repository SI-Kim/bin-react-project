import React from "react";
import { makeStyles } from "@mui/styles";

export default function DefaultComponent() {

  const classes = useStyles();
  
  return (
    <div className={classes.mainFirst}>대시보드</div>
      <div className={classes.mainFirst}>방문자 수</div>
      <div className={classes.mainFirst}>최근 게시물</div>
  );
}

const useStyles = makeStyles({
  main: {
    height: "inherit",
    width: "100%",
    float: "right"
  },
  mainFirst: {
    height: "50%",
    width: "49%",
    backgroundColor: "#FEFBF3",
    border: "1px solid",
    display: "inline-block"
  }
});