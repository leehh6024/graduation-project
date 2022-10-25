import React from "react";
import styled from "styled-components";

export default function Options() {
	return (
		<OptionContainer>
			<Signup>회원가입 | </Signup>
			<FindIdPw>아이디/비밀번호 찾기</FindIdPw>
		</OptionContainer>
	);
}

const OptionContainer = styled.div`
	display: flex;
	align-items: right;
	justify-content: right;
	margin: auto;
	width: 90%;
	height: 30px;

	color: #666666;
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
`;

const Signup = styled.div`
	display: flex;
	align-items: right;
	justify-content: right;
	margin-top: 15px;
	height: 30px;
`;

const FindIdPw = styled.div`
	display: flex;
	align-items: left;
	justify-content: left;
	margin-top: 15px;
	margin-left: 4px;
	height: 30px;
`;
