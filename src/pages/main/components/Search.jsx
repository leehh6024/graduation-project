import React, { useState } from "react";
import styled from "styled-components";
import UserTab from "./UserTab.jsx";
import GlobalContext from "../../../common/context/store";
import { useContext } from "react";

const SearchContainer = styled.div`
	position: absolute;
	z-index: 5;
	left: 12px;
	top: 54px;
	width: 406px;
	height: 48px;
	border-radius: 24px;
	border: none;
	font-size: 20px;
	background: white;
	box-shadow: 4px 3px 4px 0px rgba(0, 0, 0, 0.09);
`;

export default function Search() {
	const { state, setState } = useContext(GlobalContext);

	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
		console.log(state.usertab);
	}

	return (
		<div>
			<SearchContainer>
				<img
					src="search-hamburger.png"
					alt="hamburger"
					style={{
						position: "absolute",
						left: "16px",
						top: "17px",
					}}
					onClick={openUserTab}
				></img>
				<input
					type="text"
					placeholder="무엇이 궁금하신가요?"
					style={{
						position: "absolute",
						left: "50px",
						top: "4px",
						width: "340px",
						height: "40px",
						border: "none",
					}}
				></input>
			</SearchContainer>
			{state.usertab && <UserTab />}
		</div>
	);
}
