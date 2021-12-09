import * as React from "react";
import { makeStyles } from "@mui/styles";

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <nav>
        <a href="/">홈(로고)</a>
        <a href="#">메뉴2</a>
        <a href="#">메뉴3</a>
        <a href="#">메뉴4</a>
      </nav>
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
