import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import { MantineProvider } from "@mantine/core";
import { MantineProvider, ColorSchemeProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ColorSchemeProvider>
      <MantineProvider
        theme={{ colorScheme: "dark" }}
        withGlobalStyles
        withNormalizeCSS
      >
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  </React.StrictMode>
);
