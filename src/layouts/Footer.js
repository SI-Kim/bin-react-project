import React from "react";
import { makeStyles } from "@mui/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>Footer</div>
    </footer>
  );
};

const useStyles = makeStyles({
  footer: {
    height: "10%",
    width: "75%",
    backgroundColor: "#9D9D9D",
    right: "0",
    bottom: "0",
    display: "block",
    position: "absolute"
  }
});

export default Footer;
