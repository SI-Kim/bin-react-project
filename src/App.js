import "./styles.css";
import { Header, Footer } from "./layouts/index";
import Route from "./routes/Route";
import { useStyle } from "@material-ui/styles";

export default function App() {
  const style = useStyle();
  return (
    <div className="App">
      <Header />
      <Route />
      <Footer />
    </div>
  );
}
