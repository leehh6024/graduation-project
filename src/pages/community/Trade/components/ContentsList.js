import React from "react";
import styled from "styled-components";
import Contents from "./Contents.js";
import { Link } from "react-router-dom";

export default function ContentsList() {
	return (
		<ContentsListContainer>
			<Link to="/contentsinfo">
				<Contents />
				<Contents />
				<Contents />
				<Contents />
				<Contents />
				<Contents />
				<Contents />
				<Contents />
				<Contents />
			</Link>
		</ContentsListContainer>
	);
}

const ContentsListContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow: scroll;
`;
