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
		<EnvironmentPageContainer>
			<Link to="/">
				<BackBtn>
					<img className="btn-back" src="/community/btn-back.png" />
				</BackBtn>
			</Link>

			<EnvironmentHeader>환경 정보</EnvironmentHeader>

			<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
			{/* {activeTab == "Q" ? <Quest /> : <Trade />} */}

			<InfoList />
		</EnvironmentPageContainer>
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
	display: inline-block;
	width: 2rem;
	left: 6%;
	cursor: pointer;
	margin: auto;
`;
const EnvironmentHeader = styled.div`
	position: absolute;
	transform: translate(-50%, 300%);
	display: inline-block;
	justify-content: center;
	align-items: center;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 18px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;
`;
