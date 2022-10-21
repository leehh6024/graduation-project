import GlobalContext from "../../common/context/store";
import { useContext, useState, useEffect } from "react";
import styled from "styled-components";

export default function IssueInfo() {
	const { state, setState } = useContext(GlobalContext);
	const eachdata = state.selected;

	return (
		<>
			<IssueInfoContainer>
				<IssueInfoImage>
					<img src={state.selected[0].img} width="98%" height="42vh"></img>
					{/* <Image src={state.selected[0].img}></Image> */}
				</IssueInfoImage>
				<UserProfileContainer>
					<UserProfilePhoto>프로필사진</UserProfilePhoto>
					<UserNickname>복정동</UserNickname>
					<IssueAddress>유저가 제보한 이슈의 위치가 떠야합니다.</IssueAddress>
				</UserProfileContainer>
				<IssueInfoTitle>{state.selected[0].title}</IssueInfoTitle>
				<IssueInfoClass>{state.selected[0].class}</IssueInfoClass>
				<IssueContents>{state.selected[0].body}</IssueContents>
				<IssueInfoFooter>
					<Liked></Liked>
					<Resolve>해결 / 1,330 빗자루</Resolve>
					<Comment>댓글</Comment>
					<Report>신고</Report>
				</IssueInfoFooter>
			</IssueInfoContainer>
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

const IssueInfoContainer = styled.div`
	position: absolute;
	text-align: center;
	align: center;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: white;
	margin: auto;
	min-height: 100vh;
	vertical-align: middle;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const IssueInfoImage = styled.div`
	width: 98%;
	height: 42vh;
	border: 1px solid black;
	position: absolute;
	left: 3px;
	top: 3px;
`;

const UserProfileContainer = styled.div`
	width: 430px;
	height: 100px;
	position: absolute;
	top: 14px;
`;

const UserProfilePhoto = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50px;
	border: 1px solid grey;
	position: absolute;
	left: 16px;
	top: 446px;
`;

const UserNickname = styled.div`
	width: 90px;
	height: 19px;
	border: 1px solid grey;
	position: absolute;
	left: 74px;
	top: 450px;
	text-align: left;
	font-weight: 700;
	font-size: 16px;
	line-height: 16px;
	font-family: "Pretendard";
	font-styled: normal;
`;

const IssueAddress = styled.div`
	width: 300px;
	height: 16px;
	border: 1px solid grey;
	position: absolute;
	left: 74px;
	top: 477px;
	text-align: left;
	font-weight: 400;
	font-size: 13x;
	line-height: 16px;
	font-family: "Pretendard";
	font-styled: normal;
`;

const IssueInfoTitle = styled.div`
	width: 362px;
	height: 24px;
	position: absolute;
	left: 16px;
	top: 543px;
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
	top: 579px;
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
	top: 619px;
	text-align: left;
	font-weight: 400;
	font-size: 16px;
	font-style: normal;
	line-height: 19px;
	font-family: "Pretendard";
	color: #4d5158;
`;

const IssueInfoFooter = styled.div`
	width: 430px;
	height: 110px;
	position: absolute;
	left: 0px;
	top: 788px;
	background-color: #ffffff;
	box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.05);
`;

const Liked = styled.div`
	position: absolute;
	width: 23px;
	height: 36px;
	left: 20px;
	top: 39px;
	border: 1px solid black;
`;

const Resolve = styled.div`
	position: absolute;
	width: 172px;
	height: 54px;
	left: 62px;
	top: 28px;
	background-color: #0ee163;
	border-radius: 12px;
	color: white;
	text-align: center;
`;

const Comment = styled.div`
	position: absolute;
	width: 86px;
	height: 54px;
	left: 242px;
	top: 28px;
	background-color: #0ee163;
	border-radius: 12px;
	color: white;
	text-align: center;
`;

const Report = styled.div`
	position: absolute;
	width: 86px;
	height: 54px;
	left: 336px;
	top: 28px;
	background-color: #de6b5a;
	border-radius: 12px;
	color: white;
	text-align: center;
`;
