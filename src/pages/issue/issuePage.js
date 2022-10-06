import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Preview from "./component/imagePreview";
import ImageUploadButton from "./component/imageUploadButton";
import ContentInputField from "./component/contentField";
import CategorySelector from "./component/classSelectList";
import { API } from "../../service.js";

const Issue = styled.div`
	text-align: center;
	align: center;
	width: 100%;
	height: 100%;
	max-width: 430px;
	justify-content: center;
	align-items: center;
	background-color: white;
	margin: auto;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	max-width: 430px;
	min-width: 320px;
	margin: 0 auto;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export default function IssuePage() {
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [category, setCategory] = useState("");
	const [imgaePreview, setImagePreview] = useState(null);

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
		formData.append("title", title);
		formData.append("body", body);
		formData.append("category", category);

		const { data } = await API.createIssue(formData);
		console.log(data);
	};

	const onTitledChange = (e) => setTitle(e.target.value);
	const onBodyChange = (e) => setBody(e.target.value);
	const onCategoryChange = (e) => setCategory(e.target.value);

	return (
		<Issue>
			{image && <Preview src={imgaePreview} />}
			<form style={{ backgroundColor: "white" }} onSubmit={createIssue}>
				<ImageUploadButton onUpload={onImageUpload} />
				{image && <CategorySelector onCategoryChange={onCategoryChange} />}
				{image && (
					<ContentInputField
						onTitledChange={onTitledChange}
						onBodyChange={onBodyChange}
					/>
				)}
				{image && <input type="submit" value="이슈 생성하기"></input>}
			</form>
		</Issue>
	);
}
