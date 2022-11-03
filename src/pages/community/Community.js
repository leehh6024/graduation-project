import React, { useState, useContext } from "react";
import styled from "styled-components";

import GlobalContext from "../../common/context/store.js";
import UserTab from "../main/components/UserTab.jsx";
import CommunitySearch from "./CommunitySearch.js";
import Tab from "./Tab.js";
import Quest from "./Quest/Quest.js";
import Trade from "./Trade/Trade.js";

export default function Community() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("Q");
	const { state, setState } = useContext(GlobalContext);

	return (
		<CommunityContainer>
			{state.usertab && <UserTab />}
			<CommunitySearch />
			<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab == "Q" ? <Quest /> : <Trade />}
		</CommunityContainer>
	);
}

const CommunityContainer = styled.div`
	position: absolute;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	background-color: white;
`;
