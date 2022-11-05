import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ContentsList from "./components/ContentsList.js";

export default function QuestTab() {
	return (
		<>
			<QuestPage>
				<ContentsList tab="quest" />
			</QuestPage>
		</>
	);
}

const QuestPage = styled.div`
	position: absolute;
	width: 100%;
`;
