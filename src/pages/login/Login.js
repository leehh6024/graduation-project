import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo.js";
import LoginBox from "./components/LoginBox.js";
import Options from "./components/Options.js";

export default function Login() {
	return (
		<LoginContainer>
			<Logo />
			<LoginBox />
			<Options />
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;
`;
