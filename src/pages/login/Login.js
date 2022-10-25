import React from "react";
import styled from "styled-components";
import Logo from "./components/Logo.js";

export default function Login() {
	return (
		<LoginContainer>
			<Logo />
			{/* <LoginInput />
			<Signup /> */}
		</LoginContainer>
	);
}

const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;
	border: 1px solid black;
`;
