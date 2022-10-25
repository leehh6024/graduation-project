import React from "react";
import styled from "styled-components";

const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 50%;
`;

export default function Logo() {
	return (
		<Box>
			<img src="/login/logo.png" />
		</Box>
	);
}
