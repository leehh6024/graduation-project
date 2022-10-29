import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentsList from "./components/ContentsList.js";
import "./Quest.css";

export default function Quest() {
	return (
		<>
			<QuestPage>
				<ContentsList />
			</QuestPage>
			<Link to="/upload">
				<img className="btn-addQuest" src="/community/btn-addQuest.png" />
			</Link>
		</>
	);
}

const QuestPage = styled.div`
	position: absolute;
	top: 15%;

	width: 100%;
	height: 85vh;
`;
