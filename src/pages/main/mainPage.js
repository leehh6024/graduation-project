import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./mainPage.css";
import Map from "./components/Map.jsx";
import Search from "./components/Search.jsx";
import Temp from "../../pages/temp/Temp.js";
import IssuePointSmallImage from "./components/IssuePointSmallImage.js";

export default function Main() {
	const { state, setState } = useContext(GlobalContext);

	useEffect(() => setState((prev) => ({ ...prev, sheet: false })), []);

	function onDismiss() {
		setState((prev) => ({ ...prev, sheet: false }));
	}

	return (
		<>
			<div className="mainpage">
				<Search />
				<Map />
				<Link to="/issue">
					<img className="btn-issue" src="/issue-button.png" alt="issue"></img>
				</Link>
				<BottomSheet
					open={state.sheet}
					onDismiss={onDismiss}
					snapPoints={({ maxHeight }) => [0.28 * maxHeight]}
					blocking={false}
					expandOnContentDrag={true}
				>
					<Temp />
				</BottomSheet>
				<IssuePointSmallImage />
			</div>
		</>
	);
}
