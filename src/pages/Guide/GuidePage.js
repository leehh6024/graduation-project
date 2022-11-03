import React, { useContext, useState } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store.js";

import UserTab from "../main/components/UserTab.jsx";
import GuideList from "./GuideList.js";

export default function GuidePage() {
	const { state, setState } = useContext(GlobalContext);

	return (
		<GuidePageContainer>
			{state.usertab && <UserTab />}
			<GuideList />
		</GuidePageContainer>
	);
}

const GuidePageContainer = styled.div`
	position: absolute;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	background-color: white;
`;
