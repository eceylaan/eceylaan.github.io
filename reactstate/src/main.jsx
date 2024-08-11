import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Products from "./Products.jsx";
import "./index.css";
import { MainLayout } from "./components/layout/MainLayout.jsx";
import ToDoApp from "./ToDoApp.jsx";

// const isLogin = true;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToDoApp />
  </StrictMode>
);
