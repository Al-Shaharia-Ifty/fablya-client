import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./Context/AuthProvider";
import FetchProvider from "./Context/FetchProvider";

// Create a client
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <AuthProvider>
        <FetchProvider>
          <App />
        </FetchProvider>
      </AuthProvider>
    </React.StrictMode>
  </QueryClientProvider>
);
