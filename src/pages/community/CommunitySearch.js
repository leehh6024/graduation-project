import React from "react";
import styled from "styled-components";

export default function CommunitySearch() {
	return (
		<div>
			<CommunitySearchContainer />
		</div>
	);
}

const CommunitySearchContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 6%;
	top: 1%;

	border-bottom: 2px solid #999999;
`;
