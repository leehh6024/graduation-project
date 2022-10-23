import IssuePage from "./pages/issue/issuePage";
import Main from "./pages/main/mainPage";
import React, { useContext } from "react";
import GlobalContext from "./common/context/store";
import styled from "styled-components";
import IssueInfo from "./pages/temp/IssueInfo.js";
import Community from "./pages/community/Community.js";
import { Route, Routes } from "react-router-dom";

const Container = styled.div`
	position: relative;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	margin: auto;
	background-color: white;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

function Controller() {
	const pages = [<Main />, <IssuePage />, <IssueInfo />, <Community />];

	return (
		<Container>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/issue" element={<IssuePage />} />
				<Route path="/issueinfo" element={<IssueInfo />} />
				<Route path="/community" element={<Community />} />
			</Routes>
			{/* {pages[page]} */}
		</Container>
	);
}

export default Controller;
