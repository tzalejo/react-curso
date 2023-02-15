import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import { GifExpertApp } from "./GifExpertApp";
import "./styles.css";

// const apiKey = '4ydUL7SdFZPIAh84Xyj4JVTAmLfMn0Kf';
// const url = await getImagen(apiKey);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);
