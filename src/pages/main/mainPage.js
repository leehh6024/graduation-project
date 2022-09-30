import Map from "./components/Map";
import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect } from "react";
import "./mainPage.css";

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
			{/* <button onClick={() => setState((prev) => ({ ...prev, sheet: !state.sheet }))}>
				{state.sheet ? "close" : "open"}
			</button> */}
			<Map />
			<BottomSheet
				open={state.sheet}
				onDismiss={onDismiss}
				snapPoints={({ maxHeight }) => [0.45 * maxHeight, 0.83 * maxHeight]}
				defaultSnap={({ lastSnap, snapPoints }) => {
					lastSnap ?? Math.max(...snapPoints);
				}}
				blocking={false}
			>
				<input autoComplete="off" className="commentInput" type="text" />
			</BottomSheet>
		</>
	);
}
