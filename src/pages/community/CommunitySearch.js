import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store.js";
import UserTab from "../main/components/UserTab.jsx";
import { ReactComponent as UserTabBtn } from "../../assets/Hamburger.svg";

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
				<StyledUserTabBtn onClick={openUserTab} />
				<div>복정동</div>
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
	top: 2.7%;
	width: 30%;

	display: flex;
	margin: auto;
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
const StyledUserTabBtn = styled(UserTabBtn)`
	position: absolute;
	left: 3%;
	width: 20px;
	margin-right: 6%;
`;
