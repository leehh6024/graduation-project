import React from "react";
import styled from "styled-components";

const Navigation = styled.nav`
	min-width: 230px;
	min-height: 610px;
	font-family: "Inter";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
`;

function Nav({ children }) {
	return <Navigation>{children}</Navigation>;
}

export default Nav;
