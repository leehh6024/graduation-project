import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Contents.css";

export default function Contents() {
	return (
		<div>
			<Link to="/community">
				<img className="btn-back" src="/community/btn-back.png" />
			</Link>
			<ContentsImage>contents Image</ContentsImage>

			<ContentsBrush>
				<img src="small-brush" alt="small-brush" />
				Brush
			</ContentsBrush>

			<ContentsTitle>title</ContentsTitle>

			<ContentsAddress>address</ContentsAddress>

			<ContentsInfo>Information</ContentsInfo>

			<UserProfile>
				<img src="user-profile-image" />
				유저닉네임
			</UserProfile>

			<Link to="/community">
				<ResolveIssue>이슈 해결하기</ResolveIssue>
			</Link>
		</div>
	);
}

const ContentsImage = styled.div`
	width: 100%;
	height: 45vh;
	border: 1px solid black;
`;

const ContentsBrush = styled.div`
    width: 30%
    height: 190px;
	position: absolute;
	top: 46%;
	left: 3%;
    border: 1px solid black;
	font-family: "Pretendard";
	font-style: Bold;
	font-size: 24px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;
`;

const ContentsTitle = styled.div`
    width: 30%
    height: 190px;
	position: absolute;
	top: 50%;
	left: 3%;
    border: 1px solid black;
	font-family: "Pretendard";
	font-style: Bold;
	font-size: 16px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;
`;

const ContentsAddress = styled.div`
    width: 30%
    height: 190px;
	position: absolute;
	top: 53%;
	left: 3%;
    border: 1px solid black;
	font-family: "Pretendard";
	font-style: Bold;
	font-size: 12px;
	font-weight: 700;
	line-height: 100%;
	color: #999999;
`;
const ContentsInfo = styled.div`
    width: 30%
    height: 190px;
	position: absolute;
	top: 59%;
	left: 3%;
    border: 1px solid black;
	font-family: "Pretendard";
	font-style: regular;
	font-size: 16px;
	font-weight: 700;
	line-height: 100%;
	color: black;
`;
const UserProfile = styled.div`
    width: 30%
    height: 190px;
	position: absolute;
	top: 67%;
	left: 3%;
    border: 1px solid black;
	font-family: "Pretendard";
	font-style: regular;
	font-size: 16px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;
`;

const ResolveIssue = styled.div`
	position: absolute;
	margin: auto;
	left: 3%;
	top: 84%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 94%;
	border: none;
	border-radius: 5px;
	background-color: #6ac47a;
	color: white;
	height: 3rem;
	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
`;
