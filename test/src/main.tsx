import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import AppProvider from "@app/Provider/AppProvider";

createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </AppProvider>
);
