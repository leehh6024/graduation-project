import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalContext from "../../common/context/store.js";
import Tab from "./Tab.js";
import InfoList from "./EnvironmentDepartment/InfoList.js";
// import KoreaEnvironmentCorporation from "./KoreaEnvironmentCorporation/KoreaEnvironmentCorporation.js";
// import EnvironmentInfoSystem from "./EnvironmentInfoSystem/EnvironmentInfoSystem.js";

export default function EnvironmentPage() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("D");

	return (
		<>
			<Link to="/">
				<BackBtn>
					<img src="/community/btn-back.png" />
				</BackBtn>
			</Link>
			<EnvironmentPageContainer>
				<EnvironmentHeader>환경 정보</EnvironmentHeader>

				<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
				{/* {activeTab == "Q" ? <Quest /> : <Trade />} */}

				<InfoList />
			</EnvironmentPageContainer>
		</>
	);
}

const EnvironmentPageContainer = styled.div`
	position: absolute;
	text-align: center;
	align: center;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: white;
	margin: auto;
	min-height: 100vh;
	vertical-align: middle;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
const BackBtn = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	width: 1%;
	left: 3%;
	top: 6%;
	cursor: pointer;
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
`;
