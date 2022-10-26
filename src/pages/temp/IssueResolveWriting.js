import React, { useState, useCallback } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store";
import "./IssueResolveWriting.css";
import { Link } from "react-router-dom";
import ResolveAddButton from "./ResolveAddButton.js";
import ResolveImage from "./ResolveImage.js";

const IssueResolveBoard = styled.div`
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

export default function IssueResolveWriting() {
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
				<Link to="/issueresolve">
					<img className="btn-back" src="/community/btn-back.png" />
				</Link>
				<UploadTitle>이슈 해결하기</UploadTitle>

				<ImageUploadContainer>
					<h3 className="issue-resolve-image">
						이슈 해결 이미지
						<h4 className="issue-resolve-need">(1장 이상 필수)</h4>
					</h3>

					<IssueResolveBoard>
						<ResolveAddButton onFileChange={onFileChange} />

						{files &&
							files.map((file, index) => {
								return (
									<ResolveImage
										key={index}
										index={index}
										file={file}
										onRemovePicture={onRemovePicture}
									/>
								);
							})}
					</IssueResolveBoard>
				</ImageUploadContainer>

				<TradeTitleContainer>
					<h3 className="issue-category">이슈 카테고리</h3>
					<input
						className="input-trade-name"
						type="text"
						placeholder="이슈 유형을 입력해주세요"
					/>
				</TradeTitleContainer>

				<TradeInfoContainer>
					<h3 className="resolve-info">이슈 해결 방법</h3>
					<input
						className="input-resolve-info"
						type="text"
						placeholder="이슈를 해결할 때 사용한 밥법을 입력해 주세요."
					/>
				</TradeInfoContainer>

				<Link to="/issueresolve">
					<RegisterTrade>
						<div>1,200 빗자루 획득하기</div>
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
