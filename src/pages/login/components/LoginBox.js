import React from "react";
import styled from "styled-components";

export default function LoginBox() {
	return (
		<div>
			<InputId>
				<input type="text" placeholder="아이디"></input>
			</InputId>
			<InputPw />
		</div>
	);
}

const InputId = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 40%;
`;

const InputPw = styled.div``;
