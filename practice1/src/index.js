import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { IntlProvider } from "react-intl";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={language} messages={messages[language]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
