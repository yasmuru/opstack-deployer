import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { WagmiConfig } from "wagmi";
// Jotai provider
import { Provider as JotaiProvider } from 'jotai';

import { App } from "./App";
import { chains, config } from "./wagmi";
import "./index.css"

/**
 * Root providers and initialization of app
 * @see https://reactjs.org/docs/strict-mode.html
 * @see https://wagmi.sh/react/WagmiConfig
 * @see https://www.rainbowkit.com/docs/installation
 */


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <JotaiProvider>
      <WagmiConfig config={config}>
        <RainbowKitProvider
          chains={chains}
          theme={lightTheme({
            accentColor: "#202327",
            accentColorForeground: "white",
            borderRadius: "large",
            overlayBlur: "large",
          })}
        >
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </JotaiProvider>
  </React.StrictMode>,
);
