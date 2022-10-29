import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../../../../common/context/store";
import ContentPreview from "./Contents.js";
import { Link } from "react-router-dom";
import { API } from "../../../../service";

export default function ContentsList({ tab }) {
	const [postList, setPostList] = useState([]);
	const { globalRef } = useContext(GlobalContext);
	// 지우지 마세요
	// const page = useContext(0);
	// const lastPost = useContext(0);

	useEffect(() => {
		getPostList();
	}, []);

	const getPostList = async () => {
		const postRequestObject = {
			location: globalRef.current.userLocation,
			// 지우지마세요
			// index: {
			// 	page,
			// 	lastPost,
			// },
		};
		const { data } = await API.getPostList(tab, postRequestObject);
		const userLocationPostList = data.data;
		console.log(userLocationPostList);
		setPostList(userLocationPostList);
	};

	return (
		<>
			{postList.map((post) => (
				<ContentPreview key={post.id} data={post} />
			))}
		</>
	);
}
