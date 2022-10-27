import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Tab from "./Tab.js";
import Quest from "./Quest/Quest.js";
import Trade from "./Trade/Trade.js";

export default function Community() {
	// only T, Q
	const [activeTab, setActiveTab] = useState("Q");

	return (
		<CommunityContainer>
			<Link to="/">
				<BackBtn>
					<img src="/community/btn-back.png" />
				</BackBtn>
			</Link>
			<Tab activeTab={activeTab} setActiveTab={setActiveTab} />
			{activeTab == "Q" ? <Quest /> : <Trade />}
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
const BackBtn = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	width: 2rem;
	left: 1%;
	top: 3%;
	cursor: pointer;
`;
