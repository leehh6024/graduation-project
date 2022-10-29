import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentsList from "./components/ContentsList.js";
import "./Trade.css";

export default function Trade() {
	return (
		<>
			<TradePage>
				<ContentsList />
			</TradePage>
			<Link to="/upload">
				<img className="btn-addQuest" src="/community/btn-addQuest.png" />
			</Link>
		</>
	);
}
const TradePage = styled.div`
	position: absolute;
	top: 15%;

	width: 100%;
	height: 85vh;
`;
