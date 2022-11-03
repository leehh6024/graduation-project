import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ContentsInfo() {
	const { state } = useLocation();

	return (
		<div>
			<Link to="/community">
				<BackBtn>
					<img src="/community/btn-back.png" />
				</BackBtn>
			</Link>

			<ContentsImage>
				<img src={state.image} />
			</ContentsImage>

			<ContentsBrush>
				<img src="small-brush.png" />
				<h5>{state.price} 빗자루</h5>
			</ContentsBrush>

			<ContentsTitle>{state.title}</ContentsTitle>

			<ContentsAddress>{state.address}</ContentsAddress>

			<ContentsInfos>{state.body}</ContentsInfos>

			<LineBreak />

			<UserProfile>
				<img src="userprofile.png" />
				<div>{state.userId}</div>
			</UserProfile>

			<LineBreak2 />

			<MoreContents>거래중인 상품 보기 {">"}</MoreContents>
			<LineBreak3 />

			<ReportContents>신고하기 {">"}</ReportContents>
			<LineBreak4 />

			<Bookmark>
				<img src="bookmark.png" />
			</Bookmark>
			<Link to="/community">
				<Resolve>해결 및 거래하기</Resolve>
			</Link>
			<Comment>
				<img src="comment.png" />
			</Comment>

			<Link to="/community"></Link>
		</div>
	);
}
const BackBtn = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	width: 1%;
	left: 3%;
	top: 6%;
	cursor: pointer;
`;
const ContentsImage = styled.div`
	width: 100%;
	height: 45vh;
	img {
		width: 100%;
		height: 45vh;
	}
`;
const ContentsBrush = styled.div`
    width: 100%
	height: 100%;
	position: absolute;
	top: 46%;
	left: 3%;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 20px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;

	h5 {
		margin-left: 5px;
	}
`;
const ContentsTitle = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 52%;
	left: 3%;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 16px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;
`;
const ContentsAddress = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 55%;
	left: 3%;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 12px;
	font-weight: 700;
	line-height: 100%;
	color: #999999;
`;
const ContentsInfos = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 59%;
	left: 3%;

	font-family: "Pretendard";
	font-style: regular;
	font-size: 16px;
	font-weight: 400;
	line-height: 100%;
	color: black;
`;
const LineBreak = styled.div`
	position: absolute;
	width: 100%;
	height: 0px;
	top: 65%;
	border: 2px solid #f5f5f5;
`;
const UserProfile = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 68%;
	left: 4%;
	
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: "Pretendard";
	font-style: bold;
	font-size: 12px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;

	img {
		margin-right: 10px;
	}
`;
const LineBreak2 = styled.div`
	position: absolute;
	width: 90%;
	height: 0px;
	left: 4%;
	top: 75%;
	border: 1px solid #f5f5f5;
`;
const MoreContents = styled.div`
	position: absolute;
	margin: auto;
	left: 6%;
	top: 75%;
	width: 94%;
	height: 3rem;

	display: flex;
	align-items: center;
	justify-content: left;
	border: none;
	border-radius: 5px;

	color: #464646;
	font-family: "Pretendard";
	font-style: regular;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
`;
const LineBreak3 = styled.div`
	position: absolute;
	width: 90%;
	height: 0px;
	left: 4%;
	top: 81%;
	border: 1px solid #f5f5f5;
`;
const ReportContents = styled.div`
	position: absolute;
	margin: auto;
	left: 6%;
	top: 81%;
	width: 94%;
	height: 3rem;

	display: flex;
	align-items: center;
	justify-content: left;
	border: none;
	border-radius: 5px;

	color: #ea3343;
	font-family: "Pretendard";
	font-style: regular;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
`;
const LineBreak4 = styled.div`
	position: absolute;
	width: 90%;
	height: 0px;
	left: 4%;
	top: 87%;
	border: 1px solid #f5f5f5;
`;
const Bookmark = styled.div`
	position: absolute;
	width: 52px;
	height: 52px;
	left: 3%;
	top: 90%;
	border: 1px solid #e2e2e2;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Comment = styled.div`
	position: absolute;
	width: 72px;
	height: 52px;
	left: 20%;
	top: 90%;
	background-color: #white;
	border: 1px solid #e2e2e2;
	border-radius: 5px;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Resolve = styled.div`
	position: absolute;
	width: 50%;
	height: 52px;
	left: 44%;
	top: 90%;
	background-color: #6ac47a;
	border-radius: 5px;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
`;
