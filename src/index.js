import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
