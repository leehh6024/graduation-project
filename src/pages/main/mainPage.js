import { BottomSheet } from "react-spring-bottom-sheet";
import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./mainPage.css";
// import styled from "styled-components";
// import { ReactComponent as IssueUploadBtn } from "../../assets/issue_upload_btn.svg";

import Map from "./components/Map.jsx";
import Search from "./components/Search.jsx";
import Temp from "../../pages/temp/Temp.js";
import IssuePointSmallImage from "./components/IssuePointSmallImage.js";
import styled from "styled-components";

export default function Main() {
	const { state, setState } = useContext(GlobalContext);

	useEffect(() => setState((prev) => ({ ...prev, sheet: false })), []);

	function onDismiss() {
		setState((prev) => ({ ...prev, sheet: false }));
	}

	return (
		<MainContainer>
			<Search />
			<Map />
			<Link to="/issue">
				{/* <StyledIssueUploadBtn width="96" height="96" /> */}
				<img className="btn-issue" src="/issue-button.png" />
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
			<Link to="/issueinfo">
				<IssuePointSmallImage />
			</Link>
		</MainContainer>
	);
}

const MainContainer = styled.div`
	top: 0px;
	left: 0px;
`;
