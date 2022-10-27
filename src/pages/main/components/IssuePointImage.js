import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store";
import { Link } from "react-router-dom";

export default function IssuePointImage() {
	const { state, setState } = useContext(GlobalContext);

	return (
		<>
			{state.sheet && (
				<Link to="/issueinfo">
					<IssueImage>
						<img src={state.selected[0].img} width="100%" height="100%" />
					</IssueImage>
				</Link>
			)}
		</>
	);
}

const IssueImage = styled.div`
	z-index: 7;
	position: absolute;
	left: 56%;
	top: 50%;
	margin: auto;

	transition: 0.1s;
	&.active {
		margin-left: 0%;
	}

	width: 40%;
	height: 20%;
	border: 2px solid white;
`;
