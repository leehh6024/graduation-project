import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { API } from "../../service.js";
import { Link } from "react-router-dom";
import "./component/contentField.css";
import Preview from "./component/imagePreview";
import ImageUploadButton from "./component/imageUploadButton";
import CategorySelector from "./component/classSelectList";
import ContentInputField from "./component/contentField";

const Issue = styled.div`
	position: absolute;
	text-align: center;
	align: center;
	width: 100%;
	justify-content: center;
	align-items: center;
	background-color: white;
	margin: auto;
	min-height: 100vh;
	vertical-align: middle;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export default function IssuePage() {
	const { state, setState, globalRef } = useContext(GlobalContext);
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [category, setCategory] = useState(0);
	const [imagePreview, setImagePreview] = useState(null);

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

		try {
			const { data } = await API.createIssue(formData);
		} catch (err) {
			alert(err.response.data.message);
		}
	};

	const onTitledChange = (e) => setTitle(e.target.value);
	const onBodyChange = (e) => setBody(e.target.value);
	const onCategoryChange = (e) => setCategory(e.target.value);

	return (
		<Issue>
			{image && <Preview src={imagePreview} />}

			{!image && <ImageUploadButton onUpload={onImageUpload} />}

			{/* {image && <CategorySelector onCategoryChange={onCategoryChange} />} */}
			{image && (
				<ContentInputField
					onTitledChange={onTitledChange}
					onBodyChange={onBodyChange}
				/>
			)}
			{image && (
				// <Link to="/">
				<button
					className="btn-submit-issue"
					type="submit"
					onClick={createIssue}
				>
					이슈 등록하기
				</button>
				// </Link>
			)}
		</Issue>
	);
}
