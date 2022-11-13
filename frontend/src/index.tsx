import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN || ""}
      clientId={process.env.REACT_APP_CLIENTID || ""}
      redirectUri={'http://localhost:3000/deck'}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
