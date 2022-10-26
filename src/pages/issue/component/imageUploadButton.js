import styled from "styled-components";
import "./imageUploadButton.css";

const Box = styled.div`
	& > img {
		width: 210px;
		height: 210px;
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
		<>
			<Box className="Box">
				<img
					src="/photo.png"
					alt="ss"
					style={{
						width: "210px",
						height: "210px",
						margin: "auto",
						verticalAlign: "middle",
						borderRadius: "50%",
						boxShadow: "3px 9px 10px rgba(0,0,0,0.25)",
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
			<div className="info-text">이슈를 등록해 주세요</div>
			<div className="info-text2">촬영시 물체가 겹치지 않도록 촬영해주세요</div>
		</>
	);
}

export default ImageUploadButton;
