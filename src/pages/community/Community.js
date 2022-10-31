import React, { useState } from "react";
import styled from "styled-components";

import CommunitySearch from "./CommunitySearch.js";
import Tab from "./Tab.js";
import Quest from "./Quest/Quest.js";
import Trade from "./Trade/Trade.js";

export default function Community() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("Q");

	return (
		<CommunityContainer>
			<CommunitySearch />
			<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab == "Q" ? <Quest /> : <Trade />}
		</CommunityContainer>
	);
}

const CommunityContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;

	background-color: white;
`;
