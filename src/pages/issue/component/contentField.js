import { useState, useContext } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store";
import { kakao } from "../../main/components/Map";
import "./contentField.css";
import { setUserLocation } from "../../../common/function/setUserLocation";

const Content = styled.div`
	margin: auto;
	background-color: white;
`;

const geocoder = new kakao.maps.services.Geocoder();

function ContentInputField({ onTitledChange, onBodyChange }) {
	const { state, setState, globalRef } = useContext(GlobalContext);
	const [address, setAddress] = useState("");

	useEffect(() => {
		const coords = new kakao.maps.LatLng(
			globalRef.current.userLocation.lat,
			globalRef.current.userLocation.lng
		);
		console.log(coords);
		console.log(globalRef.current.userLocation);
		geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), (result, status) => {
			setAddress(
				result[0].region_1depth_name +
					" " +
					result[0].region_2depth_name +
					" " +
					result[0].region_3depth_name
			);
		});
	}, [globalRef.current.userLocation]);

	return (
		<Content>
			<div>
				<input
					className="input-title"
					type="text"
					onChange={onTitledChange}
					placeholder="제목을 입력해주세요"
				></input>
			</div>
			<hr className="line"></hr>
			<div className="address-title">주소</div>
			<div className="address">{address}</div>
			<div>
				<button className="btn-re-input">재입력</button>
			</div>
			<div className="category-title">카테고리</div>
			<div>
				<textarea
					type="text"
					onChange={onBodyChange}
					placeholder="내용을 작성해주세요."
				></textarea>
			</div>
		</Content>
	);
}

export default ContentInputField;
