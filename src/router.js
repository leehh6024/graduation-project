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
import EnvironmentPage from "./pages/environment/EnvironmentPage.js";
import Category from "./pages/main/components/Navigation/Category";
// import GuidePage from "./pages/guide/GuidePage.js";
import SideNav from "./pages/main/components/Navigation/SideNav.jsx";
import UserTab from "./pages/main/components/UserTab";

const Container = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	height: 100%;
	margin: auto;
	background-color: white;
`;

function Controller() {
	const { globalRef } = useContext(GlobalContext);
	const { state, setState } = useContext(GlobalContext);

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
			{/* {state.usertab && <Category />} */}
			<UserTab />
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
				<Route path="/environmentpage" element={<EnvironmentPage />} />
				{/* <Route path="/guidepage" element={<GuidePage />} /> */}
			</Routes>
		</Container>
	);
}

export default Controller;
