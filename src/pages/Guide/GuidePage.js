import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store.js";
import GuideList from "./GuideList.js";

export default function GuidePage() {
	const { state, setState } = useContext(GlobalContext);

	return (
		<GuidePageContainer>
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
