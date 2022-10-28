import React, { useState, useCallback } from "react";
import styled from "styled-components";
import GlobalContext from "../../../common/context/store";
import "./UploadScreen.css";
import { Link } from "react-router-dom";
import UploadAddButton from "./UploadAddButton.js";
import UploadImage from "./UploadImage.js";

const UploadQuestBoard = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	row-gap: 1rem;

	margin-top: 20px;
	margin-left: 0px;
	margin-right: 30px;

	label {
		cursor: pointer;
	}
`;

export default function UploadScreen() {
	const [files, setFiles] = useState([]);

	const onFileChange = useCallback(
		(e) => {
			if (e.target.files && e.target.files[0]) {
				if (files.length === 2) {
					alert("사진은 최대 2개까지 등록할 수 있어요");
					return;
				}

				setFiles((files) => [...files, e.target.files[0]]);
			}
		},
		[files.length]
	);
	const onRemovePicture = useCallback((idx) => {
		setFiles((files) => files.filter((file, index) => idx !== index));
	}, []);

	return (
		<div>
			<UploadScreenContainer>
				<Link to="/community">
					<BackBtn>
						<img src="/community/btn-back.png" />
					</BackBtn>
				</Link>
				<UploadTitle>거래 등록</UploadTitle>

				<ImageUploadContainer>
					<h3 className="trade-image">
						이미지<h4 className="trade-text">(1장 이상 필수)</h4>
					</h3>

					<UploadQuestBoard>
						<UploadAddButton onFileChange={onFileChange} />

						{files &&
							files.map((file, index) => {
								return (
									<UploadImage
										key={index}
										index={index}
										file={file}
										onRemovePicture={onRemovePicture}
									/>
								);
							})}
					</UploadQuestBoard>
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
const BackBtn = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	width: 1%;
	left: 3%;
	top: 6%;
	cursor: pointer;
`;

const UploadTitle = styled.div`
	position: absolute;
	display: flex;
	width: 100%;
	margin: auto;
	top: 6%;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #464646;
`;

const ImageUploadContainer = styled.div`
	position: absolute;
	display: grid;
	margin: auto;
	width: 100%;
	height: 2%;
	left: 3%;
	top: 14%;
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
