import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { http, createConfig, WagmiProvider } from "wagmi";
import { config } from "./config/config.jsx";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

let client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.studio.thegraph.com/query/81310/decentralised-video/version/latest",
});
const queryClient = new QueryClient();
console.log(config);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ApolloProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
