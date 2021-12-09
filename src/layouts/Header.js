import * as React from "react";
import { makeStyles } from "@mui/styles";

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>Header</div>
    </header>
  );
};

const useStyles = makeStyles({
  header: {
    height: "20%",
    width: "100%"
  }
});

export default Header;
