import React, { useState } from "react";
import GlobalContext from "../../../common/context/store.js";
import { useContext } from "react";
import UploadScreen from "./UploadScreen.js";
import "./Quest.css";

export default function Quest() {
	const { state, setState } = useContext(GlobalContext);

	const openUploadScreen = () => {
		setState((prev) => ({ ...prev, uploadScreen: true }));
	};

	return (
		<div>
			{!state.uploadScreen && (
				<button className="btn-addQuest" onClick={openUploadScreen}>
					<img src="/community/btn-addQuest.png" />
				</button>
			)}
			{state.uploadScreen && <UploadScreen />}
		</div>
	);
}
