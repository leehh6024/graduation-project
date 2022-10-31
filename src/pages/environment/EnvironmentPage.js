import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalContext from "../../common/context/store.js";

import { ReactComponent as UserTabBtn } from "../../assets/Hamburger.svg";
import UserTab from "../main/components/UserTab.jsx";
import Tab from "./Tab.js";
import InfoList from "./EnvironmentDepartment/InfoList.js";
// import KoreaEnvironmentCorporation from "./KoreaEnvironmentCorporation/KoreaEnvironmentCorporation.js";
// import EnvironmentInfoSystem from "./EnvironmentInfoSystem/EnvironmentInfoSystem.js";

export default function EnvironmentPage() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("D");

	const { state, setState } = useContext(GlobalContext);
	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
		console.log(state.usertab);
	}

	return (
		<>
			{state.usertab && <UserTab />}
			<EnvironmentPageContainer>
				<EnvironmentHeader>
					<StyledUserTabBtn onClick={openUserTab} />
					환경정보
				</EnvironmentHeader>

				<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
				{/* {activeTab == "Q" ? <Quest /> : <Trade />} */}

				<InfoList />
			</EnvironmentPageContainer>
		</>
	);
}

const EnvironmentPageContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 85%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: white;
	vertical-align: middle;
`;
const EnvironmentHeader = styled.div`
	position: absolute;
	width: 100%;
	top: 6%;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 18px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;

	img {
		position: absolute;
		left: 3%;
		width: 16px;
		height: 16px;
		margin-right: 6%;
	}
`;

const StyledUserTabBtn = styled(UserTabBtn)`
	position: absolute;
	left: 4%;
	width: 18px;
`;
