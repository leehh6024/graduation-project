import React, { useState } from "react";

const initialState = {
	page: 0,
	sheet: false,
	selected: [],
	userLocation: {
		lat: null,
		lng: null,
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
