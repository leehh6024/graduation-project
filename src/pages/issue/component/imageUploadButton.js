import styled from "styled-components";

const Box = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	position: relative;
	width: 237px;
	height: 153px;
	border: 1px solid #d9d9d9;
	border-radius: 15px;
	margin: auto;

	& > img {
		width: 237px;
		height: 153px;
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

function ImageUploadButton({ onUpload }) {
	return (
		<Box>
			<img
				src="/photo.png"
				alt="ss"
				style={{
					width: "237px",
					height: "153px",
					margin: "auto",
					verticalAlign: "middle",
				}}
			/>
			<label htmlFor="button-upload"></label>
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
