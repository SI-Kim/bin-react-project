import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.sidebar}>
        사이드 메뉴
        <span>
          <Button
            variant="text"
            size="small"
            onClick={() => {
              alert("펼치기");
            }}
          >
            펼치기
          </Button>
        </span>
      </div>
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
