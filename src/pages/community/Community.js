import React, { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store.js";
import Quest from "./Quest/Quest.js";
import Trade from "./Trade/Trade.js";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 10px 30px;
	font-weight: 700;
`;
const TabItem = styled.div`
	padding: 8px;
	opacity: 0.5;
	border-bottom: ${(props) => props.isActive && "2px solid white"};
	opacity: ${(props) => props.isActive && 1};
	cursor: pointer;
`;

export default function Community({ activeTab, setActiveTab }) {
	// only T, Q
	const [activeTab, setActiveTab] = useState("Q");

	return (
		<div>
			<CommunityContainer>
				<Wrapper>
					<TabItem
						isActive={activeTab === "Q"}
						onClick={() => setActiveTab("Q")}
					>
						퀘스트
					</TabItem>
					<TabItem
						isActive={activeTab === "T"}
						onClick={() => setActiveTab("T")}
					>
						거래
					</TabItem>
				</Wrapper>
			</CommunityContainer>
		</div>
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
