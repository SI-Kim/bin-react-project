import "./styles.css";
import { Header, Footer } from "./layouts/index";
import Router from "./routes/Router";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}
