import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
//Kullanilacak komponent icerisine dahil edilmeli
import "bootstrap/dist/css/bootstrap.min.css";
// Eger javascript ozelliklerini kullanacaksam
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
