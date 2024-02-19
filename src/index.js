import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Disclaimer from "./components/footer/Disclaimer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/" hashType="slash">
    <App />
    <Footer />
    <Disclaimer />
  </BrowserRouter>
);
