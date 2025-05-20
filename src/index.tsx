import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import EventsPage from "./pages/EventsPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <EventsPage />
    </QueryClientProvider>
  </React.StrictMode>
);
