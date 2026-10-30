import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App";

// No <StrictMode> here on purpose: initPortfolio() attaches page-wide listeners and must run once.
createRoot(document.getElementById("root")).render(<App />);
