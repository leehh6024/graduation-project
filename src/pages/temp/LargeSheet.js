import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function LargeSheet({ props, isSpecial }) {
	const { state, setState } = useContext(GlobalContext);
	const eachdata = state.selected;

	return (
		<>
			<LargeBottomSheetContainer>
				<>
					<LargeImageSheetContainer>
						<img src={state.selected[0].img} width="430px" height="211px"></img>
						{/* <Image src={state.selected[0].img}></Image> */}
					</LargeImageSheetContainer>
					<LargeUserProfileContainer></LargeUserProfileContainer>
					<LargeSheetTitle>{state.selected[0].title}</LargeSheetTitle>
					<LargeSheetBody>{state.selected[0].body}</LargeSheetBody>
					<LargeSheetClass>{state.selected[0].class}</LargeSheetClass>
				</>
			</LargeBottomSheetContainer>
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

const LargeBottomSheetContainer = styled.div`
	width: 430px;
	height: 711px;
	position: relative;
`;

const LargeImageSheetContainer = styled.div`
	width: 430px;
	height: 211px;
	border: 1px solid black;
	position: relative;
	left: 0px;
	top: 3px;
	bottom: 23px;
`;

const LargeUserProfileContainer = styled.div`
	width: 430px;
	height: 100px;
	position: relative;
`;

const LargeSheetTitle = styled.div`
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

const LargeSheetClass = styled.div`
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
const LargeSheetBody = styled.div`
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
