import React, { useState } from "react";
import GlobalContext from "../../../common/context/store.js";
import { useContext } from "react";
import UploadScreen from "./UploadScreen.js";

export default function Quest() {
	const { state, setState } = useContext(GlobalContext);

	const openUploadScreen = () => {
		setState((prev) => ({ ...prev, uploadScreen: true }));
	};

	return (
		<div>
			<button onClick={openUploadScreen}>-</button>
			{state.uploadScreen && <UploadScreen />}
		</div>
	);
}
