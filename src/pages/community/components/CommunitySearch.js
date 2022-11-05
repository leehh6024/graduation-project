import React, { useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store.js";
import UserTab from "../../main/components/UserTab";
import { ReactComponent as UserTabBtn } from "../../../assets/Hamburger.svg";

export default function CommunitySearch() {
	const { state, setState } = useContext(GlobalContext);
	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
		console.log(state.usertab);
	}
	return (
		<CommunitySearchContainer>
			<CommunitySearchAddress>
				<StyledUserTabBtn onClick={openUserTab} />
				<div>복정동</div>
			</CommunitySearchAddress>
			<CommunitySearchButton>
				<img src="/community/btn-search.png" />
			</CommunitySearchButton>
		</CommunitySearchContainer>
	);
}
const CommunitySearchContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 40px;
	top: 10px;

	border-bottom: 3px solid #eeeeee;
`;
const CommunitySearchAddress = styled.div`
	position: absolute;
	top: 15%;
	left: 2%;
	width: 30%;

	display: flex;
	margin: auto;
	justify-content: center;
	align-items: center;

	font-weight: 700;
	font-family: "Inter";
	font-style: "bold";
	font-size: 16px;
	color: #464646;
`;
const CommunitySearchButton = styled.div`
	position: absolute;
	right: 6%;
	top: 15%;
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
