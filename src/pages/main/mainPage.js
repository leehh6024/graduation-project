import Map from "./components/Map.jsx";
import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState, useRef } from "react";
import "./mainPage.css";
import Temp from "../../pages/temp/Temp.js";
import Search from "./components/Search.jsx";
import IssueInfo from "../temp/IssueInfo.js";

export default function Main() {
	const { state, setState } = useContext(GlobalContext);

	useEffect(() => setState((prev) => ({ ...prev, sheet: false })), []);

	function onDismiss() {
		setState((prev) => ({ ...prev, sheet: false }));
	}

	return (
		<>
			<Map />
			<Search />
			<BottomSheet
				open={state.sheet}
				onDismiss={onDismiss}
				snapPoints={({ maxHeight }) => [0.18 * maxHeight]}
				blocking={false}
				expandOnContentDrag={true}
			>
				<Temp />
			</BottomSheet>
			{/* <IssueInfo /> */}
		</>
	);
}
