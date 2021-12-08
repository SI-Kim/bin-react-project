import "./styles.css";
import { Header, Footer } from "./layouts/index";
import Router from "./routes/Router";
import { useStyle } from "@material-ui/styles";

export default function App() {
  const style = useStyle();
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}
