import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalContext from "../../common/context/store.js";

import { ReactComponent as UserTabBtn } from "../../assets/Hamburger.svg";
import UserTab from "../main/components/UserTab.jsx";
import Tab from "./Tab.js";
import DepartmentInfoList from "./EnvironmentDepartment/DepartmentInfoList.js";
import KoreaInfoList from "./KoreaEnvironmentCorporation/KoreaInfoList.js";
import SystemInfoList from "./EnvironmentInfoSystem/SystemInfoList.js";

export default function EnvironmentPage() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("D");

	const { state, setState } = useContext(GlobalContext);
	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
	}

	return (
		<>
			<EnvironmentPageContainer>
				{state.usertab && <UserTab />}
				<EnvironmentHeader>
					<StyledUserTabBtn onClick={openUserTab} />
					환경정보
				</EnvironmentHeader>

				<Tab activeTab={activeTab} setActiveTab={setActiveTab} />

				{activeTab == "D" ? <DepartmentInfoList /> : null}
				{activeTab == "K" ? <KoreaInfoList /> : null}
				{activeTab == "S" ? <SystemInfoList /> : null}
			</EnvironmentPageContainer>
		</>
	);
}
const EnvironmentPageContainer = styled.div`
	position: absolute;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	background-color: white;
`;
const EnvironmentHeader = styled.div`
	position: absolute;
	width: 100%;
	top: 6%;
	padding-bottom: 4%;
	border-bottom: 2px solid #eeeeee;

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
