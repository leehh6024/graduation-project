import React from "react";
import styled from "styled-components";

export default function Info(props) {
	return (
		<InfoContainer>
			<InfoTitle>{props.text}</InfoTitle>
			<InfoDate>{props.data}</InfoDate>
		</InfoContainer>
	);
}

const InfoContainer = styled.div`
	position: relative;
	width: 100%;
	height: 90px;
	border-bottom: 5px solid #eeeeee;
	margin-bottom: 20px;
`;

const InfoTitle = styled.div`
	position: absolute;
	left: 4%;
	width: 90%;

	color: #464646;
	text-align: left;
	font-family: Pretendard;
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
`;

const InfoDate = styled.div`
	position: absolute;
	left: 4%;
	top: 70%;
	width: 90%;

	color: #464646;
	text-align: left;
	font-family: Pretendard;
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
`;
