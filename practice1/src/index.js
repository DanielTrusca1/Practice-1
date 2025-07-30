import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { IntlProvider } from "react-intl";

import en from "./translations/en.json";
import fr from "./translations/fr.json";

const messages = { en, fr };
const language = navigator.language.split(/[-_]/)[0];
const locale = messages[language] ? language : "en";
console.log(locale)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);
