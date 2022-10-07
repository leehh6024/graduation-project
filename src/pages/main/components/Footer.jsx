import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<>
			<Navbar>Navbar 입 니 다</Navbar>
		</>
	);
}

const Navbar = styled.div`
	position: "fixed";
	z-index: 5;
	width: 430px;
	height: 110px;
`;
