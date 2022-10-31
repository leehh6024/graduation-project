import React, { useState } from "react";
import styled from "styled-components";
import UserTab from "./UserTab.jsx";
import GlobalContext from "../../../common/context/store.js";
import { useContext } from "react";
import { ReactComponent as UserTabBtn } from "../../../assets/Hamburger.svg";

export default function Search() {
	const { state, setState } = useContext(GlobalContext);

	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
		console.log(state.usertab);
	}

	return (
		<>
			<SearchContainer>
				<StyledUserTabBtn onClick={openUserTab} />
				<SearchInput
					type="text"
					maxLength="30"
					placeholder="검색어를 입력해주세요."
				></SearchInput>
			</SearchContainer>
			{state.usertab && <UserTab />}
		</>
	);
}
const SearchContainer = styled.div`
	width: 92%;
	height: 48px;
	position: absolute;
	z-index: 5;
	left: 4%;
	top: 4%;
	display: grid;
	align-items: center;
	border-radius: 24px;
	border: none;
	background: white;
	box-shadow: 4px 3px 4px 0px rgba(0, 0, 0, 0.09);
`;

const SearchInput = styled.input`
	position: absolute;
	left: 50px;
	top: 4px;
	width: 84%;
	height: 40px;
	border: none;

	font-size: 16px;
	font-style: normal;
	font-weight: 700;
	font-family: "pretendard";
`;
const StyledUserTabBtn = styled(UserTabBtn)`
	position: absolute;
	left: 4%;
	width: 18px;
`;
