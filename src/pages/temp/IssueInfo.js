import GlobalContext from "../../common/context/store";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function IssueInfo() {
	const { state, setState } = useContext(GlobalContext);
	const eachdata = state.selected;

	return (
		<>
			<IssueInfoImage>
				<img src={state.selected[0].img} width="100%" height="100%"></img>
				{/* <Image src={state.selected[0].img}></Image> */}
			</IssueInfoImage>
			<Brush>
				<img src="small-brush.png" />
				1,000빗자루
			</Brush>
			<IssueInfoTitle>{state.selected[0].title}</IssueInfoTitle>
			<IssueInfoClass>{state.selected[0].class}</IssueInfoClass>

			<LineBreak2 />

			<IssueContents>{state.selected[0].body}</IssueContents>

			<LineBreak />
			<UserProfile>
				<img src="userprofile.png" />
				<div>조현성</div>
			</UserProfile>

			<MoreContents>조현성이 등록한 다른 이슈보기 {">"}</MoreContents>

			<BookMark>
				<img src="bookmark.png" />
			</BookMark>
			<Link to="/issueresolve">
				<Resolve>이슈 해결하기</Resolve>
			</Link>
			<Comment>
				<img src="comment.png" />
			</Comment>
		</>
	);
}

function Image(props) {
	const [img, setImage] = useState(null);
	useEffect(() => {
		setImage(props.img);
	}, [props.src]);
	return <img src={img}></img>;
}

const IssueInfoImage = styled.div`
	width: 100%;
	height: 40%;
	border: 1px solid black;
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
	font-size: 22px;
	font-weight: 700;
	line-height: 100%;
	color: #464646;
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
const IssueInfoClass = styled.div`
	 width: 100%
    height: 100%;
	position: absolute;
	top: 57%;
	left: 3%;

	font-family: "Pretendard";
	font-style: Bold;
	font-size: 12px;
	font-weight: 700;
	line-height: 100%;
	color: #999999;
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
	top: 77%;
	border: 2px solid #f5f5f5;
`;
const UserProfile = styled.div`
    width: 100%
    height: 100%;
	position: absolute;
	top: 78%;
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
`;
const MoreContents = styled.div`
	position: absolute;
	margin: auto;
	left: 6%;
	top: 83%;
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
	width: 12rem;
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
