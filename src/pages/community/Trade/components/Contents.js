import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUserAddress } from "../../../../common/function/getUserAddress";

export default function Contents() {
	const [address, setAddress] = useState("");
	const navigate = useNavigate();

	const getAddress = async (lat, lng) => {
		const data = await getUserAddress(lat, lng, 4);
		setAddress(data);
	};

	useEffect(() => {
		getAddress(data.location.lat, data.location.lng);
	}, []);
	const onPreviewClicked = () => {
		navigate("/contentsinfo", { state: { address, ...data } });
	};

	return (
		<ContentsContainer onClick={onPreviewClicked}>
			<ContentsImage>
				<img src={data.image} alt="image" />
			</ContentsImage>
			<ContentsTitle>
				<div>{data.title}</div>
			</ContentsTitle>
			<ContentsAddress>
				<div>{address}</div>
			</ContentsAddress>
			<ContentsBrush>
				<img src="/brush.png" alt="brush" />
				<span>{data.price}</span>
			</ContentsBrush>
		</ContentsContainer>
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
	img {
		width: 100px;
		height: 100px;
	}
`;
const ContentsTitle = styled.div`
	position: absolute;
	width: 100px;
	left: 32%;
	top: 34%;
	display: flex;

	border: 1px solid black;

	font-weight: 700;
	font-family: "Inter";
	font-style: "regular";
	font-size: 16px;
	color: #464646;
`;
const ContentsAddress = styled.div`
	position: absolute;
	left: 32%;
	top: 18%;
	display: flex;

	font-weight: 400;
	font-family: "Inter";
	font-style: "regular";
	font-size: 12px;
	color: #464646;
`;
const ContentsBrush = styled.div`
	position: absolute;
	width: 10%;
	height: 100px;
	right: 3%;
	padding-top: 24px;

	border: none;
	background-color: #f5f6f8;

	img {
		width: 28px;
		height: 28px;

		margin: auto;
		margin-bottom: 20%;
		display: flex;
		align-items: center;
		justify-content: center;
		vertical-align: bottom;
	}
	span {
		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		vertical-align: bottom;

		font-family: Inter;
		font-style: bold;
		font-weight: 700;
		font-size: 12px;
		line-height: 15px;
		color: #6ac47a;
	}
`;
