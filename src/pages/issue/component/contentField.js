import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import "./contentField.css";
import GlobalContext, { kakao, geocoder } from "../../../common/context/store";
import CategorySelector from "./CategorySelector";

const Content = styled.div`
	background-color: white;
`;

export default function ContentInputField({ onTitledChange, onBodyChange }) {
	const { state, setState, globalRef } = useContext(GlobalContext);
	const [address, setAddress] = useState("");

	useEffect(() => {
		const coords = new kakao.maps.LatLng(
			globalRef.current.userLocation.lat,
			globalRef.current.userLocation.lng
		);
		console.log(coords);
		console.log(globalRef.current.userLocation);
		geocoder.coord2RegionCode(
			coords.getLng(),
			coords.getLat(),
			(result, status) => {
				setAddress(
					result[0].region_1depth_name +
						" " +
						result[0].region_2depth_name +
						" " +
						result[0].region_3depth_name
				);
			}
		);
	}, [globalRef.current.userLocation]);

	return (
		<Content>
			<div>
				<div className="issue-title">이슈 제목</div>
				<input
					className="input-title"
					type="text"
					maxLength="50"
					onChange={onTitledChange}
					placeholder="제목을 입력해주세요."
				></input>
			</div>
			<hr className="line"></hr>
			<div className="issue-position">이슈 위치</div>
			<div className="position">
				{address}
				<div className="btn-re-input">재입력</div>
			</div>
			<div className="issue-point-category">이슈 카테고리</div>
			<CategorySelector />
			<div>
				<hr className="line2"></hr>
				<div className="content">무엇이 불편하셨나요?</div>
				<textarea
					type="text"
					onChange={onBodyChange}
					placeholder="불편사항을 적어주세요. (10자 이상)"
				></textarea>
			</div>
		</Content>
	);
}
