import React from "react";
import styled from "styled-components";

const Box = styled.div`
	display: flex;
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
`;
export default function ResolveAddButton({ onFileChange }) {
	return (
		<Box>
			<img src="/community/btn-upload-image.png" alt="plus-icon" />
			<label htmlFor="riding-picture" />
			<input
				id="riding-picture"
				type="file"
				accept="image/jpg, image/png, image/jpeg"
				onChange={onFileChange}
			/>
		</Box>
	);
}
