import Map from "./components/Map.jsx";
import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect } from "react";
import "./mainPage.css";
import Temp from "../../pages/temp/Temp.js";

export default function Main() {
	const { state, setState } = useContext(GlobalContext);

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
				<Temp></Temp>
			</BottomSheet>
		</>
	);
}
