import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store.js";
import UserTab from "../main/components/UserTab.jsx";

export default function CommunitySearch() {
	const { state, setState } = useContext(GlobalContext);
	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
		console.log(state.usertab);
	}
	return (
		<div>
			<CommunitySearchContainer />
			{state.usertab && <UserTab />}
			<CommunitySearchAddress>
				<img src="/community/hamburger.png" onClick={openUserTab}></img>
				복정동
			</CommunitySearchAddress>
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
	left: 2%;
	top: 2.5%;
	width: 22%;

	display: flex;
	margin: auto;
	justify-content: center;
	align-items: center;

	font-weight: 700;
	font-family: "Inter";
	font-style: "bold";
	font-size: 18px;
	color: #464646;

	img {
		width: 20px;
		height: 20px;
		margin-right: 12%;
	}
`;
const CommunitySearchButton = styled.div`
	position: absolute;
	right: 6%;
	top: 3%;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 20px;
		height: 20px;
		margin-right: 6%;
	}
`;
