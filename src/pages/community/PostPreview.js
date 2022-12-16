import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getUserAddress } from "../../common/function/getUserAddress";

export default function PostPreview({ data }) {
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
		<PostPreviewContainer onClick={onPreviewClicked}>
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
		</PostPreviewContainer>
	);
}

const PostPreviewContainer = styled.div`
	position  : relative;
	width: 100%;
	height: 120px;
	border-bottom: 1px solid #eeeeee;
<<<<<<< HEAD
<<<<<<< HEAD:src/pages/community/Quest/components/Contents.js
	margin-bottom: 6%;
	cursor: pointer;
=======
	padding 10px;
	
>>>>>>> new_valun:src/pages/community/PostPreview.js
=======
	padding 10px;
	
>>>>>>> new_valun
`;
const ContentsImage = styled.div`
	position: absolute;
	img {
		width: 100px;
		height: 100px;
		border-radius: 5px;
	}
`;
const ContentsTitle = styled.div`
	position: absolute;
	width: 45%;
	height: 47px;
	left: 120px;
	top: 50%;
	font-weight: 700;
	font-family: "Inter";
	font-style: "regular";
	font-size: 16px;
	color: #464646;
	overflow: hidden;
`;
const ContentsAddress = styled.div`
	position: absolute;
	left: 120px;
	top: 30px;
	display: flex;

	font-weight: 400;
	font-family: "Inter";
	font-style: "regular";
	font-size: 12px;
	color: #464646;
`;
const ContentsBrush = styled.div`
	position: absolute;
	width: 50px;
	height: 80px;
	top: 50%;
	transform: translate(-30%, -50%);
	right: 0px;
	padding-top: 16px;

	border-radius: 10px;

	border: none;
	background-color: #f5f6f8;

	img {
		width: 28px;
		height: 28px;
		margin: auto;

		display: flex;
		align-items: center;
		justify-content: center;
		vertical-align: bottom;
	}
	span {
		width: 100%;
		height: 50%;

		margin: auto;
		display: flex;
		align-items: center;
		justify-content: center;

		font-family: Inter;
		font-style: bold;
		font-weight: 700;
		font-size: 12px;
		line-height: 15px;
		color: #6ac47a;
	}
`;
