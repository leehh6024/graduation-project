import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

export default function Temp(props) {
	const { state, setState } = useContext(GlobalContext);
	const eachdata = state.selected;

	return (
		<>
			<BottomSheetContainer>
				<ImageSheetContainer>
					<img src={state.selected[0].img} width="133px" height="100px"></img>
					{/* <Image src={state.selected[0].img}></Image> */}
				</ImageSheetContainer>
				<SheetTitle>{state.selected[0].title}</SheetTitle>
				<SheetBody>{state.selected[0].body}</SheetBody>
				<SheetClass>{state.selected[0].class}</SheetClass>
			</BottomSheetContainer>
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

const BottomSheetContainer = styled.div`
	width: 430px;
	height: 146px;
	position: relative;
`;

const ImageSheetContainer = styled.div`
	width: 133px;
	height: 100px;
	border: 1px solid black;
	position: absolute;
	left: 16px;
	top: 3px;
	bottom: 23px;
`;

const SheetTitle = styled.div`
	width: 219px;
	height: 17px;
	position: absolute;
	left: 165px;
	top: 18px;
	right: 46px;
	bottom: 8px;
	text-align: left;
	font-weight: 700;
	font-size: 14px;
	font-family: "Pretendard";
`;

const SheetBody = styled.div`
	width: 219px;
	height: 17px;
	position: absolute;
	left: 165px;
	top: 43px;
	right: 46px;
	bottom: 8px;
	text-align: left;
	font-weight: 400;
	font-size: 13px;
	font-family: "Pretendard";
	color: #4d5158;
`;

const SheetClass = styled.div`
	width: 219px;
	height: 16px;
	position: absolute;
	left: 165px;
	top: 67px;
	right: 46px;
	bottom: 8px;
	text-align: left;
	font-weight: 400;
	font-size: 13px;
	font-family: "Pretendard";
	color: #878b93;
`;
