import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentsList from "../Quest/components/ContentsList";
import "./Trade.css";

export default function Trade() {
	return (
		<>
			<TradePage>
				<ContentsList tab="trade" />
			</TradePage>
			<Link to="/upload">
				<img className="btn-addQuest" src="/community/btn-addQuest.png" />
			</Link>
		</>
	);
}
const TradePage = styled.div`
	position: absolute;
	width: 100%;
`;
