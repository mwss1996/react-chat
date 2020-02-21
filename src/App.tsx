import * as React from "react";
import { NavigationContainer } from "./screens/navigationContainer/NavigationContainer";
import { StoreContainer } from "./store/StoreContainer";
import { PlatformProvider } from "./PlatformProvider";

// @ts-ignore
export const PlatformContext = React.createContext<{
	platform: "mobile" | "desktop";
}>();
export function App() {
	return (
		<StoreContainer>
			<PlatformProvider>
				<NavigationContainer />
			</PlatformProvider>
		</StoreContainer>
	);
}
