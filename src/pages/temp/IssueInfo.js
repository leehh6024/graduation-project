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
			<IssueContents>{state.selected[0].body}</IssueContents>

			<IssueInfoFooter>
				<Liked>
					<img src="bookmark.png" />
				</Liked>
				<Link to="/issueresolve">
					<Resolve>이슈 해결하기</Resolve>
				</Link>
				<Comment>
					<img src="comment.png" />
				</Comment>
				<Report>신고</Report>
			</IssueInfoFooter>
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
	width: 160px;
	height: 29px;
	position: absolute;
	left: 3%;
	top: 43%;
	text-align: left;
	font-weight: 700;
	font-size: 24px;
	line-height: 16px;
	font-family: "Pretendard";
	font-styled: normal;
`;

const IssueInfoTitle = styled.div`
	width: 362px;
	height: 24px;
	position: absolute;
	left: 16px;
	top: 49%;
	text-align: left;
	font-weight: 700;
	font-size: 20px;
	font-family: "Pretendard";
	letter-spacing: 0.03em;
	line-height: 24px;
`;

const IssueInfoClass = styled.div`
	width: 136px;
	height: 16px;
	position: absolute;
	left: 16px;
	top: 53%;
	text-align: left;
	font-weight: 400;
	font-size: 13px;
	font-style: normal;
	line-height: 16px;
	font-family: "Pretendard";
	color: #878b93;
`;

// Body말고 게시글이나 다른 컴포넌트들이 들어가야함
const IssueContents = styled.div`
	width: 379px;
	height: 100px;
	position: absolute;
	left: 16px;
	top: 56%;
	text-align: left;
	font-weight: 400;
	font-size: 16px;
	font-style: normal;
	line-height: 19px;
	font-family: "Pretendard";
	color: #4d5158;
`;

const IssueInfoFooter = styled.div`
	width: 100%;
	height: 100px;
	position: absolute;
	left: 0px;
	top: 75%;
	background-color: #ffffff;
	box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);

	font-size: 18px;
	font-family: Pretendard;
	font-weight: 700;
`;

const Liked = styled.div`
	position: absolute;
	width: 30px;
	height: 36px;
	left: 3%;
	top: 39px;
	border: 1px solid #e2e2e2;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Resolve = styled.div`
	position: absolute;
	width: 172px;
	height: 54px;
	left: 36%;
	top: 28px;
	background-color: #6ac47a;
	border-radius: 5px;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Comment = styled.div`
	position: absolute;
	width: 86px;
	height: 54px;
	left: 12%;
	top: 28px;
	background-color: #white;
	border: 1px solid #e2e2e2;
	border-radius: 12px;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Report = styled.div`
	position: absolute;
	width: 54px;
	height: 54px;
	left: 82%;
	top: 28px;
	background-color: #de6b5a;
	border-radius: 12px;
	color: white;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
`;
