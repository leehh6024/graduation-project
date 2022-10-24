import React from "react";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store";
import { useContext } from "react";
import "./UploadScreen.css";
import { Link } from "react-router-dom";

export default function UploadScreen() {
	return (
		<div>
			<UploadScreenContainer>
				<Link to="/community">
					<img className="btn-back" src="/community/btn-back.png" />
				</Link>
				<UploadTitle>거래 등록</UploadTitle>

				<ImageUploadContainer>
					<h3 className="trade-image">이미지</h3>
					<h4 className="trade-text">(1장 이상 필수)</h4>
					<ImageUploadButton className="btn-image-upload-button">
						<img
							src="/community/btn-upload-image.png"
							alt="ss"
							style={{
								width: "30%",
								height: "40%",
								margin: "auto",
								verticalAlign: "middle",
							}}
						/>
						<label htmlFor="upload-image" />
						<input
							id="upload-image"
							type="file"
							accept="image/jpg, image/png, image/jpeg"
							// onChange={onUpload}
						/>
					</ImageUploadButton>
				</ImageUploadContainer>

				<TradeTitleContainer>
					<h3 className="trade-title">거래명</h3>
					<input
						className="input-trade-name"
						type="text"
						placeholder="상품명을 입력해주세요"
					/>
				</TradeTitleContainer>

				<TradeInfoContainer>
					<h3 className="trade-info">거래 설명</h3>
					<input
						className="input-trade-info"
						type="text"
						placeholder="퀘스트에 대한 정보를 입력해 주세요. 개인정보 유출에 유의해 주세요. (1000자)"
					/>
				</TradeInfoContainer>

				<BrushContainer>
					<h3 className="brush">빗자루 개수 입력</h3>
					<input
						className="input-brush"
						type="text"
						placeholder="빗자루 개수 입력 (최소 100개 이상)"
					/>
				</BrushContainer>

				<Link to="/community">
					<RegisterTrade>
						<div>거래 등록하기</div>
					</RegisterTrade>
				</Link>
			</UploadScreenContainer>
		</div>
	);
}

const UploadScreenContainer = styled.div`
	position: absolute;
	width: 100%;
	background-color: white;
	min-height: 100vh;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

const UploadTitle = styled.div`
	position: absolute;
	display: inline-block;
	margin: auto;
	transform: translate(-50%, 150%);
	left: 50%;
	top: 3%;
	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #464646;
`;

const ImageUploadContainer = styled.div`
	position: absolute;
	display: flex;
	margin: auto;
	left: 3%;
	top: 14%;
`;

const ImageUploadButton = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	position: absolute;
	width: 80%;
	height: 600%;
	border: 1px solid #999999;
	border-radius: 18px;
	margin: auto;
	left: 3%;
	top: 200%;

	& > img {
		width: 50px;
		height: 50px;
	}

	& > label {
		width: 100%;
		height: 100%;
		position: absolute;
	}

	& > input {
		display: none;
	}

	.button-upload {
		width: 100%;
		object-fit: contain;
		margin: auto;
	}

	label {
		cursor: pointer;
	}
`;

const TradeTitleContainer = styled.div`
	position: absolute;
	display: block;
	margin: auto;
	left: 3%;
	top: 34%;
	width: 94%;
`;

const TradeInfoContainer = styled.div`
	position: absolute;
	display: block;
	margin: auto;
	left: 3%;
	top: 47%;
	width: 94%;
`;

const BrushContainer = styled.div`
	position: absolute;
	display: block;
	margin: auto;
	left: 3%;
	top: 64%;
	width: 94%;
`;

const RegisterTrade = styled.div`
	position: absolute;
	margin: auto;
	left: 3%;
	top: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 94%;
	border: none;
	border-radius: 5px;
	background-color: #6ac47a;
	color: white;
	height: 3rem;
	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
`;
