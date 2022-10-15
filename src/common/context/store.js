import React, { useState } from "react";

const initialState = {
	page: 0,
	sheet: false,
	selected: [],
	userLocation: {
		lat: 0,
		lng: 0,
	},
	usertab: false,
};

const GlobalContext = React.createContext(null);

export function GlobalContextProvider({ children }) {
	const [state, setState] = useState(initialState);

	return (
		<GlobalContext.Provider value={{ state, setState }}>
			{children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;
