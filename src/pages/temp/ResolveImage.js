import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
	display: flex;
	position: relative;
	border: 1px solid #d9d9d9;
	border-radius: 15px;

	width: 80px;
	height: 80px;

	.remove {
		width: 20px;
		height: 20px;
		position: absolute;
		left: 84%;
		top: -9%;
	}

	.riding-picture {
		width: 100%;
		object-fit: contain;
	}
`;

export default function ResolveImage({ index, file, onRemovePicture }) {
	const [imgUrl, setImgUrl] = useState(null);

	const handleImgFile = useCallback(() => {
		if (file === null) return;

		let reader = new FileReader();
		reader.onloadend = () => {
			setImgUrl(reader.result);
		};

		reader.readAsDataURL(file);
	}, [file]);

	useEffect(() => {
		handleImgFile();
	}, [handleImgFile]);

	return (
		<Box>
			<img
				style={{ cursor: "pointer" }}
				className="remove"
				src="/community/remove.png"
				alt="icon-remove"
				onClick={() => onRemovePicture(index)}
			/>
			<img className="riding-picture" src={imgUrl} alt="riding-capture" />
		</Box>
	);
}
