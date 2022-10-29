import React from "react";
import styled from "styled-components";

export default function CommunitySearch() {
	return (
		<div>
			<CommunitySearchContainer />
			<CommunitySearchAddress>복정동</CommunitySearchAddress>
			<CommunitySearchButton>
				<img src="/community/btn-search.png" />
			</CommunitySearchButton>
		</div>
	);
}

const CommunitySearchContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 6%;
	top: 1%;

	border-bottom: 2px solid #e5e5e5;
`;

const CommunitySearchAddress = styled.div`
	position: absolute;
	left: 10%;
	top: 2.5%;
	display: flex;
	justify-content: center;
	align-items: center;

	font-weight: 700;
	font-family: "Inter";
	font-style: "bold";
	font-size: 18px;
	color: #464646;
`;
const CommunitySearchButton = styled.div`
	position: absolute;
	right: 6%;
	top: 2.5%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
