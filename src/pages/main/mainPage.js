import Map from "./components/Map.jsx";
import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useCallback } from "react";
import "./mainPage.css";
import Temp from "../../pages/temp/Temp.js";
import Search from "./components/Search.jsx";

export default function Main() {
	const { state, setState } = useContext(GlobalContext);

	useEffect(() => setState((prev) => ({ ...prev, sheet: false })), []);
	const setPage = useCallback((page) =>
		setState((prev) => ({ ...prev, page: page }))
	);

	function onDismiss() {
		setState((prev) => ({ ...prev, sheet: false }));
	}

	return (
		<>
			<div className="mainpage">
				<Search />
				<Map />
				<img
					className="btn-issue"
					src="/issue-button.png"
					alt="issue"
					onClick={() => setPage(1)}
				></img>
				<BottomSheet
					open={state.sheet}
					onDismiss={onDismiss}
					snapPoints={({ maxHeight }) => [0.24 * maxHeight]}
					blocking={false}
					onClick={() => setPage(2)}
					expandOnContentDrag={true}
				>
					<Temp />
				</BottomSheet>
			</div>
		</>
	);
}
