import { useState, useContext } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store";
import { kakao } from "../../main/components/Map";

const Content = styled.div`
	margin: auto;
	background-color: white;
`;

const geocoder = new kakao.maps.services.Geocoder();

function ContentInputField({ onTitledChange, onBodyChange }) {
	const { state, setState } = useContext(GlobalContext);
	const [address, setAddress] = useState("");

	useEffect(() => {
		const coords = new kakao.maps.LatLng(
			state.userLocation.lat,
			state.userLocation.lng
		);
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
	}, [state.userLocation]);

	return (
		<Content>
			<div>
				<input
					style={{
						position: "absolute",
						left: "24px",
						top: "466px",
						width: "178px",
						height: "24px",
						fontSize: "20px",
						border: "none",
						fontFamily: "Pretendard",
						fontWeight: "700",
						fontStyle: "bold",
					}}
					type="text"
					onChange={onTitledChange}
					placeholder="제목을 입력해주세요"
				></input>
			</div>
			<hr
				style={{
					position: "absolute",
					width: "398px",
					height: "0px",
					left: "16px",
					top: "506px",
					border: "1px solid #F5F5F5",
				}}
			></hr>
			<div
				style={{
					position: "absolute",
					left: "24px",
					top: "522px",
					width: "27px",
					height: "18px",
					fontSize: "15px",
					fontFamily: "Pretendard",
					fontWeight: "700",
					fontStyle: "normal",
					lineHeight: "18px",
				}}
			>
				주소
			</div>
			<div
				style={{
					position: "absolute",
					left: "20px",
					top: "542px",
					width: "144px",
					height: "18px",
					fontSize: "12px",
					fontFamily: "Pretendard",
					fontWeight: "400",
					fontStyle: "normal",
					lineHeight: "18px",
				}}
			>
				{address}
			</div>
			<div>
				<button
					style={{
						position: "absolute",
						left: "170px",
						top: "540px",
						width: "44px",
						height: "16px",
						fontSize: "8px",
						fontFamily: "Pretendard",
						fontWeight: "400",
						fontStyle: "normal",
						borderRadius: "5px",
						backgroundColor: "#333333",
						lineHeight: "10px",
						color: "white",
					}}
				>
					재입력
				</button>
			</div>
			<div
				style={{
					position: "absolute",
					left: "24px",
					top: "572px",
					width: "54px",
					height: "18px",
					fontSize: "15px",
					fontFamily: "Pretendard",
					fontWeight: "700",
					fontStyle: "normal",
					lineHeight: "18px",
				}}
			>
				카테고리
			</div>

			<div>
				<textarea
					style={{
						position: "absolute",
						left: "24px",
						top: "631px",
						width: "382px",
						height: "152px",
						fontSize: "13px",
						border: "none",
						fontFamily: "Pretendard",
						fontWeight: "700",
						fontStyle: "bold",
						backgroundColor: "#F5F5F5",
					}}
					type="text"
					onChange={onBodyChange}
					placeholder="내용을 작성해주세요."
				></textarea>
			</div>
		</Content>
	);
}

export default ContentInputField;
