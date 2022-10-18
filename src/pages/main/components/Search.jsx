import React, { useState } from "react";
import styled from "styled-components";
import UserTab from "./UserTab.jsx";
import GlobalContext from "../../../common/context/store";
import { useContext } from "react";
import "./Search.css";

export default function Search() {
	const { state, setState } = useContext(GlobalContext);

	function openUserTab() {
		setState((prev) => ({ ...prev, usertab: true }));
		console.log(state.usertab);
	}

	return (
		<div>
			<div className="search-container">
				<img
					className="hamburger"
					src="search-hamburger.png"
					alt="hamburger"
					onClick={openUserTab}
				></img>
				<input
					className="search-input"
					type="text"
					placeholder="무엇이 궁금하신가요?"
				></input>
			</div>
			{state.usertab && <UserTab />}
		</div>
	);
}
