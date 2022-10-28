import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Temp() {
	const { state, setState } = useContext(GlobalContext);

	return (
		<>
			<BottomSheetContainer>
				<BottomSheetTitle>{state.selected[0].title}</BottomSheetTitle>

				<BottomSheetClass>
					{/* map함수로 재구현필요~ */}
					<IssueClass>{state.selected[0].class}</IssueClass>
					<IssueClass>{state.selected[0].class}</IssueClass>
					<IssueClass>클래스데이터 받아와야함</IssueClass>
				</BottomSheetClass>

				<BottomAddressContainer>
					<div>(주소데이터받아와야함)경기도 성남시 수정구 복정로</div>
				</BottomAddressContainer>
				<Distance>
					<img src="distance.png" />
				</Distance>
			</BottomSheetContainer>
			<Link to="issueinfo">
				<IssueMore>이슈 자세히 보기</IssueMore>
			</Link>
		</>
	);
}

const BottomSheetContainer = styled.div`
	width: 100%;
	height: 24vh;
	position: relative;
	background-color: white;

	border-top: 2px solid #e8e8e8;
`;
const BottomSheetTitle = styled.div`
	position: absolute;
	width: 100%;
	left: 4%;
	top: 6%;

	display: flex;
	align-items: center;
	justify-content: left;

	color: #464646;
	font-family: "Pretendard";
	font-weight: 700;
	font-size: 20px;
`;
const BottomSheetClass = styled.div`
	position: absolute;
	width: 96%;
	height: 20%;
	left: 2%;
	top: 20%;

	// border: 1px solid black;

	display: flex;
	align-items: center;
	justify-content: left;
`;
const IssueClass = styled.div`
	position: relative;
	width: 22%;
	height: 80%;

	margin-right: 2%;
	border-radius: 10px;
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
const BottomAddressContainer = styled.div`
	position: absolute;
	width: 100%;
	left: 4%;
	top: 44%;

	display: flex;
	align-items: center;
	justify-content: left;

	color: #999999;
	font-family: "Pretendard";
	font-weight: 700;
	font-size: 12px;
`;
const Distance = styled.div`
	position: absolute;
	left: 82%;
	top: 20%;
`;
const IssueMore = styled.div`
	position: absolute;
	width: 96%;
	height: 24%;
	left: 2%;
	top: 70%;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 5px;
	background-color: #6ac47a;
	color: white;
	font-family: "Pretendard";
	font-weight: 700;
	font-size: 18px;
`;

// 나중에 사용될수도 있는 코드
// function Image(props) {
// 	const [img, setImage] = useState(null);
// 	useEffect(() => {
// 		setImage(props.img);
// 	}, [props.src]);
// 	return <img src={img}></img>;
// }
