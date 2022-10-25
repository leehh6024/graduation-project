import React from "react";
import styled from "styled-components";

export default function LoginBox() {
	return (
		<div>
			<InputId>
				<input
					type="text"
					placeholder="아이디"
					style={{ width: "100%", textAlign: "left", border: "none" }}
				></input>
			</InputId>
			<InputPw>
				<input
					type="password"
					placeholder="비밀번호"
					style={{ width: "100%", textAlign: "left", border: "none" }}
				></input>
			</InputPw>
			<LoginBtn>로그인</LoginBtn>
		</div>
	);
}

const InputId = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	margin: auto;
	width: 90%;
	height: 30px;
	border-bottom: 1px solid black;
`;

const InputPw = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	margin: auto;
	margin-top: 30px;
	width: 90%;
	height: 30px;
	border-bottom: 1px solid black;
`;

const LoginBtn = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;
	margin-top: 45px;
	width: 90%;
	height: 45px;
	border: none;
	background-color: #6ac47a;
	color: white;
	border-radius: 5px;

	font-weight: 700;
	font-family: Pretendard;
	font-size: 16px;
	line-height: 19px;
`;
