import React, { useContext, useEffect } from "react";
import "./Contents.css";
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
			<img className="contents-image" src={data.image} alt="contents" />
			<div className="contents-address">{address.current}주소</div>
			<div className="contents-title">{data.title}제목</div>
			<div className="contents-body">{data.price}가격</div>
			<div className="contents-brush">
				<img src="/community/brush.png" alt="brush" />
			</div>
		</div>
	);
}

// for (let i = 0; i < 갯수; i++){
//     { <Post data={받아온데이터} onClick={ } /> }

// }
