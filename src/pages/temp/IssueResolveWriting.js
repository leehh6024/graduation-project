import React, { useState, useCallback, useContext } from "react";
import styled from "styled-components";
import GlobalContext from "../../common/context/store";
import "./IssueResolveWriting.css";
import { Link } from "react-router-dom";
import ResolveAddButton from "./ResolveAddButton.js";
import ResolveImage from "./ResolveImage.js";
import IssueCategorySelector from "./IssueCategorySelector.js";

export default function IssueResolveWriting() {
	const { state, setState } = useContext(GlobalContext);
	const [files, setFiles] = useState([]);

	const onFileChange = useCallback(
		(e) => {
			if (e.target.files && e.target.files[0]) {
				if (files.length === 3) {
					alert("사진은 최대 3개까지 등록할 수 있어요");
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
			<Link to="/issueresolve">
				<BackBtn>
					<img src="/community/btn-back.png" />
				</BackBtn>
			</Link>
			<IssueResolveHeader>이슈 해결하기</IssueResolveHeader>

			<IssueResolveTitle>
				<div className="issue-resolve-title">이슈 제목</div>
				<div className="issue-resolve-title-content">
					{state.selected[0].title
						? state.selected[0].title
						: "이슈에 대한 제목이 없어요."}
				</div>
			</IssueResolveTitle>

			<IssueResolveImageContainer>
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
			</IssueResolveImageContainer>

			<IssueCategoryContainer>
				<h3 className="issue-category">이슈 카테고리</h3>
				<IssueCategorySelector />
			</IssueCategoryContainer>

			<IssueResolveContainer>
				<h3 className="resolve-info">이슈 해결 방법</h3>
				<input
					className="input-resolve-info"
					type="text"
					maxLength="1000"
					placeholder="이슈를 해결할 때 사용한 밥법을 입력해 주세요."
				/>
			</IssueResolveContainer>

			<Link to="/">
				<RegisterTrade>
					<div>이슈 해결하고 빗자루 획득하기</div>
				</RegisterTrade>
			</Link>
		</div>
	);
}

const BackBtn = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	width: 1%;
	left: 3%;
	top: 6%;
	cursor: pointer;
`;
const IssueResolveHeader = styled.div`
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
const IssueResolveTitle = styled.div`
	position: absolute;
	display: grid;
	margin: auto;
	width: 100%;
	height: 2%;
	left: 3%;
	top: 14%;
`;

const IssueResolveImageContainer = styled.div`
	position: absolute;
	display: grid;
	margin: auto;
	width: 100%;
	height: 2%;
	left: 3%;
	top: 22%;
`;
const IssueResolveBoard = styled.div`
	display: grid;
	grid-template-columns: 0.4fr 0.4fr 0.4fr 0.4fr;
	row-gap: 1rem;
	width: 94%;

	margin-top: 20px;

	label {
		cursor: pointer;
	}
`;
const IssueCategoryContainer = styled.div`
	position: absolute;
	left: 3%;
	top: 41%;
	width: 94%;
	height: 8%;

	display: flex;
	margin: auto;
	justify-content: left;
	align-items: left;
`;
const IssueResolveContainer = styled.div`
	position: absolute;
	display: block;
	margin: auto;
	left: 3%;
	top: 54%;
	width: 94%;
`;
const RegisterTrade = styled.div`
	position: absolute;
	margin: auto;
	left: 3%;
	top: 92%;
	width: 94%;

	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;

	border: none;
	border-radius: 5px;
	background-color: #6ac47a;
	height: 3rem;

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: white;
`;
