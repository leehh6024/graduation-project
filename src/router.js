import React, { useContext, useEffect } from "react";
import GlobalContext from "./common/context/store";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Main from "./pages/main/mainPage";
import Login from "./pages/login/Login.js";
import IssueInfo from "./pages/temp/IssueInfo.js";
import IssueResolve from "./pages/temp/IssueResolve.js";
import IssueResolveWriting from "./pages/temp/IssueResolveWriting.js";
import IssuePage from "./pages/issue/issuePage";
import Community from "./pages/community/Community.js";
import ContentsInfo from "./pages/community/Quest/ContentsInfo.js";
import UploadScreen from "./pages/community/Quest/UploadScreen.js";

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
	const { globalRef } = useContext(GlobalContext);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function (position) {
				globalRef.current.userLocation.lat = position.coords.latitude;
				globalRef.current.userLocation.lng = position.coords.longitude;
			});
		}
	}, []);
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/issue" element={<IssuePage />} />
				<Route path="/issueinfo" element={<IssueInfo />} />
				<Route path="/issueresolve" element={<IssueResolve />} />
				<Route path="/issueresolvewriting" element={<IssueResolveWriting />} />
				<Route path="/community" element={<Community />} />
				<Route path="/contentsinfo" element={<ContentsInfo />} />
				<Route path="/upload" element={<UploadScreen />} />
			</Routes>
		</Container>
	);
}

export default Controller;
