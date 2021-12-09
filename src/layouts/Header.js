import * as React from "react";
import { makeStyles } from "@mui/styles";

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <a href="/">메뉴 이름</a>
        <nav style={{ float: "right", marginRight: "15px" }}>
          <a href="#" style={{ margin: "10px" }}>
            사용자
          </a>
          <a href="#">로그아웃</a>
        </nav>
      </div>
    </header>
  );
};

const useStyles = makeStyles({
  header: {
    top: "0",
    height: "10%",
    width: "100%",
    backgroundColor: "#79B4B7"
  }
});

export default Header;
