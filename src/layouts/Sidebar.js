import * as React from "react";
import { makeStyles } from "@mui/styles";

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sidebar}>사이드 메뉴</div>
    </div>
  );
}

const useStyles = makeStyles({
  sidebar: {
    backgroundColor: "#F8F0DF",
    float: "left",
    height: "90vh",
    width: "25vw"
  }
});
