import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UrlProvider } from "./useContext/useContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UrlProvider>
    <App />
  </UrlProvider>
);
