import Map from "./components/Map.jsx";
import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState, useRef } from "react";
import "./mainPage.css";
import Temp from "../../pages/temp/Temp.js";
import LargeSheet from "../../pages/temp/LargeSheet.js";

export default function Main({ props, isSpecial }) {
	const { state, setState } = useContext(GlobalContext);
	const [small, setSmall] = useState(true);
	const [large, setLarge] = useState(false);

	function SheetChange() {
		if (currentSheetY === MAX_Y || currentSheetY > MIN_Y) {
			setSmall(false);
			setLarge(true);
		} else if (currentSheetY <= MIN_Y) {
			setSmall(true);
			setLarge(false);
		}
	}

	useEffect(() => {
		setState((prev) => ({ ...prev, sheet: false }));
	}, []);

	function onDismiss() {
		setState((prev) => ({ ...prev, sheet: false }));
	}

	return (
		<>
			<Map />
			<BottomSheet
				open={state.sheet}
				onDismiss={onDismiss}
				snapPoints={({ maxHeight }) => [0.2 * maxHeight, 0.7 * maxHeight]}
				defaultSnap={({ lastSnap, snapPoints }) => {
					lastSnap ?? Math.max(...snapPoints);
				}}
				blocking={false}
			>
				<Temp isSpecial={small}></Temp>
				<LargeSheet isSpecial={large}></LargeSheet>
			</BottomSheet>
		</>
	);
}

const MIN_Y = 60; // 바텀시트가 최대로 높이 올라갔을 때의 y 값
const MAX_Y = window.innerHeight - 80; // 바텀시트가 최소로 내려갔을 때의 y 값
