import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<>
			<Navbar></Navbar>
		</>
	);
}

const Navbar = styled.div`
	position: fixed;
	z-index: 5;
	width: 432px;
	height: 110px;
	background: #0ee163;
	margin: auto;
	border: 1px solid #0ee163;
`;
