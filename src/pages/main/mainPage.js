import Map from "./components/Map.jsx";
import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState, useRef } from "react";
import "./mainPage.css";
import Temp from "../../pages/temp/Temp.js";
import LargeSheet from "../../pages/temp/LargeSheet.js";

export default function Main() {
	const { state, setState } = useContext(GlobalContext);

	useEffect(() => setState((prev) => ({ ...prev, sheet: false })), []);

	function onDismiss() {
		setState((prev) => ({ ...prev, sheet: false }));
	}

	return (
		<>
			<Map />
			<BottomSheet
				open={state.sheet}
				onDismiss={onDismiss}
				snapPoints={({ maxHeight }) => [0.2 * maxHeight]}
				blocking={false}
			>
				<Temp />
			</BottomSheet>
		</>
	);
}

// const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
// const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
