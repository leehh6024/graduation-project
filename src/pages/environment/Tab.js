import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 7vh;
	top: 12%;
	display: flex;
	justify-content: space-between;
	font-weight: 700;
	font-size: 14px;
`;
const TabItem = styled.div`
	padding: 4px;
	opacity: 0.5;
	width: 33%;
	border-bottom: ${(props) => props.isActive && "2px solid #6AC47A"};
	opacity: ${(props) => props.isActive && 1};
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Tab({ activeTab, setActiveTab }) {
	return (
		<Wrapper>
			<TabItem isActive={activeTab === "D"} onClick={() => setActiveTab("D")}>
				환경부
			</TabItem>
			<TabItem isActive={activeTab === "K"} onClick={() => setActiveTab("K")}>
				한국환경공단
			</TabItem>
			<TabItem isActive={activeTab === "S"} onClick={() => setActiveTab("S")}>
				환경정보공개시스템
			</TabItem>
		</Wrapper>
	);
}

export default Tab;
