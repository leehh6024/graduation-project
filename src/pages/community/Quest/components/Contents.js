import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { geocoder, kakao } from "../../../../common/context/store";
import { useRef } from "react";

export default function ContentPreview({ data }) {
	const address = useRef("");
	useEffect(() => {
		const coords = new kakao.maps.LatLng(data.location.lat, data.location.lng);
		geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), (result, status) => {
			address.current =
				result[0].region_1depth_name +
				" " +
				result[0].region_2depth_name +
				" " +
				result[0].region_3depth_name;
		});
	}, []);

	return (
		<div>
			<ContentsContainer>
				<ContentsImage>
					<img src={data.image} alt="image" />
				</ContentsImage>
				<ContentsTitle>
					<div>{data.title}</div>
				</ContentsTitle>
				<ContentsAddress>
					<div>{address.current}</div>
				</ContentsAddress>
				<ContentsBrush>
					<img src="/community/brush.png" alt="brush" />
					{data.price}
				</ContentsBrush>
			</ContentsContainer>
			{/* <img className="contents-image" src={data.image} alt="contents" />
			<div className="contents-address">{address.current}주소</div>
			<div className="contents-title">{data.title}제목</div>
			<div className="contents-body">{data.price}가격</div>
			<div className="contents-brush">
				<img src="/community/brush.png" alt="brush" />
			</div> */}
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
	img {
		width: 100px;
		height: 100px;
	}
	border: 1px solid #eeeeee;
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
const ContentsTitle = styled.div`
	position: absolute;
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
	img {
		width: 50px;
		height: 100px;
	}

	background-color: #f5f6f8;
`;
