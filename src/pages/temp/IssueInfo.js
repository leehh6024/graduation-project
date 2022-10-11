import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function IssueInfo(props) {
	const { state, setState } = useContext(GlobalContext);
	const eachdata = state.selected;

	return (
		<IssueInfoContainer>
			<IssueInfoImage>
				<img src={state.selected[0].img} width="430px" height="430px"></img>
				{/* <Image src={state.selected[0].img}></Image> */}
			</IssueInfoImage>
			<UserProfileContainer>
				<UserProfilePhoto>
					<img src="locate2.png" />
				</UserProfilePhoto>
				<UserNickname>복정동</UserNickname>
				<IssueAddress>유저가 제보한 이슈의 위치가 떠야합니다.</IssueAddress>
			</UserProfileContainer>
			<IssueInfoTitle>{state.selected[0].title}</IssueInfoTitle>
			<IssueInfoClass>{state.selected[0].class}</IssueInfoClass>
			<IssueContents>{state.selected[0].body}</IssueContents>
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
	width: 430px;
	height: 912px;
`;

const IssueInfoImage = styled.div`
	width: 430px;
	height: 430px;
	border: 1px solid black;
	position: relative;
	left: 0px;
	top: 0px;
	bottom: 23px;
`;

const UserProfileContainer = styled.div`
	width: 430px;
	height: 100px;
	position: relative;
`;

// user프로필 사진창, 유저닉네임, 제보주소? 도 들어가야함
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
	width: 200px;
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
	width: 312px;
	height: 24px;
	position: relative;
	left: 16px;
	top: 26px;
	right: 46px;
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
	position: relative;
	left: 16px;
	top: 12px;
	right: 46px;
	text-align: left;
	font-weight: 400;
	font-size: 13px;
	font-family: "Pretendard";
	color: #878b93;
`;

// Body말고 게시글이나 다른 컴포넌트들이 들어가야함
const IssueContents = styled.div`
	width: 219px;
	height: 17px;
	position: relative;
	left: 16px;
	top: 43px;
	right: 46px;
	text-align: left;
	font-weight: 400;
	font-size: 13px;
	font-family: "Pretendard";
	color: #4d5158;
`;
