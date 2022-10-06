import styled from "styled-components";
import IconPlus from "../../images/plus.png";

const Box = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;

	border: 1px solid #d9d9d9;
	border-radius: 15px;

	& > img {
		width: 22px;
		height: 22px;
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
	}

	label {
		cursor: pointer;
	}
`;

function ImageUploadButton({ onUpload }) {
	return (
		<Box>
			<label htmlFor="button-upload">
				이미지
				<br />
				업로드
			</label>
			<input
				id="button-upload"
				type="file"
				accept="image/jpg, image/png, image/jpeg"
				onChange={onUpload}
			/>
		</Box>
	);
}

export default ImageUploadButton;
