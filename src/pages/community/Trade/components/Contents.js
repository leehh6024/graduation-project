import React, { useState } from "react";
import styled from "styled-components";
import { API } from "../../../../service.js";
import { Link } from "react-router-dom";

export default function Contents() {
	// API에서 받아온 데이터로 address, title, contentsImage, Brush 개수 넣어주야지
	const [image, setImage] = useState("");
	const [address, setAddress] = useState("");
	const [title, setTitle] = useState("");
	// const [numOfBrush, setNumOfBrush] = useState(0);

	return (
		<div>
			<Link to="/contentsinfo">
				<ContentsContainer>
					<ContentsImage>
						<img src="/distance.png" alt="image" />
					</ContentsImage>
					<ContentsAddress>
						<div>{address}복정동</div>
					</ContentsAddress>
					<ContentsTitle>
						<div>{title}분리수거 도와주실분</div>
					</ContentsTitle>
					<ContentsBrush>
						<img src="/community/brush.png" alt="brush" />
						{/* {numOfBrush} */}
					</ContentsBrush>
				</ContentsContainer>
			</Link>
		</div>
	);
}

const ContentsContainer = styled.div`
	position: relative;
	width: 100%;
	height: 14vh;
	border-bottom: 1px solid #eeeeee;
	margin-bottom: 2%;
`;
const ContentsImage = styled.div`
	position: absolute;
	left: 3%;
	width: 100px;
	height: 100px;
	border: 1px solid #eeeeee;
`;
const ContentsAddress = styled.div`
	position: absolute;
	left: 100%;
	width: 16%;
	left: 32%;
	top: 18%;
	display: flex;

	font-weight: 400;
	font-family: "Inter";
	font-style: "regular";
	font-size: 12px;
	color: #464646;
`;
const ContentsTitle = styled.div`
	position: absolute;
	width: 50%;
	left: 32%;
	top: 34%;
	display: flex;

	font-weight: 700;
	font-family: "Inter";
	font-style: "regular";
	font-size: 16px;
	color: #464646;
`;
const ContentsBrush = styled.div`
	position: absolute;
	right: 3%;
	width: 50px;
	height: 100px;

	background-color: #f5f6f8;
`;
