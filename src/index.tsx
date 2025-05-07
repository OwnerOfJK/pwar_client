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

const AppContent = React.memo(() => {
	const { coreStatus, pixelawCore } = usePixelawProvider();

	const contextValue = useMemo(() => {
		if (!pixelawCore || coreStatus !== "ready") return undefined;
		
		const account = pixelawCore.wallet as DojoWallet;
		const provider = pixelawCore.engine["dojoSetup"].provider;
		const world = setupWorld(provider);
		
		console.log("Account address: ", account);
		console.log("Account address: ", account.address);
		console.log("Provider: ", provider);
		console.log("World: ", world);
		
		return { account, provider, world };
	}, [pixelawCore, coreStatus]);

	if (coreStatus === "error") {
		return <div className="error-message">Error occurred, check the logs</div>;
	}
	if (coreStatus === "initAccount") {
		return (
			<BrowserRouter>
				<StarknetChainProvider>
					<div className="loading-message">
						Pls wait 🧘 : Initializing account
					</div>
				</StarknetChainProvider>
			</BrowserRouter>
		);
	}
	if ((coreStatus === "ready" || coreStatus === "readyWithoutWallet") && contextValue) {
		return (
			<BrowserRouter>
				<StarknetChainProvider>
					<PwarContext.Provider value={contextValue}>
						{" "}
						<Main />
					</PwarContext.Provider>
				</StarknetChainProvider>
			</BrowserRouter>
		);
	}

	return <div className="loading-message">Pls wait 🧘 : Loading</div>;
});

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
