import Main from "@/Main.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import {PixelawProvider, usePixelawProvider} from "@pixelaw/react";
import {BrowserRouter} from "react-router-dom";
import {DojoEngine} from "@pixelaw/core-dojo";
import {MudEngine} from "@pixelaw/core-mud";
import {getCoreDefaultsFromUrl, getWorldForUrl} from "@/utils.ts";
import {StarknetChainProvider} from "@pixelaw/react-dojo";
import type {WorldsRegistry} from "@pixelaw/core";
import worldsRegistry from "@/config/worlds.json";
import { setupWorld } from "@/config/contracts.gen";
import { DojoWallet } from "@pixelaw/core-dojo"
import { PwarContext } from "./provider/PwarContext";
import { useMemo } from "react";

const AppContent = () => {
	const { coreStatus, pixelawCore } = usePixelawProvider();

    // Use useMemo to create these values only once
    const contextValue = useMemo(() => {
		if (!pixelawCore || coreStatus !== "ready") return undefined;
        
        const account = pixelawCore.getWallet() as DojoWallet;
        const provider = pixelawCore.engine["dojoSetup"].provider;
        const world = setupWorld(provider);
        
		console.log("account:", account);
		console.log("provider:", provider);
		console.log("world:", world);
        
        return { account, provider, world };
    }, [pixelawCore, coreStatus]);

    // Error states
    if (coreStatus === "error" || (pixelawCore && pixelawCore.status === "uninitialized")) {
        return <div className="error-message">Error occurred, check the logs</div>;
    }

	return (
		<BrowserRouter>
			{coreStatus === "ready" ? (
				<StarknetChainProvider>
					<PwarContext.Provider value={contextValue}>
						{" "}
						<Main />
					</PwarContext.Provider>
				</StarknetChainProvider>
			) : (
				<div className="loading-message">Loading, pls wait 🧘</div>
			)}
		</BrowserRouter>
	);
};

const App = () => {
	return (
		<PixelawProvider
			worldsRegistry={worldsRegistry as WorldsRegistry}
			world={world}
			engines={engines}
			coreDefaults={coreDefaults}
		>
			<AppContent />
		</PixelawProvider>
	);
};

const { protocol, hostname } = window.location;
const baseUrl = `${protocol}//${hostname}`;

const world = getWorldForUrl(
	worldsRegistry as WorldsRegistry,
	baseUrl,
	"local",
);

const rootElement = document.getElementById("root");

const engines = { dojo: DojoEngine, mud: MudEngine };

const coreDefaults = getCoreDefaultsFromUrl();

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<React.StrictMode>
			<App />
		</React.StrictMode>,
	);
} else {
	console.error("Failed to find the root element");
}
