// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import "./index.css"; // Tailwind import
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClilent = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClilent}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);