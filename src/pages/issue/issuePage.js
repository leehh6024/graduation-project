import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { API } from "../../service.js";
import { Link } from "react-router-dom";
import "./component/contentField.css";
import Preview from "./component/imagePreview";
import ImageUploadButton from "./component/imageUploadButton";
import ContentInputField from "./component/contentField";
import CategorySelector from "./component/CategorySelector.js";

export default function IssuePage() {
	const { state, setState, globalRef } = useContext(GlobalContext);
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [category, setCategory] = useState(0);
	const [imagePreview, setImagePreview] = useState(null);
	const [modal, setModal] = useState(false);

	const onModalOpen = () => {
		setModal(true);
	};
	const onModalClose = () => {
		setModal(false);
	};

	const onImageUpload = (e) => {
		const uploadedImage = e.target.files[0];
		setImage(uploadedImage);

		const reader = new FileReader();
		reader.readAsDataURL(uploadedImage);
		return new Promise((resolve, reject) => {
			reader.onload = () => {
				setImagePreview(reader.result);
				resolve();
			};
		});
	};

	const createIssue = async () => {
		const formData = new FormData();

		const issue = {
			title,
			class: category,
			body,
			location: {
				lat: Number(globalRef.current.userLocation.lat),
				lng: Number(globalRef.current.userLocation.lng),
			},
		};
		formData.append("title", issue.title);
		formData.append("class", issue.class);
		formData.append("body", issue.body);
		formData.append("lat", issue.location.lat);
		formData.append("lng", issue.location.lng);
		formData.append("image", image);

		const data = await API.createIssue(formData);
		if (!data.success) alert(data.message);
	};

	const onTitledChange = (e) => setTitle(e.target.value);
	const onBodyChange = (e) => setBody(e.target.value);
	const onCategoryChange = (e) => setCategory(e.target.value);

	return (
		<>
			<Issue>
				{image && <Preview src={imagePreview} />}

				{!image && <ImageUploadButton onUpload={onImageUpload} />}

				{image && <CategorySelector onCategoryChange={onCategoryChange} />}
				{image && (
					<ContentInputField
						onTitledChange={onTitledChange}
						onBodyChange={onBodyChange}
					/>
				)}
				{image && (
					<button
						className="btn-submit-issue"
						type="submit"
						onClick={() => {
							createIssue();
							onModalOpen();
						}}
					>
						이슈 등록하기
					</button>
				)}
			</Issue>
			{modal && (
				<>
					<ModalContainer />
					<Modal onClick={onModalClose}>
						이슈 등록이
						<br />
						완료되었습니다.
						<Link to="/">
							<ReturnCommunityBtn>홈으로 돌아가기</ReturnCommunityBtn>
						</Link>
					</Modal>
				</>
			)}
		</>
	);
}

const Issue = styled.div`
	position: absolute;
	width: 100%;
	background-color: white;
	min-height: 100vh;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;
const ReturnCommunityBtn = styled.div`
	position: absolute;
	width: 90%;
	height: 20%;
	top: 70%;
	right: 5%;

	border: none;
	border-radius: 5px;
	background-color: #6ac47a;

	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: auto;

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 15px;
	line-height: 21px;
	color: white;
`;
const ModalContainer = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;

	display: flex;
	background-color: grey;
	opacity: 0.4;
`;

const Modal = styled.div`
	position: absolute;
	width: 60%;
	height: 20%;
	left: 50%;
	top: 50%;
	padding-top: 4%;
	padding-bottom: 16%;

	background-color: white;
	border-radius: 15px;

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	transform: translate(-50%, -55%);

	font-family: "Pretendard";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 21px;
	color: #464646;
`;
