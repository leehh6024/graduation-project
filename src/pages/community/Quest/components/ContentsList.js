import React, { useEffect, useState, useContext } from "react";
import GlobalContext from "../../../../common/context/store";
import PostPreview from "../../PostPreview.js";
import styled from "styled-components";
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
		const data = await API.getPostList(tab, postRequestObject);
		if (!data.success) alert(data.message);

		const userLocationPostList = data.data;
		setPostList(userLocationPostList);
	};
	console.log(postList);
	return (
		<>
			<ContentsListContainer>
				{postList.map((post) => (
					<PostPreview key={post.id} data={post} />
				))}
			</ContentsListContainer>
		</>
	);
}

const ContentsListContainer = styled.div`
	top: 100px;
	width: 100%;
	overflow: scroll;
`;
