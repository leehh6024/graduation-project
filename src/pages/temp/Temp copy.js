import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Temp() {
	const { state, setState } = useContext(GlobalContext);

	return (
		<Link to="issueinfo">
			<BottomSheetContainer>
				<BottomSheetTitle>{state.selected[0].title}</BottomSheetTitle>

				<BottomSheetClass>
					<IssueClass>
						{/* {state.selected[0].class} */}
						<div>혼합 건설폐기물</div>
					</IssueClass>
				</BottomSheetClass>
			</BottomSheetContainer>
		</Link>
	);
}

function Image(props) {
	const [img, setImage] = useState(null);
	useEffect(() => {
		setImage(props.img);
	}, [props.src]);
	return <img src={img}></img>;
}

const BottomSheetContainer = styled.button`
	width: 100%;
	height: 146px;
	position: absolute;
	background-color: white;
	border: 1px solid black;
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
	width: 100%;
	height: 20%;
	left: 4%;
	top: 26%;

	border: 1px solid black;

	display: flex;
	align-items: center;
	justify-content: left;
`;
const IssueClass = styled.div`
	position: absolute;
	width: 22%;
	height: 80%;

	border-radius: 10px;
	background-color: #6ac47a;

	display: flex;
	align-items: center;
	justify-content: center;

	font-family: "Pretendard";
	font-style: regular;
	font-weight: 400;
	font-size: 11px;
	color: white;
`;
