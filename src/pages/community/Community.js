import React, { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store.js";
import Tab from "./Tab.js";
import Quest from "./Quest/Quest.js";
import Trade from "./Trade/Trade.js";

export default function Community() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("Q");

	return (
		<CommunityContainer>
			<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab == "Q" ? (
				<Quest>퀘스트창입니다.</Quest>
			) : (
				<Trade>거래창입니다.</Trade>
			)}
		</CommunityContainer>
	);
}

const CommunityContainer = styled.div`
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
