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
	position: fixed;
	z-index: 5;
	width: 432px;
	height: 90px;
	background: #f9b100;
	margin: auto;
	border: 1px solid #f9b100;
`;
