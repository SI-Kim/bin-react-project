import "./styles.css";
import { Header, Footer } from "./layouts/index";
import Route from "./routes/Route";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Route />
      <Footer />
    </div>
  );
}
