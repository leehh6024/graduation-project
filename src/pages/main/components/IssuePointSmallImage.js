import React, { useEffect, useContext } from "react";
import styled, { keyframes } from "styled-components";
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
const move = keyframes`
	0% {
		top: 52%;
		left: 100%;
		opacity: 0;
	}
	100% {
		left: 52%;
		top: 52%;
		opacity: 1;
	}
`;

const IssueImage = styled.div`
	animation: ${move} 0.6s;
	z-index: 4;
	position: absolute;
	left: 52%;
	top: 52%;

	width: 44%;
	height: 18%;
	border: 2px solid white;
	box-shadow: -10px -3px 10px 10px #0000001a;
`;
