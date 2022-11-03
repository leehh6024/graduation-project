import GlobalContext from "../../common/context/store";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const BackBtn = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	width: 1%;
	left: 3%;
	top: 6%;
	cursor: pointer;
`;

export default function IssueInfo() {
	const { state: globalState, setState } = useContext(GlobalContext);
	const { state } = useLocation();
	return (
		<IssueInfoContainer>
			<Link to="/">
				<BackBtn>
					<img src="/community/btn-back.png" />
				</BackBtn>
			</Link>
			<IssueInfoImage>
				<img src={globalState.selected[0].img} width="100%" height="100%"></img>
				{/* <Image src={state.selected[0].img}></Image> */}
			</IssueInfoImage>
			<Brush>
				<img src="small-brush.png" />
				2,000 빗자루
			</Brush>
			<IssueInfoTitle>
				{globalState.selected[0].title
					? globalState.selected[0].title
					: "이슈에 대한 제목이 없어요."}
			</IssueInfoTitle>

			<IssueAddress>{state.address}</IssueAddress>

			<IssueClass>
				{globalState.selected[0].category == 1 && "생활 폐기물"}
				{globalState.selected[0].category == 2 && "불연성 건설폐기물"}
				{globalState.selected[0].category == 3 && "가연성 건설폐기물"}
				{globalState.selected[0].category == 4 && "혼합 건설폐기물"}
				{globalState.selected[0].category == 5 && "사업장 일반폐기물"}
				{globalState.selected[0].category == 0 && "폐기물 분류 없음"}
			</IssueClass>
			<LineBreak2 />
			<IssueContents>{globalState.selected[0].body}</IssueContents>
			<LineBreak />
			<UserProfile>
				<img src="userprofile.png" />
				<div>조현성</div>
			</UserProfile>
			<MoreContents>조현성님이 등록한 다른 이슈보기 {">"}</MoreContents>
			<BookMark>
				<img src="bookmark.png" />
			</BookMark>
			<Link to="/issueresolve">
				<Resolve>이슈 해결하기</Resolve>
			</Link>
			<Comment>
				<img src="comment.png" />
			</Comment>
		</IssueInfoContainer>
	);
}

function Image(props) {
	const [img, setImage] = useState(null);
	useEffect(() => {
		setImage(props.img);
	}, [props.src]);
	return <img src={img}></img>;
}

const IssueInfoContainer = styled.div`
	position: absolute;
	width: 100%;
	height: calc(var(--vh, 1vh) * 100);
	background-color: white;
`;
const IssueInfoImage = styled.div`
	width: 100%;
	height: 40%;
	position: absolute;
`;
const Brush = styled.div`
	width: 100%
	height: 100%;
	position: absolute;
	top: 42%;
	left: 3%;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Pretendard";
	font-style: normal;
	font-size: 20px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;

	img {
		margin-right: 6px;
	}
`;
const IssueInfoTitle = styled.div`
	width: 100%
    height: 100%;
	position: absolute;
	top: 48%;
	left: 3%;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 16px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;
`;
const IssueAddress = styled.div`
	width: 100px
    height: 100px;
	position: absolute;
	top: 52%;
	left: 3%;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 12px;
	font-weight: 700;
	line-height: 100%;
	color: #999999;
`;
const IssueClass = styled.div`
	position: absolute;
	top: 56%;
	left: 3%;
	width: 25%;
	height: 3.5%;

	border-radius: 12px;
	background-color: #6ac47a;

	display: grid;
	align-items: center;
	justify-content: center;

	font-family: "Pretendard";
	font-style: regular;
	font-weight: 400;
	font-size: 12px;
	color: white;
`;
const LineBreak2 = styled.div`
	position: absolute;
	width: 90%;
	height: 0px;
	left: 4%;
	top: 62%;
	border: 1px solid #f5f5f5;
`;
const IssueContents = styled.div`
	width: 100%
    height: 100%;
	position: absolute;
	top: 64%;
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
	top: 74%;
	border: 2px solid #f5f5f5;
`;
const UserProfile = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 76%;
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
		margin-right: 6px;
	}
`;
const MoreContents = styled.div`
	position: absolute;
	margin: auto;
	left: 6%;
	top: 82%;
	width: 94%;
	height: 3rem;

	display: flex;
	align-items: center;
	justify-content: left;
	border: none;
	border-radius: 5px;

	color: #464646;
	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 14px;
	line-height: 17px;
`;
const BookMark = styled.div`
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
	width: 52%;
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
	font-size: 16px;
	line-height: 21px;
`;
