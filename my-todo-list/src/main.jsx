import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes/AppRoutes";
import { GlobalStyle } from "./Main.style";
import { TodosProvider } from "./contexts/TodosContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <TodosProvider>
      <AppRoutes />
    </TodosProvider>
  </React.StrictMode>
);
