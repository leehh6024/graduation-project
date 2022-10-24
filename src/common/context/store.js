import React, { useState, useRef } from "react";

const initialState = {
	sheet: false,
	selected: [],
	usertab: false,
};

const initialRef = {
	userLocation: {
		lat: 0,
		lng: 0,
	},
};

const GlobalContext = React.createContext(null);

export function GlobalContextProvider({ children }) {
	const [state, setState] = useState(initialState);
	const globalRef = useRef(initialRef);

	return (
		<GlobalContext.Provider value={{ state, setState, globalRef }}>
			{children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;
