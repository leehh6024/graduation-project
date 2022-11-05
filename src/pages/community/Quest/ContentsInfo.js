import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function ContentsInfo() {
	const { state } = useLocation();
	const [modal, setModal] = useState(false);

	const onModalOpen = () => {
		setModal(true);
	};
	const onModalClose = () => {
		setModal(false);
	};

	return (
		<>
			<ContentsInfoContainer>
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
				<Resolve onClick={onModalOpen}>해결 및 거래하기</Resolve>
				<Comment>
					<img src="comment.png" />
				</Comment>
			</ContentsInfoContainer>
			{modal && (
				<>
					<ModalContainer />
					<Modal>
						{state.userId} 님에게 메세지가
						<br />
						전송되었습니다.
						<Link to="/community">
							<ReturnCommunityBtn onClick={onModalClose}>
								퀘스트 및 거래 더 보기
							</ReturnCommunityBtn>
						</Link>
					</Modal>
				</>
			)}
		</>
	);
}

const ContentsInfoContainer = styled.div`
	position: absolute;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	background-color: white;
`;

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
	img {
		width: 100%;
		height: 35vh;
	}
`;
const ContentsBrush = styled.div`
    width: 100%
	height: 100%;
	position: absolute;
	top: 43%;
	left: 3%;

	display: flex;
	justify-content: center;
	align-items: center;

	h5 {
		margin-left: 5px;
		font-family: "Pretendard";
		font-style: Bold;
		font-size: 20px;
		font-weight: 700;
		line-height: 100%;
		color: #464646;
	}
`;
const ContentsTitle = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 50%;
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
	top: 53.5%;
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
	top: 57.5%;
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
	top: 64%;
	border: 2px solid #f5f5f5;
`;
const UserProfile = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 66%;
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
	top: 73%;
	border: 1px solid #f5f5f5;
`;
const MoreContents = styled.div`
	position: absolute;
	margin: auto;
	left: 6%;
	top: 73%;
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
	top: 80%;
	border: 1px solid #f5f5f5;
`;
const ReportContents = styled.div`
	position: absolute;
	margin: auto;
	left: 6%;
	top: 80%;
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
const ReturnCommunityBtn = styled.div`
	position: absolute;
	width: 90%;
	height: 25%;
	top: 65%;
	right: 5%;

	border: none;
	border-radius: 5px;
	background-color: #6ac47a;

	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 21px;
	color: white;
`;
const ModalContainer = styled.div`
	position: absolute;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);

	display: flex;
	background-color: grey;
	opacity: 0.4;
`;

const Modal = styled.div`
	position: absolute;
	width: 60%;
	left: 50%;
	transform: translate(-50%, 200%);
	padding-top: 4%;
	padding-bottom: 16%;

	background-color: white;
	border-radius: 15px;

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #464646;
`;
