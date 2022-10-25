import React, { useState } from "react";
import "./Contents.css";
import { API } from "../../../../service.js";
import { Link } from "react-router-dom";

export default function Contents() {
	// API에서 받아온 데이터로 address, title, contentsImage, Brush 개수 넣어주야지
	const [image, setImage] = useState("");
	const [address, setAddress] = useState("");
	const [title, setTitle] = useState("");
	// const [numOfBrush, setNumOfBrush] = useState(0);

	return (
		<div>
			<Link to="/contentsinfo" className="contents-container">
				<img className="contents-image" src={image} alt="contents" />
				<div className="contents-address">{address}주소</div>
				<div className="contents-title">{title}제목</div>
				<div className="contents-brush">
					<img src="/community/brush.png" alt="brush" />
					{/* {numOfBrush} */}
				</div>
			</Link>
		</div>
	);
}

// for (let i = 0; i < 갯수; i++){
//     { <Post data={받아온데이터} onClick={ } /> }

// }
