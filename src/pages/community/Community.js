import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import GlobalContext from "../../common/context/store.js";
import UserTab from "../main/components/UserTab.jsx";
import CommunitySearch from "./components/CommunitySearch";
import Tab from "./Tab.js";
import QuestTab from "./Quest/QuestTab.js";
import TradeTab from "./Trade/TradeTab.js";

export default function Community() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("Q");
	const { state, setState } = useContext(GlobalContext);

	return (
		<CommunityContainer>
			<CommunitySearch />
			<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab == "Q" ? <QuestTab /> : <TradeTab />}
			<Link to="/upload">
				<AddPostButton>
					<img className="btn-addQuest" src="/community/btn-addQuest.png" />
				</AddPostButton>
			</Link>
		</CommunityContainer>
	);
}

const CommunityContainer = styled.div`
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	background-color: white;
`;

const AddPostButton = styled.div`
	position: fixed;
	z-index: 4;
	width: 56px;
	height: 56px;
	right: calc(var(--vh, 1vh) * 8);
	bottom: calc(var(--vh, 1vh) * 10);
	border-radius: 50px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
