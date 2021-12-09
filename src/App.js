import { Header, Footer } from "./layouts/index";
import Router from "./routes/Router";
import { makeStyles } from "@mui/styles";

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

const useStyles = makeStyles({
  App: {
    width: "inherit",
    height: "inherit"
  }
});
