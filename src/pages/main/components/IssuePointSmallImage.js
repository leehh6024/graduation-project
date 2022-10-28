import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store";
import { Link } from "react-router-dom";

export default function IssuePointSmallImage() {
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
	z-index: 5;
	position: absolute;
	left: 52%;
	top: 52%;
	margin: auto;

	transition: 0.1s;
	&.active {
		margin-left: 0%;
	}

	width: 44%;
	height: 18%;
	border: 2px solid white;
`;
