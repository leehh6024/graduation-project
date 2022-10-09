import GlobalContext from "../../common/context/store";
import { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import Preview from "./component/imagePreview";
import ImageUploadButton from "./component/imageUploadButton";
import ContentInputField from "./component/contentField";
import CategorySelector from "./component/classSelectList";
import { API } from "../../service.js";

const Issue = styled.div`
	position: relative;
	text-align: center;
	align: center;
	width: 100%;
	height: 100%;
	justify-content: center;
	align-items: center;
	background-color: white;
	margin: auto;
	width: 100%;
	min-height: 100vh;
	height: 100%;
	max-width: 430px;
	min-width: 320px;
	margin: auto;
	vertical-align: middle;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
		rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export default function IssuePage() {
	const { state, setState } = useContext(GlobalContext);
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
				lat: Number(state.userLocation.lat),
				lng: Number(state.userLocation.lng),
			},
		};
		formData.append("issue", issue);
		formData.append("image", image);

		const { data } = await API.createIssue(formData);
		console.log(data);
	};

	const onTitledChange = (e) => setTitle(e.target.value);
	const onBodyChange = (e) => setBody(e.target.value);
	const onCategoryChange = (e) => setCategory(e.target.value);

	return (
		<Issue>
			{image && <Preview src={imagePreview} />}

			<ImageUploadButton onUpload={onImageUpload} />

			{image && <CategorySelector onCategoryChange={onCategoryChange} />}
			{image && (
				<ContentInputField
					onTitledChange={onTitledChange}
					onBodyChange={onBodyChange}
				/>
			)}
			{image && (
				<button
					style={{
						position: "absolute",
						left: "24px",
						top: "833px",
						width: "382px",
						height: "45px",
						fontSize: "16px",
						border: "none",
						fontFamily: "Pretendard",
						fontStyle: "bold",
						fontWeight: "700",
						color: "white",
						backgroundColor: "#0EE163",
					}}
					type="button"
					onClick={createIssue}
				>
					이슈 등록하기
				</button>
			)}
		</Issue>
	);
}
